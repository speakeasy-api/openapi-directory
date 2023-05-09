# locations

### Available Operations

* [mybusinessplaceactionsLocationsPlaceActionLinksCreate](#mybusinessplaceactionslocationsplaceactionlinkscreate) - Creates a place action link associated with the specified location, and returns it. The request is considered duplicate if the `parent`, `place_action_link.uri` and `place_action_link.place_action_type` are the same as a previous request.
* [mybusinessplaceactionsLocationsPlaceActionLinksDelete](#mybusinessplaceactionslocationsplaceactionlinksdelete) - Deletes a place action link from the specified location.
* [mybusinessplaceactionsLocationsPlaceActionLinksGet](#mybusinessplaceactionslocationsplaceactionlinksget) - Gets the specified place action link.
* [mybusinessplaceactionsLocationsPlaceActionLinksList](#mybusinessplaceactionslocationsplaceactionlinkslist) - Lists the place action links for the specified location.
* [mybusinessplaceactionsLocationsPlaceActionLinksPatch](#mybusinessplaceactionslocationsplaceactionlinkspatch) - Updates the specified place action link and returns it.

## mybusinessplaceactionsLocationsPlaceActionLinksCreate

Creates a place action link associated with the specified location, and returns it. The request is considered duplicate if the `parent`, `place_action_link.uri` and `place_action_link.place_action_type` are the same as a previous request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest;
import org.openapis.openapi.models.operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PlaceActionLinkInput;
import org.openapis.openapi.models.shared.PlaceActionLinkPlaceActionTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest req = new MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest("placeat") {{
                dollarXgafv = XgafvEnum.TWO;
                placeActionLinkInput = new PlaceActionLinkInput() {{
                    isPreferred = false;
                    name = "Miriam Huel";
                    placeActionType = PlaceActionLinkPlaceActionTypeEnum.PLACE_ACTION_TYPE_UNSPECIFIED;
                    uri = "http://bountiful-pension.com";
                }};;
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "quo";
                key = "odit";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "maiores";
                uploadProtocol = "molestiae";
            }};            

            MybusinessplaceactionsLocationsPlaceActionLinksCreateResponse res = sdk.locations.mybusinessplaceactionsLocationsPlaceActionLinksCreate(req);

            if (res.placeActionLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessplaceactionsLocationsPlaceActionLinksDelete

Deletes a place action link from the specified location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessplaceactionsLocationsPlaceActionLinksDeleteRequest;
import org.openapis.openapi.models.operations.MybusinessplaceactionsLocationsPlaceActionLinksDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessplaceactionsLocationsPlaceActionLinksDeleteRequest req = new MybusinessplaceactionsLocationsPlaceActionLinksDeleteRequest("quod") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "porro";
                fields = "dolorum";
                key = "dicta";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "occaecati";
                uploadProtocol = "fugit";
            }};            

            MybusinessplaceactionsLocationsPlaceActionLinksDeleteResponse res = sdk.locations.mybusinessplaceactionsLocationsPlaceActionLinksDelete(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessplaceactionsLocationsPlaceActionLinksGet

Gets the specified place action link.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessplaceactionsLocationsPlaceActionLinksGetRequest;
import org.openapis.openapi.models.operations.MybusinessplaceactionsLocationsPlaceActionLinksGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessplaceactionsLocationsPlaceActionLinksGetRequest req = new MybusinessplaceactionsLocationsPlaceActionLinksGetRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "optio";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "commodi";
                key = "molestiae";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "impedit";
                uploadProtocol = "cum";
            }};            

            MybusinessplaceactionsLocationsPlaceActionLinksGetResponse res = sdk.locations.mybusinessplaceactionsLocationsPlaceActionLinksGet(req);

            if (res.placeActionLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessplaceactionsLocationsPlaceActionLinksList

Lists the place action links for the specified location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessplaceactionsLocationsPlaceActionLinksListRequest;
import org.openapis.openapi.models.operations.MybusinessplaceactionsLocationsPlaceActionLinksListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessplaceactionsLocationsPlaceActionLinksListRequest req = new MybusinessplaceactionsLocationsPlaceActionLinksListRequest("esse") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "ad";
                filter = "natus";
                key = "sed";
                oauthToken = "iste";
                pageSize = 222321L;
                pageToken = "natus";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "hic";
                uploadProtocol = "saepe";
            }};            

            MybusinessplaceactionsLocationsPlaceActionLinksListResponse res = sdk.locations.mybusinessplaceactionsLocationsPlaceActionLinksList(req);

            if (res.listPlaceActionLinksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mybusinessplaceactionsLocationsPlaceActionLinksPatch

Updates the specified place action link and returns it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MybusinessplaceactionsLocationsPlaceActionLinksPatchRequest;
import org.openapis.openapi.models.operations.MybusinessplaceactionsLocationsPlaceActionLinksPatchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PlaceActionLinkInput;
import org.openapis.openapi.models.shared.PlaceActionLinkPlaceActionTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessplaceactionsLocationsPlaceActionLinksPatchRequest req = new MybusinessplaceactionsLocationsPlaceActionLinksPatchRequest("fuga") {{
                dollarXgafv = XgafvEnum.ONE;
                placeActionLinkInput = new PlaceActionLinkInput() {{
                    isPreferred = false;
                    name = "Sheryl Kertzmann";
                    placeActionType = PlaceActionLinkPlaceActionTypeEnum.PLACE_ACTION_TYPE_UNSPECIFIED;
                    uri = "http://wiggly-plane.name";
                }};;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "dolorem";
                fields = "corporis";
                key = "explicabo";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "enim";
                updateMask = "omnis";
                uploadType = "nemo";
                uploadProtocol = "minima";
            }};            

            MybusinessplaceactionsLocationsPlaceActionLinksPatchResponse res = sdk.locations.mybusinessplaceactionsLocationsPlaceActionLinksPatch(req);

            if (res.placeActionLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
