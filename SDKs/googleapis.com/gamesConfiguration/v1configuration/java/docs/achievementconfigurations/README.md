# achievementConfigurations

### Available Operations

* [gamesConfigurationAchievementConfigurationsDelete](#gamesconfigurationachievementconfigurationsdelete) - Delete the achievement configuration with the given ID.
* [gamesConfigurationAchievementConfigurationsGet](#gamesconfigurationachievementconfigurationsget) - Retrieves the metadata of the achievement configuration with the given ID.
* [gamesConfigurationAchievementConfigurationsInsert](#gamesconfigurationachievementconfigurationsinsert) - Insert a new achievement configuration in this application.
* [gamesConfigurationAchievementConfigurationsList](#gamesconfigurationachievementconfigurationslist) - Returns a list of the achievement configurations in this application.
* [gamesConfigurationAchievementConfigurationsUpdate](#gamesconfigurationachievementconfigurationsupdate) - Update the metadata of the achievement configuration with the given ID.

## gamesConfigurationAchievementConfigurationsDelete

Delete the achievement configuration with the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesConfigurationAchievementConfigurationsDeleteRequest;
import org.openapis.openapi.models.operations.GamesConfigurationAchievementConfigurationsDeleteResponse;
import org.openapis.openapi.models.operations.GamesConfigurationAchievementConfigurationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesConfigurationAchievementConfigurationsDeleteRequest req = new GamesConfigurationAchievementConfigurationsDeleteRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            GamesConfigurationAchievementConfigurationsDeleteResponse res = sdk.achievementConfigurations.gamesConfigurationAchievementConfigurationsDelete(req, new GamesConfigurationAchievementConfigurationsDeleteSecurity("excepturi", "nisi") {{
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

## gamesConfigurationAchievementConfigurationsGet

Retrieves the metadata of the achievement configuration with the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesConfigurationAchievementConfigurationsGetRequest;
import org.openapis.openapi.models.operations.GamesConfigurationAchievementConfigurationsGetResponse;
import org.openapis.openapi.models.operations.GamesConfigurationAchievementConfigurationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesConfigurationAchievementConfigurationsGetRequest req = new GamesConfigurationAchievementConfigurationsGetRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "deserunt";
                key = "perferendis";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "sapiente";
                uploadProtocol = "quo";
            }};            

            GamesConfigurationAchievementConfigurationsGetResponse res = sdk.achievementConfigurations.gamesConfigurationAchievementConfigurationsGet(req, new GamesConfigurationAchievementConfigurationsGetSecurity("odit", "at") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.achievementConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesConfigurationAchievementConfigurationsInsert

Insert a new achievement configuration in this application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesConfigurationAchievementConfigurationsInsertRequest;
import org.openapis.openapi.models.operations.GamesConfigurationAchievementConfigurationsInsertResponse;
import org.openapis.openapi.models.operations.GamesConfigurationAchievementConfigurationsInsertSecurity;
import org.openapis.openapi.models.shared.AchievementConfiguration;
import org.openapis.openapi.models.shared.AchievementConfigurationAchievementTypeEnum;
import org.openapis.openapi.models.shared.AchievementConfigurationDetail;
import org.openapis.openapi.models.shared.AchievementConfigurationInitialStateEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LocalizedString;
import org.openapis.openapi.models.shared.LocalizedStringBundle;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesConfigurationAchievementConfigurationsInsertRequest req = new GamesConfigurationAchievementConfigurationsInsertRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                achievementConfiguration = new AchievementConfiguration() {{
                    achievementType = AchievementConfigurationAchievementTypeEnum.STANDARD;
                    draft = new AchievementConfigurationDetail() {{
                        description = new LocalizedStringBundle() {{
                            kind = "quod";
                            translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                add(new LocalizedString() {{
                                    kind = "esse";
                                    locale = "totam";
                                    value = "porro";
                                }}),
                                add(new LocalizedString() {{
                                    kind = "dolorum";
                                    locale = "dicta";
                                    value = "nam";
                                }}),
                                add(new LocalizedString() {{
                                    kind = "officia";
                                    locale = "occaecati";
                                    value = "fugit";
                                }}),
                                add(new LocalizedString() {{
                                    kind = "deleniti";
                                    locale = "hic";
                                    value = "optio";
                                }}),
                            }};
                        }};;
                        iconUrl = "totam";
                        kind = "beatae";
                        name = new LocalizedStringBundle() {{
                            kind = "commodi";
                            translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                add(new LocalizedString() {{
                                    kind = "modi";
                                    locale = "qui";
                                    value = "impedit";
                                }}),
                                add(new LocalizedString() {{
                                    kind = "cum";
                                    locale = "esse";
                                    value = "ipsum";
                                }}),
                            }};
                        }};;
                        pointValue = 568434;
                        sortRank = 135218;
                    }};;
                    id = "05929396-fea7-4596-ab10-faaa2352c595";
                    initialState = AchievementConfigurationInitialStateEnum.INITIAL_STATE_UNSPECIFIED;
                    kind = "excepturi";
                    published = new AchievementConfigurationDetail() {{
                        description = new LocalizedStringBundle() {{
                            kind = "accusantium";
                            translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                add(new LocalizedString() {{
                                    kind = "culpa";
                                    locale = "doloribus";
                                    value = "sapiente";
                                }}),
                                add(new LocalizedString() {{
                                    kind = "architecto";
                                    locale = "mollitia";
                                    value = "dolorem";
                                }}),
                            }};
                        }};;
                        iconUrl = "culpa";
                        kind = "consequuntur";
                        name = new LocalizedStringBundle() {{
                            kind = "repellat";
                            translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                add(new LocalizedString() {{
                                    kind = "occaecati";
                                    locale = "numquam";
                                    value = "commodi";
                                }}),
                                add(new LocalizedString() {{
                                    kind = "quam";
                                    locale = "molestiae";
                                    value = "velit";
                                }}),
                                add(new LocalizedString() {{
                                    kind = "error";
                                    locale = "quia";
                                    value = "quis";
                                }}),
                            }};
                        }};;
                        pointValue = 110375;
                        sortRank = 674752;
                    }};;
                    stepsToUnlock = 656330;
                    token = "enim";
                }};;
                accessToken = "odit";
                alt = AltEnum.PROTO;
                callback = "sequi";
                fields = "tenetur";
                key = "ipsam";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "possimus";
                uploadType = "aut";
                uploadProtocol = "quasi";
            }};            

            GamesConfigurationAchievementConfigurationsInsertResponse res = sdk.achievementConfigurations.gamesConfigurationAchievementConfigurationsInsert(req, new GamesConfigurationAchievementConfigurationsInsertSecurity("error", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.achievementConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesConfigurationAchievementConfigurationsList

Returns a list of the achievement configurations in this application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesConfigurationAchievementConfigurationsListRequest;
import org.openapis.openapi.models.operations.GamesConfigurationAchievementConfigurationsListResponse;
import org.openapis.openapi.models.operations.GamesConfigurationAchievementConfigurationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesConfigurationAchievementConfigurationsListRequest req = new GamesConfigurationAchievementConfigurationsListRequest("laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "nihil";
                key = "praesentium";
                maxResults = 976762L;
                oauthToken = "ipsa";
                pageToken = "omnis";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "cum";
                uploadProtocol = "perferendis";
            }};            

            GamesConfigurationAchievementConfigurationsListResponse res = sdk.achievementConfigurations.gamesConfigurationAchievementConfigurationsList(req, new GamesConfigurationAchievementConfigurationsListSecurity("doloremque", "reprehenderit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.achievementConfigurationListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesConfigurationAchievementConfigurationsUpdate

Update the metadata of the achievement configuration with the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesConfigurationAchievementConfigurationsUpdateRequest;
import org.openapis.openapi.models.operations.GamesConfigurationAchievementConfigurationsUpdateResponse;
import org.openapis.openapi.models.operations.GamesConfigurationAchievementConfigurationsUpdateSecurity;
import org.openapis.openapi.models.shared.AchievementConfiguration;
import org.openapis.openapi.models.shared.AchievementConfigurationAchievementTypeEnum;
import org.openapis.openapi.models.shared.AchievementConfigurationDetail;
import org.openapis.openapi.models.shared.AchievementConfigurationInitialStateEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LocalizedString;
import org.openapis.openapi.models.shared.LocalizedStringBundle;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesConfigurationAchievementConfigurationsUpdateRequest req = new GamesConfigurationAchievementConfigurationsUpdateRequest("ut") {{
                dollarXgafv = XgafvEnum.TWO;
                achievementConfiguration = new AchievementConfiguration() {{
                    achievementType = AchievementConfigurationAchievementTypeEnum.ACHIEVEMENT_TYPE_UNSPECIFIED;
                    draft = new AchievementConfigurationDetail() {{
                        description = new LocalizedStringBundle() {{
                            kind = "corporis";
                            translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                add(new LocalizedString() {{
                                    kind = "iusto";
                                    locale = "dicta";
                                    value = "harum";
                                }}),
                                add(new LocalizedString() {{
                                    kind = "enim";
                                    locale = "accusamus";
                                    value = "commodi";
                                }}),
                            }};
                        }};;
                        iconUrl = "repudiandae";
                        kind = "quae";
                        name = new LocalizedStringBundle() {{
                            kind = "ipsum";
                            translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                add(new LocalizedString() {{
                                    kind = "molestias";
                                    locale = "excepturi";
                                    value = "pariatur";
                                }}),
                                add(new LocalizedString() {{
                                    kind = "modi";
                                    locale = "praesentium";
                                    value = "rem";
                                }}),
                                add(new LocalizedString() {{
                                    kind = "voluptates";
                                    locale = "quasi";
                                    value = "repudiandae";
                                }}),
                            }};
                        }};;
                        pointValue = 575947;
                        sortRank = 83112;
                    }};;
                    id = "e450ad2a-bd44-4269-802d-502a94bb4f63";
                    initialState = AchievementConfigurationInitialStateEnum.REVEALED;
                    kind = "sint";
                    published = new AchievementConfigurationDetail() {{
                        description = new LocalizedStringBundle() {{
                            kind = "aliquid";
                            translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                add(new LocalizedString() {{
                                    kind = "necessitatibus";
                                    locale = "sint";
                                    value = "officia";
                                }}),
                                add(new LocalizedString() {{
                                    kind = "dolor";
                                    locale = "debitis";
                                    value = "a";
                                }}),
                                add(new LocalizedString() {{
                                    kind = "dolorum";
                                    locale = "in";
                                    value = "in";
                                }}),
                            }};
                        }};;
                        iconUrl = "illum";
                        kind = "maiores";
                        name = new LocalizedStringBundle() {{
                            kind = "rerum";
                            translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                add(new LocalizedString() {{
                                    kind = "magnam";
                                    locale = "cumque";
                                    value = "facere";
                                }}),
                            }};
                        }};;
                        pointValue = 411820;
                        sortRank = 396506;
                    }};;
                    stepsToUnlock = 675439;
                    token = "accusamus";
                }};;
                accessToken = "non";
                alt = AltEnum.MEDIA;
                callback = "enim";
                fields = "accusamus";
                key = "delectus";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "nam";
                uploadProtocol = "id";
            }};            

            GamesConfigurationAchievementConfigurationsUpdateResponse res = sdk.achievementConfigurations.gamesConfigurationAchievementConfigurationsUpdate(req, new GamesConfigurationAchievementConfigurationsUpdateSecurity("blanditiis", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.achievementConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
