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

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateChannelCreateChannelRequest;
import org.openapis.openapi.models.operations.CreateChannelRequest;
import org.openapis.openapi.models.operations.CreateChannelResponse;
import org.openapis.openapi.models.operations.CreateChannelSecurity;
import org.openapis.openapi.models.shared.ChannelEnumChannelTypeEnum;
import org.openapis.openapi.models.shared.ChannelEnumWebhookEnabledTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateChannelRequest req = new CreateChannelRequest("corrupti") {{
                requestBody = new CreateChannelCreateChannelRequest() {{
                    attributes = "provident";
                    createdBy = "distinctio";
                    dateCreated = OffsetDateTime.parse("2021-03-11T23:22:42.658Z");
                    dateUpdated = OffsetDateTime.parse("2021-05-14T08:28:11.899Z");
                    friendlyName = "illum";
                    type = ChannelEnumChannelTypeEnum.PUBLIC_;
                    uniqueName = "error";
                }};;
                xTwilioWebhookEnabled = ChannelEnumWebhookEnabledTypeEnum.FALSE;
            }};            

            CreateChannelResponse res = sdk.createChannel(req, new CreateChannelSecurity("suscipit", "iure") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.ipMessagingV2ServiceChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createChannel](docs/sdk/README.md#createchannel)
* [createChannelWebhook](docs/sdk/README.md#createchannelwebhook)
* [createCredential](docs/sdk/README.md#createcredential)
* [createInvite](docs/sdk/README.md#createinvite)
* [createMember](docs/sdk/README.md#createmember)
* [createMessage](docs/sdk/README.md#createmessage)
* [createRole](docs/sdk/README.md#createrole)
* [createService](docs/sdk/README.md#createservice)
* [createUser](docs/sdk/README.md#createuser)
* [deleteBinding](docs/sdk/README.md#deletebinding)
* [deleteChannel](docs/sdk/README.md#deletechannel)
* [deleteChannelWebhook](docs/sdk/README.md#deletechannelwebhook)
* [deleteCredential](docs/sdk/README.md#deletecredential)
* [deleteInvite](docs/sdk/README.md#deleteinvite)
* [deleteMember](docs/sdk/README.md#deletemember)
* [deleteMessage](docs/sdk/README.md#deletemessage)
* [deleteRole](docs/sdk/README.md#deleterole)
* [deleteService](docs/sdk/README.md#deleteservice)
* [deleteUser](docs/sdk/README.md#deleteuser)
* [deleteUserBinding](docs/sdk/README.md#deleteuserbinding)
* [deleteUserChannel](docs/sdk/README.md#deleteuserchannel)
* [fetchBinding](docs/sdk/README.md#fetchbinding)
* [fetchChannel](docs/sdk/README.md#fetchchannel)
* [fetchChannelWebhook](docs/sdk/README.md#fetchchannelwebhook)
* [fetchCredential](docs/sdk/README.md#fetchcredential)
* [fetchInvite](docs/sdk/README.md#fetchinvite)
* [fetchMember](docs/sdk/README.md#fetchmember)
* [fetchMessage](docs/sdk/README.md#fetchmessage)
* [fetchRole](docs/sdk/README.md#fetchrole)
* [fetchService](docs/sdk/README.md#fetchservice)
* [fetchUser](docs/sdk/README.md#fetchuser)
* [fetchUserBinding](docs/sdk/README.md#fetchuserbinding)
* [fetchUserChannel](docs/sdk/README.md#fetchuserchannel)
* [listBinding](docs/sdk/README.md#listbinding)
* [listChannel](docs/sdk/README.md#listchannel)
* [listChannelWebhook](docs/sdk/README.md#listchannelwebhook)
* [listCredential](docs/sdk/README.md#listcredential)
* [listInvite](docs/sdk/README.md#listinvite)
* [listMember](docs/sdk/README.md#listmember)
* [listMessage](docs/sdk/README.md#listmessage)
* [listRole](docs/sdk/README.md#listrole)
* [listService](docs/sdk/README.md#listservice)
* [listUser](docs/sdk/README.md#listuser)
* [listUserBinding](docs/sdk/README.md#listuserbinding)
* [listUserChannel](docs/sdk/README.md#listuserchannel)
* [updateChannel](docs/sdk/README.md#updatechannel)
* [updateChannelWebhook](docs/sdk/README.md#updatechannelwebhook)
* [updateCredential](docs/sdk/README.md#updatecredential)
* [updateMember](docs/sdk/README.md#updatemember)
* [updateMessage](docs/sdk/README.md#updatemessage)
* [updateRole](docs/sdk/README.md#updaterole)
* [updateService](docs/sdk/README.md#updateservice)
* [updateUser](docs/sdk/README.md#updateuser)
* [updateUserChannel](docs/sdk/README.md#updateuserchannel)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
