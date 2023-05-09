# devices

### Available Operations

* [homegraphDevicesQuery](#homegraphdevicesquery) - Gets the current states in Home Graph for the given set of the third-party user's devices. The third-party user's identity is passed in via the `agent_user_id` (see QueryRequest). This request must be authorized using service account credentials from your Actions console project.
* [homegraphDevicesReportStateAndNotification](#homegraphdevicesreportstateandnotification) - Reports device state and optionally sends device notifications. Called by your smart home Action when the state of a third-party device changes or you need to send a notification about the device. See [Implement Report State](https://developers.home.google.com/cloud-to-cloud/integration/report-state) for more information. This method updates the device state according to its declared [traits](https://developers.home.google.com/cloud-to-cloud/primer/device-types-and-traits). Publishing a new state value outside of these traits will result in an `INVALID_ARGUMENT` error response. The third-party user's identity is passed in via the `agent_user_id` (see ReportStateAndNotificationRequest). This request must be authorized using service account credentials from your Actions console project.
* [homegraphDevicesRequestSync](#homegraphdevicesrequestsync) - Requests Google to send an `action.devices.SYNC` [intent](https://developers.home.google.com/cloud-to-cloud/intents/sync) to your smart home Action to update device metadata for the given user. The third-party user's identity is passed via the `agent_user_id` (see RequestSyncDevicesRequest). This request must be authorized using service account credentials from your Actions console project.
* [homegraphDevicesSync](#homegraphdevicessync) - Gets all the devices associated with the given third-party user. The third-party user's identity is passed in via the `agent_user_id` (see SyncRequest). This request must be authorized using service account credentials from your Actions console project.

## homegraphDevicesQuery

Gets the current states in Home Graph for the given set of the third-party user's devices. The third-party user's identity is passed in via the `agent_user_id` (see QueryRequest). This request must be authorized using service account credentials from your Actions console project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HomegraphDevicesQueryRequest;
import org.openapis.openapi.models.operations.HomegraphDevicesQueryResponse;
import org.openapis.openapi.models.operations.HomegraphDevicesQuerySecurity;
import org.openapis.openapi.models.shared.AgentDeviceId;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.QueryRequest;
import org.openapis.openapi.models.shared.QueryRequestInput;
import org.openapis.openapi.models.shared.QueryRequestPayload;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HomegraphDevicesQueryRequest req = new HomegraphDevicesQueryRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                queryRequest = new QueryRequest() {{
                    agentUserId = "quis";
                    inputs = new org.openapis.openapi.models.shared.QueryRequestInput[]{{
                        add(new QueryRequestInput() {{
                            payload = new QueryRequestPayload() {{
                                devices = new org.openapis.openapi.models.shared.AgentDeviceId[]{{
                                    add(new AgentDeviceId() {{
                                        id = "05dfc2dd-f7cc-478c-a1ba-928fc816742c";
                                    }}),
                                    add(new AgentDeviceId() {{
                                        id = "b7392059-2939-46fe-a759-6eb10faaa235";
                                    }}),
                                    add(new AgentDeviceId() {{
                                        id = "2c595590-7aff-41a3-a2fa-9467739251aa";
                                    }}),
                                }};
                            }};
                        }}),
                    }};
                    requestId = "enim";
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

            HomegraphDevicesQueryResponse res = sdk.devices.homegraphDevicesQuery(req, new HomegraphDevicesQuerySecurity("error", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.queryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## homegraphDevicesReportStateAndNotification

Reports device state and optionally sends device notifications. Called by your smart home Action when the state of a third-party device changes or you need to send a notification about the device. See [Implement Report State](https://developers.home.google.com/cloud-to-cloud/integration/report-state) for more information. This method updates the device state according to its declared [traits](https://developers.home.google.com/cloud-to-cloud/primer/device-types-and-traits). Publishing a new state value outside of these traits will result in an `INVALID_ARGUMENT` error response. The third-party user's identity is passed in via the `agent_user_id` (see ReportStateAndNotificationRequest). This request must be authorized using service account credentials from your Actions console project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HomegraphDevicesReportStateAndNotificationRequest;
import org.openapis.openapi.models.operations.HomegraphDevicesReportStateAndNotificationResponse;
import org.openapis.openapi.models.operations.HomegraphDevicesReportStateAndNotificationSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReportStateAndNotificationDevice;
import org.openapis.openapi.models.shared.ReportStateAndNotificationRequest;
import org.openapis.openapi.models.shared.StateAndNotificationPayload;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HomegraphDevicesReportStateAndNotificationRequest req = new HomegraphDevicesReportStateAndNotificationRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                reportStateAndNotificationRequest = new ReportStateAndNotificationRequest() {{
                    agentUserId = "quasi";
                    eventId = "reiciendis";
                    followUpToken = "voluptatibus";
                    payload = new StateAndNotificationPayload() {{
                        devices = new ReportStateAndNotificationDevice() {{
                            notifications = new java.util.HashMap<String, Object>() {{
                                put("nihil", "praesentium");
                                put("voluptatibus", "ipsa");
                                put("omnis", "voluptate");
                                put("cum", "perferendis");
                            }};
                            states = new java.util.HashMap<String, Object>() {{
                                put("reprehenderit", "ut");
                            }};
                        }};;
                    }};;
                    requestId = "maiores";
                }};;
                accessToken = "dicta";
                alt = AltEnum.MEDIA;
                callback = "dolore";
                fields = "iusto";
                key = "dicta";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "accusamus";
                uploadProtocol = "commodi";
            }};            

            HomegraphDevicesReportStateAndNotificationResponse res = sdk.devices.homegraphDevicesReportStateAndNotification(req, new HomegraphDevicesReportStateAndNotificationSecurity("repudiandae", "quae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.reportStateAndNotificationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## homegraphDevicesRequestSync

Requests Google to send an `action.devices.SYNC` [intent](https://developers.home.google.com/cloud-to-cloud/intents/sync) to your smart home Action to update device metadata for the given user. The third-party user's identity is passed via the `agent_user_id` (see RequestSyncDevicesRequest). This request must be authorized using service account credentials from your Actions console project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HomegraphDevicesRequestSyncRequest;
import org.openapis.openapi.models.operations.HomegraphDevicesRequestSyncResponse;
import org.openapis.openapi.models.operations.HomegraphDevicesRequestSyncSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RequestSyncDevicesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HomegraphDevicesRequestSyncRequest req = new HomegraphDevicesRequestSyncRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                requestSyncDevicesRequest = new RequestSyncDevicesRequest() {{
                    agentUserId = "quidem";
                    async = false;
                }};;
                accessToken = "molestias";
                alt = AltEnum.MEDIA;
                callback = "pariatur";
                fields = "modi";
                key = "praesentium";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "voluptates";
                uploadType = "quasi";
                uploadProtocol = "repudiandae";
            }};            

            HomegraphDevicesRequestSyncResponse res = sdk.devices.homegraphDevicesRequestSync(req, new HomegraphDevicesRequestSyncSecurity("sint", "veritatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.requestSyncDevicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## homegraphDevicesSync

Gets all the devices associated with the given third-party user. The third-party user's identity is passed in via the `agent_user_id` (see SyncRequest). This request must be authorized using service account credentials from your Actions console project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HomegraphDevicesSyncRequest;
import org.openapis.openapi.models.operations.HomegraphDevicesSyncResponse;
import org.openapis.openapi.models.operations.HomegraphDevicesSyncSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SyncRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HomegraphDevicesSyncRequest req = new HomegraphDevicesSyncRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                syncRequest = new SyncRequest() {{
                    agentUserId = "incidunt";
                    requestId = "enim";
                }};;
                accessToken = "consequatur";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "explicabo";
                key = "deserunt";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "labore";
                uploadProtocol = "modi";
            }};            

            HomegraphDevicesSyncResponse res = sdk.devices.homegraphDevicesSync(req, new HomegraphDevicesSyncSecurity("qui", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.syncResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
