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
import org.openapis.openapi.models.operations.SiteVerificationWebResourceDeleteRequest;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceDeleteResponse;
import org.openapis.openapi.models.operations.SiteVerificationWebResourceDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SiteVerificationWebResourceDeleteRequest req = new SiteVerificationWebResourceDeleteRequest("corrupti") {{
                alt = AltEnum.JSON;
                fields = "provident";
                key = "distinctio";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "unde";
                userIp = "nulla";
            }};            

            SiteVerificationWebResourceDeleteResponse res = sdk.webResource.siteVerificationWebResourceDelete(req, new SiteVerificationWebResourceDeleteSecurity("corrupti", "illum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [webResource](docs/webresource/README.md)

* [siteVerificationWebResourceDelete](docs/webresource/README.md#siteverificationwebresourcedelete) - Relinquish ownership of a website or domain.
* [siteVerificationWebResourceGet](docs/webresource/README.md#siteverificationwebresourceget) - Get the most current data for a website or domain.
* [siteVerificationWebResourceGetToken](docs/webresource/README.md#siteverificationwebresourcegettoken) - Get a verification token for placing on a website or domain.
* [siteVerificationWebResourceInsert](docs/webresource/README.md#siteverificationwebresourceinsert) - Attempt verification of a website or domain.
* [siteVerificationWebResourceList](docs/webresource/README.md#siteverificationwebresourcelist) - Get the list of your verified websites and domains.
* [siteVerificationWebResourcePatch](docs/webresource/README.md#siteverificationwebresourcepatch) - Modify the list of owners for your website or domain. This method supports patch semantics.
* [siteVerificationWebResourceUpdate](docs/webresource/README.md#siteverificationwebresourceupdate) - Modify the list of owners for your website or domain.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
