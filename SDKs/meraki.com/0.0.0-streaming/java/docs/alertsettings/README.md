# alertSettings

### Available Operations

* [getNetworkAlertSettings](#getnetworkalertsettings) - Return the alert configuration for this network
* [updateNetworkAlertSettings](#updatenetworkalertsettings) - Update the alert configuration for this network

## getNetworkAlertSettings

Return the alert configuration for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkAlertSettingsRequest;
import org.openapis.openapi.models.operations.GetNetworkAlertSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkAlertSettingsRequest req = new GetNetworkAlertSettingsRequest("vero");            

            GetNetworkAlertSettingsResponse res = sdk.alertSettings.getNetworkAlertSettings(req);

            if (res.getNetworkAlertSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkAlertSettings

Update the alert configuration for this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkAlertSettingsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkAlertSettingsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkAlertSettingsRequestBodyAlerts;
import org.openapis.openapi.models.operations.UpdateNetworkAlertSettingsRequestBodyAlertsAlertDestinations;
import org.openapis.openapi.models.operations.UpdateNetworkAlertSettingsRequestBodyDefaultDestinations;
import org.openapis.openapi.models.operations.UpdateNetworkAlertSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkAlertSettingsRequest req = new UpdateNetworkAlertSettingsRequest("architecto") {{
                requestBody = new UpdateNetworkAlertSettingsRequestBody() {{
                    alerts = new org.openapis.openapi.models.operations.UpdateNetworkAlertSettingsRequestBodyAlerts[]{{
                        add(new UpdateNetworkAlertSettingsRequestBodyAlerts("necessitatibus") {{
                            alertDestinations = new UpdateNetworkAlertSettingsRequestBodyAlertsAlertDestinations() {{
                                allAdmins = false;
                                emails = new String[]{{
                                    add("excepturi"),
                                }};
                                httpServerIds = new String[]{{
                                    add("provident"),
                                    add("quos"),
                                }};
                                snmp = false;
                            }};
                            enabled = false;
                            filters = new java.util.HashMap<String, Object>() {{
                                put("accusantium", "mollitia");
                                put("reiciendis", "mollitia");
                                put("ad", "eum");
                            }};
                            type = "dolor";
                        }}),
                        add(new UpdateNetworkAlertSettingsRequestBodyAlerts("ullam") {{
                            alertDestinations = new UpdateNetworkAlertSettingsRequestBodyAlertsAlertDestinations() {{
                                allAdmins = false;
                                emails = new String[]{{
                                    add("nemo"),
                                }};
                                httpServerIds = new String[]{{
                                    add("iure"),
                                }};
                                snmp = false;
                            }};
                            enabled = false;
                            filters = new java.util.HashMap<String, Object>() {{
                                put("debitis", "eius");
                                put("maxime", "deleniti");
                                put("facilis", "in");
                                put("architecto", "architecto");
                            }};
                            type = "repudiandae";
                        }}),
                    }};
                    defaultDestinations = new UpdateNetworkAlertSettingsRequestBodyDefaultDestinations() {{
                        allAdmins = false;
                        emails = new String[]{{
                            add("nihil"),
                            add("repellat"),
                            add("quibusdam"),
                        }};
                        httpServerIds = new String[]{{
                            add("saepe"),
                        }};
                        snmp = false;
                    }};;
                }};;
            }};            

            UpdateNetworkAlertSettingsResponse res = sdk.alertSettings.updateNetworkAlertSettings(req);

            if (res.updateNetworkAlertSettings200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
