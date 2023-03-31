# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteAccountAccessConsentsConsentIdSecurity;
import org.openapis.openapi.models.operations.DeleteAccountAccessConsentsConsentIdPathParams;
import org.openapis.openapi.models.operations.DeleteAccountAccessConsentsConsentIdHeaders;
import org.openapis.openapi.models.operations.DeleteAccountAccessConsentsConsentIdRequest;
import org.openapis.openapi.models.operations.DeleteAccountAccessConsentsConsentIdResponse;
import org.openapis.openapi.models.shared.SchemeClientCredentialsToken;
import org.openapis.openapi.models.shared.SchemeClientID;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAccountAccessConsentsConsentIdRequest req = new DeleteAccountAccessConsentsConsentIdRequest() {{
                security = new DeleteAccountAccessConsentsConsentIdSecurity() {{
                    clientCredentialsToken = new SchemeClientCredentialsToken() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    clientId = new SchemeClientID() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new DeleteAccountAccessConsentsConsentIdPathParams() {{
                    consentId = "corrupti";
                }};
                headers = new DeleteAccountAccessConsentsConsentIdHeaders() {{
                    sandboxId = "provident";
                    xCustomerUserAgent = "distinctio";
                    xFapiAuthDate = "quibusdam";
                    xFapiCustomerIpAddress = "unde";
                    xFapiInteractionId = "nulla";
                }};
            }};            

            DeleteAccountAccessConsentsConsentIdResponse res = sdk.accountAccess.deleteAccountAccessConsentsConsentId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### accountAccess

* `deleteAccountAccessConsentsConsentId` - Delete Account Access Consents
* `getAccountAccessConsentsConsentId` - Get Account Access Consents
* `postAccountAccessConsents` - Create Account Access Consents

### accounts

* `getAccounts` - Get Accounts
* `getAccountsAccountId` - Get Accounts

### balances

* `getAccountsAccountIdBalances` - Get Balances

### beneficiaries

* `getAccountsAccountIdBeneficiaries` - Get Beneficiaries

### parties

* `getAccountsAccountIdParties` - Get Parties
* `getAccountsAccountIdParty` - Get Party
* `getParty` - Get Party

### sandbox

* `deleteSandboxSandboxId` - Delete Sandbox
* `getSandboxSandboxId` - Export Sandbox
* `postSandbox` - Create Sandbox
* `putSandbox` - Import Sandbox

### scheduledPayments

* `getAccountsAccountIdScheduledPayments` - Get Scheduled Payments

### standingOrders

* `getAccountsAccountIdStandingOrders` - Get Standing Orders

### statements

* `getAccountsAccountIdStatements` - Get Statements
* `getAccountsAccountIdStatementsStatementId` - Get Statements
* `getAccountsAccountIdStatementsStatementIdFile` - Get Statements

### transactions

* `getAccountsAccountIdStatementsStatementIdTransactions` - Get Transactions
* `getAccountsAccountIdTransactions` - Get Transactions
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
