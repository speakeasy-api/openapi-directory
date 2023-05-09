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

            DfareportingAdvertisersGetRequest req = new DfareportingAdvertisersGetRequest("quas", "ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fuga";
                alt = AltEnum.PROTO;
                callback = "maiores";
                fields = "error";
                key = "recusandae";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "sapiente";
                uploadProtocol = "voluptatibus";
            }};            

            DfareportingAdvertisersGetResponse res = sdk.advertisers.dfareportingAdvertisersGet(req, new DfareportingAdvertisersGetSecurity("assumenda", "repellendus") {{
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

            DfareportingAdvertisersInsertRequest req = new DfareportingAdvertisersInsertRequest("omnis") {{
                dollarXgafv = XgafvEnum.TWO;
                advertiser = new Advertiser() {{
                    accountId = "odio";
                    advertiserGroupId = "voluptatibus";
                    clickThroughUrlSuffix = "aut";
                    defaultClickThroughEventTagId = "quam";
                    defaultEmail = "omnis";
                    floodlightConfigurationId = "similique";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "asperiores";
                        etag = "modi";
                        id = "d35724cd-b0f4-4d28-9187-d56844eded85";
                        kind = "animi";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "quae";
                    }};;
                    id = "eum";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "nostrum";
                        etag = "eveniet";
                        id = "628bdfc2-032b-46c8-b992-3b7e13584f7a";
                        kind = "itaque";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "eos";
                    }};;
                    kind = "impedit";
                    measurementPartnerLink = new MeasurementPartnerAdvertiserLink() {{
                        linkStatus = MeasurementPartnerAdvertiserLinkLinkStatusEnum.MEASUREMENT_PARTNER_LINK_FAILURE;
                        measurementPartner = MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum.INTEGRAL_AD_SCIENCE;
                        partnerAdvertiserId = "natus";
                    }};;
                    name = "Essie Larkin";
                    originalFloodlightConfigurationId = "repudiandae";
                    status = AdvertiserStatusEnum.APPROVED;
                    subaccountId = "inventore";
                    suspended = false;
                }};;
                accessToken = "ullam";
                alt = AltEnum.MEDIA;
                callback = "inventore";
                fields = "voluptate";
                key = "sed";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "exercitationem";
                uploadProtocol = "amet";
            }};            

            DfareportingAdvertisersInsertResponse res = sdk.advertisers.dfareportingAdvertisersInsert(req, new DfareportingAdvertisersInsertSecurity("voluptate", "voluptate") {{
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

            DfareportingAdvertisersListRequest req = new DfareportingAdvertisersListRequest("pariatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "a";
                advertiserGroupIds = new String[]{{
                    add("totam"),
                    add("cupiditate"),
                    add("at"),
                }};
                alt = AltEnum.PROTO;
                callback = "omnis";
                fields = "quam";
                floodlightConfigurationIds = new String[]{{
                    add("voluptates"),
                    add("sequi"),
                }};
                ids = new String[]{{
                    add("commodi"),
                    add("vel"),
                }};
                includeAdvertisersWithoutGroupsOnly = false;
                key = "rem";
                maxResults = 397268L;
                oauthToken = "aperiam";
                onlyParent = false;
                pageToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "fugit";
                searchString = "itaque";
                sortField = DfareportingAdvertisersListSortFieldEnum.NAME;
                sortOrder = DfareportingAdvertisersListSortOrderEnum.DESCENDING;
                status = DfareportingAdvertisersListStatusEnum.APPROVED;
                subaccountId = "repellendus";
                uploadType = "temporibus";
                uploadProtocol = "minus";
            }};            

            DfareportingAdvertisersListResponse res = sdk.advertisers.dfareportingAdvertisersList(req, new DfareportingAdvertisersListSecurity("minima", "a") {{
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

            DfareportingAdvertisersPatchRequest req = new DfareportingAdvertisersPatchRequest("beatae", "vitae") {{
                dollarXgafv = XgafvEnum.ONE;
                advertiser = new Advertiser() {{
                    accountId = "facere";
                    advertiserGroupId = "earum";
                    clickThroughUrlSuffix = "laborum";
                    defaultClickThroughEventTagId = "dicta";
                    defaultEmail = "voluptatem";
                    floodlightConfigurationId = "odit";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "aliquid";
                        etag = "pariatur";
                        id = "541a4d19-0feb-4217-80bc-cc0dbbddb484";
                        kind = "esse";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "corrupti";
                    }};;
                    id = "reiciendis";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "facilis";
                        etag = "aliquam";
                        id = "e391e6bc-158c-44c4-a545-99ea342260e9";
                        kind = "nobis";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "accusantium";
                    }};;
                    kind = "consequatur";
                    measurementPartnerLink = new MeasurementPartnerAdvertiserLink() {{
                        linkStatus = MeasurementPartnerAdvertiserLinkLinkStatusEnum.MEASUREMENT_PARTNER_LINK_WRAPPING_PENDING;
                        measurementPartner = MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum.DOUBLE_VERIFY;
                        partnerAdvertiserId = "voluptate";
                    }};;
                    name = "Carlton Bosco";
                    originalFloodlightConfigurationId = "quos";
                    status = AdvertiserStatusEnum.ON_HOLD;
                    subaccountId = "quidem";
                    suspended = false;
                }};;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "doloremque";
                fields = "fuga";
                key = "dicta";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "eligendi";
                uploadProtocol = "officiis";
            }};            

            DfareportingAdvertisersPatchResponse res = sdk.advertisers.dfareportingAdvertisersPatch(req, new DfareportingAdvertisersPatchSecurity("dignissimos", "fugit") {{
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

            DfareportingAdvertisersUpdateRequest req = new DfareportingAdvertisersUpdateRequest("ratione") {{
                dollarXgafv = XgafvEnum.TWO;
                advertiser = new Advertiser() {{
                    accountId = "quaerat";
                    advertiserGroupId = "aut";
                    clickThroughUrlSuffix = "natus";
                    defaultClickThroughEventTagId = "esse";
                    defaultEmail = "delectus";
                    floodlightConfigurationId = "deserunt";
                    floodlightConfigurationIdDimensionValue = new DimensionValue() {{
                        dimensionName = "ratione";
                        etag = "ipsa";
                        id = "e9af725b-2912-4203-8d83-f5aeb7799d22";
                        kind = "vero";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "optio";
                    }};;
                    id = "quasi";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "repellat";
                        etag = "atque";
                        id = "493825fd-c42c-4876-82c2-dfb4cfc1c762";
                        kind = "sequi";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "reiciendis";
                    }};;
                    kind = "quos";
                    measurementPartnerLink = new MeasurementPartnerAdvertiserLink() {{
                        linkStatus = MeasurementPartnerAdvertiserLinkLinkStatusEnum.MEASUREMENT_PARTNER_LINK_PENDING;
                        measurementPartner = MeasurementPartnerAdvertiserLinkMeasurementPartnerEnum.NONE;
                        partnerAdvertiserId = "maiores";
                    }};;
                    name = "Juan Price";
                    originalFloodlightConfigurationId = "dolorem";
                    status = AdvertiserStatusEnum.ON_HOLD;
                    subaccountId = "repellendus";
                    suspended = false;
                }};;
                accessToken = "nam";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "pariatur";
                key = "expedita";
                oauthToken = "autem";
                prettyPrint = false;
                quotaUser = "tempore";
                uploadType = "recusandae";
                uploadProtocol = "nostrum";
            }};            

            DfareportingAdvertisersUpdateResponse res = sdk.advertisers.dfareportingAdvertisersUpdate(req, new DfareportingAdvertisersUpdateSecurity("officia", "voluptas") {{
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
