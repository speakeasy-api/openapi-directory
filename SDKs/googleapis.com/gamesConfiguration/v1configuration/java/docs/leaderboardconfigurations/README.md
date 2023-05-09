# leaderboardConfigurations

### Available Operations

* [gamesConfigurationLeaderboardConfigurationsDelete](#gamesconfigurationleaderboardconfigurationsdelete) - Delete the leaderboard configuration with the given ID.
* [gamesConfigurationLeaderboardConfigurationsGet](#gamesconfigurationleaderboardconfigurationsget) - Retrieves the metadata of the leaderboard configuration with the given ID.
* [gamesConfigurationLeaderboardConfigurationsInsert](#gamesconfigurationleaderboardconfigurationsinsert) - Insert a new leaderboard configuration in this application.
* [gamesConfigurationLeaderboardConfigurationsList](#gamesconfigurationleaderboardconfigurationslist) - Returns a list of the leaderboard configurations in this application.
* [gamesConfigurationLeaderboardConfigurationsUpdate](#gamesconfigurationleaderboardconfigurationsupdate) - Update the metadata of the leaderboard configuration with the given ID.

## gamesConfigurationLeaderboardConfigurationsDelete

Delete the leaderboard configuration with the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesConfigurationLeaderboardConfigurationsDeleteRequest;
import org.openapis.openapi.models.operations.GamesConfigurationLeaderboardConfigurationsDeleteResponse;
import org.openapis.openapi.models.operations.GamesConfigurationLeaderboardConfigurationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesConfigurationLeaderboardConfigurationsDeleteRequest req = new GamesConfigurationLeaderboardConfigurationsDeleteRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "vel";
                fields = "natus";
                key = "omnis";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "nihil";
                uploadProtocol = "magnam";
            }};            

            GamesConfigurationLeaderboardConfigurationsDeleteResponse res = sdk.leaderboardConfigurations.gamesConfigurationLeaderboardConfigurationsDelete(req, new GamesConfigurationLeaderboardConfigurationsDeleteSecurity("distinctio", "id") {{
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

## gamesConfigurationLeaderboardConfigurationsGet

Retrieves the metadata of the leaderboard configuration with the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesConfigurationLeaderboardConfigurationsGetRequest;
import org.openapis.openapi.models.operations.GamesConfigurationLeaderboardConfigurationsGetResponse;
import org.openapis.openapi.models.operations.GamesConfigurationLeaderboardConfigurationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesConfigurationLeaderboardConfigurationsGetRequest req = new GamesConfigurationLeaderboardConfigurationsGetRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "nobis";
                fields = "eum";
                key = "vero";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "magnam";
                uploadProtocol = "et";
            }};            

            GamesConfigurationLeaderboardConfigurationsGetResponse res = sdk.leaderboardConfigurations.gamesConfigurationLeaderboardConfigurationsGet(req, new GamesConfigurationLeaderboardConfigurationsGetSecurity("excepturi", "ullam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.leaderboardConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesConfigurationLeaderboardConfigurationsInsert

Insert a new leaderboard configuration in this application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesConfigurationLeaderboardConfigurationsInsertRequest;
import org.openapis.openapi.models.operations.GamesConfigurationLeaderboardConfigurationsInsertResponse;
import org.openapis.openapi.models.operations.GamesConfigurationLeaderboardConfigurationsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GamesNumberAffixConfiguration;
import org.openapis.openapi.models.shared.GamesNumberFormatConfiguration;
import org.openapis.openapi.models.shared.GamesNumberFormatConfigurationNumberFormatTypeEnum;
import org.openapis.openapi.models.shared.LeaderboardConfiguration;
import org.openapis.openapi.models.shared.LeaderboardConfigurationDetail;
import org.openapis.openapi.models.shared.LeaderboardConfigurationScoreOrderEnum;
import org.openapis.openapi.models.shared.LocalizedString;
import org.openapis.openapi.models.shared.LocalizedStringBundle;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesConfigurationLeaderboardConfigurationsInsertRequest req = new GamesConfigurationLeaderboardConfigurationsInsertRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                leaderboardConfiguration = new LeaderboardConfiguration() {{
                    draft = new LeaderboardConfigurationDetail() {{
                        iconUrl = "sint";
                        kind = "accusantium";
                        name = new LocalizedStringBundle() {{
                            kind = "mollitia";
                            translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                add(new LocalizedString() {{
                                    kind = "mollitia";
                                    locale = "ad";
                                    value = "eum";
                                }}),
                                add(new LocalizedString() {{
                                    kind = "dolor";
                                    locale = "necessitatibus";
                                    value = "odit";
                                }}),
                                add(new LocalizedString() {{
                                    kind = "nemo";
                                    locale = "quasi";
                                    value = "iure";
                                }}),
                                add(new LocalizedString() {{
                                    kind = "doloribus";
                                    locale = "debitis";
                                    value = "eius";
                                }}),
                            }};
                        }};;
                        scoreFormat = new GamesNumberFormatConfiguration() {{
                            currencyCode = "maxime";
                            numDecimalPlaces = 537023;
                            numberFormatType = GamesNumberFormatConfigurationNumberFormatTypeEnum.TIME_DURATION;
                            suffix = new GamesNumberAffixConfiguration() {{
                                few = new LocalizedStringBundle() {{
                                    kind = "in";
                                    translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                        add(new LocalizedString() {{
                                            kind = "architecto";
                                            locale = "repudiandae";
                                            value = "ullam";
                                        }}),
                                    }};
                                }};;
                                many = new LocalizedStringBundle() {{
                                    kind = "expedita";
                                    translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                        add(new LocalizedString() {{
                                            kind = "repellat";
                                            locale = "quibusdam";
                                            value = "sed";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "saepe";
                                            locale = "pariatur";
                                            value = "accusantium";
                                        }}),
                                    }};
                                }};;
                                one = new LocalizedStringBundle() {{
                                    kind = "consequuntur";
                                    translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                        add(new LocalizedString() {{
                                            kind = "natus";
                                            locale = "magni";
                                            value = "sunt";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "quo";
                                            locale = "illum";
                                            value = "pariatur";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "maxime";
                                            locale = "ea";
                                            value = "excepturi";
                                        }}),
                                    }};
                                }};;
                                other = new LocalizedStringBundle() {{
                                    kind = "odit";
                                    translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                        add(new LocalizedString() {{
                                            kind = "accusantium";
                                            locale = "ab";
                                            value = "maiores";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "quidem";
                                            locale = "ipsam";
                                            value = "voluptate";
                                        }}),
                                    }};
                                }};;
                                two = new LocalizedStringBundle() {{
                                    kind = "autem";
                                    translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                        add(new LocalizedString() {{
                                            kind = "eaque";
                                            locale = "pariatur";
                                            value = "nemo";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "voluptatibus";
                                            locale = "perferendis";
                                            value = "fugiat";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "amet";
                                            locale = "aut";
                                            value = "cumque";
                                        }}),
                                    }};
                                }};;
                                zero = new LocalizedStringBundle() {{
                                    kind = "corporis";
                                    translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                        add(new LocalizedString() {{
                                            kind = "libero";
                                            locale = "nobis";
                                            value = "dolores";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "quis";
                                            locale = "totam";
                                            value = "dignissimos";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "eaque";
                                            locale = "quis";
                                            value = "nesciunt";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "eos";
                                            locale = "perferendis";
                                            value = "dolores";
                                        }}),
                                    }};
                                }};;
                            }};;
                        }};;
                        sortRank = 793698;
                    }};;
                    id = "73d5fe9b-90c2-4890-9b3f-e49a8d9cbf48";
                    kind = "aliquid";
                    published = new LeaderboardConfigurationDetail() {{
                        iconUrl = "dolorem";
                        kind = "dolorem";
                        name = new LocalizedStringBundle() {{
                            kind = "dolor";
                            translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                add(new LocalizedString() {{
                                    kind = "ipsum";
                                    locale = "hic";
                                    value = "excepturi";
                                }}),
                            }};
                        }};;
                        scoreFormat = new GamesNumberFormatConfiguration() {{
                            currencyCode = "cum";
                            numDecimalPlaces = 452109;
                            numberFormatType = GamesNumberFormatConfigurationNumberFormatTypeEnum.NUMERIC;
                            suffix = new GamesNumberAffixConfiguration() {{
                                few = new LocalizedStringBundle() {{
                                    kind = "reiciendis";
                                    translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                        add(new LocalizedString() {{
                                            kind = "dolorum";
                                            locale = "numquam";
                                            value = "veritatis";
                                        }}),
                                    }};
                                }};;
                                many = new LocalizedStringBundle() {{
                                    kind = "ipsa";
                                    translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                        add(new LocalizedString() {{
                                            kind = "iure";
                                            locale = "odio";
                                            value = "quaerat";
                                        }}),
                                    }};
                                }};;
                                one = new LocalizedStringBundle() {{
                                    kind = "accusamus";
                                    translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                        add(new LocalizedString() {{
                                            kind = "voluptatibus";
                                            locale = "voluptas";
                                            value = "natus";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "eos";
                                            locale = "atque";
                                            value = "sit";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "fugiat";
                                            locale = "ab";
                                            value = "soluta";
                                        }}),
                                    }};
                                }};;
                                other = new LocalizedStringBundle() {{
                                    kind = "dolorum";
                                    translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                        add(new LocalizedString() {{
                                            kind = "voluptate";
                                            locale = "dolorum";
                                            value = "deleniti";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "omnis";
                                            locale = "necessitatibus";
                                            value = "distinctio";
                                        }}),
                                    }};
                                }};;
                                two = new LocalizedStringBundle() {{
                                    kind = "asperiores";
                                    translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                        add(new LocalizedString() {{
                                            kind = "ipsum";
                                            locale = "voluptate";
                                            value = "id";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "saepe";
                                            locale = "eius";
                                            value = "aspernatur";
                                        }}),
                                    }};
                                }};;
                                zero = new LocalizedStringBundle() {{
                                    kind = "perferendis";
                                    translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                        add(new LocalizedString() {{
                                            kind = "optio";
                                            locale = "accusamus";
                                            value = "ad";
                                        }}),
                                    }};
                                }};;
                            }};;
                        }};;
                        sortRank = 904425;
                    }};;
                    scoreMax = "suscipit";
                    scoreMin = "deserunt";
                    scoreOrder = LeaderboardConfigurationScoreOrderEnum.LARGER_IS_BETTER;
                    token = "minima";
                }};;
                accessToken = "repellendus";
                alt = AltEnum.MEDIA;
                callback = "similique";
                fields = "alias";
                key = "at";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "vel";
                uploadProtocol = "quod";
            }};            

            GamesConfigurationLeaderboardConfigurationsInsertResponse res = sdk.leaderboardConfigurations.gamesConfigurationLeaderboardConfigurationsInsert(req, new GamesConfigurationLeaderboardConfigurationsInsertSecurity("officiis", "qui") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.leaderboardConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesConfigurationLeaderboardConfigurationsList

Returns a list of the leaderboard configurations in this application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesConfigurationLeaderboardConfigurationsListRequest;
import org.openapis.openapi.models.operations.GamesConfigurationLeaderboardConfigurationsListResponse;
import org.openapis.openapi.models.operations.GamesConfigurationLeaderboardConfigurationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesConfigurationLeaderboardConfigurationsListRequest req = new GamesConfigurationLeaderboardConfigurationsListRequest("dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "esse";
                alt = AltEnum.PROTO;
                callback = "iusto";
                fields = "ipsum";
                key = "quisquam";
                maxResults = 947371L;
                oauthToken = "amet";
                pageToken = "tempore";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "numquam";
                uploadProtocol = "enim";
            }};            

            GamesConfigurationLeaderboardConfigurationsListResponse res = sdk.leaderboardConfigurations.gamesConfigurationLeaderboardConfigurationsList(req, new GamesConfigurationLeaderboardConfigurationsListSecurity("dolorem", "sapiente") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.leaderboardConfigurationListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesConfigurationLeaderboardConfigurationsUpdate

Update the metadata of the leaderboard configuration with the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesConfigurationLeaderboardConfigurationsUpdateRequest;
import org.openapis.openapi.models.operations.GamesConfigurationLeaderboardConfigurationsUpdateResponse;
import org.openapis.openapi.models.operations.GamesConfigurationLeaderboardConfigurationsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GamesNumberAffixConfiguration;
import org.openapis.openapi.models.shared.GamesNumberFormatConfiguration;
import org.openapis.openapi.models.shared.GamesNumberFormatConfigurationNumberFormatTypeEnum;
import org.openapis.openapi.models.shared.LeaderboardConfiguration;
import org.openapis.openapi.models.shared.LeaderboardConfigurationDetail;
import org.openapis.openapi.models.shared.LeaderboardConfigurationScoreOrderEnum;
import org.openapis.openapi.models.shared.LocalizedString;
import org.openapis.openapi.models.shared.LocalizedStringBundle;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesConfigurationLeaderboardConfigurationsUpdateRequest req = new GamesConfigurationLeaderboardConfigurationsUpdateRequest("totam") {{
                dollarXgafv = XgafvEnum.ONE;
                leaderboardConfiguration = new LeaderboardConfiguration() {{
                    draft = new LeaderboardConfigurationDetail() {{
                        iconUrl = "sit";
                        kind = "expedita";
                        name = new LocalizedStringBundle() {{
                            kind = "neque";
                            translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                add(new LocalizedString() {{
                                    kind = "vel";
                                    locale = "libero";
                                    value = "voluptas";
                                }}),
                            }};
                        }};;
                        scoreFormat = new GamesNumberFormatConfiguration() {{
                            currencyCode = "deserunt";
                            numDecimalPlaces = 463575;
                            numberFormatType = GamesNumberFormatConfigurationNumberFormatTypeEnum.NUMBER_FORMAT_TYPE_UNSPECIFIED;
                            suffix = new GamesNumberAffixConfiguration() {{
                                few = new LocalizedStringBundle() {{
                                    kind = "incidunt";
                                    translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                        add(new LocalizedString() {{
                                            kind = "cupiditate";
                                            locale = "maxime";
                                            value = "pariatur";
                                        }}),
                                    }};
                                }};;
                                many = new LocalizedStringBundle() {{
                                    kind = "soluta";
                                    translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                        add(new LocalizedString() {{
                                            kind = "laborum";
                                            locale = "totam";
                                            value = "incidunt";
                                        }}),
                                    }};
                                }};;
                                one = new LocalizedStringBundle() {{
                                    kind = "aspernatur";
                                    translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                        add(new LocalizedString() {{
                                            kind = "distinctio";
                                            locale = "facilis";
                                            value = "aliquid";
                                        }}),
                                    }};
                                }};;
                                other = new LocalizedStringBundle() {{
                                    kind = "quam";
                                    translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                        add(new LocalizedString() {{
                                            kind = "temporibus";
                                            locale = "qui";
                                            value = "neque";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "fugit";
                                            locale = "magni";
                                            value = "odio";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "sunt";
                                            locale = "ullam";
                                            value = "nam";
                                        }}),
                                    }};
                                }};;
                                two = new LocalizedStringBundle() {{
                                    kind = "hic";
                                    translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                        add(new LocalizedString() {{
                                            kind = "cumque";
                                            locale = "soluta";
                                            value = "nobis";
                                        }}),
                                    }};
                                }};;
                                zero = new LocalizedStringBundle() {{
                                    kind = "et";
                                    translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                        add(new LocalizedString() {{
                                            kind = "ipsum";
                                            locale = "veritatis";
                                            value = "nobis";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "quos";
                                            locale = "tempore";
                                            value = "cupiditate";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "aperiam";
                                            locale = "delectus";
                                            value = "dolorem";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "dolore";
                                            locale = "labore";
                                            value = "adipisci";
                                        }}),
                                    }};
                                }};;
                            }};;
                        }};;
                        sortRank = 677263;
                    }};;
                    id = "1108e0ad-cf4b-4921-879f-ce953f73ef7f";
                    kind = "distinctio";
                    published = new LeaderboardConfigurationDetail() {{
                        iconUrl = "quod";
                        kind = "odio";
                        name = new LocalizedStringBundle() {{
                            kind = "similique";
                            translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                add(new LocalizedString() {{
                                    kind = "vero";
                                    locale = "ducimus";
                                    value = "dolore";
                                }}),
                                add(new LocalizedString() {{
                                    kind = "quibusdam";
                                    locale = "illum";
                                    value = "sequi";
                                }}),
                                add(new LocalizedString() {{
                                    kind = "natus";
                                    locale = "impedit";
                                    value = "aut";
                                }}),
                            }};
                        }};;
                        scoreFormat = new GamesNumberFormatConfiguration() {{
                            currencyCode = "voluptatibus";
                            numDecimalPlaces = 347233;
                            numberFormatType = GamesNumberFormatConfigurationNumberFormatTypeEnum.CURRENCY;
                            suffix = new GamesNumberAffixConfiguration() {{
                                few = new LocalizedStringBundle() {{
                                    kind = "fugit";
                                    translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                        add(new LocalizedString() {{
                                            kind = "maiores";
                                            locale = "doloribus";
                                            value = "iusto";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "eligendi";
                                            locale = "ducimus";
                                            value = "alias";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "officia";
                                            locale = "tempora";
                                            value = "ipsam";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "ea";
                                            locale = "aspernatur";
                                            value = "vel";
                                        }}),
                                    }};
                                }};;
                                many = new LocalizedStringBundle() {{
                                    kind = "possimus";
                                    translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                        add(new LocalizedString() {{
                                            kind = "ratione";
                                            locale = "ex";
                                            value = "laudantium";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "dicta";
                                            locale = "dolor";
                                            value = "maiores";
                                        }}),
                                    }};
                                }};;
                                one = new LocalizedStringBundle() {{
                                    kind = "quasi";
                                    translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                        add(new LocalizedString() {{
                                            kind = "nulla";
                                            locale = "excepturi";
                                            value = "voluptatibus";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "nostrum";
                                            locale = "sapiente";
                                            value = "quisquam";
                                        }}),
                                    }};
                                }};;
                                other = new LocalizedStringBundle() {{
                                    kind = "saepe";
                                    translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                        add(new LocalizedString() {{
                                            kind = "impedit";
                                            locale = "corporis";
                                            value = "veniam";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "aliquid";
                                            locale = "inventore";
                                            value = "magnam";
                                        }}),
                                    }};
                                }};;
                                two = new LocalizedStringBundle() {{
                                    kind = "ea";
                                    translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                        add(new LocalizedString() {{
                                            kind = "consectetur";
                                            locale = "recusandae";
                                            value = "aspernatur";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "minima";
                                            locale = "eaque";
                                            value = "a";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "libero";
                                            locale = "aut";
                                            value = "aut";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "deleniti";
                                            locale = "impedit";
                                            value = "aliquam";
                                        }}),
                                    }};
                                }};;
                                zero = new LocalizedStringBundle() {{
                                    kind = "fugit";
                                    translations = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                        add(new LocalizedString() {{
                                            kind = "inventore";
                                            locale = "non";
                                            value = "et";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "dolorum";
                                            locale = "laborum";
                                            value = "placeat";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "velit";
                                            locale = "eum";
                                            value = "autem";
                                        }}),
                                        add(new LocalizedString() {{
                                            kind = "nobis";
                                            locale = "quas";
                                            value = "assumenda";
                                        }}),
                                    }};
                                }};;
                            }};;
                        }};;
                        sortRank = 860552;
                    }};;
                    scoreMax = "voluptas";
                    scoreMin = "libero";
                    scoreOrder = LeaderboardConfigurationScoreOrderEnum.SCORE_ORDER_UNSPECIFIED;
                    token = "tempora";
                }};;
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "provident";
                fields = "ipsa";
                key = "molestiae";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "eius";
                uploadProtocol = "esse";
            }};            

            GamesConfigurationLeaderboardConfigurationsUpdateResponse res = sdk.leaderboardConfigurations.gamesConfigurationLeaderboardConfigurationsUpdate(req, new GamesConfigurationLeaderboardConfigurationsUpdateSecurity("esse", "rem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.leaderboardConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
