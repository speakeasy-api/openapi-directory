# portSchedules

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
                .setSecurity(new Security("asperiores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSwitchPortScheduleRequest req = new CreateNetworkSwitchPortScheduleRequest(                new CreateNetworkSwitchPortScheduleRequestBody("tempore") {{
                                portSchedule = new CreateNetworkSwitchPortScheduleRequestBodyPortSchedule() {{
                                    friday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday() {{
                                        active = false;
                                        from = "ea";
                                        to = "accusantium";
                                    }};;
                                    monday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday() {{
                                        active = false;
                                        from = "eum";
                                        to = "dignissimos";
                                    }};;
                                    saturday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday() {{
                                        active = false;
                                        from = "ea";
                                        to = "distinctio";
                                    }};;
                                    sunday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday() {{
                                        active = false;
                                        from = "vero";
                                        to = "aspernatur";
                                    }};;
                                    thursday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday() {{
                                        active = false;
                                        from = "deleniti";
                                        to = "officiis";
                                    }};;
                                    tuesday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday() {{
                                        active = false;
                                        from = "facere";
                                        to = "odio";
                                    }};;
                                    wednesday = new CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday() {{
                                        active = false;
                                        from = "repudiandae";
                                        to = "quibusdam";
                                    }};;
                                }};;
                            }};, "nemo");            

            CreateNetworkSwitchPortScheduleResponse res = sdk.portSchedules.createNetworkSwitchPortSchedule(req);

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
                .setSecurity(new Security("consequuntur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSwitchPortScheduleRequest req = new DeleteNetworkSwitchPortScheduleRequest("corporis", "ex");            

            DeleteNetworkSwitchPortScheduleResponse res = sdk.portSchedules.deleteNetworkSwitchPortSchedule(req);

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
                .setSecurity(new Security("et") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSwitchPortSchedulesRequest req = new GetNetworkSwitchPortSchedulesRequest("quia");            

            GetNetworkSwitchPortSchedulesResponse res = sdk.portSchedules.getNetworkSwitchPortSchedules(req);

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
                .setSecurity(new Security("ea") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSwitchPortScheduleRequest req = new UpdateNetworkSwitchPortScheduleRequest("atque", "delectus") {{
                requestBody = new UpdateNetworkSwitchPortScheduleRequestBody() {{
                    name = "Lynn Kshlerin";
                    portSchedule = new UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule() {{
                        friday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday() {{
                            active = false;
                            from = "iure";
                            to = "iure";
                        }};;
                        monday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday() {{
                            active = false;
                            from = "officiis";
                            to = "rerum";
                        }};;
                        saturday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday() {{
                            active = false;
                            from = "totam";
                            to = "esse";
                        }};;
                        sunday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday() {{
                            active = false;
                            from = "reprehenderit";
                            to = "molestias";
                        }};;
                        thursday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday() {{
                            active = false;
                            from = "sit";
                            to = "dolor";
                        }};;
                        tuesday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday() {{
                            active = false;
                            from = "eius";
                            to = "sapiente";
                        }};;
                        wednesday = new UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday() {{
                            active = false;
                            from = "molestias";
                            to = "aliquam";
                        }};;
                    }};;
                }};;
            }};            

            UpdateNetworkSwitchPortScheduleResponse res = sdk.portSchedules.updateNetworkSwitchPortSchedule(req);

            if (res.updateNetworkSwitchPortSchedule200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
