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
import org.openapis.openapi.models.shared.ScanConfigError;
import org.openapis.openapi.models.shared.ScanConfigErrorCodeEnum;
import org.openapis.openapi.models.shared.ScanConfigExportToSecurityCommandCenterEnum;
import org.openapis.openapi.models.shared.ScanConfigRiskLevelEnum;
import org.openapis.openapi.models.shared.ScanConfigTargetPlatformsEnum;
import org.openapis.openapi.models.shared.ScanConfigUserAgentEnum;
import org.openapis.openapi.models.shared.ScanRun;
import org.openapis.openapi.models.shared.ScanRunErrorTrace;
import org.openapis.openapi.models.shared.ScanRunErrorTraceCodeEnum;
import org.openapis.openapi.models.shared.ScanRunExecutionStateEnum;
import org.openapis.openapi.models.shared.ScanRunResultStateEnum;
import org.openapis.openapi.models.shared.ScanRunWarningTrace;
import org.openapis.openapi.models.shared.ScanRunWarningTraceCodeEnum;
import org.openapis.openapi.models.shared.Schedule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebsecurityscannerProjectsScanConfigsCreateRequest req = new WebsecurityscannerProjectsScanConfigsCreateRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                scanConfig = new ScanConfig() {{
                    authentication = new Authentication() {{
                        customAccount = new CustomAccount() {{
                            loginUrl = "hic";
                            password = "saepe";
                            username = "Marisa_Kirlin";
                        }};;
                        googleAccount = new GoogleAccount() {{
                            password = "iure";
                            username = "Sterling6";
                        }};;
                        iapCredential = new IapCredential() {{
                            iapTestServiceAccountInfo = new IapTestServiceAccountInfo() {{
                                targetAudienceClientId = "reiciendis";
                            }};;
                        }};;
                    }};;
                    blacklistPatterns = new String[]{{
                        add("mollitia"),
                        add("laborum"),
                        add("dolores"),
                    }};
                    displayName = "dolorem";
                    exportToSecurityCommandCenter = ScanConfigExportToSecurityCommandCenterEnum.ENABLED;
                    ignoreHttpStatusErrors = false;
                    latestRun = new ScanRun() {{
                        endTime = "explicabo";
                        errorTrace = new ScanRunErrorTrace() {{
                            code = ScanRunErrorTraceCodeEnum.TOO_MANY_HTTP_ERRORS;
                            mostCommonHttpErrorCode = 315428;
                            scanConfigError = new ScanConfigError() {{
                                code = ScanConfigErrorCodeEnum.REQUIRED_FIELD;
                                fieldName = "nemo";
                            }};;
                        }};;
                        executionState = ScanRunExecutionStateEnum.QUEUED;
                        hasVulnerabilities = false;
                        name = "Brian Kessler";
                        progressPercent = 958950;
                        resultState = ScanRunResultStateEnum.RESULT_STATE_UNSPECIFIED;
                        startTime = "mollitia";
                        urlsCrawledCount = "dolorem";
                        urlsTestedCount = "culpa";
                        warningTraces = new org.openapis.openapi.models.shared.ScanRunWarningTrace[]{{
                            add(new ScanRunWarningTrace() {{
                                code = ScanRunWarningTraceCodeEnum.NO_STARTING_URL_FOUND_FOR_MANAGED_SCAN;
                            }}),
                        }};
                    }};;
                    managedScan = false;
                    maxQps = 653108;
                    name = "Francis Jerde";
                    riskLevel = ScanConfigRiskLevelEnum.RISK_LEVEL_UNSPECIFIED;
                    schedule = new Schedule() {{
                        intervalDurationDays = 623510;
                        scheduleTime = "quia";
                    }};;
                    startingUrls = new String[]{{
                        add("vitae"),
                        add("laborum"),
                    }};
                    staticIpScan = false;
                    targetPlatforms = new org.openapis.openapi.models.shared.ScanConfigTargetPlatformsEnum[]{{
                        add(ScanConfigTargetPlatformsEnum.APP_ENGINE),
                        add(ScanConfigTargetPlatformsEnum.TARGET_PLATFORM_UNSPECIFIED),
                        add(ScanConfigTargetPlatformsEnum.CLOUD_RUN),
                    }};
                    userAgent = ScanConfigUserAgentEnum.USER_AGENT_UNSPECIFIED;
                }};;
                accessToken = "tenetur";
                alt = AltEnum.MEDIA;
                callback = "id";
                fields = "possimus";
                key = "aut";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "temporibus";
                uploadProtocol = "laborum";
            }};            

            WebsecurityscannerProjectsScanConfigsCreateResponse res = sdk.projects.websecurityscannerProjectsScanConfigsCreate(req, new WebsecurityscannerProjectsScanConfigsCreateSecurity("quasi", "reiciendis") {{
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

            WebsecurityscannerProjectsScanConfigsDeleteRequest req = new WebsecurityscannerProjectsScanConfigsDeleteRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nihil";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "ipsa";
                key = "omnis";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "perferendis";
                uploadProtocol = "doloremque";
            }};            

            WebsecurityscannerProjectsScanConfigsDeleteResponse res = sdk.projects.websecurityscannerProjectsScanConfigsDelete(req, new WebsecurityscannerProjectsScanConfigsDeleteSecurity("reprehenderit", "ut") {{
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

            WebsecurityscannerProjectsScanConfigsListRequest req = new WebsecurityscannerProjectsScanConfigsListRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "iusto";
                fields = "dicta";
                key = "harum";
                oauthToken = "enim";
                pageSize = 880476L;
                pageToken = "commodi";
                prettyPrint = false;
                quotaUser = "repudiandae";
                uploadType = "quae";
                uploadProtocol = "ipsum";
            }};            

            WebsecurityscannerProjectsScanConfigsListResponse res = sdk.projects.websecurityscannerProjectsScanConfigsList(req, new WebsecurityscannerProjectsScanConfigsListSecurity("quidem", "molestias") {{
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
import org.openapis.openapi.models.shared.ScanConfigError;
import org.openapis.openapi.models.shared.ScanConfigErrorCodeEnum;
import org.openapis.openapi.models.shared.ScanConfigExportToSecurityCommandCenterEnum;
import org.openapis.openapi.models.shared.ScanConfigRiskLevelEnum;
import org.openapis.openapi.models.shared.ScanConfigTargetPlatformsEnum;
import org.openapis.openapi.models.shared.ScanConfigUserAgentEnum;
import org.openapis.openapi.models.shared.ScanRun;
import org.openapis.openapi.models.shared.ScanRunErrorTrace;
import org.openapis.openapi.models.shared.ScanRunErrorTraceCodeEnum;
import org.openapis.openapi.models.shared.ScanRunExecutionStateEnum;
import org.openapis.openapi.models.shared.ScanRunResultStateEnum;
import org.openapis.openapi.models.shared.ScanRunWarningTrace;
import org.openapis.openapi.models.shared.ScanRunWarningTraceCodeEnum;
import org.openapis.openapi.models.shared.Schedule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebsecurityscannerProjectsScanConfigsPatchRequest req = new WebsecurityscannerProjectsScanConfigsPatchRequest("excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                scanConfig = new ScanConfig() {{
                    authentication = new Authentication() {{
                        customAccount = new CustomAccount() {{
                            loginUrl = "modi";
                            password = "praesentium";
                            username = "Judah92";
                        }};;
                        googleAccount = new GoogleAccount() {{
                            password = "sint";
                            username = "Arnoldo31";
                        }};;
                        iapCredential = new IapCredential() {{
                            iapTestServiceAccountInfo = new IapTestServiceAccountInfo() {{
                                targetAudienceClientId = "consequatur";
                            }};;
                        }};;
                    }};;
                    blacklistPatterns = new String[]{{
                        add("quibusdam"),
                        add("explicabo"),
                        add("deserunt"),
                    }};
                    displayName = "distinctio";
                    exportToSecurityCommandCenter = ScanConfigExportToSecurityCommandCenterEnum.DISABLED;
                    ignoreHttpStatusErrors = false;
                    latestRun = new ScanRun() {{
                        endTime = "labore";
                        errorTrace = new ScanRunErrorTrace() {{
                            code = ScanRunErrorTraceCodeEnum.SCAN_CONFIG_ISSUE;
                            mostCommonHttpErrorCode = 183191;
                            scanConfigError = new ScanConfigError() {{
                                code = ScanConfigErrorCodeEnum.DUPLICATE_SCAN_NAME;
                                fieldName = "cupiditate";
                            }};;
                        }};;
                        executionState = ScanRunExecutionStateEnum.SCANNING;
                        hasVulnerabilities = false;
                        name = "Louise Simonis Sr.";
                        progressPercent = 677817;
                        resultState = ScanRunResultStateEnum.ERROR;
                        startTime = "tempora";
                        urlsCrawledCount = "facilis";
                        urlsTestedCount = "tempore";
                        warningTraces = new org.openapis.openapi.models.shared.ScanRunWarningTrace[]{{
                            add(new ScanRunWarningTrace() {{
                                code = ScanRunWarningTraceCodeEnum.NO_STARTING_URL_FOUND_FOR_MANAGED_SCAN;
                            }}),
                            add(new ScanRunWarningTrace() {{
                                code = ScanRunWarningTraceCodeEnum.TOO_MANY_CRAWL_RESULTS;
                            }}),
                        }};
                    }};;
                    managedScan = false;
                    maxQps = 248753;
                    name = "Sergio Hyatt";
                    riskLevel = ScanConfigRiskLevelEnum.NORMAL;
                    schedule = new Schedule() {{
                        intervalDurationDays = 638921;
                        scheduleTime = "dolor";
                    }};;
                    startingUrls = new String[]{{
                        add("a"),
                        add("dolorum"),
                        add("in"),
                        add("in"),
                    }};
                    staticIpScan = false;
                    targetPlatforms = new org.openapis.openapi.models.shared.ScanConfigTargetPlatformsEnum[]{{
                        add(ScanConfigTargetPlatformsEnum.CLOUD_FUNCTIONS),
                        add(ScanConfigTargetPlatformsEnum.CLOUD_RUN),
                        add(ScanConfigTargetPlatformsEnum.TARGET_PLATFORM_UNSPECIFIED),
                        add(ScanConfigTargetPlatformsEnum.APP_ENGINE),
                    }};
                    userAgent = ScanConfigUserAgentEnum.SAFARI_IPHONE;
                }};;
                accessToken = "facere";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "laborum";
                key = "accusamus";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "occaecati";
                updateMask = "enim";
                uploadType = "accusamus";
                uploadProtocol = "delectus";
            }};            

            WebsecurityscannerProjectsScanConfigsPatchResponse res = sdk.projects.websecurityscannerProjectsScanConfigsPatch(req, new WebsecurityscannerProjectsScanConfigsPatchSecurity("quidem", "provident") {{
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

            WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListRequest req = new WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListRequest("nam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "blanditiis";
                alt = AltEnum.MEDIA;
                callback = "sapiente";
                fields = "amet";
                key = "deserunt";
                oauthToken = "nisi";
                pageSize = 423855L;
                pageToken = "natus";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "molestiae";
                uploadProtocol = "perferendis";
            }};            

            WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListResponse res = sdk.projects.websecurityscannerProjectsScanConfigsScanRunsCrawledUrlsList(req, new WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListSecurity("nihil", "magnam") {{
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

            WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListRequest req = new WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "labore";
                alt = AltEnum.JSON;
                callback = "suscipit";
                fields = "natus";
                key = "nobis";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "aspernatur";
                uploadProtocol = "architecto";
            }};            

            WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse res = sdk.projects.websecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsList(req, new WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListSecurity("magnam", "et") {{
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

            WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetRequest req = new WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "provident";
                alt = AltEnum.MEDIA;
                callback = "sint";
                fields = "accusantium";
                key = "mollitia";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "ad";
                uploadProtocol = "eum";
            }};            

            WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse res = sdk.projects.websecurityscannerProjectsScanConfigsScanRunsFindingsGet(req, new WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetSecurity("dolor", "necessitatibus") {{
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

            WebsecurityscannerProjectsScanConfigsScanRunsFindingsListRequest req = new WebsecurityscannerProjectsScanConfigsScanRunsFindingsListRequest("odit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "doloribus";
                fields = "debitis";
                filter = "eius";
                key = "maxime";
                oauthToken = "deleniti";
                pageSize = 703889L;
                pageToken = "in";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "architecto";
                uploadProtocol = "repudiandae";
            }};            

            WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse res = sdk.projects.websecurityscannerProjectsScanConfigsScanRunsFindingsList(req, new WebsecurityscannerProjectsScanConfigsScanRunsFindingsListSecurity("ullam", "expedita") {{
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

            WebsecurityscannerProjectsScanConfigsScanRunsListRequest req = new WebsecurityscannerProjectsScanConfigsScanRunsListRequest("nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "pariatur";
                key = "accusantium";
                oauthToken = "consequuntur";
                pageSize = 508315L;
                pageToken = "natus";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "sunt";
                uploadProtocol = "quo";
            }};            

            WebsecurityscannerProjectsScanConfigsScanRunsListResponse res = sdk.projects.websecurityscannerProjectsScanConfigsScanRunsList(req, new WebsecurityscannerProjectsScanConfigsScanRunsListSecurity("illum", "pariatur") {{
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

            WebsecurityscannerProjectsScanConfigsScanRunsStopRequest req = new WebsecurityscannerProjectsScanConfigsScanRunsStopRequest("maxime") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("odit", "ea");
                    put("accusantium", "ab");
                    put("maiores", "quidem");
                }};
                accessToken = "ipsam";
                alt = AltEnum.MEDIA;
                callback = "autem";
                fields = "nam";
                key = "eaque";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "voluptatibus";
                uploadProtocol = "perferendis";
            }};            

            WebsecurityscannerProjectsScanConfigsScanRunsStopResponse res = sdk.projects.websecurityscannerProjectsScanConfigsScanRunsStop(req, new WebsecurityscannerProjectsScanConfigsScanRunsStopSecurity("fugiat", "amet") {{
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

            WebsecurityscannerProjectsScanConfigsStartRequest req = new WebsecurityscannerProjectsScanConfigsStartRequest("aut") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("hic", "libero");
                    put("nobis", "dolores");
                }};
                accessToken = "quis";
                alt = AltEnum.MEDIA;
                callback = "dignissimos";
                fields = "eaque";
                key = "quis";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "perferendis";
                uploadProtocol = "dolores";
            }};            

            WebsecurityscannerProjectsScanConfigsStartResponse res = sdk.projects.websecurityscannerProjectsScanConfigsStart(req, new WebsecurityscannerProjectsScanConfigsStartSecurity("minus", "quam") {{
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
