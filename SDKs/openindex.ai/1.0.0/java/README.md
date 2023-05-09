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
import org.openapis.openapi.models.operations.QueryQueryPostResponse;
import org.openapis.openapi.models.operations.QueryQueryPostSecurity;
import org.openapis.openapi.models.shared.DocumentMetadataFilter;
import org.openapis.openapi.models.shared.Query;
import org.openapis.openapi.models.shared.QueryRequest;
import org.openapis.openapi.models.shared.SourceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.QueryRequest req = new QueryRequest(                new org.openapis.openapi.models.shared.Query[]{{
                                add(new Query("suscipit") {{
                                    filter = new DocumentMetadataFilter() {{
                                        author = "provident";
                                        collectionId = "distinctio";
                                        documentId = "quibusdam";
                                        endDate = "unde";
                                        keywords = new String[]{{
                                            add("corrupti"),
                                            add("illum"),
                                            add("vel"),
                                            add("error"),
                                        }};
                                        language = "deserunt";
                                        source = SourceEnum.WEB;
                                        sourceId = "iure";
                                        startDate = "magnam";
                                        timePeriod = "debitis";
                                        userId = "ipsa";
                                    }};
                                    query = "delectus";
                                    topK = 272656L;
                                }}),
                                add(new Query("repellendus") {{
                                    filter = new DocumentMetadataFilter() {{
                                        author = "molestiae";
                                        collectionId = "minus";
                                        documentId = "placeat";
                                        endDate = "voluptatum";
                                        keywords = new String[]{{
                                            add("excepturi"),
                                            add("nisi"),
                                        }};
                                        language = "recusandae";
                                        source = SourceEnum.CHAT;
                                        sourceId = "ab";
                                        startDate = "quis";
                                        timePeriod = "veritatis";
                                        userId = "deserunt";
                                    }};
                                    query = "perferendis";
                                    topK = 368241L;
                                }}),
                                add(new Query("fugit") {{
                                    filter = new DocumentMetadataFilter() {{
                                        author = "sapiente";
                                        collectionId = "quo";
                                        documentId = "odit";
                                        endDate = "at";
                                        keywords = new String[]{{
                                            add("maiores"),
                                            add("molestiae"),
                                            add("quod"),
                                            add("quod"),
                                        }};
                                        language = "esse";
                                        source = SourceEnum.FILE;
                                        sourceId = "porro";
                                        startDate = "dolorum";
                                        timePeriod = "dicta";
                                        userId = "nam";
                                    }};
                                    query = "officia";
                                    topK = 582020L;
                                }}),
                            }}) {{
                namespace = "deleniti";
            }};            

            QueryQueryPostResponse res = sdk.queryQueryPost(req, new QueryQueryPostSecurity("hic") {{
                httpBearer = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.queryResponse != null) {
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

* [queryQueryPost](docs/sdk/README.md#queryquerypost) - Query
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
