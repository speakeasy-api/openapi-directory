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