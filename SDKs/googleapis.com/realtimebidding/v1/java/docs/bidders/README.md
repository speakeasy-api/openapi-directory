# bidders

### Available Operations

* [realtimebiddingBiddersCreativesWatch](#realtimebiddingbidderscreativeswatch) - Watches all creatives pertaining to a bidder. It is sufficient to invoke this endpoint once per bidder. A Pub/Sub topic will be created and notifications will be pushed to the topic when any of the bidder's creatives change status. All of the bidder's service accounts will have access to read from the topic. Subsequent invocations of this method will return the existing Pub/Sub configuration.
* [realtimebiddingBiddersEndpointsList](#realtimebiddingbiddersendpointslist) - Lists all the bidder's endpoints.
* [realtimebiddingBiddersList](#realtimebiddingbidderslist) - Lists all the bidder accounts that belong to the caller.
* [realtimebiddingBiddersPretargetingConfigsActivate](#realtimebiddingbidderspretargetingconfigsactivate) - Activates a pretargeting configuration.
* [realtimebiddingBiddersPretargetingConfigsAddTargetedApps](#realtimebiddingbidderspretargetingconfigsaddtargetedapps) - Adds targeted apps to the pretargeting configuration.
* [realtimebiddingBiddersPretargetingConfigsAddTargetedPublishers](#realtimebiddingbidderspretargetingconfigsaddtargetedpublishers) - Adds targeted publishers to the pretargeting config.
* [realtimebiddingBiddersPretargetingConfigsAddTargetedSites](#realtimebiddingbidderspretargetingconfigsaddtargetedsites) - Adds targeted sites to the pretargeting configuration.
* [realtimebiddingBiddersPretargetingConfigsCreate](#realtimebiddingbidderspretargetingconfigscreate) - Creates a pretargeting configuration. A pretargeting configuration's state (PretargetingConfig.state) is active upon creation, and it will start to affect traffic shortly after. A bidder may create a maximum of 10 pretargeting configurations. Attempts to exceed this maximum results in a 400 bad request error.
* [realtimebiddingBiddersPretargetingConfigsDelete](#realtimebiddingbidderspretargetingconfigsdelete) - Deletes a pretargeting configuration.
* [realtimebiddingBiddersPretargetingConfigsList](#realtimebiddingbidderspretargetingconfigslist) - Lists all pretargeting configurations for a single bidder.
* [realtimebiddingBiddersPretargetingConfigsRemoveTargetedApps](#realtimebiddingbidderspretargetingconfigsremovetargetedapps) - Removes targeted apps from the pretargeting configuration.
* [realtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishers](#realtimebiddingbidderspretargetingconfigsremovetargetedpublishers) - Removes targeted publishers from the pretargeting config.
* [realtimebiddingBiddersPretargetingConfigsRemoveTargetedSites](#realtimebiddingbidderspretargetingconfigsremovetargetedsites) - Removes targeted sites from the pretargeting configuration.
* [realtimebiddingBiddersPretargetingConfigsSuspend](#realtimebiddingbidderspretargetingconfigssuspend) - Suspends a pretargeting configuration.
* [realtimebiddingBiddersPublisherConnectionsBatchApprove](#realtimebiddingbidderspublisherconnectionsbatchapprove) - Batch approves multiple publisher connections.
* [realtimebiddingBiddersPublisherConnectionsBatchReject](#realtimebiddingbidderspublisherconnectionsbatchreject) - Batch rejects multiple publisher connections.
* [realtimebiddingBiddersPublisherConnectionsList](#realtimebiddingbidderspublisherconnectionslist) - Lists publisher connections for a given bidder.

## realtimebiddingBiddersCreativesWatch

Watches all creatives pertaining to a bidder. It is sufficient to invoke this endpoint once per bidder. A Pub/Sub topic will be created and notifications will be pushed to the topic when any of the bidder's creatives change status. All of the bidder's service accounts will have access to read from the topic. Subsequent invocations of this method will return the existing Pub/Sub configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersCreativesWatchRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersCreativesWatchResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersCreativesWatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBiddersCreativesWatchRequest req = new RealtimebiddingBiddersCreativesWatchRequest("minus") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("iusto", "excepturi");
                    put("nisi", "recusandae");
                    put("temporibus", "ab");
                }};
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "perferendis";
                key = "ipsam";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "quo";
                uploadProtocol = "odit";
            }};            

            RealtimebiddingBiddersCreativesWatchResponse res = sdk.bidders.realtimebiddingBiddersCreativesWatch(req, new RealtimebiddingBiddersCreativesWatchSecurity("at", "at") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.watchCreativesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBiddersEndpointsList

Lists all the bidder's endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersEndpointsListRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersEndpointsListResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersEndpointsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBiddersEndpointsListRequest req = new RealtimebiddingBiddersEndpointsListRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "totam";
                key = "porro";
                oauthToken = "dolorum";
                pageSize = 118274L;
                pageToken = "nam";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "occaecati";
                uploadProtocol = "fugit";
            }};            

            RealtimebiddingBiddersEndpointsListResponse res = sdk.bidders.realtimebiddingBiddersEndpointsList(req, new RealtimebiddingBiddersEndpointsListSecurity("deleniti", "hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listEndpointsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBiddersList

Lists all the bidder accounts that belong to the caller.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersListRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersListResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBiddersListRequest req = new RealtimebiddingBiddersListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "totam";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "molestiae";
                key = "modi";
                oauthToken = "qui";
                pageSize = 774234L;
                pageToken = "cum";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "ipsum";
                uploadProtocol = "excepturi";
            }};            

            RealtimebiddingBiddersListResponse res = sdk.bidders.realtimebiddingBiddersList(req, new RealtimebiddingBiddersListSecurity("aspernatur", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listBiddersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBiddersPretargetingConfigsActivate

Activates a pretargeting configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsActivateRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsActivateResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsActivateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBiddersPretargetingConfigsActivateRequest req = new RealtimebiddingBiddersPretargetingConfigsActivateRequest("ad") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("iste", "dolor");
                }};
                accessToken = "natus";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "saepe";
                key = "fuga";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "iste";
                uploadProtocol = "iure";
            }};            

            RealtimebiddingBiddersPretargetingConfigsActivateResponse res = sdk.bidders.realtimebiddingBiddersPretargetingConfigsActivate(req, new RealtimebiddingBiddersPretargetingConfigsActivateSecurity("saepe", "quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.pretargetingConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBiddersPretargetingConfigsAddTargetedApps

Adds targeted apps to the pretargeting configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsSecurity;
import org.openapis.openapi.models.shared.AddTargetedAppsRequest;
import org.openapis.openapi.models.shared.AddTargetedAppsRequestTargetingModeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest req = new RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest("architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                addTargetedAppsRequest = new AddTargetedAppsRequest() {{
                    appIds = new String[]{{
                        add("est"),
                        add("mollitia"),
                        add("laborum"),
                        add("dolores"),
                    }};
                    targetingMode = AddTargetedAppsRequestTargetingModeEnum.TARGETING_MODE_UNSPECIFIED;
                }};;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "nobis";
                fields = "enim";
                key = "omnis";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "excepturi";
                uploadProtocol = "accusantium";
            }};            

            RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsResponse res = sdk.bidders.realtimebiddingBiddersPretargetingConfigsAddTargetedApps(req, new RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsSecurity("iure", "culpa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.pretargetingConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBiddersPretargetingConfigsAddTargetedPublishers

Adds targeted publishers to the pretargeting config.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersSecurity;
import org.openapis.openapi.models.shared.AddTargetedPublishersRequest;
import org.openapis.openapi.models.shared.AddTargetedPublishersRequestTargetingModeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest req = new RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest("doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                addTargetedPublishersRequest = new AddTargetedPublishersRequest() {{
                    publisherIds = new String[]{{
                        add("mollitia"),
                    }};
                    targetingMode = AddTargetedPublishersRequestTargetingModeEnum.TARGETING_MODE_UNSPECIFIED;
                }};;
                accessToken = "culpa";
                alt = AltEnum.JSON;
                callback = "repellat";
                fields = "mollitia";
                key = "occaecati";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "quam";
                uploadProtocol = "molestiae";
            }};            

            RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersResponse res = sdk.bidders.realtimebiddingBiddersPretargetingConfigsAddTargetedPublishers(req, new RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersSecurity("velit", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.pretargetingConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBiddersPretargetingConfigsAddTargetedSites

Adds targeted sites to the pretargeting configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesSecurity;
import org.openapis.openapi.models.shared.AddTargetedSitesRequest;
import org.openapis.openapi.models.shared.AddTargetedSitesRequestTargetingModeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest req = new RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest("quia") {{
                dollarXgafv = XgafvEnum.ONE;
                addTargetedSitesRequest = new AddTargetedSitesRequest() {{
                    sites = new String[]{{
                        add("laborum"),
                    }};
                    targetingMode = AddTargetedSitesRequestTargetingModeEnum.INCLUSIVE;
                }};;
                accessToken = "enim";
                alt = AltEnum.JSON;
                callback = "quo";
                fields = "sequi";
                key = "tenetur";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "possimus";
                uploadProtocol = "aut";
            }};            

            RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesResponse res = sdk.bidders.realtimebiddingBiddersPretargetingConfigsAddTargetedSites(req, new RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesSecurity("quasi", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.pretargetingConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBiddersPretargetingConfigsCreate

Creates a pretargeting configuration. A pretargeting configuration's state (PretargetingConfig.state) is active upon creation, and it will start to affect traffic shortly after. A bidder may create a maximum of 10 pretargeting configurations. Attempts to exceed this maximum results in a 400 bad request error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsCreateRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsCreateResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppTargeting;
import org.openapis.openapi.models.shared.CreativeDimensions;
import org.openapis.openapi.models.shared.NumericTargetingDimension;
import org.openapis.openapi.models.shared.PretargetingConfigAllowedUserTargetingModesEnum;
import org.openapis.openapi.models.shared.PretargetingConfigIncludedEnvironmentsEnum;
import org.openapis.openapi.models.shared.PretargetingConfigIncludedFormatsEnum;
import org.openapis.openapi.models.shared.PretargetingConfigIncludedPlatformsEnum;
import org.openapis.openapi.models.shared.PretargetingConfigIncludedUserIdTypesEnum;
import org.openapis.openapi.models.shared.PretargetingConfigInput;
import org.openapis.openapi.models.shared.PretargetingConfigInterstitialTargetingEnum;
import org.openapis.openapi.models.shared.StringTargetingDimension;
import org.openapis.openapi.models.shared.StringTargetingDimensionTargetingModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBiddersPretargetingConfigsCreateRequest req = new RealtimebiddingBiddersPretargetingConfigsCreateRequest("temporibus") {{
                dollarXgafv = XgafvEnum.TWO;
                pretargetingConfigInput = new PretargetingConfigInput() {{
                    allowedUserTargetingModes = new org.openapis.openapi.models.shared.PretargetingConfigAllowedUserTargetingModesEnum[]{{
                        add(PretargetingConfigAllowedUserTargetingModesEnum.INTEREST_BASED_TARGETING),
                    }};
                    appTargeting = new AppTargeting() {{
                        mobileAppCategoryTargeting = new NumericTargetingDimension() {{
                            excludedIds = new String[]{{
                                add("vero"),
                                add("nihil"),
                                add("praesentium"),
                                add("voluptatibus"),
                            }};
                            includedIds = new String[]{{
                                add("omnis"),
                            }};
                        }};;
                        mobileAppTargeting = new StringTargetingDimension() {{
                            targetingMode = StringTargetingDimensionTargetingModeEnum.INCLUSIVE;
                            values = new String[]{{
                                add("perferendis"),
                                add("doloremque"),
                                add("reprehenderit"),
                            }};
                        }};;
                    }};;
                    displayName = "ut";
                    excludedContentLabelIds = new String[]{{
                        add("dicta"),
                        add("corporis"),
                        add("dolore"),
                        add("iusto"),
                    }};
                    geoTargeting = new NumericTargetingDimension() {{
                        excludedIds = new String[]{{
                            add("harum"),
                        }};
                        includedIds = new String[]{{
                            add("accusamus"),
                            add("commodi"),
                        }};
                    }};;
                    includedCreativeDimensions = new org.openapis.openapi.models.shared.CreativeDimensions[]{{
                        add(new CreativeDimensions() {{
                            height = "quae";
                            width = "ipsum";
                        }}),
                        add(new CreativeDimensions() {{
                            height = "quidem";
                            width = "molestias";
                        }}),
                        add(new CreativeDimensions() {{
                            height = "excepturi";
                            width = "pariatur";
                        }}),
                        add(new CreativeDimensions() {{
                            height = "modi";
                            width = "praesentium";
                        }}),
                    }};
                    includedEnvironments = new org.openapis.openapi.models.shared.PretargetingConfigIncludedEnvironmentsEnum[]{{
                        add(PretargetingConfigIncludedEnvironmentsEnum.WEB),
                        add(PretargetingConfigIncludedEnvironmentsEnum.ENVIRONMENT_UNSPECIFIED),
                        add(PretargetingConfigIncludedEnvironmentsEnum.WEB),
                    }};
                    includedFormats = new org.openapis.openapi.models.shared.PretargetingConfigIncludedFormatsEnum[]{{
                        add(PretargetingConfigIncludedFormatsEnum.CREATIVE_FORMAT_UNSPECIFIED),
                        add(PretargetingConfigIncludedFormatsEnum.NATIVE_),
                        add(PretargetingConfigIncludedFormatsEnum.HTML),
                    }};
                    includedLanguages = new String[]{{
                        add("consequatur"),
                        add("est"),
                    }};
                    includedMobileOperatingSystemIds = new String[]{{
                        add("explicabo"),
                        add("deserunt"),
                        add("distinctio"),
                        add("quibusdam"),
                    }};
                    includedPlatforms = new org.openapis.openapi.models.shared.PretargetingConfigIncludedPlatformsEnum[]{{
                        add(PretargetingConfigIncludedPlatformsEnum.PERSONAL_COMPUTER),
                        add(PretargetingConfigIncludedPlatformsEnum.PLATFORM_UNSPECIFIED),
                    }};
                    includedUserIdTypes = new org.openapis.openapi.models.shared.PretargetingConfigIncludedUserIdTypesEnum[]{{
                        add(PretargetingConfigIncludedUserIdTypesEnum.GOOGLE_COOKIE),
                        add(PretargetingConfigIncludedUserIdTypesEnum.GOOGLE_COOKIE),
                    }};
                    interstitialTargeting = PretargetingConfigInterstitialTargetingEnum.INTERSTITIAL_TARGETING_UNSPECIFIED;
                    maximumQps = "magni";
                    minimumViewabilityDecile = 828940;
                    publisherTargeting = new StringTargetingDimension() {{
                        targetingMode = StringTargetingDimensionTargetingModeEnum.INCLUSIVE;
                        values = new String[]{{
                            add("fugit"),
                        }};
                    }};;
                    userListTargeting = new NumericTargetingDimension() {{
                        excludedIds = new String[]{{
                            add("excepturi"),
                            add("tempora"),
                            add("facilis"),
                        }};
                        includedIds = new String[]{{
                            add("labore"),
                            add("delectus"),
                            add("eum"),
                        }};
                    }};;
                    verticalTargeting = new NumericTargetingDimension() {{
                        excludedIds = new String[]{{
                            add("eligendi"),
                        }};
                        includedIds = new String[]{{
                            add("aliquid"),
                            add("provident"),
                            add("necessitatibus"),
                        }};
                    }};;
                    webTargeting = new StringTargetingDimension() {{
                        targetingMode = StringTargetingDimensionTargetingModeEnum.INCLUSIVE;
                        values = new String[]{{
                            add("dolor"),
                            add("debitis"),
                            add("a"),
                        }};
                    }};;
                }};;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "illum";
                key = "maiores";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "magnam";
                uploadProtocol = "cumque";
            }};            

            RealtimebiddingBiddersPretargetingConfigsCreateResponse res = sdk.bidders.realtimebiddingBiddersPretargetingConfigsCreate(req, new RealtimebiddingBiddersPretargetingConfigsCreateSecurity("facere", "ea") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.pretargetingConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBiddersPretargetingConfigsDelete

Deletes a pretargeting configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsDeleteRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsDeleteResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBiddersPretargetingConfigsDeleteRequest req = new RealtimebiddingBiddersPretargetingConfigsDeleteRequest("aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "enim";
                key = "accusamus";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "provident";
                uploadProtocol = "nam";
            }};            

            RealtimebiddingBiddersPretargetingConfigsDeleteResponse res = sdk.bidders.realtimebiddingBiddersPretargetingConfigsDelete(req, new RealtimebiddingBiddersPretargetingConfigsDeleteSecurity("id", "blanditiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBiddersPretargetingConfigsList

Lists all pretargeting configurations for a single bidder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsListRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsListResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBiddersPretargetingConfigsListRequest req = new RealtimebiddingBiddersPretargetingConfigsListRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "amet";
                alt = AltEnum.MEDIA;
                callback = "nisi";
                fields = "vel";
                key = "natus";
                oauthToken = "omnis";
                pageSize = 474867L;
                pageToken = "perferendis";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "magnam";
                uploadProtocol = "distinctio";
            }};            

            RealtimebiddingBiddersPretargetingConfigsListResponse res = sdk.bidders.realtimebiddingBiddersPretargetingConfigsList(req, new RealtimebiddingBiddersPretargetingConfigsListSecurity("id", "labore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listPretargetingConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBiddersPretargetingConfigsRemoveTargetedApps

Removes targeted apps from the pretargeting configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RemoveTargetedAppsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsRequest req = new RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                removeTargetedAppsRequest = new RemoveTargetedAppsRequest() {{
                    appIds = new String[]{{
                        add("nobis"),
                        add("eum"),
                        add("vero"),
                    }};
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "et";
                key = "excepturi";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "quos";
                uploadProtocol = "sint";
            }};            

            RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsResponse res = sdk.bidders.realtimebiddingBiddersPretargetingConfigsRemoveTargetedApps(req, new RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsSecurity("accusantium", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.pretargetingConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishers

Removes targeted publishers from the pretargeting config.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RemoveTargetedPublishersRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersRequest req = new RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                removeTargetedPublishersRequest = new RemoveTargetedPublishersRequest() {{
                    publisherIds = new String[]{{
                        add("eum"),
                        add("dolor"),
                    }};
                }};;
                accessToken = "necessitatibus";
                alt = AltEnum.JSON;
                callback = "nemo";
                fields = "quasi";
                key = "iure";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "eius";
                uploadProtocol = "maxime";
            }};            

            RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersResponse res = sdk.bidders.realtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishers(req, new RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersSecurity("deleniti", "facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.pretargetingConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBiddersPretargetingConfigsRemoveTargetedSites

Removes targeted sites from the pretargeting configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RemoveTargetedSitesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest req = new RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                removeTargetedSitesRequest = new RemoveTargetedSitesRequest() {{
                    sites = new String[]{{
                        add("repudiandae"),
                    }};
                }};;
                accessToken = "ullam";
                alt = AltEnum.PROTO;
                callback = "nihil";
                fields = "repellat";
                key = "quibusdam";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "pariatur";
                uploadProtocol = "accusantium";
            }};            

            RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesResponse res = sdk.bidders.realtimebiddingBiddersPretargetingConfigsRemoveTargetedSites(req, new RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesSecurity("consequuntur", "praesentium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.pretargetingConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBiddersPretargetingConfigsSuspend

Suspends a pretargeting configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsSuspendRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsSuspendResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPretargetingConfigsSuspendSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBiddersPretargetingConfigsSuspendRequest req = new RealtimebiddingBiddersPretargetingConfigsSuspendRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quo", "illum");
                }};
                accessToken = "pariatur";
                alt = AltEnum.PROTO;
                callback = "ea";
                fields = "excepturi";
                key = "odit";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "ab";
                uploadProtocol = "maiores";
            }};            

            RealtimebiddingBiddersPretargetingConfigsSuspendResponse res = sdk.bidders.realtimebiddingBiddersPretargetingConfigsSuspend(req, new RealtimebiddingBiddersPretargetingConfigsSuspendSecurity("quidem", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.pretargetingConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBiddersPublisherConnectionsBatchApprove

Batch approves multiple publisher connections.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPublisherConnectionsBatchApproveRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPublisherConnectionsBatchApproveResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPublisherConnectionsBatchApproveSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchApprovePublisherConnectionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBiddersPublisherConnectionsBatchApproveRequest req = new RealtimebiddingBiddersPublisherConnectionsBatchApproveRequest("voluptate") {{
                dollarXgafv = XgafvEnum.ONE;
                batchApprovePublisherConnectionsRequest = new BatchApprovePublisherConnectionsRequest() {{
                    names = new String[]{{
                        add("eaque"),
                        add("pariatur"),
                        add("nemo"),
                    }};
                }};;
                accessToken = "voluptatibus";
                alt = AltEnum.JSON;
                callback = "fugiat";
                fields = "amet";
                key = "aut";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "hic";
                uploadProtocol = "libero";
            }};            

            RealtimebiddingBiddersPublisherConnectionsBatchApproveResponse res = sdk.bidders.realtimebiddingBiddersPublisherConnectionsBatchApprove(req, new RealtimebiddingBiddersPublisherConnectionsBatchApproveSecurity("nobis", "dolores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchApprovePublisherConnectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBiddersPublisherConnectionsBatchReject

Batch rejects multiple publisher connections.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPublisherConnectionsBatchRejectResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPublisherConnectionsBatchRejectSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchRejectPublisherConnectionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest req = new RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest("quis") {{
                dollarXgafv = XgafvEnum.TWO;
                batchRejectPublisherConnectionsRequest = new BatchRejectPublisherConnectionsRequest() {{
                    names = new String[]{{
                        add("eaque"),
                        add("quis"),
                    }};
                }};;
                accessToken = "nesciunt";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "dolores";
                key = "minus";
                oauthToken = "quam";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "vero";
                uploadProtocol = "nostrum";
            }};            

            RealtimebiddingBiddersPublisherConnectionsBatchRejectResponse res = sdk.bidders.realtimebiddingBiddersPublisherConnectionsBatchReject(req, new RealtimebiddingBiddersPublisherConnectionsBatchRejectSecurity("hic", "recusandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchRejectPublisherConnectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## realtimebiddingBiddersPublisherConnectionsList

Lists publisher connections for a given bidder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPublisherConnectionsListRequest;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPublisherConnectionsListResponse;
import org.openapis.openapi.models.operations.RealtimebiddingBiddersPublisherConnectionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RealtimebiddingBiddersPublisherConnectionsListRequest req = new RealtimebiddingBiddersPublisherConnectionsListRequest("omnis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perspiciatis";
                alt = AltEnum.JSON;
                callback = "porro";
                fields = "consequuntur";
                filter = "blanditiis";
                key = "error";
                oauthToken = "eaque";
                orderBy = "occaecati";
                pageSize = 699098L;
                pageToken = "adipisci";
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "earum";
                uploadProtocol = "modi";
            }};            

            RealtimebiddingBiddersPublisherConnectionsListResponse res = sdk.bidders.realtimebiddingBiddersPublisherConnectionsList(req, new RealtimebiddingBiddersPublisherConnectionsListSecurity("iste", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listPublisherConnectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
