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

import org.openapis.openapi.models.operations.SiteVerificationWebResourceDeleteSecurity;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceDeletePathParams;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceDeleteQueryParams;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceDeleteRequest;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SiteVerificationWebResourceDeleteRequest req = new SiteVerificationWebResourceDeleteRequest() {{
                security = new SiteVerificationWebResourceDeleteSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new SiteVerificationWebResourceDeletePathParams() {{
                    id = "corrupti";
                }};
                queryParams = new SiteVerificationWebResourceDeleteQueryParams() {{
                    alt = "json";
                    fields = "provident";
                    key = "distinctio";
                    oauthToken = "quibusdam";
                    prettyPrint = false;
                    quotaUser = "unde";
                    userIp = "nulla";
                }};
            }};            

            SiteVerificationWebResourceDeleteResponse res = sdk.webResource.siteVerificationWebResourceDelete(req);

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


### webResource

* `siteVerificationWebResourceDelete` - Relinquish ownership of a website or domain.
* `siteVerificationWebResourceGet` - Get the most current data for a website or domain.
* `siteVerificationWebResourceGetToken` - Get a verification token for placing on a website or domain.
* `siteVerificationWebResourceInsert` - Attempt verification of a website or domain.
* `siteVerificationWebResourceList` - Get the list of your verified websites and domains.
* `siteVerificationWebResourcePatch` - Modify the list of owners for your website or domain. This method supports patch semantics.
* `siteVerificationWebResourceUpdate` - Modify the list of owners for your website or domain.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
