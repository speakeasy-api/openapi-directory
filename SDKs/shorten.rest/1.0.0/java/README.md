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
import org.openapis.openapi.models.operations.CreateAliasRequest;
import org.openapis.openapi.models.operations.CreateAliasResponse;
import org.openapis.openapi.models.operations.CreateAliasSecurity;
import org.openapis.openapi.models.shared.CreateAliasModel;
import org.openapis.openapi.models.shared.DestinationModel;
import org.openapis.openapi.models.shared.MetaTagModel;
import org.openapis.openapi.models.shared.SnippetModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAliasRequest req = new CreateAliasRequest(                new CreateAliasModel() {{
                                destinations = new org.openapis.openapi.models.shared.DestinationModel[]{{
                                    add(new DestinationModel("unde") {{
                                        country = "Montenegro";
                                        os = "distinctio";
                                        url = "quibusdam";
                                    }}),
                                    add(new DestinationModel("vel") {{
                                        country = "Sweden";
                                        os = "corrupti";
                                        url = "illum";
                                    }}),
                                    add(new DestinationModel("iure") {{
                                        country = "Netherlands Antilles";
                                        os = "deserunt";
                                        url = "suscipit";
                                    }}),
                                }};
                                metatags = new org.openapis.openapi.models.shared.MetaTagModel[]{{
                                    add(new MetaTagModel("minus", "placeat") {{
                                        content = "debitis";
                                        name = "Lucia Goldner";
                                    }}),
                                    add(new MetaTagModel("ab", "quis") {{
                                        content = "voluptatum";
                                        name = "Miriam Huel";
                                    }}),
                                }};
                                snippets = new org.openapis.openapi.models.shared.SnippetModel[]{{
                                    add(new SnippetModel("sed") {{
                                        id = "a05dfc2d-df7c-4c78-8a1b-a928fc816742";
                                        parameters = new java.util.HashMap<String, String>() {{
                                            put("cum", "esse");
                                            put("ipsum", "excepturi");
                                            put("aspernatur", "perferendis");
                                            put("ad", "natus");
                                        }};
                                    }}),
                                }};
                            }};) {{
                aliasName = "iste";
                domainName = "dolor";
            }};            

            CreateAliasResponse res = sdk.alias.createAlias(req, new CreateAliasSecurity("natus") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.createAliasResponseModel != null) {
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


### [alias](docs/alias/README.md)

* [createAlias](docs/alias/README.md#createalias) - Create alias
* [deleteAlias](docs/alias/README.md#deletealias) - Delete alias
* [getAlias](docs/alias/README.md#getalias) - Get alias
* [getAliases](docs/alias/README.md#getaliases) - Get aliases by domain
* [updateAlias](docs/alias/README.md#updatealias) - Update alias

### [click](docs/click/README.md)

* [getClicks](docs/click/README.md#getclicks) - Get clicks

### [statistics](docs/statistics/README.md)

* [getStatistics](docs/statistics/README.md#getstatistics) - Get clicks statistics
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
