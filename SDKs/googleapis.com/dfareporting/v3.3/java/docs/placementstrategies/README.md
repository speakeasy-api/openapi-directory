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

            DfareportingPlacementStrategiesDeleteRequest req = new DfareportingPlacementStrategiesDeleteRequest("sit", "explicabo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laboriosam";
                alt = AltEnum.PROTO;
                callback = "dignissimos";
                fields = "libero";
                key = "qui";
                oauthToken = "illo";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "dolorum";
                uploadProtocol = "quibusdam";
            }};            

            DfareportingPlacementStrategiesDeleteResponse res = sdk.placementStrategies.dfareportingPlacementStrategiesDelete(req, new DfareportingPlacementStrategiesDeleteSecurity("provident", "alias") {{
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

            DfareportingPlacementStrategiesGetRequest req = new DfareportingPlacementStrategiesGetRequest("illum", "aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ut";
                alt = AltEnum.JSON;
                callback = "doloribus";
                fields = "nulla";
                key = "ex";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "animi";
                uploadProtocol = "sunt";
            }};            

            DfareportingPlacementStrategiesGetResponse res = sdk.placementStrategies.dfareportingPlacementStrategiesGet(req, new DfareportingPlacementStrategiesGetSecurity("voluptatem", "saepe") {{
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

            DfareportingPlacementStrategiesInsertRequest req = new DfareportingPlacementStrategiesInsertRequest("ea") {{
                dollarXgafv = XgafvEnum.TWO;
                placementStrategy = new PlacementStrategy() {{
                    accountId = "odit";
                    id = "natus";
                    kind = "quam";
                    name = "Elias Sanford";
                }};;
                accessToken = "commodi";
                alt = AltEnum.MEDIA;
                callback = "veniam";
                fields = "cum";
                key = "voluptatem";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "magni";
                uploadProtocol = "iure";
            }};            

            DfareportingPlacementStrategiesInsertResponse res = sdk.placementStrategies.dfareportingPlacementStrategiesInsert(req, new DfareportingPlacementStrategiesInsertSecurity("doloribus", "quod") {{
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

            DfareportingPlacementStrategiesListRequest req = new DfareportingPlacementStrategiesListRequest("placeat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dignissimos";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "nisi";
                ids = new String[]{{
                    add("sint"),
                    add("esse"),
                    add("in"),
                    add("cum"),
                }};
                key = "soluta";
                maxResults = 772928L;
                oauthToken = "ullam";
                pageToken = "esse";
                prettyPrint = false;
                quotaUser = "sapiente";
                searchString = "ratione";
                sortField = DfareportingPlacementStrategiesListSortFieldEnum.NAME;
                sortOrder = DfareportingPlacementStrategiesListSortOrderEnum.DESCENDING;
                uploadType = "eos";
                uploadProtocol = "quos";
            }};            

            DfareportingPlacementStrategiesListResponse res = sdk.placementStrategies.dfareportingPlacementStrategiesList(req, new DfareportingPlacementStrategiesListSecurity("est", "blanditiis") {{
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

            DfareportingPlacementStrategiesPatchRequest req = new DfareportingPlacementStrategiesPatchRequest("laboriosam", "ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                placementStrategy = new PlacementStrategy() {{
                    accountId = "quo";
                    id = "ad";
                    kind = "atque";
                    name = "Franklin Kub";
                }};;
                accessToken = "sequi";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "similique";
                key = "officia";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "quos";
                uploadProtocol = "aliquam";
            }};            

            DfareportingPlacementStrategiesPatchResponse res = sdk.placementStrategies.dfareportingPlacementStrategiesPatch(req, new DfareportingPlacementStrategiesPatchSecurity("vel", "numquam") {{
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

            DfareportingPlacementStrategiesUpdateRequest req = new DfareportingPlacementStrategiesUpdateRequest("ad") {{
                dollarXgafv = XgafvEnum.ONE;
                placementStrategy = new PlacementStrategy() {{
                    accountId = "omnis";
                    id = "quo";
                    kind = "maiores";
                    name = "Dr. Rick Schamberger";
                }};;
                accessToken = "eaque";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "quis";
                key = "vel";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "illo";
                uploadProtocol = "reiciendis";
            }};            

            DfareportingPlacementStrategiesUpdateResponse res = sdk.placementStrategies.dfareportingPlacementStrategiesUpdate(req, new DfareportingPlacementStrategiesUpdateSecurity("et", "assumenda") {{
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
