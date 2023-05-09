# placementStrategies

### Available Operations

* [dfareportingPlacementStrategiesDelete](#dfareportingplacementstrategiesdelete) - Deletes an existing placement strategy.
* [dfareportingPlacementStrategiesGet](#dfareportingplacementstrategiesget) - Gets one placement strategy by ID.
* [dfareportingPlacementStrategiesInsert](#dfareportingplacementstrategiesinsert) - Inserts a new placement strategy.
* [dfareportingPlacementStrategiesList](#dfareportingplacementstrategieslist) - Retrieves a list of placement strategies, possibly filtered. This method supports paging.
* [dfareportingPlacementStrategiesPatch](#dfareportingplacementstrategiespatch) - Updates an existing placement strategy. This method supports patch semantics.
* [dfareportingPlacementStrategiesUpdate](#dfareportingplacementstrategiesupdate) - Updates an existing placement strategy.

## dfareportingPlacementStrategiesDelete

Deletes an existing placement strategy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingPlacementStrategiesDeleteRequest;
import org.openapis.openapi.models.operations.DfareportingPlacementStrategiesDeleteResponse;
import org.openapis.openapi.models.operations.DfareportingPlacementStrategiesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingPlacementStrategiesDeleteRequest req = new DfareportingPlacementStrategiesDeleteRequest("odit", "voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestiae";
                alt = AltEnum.MEDIA;
                callback = "culpa";
                fields = "quis";
                key = "mollitia";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "eum";
                uploadProtocol = "ipsam";
            }};            

            DfareportingPlacementStrategiesDeleteResponse res = sdk.placementStrategies.dfareportingPlacementStrategiesDelete(req, new DfareportingPlacementStrategiesDeleteSecurity("fuga", "odio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingPlacementStrategiesGet

Gets one placement strategy by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingPlacementStrategiesGetRequest;
import org.openapis.openapi.models.operations.DfareportingPlacementStrategiesGetResponse;
import org.openapis.openapi.models.operations.DfareportingPlacementStrategiesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingPlacementStrategiesGetRequest req = new DfareportingPlacementStrategiesGetRequest("unde", "sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsam";
                alt = AltEnum.JSON;
                callback = "voluptate";
                fields = "ab";
                key = "repellat";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "quo";
                uploadProtocol = "alias";
            }};            

            DfareportingPlacementStrategiesGetResponse res = sdk.placementStrategies.dfareportingPlacementStrategiesGet(req, new DfareportingPlacementStrategiesGetSecurity("illum", "neque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.placementStrategy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingPlacementStrategiesInsert

Inserts a new placement strategy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingPlacementStrategiesInsertRequest;
import org.openapis.openapi.models.operations.DfareportingPlacementStrategiesInsertResponse;
import org.openapis.openapi.models.operations.DfareportingPlacementStrategiesInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PlacementStrategy;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingPlacementStrategiesInsertRequest req = new DfareportingPlacementStrategiesInsertRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                placementStrategy = new PlacementStrategy() {{
                    accountId = "reiciendis";
                    id = "debitis";
                    kind = "pariatur";
                    name = "Drew Schimmel";
                }};;
                accessToken = "a";
                alt = AltEnum.PROTO;
                callback = "nobis";
                fields = "quaerat";
                key = "ullam";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "perspiciatis";
                uploadProtocol = "alias";
            }};            

            DfareportingPlacementStrategiesInsertResponse res = sdk.placementStrategies.dfareportingPlacementStrategiesInsert(req, new DfareportingPlacementStrategiesInsertSecurity("quas", "sint") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.placementStrategy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingPlacementStrategiesList

Retrieves a list of placement strategies, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingPlacementStrategiesListRequest;
import org.openapis.openapi.models.operations.DfareportingPlacementStrategiesListResponse;
import org.openapis.openapi.models.operations.DfareportingPlacementStrategiesListSecurity;
import org.openapis.openapi.models.operations.DfareportingPlacementStrategiesListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingPlacementStrategiesListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingPlacementStrategiesListRequest req = new DfareportingPlacementStrategiesListRequest("necessitatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "reprehenderit";
                alt = AltEnum.JSON;
                callback = "asperiores";
                fields = "nulla";
                ids = new String[]{{
                    add("ut"),
                    add("at"),
                    add("voluptas"),
                }};
                key = "perspiciatis";
                maxResults = 475153L;
                oauthToken = "tempore";
                pageToken = "facere";
                prettyPrint = false;
                quotaUser = "at";
                searchString = "perspiciatis";
                sortField = DfareportingPlacementStrategiesListSortFieldEnum.NAME;
                sortOrder = DfareportingPlacementStrategiesListSortOrderEnum.DESCENDING;
                uploadType = "corrupti";
                uploadProtocol = "corporis";
            }};            

            DfareportingPlacementStrategiesListResponse res = sdk.placementStrategies.dfareportingPlacementStrategiesList(req, new DfareportingPlacementStrategiesListSecurity("repudiandae", "incidunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.placementStrategiesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingPlacementStrategiesPatch

Updates an existing placement strategy. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingPlacementStrategiesPatchRequest;
import org.openapis.openapi.models.operations.DfareportingPlacementStrategiesPatchResponse;
import org.openapis.openapi.models.operations.DfareportingPlacementStrategiesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PlacementStrategy;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingPlacementStrategiesPatchRequest req = new DfareportingPlacementStrategiesPatchRequest("neque", "iusto") {{
                dollarXgafv = XgafvEnum.ONE;
                placementStrategy = new PlacementStrategy() {{
                    accountId = "numquam";
                    id = "officia";
                    kind = "quis";
                    name = "Ron Connelly";
                }};;
                accessToken = "itaque";
                alt = AltEnum.PROTO;
                callback = "repellendus";
                fields = "in";
                key = "rem";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "vero";
                uploadProtocol = "quis";
            }};            

            DfareportingPlacementStrategiesPatchResponse res = sdk.placementStrategies.dfareportingPlacementStrategiesPatch(req, new DfareportingPlacementStrategiesPatchSecurity("earum", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.placementStrategy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingPlacementStrategiesUpdate

Updates an existing placement strategy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingPlacementStrategiesUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingPlacementStrategiesUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingPlacementStrategiesUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PlacementStrategy;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingPlacementStrategiesUpdateRequest req = new DfareportingPlacementStrategiesUpdateRequest("mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                placementStrategy = new PlacementStrategy() {{
                    accountId = "accusamus";
                    id = "ullam";
                    kind = "minima";
                    name = "Kristina Kozey";
                }};;
                accessToken = "laboriosam";
                alt = AltEnum.JSON;
                callback = "laudantium";
                fields = "sunt";
                key = "repellat";
                oauthToken = "aliquam";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "eveniet";
                uploadProtocol = "dolorem";
            }};            

            DfareportingPlacementStrategiesUpdateResponse res = sdk.placementStrategies.dfareportingPlacementStrategiesUpdate(req, new DfareportingPlacementStrategiesUpdateSecurity("laborum", "eos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.placementStrategy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
