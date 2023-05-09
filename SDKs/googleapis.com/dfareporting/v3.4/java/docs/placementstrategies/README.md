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

            DfareportingPlacementStrategiesDeleteRequest req = new DfareportingPlacementStrategiesDeleteRequest("officia", "exercitationem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quos";
                alt = AltEnum.JSON;
                callback = "vel";
                fields = "numquam";
                key = "ad";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "quo";
                uploadProtocol = "maiores";
            }};            

            DfareportingPlacementStrategiesDeleteResponse res = sdk.placementStrategies.dfareportingPlacementStrategiesDelete(req, new DfareportingPlacementStrategiesDeleteSecurity("maxime", "suscipit") {{
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

            DfareportingPlacementStrategiesGetRequest req = new DfareportingPlacementStrategiesGetRequest("quisquam", "eaque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "dolor";
                fields = "maiores";
                key = "quis";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "sequi";
                uploadProtocol = "illo";
            }};            

            DfareportingPlacementStrategiesGetResponse res = sdk.placementStrategies.dfareportingPlacementStrategiesGet(req, new DfareportingPlacementStrategiesGetSecurity("reiciendis", "et") {{
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

            DfareportingPlacementStrategiesInsertRequest req = new DfareportingPlacementStrategiesInsertRequest("assumenda") {{
                dollarXgafv = XgafvEnum.TWO;
                placementStrategy = new PlacementStrategy() {{
                    accountId = "itaque";
                    id = "at";
                    kind = "rem";
                    name = "Shelia Denesik";
                }};;
                accessToken = "atque";
                alt = AltEnum.MEDIA;
                callback = "a";
                fields = "culpa";
                key = "cum";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "laudantium";
                uploadProtocol = "nisi";
            }};            

            DfareportingPlacementStrategiesInsertResponse res = sdk.placementStrategies.dfareportingPlacementStrategiesInsert(req, new DfareportingPlacementStrategiesInsertSecurity("necessitatibus", "consequuntur") {{
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

            DfareportingPlacementStrategiesListRequest req = new DfareportingPlacementStrategiesListRequest("aliquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "earum";
                alt = AltEnum.JSON;
                callback = "dolorem";
                fields = "quidem";
                ids = new String[]{{
                    add("ratione"),
                }};
                key = "ut";
                maxResults = 131462L;
                oauthToken = "dolore";
                pageToken = "inventore";
                prettyPrint = false;
                quotaUser = "molestiae";
                searchString = "illum";
                sortField = DfareportingPlacementStrategiesListSortFieldEnum.ID;
                sortOrder = DfareportingPlacementStrategiesListSortOrderEnum.ASCENDING;
                uploadType = "debitis";
                uploadProtocol = "nesciunt";
            }};            

            DfareportingPlacementStrategiesListResponse res = sdk.placementStrategies.dfareportingPlacementStrategiesList(req, new DfareportingPlacementStrategiesListSecurity("sapiente", "nisi") {{
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

            DfareportingPlacementStrategiesPatchRequest req = new DfareportingPlacementStrategiesPatchRequest("explicabo", "similique") {{
                dollarXgafv = XgafvEnum.TWO;
                placementStrategy = new PlacementStrategy() {{
                    accountId = "cupiditate";
                    id = "culpa";
                    kind = "recusandae";
                    name = "Lee Tromp";
                }};;
                accessToken = "expedita";
                alt = AltEnum.JSON;
                callback = "id";
                fields = "provident";
                key = "cumque";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "quia";
                uploadProtocol = "maxime";
            }};            

            DfareportingPlacementStrategiesPatchResponse res = sdk.placementStrategies.dfareportingPlacementStrategiesPatch(req, new DfareportingPlacementStrategiesPatchSecurity("exercitationem", "necessitatibus") {{
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

            DfareportingPlacementStrategiesUpdateRequest req = new DfareportingPlacementStrategiesUpdateRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                placementStrategy = new PlacementStrategy() {{
                    accountId = "mollitia";
                    id = "corporis";
                    kind = "repellendus";
                    name = "Maggie Nienow";
                }};;
                accessToken = "veniam";
                alt = AltEnum.JSON;
                callback = "quas";
                fields = "soluta";
                key = "quibusdam";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "rem";
                uploadType = "eaque";
                uploadProtocol = "optio";
            }};            

            DfareportingPlacementStrategiesUpdateResponse res = sdk.placementStrategies.dfareportingPlacementStrategiesUpdate(req, new DfareportingPlacementStrategiesUpdateSecurity("sed", "excepturi") {{
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
