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

import org.openapis.openapi.models.operations.CreateAliasSecurity;
import org.openapis.openapi.models.operations.CreateAliasRequest;
import org.openapis.openapi.models.operations.CreateAliasResponse;
import org.openapis.openapi.models.shared.CreateAliasModel;
import org.openapis.openapi.models.shared.SnippetModel;
import org.openapis.openapi.models.shared.MetaTagModel;
import org.openapis.openapi.models.shared.DestinationModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAliasRequest req = new CreateAliasRequest() {{
                createAliasModel = new CreateAliasModel() {{
                    destinations = new org.openapis.openapi.models.shared.DestinationModel[]{{
                        add(new DestinationModel() {{
                            country = "Montenegro";
                            os = "distinctio";
                            url = "quibusdam";
                        }}),
                        add(new DestinationModel() {{
                            country = "Mozambique";
                            os = "nulla";
                            url = "corrupti";
                        }}),
                        add(new DestinationModel() {{
                            country = "Suriname";
                            os = "vel";
                            url = "error";
                        }}),
                    }};
                    metatags = new org.openapis.openapi.models.shared.MetaTagModel[]{{
                        add(new MetaTagModel() {{
                            content = "suscipit";
                            name = "iure";
                        }}),
                        add(new MetaTagModel() {{
                            content = "magnam";
                            name = "debitis";
                        }}),
                        add(new MetaTagModel() {{
                            content = "ipsa";
                            name = "delectus";
                        }}),
                    }};
                    snippets = new org.openapis.openapi.models.shared.SnippetModel[]{{
                        add(new SnippetModel() {{
                            id = "suscipit";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("minus", "placeat");
                                put("voluptatum", "iusto");
                            }};
                        }}),
                        add(new SnippetModel() {{
                            id = "excepturi";
                            parameters = new java.util.HashMap<String, String>() {{
                                put("recusandae", "temporibus");
                                put("ab", "quis");
                            }};
                        }}),
                    }};
                }};
                aliasName = "veritatis";
                domainName = "deserunt";
            }}            

            CreateAliasResponse res = sdk.alias.createAlias(req, new CreateAliasSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.createAliasResponseModel.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### alias

* `createAlias` - Create alias
* `deleteAlias` - Delete alias
* `getAlias` - Get alias
* `getAliases` - Get aliases by domain
* `updateAlias` - Update alias

### click

* `getClicks` - Get clicks

### statistics

* `getStatistics` - Get clicks statistics
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
