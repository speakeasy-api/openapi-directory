# pretargetingConfig

### Available Operations

* [adexchangebuyerPretargetingConfigDelete](#adexchangebuyerpretargetingconfigdelete) - Deletes an existing pretargeting config.
* [adexchangebuyerPretargetingConfigGet](#adexchangebuyerpretargetingconfigget) - Gets a specific pretargeting configuration
* [adexchangebuyerPretargetingConfigInsert](#adexchangebuyerpretargetingconfiginsert) - Inserts a new pretargeting configuration.
* [adexchangebuyerPretargetingConfigList](#adexchangebuyerpretargetingconfiglist) - Retrieves a list of the authenticated user's pretargeting configurations.
* [adexchangebuyerPretargetingConfigPatch](#adexchangebuyerpretargetingconfigpatch) - Updates an existing pretargeting config. This method supports patch semantics.
* [adexchangebuyerPretargetingConfigUpdate](#adexchangebuyerpretargetingconfigupdate) - Updates an existing pretargeting config.

## adexchangebuyerPretargetingConfigDelete

Deletes an existing pretargeting config.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerPretargetingConfigDeleteRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerPretargetingConfigDeleteResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerPretargetingConfigDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerPretargetingConfigDeleteRequest req = new AdexchangebuyerPretargetingConfigDeleteRequest("dolores", "minus") {{
                alt = AltEnum.JSON;
                fields = "quam";
                key = "dolor";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "nostrum";
                userIp = "hic";
            }};            

            AdexchangebuyerPretargetingConfigDeleteResponse res = sdk.pretargetingConfig.adexchangebuyerPretargetingConfigDelete(req, new AdexchangebuyerPretargetingConfigDeleteSecurity("recusandae", "omnis") {{
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

## adexchangebuyerPretargetingConfigGet

Gets a specific pretargeting configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerPretargetingConfigGetRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerPretargetingConfigGetResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerPretargetingConfigGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerPretargetingConfigGetRequest req = new AdexchangebuyerPretargetingConfigGetRequest("facilis", "perspiciatis") {{
                alt = AltEnum.JSON;
                fields = "voluptatem";
                key = "porro";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "blanditiis";
                userIp = "error";
            }};            

            AdexchangebuyerPretargetingConfigGetResponse res = sdk.pretargetingConfig.adexchangebuyerPretargetingConfigGet(req, new AdexchangebuyerPretargetingConfigGetSecurity("eaque", "occaecati") {{
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

## adexchangebuyerPretargetingConfigInsert

Inserts a new pretargeting configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerPretargetingConfigInsertRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerPretargetingConfigInsertResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerPretargetingConfigInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PretargetingConfig;
import org.openapis.openapi.models.shared.PretargetingConfigDimensions;
import org.openapis.openapi.models.shared.PretargetingConfigExcludedPlacements;
import org.openapis.openapi.models.shared.PretargetingConfigPlacements;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerPretargetingConfigInsertRequest req = new AdexchangebuyerPretargetingConfigInsertRequest("rerum") {{
                pretargetingConfig = new PretargetingConfig() {{
                    billingId = "adipisci";
                    configId = "asperiores";
                    configName = "earum";
                    creativeType = new String[]{{
                        add("iste"),
                        add("dolorum"),
                    }};
                    dimensions = new org.openapis.openapi.models.shared.PretargetingConfigDimensions[]{{
                        add(new PretargetingConfigDimensions() {{
                            height = "pariatur";
                            width = "provident";
                        }}),
                        add(new PretargetingConfigDimensions() {{
                            height = "nobis";
                            width = "libero";
                        }}),
                        add(new PretargetingConfigDimensions() {{
                            height = "delectus";
                            width = "quaerat";
                        }}),
                    }};
                    excludedContentLabels = new String[]{{
                        add("aliquid"),
                        add("dolorem"),
                        add("dolorem"),
                    }};
                    excludedGeoCriteriaIds = new String[]{{
                        add("qui"),
                    }};
                    excludedPlacements = new org.openapis.openapi.models.shared.PretargetingConfigExcludedPlacements[]{{
                        add(new PretargetingConfigExcludedPlacements() {{
                            token = "hic";
                            type = "excepturi";
                        }}),
                    }};
                    excludedUserLists = new String[]{{
                        add("voluptate"),
                        add("dignissimos"),
                        add("reiciendis"),
                    }};
                    excludedVerticals = new String[]{{
                        add("dolorum"),
                    }};
                    geoCriteriaIds = new String[]{{
                        add("veritatis"),
                        add("ipsa"),
                    }};
                    isActive = false;
                    kind = "ipsa";
                    languages = new String[]{{
                        add("odio"),
                        add("quaerat"),
                    }};
                    maximumQps = "accusamus";
                    mobileCarriers = new String[]{{
                        add("voluptatibus"),
                        add("voluptas"),
                        add("natus"),
                    }};
                    mobileDevices = new String[]{{
                        add("atque"),
                    }};
                    mobileOperatingSystemVersions = new String[]{{
                        add("fugiat"),
                    }};
                    placements = new org.openapis.openapi.models.shared.PretargetingConfigPlacements[]{{
                        add(new PretargetingConfigPlacements() {{
                            token = "soluta";
                            type = "dolorum";
                        }}),
                    }};
                    platforms = new String[]{{
                        add("voluptate"),
                        add("dolorum"),
                    }};
                    supportedCreativeAttributes = new String[]{{
                        add("omnis"),
                        add("necessitatibus"),
                        add("distinctio"),
                    }};
                    userLists = new String[]{{
                        add("nihil"),
                        add("ipsum"),
                        add("voluptate"),
                        add("id"),
                    }};
                    vendorTypes = new String[]{{
                        add("eius"),
                        add("aspernatur"),
                        add("perferendis"),
                        add("amet"),
                    }};
                    verticals = new String[]{{
                        add("accusamus"),
                        add("ad"),
                        add("saepe"),
                        add("suscipit"),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "deserunt";
                key = "provident";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "repellendus";
                userIp = "totam";
            }};            

            AdexchangebuyerPretargetingConfigInsertResponse res = sdk.pretargetingConfig.adexchangebuyerPretargetingConfigInsert(req, new AdexchangebuyerPretargetingConfigInsertSecurity("similique", "alias") {{
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

## adexchangebuyerPretargetingConfigList

Retrieves a list of the authenticated user's pretargeting configurations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerPretargetingConfigListRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerPretargetingConfigListResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerPretargetingConfigListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerPretargetingConfigListRequest req = new AdexchangebuyerPretargetingConfigListRequest("at") {{
                alt = AltEnum.JSON;
                fields = "quaerat";
                key = "tempora";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "quod";
                userIp = "officiis";
            }};            

            AdexchangebuyerPretargetingConfigListResponse res = sdk.pretargetingConfig.adexchangebuyerPretargetingConfigList(req, new AdexchangebuyerPretargetingConfigListSecurity("qui", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.pretargetingConfigList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyerPretargetingConfigPatch

Updates an existing pretargeting config. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerPretargetingConfigPatchRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerPretargetingConfigPatchResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerPretargetingConfigPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PretargetingConfig;
import org.openapis.openapi.models.shared.PretargetingConfigDimensions;
import org.openapis.openapi.models.shared.PretargetingConfigExcludedPlacements;
import org.openapis.openapi.models.shared.PretargetingConfigPlacements;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerPretargetingConfigPatchRequest req = new AdexchangebuyerPretargetingConfigPatchRequest("a", "esse") {{
                pretargetingConfig = new PretargetingConfig() {{
                    billingId = "harum";
                    configId = "iusto";
                    configName = "ipsum";
                    creativeType = new String[]{{
                        add("tenetur"),
                        add("amet"),
                        add("tempore"),
                        add("accusamus"),
                    }};
                    dimensions = new org.openapis.openapi.models.shared.PretargetingConfigDimensions[]{{
                        add(new PretargetingConfigDimensions() {{
                            height = "enim";
                            width = "dolorem";
                        }}),
                        add(new PretargetingConfigDimensions() {{
                            height = "sapiente";
                            width = "totam";
                        }}),
                    }};
                    excludedContentLabels = new String[]{{
                        add("sit"),
                        add("expedita"),
                    }};
                    excludedGeoCriteriaIds = new String[]{{
                        add("sed"),
                    }};
                    excludedPlacements = new org.openapis.openapi.models.shared.PretargetingConfigExcludedPlacements[]{{
                        add(new PretargetingConfigExcludedPlacements() {{
                            token = "libero";
                            type = "voluptas";
                        }}),
                        add(new PretargetingConfigExcludedPlacements() {{
                            token = "deserunt";
                            type = "quam";
                        }}),
                    }};
                    excludedUserLists = new String[]{{
                        add("incidunt"),
                    }};
                    excludedVerticals = new String[]{{
                        add("cupiditate"),
                    }};
                    geoCriteriaIds = new String[]{{
                        add("pariatur"),
                        add("soluta"),
                        add("dicta"),
                        add("laborum"),
                    }};
                    isActive = false;
                    kind = "totam";
                    languages = new String[]{{
                        add("aspernatur"),
                        add("dolores"),
                    }};
                    maximumQps = "distinctio";
                    mobileCarriers = new String[]{{
                        add("aliquid"),
                        add("quam"),
                        add("molestias"),
                    }};
                    mobileDevices = new String[]{{
                        add("qui"),
                        add("neque"),
                        add("fugit"),
                        add("magni"),
                    }};
                    mobileOperatingSystemVersions = new String[]{{
                        add("sunt"),
                        add("ullam"),
                    }};
                    placements = new org.openapis.openapi.models.shared.PretargetingConfigPlacements[]{{
                        add(new PretargetingConfigPlacements() {{
                            token = "hic";
                            type = "voluptatem";
                        }}),
                        add(new PretargetingConfigPlacements() {{
                            token = "cumque";
                            type = "soluta";
                        }}),
                        add(new PretargetingConfigPlacements() {{
                            token = "nobis";
                            type = "et";
                        }}),
                    }};
                    platforms = new String[]{{
                        add("ipsum"),
                        add("veritatis"),
                        add("nobis"),
                        add("quos"),
                    }};
                    supportedCreativeAttributes = new String[]{{
                        add("cupiditate"),
                        add("aperiam"),
                        add("delectus"),
                    }};
                    userLists = new String[]{{
                        add("dolore"),
                    }};
                    vendorTypes = new String[]{{
                        add("adipisci"),
                        add("dolorum"),
                    }};
                    verticals = new String[]{{
                        add("quae"),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "aut";
                key = "quas";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "consequatur";
                userIp = "est";
            }};            

            AdexchangebuyerPretargetingConfigPatchResponse res = sdk.pretargetingConfig.adexchangebuyerPretargetingConfigPatch(req, new AdexchangebuyerPretargetingConfigPatchSecurity("repellendus", "porro") {{
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

## adexchangebuyerPretargetingConfigUpdate

Updates an existing pretargeting config.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerPretargetingConfigUpdateRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerPretargetingConfigUpdateResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerPretargetingConfigUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PretargetingConfig;
import org.openapis.openapi.models.shared.PretargetingConfigDimensions;
import org.openapis.openapi.models.shared.PretargetingConfigExcludedPlacements;
import org.openapis.openapi.models.shared.PretargetingConfigPlacements;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerPretargetingConfigUpdateRequest req = new AdexchangebuyerPretargetingConfigUpdateRequest("doloribus", "ut") {{
                pretargetingConfig = new PretargetingConfig() {{
                    billingId = "facilis";
                    configId = "cupiditate";
                    configName = "qui";
                    creativeType = new String[]{{
                        add("laudantium"),
                    }};
                    dimensions = new org.openapis.openapi.models.shared.PretargetingConfigDimensions[]{{
                        add(new PretargetingConfigDimensions() {{
                            height = "occaecati";
                            width = "voluptatibus";
                        }}),
                        add(new PretargetingConfigDimensions() {{
                            height = "quisquam";
                            width = "vero";
                        }}),
                    }};
                    excludedContentLabels = new String[]{{
                        add("quis"),
                        add("ipsum"),
                        add("delectus"),
                    }};
                    excludedGeoCriteriaIds = new String[]{{
                        add("consectetur"),
                        add("vero"),
                    }};
                    excludedPlacements = new org.openapis.openapi.models.shared.PretargetingConfigExcludedPlacements[]{{
                        add(new PretargetingConfigExcludedPlacements() {{
                            token = "dignissimos";
                            type = "hic";
                        }}),
                        add(new PretargetingConfigExcludedPlacements() {{
                            token = "distinctio";
                            type = "quod";
                        }}),
                        add(new PretargetingConfigExcludedPlacements() {{
                            token = "odio";
                            type = "similique";
                        }}),
                        add(new PretargetingConfigExcludedPlacements() {{
                            token = "facilis";
                            type = "vero";
                        }}),
                    }};
                    excludedUserLists = new String[]{{
                        add("dolore"),
                        add("quibusdam"),
                    }};
                    excludedVerticals = new String[]{{
                        add("sequi"),
                        add("natus"),
                        add("impedit"),
                        add("aut"),
                    }};
                    geoCriteriaIds = new String[]{{
                        add("exercitationem"),
                        add("nulla"),
                        add("fugit"),
                        add("porro"),
                    }};
                    isActive = false;
                    kind = "maiores";
                    languages = new String[]{{
                        add("iusto"),
                        add("eligendi"),
                        add("ducimus"),
                        add("alias"),
                    }};
                    maximumQps = "officia";
                    mobileCarriers = new String[]{{
                        add("ipsam"),
                        add("ea"),
                    }};
                    mobileDevices = new String[]{{
                        add("vel"),
                    }};
                    mobileOperatingSystemVersions = new String[]{{
                        add("magnam"),
                        add("ratione"),
                        add("ex"),
                        add("laudantium"),
                    }};
                    placements = new org.openapis.openapi.models.shared.PretargetingConfigPlacements[]{{
                        add(new PretargetingConfigPlacements() {{
                            token = "dolor";
                            type = "maiores";
                        }}),
                    }};
                    platforms = new String[]{{
                        add("ex"),
                    }};
                    supportedCreativeAttributes = new String[]{{
                        add("excepturi"),
                        add("voluptatibus"),
                        add("nostrum"),
                        add("sapiente"),
                    }};
                    userLists = new String[]{{
                        add("saepe"),
                        add("ea"),
                        add("impedit"),
                        add("corporis"),
                    }};
                    vendorTypes = new String[]{{
                        add("aliquid"),
                        add("inventore"),
                    }};
                    verticals = new String[]{{
                        add("ea"),
                        add("quo"),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "consectetur";
                key = "recusandae";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "minima";
                userIp = "eaque";
            }};            

            AdexchangebuyerPretargetingConfigUpdateResponse res = sdk.pretargetingConfig.adexchangebuyerPretargetingConfigUpdate(req, new AdexchangebuyerPretargetingConfigUpdateSecurity("a", "libero") {{
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
