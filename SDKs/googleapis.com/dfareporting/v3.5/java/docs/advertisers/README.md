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
import org.openapis.openapi.models.shared.MeasurementPartnerAdvertiserLink;
import org.openapis.openapi.models.shared.MeasurementPartnerAdvertiserLinkLinkStatusEnum;
import org.openapis.openapi.models.shared.MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum;
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
                    measurementPartnerLink = new MeasurementPartnerAdvertiserLink() {{
                        linkStatus = MeasurementPartnerAdvertiserLinkLinkStatusEnum.MEASUREMENT_PARTNER_LINKED;
                        measurementPartner = MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum.INTEGRAL_AD_SCIENCE;
                        partnerAdvertiserId = "ab";
                    }};;
                    name = "Duane Prohaska II";
                    originalFloodlightConfigurationId = "blanditiis";
                    status = AdvertiserStatusEnum.ON_HOLD;
                    subaccountId = "labore";
                    suspended = false;
                }};;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "earum";
                fields = "ullam";
                key = "numquam";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "occaecati";
                uploadProtocol = "itaque";
            }};            

            DfareportingAdvertisersInsertResponse res = sdk.advertisers.dfareportingAdvertisersInsert(req, new DfareportingAdvertisersInsertSecurity("fuga", "consectetur") {{
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

            DfareportingAdvertisersListRequest req = new DfareportingAdvertisersListRequest("modi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "explicabo";
                advertiserGroupIds = new String[]{{
                    add("ipsa"),
                    add("eveniet"),
                }};
                alt = AltEnum.MEDIA;
                callback = "nobis";
                fields = "qui";
                floodlightConfigurationIds = new String[]{{
                    add("consequatur"),
                }};
                ids = new String[]{{
                    add("recusandae"),
                    add("voluptate"),
                    add("deleniti"),
                    add("est"),
                }};
                includeAdvertisersWithoutGroupsOnly = false;
                key = "et";
                maxResults = 710483L;
                oauthToken = "quibusdam";
                onlyParent = false;
                pageToken = "quos";
                prettyPrint = false;
                quotaUser = "maiores";
                searchString = "quidem";
                sortField = DfareportingAdvertisersListSortFieldEnum.ID;
                sortOrder = DfareportingAdvertisersListSortOrderEnum.DESCENDING;
                status = DfareportingAdvertisersListStatusEnum.APPROVED;
                subaccountId = "fuga";
                uploadType = "dicta";
                uploadProtocol = "architecto";
            }};            

            DfareportingAdvertisersListResponse res = sdk.advertisers.dfareportingAdvertisersList(req, new DfareportingAdvertisersListSecurity("suscipit", "eligendi") {{
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
import org.openapis.openapi.models.shared.MeasurementPartnerAdvertiserLink;
import org.openapis.openapi.models.shared.MeasurementPartnerAdvertiserLinkLinkStatusEnum;
import org.openapis.openapi.models.shared.MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAdvertisersPatchRequest req = new DfareportingAdvertisersPatchRequest("officiis", "dignissimos") {{
                dollarXgafv = XgafvEnum.ONE;
                advertiser = new Advertiser() {{
                    accountId = "ratione";
                    advertiserGroupId = "possimus";
                    clickThroughUrlSuffix = "quaerat";
                    defaultClickThroughEventTagId = "aut";
                    defaultEmail = "natus";
                    floodlightConfigurationId = "esse";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "delectus";
                        etag = "deserunt";
                        id = "30e9af72-5b29-4122-830d-83f5aeb7799d";
                        kind = "sunt";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "vero";
                    }};;
                    id = "deleniti";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "optio";
                        etag = "quasi";
                        id = "f8493825-fdc4-42c8-b6c2-c2dfb4cfc1c7";
                        kind = "nisi";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "sequi";
                    }};;
                    kind = "alias";
                    measurementPartnerLink = new MeasurementPartnerAdvertiserLink() {{
                        linkStatus = MeasurementPartnerAdvertiserLinkLinkStatusEnum.MEASUREMENT_PARTNER_MODE_CHANGE_PENDING;
                        measurementPartner = MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum.INTEGRAL_AD_SCIENCE;
                        partnerAdvertiserId = "numquam";
                    }};;
                    name = "Miss Elisa Reichert";
                    originalFloodlightConfigurationId = "eos";
                    status = AdvertiserStatusEnum.APPROVED;
                    subaccountId = "hic";
                    suspended = false;
                }};;
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "ab";
                fields = "magnam";
                key = "pariatur";
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "autem";
                uploadType = "tempore";
                uploadProtocol = "recusandae";
            }};            

            DfareportingAdvertisersPatchResponse res = sdk.advertisers.dfareportingAdvertisersPatch(req, new DfareportingAdvertisersPatchSecurity("nostrum", "officia") {{
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
import org.openapis.openapi.models.shared.MeasurementPartnerAdvertiserLink;
import org.openapis.openapi.models.shared.MeasurementPartnerAdvertiserLinkLinkStatusEnum;
import org.openapis.openapi.models.shared.MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAdvertisersUpdateRequest req = new DfareportingAdvertisersUpdateRequest("voluptas") {{
                dollarXgafv = XgafvEnum.TWO;
                advertiser = new Advertiser() {{
                    accountId = "corporis";
                    advertiserGroupId = "excepturi";
                    clickThroughUrlSuffix = "natus";
                    defaultClickThroughEventTagId = "deleniti";
                    defaultEmail = "necessitatibus";
                    floodlightConfigurationId = "aspernatur";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "dolores";
                        etag = "laborum";
                        id = "e20da16f-c2b2-471a-a89c-57e854e90439";
                        kind = "quibusdam";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "consequuntur";
                    }};;
                    id = "consequuntur";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "eius";
                        etag = "commodi";
                        id = "56946240-7084-4f7a-b37c-ef02225194db";
                        kind = "exercitationem";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "modi";
                    }};;
                    kind = "quasi";
                    measurementPartnerLink = new MeasurementPartnerAdvertiserLink() {{
                        linkStatus = MeasurementPartnerAdvertiserLinkLinkStatusEnum.MEASUREMENT_PARTNER_UNLINKED;
                        measurementPartner = MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum.INTEGRAL_AD_SCIENCE;
                        partnerAdvertiserId = "possimus";
                    }};;
                    name = "Shane Jakubowski";
                    originalFloodlightConfigurationId = "doloribus";
                    status = AdvertiserStatusEnum.ON_HOLD;
                    subaccountId = "alias";
                    suspended = false;
                }};;
                accessToken = "deserunt";
                alt = AltEnum.JSON;
                callback = "autem";
                fields = "quo";
                key = "molestiae";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "impedit";
                uploadProtocol = "cupiditate";
            }};            

            DfareportingAdvertisersUpdateResponse res = sdk.advertisers.dfareportingAdvertisersUpdate(req, new DfareportingAdvertisersUpdateSecurity("deleniti", "quasi") {{
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
