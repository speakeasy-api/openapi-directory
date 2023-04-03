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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateCorpusRequest;
import org.openapis.openapi.models.operations.CreateCorpusResponse;
import org.openapis.openapi.models.shared.AdminCreateCorpusRequest;
import org.openapis.openapi.models.shared.AdminCorpus;
import org.openapis.openapi.models.shared.AdminFilterAttribute;
import org.openapis.openapi.models.shared.AdminFilterAttributeTypeEnum;
import org.openapis.openapi.models.shared.AdminFilterAttributeLevelEnum;
import org.openapis.openapi.models.shared.AdminDimension;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateCorpusRequest req = new CreateCorpusRequest() {{
                adminCreateCorpusRequest = new AdminCreateCorpusRequest() {{
                    corpus = new AdminCorpus() {{
                        customDimensions = new org.openapis.openapi.models.shared.AdminDimension[]{{
                            add(new AdminDimension() {{
                                description = "provident";
                                indexingDefault = 7151.9;
                                name = "quibusdam";
                                servingDefault = 6027.63;
                            }}),
                            add(new AdminDimension() {{
                                description = "nulla";
                                indexingDefault = 5448.83;
                                name = "illum";
                                servingDefault = 4236.55;
                            }}),
                            add(new AdminDimension() {{
                                description = "error";
                                indexingDefault = 6458.94;
                                name = "suscipit";
                                servingDefault = 4375.87;
                            }}),
                        }};
                        description = "magnam";
                        dtProvision = "debitis";
                        enabled = false;
                        encoderId = "ipsa";
                        encrypted = false;
                        filterAttributes = new org.openapis.openapi.models.shared.AdminFilterAttribute[]{{
                            add(new AdminFilterAttribute() {{
                                description = "tempora";
                                indexed = false;
                                level = "FILTER_ATTRIBUTE_LEVEL__DOCUMENT";
                                name = "molestiae";
                                type = "FILTER_ATTRIBUTE_TYPE__TEXT";
                            }}),
                            add(new AdminFilterAttribute() {{
                                description = "placeat";
                                indexed = false;
                                level = "FILTER_ATTRIBUTE_LEVEL__DOCUMENT";
                                name = "iusto";
                                type = "FILTER_ATTRIBUTE_TYPE__REAL";
                            }}),
                            add(new AdminFilterAttribute() {{
                                description = "nisi";
                                indexed = false;
                                level = "FILTER_ATTRIBUTE_LEVEL__DOCUMENT_PART";
                                name = "temporibus";
                                type = "FILTER_ATTRIBUTE_TYPE__UNDEFINED";
                            }}),
                            add(new AdminFilterAttribute() {{
                                description = "quis";
                                indexed = false;
                                level = "FILTER_ATTRIBUTE_LEVEL__UNDEFINED";
                                name = "deserunt";
                                type = "FILTER_ATTRIBUTE_TYPE__UNDEFINED";
                            }}),
                        }};
                        id = 368241;
                        metadataMaxBytes = 832620;
                        name = "sapiente";
                        swapIenc = false;
                        swapQenc = false;
                        textless = false;
                    }};
                }};
                customerId = 778157;
            }}            

            CreateCorpusResponse res = sdk.adminService.createCorpus(req);

            if (res.adminCreateCorpusResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### adminService

* `createCorpus` - Create Corpus
* `deleteCorpus` - Delete Corpus
* `listCorpora` - List Corpora
* `resetCorpus` - Reset Corpus

### indexService

* `delete` - Delete
* `fileUpload` - File Upload
* `index` - Index

### queryService

* `query` - Query
* `streamQuery` - Stream Query
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
