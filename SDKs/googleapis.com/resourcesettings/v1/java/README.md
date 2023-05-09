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
import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsGetRequest;
import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsGetResponse;
import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsGetSecurity;
import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResourcesettingsProjectsSettingsGetRequest req = new ResourcesettingsProjectsSettingsGetRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
                view = ResourcesettingsProjectsSettingsGetViewEnum.SETTING_VIEW_BASIC;
            }};            

            ResourcesettingsProjectsSettingsGetResponse res = sdk.projects.resourcesettingsProjectsSettingsGet(req, new ResourcesettingsProjectsSettingsGetSecurity("iure", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudResourcesettingsV1Setting != null) {
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


### [projects](docs/projects/README.md)

* [resourcesettingsProjectsSettingsGet](docs/projects/README.md#resourcesettingsprojectssettingsget) - Returns a specified setting. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the setting does not exist.
* [resourcesettingsProjectsSettingsList](docs/projects/README.md#resourcesettingsprojectssettingslist) - Lists all the settings that are available on the Cloud resource `parent`.
* [resourcesettingsProjectsSettingsPatch](docs/projects/README.md#resourcesettingsprojectssettingspatch) - Updates a specified setting. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the setting does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.FAILED_PRECONDITION` if the setting is flagged as read only. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the setting value. On success, the response will contain only `name`, `local_value` and `etag`. The `metadata` and `effective_value` cannot be updated through this API. Note: the supplied setting will perform a full overwrite of the `local_value` field.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
