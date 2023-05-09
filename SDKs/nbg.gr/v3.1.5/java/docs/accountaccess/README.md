# accountAccess

### Available Operations

* [deleteAccountAccessConsentsConsentId](#deleteaccountaccessconsentsconsentid) - Delete Account Access Consents
* [getAccountAccessConsentsConsentId](#getaccountaccessconsentsconsentid) - Get Account Access Consents
* [postAccountAccessConsents](#postaccountaccessconsents) - Create Account Access Consents

## deleteAccountAccessConsentsConsentId

Delete Account Access Consents by Consent ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAccountAccessConsentsConsentIdRequest;
import org.openapis.openapi.models.operations.DeleteAccountAccessConsentsConsentIdResponse;
import org.openapis.openapi.models.operations.DeleteAccountAccessConsentsConsentIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAccountAccessConsentsConsentIdRequest req = new DeleteAccountAccessConsentsConsentIdRequest("vel", "error") {{
                xCustomerUserAgent = "deserunt";
                xFapiAuthDate = "suscipit";
                xFapiCustomerIpAddress = "iure";
                xFapiInteractionId = "magnam";
            }};            

            DeleteAccountAccessConsentsConsentIdResponse res = sdk.accountAccess.deleteAccountAccessConsentsConsentId(req, new DeleteAccountAccessConsentsConsentIdSecurity("debitis", "ipsa") {{
                clientCredentialsToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountAccessConsentsConsentId

Get Account Access Consents by Consent ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountAccessConsentsConsentIdRequest;
import org.openapis.openapi.models.operations.GetAccountAccessConsentsConsentIdResponse;
import org.openapis.openapi.models.operations.GetAccountAccessConsentsConsentIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountAccessConsentsConsentIdRequest req = new GetAccountAccessConsentsConsentIdRequest("delectus", "tempora") {{
                xCustomerUserAgent = "suscipit";
                xFapiAuthDate = "molestiae";
                xFapiCustomerIpAddress = "minus";
                xFapiInteractionId = "placeat";
            }};            

            GetAccountAccessConsentsConsentIdResponse res = sdk.accountAccess.getAccountAccessConsentsConsentId(req, new GetAccountAccessConsentsConsentIdSecurity("voluptatum", "iusto") {{
                clientCredentialsToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.obReadConsentResponse1 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAccountAccessConsents

Create Account Access Consents

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAccountAccessConsentsRequest;
import org.openapis.openapi.models.operations.PostAccountAccessConsentsResponse;
import org.openapis.openapi.models.operations.PostAccountAccessConsentsSecurity;
import org.openapis.openapi.models.shared.OBExternalPermissions1CodeEnum;
import org.openapis.openapi.models.shared.OBReadConsent1;
import org.openapis.openapi.models.shared.OBReadData1;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAccountAccessConsentsRequest req = new PostAccountAccessConsentsRequest("excepturi") {{
                obReadConsent1 = new OBReadConsent1(                new OBReadData1(                new org.openapis.openapi.models.shared.OBExternalPermissions1CodeEnum[]{{
                                                    add(OBExternalPermissions1CodeEnum.READ_TRANSACTIONS_DEBITS),
                                                    add(OBExternalPermissions1CodeEnum.READ_TRANSACTIONS_BASIC),
                                                }}) {{
                                    expirationDateTime = OffsetDateTime.parse("2022-08-30T20:24:33.984Z");
                                    transactionFromDateTime = OffsetDateTime.parse("2022-05-09T10:00:51.349Z");
                                    transactionToDateTime = OffsetDateTime.parse("2022-08-19T14:12:14.246Z");
                                }};,                 new java.util.HashMap<String, Object>() {{
                                    put("sapiente", "quo");
                                    put("odit", "at");
                                    put("at", "maiores");
                                    put("molestiae", "quod");
                                }});;
                xCustomerUserAgent = "quod";
                xFapiAuthDate = "esse";
                xFapiCustomerIpAddress = "totam";
                xFapiInteractionId = "porro";
            }};            

            PostAccountAccessConsentsResponse res = sdk.accountAccess.postAccountAccessConsents(req, new PostAccountAccessConsentsSecurity("dolorum", "dicta") {{
                clientCredentialsToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.obReadConsentResponse1 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
