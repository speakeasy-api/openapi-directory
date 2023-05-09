# switchPortSchedules

### Available Operations

* [createNetworkSwitchPortSchedule](#createnetworkswitchportschedule) - Add a switch port schedule
* [deleteNetworkSwitchPortSchedule](#deletenetworkswitchportschedule) - Delete a switch port schedule
* [getNetworkSwitchPortSchedules](#getnetworkswitchportschedules) - List switch port schedules
* [updateNetworkSwitchPortSchedule](#updatenetworkswitchportschedule) - Update a switch port schedule

## createNetworkSwitchPortSchedule

Add a switch port schedule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSwitchPortScheduleRequest;
import org.openapis.openapi.models.operations.CreateNetworkSwitchPortScheduleRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSwitchPortScheduleRequestBodyPortSchedule;
import org.openapis.openapi.models.operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday;
import org.openapis.openapi.models.operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday;
import org.openapis.openapi.models.operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday;
import org.openapis.openapi.models.operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday;
import org.openapis.openapi.models.operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday;
import org.openapis.openapi.models.operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday;
import org.openapis.openapi.models.operations.CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday;
import org.openapis.openapi.models.operations.CreateNetworkSwitchPortScheduleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchPortScheduleRequest req = new CreateNetworkSwitchPortScheduleRequest(                new CreateNetworkSwitchPortScheduleRequestBody("ipsam") {{
                                portSchedule = new CreateNetworkSwitchPortScheduleRequestBodyPortSchedule() {{
                                    friday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday() {{
                                        active = false;
                                        from = "alias";
                                        to = "suscipit";
                                    }};;
                                    monday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday() {{
                                        active = false;
                                        from = "deserunt";
                                        to = "molestias";
                                    }};;
                                    saturday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday() {{
                                        active = false;
                                        from = "laborum";
                                        to = "est";
                                    }};;
                                    sunday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday() {{
                                        active = false;
                                        from = "occaecati";
                                        to = "labore";
                                    }};;
                                    thursday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday() {{
                                        active = false;
                                        from = "quo";
                                        to = "perferendis";
                                    }};;
                                    tuesday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday() {{
                                        active = false;
                                        from = "fugit";
                                        to = "aliquid";
                                    }};;
                                    wednesday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday() {{
                                        active = false;
                                        from = "magnam";
                                        to = "quaerat";
                                    }};;
                                }};;
                            }};, "eligendi");            

            CreateNetworkSwitchPortScheduleResponse res = sdk.switchPortSchedules.createNetworkSwitchPortSchedule(req);

            if (res.createNetworkSwitchPortSchedule201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSwitchPortSchedule

Delete a switch port schedule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchPortScheduleRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSwitchPortScheduleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchPortScheduleRequest req = new DeleteNetworkSwitchPortScheduleRequest("nostrum", "officiis");            

            DeleteNetworkSwitchPortScheduleResponse res = sdk.switchPortSchedules.deleteNetworkSwitchPortSchedule(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSwitchPortSchedules

List switch port schedules

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSwitchPortSchedulesRequest;
import org.openapis.openapi.models.operations.GetNetworkSwitchPortSchedulesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchPortSchedulesRequest req = new GetNetworkSwitchPortSchedulesRequest("nulla");            

            GetNetworkSwitchPortSchedulesResponse res = sdk.switchPortSchedules.getNetworkSwitchPortSchedules(req);

            if (res.getNetworkSwitchPortSchedules200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSwitchPortSchedule

Update a switch port schedule

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchPortScheduleRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchPortScheduleRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday;
import org.openapis.openapi.models.operations.UpdateNetworkSwitchPortScheduleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchPortScheduleRequest req = new UpdateNetworkSwitchPortScheduleRequest("mollitia", "magnam") {{
                requestBody = new UpdateNetworkSwitchPortScheduleRequestBody() {{
                    name = "Georgia Lowe";
                    portSchedule = new UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule() {{
                        friday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday() {{
                            active = false;
                            from = "impedit";
                            to = "quasi";
                        }};;
                        monday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday() {{
                            active = false;
                            from = "deserunt";
                            to = "quod";
                        }};;
                        saturday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday() {{
                            active = false;
                            from = "laboriosam";
                            to = "doloremque";
                        }};;
                        sunday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday() {{
                            active = false;
                            from = "voluptatem";
                            to = "facere";
                        }};;
                        thursday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday() {{
                            active = false;
                            from = "necessitatibus";
                            to = "maxime";
                        }};;
                        tuesday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday() {{
                            active = false;
                            from = "consequatur";
                            to = "eaque";
                        }};;
                        wednesday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday() {{
                            active = false;
                            from = "architecto";
                            to = "similique";
                        }};;
                    }};;
                }};;
            }};            

            UpdateNetworkSwitchPortScheduleResponse res = sdk.switchPortSchedules.updateNetworkSwitchPortSchedule(req);

            if (res.updateNetworkSwitchPortSchedule200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
