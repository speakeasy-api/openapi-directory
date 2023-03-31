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

import org.openapis.openapi.models.operations.MybusinessaccountmanagementAccountsCreateQueryParams;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementAccountsCreateRequest;
import org.openapis.openapi.models.operations.MybusinessaccountmanagementAccountsCreateResponse;
import org.openapis.openapi.models.shared.AccountTypeEnum;
import org.openapis.openapi.models.shared.AccountInput;
import org.openapis.openapi.models.shared.OrganizationInfoInput;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessaccountmanagementAccountsCreateRequest req = new MybusinessaccountmanagementAccountsCreateRequest() {{
                queryParams = new MybusinessaccountmanagementAccountsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new AccountInput() {{
                    accountName = "deserunt";
                    name = "suscipit";
                    organizationInfo = new OrganizationInfoInput() {{
                        address = new PostalAddress() {{
                            addressLines = new String[]{{
                                add("magnam"),
                                add("debitis"),
                            }};
                            administrativeArea = "ipsa";
                            languageCode = "delectus";
                            locality = "tempora";
                            organization = "suscipit";
                            postalCode = "78545";
                            recipients = new String[]{{
                                add("recusandae"),
                                add("temporibus"),
                            }};
                            regionCode = "ab";
                            revision = 337396;
                            sortingCode = "veritatis";
                            sublocality = "deserunt";
                        }};
                    }};
                    primaryOwner = "perferendis";
                    type = "PERSONAL";
                }};
            }};            

            MybusinessaccountmanagementAccountsCreateResponse res = sdk.accounts.mybusinessaccountmanagementAccountsCreate(req);

            if (res.account.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### accounts

* `mybusinessaccountmanagementAccountsCreate` - Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups.
* `mybusinessaccountmanagementAccountsGet` - Gets the specified account. Returns `NOT_FOUND` if the account does not exist or if the caller does not have access rights to it.
* `mybusinessaccountmanagementAccountsInvitationsAccept` - Accepts the specified invitation.
* `mybusinessaccountmanagementAccountsInvitationsDecline` - Declines the specified invitation.
* `mybusinessaccountmanagementAccountsInvitationsList` - Lists pending invitations for the specified account.
* `mybusinessaccountmanagementAccountsList` - Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.

### locations

* `mybusinessaccountmanagementLocationsAdminsCreate` - Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.
* `mybusinessaccountmanagementLocationsAdminsDelete` - Removes the specified admin as a manager of the specified location.
* `mybusinessaccountmanagementLocationsAdminsList` - Lists all of the admins for the specified location.
* `mybusinessaccountmanagementLocationsAdminsPatch` - Updates the Admin for the specified location. Only the AdminRole of the Admin can be updated.
* `mybusinessaccountmanagementLocationsTransfer` - Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
