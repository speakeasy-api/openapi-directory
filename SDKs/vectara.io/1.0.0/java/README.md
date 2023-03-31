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
import org.openapis.openapi.models.operations.CreateCorpusHeaders;
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
                    oAuth = new SchemeOAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }})
                .build();

            CreateCorpusRequest req = new CreateCorpusRequest() {{
                headers = new CreateCorpusHeaders() {{
                    customerId = 548814;
                }};
                request = new AdminCreateCorpusRequest() {{
                    corpus = new AdminCorpus() {{
                        customDimensions = new org.openapis.openapi.models.shared.AdminDimension[]{{
                            add(new AdminDimension() {{
                                description = "distinctio";
                                indexingDefault = 8442.66;
                                name = "unde";
                                servingDefault = 8579.46;
                            }}),
                            add(new AdminDimension() {{
                                description = "corrupti";
                                indexingDefault = 8472.52;
                                name = "vel";
                                servingDefault = 6235.64;
                            }}),
                            add(new AdminDimension() {{
                                description = "deserunt";
                                indexingDefault = 3843.82;
                                name = "iure";
                                servingDefault = 2975.34;
                            }}),
                        }};
                        description = "debitis";
                        dtProvision = "ipsa";
                        enabled = false;
                        encoderId = "delectus";
                        encrypted = false;
                        filterAttributes = new org.openapis.openapi.models.shared.AdminFilterAttribute[]{{
                            add(new AdminFilterAttribute() {{
                                description = "suscipit";
                                indexed = false;
                                level = "FILTER_ATTRIBUTE_LEVEL__DOCUMENT";
                                name = "minus";
                                type = "FILTER_ATTRIBUTE_TYPE__TEXT";
                            }}),
                            add(new AdminFilterAttribute() {{
                                description = "voluptatum";
                                indexed = false;
                                level = "FILTER_ATTRIBUTE_LEVEL__DOCUMENT";
                                name = "excepturi";
                                type = "FILTER_ATTRIBUTE_TYPE__INTEGER_LIST";
                            }}),
                        }};
                        id = 925597;
                        metadataMaxBytes = 836079;
                        name = "ab";
                        swapIenc = false;
                        swapQenc = false;
                        textless = false;
                    }};
                }};
            }};            

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
## SDK Available Operations


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
