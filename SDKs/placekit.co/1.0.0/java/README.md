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
import org.openapis.openapi.models.operations.ReverseRequestBody;
import org.openapis.openapi.models.operations.ReverseRequestBodyLanguageEnum;
import org.openapis.openapi.models.operations.ReverseResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ReverseRequestBody req = new ReverseRequestBody() {{
                coordinates = "48.873662, 2.295063";
                countries = new String[]{{
                    add("distinctio"),
                    add("quibusdam"),
                    add("unde"),
                }};
                countryByIP = false;
                language = ReverseRequestBodyLanguageEnum.FR;
                maxResults = 857946L;
                types = new org.openapis.openapi.models.shared.TypesEnum[]{{
                    add(TypesEnum.MINUS_TOWNHALL),
                    add(TypesEnum.COUNTRY),
                    add(TypesEnum.MINUS_STREET),
                }};
            }};            

            ReverseResponse res = sdk.reverse(req);

            if (res.results != null) {
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

* [reverse](docs/sdk/README.md#reverse) - Reverse geocoding
* [search](docs/sdk/README.md#search) - Search for addresses
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
