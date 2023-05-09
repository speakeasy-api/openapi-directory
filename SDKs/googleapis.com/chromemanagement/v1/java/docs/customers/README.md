# customers

### Available Operations

* [chromemanagementCustomersAppsCountChromeAppRequests](#chromemanagementcustomersappscountchromeapprequests) - Generate summary of app installation requests.
* [chromemanagementCustomersReportsCountChromeBrowsersNeedingAttention](#chromemanagementcustomersreportscountchromebrowsersneedingattention) - Count of Chrome Browsers that have been recently enrolled, have new policy to be synced, or have no recent activity.
* [chromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDate](#chromemanagementcustomersreportscountchromedevicesreachingautoexpirationdate) - Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).
* [chromemanagementCustomersReportsCountChromeDevicesThatNeedAttention](#chromemanagementcustomersreportscountchromedevicesthatneedattention) - Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947
* [chromemanagementCustomersReportsCountChromeHardwareFleetDevices](#chromemanagementcustomersreportscountchromehardwarefleetdevices) - Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947
* [chromemanagementCustomersReportsCountChromeVersions](#chromemanagementcustomersreportscountchromeversions) - Generate report of installed Chrome versions.
* [chromemanagementCustomersReportsCountInstalledApps](#chromemanagementcustomersreportscountinstalledapps) - Generate report of app installations.
* [chromemanagementCustomersReportsFindInstalledAppDevices](#chromemanagementcustomersreportsfindinstalledappdevices) - Generate report of managed Chrome browser devices that have a specified app installed.
* [chromemanagementCustomersTelemetryDevicesList](#chromemanagementcustomerstelemetrydeviceslist) - List all telemetry devices.
* [chromemanagementCustomersTelemetryEventsList](#chromemanagementcustomerstelemetryeventslist) - List telemetry events.
* [chromemanagementCustomersTelemetryUsersGet](#chromemanagementcustomerstelemetryusersget) - Get telemetry user.
* [chromemanagementCustomersTelemetryUsersList](#chromemanagementcustomerstelemetryuserslist) - List all telemetry users.

## chromemanagementCustomersAppsCountChromeAppRequests

Generate summary of app installation requests.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromemanagementCustomersAppsCountChromeAppRequestsRequest;
import org.openapis.openapi.models.operations.ChromemanagementCustomersAppsCountChromeAppRequestsResponse;
import org.openapis.openapi.models.operations.ChromemanagementCustomersAppsCountChromeAppRequestsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromemanagementCustomersAppsCountChromeAppRequestsRequest req = new ChromemanagementCustomersAppsCountChromeAppRequestsRequest("tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "placeat";
                fields = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                orderBy = "nisi";
                orgUnitId = "recusandae";
                pageSize = 836079L;
                pageToken = "ab";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "veritatis";
                uploadProtocol = "deserunt";
            }};            

            ChromemanagementCustomersAppsCountChromeAppRequestsResponse res = sdk.customers.chromemanagementCustomersAppsCountChromeAppRequests(req, new ChromemanagementCustomersAppsCountChromeAppRequestsSecurity("perferendis", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleChromeManagementV1CountChromeAppRequestsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## chromemanagementCustomersReportsCountChromeBrowsersNeedingAttention

Count of Chrome Browsers that have been recently enrolled, have new policy to be synced, or have no recent activity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromemanagementCustomersReportsCountChromeBrowsersNeedingAttentionRequest;
import org.openapis.openapi.models.operations.ChromemanagementCustomersReportsCountChromeBrowsersNeedingAttentionResponse;
import org.openapis.openapi.models.operations.ChromemanagementCustomersReportsCountChromeBrowsersNeedingAttentionSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromemanagementCustomersReportsCountChromeBrowsersNeedingAttentionRequest req = new ChromemanagementCustomersReportsCountChromeBrowsersNeedingAttentionRequest("repellendus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "at";
                fields = "at";
                key = "maiores";
                oauthToken = "molestiae";
                orgUnitId = "quod";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "esse";
                uploadProtocol = "totam";
            }};            

            ChromemanagementCustomersReportsCountChromeBrowsersNeedingAttentionResponse res = sdk.customers.chromemanagementCustomersReportsCountChromeBrowsersNeedingAttention(req, new ChromemanagementCustomersReportsCountChromeBrowsersNeedingAttentionSecurity("porro", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## chromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDate

Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest;
import org.openapis.openapi.models.operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse;
import org.openapis.openapi.models.operations.ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest req = new ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest("dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officia";
                alt = AltEnum.MEDIA;
                callback = "fugit";
                fields = "deleniti";
                key = "hic";
                maxAueDate = "optio";
                minAueDate = "totam";
                oauthToken = "beatae";
                orgUnitId = "commodi";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "modi";
                uploadProtocol = "qui";
            }};            

            ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse res = sdk.customers.chromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDate(req, new ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateSecurity("impedit", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## chromemanagementCustomersReportsCountChromeDevicesThatNeedAttention

Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionRequest;
import org.openapis.openapi.models.operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionResponse;
import org.openapis.openapi.models.operations.ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionRequest req = new ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionRequest("esse") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "ad";
                key = "natus";
                oauthToken = "sed";
                orgUnitId = "iste";
                prettyPrint = false;
                quotaUser = "dolor";
                readMask = "natus";
                uploadType = "laboriosam";
                uploadProtocol = "hic";
            }};            

            ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionResponse res = sdk.customers.chromemanagementCustomersReportsCountChromeDevicesThatNeedAttention(req, new ChromemanagementCustomersReportsCountChromeDevicesThatNeedAttentionSecurity("saepe", "fuga") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## chromemanagementCustomersReportsCountChromeHardwareFleetDevices

Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest;
import org.openapis.openapi.models.operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse;
import org.openapis.openapi.models.operations.ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest req = new ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iste";
                alt = AltEnum.MEDIA;
                callback = "saepe";
                fields = "quidem";
                key = "architecto";
                oauthToken = "ipsa";
                orgUnitId = "reiciendis";
                prettyPrint = false;
                quotaUser = "est";
                readMask = "mollitia";
                uploadType = "laborum";
                uploadProtocol = "dolores";
            }};            

            ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse res = sdk.customers.chromemanagementCustomersReportsCountChromeHardwareFleetDevices(req, new ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesSecurity("dolorem", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleChromeManagementV1CountChromeHardwareFleetDevicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## chromemanagementCustomersReportsCountChromeVersions

Generate report of installed Chrome versions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromemanagementCustomersReportsCountChromeVersionsRequest;
import org.openapis.openapi.models.operations.ChromemanagementCustomersReportsCountChromeVersionsResponse;
import org.openapis.openapi.models.operations.ChromemanagementCustomersReportsCountChromeVersionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromemanagementCustomersReportsCountChromeVersionsRequest req = new ChromemanagementCustomersReportsCountChromeVersionsRequest("explicabo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "enim";
                alt = AltEnum.MEDIA;
                callback = "nemo";
                fields = "minima";
                filter = "excepturi";
                key = "accusantium";
                oauthToken = "iure";
                orgUnitId = "culpa";
                pageSize = 988374L;
                pageToken = "sapiente";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "mollitia";
                uploadProtocol = "dolorem";
            }};            

            ChromemanagementCustomersReportsCountChromeVersionsResponse res = sdk.customers.chromemanagementCustomersReportsCountChromeVersions(req, new ChromemanagementCustomersReportsCountChromeVersionsSecurity("culpa", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleChromeManagementV1CountChromeVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## chromemanagementCustomersReportsCountInstalledApps

Generate report of app installations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromemanagementCustomersReportsCountInstalledAppsRequest;
import org.openapis.openapi.models.operations.ChromemanagementCustomersReportsCountInstalledAppsResponse;
import org.openapis.openapi.models.operations.ChromemanagementCustomersReportsCountInstalledAppsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromemanagementCustomersReportsCountInstalledAppsRequest req = new ChromemanagementCustomersReportsCountInstalledAppsRequest("repellat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "quam";
                filter = "molestiae";
                key = "velit";
                oauthToken = "error";
                orderBy = "quia";
                orgUnitId = "quis";
                pageSize = 110375L;
                pageToken = "laborum";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "enim";
                uploadProtocol = "odit";
            }};            

            ChromemanagementCustomersReportsCountInstalledAppsResponse res = sdk.customers.chromemanagementCustomersReportsCountInstalledApps(req, new ChromemanagementCustomersReportsCountInstalledAppsSecurity("quo", "sequi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleChromeManagementV1CountInstalledAppsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## chromemanagementCustomersReportsFindInstalledAppDevices

Generate report of managed Chrome browser devices that have a specified app installed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum;
import org.openapis.openapi.models.operations.ChromemanagementCustomersReportsFindInstalledAppDevicesRequest;
import org.openapis.openapi.models.operations.ChromemanagementCustomersReportsFindInstalledAppDevicesResponse;
import org.openapis.openapi.models.operations.ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromemanagementCustomersReportsFindInstalledAppDevicesRequest req = new ChromemanagementCustomersReportsFindInstalledAppDevicesRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "id";
                alt = AltEnum.PROTO;
                appId = "aut";
                appType = ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum.APP_TYPE_UNSPECIFIED;
                callback = "error";
                fields = "temporibus";
                filter = "laborum";
                key = "quasi";
                oauthToken = "reiciendis";
                orderBy = "voluptatibus";
                orgUnitId = "vero";
                pageSize = 468651L;
                pageToken = "praesentium";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "ipsa";
                uploadProtocol = "omnis";
            }};            

            ChromemanagementCustomersReportsFindInstalledAppDevicesResponse res = sdk.customers.chromemanagementCustomersReportsFindInstalledAppDevices(req, new ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity("voluptate", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleChromeManagementV1FindInstalledAppDevicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## chromemanagementCustomersTelemetryDevicesList

List all telemetry devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromemanagementCustomersTelemetryDevicesListRequest;
import org.openapis.openapi.models.operations.ChromemanagementCustomersTelemetryDevicesListResponse;
import org.openapis.openapi.models.operations.ChromemanagementCustomersTelemetryDevicesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromemanagementCustomersTelemetryDevicesListRequest req = new ChromemanagementCustomersTelemetryDevicesListRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reprehenderit";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "dicta";
                filter = "corporis";
                key = "dolore";
                oauthToken = "iusto";
                pageSize = 118727L;
                pageToken = "harum";
                prettyPrint = false;
                quotaUser = "enim";
                readMask = "accusamus";
                uploadType = "commodi";
                uploadProtocol = "repudiandae";
            }};            

            ChromemanagementCustomersTelemetryDevicesListResponse res = sdk.customers.chromemanagementCustomersTelemetryDevicesList(req, new ChromemanagementCustomersTelemetryDevicesListSecurity("quae", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleChromeManagementV1ListTelemetryDevicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## chromemanagementCustomersTelemetryEventsList

List telemetry events.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromemanagementCustomersTelemetryEventsListRequest;
import org.openapis.openapi.models.operations.ChromemanagementCustomersTelemetryEventsListResponse;
import org.openapis.openapi.models.operations.ChromemanagementCustomersTelemetryEventsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromemanagementCustomersTelemetryEventsListRequest req = new ChromemanagementCustomersTelemetryEventsListRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.PROTO;
                callback = "modi";
                fields = "praesentium";
                filter = "rem";
                key = "voluptates";
                oauthToken = "quasi";
                pageSize = 921158L;
                pageToken = "sint";
                prettyPrint = false;
                quotaUser = "veritatis";
                readMask = "itaque";
                uploadType = "incidunt";
                uploadProtocol = "enim";
            }};            

            ChromemanagementCustomersTelemetryEventsListResponse res = sdk.customers.chromemanagementCustomersTelemetryEventsList(req, new ChromemanagementCustomersTelemetryEventsListSecurity("consequatur", "est") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleChromeManagementV1ListTelemetryEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## chromemanagementCustomersTelemetryUsersGet

Get telemetry user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromemanagementCustomersTelemetryUsersGetRequest;
import org.openapis.openapi.models.operations.ChromemanagementCustomersTelemetryUsersGetResponse;
import org.openapis.openapi.models.operations.ChromemanagementCustomersTelemetryUsersGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromemanagementCustomersTelemetryUsersGetRequest req = new ChromemanagementCustomersTelemetryUsersGetRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "labore";
                key = "modi";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "aliquid";
                readMask = "cupiditate";
                uploadType = "quos";
                uploadProtocol = "perferendis";
            }};            

            ChromemanagementCustomersTelemetryUsersGetResponse res = sdk.customers.chromemanagementCustomersTelemetryUsersGet(req, new ChromemanagementCustomersTelemetryUsersGetSecurity("magni", "assumenda") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleChromeManagementV1TelemetryUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## chromemanagementCustomersTelemetryUsersList

List all telemetry users.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromemanagementCustomersTelemetryUsersListRequest;
import org.openapis.openapi.models.operations.ChromemanagementCustomersTelemetryUsersListResponse;
import org.openapis.openapi.models.operations.ChromemanagementCustomersTelemetryUsersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromemanagementCustomersTelemetryUsersListRequest req = new ChromemanagementCustomersTelemetryUsersListRequest("ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fugit";
                alt = AltEnum.PROTO;
                callback = "excepturi";
                fields = "tempora";
                filter = "facilis";
                key = "tempore";
                oauthToken = "labore";
                pageSize = 962189L;
                pageToken = "eum";
                prettyPrint = false;
                quotaUser = "non";
                readMask = "eligendi";
                uploadType = "sint";
                uploadProtocol = "aliquid";
            }};            

            ChromemanagementCustomersTelemetryUsersListResponse res = sdk.customers.chromemanagementCustomersTelemetryUsersList(req, new ChromemanagementCustomersTelemetryUsersListSecurity("provident", "necessitatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleChromeManagementV1ListTelemetryUsersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
