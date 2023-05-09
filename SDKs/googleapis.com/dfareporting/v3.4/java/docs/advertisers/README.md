# advertisers

### Available Operations

* [dfareportingAdvertisersGet](#dfareportingadvertisersget) - Gets one advertiser by ID.
* [dfareportingAdvertisersInsert](#dfareportingadvertisersinsert) - Inserts a new advertiser.
* [dfareportingAdvertisersList](#dfareportingadvertiserslist) - Retrieves a list of advertisers, possibly filtered. This method supports paging.
* [dfareportingAdvertisersPatch](#dfareportingadvertiserspatch) - Updates an existing advertiser. This method supports patch semantics.
* [dfareportingAdvertisersUpdate](#dfareportingadvertisersupdate) - Updates an existing advertiser.

## dfareportingAdvertisersGet

Gets one advertiser by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAdvertisersGetRequest;
import org.openapis.openapi.models.operations.DfareportingAdvertisersGetResponse;
import org.openapis.openapi.models.operations.DfareportingAdvertisersGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAdvertisersGetRequest req = new DfareportingAdvertisersGetRequest("laudantium", "aspernatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "repudiandae";
                alt = AltEnum.JSON;
                callback = "inventore";
                fields = "ullam";
                key = "iusto";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "sed";
                uploadProtocol = "dolorem";
            }};            

            DfareportingAdvertisersGetResponse res = sdk.advertisers.dfareportingAdvertisersGet(req, new DfareportingAdvertisersGetSecurity("eaque", "exercitationem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.advertiser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAdvertisersInsert

Inserts a new advertiser.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAdvertisersInsertRequest;
import org.openapis.openapi.models.operations.DfareportingAdvertisersInsertResponse;
import org.openapis.openapi.models.operations.DfareportingAdvertisersInsertSecurity;
import org.openapis.openapi.models.shared.Advertiser;
import org.openapis.openapi.models.shared.AdvertiserStatusEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAdvertisersInsertRequest req = new DfareportingAdvertisersInsertRequest("amet") {{
                dollarXgafv = XgafvEnum.ONE;
                advertiser = new Advertiser() {{
                    accountId = "voluptate";
                    advertiserGroupId = "pariatur";
                    clickThroughUrlSuffix = "minus";
                    defaultClickThroughEventTagId = "a";
                    defaultEmail = "fuga";
                    floodlightConfigurationId = "totam";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "cupiditate";
                        etag = "at";
                        id = "f975e356-6860-492e-9c3d-dc5f111dea10";
                        kind = "odit";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "pariatur";
                    }};;
                    id = "enim";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "numquam";
                        etag = "architecto";
                        id = "a4d190fe-b217-480b-8cc0-dbbddb484708";
                        kind = "reiciendis";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "aliquam";
                    }};;
                    kind = "repudiandae";
                    name = "Faye Bernhard";
                    originalFloodlightConfigurationId = "rerum";
                    status = AdvertiserStatusEnum.ON_HOLD;
                    subaccountId = "ab";
                    suspended = false;
                }};;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "porro";
                fields = "labore";
                key = "impedit";
                oauthToken = "ut";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "ullam";
                uploadProtocol = "numquam";
            }};            

            DfareportingAdvertisersInsertResponse res = sdk.advertisers.dfareportingAdvertisersInsert(req, new DfareportingAdvertisersInsertSecurity("enim", "cupiditate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.advertiser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAdvertisersList

Retrieves a list of advertisers, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAdvertisersListRequest;
import org.openapis.openapi.models.operations.DfareportingAdvertisersListResponse;
import org.openapis.openapi.models.operations.DfareportingAdvertisersListSecurity;
import org.openapis.openapi.models.operations.DfareportingAdvertisersListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingAdvertisersListSortOrderEnum;
import org.openapis.openapi.models.operations.DfareportingAdvertisersListStatusEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAdvertisersListRequest req = new DfareportingAdvertisersListRequest("occaecati") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fuga";
                advertiserGroupIds = new String[]{{
                    add("modi"),
                }};
                alt = AltEnum.JSON;
                callback = "explicabo";
                fields = "suscipit";
                floodlightConfigurationIds = new String[]{{
                    add("eveniet"),
                }};
                ids = new String[]{{
                    add("nobis"),
                    add("qui"),
                    add("accusantium"),
                }};
                includeAdvertisersWithoutGroupsOnly = false;
                key = "consequatur";
                maxResults = 773262L;
                oauthToken = "recusandae";
                onlyParent = false;
                pageToken = "voluptate";
                prettyPrint = false;
                quotaUser = "deleniti";
                searchString = "est";
                sortField = DfareportingAdvertisersListSortFieldEnum.ID;
                sortOrder = DfareportingAdvertisersListSortOrderEnum.DESCENDING;
                status = DfareportingAdvertisersListStatusEnum.ON_HOLD;
                subaccountId = "quos";
                uploadType = "maiores";
                uploadProtocol = "quidem";
            }};            

            DfareportingAdvertisersListResponse res = sdk.advertisers.dfareportingAdvertisersList(req, new DfareportingAdvertisersListSecurity("in", "culpa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.advertisersListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAdvertisersPatch

Updates an existing advertiser. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAdvertisersPatchRequest;
import org.openapis.openapi.models.operations.DfareportingAdvertisersPatchResponse;
import org.openapis.openapi.models.operations.DfareportingAdvertisersPatchSecurity;
import org.openapis.openapi.models.shared.Advertiser;
import org.openapis.openapi.models.shared.AdvertiserStatusEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAdvertisersPatchRequest req = new DfareportingAdvertisersPatchRequest("doloremque", "fuga") {{
                dollarXgafv = XgafvEnum.ONE;
                advertiser = new Advertiser() {{
                    accountId = "architecto";
                    advertiserGroupId = "suscipit";
                    clickThroughUrlSuffix = "eligendi";
                    defaultClickThroughEventTagId = "officiis";
                    defaultEmail = "dignissimos";
                    floodlightConfigurationId = "fugit";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "ratione";
                        etag = "possimus";
                        id = "4097fa30-e9af-4725-b291-22030d83f5ae";
                        kind = "distinctio";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "dignissimos";
                    }};;
                    id = "provident";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "occaecati";
                        etag = "assumenda";
                        id = "22e8c1f8-4938-425f-9c42-c876c2c2dfb4";
                        kind = "eligendi";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "quo";
                    }};;
                    kind = "illo";
                    name = "Erik Huel";
                    originalFloodlightConfigurationId = "alias";
                    status = AdvertiserStatusEnum.ON_HOLD;
                    subaccountId = "quos";
                    suspended = false;
                }};;
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "nam";
                key = "architecto";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "assumenda";
                uploadType = "eos";
                uploadProtocol = "dolorem";
            }};            

            DfareportingAdvertisersPatchResponse res = sdk.advertisers.dfareportingAdvertisersPatch(req, new DfareportingAdvertisersPatchSecurity("hic", "repellendus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.advertiser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAdvertisersUpdate

Updates an existing advertiser.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAdvertisersUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingAdvertisersUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingAdvertisersUpdateSecurity;
import org.openapis.openapi.models.shared.Advertiser;
import org.openapis.openapi.models.shared.AdvertiserStatusEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAdvertisersUpdateRequest req = new DfareportingAdvertisersUpdateRequest("nam") {{
                dollarXgafv = XgafvEnum.ONE;
                advertiser = new Advertiser() {{
                    accountId = "magnam";
                    advertiserGroupId = "pariatur";
                    clickThroughUrlSuffix = "expedita";
                    defaultClickThroughEventTagId = "autem";
                    defaultEmail = "tempore";
                    floodlightConfigurationId = "recusandae";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "nostrum";
                        etag = "officia";
                        id = "685998e2-2ae2-40da-96fc-2b271a289c57";
                        kind = "itaque";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "nemo";
                    }};;
                    id = "non";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "recusandae";
                        etag = "omnis";
                        id = "0439d222-4656-4946-a407-084f7ab37cef";
                        kind = "accusantium";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "eos";
                    }};;
                    kind = "consequuntur";
                    name = "Jean Mayert";
                    originalFloodlightConfigurationId = "quidem";
                    status = AdvertiserStatusEnum.APPROVED;
                    subaccountId = "veniam";
                    suspended = false;
                }};;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "quae";
                fields = "similique";
                key = "possimus";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "ex";
                uploadProtocol = "sint";
            }};            

            DfareportingAdvertisersUpdateResponse res = sdk.advertisers.dfareportingAdvertisersUpdate(req, new DfareportingAdvertisersUpdateSecurity("est", "doloribus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.advertiser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
