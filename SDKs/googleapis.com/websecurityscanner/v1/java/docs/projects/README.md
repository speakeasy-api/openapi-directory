# projects

### Available Operations

* [websecurityscannerProjectsScanConfigsCreate](#websecurityscannerprojectsscanconfigscreate) - Creates a new ScanConfig.
* [websecurityscannerProjectsScanConfigsDelete](#websecurityscannerprojectsscanconfigsdelete) - Deletes an existing ScanConfig and its child resources.
* [websecurityscannerProjectsScanConfigsList](#websecurityscannerprojectsscanconfigslist) - Lists ScanConfigs under a given project.
* [websecurityscannerProjectsScanConfigsPatch](#websecurityscannerprojectsscanconfigspatch) - Updates a ScanConfig. This method support partial update of a ScanConfig.
* [websecurityscannerProjectsScanConfigsScanRunsCrawledUrlsList](#websecurityscannerprojectsscanconfigsscanrunscrawledurlslist) - List CrawledUrls under a given ScanRun.
* [websecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsList](#websecurityscannerprojectsscanconfigsscanrunsfindingtypestatslist) - List all FindingTypeStats under a given ScanRun.
* [websecurityscannerProjectsScanConfigsScanRunsFindingsGet](#websecurityscannerprojectsscanconfigsscanrunsfindingsget) - Gets a Finding.
* [websecurityscannerProjectsScanConfigsScanRunsFindingsList](#websecurityscannerprojectsscanconfigsscanrunsfindingslist) - List Findings under a given ScanRun.
* [websecurityscannerProjectsScanConfigsScanRunsList](#websecurityscannerprojectsscanconfigsscanrunslist) - Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.
* [websecurityscannerProjectsScanConfigsScanRunsStop](#websecurityscannerprojectsscanconfigsscanrunsstop) - Stops a ScanRun. The stopped ScanRun is returned.
* [websecurityscannerProjectsScanConfigsStart](#websecurityscannerprojectsscanconfigsstart) - Start a ScanRun according to the given ScanConfig.

## websecurityscannerProjectsScanConfigsCreate

Creates a new ScanConfig.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreateRequest;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreateResponse;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Authentication;
import org.openapis.openapi.models.shared.CustomAccount;
import org.openapis.openapi.models.shared.GoogleAccount;
import org.openapis.openapi.models.shared.IapCredential;
import org.openapis.openapi.models.shared.IapTestServiceAccountInfo;
import org.openapis.openapi.models.shared.ScanConfig;
import org.openapis.openapi.models.shared.ScanConfigExportToSecurityCommandCenterEnum;
import org.openapis.openapi.models.shared.ScanConfigRiskLevelEnum;
import org.openapis.openapi.models.shared.ScanConfigUserAgentEnum;
import org.openapis.openapi.models.shared.Schedule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebsecurityscannerProjectsScanConfigsCreateRequest req = new WebsecurityscannerProjectsScanConfigsCreateRequest("esse") {{
                dollarXgafv = XgafvEnum.TWO;
                scanConfig = new ScanConfig() {{
                    authentication = new Authentication() {{
                        customAccount = new CustomAccount() {{
                            loginUrl = "porro";
                            password = "dolorum";
                            username = "Billy_Reichel";
                        }};;
                        googleAccount = new GoogleAccount() {{
                            password = "fugit";
                            username = "Kale_Welch10";
                        }};;
                        iapCredential = new IapCredential() {{
                            iapTestServiceAccountInfo = new IapTestServiceAccountInfo() {{
                                targetAudienceClientId = "commodi";
                            }};;
                        }};;
                    }};;
                    blacklistPatterns = new String[]{{
                        add("modi"),
                        add("qui"),
                    }};
                    displayName = "impedit";
                    exportToSecurityCommandCenter = ScanConfigExportToSecurityCommandCenterEnum.DISABLED;
                    ignoreHttpStatusErrors = false;
                    managedScan = false;
                    maxQps = 456150;
                    name = "Mrs. Miriam Collier";
                    riskLevel = ScanConfigRiskLevelEnum.RISK_LEVEL_UNSPECIFIED;
                    schedule = new Schedule() {{
                        intervalDurationDays = 612096;
                        scheduleTime = "dolor";
                    }};;
                    startingUrls = new String[]{{
                        add("laboriosam"),
                        add("hic"),
                        add("saepe"),
                    }};
                    staticIpScan = false;
                    userAgent = ScanConfigUserAgentEnum.CHROME_ANDROID;
                }};;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "iste";
                fields = "iure";
                key = "saepe";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "ipsa";
                uploadProtocol = "reiciendis";
            }};            

            WebsecurityscannerProjectsScanConfigsCreateResponse res = sdk.projects.websecurityscannerProjectsScanConfigsCreate(req, new WebsecurityscannerProjectsScanConfigsCreateSecurity("est", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scanConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## websecurityscannerProjectsScanConfigsDelete

Deletes an existing ScanConfig and its child resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsDeleteRequest;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsDeleteResponse;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebsecurityscannerProjectsScanConfigsDeleteRequest req = new WebsecurityscannerProjectsScanConfigsDeleteRequest("laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorem";
                alt = AltEnum.MEDIA;
                callback = "explicabo";
                fields = "nobis";
                key = "enim";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "minima";
                uploadProtocol = "excepturi";
            }};            

            WebsecurityscannerProjectsScanConfigsDeleteResponse res = sdk.projects.websecurityscannerProjectsScanConfigsDelete(req, new WebsecurityscannerProjectsScanConfigsDeleteSecurity("accusantium", "iure") {{
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

## websecurityscannerProjectsScanConfigsList

Lists ScanConfigs under a given project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsListRequest;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsListResponse;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebsecurityscannerProjectsScanConfigsListRequest req = new WebsecurityscannerProjectsScanConfigsListRequest("culpa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "mollitia";
                fields = "dolorem";
                key = "culpa";
                oauthToken = "consequuntur";
                pageSize = 995300L;
                pageToken = "mollitia";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "numquam";
                uploadProtocol = "commodi";
            }};            

            WebsecurityscannerProjectsScanConfigsListResponse res = sdk.projects.websecurityscannerProjectsScanConfigsList(req, new WebsecurityscannerProjectsScanConfigsListSecurity("quam", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listScanConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## websecurityscannerProjectsScanConfigsPatch

Updates a ScanConfig. This method support partial update of a ScanConfig.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsPatchRequest;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsPatchResponse;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Authentication;
import org.openapis.openapi.models.shared.CustomAccount;
import org.openapis.openapi.models.shared.GoogleAccount;
import org.openapis.openapi.models.shared.IapCredential;
import org.openapis.openapi.models.shared.IapTestServiceAccountInfo;
import org.openapis.openapi.models.shared.ScanConfig;
import org.openapis.openapi.models.shared.ScanConfigExportToSecurityCommandCenterEnum;
import org.openapis.openapi.models.shared.ScanConfigRiskLevelEnum;
import org.openapis.openapi.models.shared.ScanConfigUserAgentEnum;
import org.openapis.openapi.models.shared.Schedule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebsecurityscannerProjectsScanConfigsPatchRequest req = new WebsecurityscannerProjectsScanConfigsPatchRequest("velit") {{
                dollarXgafv = XgafvEnum.TWO;
                scanConfig = new ScanConfig() {{
                    authentication = new Authentication() {{
                        customAccount = new CustomAccount() {{
                            loginUrl = "quia";
                            password = "quis";
                            username = "Bernie.Padberg";
                        }};;
                        googleAccount = new GoogleAccount() {{
                            password = "odit";
                            username = "Orlando.Dietrich66";
                        }};;
                        iapCredential = new IapCredential() {{
                            iapTestServiceAccountInfo = new IapTestServiceAccountInfo() {{
                                targetAudienceClientId = "possimus";
                            }};;
                        }};;
                    }};;
                    blacklistPatterns = new String[]{{
                        add("quasi"),
                    }};
                    displayName = "error";
                    exportToSecurityCommandCenter = ScanConfigExportToSecurityCommandCenterEnum.DISABLED;
                    ignoreHttpStatusErrors = false;
                    managedScan = false;
                    maxQps = 673660;
                    name = "Johanna Wolf";
                    riskLevel = ScanConfigRiskLevelEnum.NORMAL;
                    schedule = new Schedule() {{
                        intervalDurationDays = 976762;
                        scheduleTime = "ipsa";
                    }};;
                    startingUrls = new String[]{{
                        add("voluptate"),
                        add("cum"),
                        add("perferendis"),
                    }};
                    staticIpScan = false;
                    userAgent = ScanConfigUserAgentEnum.USER_AGENT_UNSPECIFIED;
                }};;
                accessToken = "reprehenderit";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "dicta";
                key = "corporis";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "iusto";
                updateMask = "dicta";
                uploadType = "harum";
                uploadProtocol = "enim";
            }};            

            WebsecurityscannerProjectsScanConfigsPatchResponse res = sdk.projects.websecurityscannerProjectsScanConfigsPatch(req, new WebsecurityscannerProjectsScanConfigsPatchSecurity("accusamus", "commodi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scanConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## websecurityscannerProjectsScanConfigsScanRunsCrawledUrlsList

List CrawledUrls under a given ScanRun.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListRequest;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListResponse;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListRequest req = new WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListRequest("repudiandae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsum";
                alt = AltEnum.PROTO;
                callback = "molestias";
                fields = "excepturi";
                key = "pariatur";
                oauthToken = "modi";
                pageSize = 508969L;
                pageToken = "rem";
                prettyPrint = false;
                quotaUser = "voluptates";
                uploadType = "quasi";
                uploadProtocol = "repudiandae";
            }};            

            WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListResponse res = sdk.projects.websecurityscannerProjectsScanConfigsScanRunsCrawledUrlsList(req, new WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListSecurity("sint", "veritatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCrawledUrlsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## websecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsList

List all FindingTypeStats under a given ScanRun.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListRequest;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListRequest req = new WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListRequest("itaque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "enim";
                alt = AltEnum.JSON;
                callback = "est";
                fields = "quibusdam";
                key = "explicabo";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "quibusdam";
                uploadProtocol = "labore";
            }};            

            WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse res = sdk.projects.websecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsList(req, new WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListSecurity("modi", "qui") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listFindingTypeStatsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## websecurityscannerProjectsScanConfigsScanRunsFindingsGet

Gets a Finding.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetRequest;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetRequest req = new WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetRequest("aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quos";
                alt = AltEnum.JSON;
                callback = "magni";
                fields = "assumenda";
                key = "ipsam";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "dolorum";
                uploadProtocol = "excepturi";
            }};            

            WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse res = sdk.projects.websecurityscannerProjectsScanConfigsScanRunsFindingsGet(req, new WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetSecurity("tempora", "facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.finding != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## websecurityscannerProjectsScanConfigsScanRunsFindingsList

List Findings under a given ScanRun.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsListRequest;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebsecurityscannerProjectsScanConfigsScanRunsFindingsListRequest req = new WebsecurityscannerProjectsScanConfigsScanRunsFindingsListRequest("tempore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.MEDIA;
                callback = "non";
                fields = "eligendi";
                filter = "sint";
                key = "aliquid";
                oauthToken = "provident";
                pageSize = 896039L;
                pageToken = "sint";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "dolor";
                uploadProtocol = "debitis";
            }};            

            WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse res = sdk.projects.websecurityscannerProjectsScanConfigsScanRunsFindingsList(req, new WebsecurityscannerProjectsScanConfigsScanRunsFindingsListSecurity("a", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listFindingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## websecurityscannerProjectsScanConfigsScanRunsList

Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsListRequest;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsListResponse;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebsecurityscannerProjectsScanConfigsScanRunsListRequest req = new WebsecurityscannerProjectsScanConfigsScanRunsListRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "rerum";
                fields = "dicta";
                key = "magnam";
                oauthToken = "cumque";
                pageSize = 813798L;
                pageToken = "ea";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "laborum";
                uploadProtocol = "accusamus";
            }};            

            WebsecurityscannerProjectsScanConfigsScanRunsListResponse res = sdk.projects.websecurityscannerProjectsScanConfigsScanRunsList(req, new WebsecurityscannerProjectsScanConfigsScanRunsListSecurity("non", "occaecati") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listScanRunsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## websecurityscannerProjectsScanConfigsScanRunsStop

Stops a ScanRun. The stopped ScanRun is returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsStopRequest;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsStopResponse;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsScanRunsStopSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebsecurityscannerProjectsScanConfigsScanRunsStopRequest req = new WebsecurityscannerProjectsScanConfigsScanRunsStopRequest("enim") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quidem", "provident");
                    put("nam", "id");
                    put("blanditiis", "deleniti");
                    put("sapiente", "amet");
                }};
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

            WebsecurityscannerProjectsScanConfigsScanRunsStopResponse res = sdk.projects.websecurityscannerProjectsScanConfigsScanRunsStop(req, new WebsecurityscannerProjectsScanConfigsScanRunsStopSecurity("distinctio", "id") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scanRun != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## websecurityscannerProjectsScanConfigsStart

Start a ScanRun according to the given ScanConfig.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsStartRequest;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsStartResponse;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsStartSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebsecurityscannerProjectsScanConfigsStartRequest req = new WebsecurityscannerProjectsScanConfigsStartRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("natus", "nobis");
                    put("eum", "vero");
                }};
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

            WebsecurityscannerProjectsScanConfigsStartResponse res = sdk.projects.websecurityscannerProjectsScanConfigsStart(req, new WebsecurityscannerProjectsScanConfigsStartSecurity("accusantium", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scanRun != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
