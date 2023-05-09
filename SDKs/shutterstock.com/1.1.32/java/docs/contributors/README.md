# contributors

### Available Operations

* [getContributor](#getcontributor) - Get details about a single contributor
* [getContributorCollectionItems](#getcontributorcollectionitems) - Get the items in contributors' collections
* [getContributorCollections](#getcontributorcollections) - Get details about contributors' collections
* [getContributorCollectionsList](#getcontributorcollectionslist) - List contributors' collections
* [getContributorList](#getcontributorlist) - Get details about multiple contributors

## getContributor

This endpoint shows information about a single contributor, including contributor type, equipment they use, and other attributes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContributorRequest;
import org.openapis.openapi.models.operations.GetContributorResponse;
import org.openapis.openapi.models.operations.GetContributorSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContributorRequest req = new GetContributorRequest("nulla");            

            GetContributorResponse res = sdk.contributors.getContributor(req, new GetContributorSecurity() {{
                basic = new SchemeBasic("quas", "esse") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.contributorProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContributorCollectionItems

This endpoint lists the IDs of items in a contributor's collection and the date that each was added.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContributorCollectionItemsRequest;
import org.openapis.openapi.models.operations.GetContributorCollectionItemsResponse;
import org.openapis.openapi.models.operations.GetContributorCollectionItemsSecurity;
import org.openapis.openapi.models.operations.GetContributorCollectionItemsSortEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContributorCollectionItemsRequest req = new GetContributorCollectionItemsRequest("quasi", "a") {{
                page = 621679L;
                perPage = 575751L;
                sort = GetContributorCollectionItemsSortEnum.OLDEST;
            }};            

            GetContributorCollectionItemsResponse res = sdk.contributors.getContributorCollectionItems(req, new GetContributorCollectionItemsSecurity() {{
                basic = new SchemeBasic("possimus", "quia") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.collectionItemDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContributorCollections

This endpoint gets more detailed information about a contributor's collection, including its cover image, timestamps for its creation, and most recent update. To get the items in collections, use GET /v2/contributors/{contributor_id}/collections/{id}/items.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContributorCollectionsRequest;
import org.openapis.openapi.models.operations.GetContributorCollectionsResponse;
import org.openapis.openapi.models.operations.GetContributorCollectionsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContributorCollectionsRequest req = new GetContributorCollectionsRequest("eveniet", "asperiores");            

            GetContributorCollectionsResponse res = sdk.contributors.getContributorCollections(req, new GetContributorCollectionsSecurity() {{
                basic = new SchemeBasic("facere", "veritatis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.collection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContributorCollectionsList

This endpoint lists collections based on contributor ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContributorCollectionsListRequest;
import org.openapis.openapi.models.operations.GetContributorCollectionsListResponse;
import org.openapis.openapi.models.operations.GetContributorCollectionsListSecurity;
import org.openapis.openapi.models.operations.GetContributorCollectionsListSortEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContributorCollectionsListRequest req = new GetContributorCollectionsListRequest("consequuntur") {{
                sort = GetContributorCollectionsListSortEnum.NEWEST;
            }};            

            GetContributorCollectionsListResponse res = sdk.contributors.getContributorCollectionsList(req, new GetContributorCollectionsListSecurity() {{
                basic = new SchemeBasic("similique", "culpa") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.collectionDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContributorList

This endpoint lists information about one or more contributors, including contributor type, equipment they use and other attributes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContributorListRequest;
import org.openapis.openapi.models.operations.GetContributorListResponse;
import org.openapis.openapi.models.operations.GetContributorListSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContributorListRequest req = new GetContributorListRequest(                new String[]{{
                                add("tenetur"),
                                add("quae"),
                            }});            

            GetContributorListResponse res = sdk.contributors.getContributorList(req, new GetContributorListSecurity() {{
                basic = new SchemeBasic("earum", "vel") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.contributorProfileDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
