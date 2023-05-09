# accounts

### Available Operations

* [adsensehostAccountsAdclientsGet](#adsensehostaccountsadclientsget) - Get information about one of the ad clients in the specified publisher's AdSense account.
* [adsensehostAccountsAdclientsList](#adsensehostaccountsadclientslist) - List all hosted ad clients in the specified hosted account.
* [adsensehostAccountsAdunitsDelete](#adsensehostaccountsadunitsdelete) - Delete the specified ad unit from the specified publisher AdSense account.
* [adsensehostAccountsAdunitsGet](#adsensehostaccountsadunitsget) - Get the specified host ad unit in this AdSense account.
* [adsensehostAccountsAdunitsGetAdCode](#adsensehostaccountsadunitsgetadcode) - Get ad code for the specified ad unit, attaching the specified host custom channels.
* [adsensehostAccountsAdunitsInsert](#adsensehostaccountsadunitsinsert) - Insert the supplied ad unit into the specified publisher AdSense account.
* [adsensehostAccountsAdunitsList](#adsensehostaccountsadunitslist) - List all ad units in the specified publisher's AdSense account.
* [adsensehostAccountsAdunitsPatch](#adsensehostaccountsadunitspatch) - Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.
* [adsensehostAccountsAdunitsUpdate](#adsensehostaccountsadunitsupdate) - Update the supplied ad unit in the specified publisher AdSense account.
* [adsensehostAccountsGet](#adsensehostaccountsget) - Get information about the selected associated AdSense account.
* [adsensehostAccountsList](#adsensehostaccountslist) - List hosted accounts associated with this AdSense account by ad client id.
* [adsensehostAccountsReportsGenerate](#adsensehostaccountsreportsgenerate) - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

## adsensehostAccountsAdclientsGet

Get information about one of the ad clients in the specified publisher's AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdclientsGetRequest;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdclientsGetResponse;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdclientsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostAccountsAdclientsGetRequest req = new AdsensehostAccountsAdclientsGetRequest("deserunt", "suscipit") {{
                alt = AltEnum.CSV;
                fields = "magnam";
                key = "debitis";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "delectus";
                userIp = "tempora";
            }};            

            AdsensehostAccountsAdclientsGetResponse res = sdk.accounts.adsensehostAccountsAdclientsGet(req, new AdsensehostAccountsAdclientsGetSecurity("suscipit", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.adClient != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsensehostAccountsAdclientsList

List all hosted ad clients in the specified hosted account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdclientsListRequest;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdclientsListResponse;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdclientsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostAccountsAdclientsListRequest req = new AdsensehostAccountsAdclientsListRequest("minus") {{
                alt = AltEnum.JSON;
                fields = "voluptatum";
                key = "iusto";
                maxResults = 568045L;
                oauthToken = "nisi";
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "temporibus";
                userIp = "ab";
            }};            

            AdsensehostAccountsAdclientsListResponse res = sdk.accounts.adsensehostAccountsAdclientsList(req, new AdsensehostAccountsAdclientsListSecurity("quis", "veritatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.adClients != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsensehostAccountsAdunitsDelete

Delete the specified ad unit from the specified publisher AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdunitsDeleteRequest;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdunitsDeleteResponse;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdunitsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostAccountsAdunitsDeleteRequest req = new AdsensehostAccountsAdunitsDeleteRequest("deserunt", "perferendis", "ipsam") {{
                alt = AltEnum.JSON;
                fields = "sapiente";
                key = "quo";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "at";
                userIp = "at";
            }};            

            AdsensehostAccountsAdunitsDeleteResponse res = sdk.accounts.adsensehostAccountsAdunitsDelete(req, new AdsensehostAccountsAdunitsDeleteSecurity("maiores", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.adUnit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsensehostAccountsAdunitsGet

Get the specified host ad unit in this AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdunitsGetRequest;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdunitsGetResponse;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdunitsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostAccountsAdunitsGetRequest req = new AdsensehostAccountsAdunitsGetRequest("quod", "quod", "esse") {{
                alt = AltEnum.JSON;
                fields = "porro";
                key = "dolorum";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "nam";
                userIp = "officia";
            }};            

            AdsensehostAccountsAdunitsGetResponse res = sdk.accounts.adsensehostAccountsAdunitsGet(req, new AdsensehostAccountsAdunitsGetSecurity("occaecati", "fugit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.adUnit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsensehostAccountsAdunitsGetAdCode

Get ad code for the specified ad unit, attaching the specified host custom channels.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdunitsGetAdCodeRequest;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdunitsGetAdCodeResponse;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdunitsGetAdCodeSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostAccountsAdunitsGetAdCodeRequest req = new AdsensehostAccountsAdunitsGetAdCodeRequest("deleniti", "hic", "optio") {{
                alt = AltEnum.JSON;
                fields = "beatae";
                hostCustomChannelId = new String[]{{
                    add("molestiae"),
                    add("modi"),
                }};
                key = "qui";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "cum";
                userIp = "esse";
            }};            

            AdsensehostAccountsAdunitsGetAdCodeResponse res = sdk.accounts.adsensehostAccountsAdunitsGetAdCode(req, new AdsensehostAccountsAdunitsGetAdCodeSecurity("ipsum", "excepturi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.adCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsensehostAccountsAdunitsInsert

Insert the supplied ad unit into the specified publisher AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdunitsInsertRequest;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdunitsInsertResponse;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdunitsInsertSecurity;
import org.openapis.openapi.models.shared.AdStyle;
import org.openapis.openapi.models.shared.AdStyleColors;
import org.openapis.openapi.models.shared.AdStyleFont;
import org.openapis.openapi.models.shared.AdUnit;
import org.openapis.openapi.models.shared.AdUnitContentAdsSettings;
import org.openapis.openapi.models.shared.AdUnitContentAdsSettingsBackupOption;
import org.openapis.openapi.models.shared.AdUnitMobileContentAdsSettings;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostAccountsAdunitsInsertRequest req = new AdsensehostAccountsAdunitsInsertRequest("aspernatur", "perferendis") {{
                adUnit = new AdUnit() {{
                    code = "ad";
                    contentAdsSettings = new AdUnitContentAdsSettings() {{
                        backupOption = new AdUnitContentAdsSettingsBackupOption() {{
                            color = "natus";
                            type = "sed";
                            url = "iste";
                        }};;
                        size = "dolor";
                        type = "natus";
                    }};;
                    customStyle = new AdStyle() {{
                        colors = new AdStyleColors() {{
                            background = "laboriosam";
                            border = "hic";
                            text = "saepe";
                            title = "Miss";
                            url = "in";
                        }};;
                        corners = "corporis";
                        font = new AdStyleFont() {{
                            family = "iste";
                            size = "iure";
                        }};;
                        kind = "saepe";
                    }};;
                    id = "b10faaa2-352c-4595-9907-aff1a3a2fa94";
                    kind = "commodi";
                    mobileContentAdsSettings = new AdUnitMobileContentAdsSettings() {{
                        markupLanguage = "quam";
                        scriptingLanguage = "molestiae";
                        size = "velit";
                        type = "error";
                    }};;
                    name = "Beatrice Brown";
                    status = "enim";
                }};;
                alt = AltEnum.CSV;
                fields = "quo";
                key = "sequi";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "ipsam";
                userIp = "id";
            }};            

            AdsensehostAccountsAdunitsInsertResponse res = sdk.accounts.adsensehostAccountsAdunitsInsert(req, new AdsensehostAccountsAdunitsInsertSecurity("possimus", "aut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.adUnit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsensehostAccountsAdunitsList

List all ad units in the specified publisher's AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdunitsListRequest;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdunitsListResponse;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdunitsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostAccountsAdunitsListRequest req = new AdsensehostAccountsAdunitsListRequest("quasi", "error") {{
                alt = AltEnum.JSON;
                fields = "laborum";
                includeInactive = false;
                key = "quasi";
                maxResults = 971945L;
                oauthToken = "voluptatibus";
                pageToken = "vero";
                prettyPrint = false;
                quotaUser = "nihil";
                userIp = "praesentium";
            }};            

            AdsensehostAccountsAdunitsListResponse res = sdk.accounts.adsensehostAccountsAdunitsList(req, new AdsensehostAccountsAdunitsListSecurity("voluptatibus", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.adUnits != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsensehostAccountsAdunitsPatch

Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdunitsPatchRequest;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdunitsPatchResponse;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdunitsPatchSecurity;
import org.openapis.openapi.models.shared.AdStyle;
import org.openapis.openapi.models.shared.AdStyleColors;
import org.openapis.openapi.models.shared.AdStyleFont;
import org.openapis.openapi.models.shared.AdUnit;
import org.openapis.openapi.models.shared.AdUnitContentAdsSettings;
import org.openapis.openapi.models.shared.AdUnitContentAdsSettingsBackupOption;
import org.openapis.openapi.models.shared.AdUnitMobileContentAdsSettings;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostAccountsAdunitsPatchRequest req = new AdsensehostAccountsAdunitsPatchRequest("omnis", "voluptate", "cum") {{
                adUnit = new AdUnit() {{
                    code = "perferendis";
                    contentAdsSettings = new AdUnitContentAdsSettings() {{
                        backupOption = new AdUnitContentAdsSettingsBackupOption() {{
                            color = "doloremque";
                            type = "reprehenderit";
                            url = "ut";
                        }};;
                        size = "maiores";
                        type = "dicta";
                    }};;
                    customStyle = new AdStyle() {{
                        colors = new AdStyleColors() {{
                            background = "corporis";
                            border = "dolore";
                            text = "iusto";
                            title = "Mr.";
                            url = "harum";
                        }};;
                        corners = "enim";
                        font = new AdStyleFont() {{
                            family = "accusamus";
                            size = "commodi";
                        }};;
                        kind = "repudiandae";
                    }};;
                    id = "13b99d48-8e1e-491e-850a-d2abd4426980";
                    kind = "magni";
                    mobileContentAdsSettings = new AdUnitMobileContentAdsSettings() {{
                        markupLanguage = "assumenda";
                        scriptingLanguage = "ipsam";
                        size = "alias";
                        type = "fugit";
                    }};;
                    name = "Marshall Glover";
                    status = "labore";
                }};;
                alt = AltEnum.JSON;
                fields = "eum";
                key = "non";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "sint";
                userIp = "aliquid";
            }};            

            AdsensehostAccountsAdunitsPatchResponse res = sdk.accounts.adsensehostAccountsAdunitsPatch(req, new AdsensehostAccountsAdunitsPatchSecurity("provident", "necessitatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.adUnit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsensehostAccountsAdunitsUpdate

Update the supplied ad unit in the specified publisher AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdunitsUpdateRequest;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdunitsUpdateResponse;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdunitsUpdateSecurity;
import org.openapis.openapi.models.shared.AdStyle;
import org.openapis.openapi.models.shared.AdStyleColors;
import org.openapis.openapi.models.shared.AdStyleFont;
import org.openapis.openapi.models.shared.AdUnit;
import org.openapis.openapi.models.shared.AdUnitContentAdsSettings;
import org.openapis.openapi.models.shared.AdUnitContentAdsSettingsBackupOption;
import org.openapis.openapi.models.shared.AdUnitMobileContentAdsSettings;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostAccountsAdunitsUpdateRequest req = new AdsensehostAccountsAdunitsUpdateRequest("sint", "officia") {{
                adUnit = new AdUnit() {{
                    code = "dolor";
                    contentAdsSettings = new AdUnitContentAdsSettings() {{
                        backupOption = new AdUnitContentAdsSettingsBackupOption() {{
                            color = "debitis";
                            type = "a";
                            url = "dolorum";
                        }};;
                        size = "in";
                        type = "in";
                    }};;
                    customStyle = new AdStyle() {{
                        colors = new AdStyleColors() {{
                            background = "illum";
                            border = "maiores";
                            text = "rerum";
                            title = "Mr.";
                            url = "magnam";
                        }};;
                        corners = "cumque";
                        font = new AdStyleFont() {{
                            family = "facere";
                            size = "ea";
                        }};;
                        kind = "aliquid";
                    }};;
                    id = "ae395efb-9ba8-48f3-a669-97074ba4469b";
                    kind = "eum";
                    mobileContentAdsSettings = new AdUnitMobileContentAdsSettings() {{
                        markupLanguage = "vero";
                        scriptingLanguage = "aspernatur";
                        size = "architecto";
                        type = "magnam";
                    }};;
                    name = "Miriam Hermann";
                    status = "sint";
                }};;
                alt = AltEnum.CSV;
                fields = "mollitia";
                key = "reiciendis";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "ad";
                userIp = "eum";
            }};            

            AdsensehostAccountsAdunitsUpdateResponse res = sdk.accounts.adsensehostAccountsAdunitsUpdate(req, new AdsensehostAccountsAdunitsUpdateSecurity("dolor", "necessitatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.adUnit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsensehostAccountsGet

Get information about the selected associated AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostAccountsGetRequest;
import org.openapis.openapi.models.operations.AdsensehostAccountsGetResponse;
import org.openapis.openapi.models.operations.AdsensehostAccountsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostAccountsGetRequest req = new AdsensehostAccountsGetRequest("odit") {{
                alt = AltEnum.CSV;
                fields = "quasi";
                key = "iure";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "debitis";
                userIp = "eius";
            }};            

            AdsensehostAccountsGetResponse res = sdk.accounts.adsensehostAccountsGet(req, new AdsensehostAccountsGetSecurity("maxime", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsensehostAccountsList

List hosted accounts associated with this AdSense account by ad client id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostAccountsListRequest;
import org.openapis.openapi.models.operations.AdsensehostAccountsListResponse;
import org.openapis.openapi.models.operations.AdsensehostAccountsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostAccountsListRequest req = new AdsensehostAccountsListRequest(                new String[]{{
                                add("in"),
                                add("architecto"),
                                add("architecto"),
                            }}) {{
                alt = AltEnum.JSON;
                fields = "ullam";
                key = "expedita";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "repellat";
                userIp = "quibusdam";
            }};            

            AdsensehostAccountsListResponse res = sdk.accounts.adsensehostAccountsList(req, new AdsensehostAccountsListSecurity("sed", "saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsensehostAccountsReportsGenerate

Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostAccountsReportsGenerateRequest;
import org.openapis.openapi.models.operations.AdsensehostAccountsReportsGenerateResponse;
import org.openapis.openapi.models.operations.AdsensehostAccountsReportsGenerateSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostAccountsReportsGenerateRequest req = new AdsensehostAccountsReportsGenerateRequest("pariatur", "accusantium", "consequuntur") {{
                alt = AltEnum.JSON;
                dimension = new String[]{{
                    add("magni"),
                    add("sunt"),
                    add("quo"),
                }};
                fields = "illum";
                filter = new String[]{{
                    add("maxime"),
                    add("ea"),
                    add("excepturi"),
                    add("odit"),
                }};
                key = "ea";
                locale = "accusantium";
                maxResults = 69167L;
                metric = new String[]{{
                    add("quidem"),
                    add("ipsam"),
                    add("voluptate"),
                    add("autem"),
                }};
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "eaque";
                sort = new String[]{{
                    add("nemo"),
                    add("voluptatibus"),
                    add("perferendis"),
                    add("fugiat"),
                }};
                startIndex = 230742L;
                userIp = "aut";
            }};            

            AdsensehostAccountsReportsGenerateResponse res = sdk.accounts.adsensehostAccountsReportsGenerate(req, new AdsensehostAccountsReportsGenerateSecurity("cumque", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.report != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
