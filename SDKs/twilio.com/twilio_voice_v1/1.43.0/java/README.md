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
import org.openapis.openapi.models.operations.CreateByocTrunkCreateByocTrunkRequest;
import org.openapis.openapi.models.operations.CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum;
import org.openapis.openapi.models.operations.CreateByocTrunkResponse;
import org.openapis.openapi.models.operations.CreateByocTrunkSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateByocTrunkCreateByocTrunkRequest req = new CreateByocTrunkCreateByocTrunkRequest() {{
                cnamLookupEnabled = false;
                connectionPolicySid = "corrupti";
                friendlyName = "provident";
                fromDomainSid = "distinctio";
                statusCallbackMethod = CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum.DELETE;
                statusCallbackUrl = "https://tidy-mascara.org";
                voiceFallbackMethod = CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum.POST;
                voiceFallbackUrl = "https://present-giggle.info";
                voiceMethod = CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum.GET;
                voiceUrl = "https://awesome-voter.biz";
            }};            

            CreateByocTrunkResponse res = sdk.createByocTrunk(req, new CreateByocTrunkSecurity("suscipit", "molestiae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.voiceV1ByocTrunk != null) {
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

* [createByocTrunk](docs/sdk/README.md#createbyoctrunk)
* [createConnectionPolicy](docs/sdk/README.md#createconnectionpolicy)
* [createConnectionPolicyTarget](docs/sdk/README.md#createconnectionpolicytarget)
* [createDialingPermissionsCountryBulkUpdate](docs/sdk/README.md#createdialingpermissionscountrybulkupdate) - Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
* [createIpRecord](docs/sdk/README.md#createiprecord)
* [createSourceIpMapping](docs/sdk/README.md#createsourceipmapping)
* [deleteArchivedCall](docs/sdk/README.md#deletearchivedcall) - Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.
* [deleteByocTrunk](docs/sdk/README.md#deletebyoctrunk)
* [deleteConnectionPolicy](docs/sdk/README.md#deleteconnectionpolicy)
* [deleteConnectionPolicyTarget](docs/sdk/README.md#deleteconnectionpolicytarget)
* [deleteIpRecord](docs/sdk/README.md#deleteiprecord)
* [deleteSourceIpMapping](docs/sdk/README.md#deletesourceipmapping)
* [fetchByocTrunk](docs/sdk/README.md#fetchbyoctrunk)
* [fetchConnectionPolicy](docs/sdk/README.md#fetchconnectionpolicy)
* [fetchConnectionPolicyTarget](docs/sdk/README.md#fetchconnectionpolicytarget)
* [fetchDialingPermissionsCountry](docs/sdk/README.md#fetchdialingpermissionscountry) - Retrieve voice dialing country permissions identified by the given ISO country code
* [fetchDialingPermissionsSettings](docs/sdk/README.md#fetchdialingpermissionssettings) - Retrieve voice dialing permissions inheritance for the sub-account
* [fetchIpRecord](docs/sdk/README.md#fetchiprecord)
* [fetchSourceIpMapping](docs/sdk/README.md#fetchsourceipmapping)
* [listByocTrunk](docs/sdk/README.md#listbyoctrunk)
* [listConnectionPolicy](docs/sdk/README.md#listconnectionpolicy)
* [listConnectionPolicyTarget](docs/sdk/README.md#listconnectionpolicytarget)
* [listDialingPermissionsCountry](docs/sdk/README.md#listdialingpermissionscountry) - Retrieve all voice dialing country permissions for this account
* [listDialingPermissionsHrsPrefixes](docs/sdk/README.md#listdialingpermissionshrsprefixes) - Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
* [listIpRecord](docs/sdk/README.md#listiprecord)
* [listSourceIpMapping](docs/sdk/README.md#listsourceipmapping)
* [updateByocTrunk](docs/sdk/README.md#updatebyoctrunk)
* [updateConnectionPolicy](docs/sdk/README.md#updateconnectionpolicy)
* [updateConnectionPolicyTarget](docs/sdk/README.md#updateconnectionpolicytarget)
* [updateDialingPermissionsSettings](docs/sdk/README.md#updatedialingpermissionssettings) - Update voice dialing permissions inheritance for the sub-account
* [updateIpRecord](docs/sdk/README.md#updateiprecord)
* [updateSourceIpMapping](docs/sdk/README.md#updatesourceipmapping)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
