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

            AdexchangebuyerPretargetingConfigDeleteRequest req = new AdexchangebuyerPretargetingConfigDeleteRequest("fuga", "alias") {{
                alt = AltEnum.JSON;
                fields = "rem";
                key = "aut";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "laudantium";
                userIp = "repellendus";
            }};            

            AdexchangebuyerPretargetingConfigDeleteResponse res = sdk.pretargetingConfig.adexchangebuyerPretargetingConfigDelete(req, new AdexchangebuyerPretargetingConfigDeleteSecurity("veritatis", "quae") {{
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

            AdexchangebuyerPretargetingConfigGetRequest req = new AdexchangebuyerPretargetingConfigGetRequest("eaque", "saepe") {{
                alt = AltEnum.JSON;
                fields = "delectus";
                key = "mollitia";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "officia";
                userIp = "sed";
            }};            

            AdexchangebuyerPretargetingConfigGetResponse res = sdk.pretargetingConfig.adexchangebuyerPretargetingConfigGet(req, new AdexchangebuyerPretargetingConfigGetSecurity("voluptatem", "alias") {{
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
import org.openapis.openapi.models.shared.PretargetingConfigVideoPlayerSizes;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerPretargetingConfigInsertRequest req = new AdexchangebuyerPretargetingConfigInsertRequest("eveniet") {{
                pretargetingConfig = new PretargetingConfig() {{
                    billingId = "hic";
                    configId = "voluptatem";
                    configName = "incidunt";
                    creativeType = new String[]{{
                        add("qui"),
                    }};
                    dimensions = new org.openapis.openapi.models.shared.PretargetingConfigDimensions[]{{
                        add(new PretargetingConfigDimensions() {{
                            height = "harum";
                            width = "explicabo";
                        }}),
                        add(new PretargetingConfigDimensions() {{
                            height = "beatae";
                            width = "aliquid";
                        }}),
                        add(new PretargetingConfigDimensions() {{
                            height = "modi";
                            width = "optio";
                        }}),
                        add(new PretargetingConfigDimensions() {{
                            height = "voluptatibus";
                            width = "molestias";
                        }}),
                    }};
                    excludedContentLabels = new String[]{{
                        add("libero"),
                        add("totam"),
                        add("sequi"),
                    }};
                    excludedGeoCriteriaIds = new String[]{{
                        add("ea"),
                        add("impedit"),
                    }};
                    excludedPlacements = new org.openapis.openapi.models.shared.PretargetingConfigExcludedPlacements[]{{
                        add(new PretargetingConfigExcludedPlacements() {{
                            token = "odit";
                            type = "velit";
                        }}),
                        add(new PretargetingConfigExcludedPlacements() {{
                            token = "reiciendis";
                            type = "repellat";
                        }}),
                    }};
                    excludedUserLists = new String[]{{
                        add("laborum"),
                        add("natus"),
                        add("accusamus"),
                        add("doloremque"),
                    }};
                    excludedVerticals = new String[]{{
                        add("rerum"),
                        add("recusandae"),
                    }};
                    geoCriteriaIds = new String[]{{
                        add("non"),
                        add("rem"),
                        add("quia"),
                        add("ullam"),
                    }};
                    isActive = false;
                    kind = "quisquam";
                    languages = new String[]{{
                        add("voluptatibus"),
                    }};
                    maximumQps = "eligendi";
                    minimumViewabilityDecile = 62035;
                    mobileCarriers = new String[]{{
                        add("architecto"),
                        add("architecto"),
                        add("enim"),
                        add("optio"),
                    }};
                    mobileDevices = new String[]{{
                        add("perferendis"),
                        add("facilis"),
                        add("reiciendis"),
                    }};
                    mobileOperatingSystemVersions = new String[]{{
                        add("iste"),
                        add("dicta"),
                        add("quos"),
                        add("ullam"),
                    }};
                    placements = new org.openapis.openapi.models.shared.PretargetingConfigPlacements[]{{
                        add(new PretargetingConfigPlacements() {{
                            token = "modi";
                            type = "itaque";
                        }}),
                        add(new PretargetingConfigPlacements() {{
                            token = "maxime";
                            type = "modi";
                        }}),
                    }};
                    platforms = new String[]{{
                        add("assumenda"),
                    }};
                    supportedCreativeAttributes = new String[]{{
                        add("doloribus"),
                        add("impedit"),
                        add("porro"),
                        add("accusamus"),
                    }};
                    userIdentifierDataRequired = new String[]{{
                        add("reiciendis"),
                        add("ab"),
                        add("sint"),
                    }};
                    userLists = new String[]{{
                        add("esse"),
                        add("iure"),
                    }};
                    vendorTypes = new String[]{{
                        add("nesciunt"),
                        add("debitis"),
                    }};
                    verticals = new String[]{{
                        add("neque"),
                        add("corporis"),
                    }};
                    videoPlayerSizes = new org.openapis.openapi.models.shared.PretargetingConfigVideoPlayerSizes[]{{
                        add(new PretargetingConfigVideoPlayerSizes() {{
                            aspectRatio = "consequuntur";
                            minHeight = "officia";
                            minWidth = "reprehenderit";
                        }}),
                        add(new PretargetingConfigVideoPlayerSizes() {{
                            aspectRatio = "distinctio";
                            minHeight = "eius";
                            minWidth = "ipsa";
                        }}),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "rem";
                key = "maiores";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "veniam";
                userIp = "saepe";
            }};            

            AdexchangebuyerPretargetingConfigInsertResponse res = sdk.pretargetingConfig.adexchangebuyerPretargetingConfigInsert(req, new AdexchangebuyerPretargetingConfigInsertSecurity("neque", "facere") {{
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

            AdexchangebuyerPretargetingConfigListRequest req = new AdexchangebuyerPretargetingConfigListRequest("aliquam") {{
                alt = AltEnum.JSON;
                fields = "quos";
                key = "doloribus";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "est";
                userIp = "delectus";
            }};            

            AdexchangebuyerPretargetingConfigListResponse res = sdk.pretargetingConfig.adexchangebuyerPretargetingConfigList(req, new AdexchangebuyerPretargetingConfigListSecurity("velit", "vitae") {{
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
import org.openapis.openapi.models.shared.PretargetingConfigVideoPlayerSizes;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerPretargetingConfigPatchRequest req = new AdexchangebuyerPretargetingConfigPatchRequest("nesciunt", "similique") {{
                pretargetingConfig = new PretargetingConfig() {{
                    billingId = "illo";
                    configId = "repellat";
                    configName = "nemo";
                    creativeType = new String[]{{
                        add("possimus"),
                        add("unde"),
                        add("incidunt"),
                        add("explicabo"),
                    }};
                    dimensions = new org.openapis.openapi.models.shared.PretargetingConfigDimensions[]{{
                        add(new PretargetingConfigDimensions() {{
                            height = "cupiditate";
                            width = "optio";
                        }}),
                        add(new PretargetingConfigDimensions() {{
                            height = "alias";
                            width = "quidem";
                        }}),
                    }};
                    excludedContentLabels = new String[]{{
                        add("commodi"),
                    }};
                    excludedGeoCriteriaIds = new String[]{{
                        add("consequuntur"),
                        add("veniam"),
                        add("debitis"),
                        add("officia"),
                    }};
                    excludedPlacements = new org.openapis.openapi.models.shared.PretargetingConfigExcludedPlacements[]{{
                        add(new PretargetingConfigExcludedPlacements() {{
                            token = "ut";
                            type = "numquam";
                        }}),
                        add(new PretargetingConfigExcludedPlacements() {{
                            token = "tenetur";
                            type = "adipisci";
                        }}),
                        add(new PretargetingConfigExcludedPlacements() {{
                            token = "libero";
                            type = "in";
                        }}),
                    }};
                    excludedUserLists = new String[]{{
                        add("ex"),
                        add("minus"),
                    }};
                    excludedVerticals = new String[]{{
                        add("beatae"),
                    }};
                    geoCriteriaIds = new String[]{{
                        add("nisi"),
                        add("quisquam"),
                        add("dolor"),
                        add("ducimus"),
                    }};
                    isActive = false;
                    kind = "fuga";
                    languages = new String[]{{
                        add("architecto"),
                        add("qui"),
                    }};
                    maximumQps = "aliquid";
                    minimumViewabilityDecile = 166289;
                    mobileCarriers = new String[]{{
                        add("adipisci"),
                        add("praesentium"),
                    }};
                    mobileDevices = new String[]{{
                        add("exercitationem"),
                    }};
                    mobileOperatingSystemVersions = new String[]{{
                        add("facilis"),
                        add("impedit"),
                        add("sit"),
                    }};
                    placements = new org.openapis.openapi.models.shared.PretargetingConfigPlacements[]{{
                        add(new PretargetingConfigPlacements() {{
                            token = "culpa";
                            type = "consequuntur";
                        }}),
                        add(new PretargetingConfigPlacements() {{
                            token = "amet";
                            type = "deserunt";
                        }}),
                    }};
                    platforms = new String[]{{
                        add("veniam"),
                        add("quod"),
                    }};
                    supportedCreativeAttributes = new String[]{{
                        add("a"),
                        add("quisquam"),
                        add("enim"),
                        add("doloribus"),
                    }};
                    userIdentifierDataRequired = new String[]{{
                        add("officiis"),
                        add("architecto"),
                        add("alias"),
                        add("culpa"),
                    }};
                    userLists = new String[]{{
                        add("nobis"),
                    }};
                    vendorTypes = new String[]{{
                        add("quia"),
                        add("dicta"),
                        add("vel"),
                        add("perspiciatis"),
                    }};
                    verticals = new String[]{{
                        add("ullam"),
                        add("architecto"),
                        add("accusantium"),
                        add("perferendis"),
                    }};
                    videoPlayerSizes = new org.openapis.openapi.models.shared.PretargetingConfigVideoPlayerSizes[]{{
                        add(new PretargetingConfigVideoPlayerSizes() {{
                            aspectRatio = "provident";
                            minHeight = "cumque";
                            minWidth = "iure";
                        }}),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "quibusdam";
                key = "quod";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "recusandae";
                userIp = "velit";
            }};            

            AdexchangebuyerPretargetingConfigPatchResponse res = sdk.pretargetingConfig.adexchangebuyerPretargetingConfigPatch(req, new AdexchangebuyerPretargetingConfigPatchSecurity("magnam", "dignissimos") {{
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
import org.openapis.openapi.models.shared.PretargetingConfigVideoPlayerSizes;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerPretargetingConfigUpdateRequest req = new AdexchangebuyerPretargetingConfigUpdateRequest("laboriosam", "sed") {{
                pretargetingConfig = new PretargetingConfig() {{
                    billingId = "odio";
                    configId = "natus";
                    configName = "provident";
                    creativeType = new String[]{{
                        add("doloribus"),
                        add("facilis"),
                        add("quidem"),
                    }};
                    dimensions = new org.openapis.openapi.models.shared.PretargetingConfigDimensions[]{{
                        add(new PretargetingConfigDimensions() {{
                            height = "laboriosam";
                            width = "unde";
                        }}),
                        add(new PretargetingConfigDimensions() {{
                            height = "modi";
                            width = "perspiciatis";
                        }}),
                        add(new PretargetingConfigDimensions() {{
                            height = "hic";
                            width = "cum";
                        }}),
                        add(new PretargetingConfigDimensions() {{
                            height = "aspernatur";
                            width = "libero";
                        }}),
                    }};
                    excludedContentLabels = new String[]{{
                        add("incidunt"),
                        add("recusandae"),
                        add("quod"),
                    }};
                    excludedGeoCriteriaIds = new String[]{{
                        add("saepe"),
                        add("autem"),
                        add("quo"),
                    }};
                    excludedPlacements = new org.openapis.openapi.models.shared.PretargetingConfigExcludedPlacements[]{{
                        add(new PretargetingConfigExcludedPlacements() {{
                            token = "illum";
                            type = "nemo";
                        }}),
                    }};
                    excludedUserLists = new String[]{{
                        add("facilis"),
                        add("non"),
                        add("mollitia"),
                        add("assumenda"),
                    }};
                    excludedVerticals = new String[]{{
                        add("distinctio"),
                        add("pariatur"),
                        add("ad"),
                        add("facere"),
                    }};
                    geoCriteriaIds = new String[]{{
                        add("eveniet"),
                        add("laborum"),
                        add("incidunt"),
                    }};
                    isActive = false;
                    kind = "maxime";
                    languages = new String[]{{
                        add("alias"),
                        add("suscipit"),
                    }};
                    maximumQps = "deserunt";
                    minimumViewabilityDecile = 560451;
                    mobileCarriers = new String[]{{
                        add("est"),
                        add("occaecati"),
                        add("labore"),
                    }};
                    mobileDevices = new String[]{{
                        add("perferendis"),
                        add("fugit"),
                        add("aliquid"),
                        add("magnam"),
                    }};
                    mobileOperatingSystemVersions = new String[]{{
                        add("eligendi"),
                        add("hic"),
                    }};
                    placements = new org.openapis.openapi.models.shared.PretargetingConfigPlacements[]{{
                        add(new PretargetingConfigPlacements() {{
                            token = "officiis";
                            type = "unde";
                        }}),
                        add(new PretargetingConfigPlacements() {{
                            token = "nulla";
                            type = "error";
                        }}),
                    }};
                    platforms = new String[]{{
                        add("magnam"),
                        add("nostrum"),
                        add("esse"),
                    }};
                    supportedCreativeAttributes = new String[]{{
                        add("fuga"),
                        add("facere"),
                        add("impedit"),
                    }};
                    userIdentifierDataRequired = new String[]{{
                        add("deserunt"),
                    }};
                    userLists = new String[]{{
                        add("laboriosam"),
                        add("doloremque"),
                        add("voluptatem"),
                        add("facere"),
                    }};
                    vendorTypes = new String[]{{
                        add("maxime"),
                        add("consequatur"),
                        add("eaque"),
                        add("architecto"),
                    }};
                    verticals = new String[]{{
                        add("porro"),
                        add("blanditiis"),
                        add("quae"),
                    }};
                    videoPlayerSizes = new org.openapis.openapi.models.shared.PretargetingConfigVideoPlayerSizes[]{{
                        add(new PretargetingConfigVideoPlayerSizes() {{
                            aspectRatio = "officiis";
                            minHeight = "sed";
                            minWidth = "necessitatibus";
                        }}),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "impedit";
                key = "ipsa";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "a";
                userIp = "maiores";
            }};            

            AdexchangebuyerPretargetingConfigUpdateResponse res = sdk.pretargetingConfig.adexchangebuyerPretargetingConfigUpdate(req, new AdexchangebuyerPretargetingConfigUpdateSecurity("laudantium", "maiores") {{
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
