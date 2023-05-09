# projects

### Available Operations

* [bigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds](#bigquerydatatransferprojectslocationsdatasourcescheckvalidcreds) - Returns true if valid credentials exist for the given data source and requesting user.
* [bigquerydatatransferProjectsLocationsDataSourcesList](#bigquerydatatransferprojectslocationsdatasourceslist) - Lists supported data sources and returns their settings.
* [bigquerydatatransferProjectsLocationsEnrollDataSources](#bigquerydatatransferprojectslocationsenrolldatasources) - Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).
* [bigquerydatatransferProjectsLocationsList](#bigquerydatatransferprojectslocationslist) - Lists information about the supported locations for this service.
* [bigquerydatatransferProjectsTransferConfigsCreate](#bigquerydatatransferprojectstransferconfigscreate) - Creates a new data transfer configuration.
* [bigquerydatatransferProjectsTransferConfigsList](#bigquerydatatransferprojectstransferconfigslist) - Returns information about all transfer configs owned by a project in the specified location.
* [bigquerydatatransferProjectsTransferConfigsPatch](#bigquerydatatransferprojectstransferconfigspatch) - Updates a data transfer configuration. All fields must be set, even if they are not updated.
* [bigquerydatatransferProjectsTransferConfigsRunsDelete](#bigquerydatatransferprojectstransferconfigsrunsdelete) - Deletes the specified transfer run.
* [bigquerydatatransferProjectsTransferConfigsRunsGet](#bigquerydatatransferprojectstransferconfigsrunsget) - Returns information about the particular transfer run.
* [bigquerydatatransferProjectsTransferConfigsRunsList](#bigquerydatatransferprojectstransferconfigsrunslist) - Returns information about running and completed transfer runs.
* [bigquerydatatransferProjectsTransferConfigsRunsTransferLogsList](#bigquerydatatransferprojectstransferconfigsrunstransferlogslist) - Returns log messages for the transfer run.
* [bigquerydatatransferProjectsTransferConfigsScheduleRuns](#bigquerydatatransferprojectstransferconfigsscheduleruns) - Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.
* [bigquerydatatransferProjectsTransferConfigsStartManualRuns](#bigquerydatatransferprojectstransferconfigsstartmanualruns) - Start manual transfer runs to be executed now with schedule_time equal to current time. The transfer runs can be created for a time range where the run_time is between start_time (inclusive) and end_time (exclusive), or for a specific run_time.

## bigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds

Returns true if valid credentials exist for the given data source and requesting user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption2;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest req = new BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest("minus") {{
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

            BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse res = sdk.projects.bigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds(req, new BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurity() {{
                option1 = new BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsSecurityOption1("at", "at") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.checkValidCredsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigquerydatatransferProjectsLocationsDataSourcesList

Lists supported data sources and returns their settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesListRequest;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesListResponse;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesListSecurity;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption1;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption2;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigquerydatatransferProjectsLocationsDataSourcesListRequest req = new BigquerydatatransferProjectsLocationsDataSourcesListRequest("maiores") {{
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

            BigquerydatatransferProjectsLocationsDataSourcesListResponse res = sdk.projects.bigquerydatatransferProjectsLocationsDataSourcesList(req, new BigquerydatatransferProjectsLocationsDataSourcesListSecurity() {{
                option1 = new BigquerydatatransferProjectsLocationsDataSourcesListSecurityOption1("deleniti", "hic") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listDataSourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigquerydatatransferProjectsLocationsEnrollDataSources

Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsEnrollDataSourcesRequest;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsEnrollDataSourcesResponse;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsEnrollDataSourcesSecurity;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsEnrollDataSourcesSecurityOption1;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsEnrollDataSourcesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EnrollDataSourcesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigquerydatatransferProjectsLocationsEnrollDataSourcesRequest req = new BigquerydatatransferProjectsLocationsEnrollDataSourcesRequest("optio") {{
                dollarXgafv = XgafvEnum.TWO;
                enrollDataSourcesRequest = new EnrollDataSourcesRequest() {{
                    dataSourceIds = new String[]{{
                        add("commodi"),
                    }};
                }};;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "impedit";
                key = "cum";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "excepturi";
                uploadProtocol = "aspernatur";
            }};            

            BigquerydatatransferProjectsLocationsEnrollDataSourcesResponse res = sdk.projects.bigquerydatatransferProjectsLocationsEnrollDataSources(req, new BigquerydatatransferProjectsLocationsEnrollDataSourcesSecurity() {{
                option1 = new BigquerydatatransferProjectsLocationsEnrollDataSourcesSecurityOption1("perferendis", "ad") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## bigquerydatatransferProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsListSecurity;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsListSecurityOption1;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsListSecurityOption2;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsLocationsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigquerydatatransferProjectsLocationsListRequest req = new BigquerydatatransferProjectsLocationsListRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iste";
                alt = AltEnum.JSON;
                callback = "natus";
                fields = "laboriosam";
                filter = "hic";
                key = "saepe";
                oauthToken = "fuga";
                pageSize = 449950L;
                pageToken = "corporis";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "iure";
                uploadProtocol = "saepe";
            }};            

            BigquerydatatransferProjectsLocationsListResponse res = sdk.projects.bigquerydatatransferProjectsLocationsList(req, new BigquerydatatransferProjectsLocationsListSecurity() {{
                option1 = new BigquerydatatransferProjectsLocationsListSecurityOption1("quidem", "architecto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigquerydatatransferProjectsTransferConfigsCreate

Creates a new data transfer configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsCreateRequest;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsCreateResponse;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EmailPreferences;
import org.openapis.openapi.models.shared.ScheduleOptions;
import org.openapis.openapi.models.shared.TransferConfigInput;
import org.openapis.openapi.models.shared.UserInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigquerydatatransferProjectsTransferConfigsCreateRequest req = new BigquerydatatransferProjectsTransferConfigsCreateRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                transferConfigInput = new TransferConfigInput() {{
                    dataRefreshWindowDays = 666767;
                    dataSourceId = "mollitia";
                    destinationDatasetId = "laborum";
                    disabled = false;
                    displayName = "dolores";
                    emailPreferences = new EmailPreferences() {{
                        enableFailureEmail = false;
                    }};;
                    name = "Stacy Champlin";
                    notificationPubsubTopic = "omnis";
                    ownerInfo = new UserInfo() {{
                        email = "Era43@yahoo.com";
                    }};;
                    params = new java.util.HashMap<String, Object>() {{
                        put("doloribus", "sapiente");
                        put("architecto", "mollitia");
                        put("dolorem", "culpa");
                    }};
                    schedule = "consequuntur";
                    scheduleOptions = new ScheduleOptions() {{
                        disableAutoScheduling = false;
                        endTime = "repellat";
                        startTime = "mollitia";
                    }};;
                    userId = "occaecati";
                }};;
                accessToken = "numquam";
                alt = AltEnum.MEDIA;
                authorizationCode = "quam";
                callback = "molestiae";
                fields = "velit";
                key = "error";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "quis";
                serviceAccountName = "vitae";
                uploadType = "laborum";
                uploadProtocol = "animi";
                versionInfo = "enim";
            }};            

            BigquerydatatransferProjectsTransferConfigsCreateResponse res = sdk.projects.bigquerydatatransferProjectsTransferConfigsCreate(req, new BigquerydatatransferProjectsTransferConfigsCreateSecurity("odit", "quo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.transferConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigquerydatatransferProjectsTransferConfigsList

Returns information about all transfer configs owned by a project in the specified location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsListRequest;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsListResponse;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsListSecurity;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsListSecurityOption1;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsListSecurityOption2;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigquerydatatransferProjectsTransferConfigsListRequest req = new BigquerydatatransferProjectsTransferConfigsListRequest("sequi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsam";
                alt = AltEnum.MEDIA;
                callback = "possimus";
                dataSourceIds = new String[]{{
                    add("quasi"),
                }};
                fields = "error";
                key = "temporibus";
                oauthToken = "laborum";
                pageSize = 96098L;
                pageToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "vero";
                uploadProtocol = "nihil";
            }};            

            BigquerydatatransferProjectsTransferConfigsListResponse res = sdk.projects.bigquerydatatransferProjectsTransferConfigsList(req, new BigquerydatatransferProjectsTransferConfigsListSecurity() {{
                option1 = new BigquerydatatransferProjectsTransferConfigsListSecurityOption1("praesentium", "voluptatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listTransferConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigquerydatatransferProjectsTransferConfigsPatch

Updates a data transfer configuration. All fields must be set, even if they are not updated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsPatchRequest;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsPatchResponse;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EmailPreferences;
import org.openapis.openapi.models.shared.ScheduleOptions;
import org.openapis.openapi.models.shared.TransferConfigInput;
import org.openapis.openapi.models.shared.UserInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigquerydatatransferProjectsTransferConfigsPatchRequest req = new BigquerydatatransferProjectsTransferConfigsPatchRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                transferConfigInput = new TransferConfigInput() {{
                    dataRefreshWindowDays = 451159;
                    dataSourceId = "cum";
                    destinationDatasetId = "perferendis";
                    disabled = false;
                    displayName = "doloremque";
                    emailPreferences = new EmailPreferences() {{
                        enableFailureEmail = false;
                    }};;
                    name = "Mrs. April Wuckert";
                    notificationPubsubTopic = "iusto";
                    ownerInfo = new UserInfo() {{
                        email = "Martine.Hamill91@gmail.com";
                    }};;
                    params = new java.util.HashMap<String, Object>() {{
                        put("ipsum", "quidem");
                    }};
                    schedule = "molestias";
                    scheduleOptions = new ScheduleOptions() {{
                        disableAutoScheduling = false;
                        endTime = "excepturi";
                        startTime = "pariatur";
                    }};;
                    userId = "modi";
                }};;
                accessToken = "praesentium";
                alt = AltEnum.MEDIA;
                authorizationCode = "voluptates";
                callback = "quasi";
                fields = "repudiandae";
                key = "sint";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "itaque";
                serviceAccountName = "incidunt";
                updateMask = "enim";
                uploadType = "consequatur";
                uploadProtocol = "est";
                versionInfo = "quibusdam";
            }};            

            BigquerydatatransferProjectsTransferConfigsPatchResponse res = sdk.projects.bigquerydatatransferProjectsTransferConfigsPatch(req, new BigquerydatatransferProjectsTransferConfigsPatchSecurity("explicabo", "deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.transferConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigquerydatatransferProjectsTransferConfigsRunsDelete

Deletes the specified transfer run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsDeleteRequest;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsDeleteResponse;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurity;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigquerydatatransferProjectsTransferConfigsRunsDeleteRequest req = new BigquerydatatransferProjectsTransferConfigsRunsDeleteRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "labore";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "aliquid";
                key = "cupiditate";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "magni";
                uploadProtocol = "assumenda";
            }};            

            BigquerydatatransferProjectsTransferConfigsRunsDeleteResponse res = sdk.projects.bigquerydatatransferProjectsTransferConfigsRunsDelete(req, new BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurity() {{
                option1 = new BigquerydatatransferProjectsTransferConfigsRunsDeleteSecurityOption1("ipsam", "alias") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## bigquerydatatransferProjectsTransferConfigsRunsGet

Returns information about the particular transfer run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsGetRequest;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsGetResponse;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsGetSecurity;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption1;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption2;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigquerydatatransferProjectsTransferConfigsRunsGetRequest req = new BigquerydatatransferProjectsTransferConfigsRunsGetRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "facilis";
                fields = "tempore";
                key = "labore";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "non";
                uploadProtocol = "eligendi";
            }};            

            BigquerydatatransferProjectsTransferConfigsRunsGetResponse res = sdk.projects.bigquerydatatransferProjectsTransferConfigsRunsGet(req, new BigquerydatatransferProjectsTransferConfigsRunsGetSecurity() {{
                option1 = new BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption1("sint", "aliquid") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.transferRun != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigquerydatatransferProjectsTransferConfigsRunsList

Returns information about running and completed transfer runs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsListRequest;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsListResponse;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnum;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsListSecurity;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption2;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption3;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigquerydatatransferProjectsTransferConfigsRunsListRequest req = new BigquerydatatransferProjectsTransferConfigsRunsListRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "debitis";
                key = "a";
                oauthToken = "dolorum";
                pageSize = 447125L;
                pageToken = "in";
                prettyPrint = false;
                quotaUser = "illum";
                runAttempt = BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnum.LATEST;
                states = new org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum[]{{
                    add(BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum.TRANSFER_STATE_UNSPECIFIED),
                    add(BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum.PENDING),
                    add(BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum.FAILED),
                }};
                uploadType = "facere";
                uploadProtocol = "ea";
            }};            

            BigquerydatatransferProjectsTransferConfigsRunsListResponse res = sdk.projects.bigquerydatatransferProjectsTransferConfigsRunsList(req, new BigquerydatatransferProjectsTransferConfigsRunsListSecurity() {{
                option1 = new BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1("aliquid", "laborum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listTransferRunsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigquerydatatransferProjectsTransferConfigsRunsTransferLogsList

Returns log messages for the transfer run.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListRequest;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListResponse;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption2;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListRequest req = new BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListRequest("accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "accusamus";
                fields = "delectus";
                key = "quidem";
                messageTypes = new org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum[]{{
                    add(BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum.WARNING),
                    add(BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum.WARNING),
                    add(BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum.WARNING),
                }};
                oauthToken = "deleniti";
                pageSize = 956084L;
                pageToken = "amet";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "nisi";
                uploadProtocol = "vel";
            }};            

            BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListResponse res = sdk.projects.bigquerydatatransferProjectsTransferConfigsRunsTransferLogsList(req, new BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity() {{
                option1 = new BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1("natus", "omnis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listTransferLogsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigquerydatatransferProjectsTransferConfigsScheduleRuns

Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsScheduleRunsRequest;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsScheduleRunsResponse;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurity;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption1;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ScheduleTransferRunsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigquerydatatransferProjectsTransferConfigsScheduleRunsRequest req = new BigquerydatatransferProjectsTransferConfigsScheduleRunsRequest("molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                scheduleTransferRunsRequest = new ScheduleTransferRunsRequest() {{
                    endTime = "nihil";
                    startTime = "magnam";
                }};;
                accessToken = "distinctio";
                alt = AltEnum.MEDIA;
                callback = "labore";
                fields = "labore";
                key = "suscipit";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "eum";
                uploadProtocol = "vero";
            }};            

            BigquerydatatransferProjectsTransferConfigsScheduleRunsResponse res = sdk.projects.bigquerydatatransferProjectsTransferConfigsScheduleRuns(req, new BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurity() {{
                option1 = new BigquerydatatransferProjectsTransferConfigsScheduleRunsSecurityOption1("aspernatur", "architecto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.scheduleTransferRunsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigquerydatatransferProjectsTransferConfigsStartManualRuns

Start manual transfer runs to be executed now with schedule_time equal to current time. The transfer runs can be created for a time range where the run_time is between start_time (inclusive) and end_time (exclusive), or for a specific run_time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsStartManualRunsRequest;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsStartManualRunsResponse;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurity;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurityOption1;
import org.openapis.openapi.models.operations.BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.StartManualTransferRunsRequest;
import org.openapis.openapi.models.shared.TimeRange;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigquerydatatransferProjectsTransferConfigsStartManualRunsRequest req = new BigquerydatatransferProjectsTransferConfigsStartManualRunsRequest("magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                startManualTransferRunsRequest = new StartManualTransferRunsRequest() {{
                    requestedRunTime = "excepturi";
                    requestedTimeRange = new TimeRange() {{
                        endTime = "ullam";
                        startTime = "provident";
                    }};;
                }};;
                accessToken = "quos";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "mollitia";
                key = "reiciendis";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "eum";
                uploadProtocol = "dolor";
            }};            

            BigquerydatatransferProjectsTransferConfigsStartManualRunsResponse res = sdk.projects.bigquerydatatransferProjectsTransferConfigsStartManualRuns(req, new BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurity() {{
                option1 = new BigquerydatatransferProjectsTransferConfigsStartManualRunsSecurityOption1("necessitatibus", "odit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.startManualTransferRunsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
