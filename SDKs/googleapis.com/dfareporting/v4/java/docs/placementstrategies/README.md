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

            DfareportingPlacementStrategiesDeleteRequest req = new DfareportingPlacementStrategiesDeleteRequest("esse", "facere") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptas";
                alt = AltEnum.JSON;
                callback = "aliquid";
                fields = "explicabo";
                key = "sint";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "beatae";
                uploadProtocol = "magnam";
            }};            

            DfareportingPlacementStrategiesDeleteResponse res = sdk.placementStrategies.dfareportingPlacementStrategiesDelete(req, new DfareportingPlacementStrategiesDeleteSecurity("cumque", "neque") {{
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

            DfareportingPlacementStrategiesGetRequest req = new DfareportingPlacementStrategiesGetRequest("pariatur", "distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cumque";
                alt = AltEnum.MEDIA;
                callback = "omnis";
                fields = "sapiente";
                key = "consectetur";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "at";
                uploadProtocol = "quia";
            }};            

            DfareportingPlacementStrategiesGetResponse res = sdk.placementStrategies.dfareportingPlacementStrategiesGet(req, new DfareportingPlacementStrategiesGetSecurity("libero", "vero") {{
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

            DfareportingPlacementStrategiesInsertRequest req = new DfareportingPlacementStrategiesInsertRequest("quos") {{
                dollarXgafv = XgafvEnum.ONE;
                placementStrategy = new PlacementStrategy() {{
                    accountId = "laudantium";
                    id = "molestiae";
                    kind = "voluptatem";
                    name = "Valerie Morissette";
                }};;
                accessToken = "dolore";
                alt = AltEnum.MEDIA;
                callback = "est";
                fields = "mollitia";
                key = "laudantium";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "minima";
                uploadProtocol = "mollitia";
            }};            

            DfareportingPlacementStrategiesInsertResponse res = sdk.placementStrategies.dfareportingPlacementStrategiesInsert(req, new DfareportingPlacementStrategiesInsertSecurity("sequi", "eos") {{
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

            DfareportingPlacementStrategiesListRequest req = new DfareportingPlacementStrategiesListRequest("laudantium") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fugit";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "facilis";
                ids = new String[]{{
                    add("beatae"),
                    add("error"),
                }};
                key = "quibusdam";
                maxResults = 70720L;
                oauthToken = "eligendi";
                pageToken = "accusamus";
                prettyPrint = false;
                quotaUser = "officia";
                searchString = "voluptas";
                sortField = DfareportingPlacementStrategiesListSortFieldEnum.ID;
                sortOrder = DfareportingPlacementStrategiesListSortOrderEnum.ASCENDING;
                uploadType = "facere";
                uploadProtocol = "blanditiis";
            }};            

            DfareportingPlacementStrategiesListResponse res = sdk.placementStrategies.dfareportingPlacementStrategiesList(req, new DfareportingPlacementStrategiesListSecurity("suscipit", "itaque") {{
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

            DfareportingPlacementStrategiesPatchRequest req = new DfareportingPlacementStrategiesPatchRequest("nesciunt", "quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                placementStrategy = new PlacementStrategy() {{
                    accountId = "quis";
                    id = "voluptates";
                    kind = "aliquam";
                    name = "Mrs. Alfonso Flatley";
                }};;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "quas";
                fields = "optio";
                key = "necessitatibus";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "minus";
                uploadProtocol = "id";
            }};            

            DfareportingPlacementStrategiesPatchResponse res = sdk.placementStrategies.dfareportingPlacementStrategiesPatch(req, new DfareportingPlacementStrategiesPatchSecurity("porro", "libero") {{
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

            DfareportingPlacementStrategiesUpdateRequest req = new DfareportingPlacementStrategiesUpdateRequest("perferendis") {{
                dollarXgafv = XgafvEnum.TWO;
                placementStrategy = new PlacementStrategy() {{
                    accountId = "ratione";
                    id = "vero";
                    kind = "mollitia";
                    name = "Mrs. Kurt Hansen";
                }};;
                accessToken = "harum";
                alt = AltEnum.MEDIA;
                callback = "quod";
                fields = "asperiores";
                key = "ea";
                oauthToken = "neque";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "sed";
                uploadProtocol = "quasi";
            }};            

            DfareportingPlacementStrategiesUpdateResponse res = sdk.placementStrategies.dfareportingPlacementStrategiesUpdate(req, new DfareportingPlacementStrategiesUpdateSecurity("nemo", "sunt") {{
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
