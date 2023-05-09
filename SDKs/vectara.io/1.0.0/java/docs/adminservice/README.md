# adminService

## Overview

Administrative services, such as creating or deleting corpora

### Available Operations

* [createCorpus](#createcorpus) - Create Corpus
* [deleteCorpus](#deletecorpus) - Delete Corpus
* [listCorpora](#listcorpora) - List Corpora
* [resetCorpus](#resetcorpus) - Reset Corpus

## createCorpus

Create Corpus

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCorpusRequest;
import org.openapis.openapi.models.operations.CreateCorpusResponse;
import org.openapis.openapi.models.shared.AdminCorpus;
import org.openapis.openapi.models.shared.AdminCreateCorpusRequest;
import org.openapis.openapi.models.shared.AdminDimension;
import org.openapis.openapi.models.shared.AdminFilterAttribute;
import org.openapis.openapi.models.shared.AdminFilterAttributeLevelEnum;
import org.openapis.openapi.models.shared.AdminFilterAttributeTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    oAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateCorpusRequest req = new CreateCorpusRequest(                new AdminCreateCorpusRequest() {{
                                corpus = new AdminCorpus() {{
                                    customDimensions = new org.openapis.openapi.models.shared.AdminDimension[]{{
                                        add(new AdminDimension() {{
                                            description = "nam";
                                            indexingDefault = 6399.21;
                                            name = "Wayne Lind";
                                            servingDefault = 5218.48;
                                        }}),
                                    }};
                                    description = "beatae";
                                    dtProvision = "commodi";
                                    enabled = false;
                                    encoderId = "molestiae";
                                    encrypted = false;
                                    filterAttributes = new org.openapis.openapi.models.shared.AdminFilterAttribute[]{{
                                        add(new AdminFilterAttribute() {{
                                            description = "qui";
                                            indexed = false;
                                            level = AdminFilterAttributeLevelEnum.FILTER_ATTRIBUTE_LEVEL_DOCUMENT_PART;
                                            name = "Cory Emmerich";
                                            type = AdminFilterAttributeTypeEnum.FILTER_ATTRIBUTE_TYPE_UNDEFINED;
                                        }}),
                                        add(new AdminFilterAttribute() {{
                                            description = "ad";
                                            indexed = false;
                                            level = AdminFilterAttributeLevelEnum.FILTER_ATTRIBUTE_LEVEL_DOCUMENT;
                                            name = "Sheryl Fadel";
                                            type = AdminFilterAttributeTypeEnum.FILTER_ATTRIBUTE_TYPE_TEXT_LIST;
                                        }}),
                                    }};
                                    id = 902599L;
                                    metadataMaxBytes = 681820L;
                                    name = "Stacy Moore";
                                    swapIenc = false;
                                    swapQenc = false;
                                    textless = false;
                                }};;
                            }};, 697631L);            

            CreateCorpusResponse res = sdk.adminService.createCorpus(req);

            if (res.adminCreateCorpusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCorpus

Delete Corpus

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCorpusRequest;
import org.openapis.openapi.models.operations.DeleteCorpusResponse;
import org.openapis.openapi.models.shared.AdminDeleteCorpusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    oAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteCorpusRequest req = new DeleteCorpusRequest(                new AdminDeleteCorpusRequest() {{
                                corpusId = 60225L;
                                customerId = 969810L;
                            }};, 666767L);            

            DeleteCorpusResponse res = sdk.adminService.deleteCorpus(req);

            if (res.adminDeleteCorpusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCorpora

List Corpora

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCorporaRequest;
import org.openapis.openapi.models.operations.ListCorporaResponse;
import org.openapis.openapi.models.shared.AdminListCorporaRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    oAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ListCorporaRequest req = new ListCorporaRequest(                new AdminListCorporaRequest() {{
                                filter = "laborum";
                                numResults = 170909L;
                                pageKey = "dolorem";
                            }};, 358152L);            

            ListCorporaResponse res = sdk.adminService.listCorpora(req);

            if (res.adminListCorporaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetCorpus

Reset Corpus

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetCorpusRequest;
import org.openapis.openapi.models.operations.ResetCorpusResponse;
import org.openapis.openapi.models.shared.AdminResetCorpusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    oAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ResetCorpusRequest req = new ResetCorpusRequest(                new AdminResetCorpusRequest() {{
                                corpusId = 750686L;
                                customerId = 315428L;
                            }};, 607831L);            

            ResetCorpusResponse res = sdk.adminService.resetCorpus(req);

            if (res.adminResetCorpusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
