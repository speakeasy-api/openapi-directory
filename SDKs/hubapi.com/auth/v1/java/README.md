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
import org.openapis.openapi.models.operations.GetOauthV1AccessTokensTokenGetRequest;
import org.openapis.openapi.models.operations.GetOauthV1AccessTokensTokenGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOauthV1AccessTokensTokenGetRequest req = new GetOauthV1AccessTokensTokenGetRequest("corrupti");            

            GetOauthV1AccessTokensTokenGetResponse res = sdk.accessTokens.getOauthV1AccessTokensTokenGet(req);

            if (res.accessTokenInfoResponse != null) {
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


### [accessTokens](docs/accesstokens/README.md)

* [getOauthV1AccessTokensTokenGet](docs/accesstokens/README.md#getoauthv1accesstokenstokenget)

### [refreshTokens](docs/refreshtokens/README.md)

* [deleteOauthV1RefreshTokensTokenArchive](docs/refreshtokens/README.md#deleteoauthv1refreshtokenstokenarchive)
* [getOauthV1RefreshTokensTokenGet](docs/refreshtokens/README.md#getoauthv1refreshtokenstokenget)

### [tokens](docs/tokens/README.md)

* [postOauthV1TokenCreate](docs/tokens/README.md#postoauthv1tokencreate)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
