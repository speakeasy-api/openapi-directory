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

import org.openapis.openapi.models.operations.AddUserToAccountRequestBodyAccount;
import org.openapis.openapi.models.operations.AddUserToAccountRequestBodyUsersIdentification;
import org.openapis.openapi.models.operations.AddUserToAccountRequestBodyUsers;
import org.openapis.openapi.models.operations.AddUserToAccountRequestBody;
import org.openapis.openapi.models.operations.AddUserToAccountRequest;
import org.openapis.openapi.models.operations.AddUserToAccountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddUserToAccountRequest req = new AddUserToAccountRequest() {{
                request = new AddUserToAccountRequestBody() {{
                    account = new AddUserToAccountRequestBodyAccount() {{
                        accountId = "corrupti";
                        domain = "provident";
                    }};
                    users = new org.openapis.openapi.models.operations.AddUserToAccountRequestBodyUsers[]{{
                        add(new AddUserToAccountRequestBodyUsers() {{
                            identification = new AddUserToAccountRequestBodyUsersIdentification() {{
                                email = "Leda_Stiedemann@hotmail.com";
                                userId = "vel";
                            }};
                        }}),
                        add(new AddUserToAccountRequestBodyUsers() {{
                            identification = new AddUserToAccountRequestBodyUsersIdentification() {{
                                email = "Luna.Hoppe@yahoo.com";
                                userId = "debitis";
                            }};
                        }}),
                        add(new AddUserToAccountRequestBodyUsers() {{
                            identification = new AddUserToAccountRequestBodyUsersIdentification() {{
                                email = "Vincenzo.Goldner@gmail.com";
                                userId = "minus";
                            }};
                        }}),
                    }};
                }};
            }};            

            AddUserToAccountResponse res = sdk.accounts.addUserToAccount(req);

            if (res.addUserToAccount201ApplicationJSONObject.isPresent()) {
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

* `addUserToAccount` - Add users to an account
* `deleteAccount` - Delete account
* `removeUserFromAccount` - Remove user from account
* `upsertAccount` - Create or update account

### events

* `getEvents` - Get events
* `trackJourneyEvent` - Track event

### properties

* `getAccountProperties` - Get account properties
* `getUserProperties` - Get user properties

### segments

* `getAccountSegments` - Get account segments
* `getUserSegments` - Get user segments

### track

* `trackEvent` - Track event

### users

* `deleteUser` - Delete user
* `link` - Link web activity to user
* `upsertUser` - Create or update user

### validation

* `getValidity` - Validate API key

### websites

* `getTrackingSnippet` - Get snippet for a website
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
