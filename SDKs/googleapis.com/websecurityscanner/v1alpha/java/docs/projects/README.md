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
import org.openapis.openapi.models.shared.ScanConfig;
import org.openapis.openapi.models.shared.ScanConfigTargetPlatformsEnum;
import org.openapis.openapi.models.shared.ScanConfigUserAgentEnum;
import org.openapis.openapi.models.shared.ScanRun;
import org.openapis.openapi.models.shared.ScanRunExecutionStateEnum;
import org.openapis.openapi.models.shared.ScanRunResultStateEnum;
import org.openapis.openapi.models.shared.Schedule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebsecurityscannerProjectsScanConfigsCreateRequest req = new WebsecurityscannerProjectsScanConfigsCreateRequest("totam") {{
                dollarXgafv = XgafvEnum.ONE;
                scanConfig = new ScanConfig() {{
                    authentication = new Authentication() {{
                        customAccount = new CustomAccount() {{
                            loginUrl = "commodi";
                            password = "molestiae";
                            username = "Diego_Dibbert45";
                        }};;
                        googleAccount = new GoogleAccount() {{
                            password = "ipsum";
                            username = "Keshaun32";
                        }};;
                    }};;
                    blacklistPatterns = new String[]{{
                        add("sed"),
                        add("iste"),
                        add("dolor"),
                    }};
                    displayName = "natus";
                    latestRun = new ScanRun() {{
                        endTime = "laboriosam";
                        executionState = ScanRunExecutionStateEnum.FINISHED;
                        hasVulnerabilities = false;
                        name = "Wilbur Kirlin";
                        progressPercent = 437032;
                        resultState = ScanRunResultStateEnum.KILLED;
                        startTime = "quidem";
                        urlsCrawledCount = "architecto";
                        urlsTestedCount = "ipsa";
                    }};;
                    maxQps = 969810;
                    name = "Shaun Osinski";
                    schedule = new Schedule() {{
                        intervalDurationDays = 358152;
                        scheduleTime = "explicabo";
                    }};;
                    startingUrls = new String[]{{
                        add("enim"),
                        add("omnis"),
                        add("nemo"),
                        add("minima"),
                    }};
                    targetPlatforms = new org.openapis.openapi.models.shared.ScanConfigTargetPlatformsEnum[]{{
                        add(ScanConfigTargetPlatformsEnum.TARGET_PLATFORM_UNSPECIFIED),
                        add(ScanConfigTargetPlatformsEnum.COMPUTE),
                        add(ScanConfigTargetPlatformsEnum.CLOUD_RUN),
                    }};
                    userAgent = ScanConfigUserAgentEnum.SAFARI_IPHONE;
                }};;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "mollitia";
                fields = "dolorem";
                key = "culpa";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "repellat";
                uploadType = "mollitia";
                uploadProtocol = "occaecati";
            }};            

            WebsecurityscannerProjectsScanConfigsCreateResponse res = sdk.projects.websecurityscannerProjectsScanConfigsCreate(req, new WebsecurityscannerProjectsScanConfigsCreateSecurity("numquam", "commodi") {{
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

            WebsecurityscannerProjectsScanConfigsDeleteRequest req = new WebsecurityscannerProjectsScanConfigsDeleteRequest("quam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "velit";
                alt = AltEnum.MEDIA;
                callback = "quia";
                fields = "quis";
                key = "vitae";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "enim";
                uploadProtocol = "odit";
            }};            

            WebsecurityscannerProjectsScanConfigsDeleteResponse res = sdk.projects.websecurityscannerProjectsScanConfigsDelete(req, new WebsecurityscannerProjectsScanConfigsDeleteSecurity("quo", "sequi") {{
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

            WebsecurityscannerProjectsScanConfigsListRequest req = new WebsecurityscannerProjectsScanConfigsListRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "id";
                alt = AltEnum.PROTO;
                callback = "aut";
                fields = "quasi";
                key = "error";
                oauthToken = "temporibus";
                pageSize = 673660L;
                pageToken = "quasi";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "voluptatibus";
                uploadProtocol = "vero";
            }};            

            WebsecurityscannerProjectsScanConfigsListResponse res = sdk.projects.websecurityscannerProjectsScanConfigsList(req, new WebsecurityscannerProjectsScanConfigsListSecurity("nihil", "praesentium") {{
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
import org.openapis.openapi.models.shared.ScanConfig;
import org.openapis.openapi.models.shared.ScanConfigTargetPlatformsEnum;
import org.openapis.openapi.models.shared.ScanConfigUserAgentEnum;
import org.openapis.openapi.models.shared.ScanRun;
import org.openapis.openapi.models.shared.ScanRunExecutionStateEnum;
import org.openapis.openapi.models.shared.ScanRunResultStateEnum;
import org.openapis.openapi.models.shared.Schedule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebsecurityscannerProjectsScanConfigsPatchRequest req = new WebsecurityscannerProjectsScanConfigsPatchRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                scanConfig = new ScanConfig() {{
                    authentication = new Authentication() {{
                        customAccount = new CustomAccount() {{
                            loginUrl = "omnis";
                            password = "voluptate";
                            username = "Myrtis44";
                        }};;
                        googleAccount = new GoogleAccount() {{
                            password = "ut";
                            username = "Wilfrid.Carter";
                        }};;
                    }};;
                    blacklistPatterns = new String[]{{
                        add("dicta"),
                        add("harum"),
                    }};
                    displayName = "enim";
                    latestRun = new ScanRun() {{
                        endTime = "accusamus";
                        executionState = ScanRunExecutionStateEnum.QUEUED;
                        hasVulnerabilities = false;
                        name = "Eric Emmerich";
                        progressPercent = 566602;
                        resultState = ScanRunResultStateEnum.KILLED;
                        startTime = "modi";
                        urlsCrawledCount = "praesentium";
                        urlsTestedCount = "rem";
                    }};;
                    maxQps = 916723;
                    name = "Dr. Casey Mayer";
                    schedule = new Schedule() {{
                        intervalDurationDays = 318569;
                        scheduleTime = "consequatur";
                    }};;
                    startingUrls = new String[]{{
                        add("quibusdam"),
                        add("explicabo"),
                        add("deserunt"),
                    }};
                    targetPlatforms = new org.openapis.openapi.models.shared.ScanConfigTargetPlatformsEnum[]{{
                        add(ScanConfigTargetPlatformsEnum.CLOUD_FUNCTIONS),
                        add(ScanConfigTargetPlatformsEnum.APP_ENGINE),
                        add(ScanConfigTargetPlatformsEnum.APP_ENGINE),
                    }};
                    userAgent = ScanConfigUserAgentEnum.USER_AGENT_UNSPECIFIED;
                }};;
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                callback = "quos";
                fields = "perferendis";
                key = "magni";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "ipsam";
                updateMask = "alias";
                uploadType = "fugit";
                uploadProtocol = "dolorum";
            }};            

            WebsecurityscannerProjectsScanConfigsPatchResponse res = sdk.projects.websecurityscannerProjectsScanConfigsPatch(req, new WebsecurityscannerProjectsScanConfigsPatchSecurity("excepturi", "tempora") {{
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

            WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListRequest req = new WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListRequest("facilis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "labore";
                alt = AltEnum.PROTO;
                callback = "eum";
                fields = "non";
                key = "eligendi";
                oauthToken = "sint";
                pageSize = 396098L;
                pageToken = "provident";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "sint";
                uploadProtocol = "officia";
            }};            

            WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListResponse res = sdk.projects.websecurityscannerProjectsScanConfigsScanRunsCrawledUrlsList(req, new WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListSecurity("dolor", "debitis") {{
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

            WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListRequest req = new WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListRequest("a") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "illum";
                fields = "maiores";
                key = "rerum";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "cumque";
                uploadProtocol = "facere";
            }};            

            WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse res = sdk.projects.websecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsList(req, new WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListSecurity("ea", "aliquid") {{
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

            WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetRequest req = new WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetRequest("laborum") {{
                dollarXgafv = XgafvEnum.TWO;
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

            WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse res = sdk.projects.websecurityscannerProjectsScanConfigsScanRunsFindingsGet(req, new WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetSecurity("blanditiis", "deleniti") {{
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

            WebsecurityscannerProjectsScanConfigsScanRunsFindingsListRequest req = new WebsecurityscannerProjectsScanConfigsScanRunsFindingsListRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "vel";
                fields = "natus";
                filter = "omnis";
                key = "molestiae";
                oauthToken = "perferendis";
                pageSize = 470132L;
                pageToken = "magnam";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "id";
                uploadProtocol = "labore";
            }};            

            WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse res = sdk.projects.websecurityscannerProjectsScanConfigsScanRunsFindingsList(req, new WebsecurityscannerProjectsScanConfigsScanRunsFindingsListSecurity("labore", "suscipit") {{
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

            WebsecurityscannerProjectsScanConfigsScanRunsListRequest req = new WebsecurityscannerProjectsScanConfigsScanRunsListRequest("natus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eum";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "architecto";
                key = "magnam";
                oauthToken = "et";
                pageSize = 569965L;
                pageToken = "ullam";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "quos";
                uploadProtocol = "sint";
            }};            

            WebsecurityscannerProjectsScanConfigsScanRunsListResponse res = sdk.projects.websecurityscannerProjectsScanConfigsScanRunsList(req, new WebsecurityscannerProjectsScanConfigsScanRunsListSecurity("accusantium", "mollitia") {{
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

            WebsecurityscannerProjectsScanConfigsScanRunsStopRequest req = new WebsecurityscannerProjectsScanConfigsScanRunsStopRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("eum", "dolor");
                    put("necessitatibus", "odit");
                }};
                accessToken = "nemo";
                alt = AltEnum.JSON;
                callback = "iure";
                fields = "doloribus";
                key = "debitis";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "maxime";
                uploadType = "deleniti";
                uploadProtocol = "facilis";
            }};            

            WebsecurityscannerProjectsScanConfigsScanRunsStopResponse res = sdk.projects.websecurityscannerProjectsScanConfigsScanRunsStop(req, new WebsecurityscannerProjectsScanConfigsScanRunsStopSecurity("in", "architecto") {{
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

            WebsecurityscannerProjectsScanConfigsStartRequest req = new WebsecurityscannerProjectsScanConfigsStartRequest("architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("expedita", "nihil");
                    put("repellat", "quibusdam");
                }};
                accessToken = "sed";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                fields = "accusantium";
                key = "consequuntur";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "magni";
                uploadProtocol = "sunt";
            }};            

            WebsecurityscannerProjectsScanConfigsStartResponse res = sdk.projects.websecurityscannerProjectsScanConfigsStart(req, new WebsecurityscannerProjectsScanConfigsStartSecurity("quo", "illum") {{
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
