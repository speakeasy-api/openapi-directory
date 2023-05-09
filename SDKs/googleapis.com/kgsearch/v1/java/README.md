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
import org.openapis.openapi.models.operations.KgsearchEntitiesSearchRequest;
import org.openapis.openapi.models.operations.KgsearchEntitiesSearchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KgsearchEntitiesSearchRequest req = new KgsearchEntitiesSearchRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "unde";
                ids = new String[]{{
                    add("corrupti"),
                    add("illum"),
                    add("vel"),
                    add("error"),
                }};
                indent = false;
                key = "deserunt";
                languages = new String[]{{
                    add("iure"),
                    add("magnam"),
                }};
                limit = 891773L;
                oauthToken = "ipsa";
                prefix = false;
                prettyPrint = false;
                query = "delectus";
                quotaUser = "tempora";
                types = new String[]{{
                    add("molestiae"),
                    add("minus"),
                }};
                uploadType = "placeat";
                uploadProtocol = "voluptatum";
            }};            

            KgsearchEntitiesSearchResponse res = sdk.entities.kgsearchEntitiesSearch(req);

            if (res.searchResponse != null) {
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


### [entities](docs/entities/README.md)

* [kgsearchEntitiesSearch](docs/entities/README.md#kgsearchentitiessearch) - Searches Knowledge Graph for entities that match the constraints. A list of matched entities will be returned in response, which will be in JSON-LD format and compatible with http://schema.org
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
