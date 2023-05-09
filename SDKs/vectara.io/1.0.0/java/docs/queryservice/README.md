# queryService

## Overview

Query operations, such as performing a standard search

### Available Operations

* [query](#query) - Query
* [streamQuery](#streamquery) - Stream Query

## query

Query

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryRequest;
import org.openapis.openapi.models.operations.QueryResponse;
import org.openapis.openapi.models.operations.QuerySecurity;
import org.openapis.openapi.models.shared.CorpusKeySemanticsEnum;
import org.openapis.openapi.models.shared.QueryRequestRerankingConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServingBatchQueryRequest;
import org.openapis.openapi.models.shared.ServingCorpusKey;
import org.openapis.openapi.models.shared.ServingQueryRequest;
import org.openapis.openapi.models.shared.VectaraservingCustomDimension;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QueryRequest req = new QueryRequest(976460L,                 new ServingBatchQueryRequest() {{
                                query = new org.openapis.openapi.models.shared.ServingQueryRequest[]{{
                                    add(new ServingQueryRequest() {{
                                        corpusKey = new org.openapis.openapi.models.shared.ServingCorpusKey[]{{
                                            add(new ServingCorpusKey() {{
                                                corpusId = 509624L;
                                                customerId = 976762L;
                                                dim = new org.openapis.openapi.models.shared.VectaraservingCustomDimension[]{{
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Mr. Jared Ritchie";
                                                        weight = 2828.07;
                                                    }}),
                                                }};
                                                metadataFilter = "maiores";
                                                semantics = CorpusKeySemanticsEnum.DEFAULT_;
                                            }}),
                                            add(new ServingCorpusKey() {{
                                                corpusId = 359444L;
                                                customerId = 296140L;
                                                dim = new org.openapis.openapi.models.shared.VectaraservingCustomDimension[]{{
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Maryann Hamill";
                                                        weight = 9182.36;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Edna Pouros";
                                                        weight = 8651.03;
                                                    }}),
                                                }};
                                                metadataFilter = "modi";
                                                semantics = CorpusKeySemanticsEnum.QUERY;
                                            }}),
                                        }};
                                        numResults = 523248L;
                                        query = "voluptates";
                                        rerankingConfig = new QueryRequestRerankingConfig() {{
                                            rerankerId = 93940L;
                                        }};
                                        start = 921158L;
                                    }}),
                                    add(new ServingQueryRequest() {{
                                        corpusKey = new org.openapis.openapi.models.shared.ServingCorpusKey[]{{
                                            add(new ServingCorpusKey() {{
                                                corpusId = 83112L;
                                                customerId = 929297L;
                                                dim = new org.openapis.openapi.models.shared.VectaraservingCustomDimension[]{{
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Elizabeth Orn";
                                                        weight = 6471.74;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Marty Green";
                                                        weight = 3978.21;
                                                    }}),
                                                }};
                                                metadataFilter = "cupiditate";
                                                semantics = CorpusKeySemanticsEnum.QUERY;
                                            }}),
                                            add(new ServingCorpusKey() {{
                                                corpusId = 20107L;
                                                customerId = 164940L;
                                                dim = new org.openapis.openapi.models.shared.VectaraservingCustomDimension[]{{
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Linda Corkery";
                                                        weight = 2700.08;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Geoffrey Green";
                                                        weight = 2487.53;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Sergio Hyatt";
                                                        weight = 5722.52;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Curtis Toy";
                                                        weight = 4471.25;
                                                    }}),
                                                }};
                                                metadataFilter = "in";
                                                semantics = CorpusKeySemanticsEnum.RESPONSE;
                                            }}),
                                            add(new ServingCorpusKey() {{
                                                corpusId = 978571L;
                                                customerId = 699479L;
                                                dim = new org.openapis.openapi.models.shared.VectaraservingCustomDimension[]{{
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Blanca Schulist";
                                                        weight = 6754.39;
                                                    }}),
                                                }};
                                                metadataFilter = "accusamus";
                                                semantics = CorpusKeySemanticsEnum.DEFAULT_;
                                            }}),
                                        }};
                                        numResults = 581273L;
                                        query = "enim";
                                        rerankingConfig = new QueryRequestRerankingConfig() {{
                                            rerankerId = 881736L;
                                        }};
                                        start = 965417L;
                                    }}),
                                    add(new ServingQueryRequest() {{
                                        corpusKey = new org.openapis.openapi.models.shared.ServingCorpusKey[]{{
                                            add(new ServingCorpusKey() {{
                                                corpusId = 588465L;
                                                customerId = 725255L;
                                                dim = new org.openapis.openapi.models.shared.VectaraservingCustomDimension[]{{
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Jaime Will";
                                                        weight = 3948.69;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Ada Moen IV";
                                                        weight = 3015.75;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Alfonso Green";
                                                        weight = 6180.16;
                                                    }}),
                                                }};
                                                metadataFilter = "nobis";
                                                semantics = CorpusKeySemanticsEnum.QUERY;
                                            }}),
                                            add(new ServingCorpusKey() {{
                                                corpusId = 878453L;
                                                customerId = 135474L;
                                                dim = new org.openapis.openapi.models.shared.VectaraservingCustomDimension[]{{
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Frances Marks";
                                                        weight = 5518.16;
                                                    }}),
                                                }};
                                                metadataFilter = "sint";
                                                semantics = CorpusKeySemanticsEnum.DEFAULT_;
                                            }}),
                                            add(new ServingCorpusKey() {{
                                                corpusId = 653201L;
                                                customerId = 968962L;
                                                dim = new org.openapis.openapi.models.shared.VectaraservingCustomDimension[]{{
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Natalie Ernser";
                                                        weight = 3675.62;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Vera Wyman";
                                                        weight = 8061.94;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Mr. Andres King";
                                                        weight = 3523.12;
                                                    }}),
                                                }};
                                                metadataFilter = "expedita";
                                                semantics = CorpusKeySemanticsEnum.QUERY;
                                            }}),
                                        }};
                                        numResults = 998848L;
                                        query = "quibusdam";
                                        rerankingConfig = new QueryRequestRerankingConfig() {{
                                            rerankerId = 149448L;
                                        }};
                                        start = 904648L;
                                    }}),
                                    add(new ServingQueryRequest() {{
                                        corpusKey = new org.openapis.openapi.models.shared.ServingCorpusKey[]{{
                                            add(new ServingCorpusKey() {{
                                                corpusId = 37559L;
                                                customerId = 162493L;
                                                dim = new org.openapis.openapi.models.shared.VectaraservingCustomDimension[]{{
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Victor Casper";
                                                        weight = 8649.34;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Nathaniel Marks";
                                                        weight = 332.22;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Ebony Predovic";
                                                        weight = 4200.75;
                                                    }}),
                                                }};
                                                metadataFilter = "nam";
                                                semantics = CorpusKeySemanticsEnum.DEFAULT_;
                                            }}),
                                            add(new ServingCorpusKey() {{
                                                corpusId = 866383L;
                                                customerId = 365496L;
                                                dim = new org.openapis.openapi.models.shared.VectaraservingCustomDimension[]{{
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Miss Ginger Feeney";
                                                        weight = 9441.24;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Robin D'Amore";
                                                        weight = 4895.49;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Beatrice Dooley Sr.";
                                                        weight = 7936.98;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Rosa Swift";
                                                        weight = 9280.82;
                                                    }}),
                                                }};
                                                metadataFilter = "omnis";
                                                semantics = CorpusKeySemanticsEnum.RESPONSE;
                                            }}),
                                            add(new ServingCorpusKey() {{
                                                corpusId = 596656L;
                                                customerId = 31838L;
                                                dim = new org.openapis.openapi.models.shared.VectaraservingCustomDimension[]{{
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Ms. Vickie Mraz";
                                                        weight = 2378.93;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Merle Gleichner";
                                                        weight = 5356.33;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Rene Rolfson";
                                                        weight = 3119.45;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Gene Effertz";
                                                        weight = 1861.93;
                                                    }}),
                                                }};
                                                metadataFilter = "ipsum";
                                                semantics = CorpusKeySemanticsEnum.RESPONSE;
                                            }}),
                                            add(new ServingCorpusKey() {{
                                                corpusId = 569574L;
                                                customerId = 739551L;
                                                dim = new org.openapis.openapi.models.shared.VectaraservingCustomDimension[]{{
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Johanna Farrell";
                                                        weight = 852.95;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Angela Kerluke";
                                                        weight = 8810.05;
                                                    }}),
                                                }};
                                                metadataFilter = "quidem";
                                                semantics = CorpusKeySemanticsEnum.RESPONSE;
                                            }}),
                                        }};
                                        numResults = 377752L;
                                        query = "natus";
                                        rerankingConfig = new QueryRequestRerankingConfig() {{
                                            rerankerId = 179603L;
                                        }};
                                        start = 542499L;
                                    }}),
                                }};
                            }};);            

            QueryResponse res = sdk.queryService.query(req, new QuerySecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.servingBatchQueryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## streamQuery

Stream Query

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StreamQueryRequest;
import org.openapis.openapi.models.operations.StreamQueryResponse;
import org.openapis.openapi.models.operations.StreamQuerySecurity;
import org.openapis.openapi.models.shared.CorpusKeySemanticsEnum;
import org.openapis.openapi.models.shared.QueryRequestRerankingConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServingBatchQueryRequest;
import org.openapis.openapi.models.shared.ServingCorpusKey;
import org.openapis.openapi.models.shared.ServingQueryRequest;
import org.openapis.openapi.models.shared.VectaraservingCustomDimension;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StreamQueryRequest req = new StreamQueryRequest(24678L,                 new ServingBatchQueryRequest() {{
                                query = new org.openapis.openapi.models.shared.ServingQueryRequest[]{{
                                    add(new ServingQueryRequest() {{
                                        corpusKey = new org.openapis.openapi.models.shared.ServingCorpusKey[]{{
                                            add(new ServingCorpusKey() {{
                                                corpusId = 743835L;
                                                customerId = 679393L;
                                                dim = new org.openapis.openapi.models.shared.VectaraservingCustomDimension[]{{
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Sonya Leuschke";
                                                        weight = 7146.97;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Jessie Emmerich";
                                                        weight = 9064.18;
                                                    }}),
                                                }};
                                                metadataFilter = "eius";
                                                semantics = CorpusKeySemanticsEnum.DEFAULT_;
                                            }}),
                                        }};
                                        numResults = 20651L;
                                        query = "amet";
                                        rerankingConfig = new QueryRequestRerankingConfig() {{
                                            rerankerId = 758379L;
                                        }};
                                        start = 881586L;
                                    }}),
                                    add(new ServingQueryRequest() {{
                                        corpusKey = new org.openapis.openapi.models.shared.ServingCorpusKey[]{{
                                            add(new ServingCorpusKey() {{
                                                corpusId = 904425L;
                                                customerId = 383464L;
                                                dim = new org.openapis.openapi.models.shared.VectaraservingCustomDimension[]{{
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Derek Sipes";
                                                        weight = 0.55;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Alex Goodwin";
                                                        weight = 8853.38;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Jan Wilderman";
                                                        weight = 4834.09;
                                                    }}),
                                                }};
                                                metadataFilter = "ipsum";
                                                semantics = CorpusKeySemanticsEnum.RESPONSE;
                                            }}),
                                            add(new ServingCorpusKey() {{
                                                corpusId = 947371L;
                                                customerId = 229442L;
                                                dim = new org.openapis.openapi.models.shared.VectaraservingCustomDimension[]{{
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Francis Haley";
                                                        weight = 5182.01;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Karen Rath";
                                                        weight = 4246.85;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Glen Oberbrunner";
                                                        weight = 2776.28;
                                                    }}),
                                                }};
                                                metadataFilter = "qui";
                                                semantics = CorpusKeySemanticsEnum.QUERY;
                                            }}),
                                        }};
                                        numResults = 807581L;
                                        query = "pariatur";
                                        rerankingConfig = new QueryRequestRerankingConfig() {{
                                            rerankerId = 747080L;
                                        }};
                                        start = 117531L;
                                    }}),
                                    add(new ServingQueryRequest() {{
                                        corpusKey = new org.openapis.openapi.models.shared.ServingCorpusKey[]{{
                                            add(new ServingCorpusKey() {{
                                                corpusId = 517379L;
                                                customerId = 276894L;
                                                dim = new org.openapis.openapi.models.shared.VectaraservingCustomDimension[]{{
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Verna Purdy";
                                                        weight = 5654.21;
                                                    }}),
                                                }};
                                                metadataFilter = "temporibus";
                                                semantics = CorpusKeySemanticsEnum.DEFAULT_;
                                            }}),
                                            add(new ServingCorpusKey() {{
                                                corpusId = 204865L;
                                                customerId = 144847L;
                                                dim = new org.openapis.openapi.models.shared.VectaraservingCustomDimension[]{{
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Ashley Hermiston";
                                                        weight = 304.52;
                                                    }}),
                                                }};
                                                metadataFilter = "cumque";
                                                semantics = CorpusKeySemanticsEnum.RESPONSE;
                                            }}),
                                            add(new ServingCorpusKey() {{
                                                corpusId = 748664L;
                                                customerId = 92596L;
                                                dim = new org.openapis.openapi.models.shared.VectaraservingCustomDimension[]{{
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Carolyn Rohan";
                                                        weight = 5844.76;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Dixie Durgan";
                                                        weight = 2408.29;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Ms. Joe Berge";
                                                        weight = 92.4;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Marcos Schaden";
                                                        weight = 7034.95;
                                                    }}),
                                                }};
                                                metadataFilter = "cupiditate";
                                                semantics = CorpusKeySemanticsEnum.DEFAULT_;
                                            }}),
                                        }};
                                        numResults = 63955L;
                                        query = "laudantium";
                                        rerankingConfig = new QueryRequestRerankingConfig() {{
                                            rerankerId = 485628L;
                                        }};
                                        start = 580447L;
                                    }}),
                                    add(new ServingQueryRequest() {{
                                        corpusKey = new org.openapis.openapi.models.shared.ServingCorpusKey[]{{
                                            add(new ServingCorpusKey() {{
                                                corpusId = 787542L;
                                                customerId = 876506L;
                                                dim = new org.openapis.openapi.models.shared.VectaraservingCustomDimension[]{{
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Tiffany Willms";
                                                        weight = 8788.7;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Julio Weissnat";
                                                        weight = 4861.6;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Malcolm Swift";
                                                        weight = 8445.5;
                                                    }}),
                                                }};
                                                metadataFilter = "illum";
                                                semantics = CorpusKeySemanticsEnum.DEFAULT_;
                                            }}),
                                            add(new ServingCorpusKey() {{
                                                corpusId = 617877L;
                                                customerId = 773326L;
                                                dim = new org.openapis.openapi.models.shared.VectaraservingCustomDimension[]{{
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Greg Stoltenberg";
                                                        weight = 9818.3;
                                                    }}),
                                                }};
                                                metadataFilter = "doloribus";
                                                semantics = CorpusKeySemanticsEnum.QUERY;
                                            }}),
                                            add(new ServingCorpusKey() {{
                                                corpusId = 753570L;
                                                customerId = 497391L;
                                                dim = new org.openapis.openapi.models.shared.VectaraservingCustomDimension[]{{
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Don Hills";
                                                        weight = 4282.24;
                                                    }}),
                                                }};
                                                metadataFilter = "possimus";
                                                semantics = CorpusKeySemanticsEnum.DEFAULT_;
                                            }}),
                                            add(new ServingCorpusKey() {{
                                                corpusId = 189848L;
                                                customerId = 401132L;
                                                dim = new org.openapis.openapi.models.shared.VectaraservingCustomDimension[]{{
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Ms. Cindy Wuckert";
                                                        weight = 5692.11;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Gordon Willms";
                                                        weight = 4113.72;
                                                    }}),
                                                    add(new VectaraservingCustomDimension() {{
                                                        name = "Lewis Hartmann II";
                                                        weight = 4072.41;
                                                    }}),
                                                }};
                                                metadataFilter = "quo";
                                                semantics = CorpusKeySemanticsEnum.DEFAULT_;
                                            }}),
                                        }};
                                        numResults = 926213L;
                                        query = "aspernatur";
                                        rerankingConfig = new QueryRequestRerankingConfig() {{
                                            rerankerId = 325310L;
                                        }};
                                        start = 53427L;
                                    }}),
                                }};
                            }};);            

            StreamQueryResponse res = sdk.queryService.streamQuery(req, new StreamQuerySecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.streamResultOfServingResponseSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
