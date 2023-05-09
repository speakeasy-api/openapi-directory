# projects

### Available Operations

* [discoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate](#discoveryengineprojectslocationsdatastoresbranchesdocumentscreate) - Creates a Document.
* [discoveryengineProjectsLocationsDataStoresBranchesDocumentsDelete](#discoveryengineprojectslocationsdatastoresbranchesdocumentsdelete) - Deletes a Document.
* [discoveryengineProjectsLocationsDataStoresBranchesDocumentsImport](#discoveryengineprojectslocationsdatastoresbranchesdocumentsimport) - Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items will be created. Note: It is possible for a subset of the Documents to be successfully updated.
* [discoveryengineProjectsLocationsDataStoresBranchesDocumentsList](#discoveryengineprojectslocationsdatastoresbranchesdocumentslist) - Gets a list of Documents.
* [discoveryengineProjectsLocationsDataStoresBranchesDocumentsPatch](#discoveryengineprojectslocationsdatastoresbranchesdocumentspatch) - Updates a Document.
* [discoveryengineProjectsLocationsDataStoresBranchesDocumentsPurge](#discoveryengineprojectslocationsdatastoresbranchesdocumentspurge) - Permanently deletes all selected Documents under a branch. This process is asynchronous. If the request is valid, the removal will be enquired and processed offlines. Depending on the number of Documents, this operation could take hours to complete. Before the operation completes, some Documents may still be returned by DocumentService.GetDocument or DocumentService.ListDocuments. To get a sample of Documents that would be deleted, set PurgeDocumentsRequest.force to false.
* [discoveryengineProjectsLocationsDataStoresServingConfigsRecommend](#discoveryengineprojectslocationsdatastoresservingconfigsrecommend) - Makes a recommendation, which requires a contextual user event.
* [discoveryengineProjectsLocationsDataStoresUserEventsCollect](#discoveryengineprojectslocationsdatastoresusereventscollect) - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
* [discoveryengineProjectsLocationsDataStoresUserEventsImport](#discoveryengineprojectslocationsdatastoresusereventsimport) - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
* [discoveryengineProjectsLocationsDataStoresUserEventsWrite](#discoveryengineprojectslocationsdatastoresusereventswrite) - Writes a single user event.
* [discoveryengineProjectsOperationsGet](#discoveryengineprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [discoveryengineProjectsOperationsList](#discoveryengineprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## discoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate

Creates a Document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaDocument;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest req = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDiscoveryengineV1betaDocument = new GoogleCloudDiscoveryengineV1betaDocument() {{
                    id = "42cb7392-0592-4939-afea-7596eb10faaa";
                    jsonData = "dolores";
                    name = "Stacy Champlin";
                    parentDocumentId = "omnis";
                    schemaId = "nemo";
                    structData = new java.util.HashMap<String, Object>() {{
                        put("excepturi", "accusantium");
                        put("iure", "culpa");
                    }};
                }};;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "architecto";
                documentId = "mollitia";
                fields = "dolorem";
                key = "culpa";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "repellat";
                uploadType = "mollitia";
                uploadProtocol = "occaecati";
            }};            

            DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse res = sdk.projects.discoveryengineProjectsLocationsDataStoresBranchesDocumentsCreate(req, new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity("numquam", "commodi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDiscoveryengineV1betaDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## discoveryengineProjectsLocationsDataStoresBranchesDocumentsDelete

Deletes a Document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteRequest;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteResponse;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteRequest req = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteRequest("quam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "velit";
                alt = AltEnum.MEDIA;
                callback = "quia";
                fields = "quis";
                key = "vitae";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "enim";
                uploadProtocol = "odit";
            }};            

            DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteResponse res = sdk.projects.discoveryengineProjectsLocationsDataStoresBranchesDocumentsDelete(req, new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsDeleteSecurity("quo", "sequi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## discoveryengineProjectsLocationsDataStoresBranchesDocumentsImport

Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items will be created. Note: It is possible for a subset of the Documents to be successfully updated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportResponse;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaBigQuerySource;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaDocument;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaGcsSource;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaImportDocumentsRequest;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationModeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaImportErrorConfig;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest req = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDiscoveryengineV1betaImportDocumentsRequest = new GoogleCloudDiscoveryengineV1betaImportDocumentsRequest() {{
                    bigquerySource = new GoogleCloudDiscoveryengineV1betaBigQuerySource() {{
                        dataSchema = "id";
                        datasetId = "possimus";
                        gcsStagingDir = "aut";
                        partitionDate = new GoogleTypeDate() {{
                            day = 97101;
                            month = 622846;
                            year = 837945;
                        }};;
                        projectId = "laborum";
                        tableId = "quasi";
                    }};;
                    errorConfig = new GoogleCloudDiscoveryengineV1betaImportErrorConfig() {{
                        gcsPrefix = "reiciendis";
                    }};;
                    gcsSource = new GoogleCloudDiscoveryengineV1betaGcsSource() {{
                        dataSchema = "voluptatibus";
                        inputUris = new String[]{{
                            add("nihil"),
                            add("praesentium"),
                            add("voluptatibus"),
                            add("ipsa"),
                        }};
                    }};;
                    inlineSource = new GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource() {{
                        documents = new org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaDocument[]{{
                            add(new GoogleCloudDiscoveryengineV1betaDocument() {{
                                id = "7b0074f1-5471-4b5e-ae13-b99d488e1e91";
                                jsonData = "itaque";
                                name = "Erin Altenwerth";
                                parentDocumentId = "explicabo";
                                schemaId = "deserunt";
                                structData = new java.util.HashMap<String, Object>() {{
                                    put("quibusdam", "labore");
                                    put("modi", "qui");
                                    put("aliquid", "cupiditate");
                                }};
                            }}),
                            add(new GoogleCloudDiscoveryengineV1betaDocument() {{
                                id = "802d502a-94bb-44f6-bc96-9e9a3efa77df";
                                jsonData = "rerum";
                                name = "Valerie Runolfsson";
                                parentDocumentId = "aliquid";
                                schemaId = "laborum";
                                structData = new java.util.HashMap<String, Object>() {{
                                    put("non", "occaecati");
                                    put("enim", "accusamus");
                                    put("delectus", "quidem");
                                    put("provident", "nam");
                                }};
                            }}),
                            add(new GoogleCloudDiscoveryengineV1betaDocument() {{
                                id = "a88f3a66-9970-474b-a446-9b6e21419598";
                                jsonData = "sint";
                                name = "Angie Wisozk";
                                parentDocumentId = "eum";
                                schemaId = "dolor";
                                structData = new java.util.HashMap<String, Object>() {{
                                    put("odit", "nemo");
                                    put("quasi", "iure");
                                    put("doloribus", "debitis");
                                    put("eius", "maxime");
                                }};
                            }}),
                        }};
                    }};;
                    reconciliationMode = GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationModeEnum.INCREMENTAL;
                }};;
                accessToken = "facilis";
                alt = AltEnum.MEDIA;
                callback = "architecto";
                fields = "architecto";
                key = "repudiandae";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "nihil";
                uploadProtocol = "repellat";
            }};            

            DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportResponse res = sdk.projects.discoveryengineProjectsLocationsDataStoresBranchesDocumentsImport(req, new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportSecurity("quibusdam", "sed") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## discoveryengineProjectsLocationsDataStoresBranchesDocumentsList

Gets a list of Documents.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListRequest;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListResponse;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListRequest req = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListRequest("saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "praesentium";
                fields = "natus";
                key = "magni";
                oauthToken = "sunt";
                pageSize = 779051L;
                pageToken = "illum";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "maxime";
                uploadProtocol = "ea";
            }};            

            DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListResponse res = sdk.projects.discoveryengineProjectsLocationsDataStoresBranchesDocumentsList(req, new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsListSecurity("excepturi", "odit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDiscoveryengineV1betaListDocumentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## discoveryengineProjectsLocationsDataStoresBranchesDocumentsPatch

Updates a Document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchResponse;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaDocument;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest req = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest("ea") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDiscoveryengineV1betaDocument = new GoogleCloudDiscoveryengineV1betaDocument() {{
                    id = "1fb576b0-d5f0-4d30-85fb-b2587053202c";
                    jsonData = "quam";
                    name = "Eula Hegmann";
                    parentDocumentId = "omnis";
                    schemaId = "facilis";
                    structData = new java.util.HashMap<String, Object>() {{
                        put("voluptatem", "porro");
                        put("consequuntur", "blanditiis");
                        put("error", "eaque");
                    }};
                }};;
                accessToken = "occaecati";
                allowMissing = false;
                alt = AltEnum.PROTO;
                callback = "adipisci";
                fields = "asperiores";
                key = "earum";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "dolorum";
                uploadProtocol = "deleniti";
            }};            

            DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchResponse res = sdk.projects.discoveryengineProjectsLocationsDataStoresBranchesDocumentsPatch(req, new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchSecurity("pariatur", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDiscoveryengineV1betaDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## discoveryengineProjectsLocationsDataStoresBranchesDocumentsPurge

Permanently deletes all selected Documents under a branch. This process is asynchronous. If the request is valid, the removal will be enquired and processed offlines. Depending on the number of Documents, this operation could take hours to complete. Before the operation completes, some Documents may still be returned by DocumentService.GetDocument or DocumentService.ListDocuments. To get a sample of Documents that would be deleted, set PurgeDocumentsRequest.force to false.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPurgeRequest;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPurgeResponse;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPurgeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaPurgeDocumentsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPurgeRequest req = new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPurgeRequest("nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDiscoveryengineV1betaPurgeDocumentsRequest = new GoogleCloudDiscoveryengineV1betaPurgeDocumentsRequest() {{
                    filter = "delectus";
                    force = false;
                }};;
                accessToken = "quaerat";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "dolorem";
                key = "dolorem";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "ipsum";
                uploadProtocol = "hic";
            }};            

            DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPurgeResponse res = sdk.projects.discoveryengineProjectsLocationsDataStoresBranchesDocumentsPurge(req, new DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPurgeSecurity("excepturi", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## discoveryengineProjectsLocationsDataStoresServingConfigsRecommend

Makes a recommendation, which requires a contextual user event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaCompletionInfo;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaCustomAttribute;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaDocumentInfo;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaMediaInfo;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaPageInfo;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaPanelInfo;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaRecommendRequest;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaSearchInfo;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaTransactionInfo;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaUserEvent;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaUserInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest req = new DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest("voluptate") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDiscoveryengineV1betaRecommendRequest = new GoogleCloudDiscoveryengineV1betaRecommendRequest() {{
                    filter = "reiciendis";
                    pageSize = 227414;
                    params = new java.util.HashMap<String, Object>() {{
                        put("numquam", "veritatis");
                        put("ipsa", "ipsa");
                        put("iure", "odio");
                    }};
                    userEvent = new GoogleCloudDiscoveryengineV1betaUserEvent() {{
                        attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaCustomAttribute>() {{
                            put("accusamus", new GoogleCloudDiscoveryengineV1betaCustomAttribute() {{
                                numbers = new Double[]{{
                                    add(9764.05),
                                    add(3777.52),
                                    add(6176.58),
                                }};
                                text = new String[]{{
                                    add("atque"),
                                }};
                            }});
                            put("sit", new GoogleCloudDiscoveryengineV1betaCustomAttribute() {{
                                numbers = new Double[]{{
                                    add(672.49),
                                    add(7438.35),
                                    add(6793.93),
                                    add(4785.96),
                                }};
                                text = new String[]{{
                                    add("dolorum"),
                                    add("deleniti"),
                                }};
                            }});
                        }};
                        attributionToken = "omnis";
                        completionInfo = new GoogleCloudDiscoveryengineV1betaCompletionInfo() {{
                            selectedPosition = 896672;
                            selectedSuggestion = "distinctio";
                        }};;
                        directUserRequest = false;
                        documents = new org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaDocumentInfo[]{{
                            add(new GoogleCloudDiscoveryengineV1betaDocumentInfo() {{
                                id = "737ae420-3ce5-4e6a-95d8-a0d446ce2af7";
                                name = "Tyrone Emard";
                                promotionIds = new String[]{{
                                    add("tempore"),
                                }};
                                quantity = 880298;
                            }}),
                            add(new GoogleCloudDiscoveryengineV1betaDocumentInfo() {{
                                id = "453f870b-326b-45a7-b429-cdb1a8422bb6";
                                name = "Felicia Spencer";
                                promotionIds = new String[]{{
                                    add("magni"),
                                }};
                                quantity = 488056;
                            }}),
                            add(new GoogleCloudDiscoveryengineV1betaDocumentInfo() {{
                                id = "15bf0cbb-1e31-4b8b-90f3-443a1108e0ad";
                                name = "Domingo Grady";
                                promotionIds = new String[]{{
                                    add("quae"),
                                }};
                                quantity = 512393;
                            }}),
                            add(new GoogleCloudDiscoveryengineV1betaDocumentInfo() {{
                                id = "79fce953-f73e-4f7f-bc7a-bd74dd39c0f5";
                                name = "Louis Sauer";
                                promotionIds = new String[]{{
                                    add("eligendi"),
                                    add("ducimus"),
                                }};
                                quantity = 4048;
                            }}),
                        }};
                        eventTime = "officia";
                        eventType = "tempora";
                        filter = "ipsam";
                        mediaInfo = new GoogleCloudDiscoveryengineV1betaMediaInfo() {{
                            mediaProgressDuration = "ea";
                            mediaProgressPercentage = 1369;
                        }};;
                        pageInfo = new GoogleCloudDiscoveryengineV1betaPageInfo() {{
                            pageCategory = "vel";
                            pageviewId = "possimus";
                            referrerUri = "magnam";
                            uri = "http://ideal-licensing.com";
                        }};;
                        panel = new GoogleCloudDiscoveryengineV1betaPanelInfo() {{
                            displayName = "dolor";
                            panelId = "maiores";
                            panelPosition = 97844;
                            totalPanels = 406120;
                        }};;
                        promotionIds = new String[]{{
                            add("excepturi"),
                            add("voluptatibus"),
                            add("nostrum"),
                            add("sapiente"),
                        }};
                        searchInfo = new GoogleCloudDiscoveryengineV1betaSearchInfo() {{
                            offset = 788873;
                            orderBy = "saepe";
                            searchQuery = "ea";
                        }};;
                        sessionId = "impedit";
                        tagIds = new String[]{{
                            add("veniam"),
                            add("aliquid"),
                        }};
                        transactionInfo = new GoogleCloudDiscoveryengineV1betaTransactionInfo() {{
                            cost = 811.01;
                            currency = "magnam";
                            discountValue = 4072.41;
                            tax = 7752.2;
                            transactionId = "consectetur";
                            value = 9262.13;
                        }};;
                        userInfo = new GoogleCloudDiscoveryengineV1betaUserInfo() {{
                            userAgent = "aspernatur";
                            userId = "minima";
                        }};;
                        userPseudoId = "eaque";
                    }};;
                    userLabels = new java.util.HashMap<String, String>() {{
                        put("libero", "aut");
                        put("aut", "deleniti");
                        put("impedit", "aliquam");
                        put("fugit", "accusamus");
                    }};
                    validateOnly = false;
                }};;
                accessToken = "inventore";
                alt = AltEnum.JSON;
                callback = "et";
                fields = "dolorum";
                key = "laborum";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "eum";
                uploadProtocol = "autem";
            }};            

            DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse res = sdk.projects.discoveryengineProjectsLocationsDataStoresServingConfigsRecommend(req, new DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendSecurity("nobis", "quas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDiscoveryengineV1betaRecommendResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## discoveryengineProjectsLocationsDataStoresUserEventsCollect

Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresUserEventsCollectRequest;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresUserEventsCollectResponse;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresUserEventsCollectSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiscoveryengineProjectsLocationsDataStoresUserEventsCollectRequest req = new DiscoveryengineProjectsLocationsDataStoresUserEventsCollectRequest("assumenda") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptas";
                alt = AltEnum.PROTO;
                callback = "quasi";
                ets = "tempora";
                fields = "numquam";
                key = "explicabo";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "molestiae";
                uploadProtocol = "magnam";
                uri = "http://fair-infection.info";
                userEvent = "rem";
            }};            

            DiscoveryengineProjectsLocationsDataStoresUserEventsCollectResponse res = sdk.projects.discoveryengineProjectsLocationsDataStoresUserEventsCollect(req, new DiscoveryengineProjectsLocationsDataStoresUserEventsCollectSecurity("fuga", "reprehenderit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleApiHttpBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## discoveryengineProjectsLocationsDataStoresUserEventsImport

Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresUserEventsImportResponse;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresUserEventsImportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaBigQuerySource;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaCompletionInfo;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaCustomAttribute;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaDocumentInfo;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaGcsSource;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaImportErrorConfig;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaImportUserEventsRequest;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaMediaInfo;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaPageInfo;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaPanelInfo;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaSearchInfo;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaTransactionInfo;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaUserEvent;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaUserInfo;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest req = new DiscoveryengineProjectsLocationsDataStoresUserEventsImportRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDiscoveryengineV1betaImportUserEventsRequest = new GoogleCloudDiscoveryengineV1betaImportUserEventsRequest() {{
                    bigquerySource = new GoogleCloudDiscoveryengineV1betaBigQuerySource() {{
                        dataSchema = "ut";
                        datasetId = "eum";
                        gcsStagingDir = "suscipit";
                        partitionDate = new GoogleTypeDate() {{
                            day = 826871;
                            month = 181151;
                            year = 509342;
                        }};;
                        projectId = "quisquam";
                        tableId = "veritatis";
                    }};;
                    errorConfig = new GoogleCloudDiscoveryengineV1betaImportErrorConfig() {{
                        gcsPrefix = "ipsa";
                    }};;
                    gcsSource = new GoogleCloudDiscoveryengineV1betaGcsSource() {{
                        dataSchema = "id";
                        inputUris = new String[]{{
                            add("neque"),
                            add("quo"),
                            add("illum"),
                        }};
                    }};;
                    inlineSource = new GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource() {{
                        userEvents = new org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaUserEvent[]{{
                            add(new GoogleCloudDiscoveryengineV1betaUserEvent() {{
                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaCustomAttribute>() {{
                                    put("eius", new GoogleCloudDiscoveryengineV1betaCustomAttribute() {{
                                        numbers = new Double[]{{
                                            add(3738.13),
                                        }};
                                        text = new String[]{{
                                            add("cupiditate"),
                                        }};
                                    }});
                                    put("consequatur", new GoogleCloudDiscoveryengineV1betaCustomAttribute() {{
                                        numbers = new Double[]{{
                                            add(8920.5),
                                            add(3708.53),
                                        }};
                                        text = new String[]{{
                                            add("sequi"),
                                        }};
                                    }});
                                    put("quo", new GoogleCloudDiscoveryengineV1betaCustomAttribute() {{
                                        numbers = new Double[]{{
                                            add(9251.64),
                                            add(446.12),
                                        }};
                                        text = new String[]{{
                                            add("quod"),
                                            add("dignissimos"),
                                            add("inventore"),
                                        }};
                                    }});
                                }};
                                attributionToken = "nihil";
                                completionInfo = new GoogleCloudDiscoveryengineV1betaCompletionInfo() {{
                                    selectedPosition = 518835;
                                    selectedSuggestion = "accusamus";
                                }};
                                directUserRequest = false;
                                documents = new org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaDocumentInfo[]{{
                                    add(new GoogleCloudDiscoveryengineV1betaDocumentInfo() {{
                                        id = "796f2a70-c688-4282-aa48-2562f222e981";
                                        name = "Ms. Olive Tillman";
                                        promotionIds = new String[]{{
                                            add("vero"),
                                            add("aliquid"),
                                            add("quasi"),
                                        }};
                                        quantity = 904045;
                                    }}),
                                    add(new GoogleCloudDiscoveryengineV1betaDocumentInfo() {{
                                        id = "6b7b95bc-0ab3-4c20-84f3-789fd871f99d";
                                        name = "Howard Upton";
                                        promotionIds = new String[]{{
                                            add("consequuntur"),
                                        }};
                                        quantity = 94458;
                                    }}),
                                }};
                                eventTime = "similique";
                                eventType = "culpa";
                                filter = "aliquid";
                                mediaInfo = new GoogleCloudDiscoveryengineV1betaMediaInfo() {{
                                    mediaProgressDuration = "tenetur";
                                    mediaProgressPercentage = 627.13;
                                }};
                                pageInfo = new GoogleCloudDiscoveryengineV1betaPageInfo() {{
                                    pageCategory = "earum";
                                    pageviewId = "vel";
                                    referrerUri = "in";
                                    uri = "http://second-statute.net";
                                }};
                                panel = new GoogleCloudDiscoveryengineV1betaPanelInfo() {{
                                    displayName = "accusantium";
                                    panelId = "aliquam";
                                    panelPosition = 958983;
                                    totalPanels = 119771;
                                }};
                                promotionIds = new String[]{{
                                    add("reprehenderit"),
                                    add("ullam"),
                                }};
                                searchInfo = new GoogleCloudDiscoveryengineV1betaSearchInfo() {{
                                    offset = 391774;
                                    orderBy = "aut";
                                    searchQuery = "voluptatum";
                                }};
                                sessionId = "qui";
                                tagIds = new String[]{{
                                    add("ex"),
                                    add("deleniti"),
                                    add("itaque"),
                                    add("dolorum"),
                                }};
                                transactionInfo = new GoogleCloudDiscoveryengineV1betaTransactionInfo() {{
                                    cost = 996.15;
                                    currency = "omnis";
                                    discountValue = 9453.02;
                                    tax = 984.78;
                                    transactionId = "at";
                                    value = 920.27;
                                }};
                                userInfo = new GoogleCloudDiscoveryengineV1betaUserInfo() {{
                                    userAgent = "voluptate";
                                    userId = "ipsa";
                                }};
                                userPseudoId = "minima";
                            }}),
                            add(new GoogleCloudDiscoveryengineV1betaUserEvent() {{
                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaCustomAttribute>() {{
                                    put("consectetur", new GoogleCloudDiscoveryengineV1betaCustomAttribute() {{
                                        numbers = new Double[]{{
                                            add(6144.65),
                                        }};
                                        text = new String[]{{
                                            add("accusantium"),
                                            add("rem"),
                                            add("aut"),
                                            add("laudantium"),
                                        }};
                                    }});
                                }};
                                attributionToken = "eum";
                                completionInfo = new GoogleCloudDiscoveryengineV1betaCompletionInfo() {{
                                    selectedPosition = 649832;
                                    selectedSuggestion = "ab";
                                }};
                                directUserRequest = false;
                                documents = new org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaDocumentInfo[]{{
                                    add(new GoogleCloudDiscoveryengineV1betaDocumentInfo() {{
                                        id = "40394c26-071f-493f-9f06-42dac7af515c";
                                        name = "Francisco Bernier";
                                        promotionIds = new String[]{{
                                            add("suscipit"),
                                            add("velit"),
                                            add("culpa"),
                                        }};
                                        quantity = 665859;
                                    }}),
                                    add(new GoogleCloudDiscoveryengineV1betaDocumentInfo() {{
                                        id = "e8d67864-dbb6-475f-95e6-0b375ed4f6fb";
                                        name = "Dr. Terence Gulgowski";
                                        promotionIds = new String[]{{
                                            add("amet"),
                                        }};
                                        quantity = 105906;
                                    }}),
                                    add(new GoogleCloudDiscoveryengineV1betaDocumentInfo() {{
                                        id = "7fe35b60-eb1e-4a42-a555-ba3c28744ed5";
                                        name = "Karla Kuvalis";
                                        promotionIds = new String[]{{
                                            add("culpa"),
                                        }};
                                        quantity = 548519;
                                    }}),
                                }};
                                eventTime = "pariatur";
                                eventType = "totam";
                                filter = "hic";
                                mediaInfo = new GoogleCloudDiscoveryengineV1betaMediaInfo() {{
                                    mediaProgressDuration = "exercitationem";
                                    mediaProgressPercentage = 7507.65;
                                }};
                                pageInfo = new GoogleCloudDiscoveryengineV1betaPageInfo() {{
                                    pageCategory = "sit";
                                    pageviewId = "rerum";
                                    referrerUri = "sed";
                                    uri = "https://compassionate-yang.net";
                                }};
                                panel = new GoogleCloudDiscoveryengineV1betaPanelInfo() {{
                                    displayName = "voluptate";
                                    panelId = "expedita";
                                    panelPosition = 70869;
                                    totalPanels = 611749;
                                }};
                                promotionIds = new String[]{{
                                    add("laborum"),
                                    add("sed"),
                                }};
                                searchInfo = new GoogleCloudDiscoveryengineV1betaSearchInfo() {{
                                    offset = 447516;
                                    orderBy = "commodi";
                                    searchQuery = "quidem";
                                }};
                                sessionId = "explicabo";
                                tagIds = new String[]{{
                                    add("unde"),
                                    add("architecto"),
                                }};
                                transactionInfo = new GoogleCloudDiscoveryengineV1betaTransactionInfo() {{
                                    cost = 3828.08;
                                    currency = "sapiente";
                                    discountValue = 8953.86;
                                    tax = 724.34;
                                    transactionId = "reiciendis";
                                    value = 193;
                                }};
                                userInfo = new GoogleCloudDiscoveryengineV1betaUserInfo() {{
                                    userAgent = "corrupti";
                                    userId = "maiores";
                                }};
                                userPseudoId = "incidunt";
                            }}),
                            add(new GoogleCloudDiscoveryengineV1betaUserEvent() {{
                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaCustomAttribute>() {{
                                    put("provident", new GoogleCloudDiscoveryengineV1betaCustomAttribute() {{
                                        numbers = new Double[]{{
                                            add(8967.62),
                                            add(2155.29),
                                        }};
                                        text = new String[]{{
                                            add("occaecati"),
                                            add("quos"),
                                        }};
                                    }});
                                }};
                                attributionToken = "voluptatibus";
                                completionInfo = new GoogleCloudDiscoveryengineV1betaCompletionInfo() {{
                                    selectedPosition = 271653;
                                    selectedSuggestion = "tempora";
                                }};
                                directUserRequest = false;
                                documents = new org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaDocumentInfo[]{{
                                    add(new GoogleCloudDiscoveryengineV1betaDocumentInfo() {{
                                        id = "f603e8b4-45e8-40ca-95ef-d20e457e1858";
                                        name = "Lester Parisian";
                                        promotionIds = new String[]{{
                                            add("expedita"),
                                            add("debitis"),
                                            add("neque"),
                                            add("dolorum"),
                                        }};
                                        quantity = 341698;
                                    }}),
                                    add(new GoogleCloudDiscoveryengineV1betaDocumentInfo() {{
                                        id = "aa8e4824-d0ab-4407-9088-e51862065e90";
                                        name = "Lela Ebert Sr.";
                                        promotionIds = new String[]{{
                                            add("labore"),
                                            add("quidem"),
                                            add("atque"),
                                        }};
                                        quantity = 671957;
                                    }}),
                                }};
                                eventTime = "nam";
                                eventType = "tenetur";
                                filter = "laboriosam";
                                mediaInfo = new GoogleCloudDiscoveryengineV1betaMediaInfo() {{
                                    mediaProgressDuration = "alias";
                                    mediaProgressPercentage = 2270.84;
                                }};
                                pageInfo = new GoogleCloudDiscoveryengineV1betaPageInfo() {{
                                    pageCategory = "deserunt";
                                    pageviewId = "voluptate";
                                    referrerUri = "unde";
                                    uri = "https://old-fashioned-spectacles.org";
                                }};
                                panel = new GoogleCloudDiscoveryengineV1betaPanelInfo() {{
                                    displayName = "voluptates";
                                    panelId = "perferendis";
                                    panelPosition = 667285;
                                    totalPanels = 696483;
                                }};
                                promotionIds = new String[]{{
                                    add("facere"),
                                    add("fuga"),
                                }};
                                searchInfo = new GoogleCloudDiscoveryengineV1betaSearchInfo() {{
                                    offset = 509807;
                                    orderBy = "mollitia";
                                    searchQuery = "veniam";
                                }};
                                sessionId = "voluptatem";
                                tagIds = new String[]{{
                                    add("repudiandae"),
                                    add("quasi"),
                                    add("atque"),
                                    add("reprehenderit"),
                                }};
                                transactionInfo = new GoogleCloudDiscoveryengineV1betaTransactionInfo() {{
                                    cost = 9911.42;
                                    currency = "totam";
                                    discountValue = 3831.03;
                                    tax = 6939.57;
                                    transactionId = "maxime";
                                    value = 908.85;
                                }};
                                userInfo = new GoogleCloudDiscoveryengineV1betaUserInfo() {{
                                    userAgent = "esse";
                                    userId = "amet";
                                }};
                                userPseudoId = "assumenda";
                            }}),
                            add(new GoogleCloudDiscoveryengineV1betaUserEvent() {{
                                attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaCustomAttribute>() {{
                                    put("atque", new GoogleCloudDiscoveryengineV1betaCustomAttribute() {{
                                        numbers = new Double[]{{
                                            add(8872.65),
                                            add(8869.61),
                                            add(8801.07),
                                        }};
                                        text = new String[]{{
                                            add("minima"),
                                            add("aspernatur"),
                                            add("ex"),
                                        }};
                                    }});
                                    put("maiores", new GoogleCloudDiscoveryengineV1betaCustomAttribute() {{
                                        numbers = new Double[]{{
                                            add(8717.86),
                                            add(6216.93),
                                            add(5027.21),
                                        }};
                                        text = new String[]{{
                                            add("repudiandae"),
                                            add("atque"),
                                        }};
                                    }});
                                }};
                                attributionToken = "atque";
                                completionInfo = new GoogleCloudDiscoveryengineV1betaCompletionInfo() {{
                                    selectedPosition = 120919;
                                    selectedSuggestion = "recusandae";
                                }};
                                directUserRequest = false;
                                documents = new org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaDocumentInfo[]{{
                                    add(new GoogleCloudDiscoveryengineV1betaDocumentInfo() {{
                                        id = "d4f0e101-2563-4f94-a29e-973e922a57a1";
                                        name = "Melody Vandervort";
                                        promotionIds = new String[]{{
                                            add("iure"),
                                        }};
                                        quantity = 59944;
                                    }}),
                                    add(new GoogleCloudDiscoveryengineV1betaDocumentInfo() {{
                                        id = "807e2b6e-3ab8-4845-b059-7a60ff2a54a3";
                                        name = "Sophie Mohr";
                                        promotionIds = new String[]{{
                                            add("ut"),
                                            add("culpa"),
                                        }};
                                        quantity = 238413;
                                    }}),
                                    add(new GoogleCloudDiscoveryengineV1betaDocumentInfo() {{
                                        id = "e865e795-6f92-451a-9a9d-a660ff57bfaa";
                                        name = "Edwin Wolf";
                                        promotionIds = new String[]{{
                                            add("cumque"),
                                            add("vitae"),
                                            add("rerum"),
                                            add("tempora"),
                                        }};
                                        quantity = 335498;
                                    }}),
                                }};
                                eventTime = "inventore";
                                eventType = "fugit";
                                filter = "cumque";
                                mediaInfo = new GoogleCloudDiscoveryengineV1betaMediaInfo() {{
                                    mediaProgressDuration = "quae";
                                    mediaProgressPercentage = 216.88;
                                }};
                                pageInfo = new GoogleCloudDiscoveryengineV1betaPageInfo() {{
                                    pageCategory = "velit";
                                    pageviewId = "aspernatur";
                                    referrerUri = "eum";
                                    uri = "http://mean-sunrise.net";
                                }};
                                panel = new GoogleCloudDiscoveryengineV1betaPanelInfo() {{
                                    displayName = "eos";
                                    panelId = "sapiente";
                                    panelPosition = 433279;
                                    totalPanels = 117320;
                                }};
                                promotionIds = new String[]{{
                                    add("beatae"),
                                    add("cupiditate"),
                                }};
                                searchInfo = new GoogleCloudDiscoveryengineV1betaSearchInfo() {{
                                    offset = 589695;
                                    orderBy = "earum";
                                    searchQuery = "soluta";
                                }};
                                sessionId = "hic";
                                tagIds = new String[]{{
                                    add("eaque"),
                                    add("earum"),
                                    add("perspiciatis"),
                                    add("maiores"),
                                }};
                                transactionInfo = new GoogleCloudDiscoveryengineV1betaTransactionInfo() {{
                                    cost = 8918.01;
                                    currency = "aliquid";
                                    discountValue = 7809.31;
                                    tax = 3803.35;
                                    transactionId = "dolorem";
                                    value = 1478.08;
                                }};
                                userInfo = new GoogleCloudDiscoveryengineV1betaUserInfo() {{
                                    userAgent = "cumque";
                                    userId = "fuga";
                                }};
                                userPseudoId = "ratione";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "animi";
                alt = AltEnum.PROTO;
                callback = "nulla";
                fields = "consequatur";
                key = "quasi";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "ducimus";
                uploadType = "natus";
                uploadProtocol = "occaecati";
            }};            

            DiscoveryengineProjectsLocationsDataStoresUserEventsImportResponse res = sdk.projects.discoveryengineProjectsLocationsDataStoresUserEventsImport(req, new DiscoveryengineProjectsLocationsDataStoresUserEventsImportSecurity("suscipit", "adipisci") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## discoveryengineProjectsLocationsDataStoresUserEventsWrite

Writes a single user event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresUserEventsWriteResponse;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsLocationsDataStoresUserEventsWriteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaCompletionInfo;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaCustomAttribute;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaDocumentInfo;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaMediaInfo;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaPageInfo;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaPanelInfo;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaSearchInfo;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaTransactionInfo;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaUserEvent;
import org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaUserInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest req = new DiscoveryengineProjectsLocationsDataStoresUserEventsWriteRequest("quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDiscoveryengineV1betaUserEvent = new GoogleCloudDiscoveryengineV1betaUserEvent() {{
                    attributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaCustomAttribute>() {{
                        put("nulla", new GoogleCloudDiscoveryengineV1betaCustomAttribute() {{
                            numbers = new Double[]{{
                                add(585.34),
                                add(2711.13),
                                add(4706.21),
                                add(4731.9),
                            }};
                            text = new String[]{{
                                add("iusto"),
                            }};
                        }});
                        put("esse", new GoogleCloudDiscoveryengineV1betaCustomAttribute() {{
                            numbers = new Double[]{{
                                add(9799.63),
                                add(9672.6),
                                add(4237.06),
                            }};
                            text = new String[]{{
                                add("fugiat"),
                            }};
                        }});
                        put("doloremque", new GoogleCloudDiscoveryengineV1betaCustomAttribute() {{
                            numbers = new Double[]{{
                                add(4837.06),
                            }};
                            text = new String[]{{
                                add("esse"),
                                add("ex"),
                            }};
                        }});
                        put("consectetur", new GoogleCloudDiscoveryengineV1betaCustomAttribute() {{
                            numbers = new Double[]{{
                                add(588.7),
                                add(6713.84),
                            }};
                            text = new String[]{{
                                add("nostrum"),
                            }};
                        }});
                    }};
                    attributionToken = "fugiat";
                    completionInfo = new GoogleCloudDiscoveryengineV1betaCompletionInfo() {{
                        selectedPosition = 713767;
                        selectedSuggestion = "aliquid";
                    }};;
                    directUserRequest = false;
                    documents = new org.openapis.openapi.models.shared.GoogleCloudDiscoveryengineV1betaDocumentInfo[]{{
                        add(new GoogleCloudDiscoveryengineV1betaDocumentInfo() {{
                            id = "660659a1-adea-4ab5-851d-6c645b08b618";
                            name = "Peter Prosacco";
                            promotionIds = new String[]{{
                                add("sapiente"),
                            }};
                            quantity = 889288;
                        }}),
                        add(new GoogleCloudDiscoveryengineV1betaDocumentInfo() {{
                            id = "1ade008e-6f8c-45f3-90d8-cdb5a3418143";
                            name = "Alice Bailey";
                            promotionIds = new String[]{{
                                add("laudantium"),
                            }};
                            quantity = 65604;
                        }}),
                        add(new GoogleCloudDiscoveryengineV1betaDocumentInfo() {{
                            id = "3d5208ec-e7e2-453b-a684-51c6c6e205e1";
                            name = "Teri Thiel";
                            promotionIds = new String[]{{
                                add("doloribus"),
                            }};
                            quantity = 918092;
                        }}),
                    }};
                    eventTime = "optio";
                    eventType = "occaecati";
                    filter = "nemo";
                    mediaInfo = new GoogleCloudDiscoveryengineV1betaMediaInfo() {{
                        mediaProgressDuration = "voluptate";
                        mediaProgressPercentage = 5010.63;
                    }};;
                    pageInfo = new GoogleCloudDiscoveryengineV1betaPageInfo() {{
                        pageCategory = "officia";
                        pageviewId = "voluptas";
                        referrerUri = "numquam";
                        uri = "http://mundane-difficulty.com";
                    }};;
                    panel = new GoogleCloudDiscoveryengineV1betaPanelInfo() {{
                        displayName = "ducimus";
                        panelId = "nesciunt";
                        panelPosition = 681740;
                        totalPanels = 514054;
                    }};;
                    promotionIds = new String[]{{
                        add("quasi"),
                        add("rem"),
                    }};
                    searchInfo = new GoogleCloudDiscoveryengineV1betaSearchInfo() {{
                        offset = 851854;
                        orderBy = "dicta";
                        searchQuery = "nisi";
                    }};;
                    sessionId = "consequuntur";
                    tagIds = new String[]{{
                        add("aperiam"),
                    }};
                    transactionInfo = new GoogleCloudDiscoveryengineV1betaTransactionInfo() {{
                        cost = 5854.32;
                        currency = "reiciendis";
                        discountValue = 7468.37;
                        tax = 38.6;
                        transactionId = "omnis";
                        value = 1785.8;
                    }};;
                    userInfo = new GoogleCloudDiscoveryengineV1betaUserInfo() {{
                        userAgent = "occaecati";
                        userId = "iste";
                    }};;
                    userPseudoId = "magni";
                }};;
                accessToken = "inventore";
                alt = AltEnum.PROTO;
                callback = "accusamus";
                fields = "voluptatibus";
                key = "distinctio";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "minima";
                uploadProtocol = "praesentium";
            }};            

            DiscoveryengineProjectsLocationsDataStoresUserEventsWriteResponse res = sdk.projects.discoveryengineProjectsLocationsDataStoresUserEventsWrite(req, new DiscoveryengineProjectsLocationsDataStoresUserEventsWriteSecurity("maxime", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDiscoveryengineV1betaUserEvent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## discoveryengineProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsOperationsGetRequest;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsOperationsGetResponse;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiscoveryengineProjectsOperationsGetRequest req = new DiscoveryengineProjectsOperationsGetRequest("temporibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "commodi";
                alt = AltEnum.PROTO;
                callback = "commodi";
                fields = "totam";
                key = "earum";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "vero";
                uploadProtocol = "voluptatem";
            }};            

            DiscoveryengineProjectsOperationsGetResponse res = sdk.projects.discoveryengineProjectsOperationsGet(req, new DiscoveryengineProjectsOperationsGetSecurity("ipsam", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## discoveryengineProjectsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsOperationsListRequest;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsOperationsListResponse;
import org.openapis.openapi.models.operations.DiscoveryengineProjectsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiscoveryengineProjectsOperationsListRequest req = new DiscoveryengineProjectsOperationsListRequest("alias") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "non";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "sint";
                filter = "nulla";
                key = "deserunt";
                oauthToken = "esse";
                pageSize = 364463L;
                pageToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "quis";
                uploadProtocol = "sint";
            }};            

            DiscoveryengineProjectsOperationsListResponse res = sdk.projects.discoveryengineProjectsOperationsList(req, new DiscoveryengineProjectsOperationsListSecurity("accusamus", "impedit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningListOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
