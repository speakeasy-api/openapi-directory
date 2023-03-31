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

import org.openapis.openapi.models.operations.GroupsSettingsGroupsGetSecurity;
import org.openapis.openapi.models.operations.GroupsSettingsGroupsGetPathParams;
import org.openapis.openapi.models.operations.GroupsSettingsGroupsGetQueryParams;
import org.openapis.openapi.models.operations.GroupsSettingsGroupsGetRequest;
import org.openapis.openapi.models.operations.GroupsSettingsGroupsGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupsSettingsGroupsGetRequest req = new GroupsSettingsGroupsGetRequest() {{
                security = new GroupsSettingsGroupsGetSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GroupsSettingsGroupsGetPathParams() {{
                    groupUniqueId = "corrupti";
                }};
                queryParams = new GroupsSettingsGroupsGetQueryParams() {{
                    alt = "json";
                    fields = "distinctio";
                    key = "quibusdam";
                    oauthToken = "unde";
                    prettyPrint = false;
                    quotaUser = "nulla";
                    userIp = "corrupti";
                }};
            }};            

            GroupsSettingsGroupsGetResponse res = sdk.groups.groupsSettingsGroupsGet(req);

            if (res.groups.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### groups

* `groupsSettingsGroupsGet` - Gets one resource by id.
* `groupsSettingsGroupsPatch` - Updates an existing resource. This method supports patch semantics.
* `groupsSettingsGroupsUpdate` - Updates an existing resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
