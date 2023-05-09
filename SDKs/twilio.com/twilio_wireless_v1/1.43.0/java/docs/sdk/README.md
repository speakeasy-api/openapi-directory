# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createCommand](#createcommand) - Send a Command to a Sim.
* [createRatePlan](#createrateplan)
* [deleteCommand](#deletecommand) - Delete a Command instance from your account.
* [deleteRatePlan](#deleterateplan)
* [deleteSim](#deletesim) - Delete a Sim resource on your Account.
* [fetchCommand](#fetchcommand) - Fetch a Command instance from your account.
* [fetchRatePlan](#fetchrateplan)
* [fetchSim](#fetchsim) - Fetch a Sim resource on your Account.
* [listAccountUsageRecord](#listaccountusagerecord)
* [listCommand](#listcommand) - Retrieve a list of Commands from your account.
* [listDataSession](#listdatasession)
* [listRatePlan](#listrateplan)
* [listSim](#listsim) - Retrieve a list of Sim resources on your Account.
* [listUsageRecord](#listusagerecord)
* [updateRatePlan](#updaterateplan)
* [updateSim](#updatesim) - Updates the given properties of a Sim resource on your Account.

## createCommand

Send a Command to a Sim.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCommandCreateCommandRequest;
import org.openapis.openapi.models.operations.CreateCommandCreateCommandRequestCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateCommandResponse;
import org.openapis.openapi.models.operations.CreateCommandSecurity;
import org.openapis.openapi.models.shared.CommandEnumCommandModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCommandCreateCommandRequest req = new CreateCommandCreateCommandRequest("suscipit") {{
                callbackMethod = CreateCommandCreateCommandRequestCallbackMethodEnum.POST;
                callbackUrl = "http://unique-baboon.org";
                commandMode = CommandEnumCommandModeEnum.TEXT;
                deliveryReceiptRequested = false;
                includeSid = "suscipit";
                sim = "molestiae";
            }};            

            CreateCommandResponse res = sdk.sdk.createCommand(req, new CreateCommandSecurity("minus", "placeat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.wirelessV1Command != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRatePlan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRatePlanCreateRatePlanRequest;
import org.openapis.openapi.models.operations.CreateRatePlanResponse;
import org.openapis.openapi.models.operations.CreateRatePlanSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateRatePlanCreateRatePlanRequest req = new CreateRatePlanCreateRatePlanRequest() {{
                dataEnabled = false;
                dataLimit = 528895L;
                dataMetering = "iusto";
                friendlyName = "excepturi";
                internationalRoaming = new String[]{{
                    add("recusandae"),
                    add("temporibus"),
                }};
                internationalRoamingDataLimit = 71036L;
                messagingEnabled = false;
                nationalRoamingDataLimit = 337396L;
                nationalRoamingEnabled = false;
                uniqueName = "veritatis";
                voiceEnabled = false;
            }};            

            CreateRatePlanResponse res = sdk.sdk.createRatePlan(req, new CreateRatePlanSecurity("deserunt", "perferendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.wirelessV1RatePlan != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCommand

Delete a Command instance from your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCommandRequest;
import org.openapis.openapi.models.operations.DeleteCommandResponse;
import org.openapis.openapi.models.operations.DeleteCommandSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCommandRequest req = new DeleteCommandRequest("ipsam");            

            DeleteCommandResponse res = sdk.sdk.deleteCommand(req, new DeleteCommandSecurity("repellendus", "sapiente") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRatePlan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRatePlanRequest;
import org.openapis.openapi.models.operations.DeleteRatePlanResponse;
import org.openapis.openapi.models.operations.DeleteRatePlanSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRatePlanRequest req = new DeleteRatePlanRequest("quo");            

            DeleteRatePlanResponse res = sdk.sdk.deleteRatePlan(req, new DeleteRatePlanSecurity("odit", "at") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSim

Delete a Sim resource on your Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSimRequest;
import org.openapis.openapi.models.operations.DeleteSimResponse;
import org.openapis.openapi.models.operations.DeleteSimSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSimRequest req = new DeleteSimRequest("at");            

            DeleteSimResponse res = sdk.sdk.deleteSim(req, new DeleteSimSecurity("maiores", "molestiae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchCommand

Fetch a Command instance from your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchCommandRequest;
import org.openapis.openapi.models.operations.FetchCommandResponse;
import org.openapis.openapi.models.operations.FetchCommandSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchCommandRequest req = new FetchCommandRequest("quod");            

            FetchCommandResponse res = sdk.sdk.fetchCommand(req, new FetchCommandSecurity("quod", "esse") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.wirelessV1Command != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRatePlan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRatePlanRequest;
import org.openapis.openapi.models.operations.FetchRatePlanResponse;
import org.openapis.openapi.models.operations.FetchRatePlanSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRatePlanRequest req = new FetchRatePlanRequest("totam");            

            FetchRatePlanResponse res = sdk.sdk.fetchRatePlan(req, new FetchRatePlanSecurity("porro", "dolorum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.wirelessV1RatePlan != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSim

Fetch a Sim resource on your Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSimRequest;
import org.openapis.openapi.models.operations.FetchSimResponse;
import org.openapis.openapi.models.operations.FetchSimSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSimRequest req = new FetchSimRequest("dicta");            

            FetchSimResponse res = sdk.sdk.fetchSim(req, new FetchSimSecurity("nam", "officia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.wirelessV1Sim != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAccountUsageRecord

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAccountUsageRecordRequest;
import org.openapis.openapi.models.operations.ListAccountUsageRecordResponse;
import org.openapis.openapi.models.operations.ListAccountUsageRecordSecurity;
import org.openapis.openapi.models.shared.AccountUsageRecordEnumGranularityEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAccountUsageRecordRequest req = new ListAccountUsageRecordRequest() {{
                end = OffsetDateTime.parse("2022-09-18T08:27:00.721Z");
                granularity = AccountUsageRecordEnumGranularityEnum.DAILY;
                page = 944669L;
                pageSize = 758616L;
                pageToken = "totam";
                start = OffsetDateTime.parse("2022-08-02T15:33:40.440Z");
            }};            

            ListAccountUsageRecordResponse res = sdk.sdk.listAccountUsageRecord(req, new ListAccountUsageRecordSecurity("molestiae", "modi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listAccountUsageRecordResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCommand

Retrieve a list of Commands from your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCommandRequest;
import org.openapis.openapi.models.operations.ListCommandResponse;
import org.openapis.openapi.models.operations.ListCommandSecurity;
import org.openapis.openapi.models.shared.CommandEnumDirectionEnum;
import org.openapis.openapi.models.shared.CommandEnumStatusEnum;
import org.openapis.openapi.models.shared.CommandEnumTransportEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCommandRequest req = new ListCommandRequest() {{
                direction = CommandEnumDirectionEnum.FROM_SIM;
                page = 774234L;
                pageSize = 736918L;
                pageToken = "esse";
                sim = "ipsum";
                status = CommandEnumStatusEnum.DELIVERED;
                transport = CommandEnumTransportEnum.SMS;
            }};            

            ListCommandResponse res = sdk.sdk.listCommand(req, new ListCommandSecurity("perferendis", "ad") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listCommandResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDataSession

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDataSessionRequest;
import org.openapis.openapi.models.operations.ListDataSessionResponse;
import org.openapis.openapi.models.operations.ListDataSessionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDataSessionRequest req = new ListDataSessionRequest("natus") {{
                page = 149675L;
                pageSize = 612096L;
                pageToken = "dolor";
            }};            

            ListDataSessionResponse res = sdk.sdk.listDataSession(req, new ListDataSessionSecurity("natus", "laboriosam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listDataSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRatePlan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRatePlanRequest;
import org.openapis.openapi.models.operations.ListRatePlanResponse;
import org.openapis.openapi.models.operations.ListRatePlanSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListRatePlanRequest req = new ListRatePlanRequest() {{
                page = 943749L;
                pageSize = 902599L;
                pageToken = "fuga";
            }};            

            ListRatePlanResponse res = sdk.sdk.listRatePlan(req, new ListRatePlanSecurity("in", "corporis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listRatePlanResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSim

Retrieve a list of Sim resources on your Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSimRequest;
import org.openapis.openapi.models.operations.ListSimResponse;
import org.openapis.openapi.models.operations.ListSimSecurity;
import org.openapis.openapi.models.shared.SimEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSimRequest req = new ListSimRequest() {{
                eId = "iste";
                iccid = "iure";
                page = 902349L;
                pageSize = 697631L;
                pageToken = "architecto";
                ratePlan = "ipsa";
                simRegistrationCode = "reiciendis";
                status = SimEnumStatusEnum.CANCELED;
            }};            

            ListSimResponse res = sdk.sdk.listSim(req, new ListSimSecurity("mollitia", "laborum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSimResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUsageRecord

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUsageRecordRequest;
import org.openapis.openapi.models.operations.ListUsageRecordResponse;
import org.openapis.openapi.models.operations.ListUsageRecordSecurity;
import org.openapis.openapi.models.shared.UsageRecordEnumGranularityEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUsageRecordRequest req = new ListUsageRecordRequest("dolores") {{
                end = OffsetDateTime.parse("2022-08-23T06:35:12.519Z");
                granularity = UsageRecordEnumGranularityEnum.HOURLY;
                page = 750686L;
                pageSize = 315428L;
                pageToken = "omnis";
                start = OffsetDateTime.parse("2022-09-04T08:35:09.957Z");
            }};            

            ListUsageRecordResponse res = sdk.sdk.listUsageRecord(req, new ListUsageRecordSecurity("excepturi", "accusantium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listUsageRecordResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRatePlan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRatePlanRequest;
import org.openapis.openapi.models.operations.UpdateRatePlanResponse;
import org.openapis.openapi.models.operations.UpdateRatePlanSecurity;
import org.openapis.openapi.models.operations.UpdateRatePlanUpdateRatePlanRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateRatePlanRequest req = new UpdateRatePlanRequest("iure") {{
                requestBody = new UpdateRatePlanUpdateRatePlanRequest() {{
                    friendlyName = "culpa";
                    uniqueName = "doloribus";
                }};;
            }};            

            UpdateRatePlanResponse res = sdk.sdk.updateRatePlan(req, new UpdateRatePlanSecurity("sapiente", "architecto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.wirelessV1RatePlan != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSim

Updates the given properties of a Sim resource on your Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSimRequest;
import org.openapis.openapi.models.operations.UpdateSimResponse;
import org.openapis.openapi.models.operations.UpdateSimSecurity;
import org.openapis.openapi.models.operations.UpdateSimUpdateSimRequest;
import org.openapis.openapi.models.operations.UpdateSimUpdateSimRequestCallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateSimUpdateSimRequestCommandsCallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateSimUpdateSimRequestSmsFallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateSimUpdateSimRequestSmsMethodEnum;
import org.openapis.openapi.models.operations.UpdateSimUpdateSimRequestVoiceFallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateSimUpdateSimRequestVoiceMethodEnum;
import org.openapis.openapi.models.shared.SimEnumResetStatusEnum;
import org.openapis.openapi.models.shared.SimEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSimRequest req = new UpdateSimRequest("mollitia") {{
                requestBody = new UpdateSimUpdateSimRequest() {{
                    accountSid = "dolorem";
                    callbackMethod = UpdateSimUpdateSimRequestCallbackMethodEnum.PATCH;
                    callbackUrl = "http://young-pew.name";
                    commandsCallbackMethod = UpdateSimUpdateSimRequestCommandsCallbackMethodEnum.GET;
                    commandsCallbackUrl = "http://kind-ironclad.biz";
                    friendlyName = "error";
                    ratePlan = "quia";
                    resetStatus = SimEnumResetStatusEnum.RESETTING;
                    smsFallbackMethod = UpdateSimUpdateSimRequestSmsFallbackMethodEnum.POST;
                    smsFallbackUrl = "http://quixotic-physics.biz";
                    smsMethod = UpdateSimUpdateSimRequestSmsMethodEnum.HEAD;
                    smsUrl = "https://dimwitted-vaulting.info";
                    status = SimEnumStatusEnum.CANCELED;
                    uniqueName = "possimus";
                    voiceFallbackMethod = UpdateSimUpdateSimRequestVoiceFallbackMethodEnum.HEAD;
                    voiceFallbackUrl = "http://phony-split.net";
                    voiceMethod = UpdateSimUpdateSimRequestVoiceMethodEnum.HEAD;
                    voiceUrl = "https://witty-swim.info";
                }};;
            }};            

            UpdateSimResponse res = sdk.sdk.updateSim(req, new UpdateSimSecurity("praesentium", "voluptatibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.wirelessV1Sim != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
