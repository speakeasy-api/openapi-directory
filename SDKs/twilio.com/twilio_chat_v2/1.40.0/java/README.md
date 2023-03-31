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

import org.openapis.openapi.models.operations.CreateChannelSecurity;
import org.openapis.openapi.models.operations.CreateChannelPathParams;
import org.openapis.openapi.models.operations.CreateChannelHeaders;
import org.openapis.openapi.models.operations.CreateChannelCreateChannelRequest;
import org.openapis.openapi.models.operations.CreateChannelRequest;
import org.openapis.openapi.models.operations.CreateChannelResponse;
import org.openapis.openapi.models.shared.ChannelEnumChannelTypeEnum;
import org.openapis.openapi.models.shared.ChannelEnumWebhookEnabledTypeEnum;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateChannelRequest req = new CreateChannelRequest() {{
                security = new CreateChannelSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateChannelPathParams() {{
                    serviceSid = "corrupti";
                }};
                headers = new CreateChannelHeaders() {{
                    xTwilioWebhookEnabled = "false";
                }};
                request = new CreateChannelCreateChannelRequest() {{
                    attributes = "distinctio";
                    createdBy = "quibusdam";
                    dateCreated = "2021-04-14T16:47:33.722Z";
                    dateUpdated = "2021-04-22T12:08:58.275Z";
                    friendlyName = "vel";
                    type = "private";
                    uniqueName = "deserunt";
                }};
            }};            

            CreateChannelResponse res = sdk.createChannel(req);

            if (res.chatV2ServiceChannel.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createChannel`
* `createChannelWebhook`
* `createCredential`
* `createInvite`
* `createMember`
* `createMessage`
* `createRole`
* `createService`
* `createUser`
* `deleteBinding`
* `deleteChannel`
* `deleteChannelWebhook`
* `deleteCredential`
* `deleteInvite`
* `deleteMember`
* `deleteMessage`
* `deleteRole`
* `deleteService`
* `deleteUser`
* `deleteUserBinding`
* `deleteUserChannel` - Removes User from selected Channel.
* `fetchBinding`
* `fetchChannel`
* `fetchChannelWebhook`
* `fetchCredential`
* `fetchInvite`
* `fetchMember`
* `fetchMessage`
* `fetchRole`
* `fetchService`
* `fetchUser`
* `fetchUserBinding`
* `fetchUserChannel`
* `listBinding`
* `listChannel`
* `listChannelWebhook`
* `listCredential`
* `listInvite`
* `listMember`
* `listMessage`
* `listRole`
* `listService`
* `listUser`
* `listUserBinding`
* `listUserChannel` - List all Channels for a given User.
* `updateChannel`
* `updateChannelWebhook`
* `updateCredential`
* `updateMember`
* `updateMessage`
* `updateRole`
* `updateService`
* `updateUser`
* `updateUserChannel`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
