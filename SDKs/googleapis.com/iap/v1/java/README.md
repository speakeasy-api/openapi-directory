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

import org.openapis.openapi.models.operations.IapProjectsBrandsCreateSecurity;
import org.openapis.openapi.models.operations.IapProjectsBrandsCreatePathParams;
import org.openapis.openapi.models.operations.IapProjectsBrandsCreateQueryParams;
import org.openapis.openapi.models.operations.IapProjectsBrandsCreateRequest;
import org.openapis.openapi.models.operations.IapProjectsBrandsCreateResponse;
import org.openapis.openapi.models.shared.BrandInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IapProjectsBrandsCreateRequest req = new IapProjectsBrandsCreateRequest() {{
                security = new IapProjectsBrandsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new IapProjectsBrandsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new IapProjectsBrandsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new BrandInput() {{
                    applicationTitle = "suscipit";
                    supportEmail = "iure";
                }};
            }};            

            IapProjectsBrandsCreateResponse res = sdk.projects.iapProjectsBrandsCreate(req);

            if (res.brand.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `iapProjectsBrandsCreate` - Constructs a new OAuth brand for the project if one does not exist. The created brand is "internal only", meaning that OAuth clients created under it only accept requests from users who belong to the same Google Workspace organization as the project. The brand is created in an un-reviewed status. NOTE: The "internal only" status can be manually changed in the Google Cloud Console. Requires that a brand does not already exist for the project, and that the specified support email is owned by the caller.
* `iapProjectsBrandsIdentityAwareProxyClientsCreate` - Creates an Identity Aware Proxy (IAP) OAuth client. The client is owned by IAP. Requires that the brand for the project exists and that it is set for internal-only use.
* `iapProjectsBrandsIdentityAwareProxyClientsList` - Lists the existing clients for the brand.
* `iapProjectsBrandsIdentityAwareProxyClientsResetSecret` - Resets an Identity Aware Proxy (IAP) OAuth client secret. Useful if the secret was compromised. Requires that the client is owned by IAP.
* `iapProjectsBrandsList` - Lists the existing brands for the project.
* `iapProjectsIapTunnelLocationsDestGroupsCreate` - Creates a new TunnelDestGroup.
* `iapProjectsIapTunnelLocationsDestGroupsDelete` - Deletes a TunnelDestGroup.
* `iapProjectsIapTunnelLocationsDestGroupsGet` - Retrieves an existing TunnelDestGroup.
* `iapProjectsIapTunnelLocationsDestGroupsList` - Lists the existing TunnelDestGroups. To group across all locations, use a `-` as the location ID. For example: `/v1/projects/123/iap_tunnel/locations/-/destGroups`
* `iapProjectsIapTunnelLocationsDestGroupsPatch` - Updates a TunnelDestGroup.

### v1

* `iapGetIamPolicy` - Gets the access control policy for an Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* `iapGetIapSettings` - Gets the IAP settings on a particular IAP protected resource.
* `iapSetIamPolicy` - Sets the access control policy for an Identity-Aware Proxy protected resource. Replaces any existing policy. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* `iapTestIamPermissions` - Returns permissions that a caller has on the Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* `iapUpdateIapSettings` - Updates the IAP settings on a particular IAP protected resource. It replaces all fields unless the `update_mask` is set.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
