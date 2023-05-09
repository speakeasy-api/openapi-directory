# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createEsimProfile](#createesimprofile) - Order an eSIM Profile.
* [createFleet](#createfleet) - Create a Fleet
* [createIpCommand](#createipcommand) - Send an IP Command to a Super SIM.
* [createNetworkAccessProfile](#createnetworkaccessprofile) - Create a new Network Access Profile
* [createNetworkAccessProfileNetwork](#createnetworkaccessprofilenetwork) - Add a Network resource to the Network Access Profile resource.
* [createSim](#createsim) - Register a Super SIM to your Account
* [createSmsCommand](#createsmscommand) - Send SMS Command to a Sim.
* [deleteNetworkAccessProfileNetwork](#deletenetworkaccessprofilenetwork) - Remove a Network resource from the Network Access Profile resource's.
* [fetchEsimProfile](#fetchesimprofile) - Fetch an eSIM Profile.
* [fetchFleet](#fetchfleet) - Fetch a Fleet instance from your account.
* [fetchIpCommand](#fetchipcommand) - Fetch IP Command instance from your account.
* [fetchNetwork](#fetchnetwork) - Fetch a Network resource.
* [fetchNetworkAccessProfile](#fetchnetworkaccessprofile) - Fetch a Network Access Profile instance from your account.
* [fetchNetworkAccessProfileNetwork](#fetchnetworkaccessprofilenetwork) - Fetch a Network Access Profile resource's Network resource.
* [fetchSim](#fetchsim) - Fetch a Super SIM instance from your account.
* [fetchSmsCommand](#fetchsmscommand) - Fetch SMS Command instance from your account.
* [listBillingPeriod](#listbillingperiod) - Retrieve a list of Billing Periods for a Super SIM.
* [listEsimProfile](#listesimprofile) - Retrieve a list of eSIM Profiles.
* [listFleet](#listfleet) - Retrieve a list of Fleets from your account.
* [listIpCommand](#listipcommand) - Retrieve a list of IP Commands from your account.
* [listNetwork](#listnetwork) - Retrieve a list of Network resources.
* [listNetworkAccessProfile](#listnetworkaccessprofile) - Retrieve a list of Network Access Profiles from your account.
* [listNetworkAccessProfileNetwork](#listnetworkaccessprofilenetwork) - Retrieve a list of Network Access Profile resource's Network resource.
* [listSettingsUpdate](#listsettingsupdate) - Retrieve a list of Settings Updates.
* [listSim](#listsim) - Retrieve a list of Super SIMs from your account.
* [listSimIpAddress](#listsimipaddress) - Retrieve a list of IP Addresses for the given Super SIM.
* [listSmsCommand](#listsmscommand) - Retrieve a list of SMS Commands from your account.
* [listUsageRecord](#listusagerecord) - List UsageRecords
* [updateFleet](#updatefleet) - Updates the given properties of a Super SIM Fleet instance from your account.
* [updateNetworkAccessProfile](#updatenetworkaccessprofile) - Updates the given properties of a Network Access Profile in your account.
* [updateSim](#updatesim) - Updates the given properties of a Super SIM instance from your account.

## createEsimProfile

Order an eSIM Profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEsimProfileCreateEsimProfileRequest;
import org.openapis.openapi.models.operations.CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateEsimProfileResponse;
import org.openapis.openapi.models.operations.CreateEsimProfileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateEsimProfileCreateEsimProfileRequest req = new CreateEsimProfileCreateEsimProfileRequest() {{
                callbackMethod = CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum.DELETE;
                callbackUrl = "corrupti";
                eid = "illum";
                generateMatchingId = false;
            }};            

            CreateEsimProfileResponse res = sdk.sdk.createEsimProfile(req, new CreateEsimProfileSecurity("vel", "error") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.supersimV1EsimProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFleet

Create a Fleet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFleetCreateFleetRequest;
import org.openapis.openapi.models.operations.CreateFleetCreateFleetRequestIpCommandsMethodEnum;
import org.openapis.openapi.models.operations.CreateFleetCreateFleetRequestSmsCommandsMethodEnum;
import org.openapis.openapi.models.operations.CreateFleetResponse;
import org.openapis.openapi.models.operations.CreateFleetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFleetCreateFleetRequest req = new CreateFleetCreateFleetRequest("deserunt") {{
                dataEnabled = false;
                dataLimit = 384382L;
                ipCommandsMethod = CreateFleetCreateFleetRequestIpCommandsMethodEnum.POST;
                ipCommandsUrl = "http://unique-baboon.org";
                smsCommandsEnabled = false;
                smsCommandsMethod = CreateFleetCreateFleetRequestSmsCommandsMethodEnum.GET;
                smsCommandsUrl = "http://lasting-sex.net";
                uniqueName = "voluptatum";
            }};            

            CreateFleetResponse res = sdk.sdk.createFleet(req, new CreateFleetSecurity("iusto", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.supersimV1Fleet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createIpCommand

Send an IP Command to a Super SIM.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateIpCommandCreateIpCommandRequest;
import org.openapis.openapi.models.operations.CreateIpCommandCreateIpCommandRequestCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateIpCommandResponse;
import org.openapis.openapi.models.operations.CreateIpCommandSecurity;
import org.openapis.openapi.models.shared.IpCommandEnumPayloadTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateIpCommandCreateIpCommandRequest req = new CreateIpCommandCreateIpCommandRequest(392785L, "recusandae", "temporibus") {{
                callbackMethod = CreateIpCommandCreateIpCommandRequestCallbackMethodEnum.HEAD;
                callbackUrl = "http://bountiful-pension.com";
                payloadType = IpCommandEnumPayloadTypeEnum.TEXT;
            }};            

            CreateIpCommandResponse res = sdk.sdk.createIpCommand(req, new CreateIpCommandSecurity("repellendus", "sapiente") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.supersimV1IpCommand != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkAccessProfile

Create a new Network Access Profile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkAccessProfileCreateNetworkAccessProfileRequest;
import org.openapis.openapi.models.operations.CreateNetworkAccessProfileResponse;
import org.openapis.openapi.models.operations.CreateNetworkAccessProfileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateNetworkAccessProfileCreateNetworkAccessProfileRequest req = new CreateNetworkAccessProfileCreateNetworkAccessProfileRequest() {{
                networks = new String[]{{
                    add("odit"),
                    add("at"),
                    add("at"),
                    add("maiores"),
                }};
                uniqueName = "molestiae";
            }};            

            CreateNetworkAccessProfileResponse res = sdk.sdk.createNetworkAccessProfile(req, new CreateNetworkAccessProfileSecurity("quod", "quod") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.supersimV1NetworkAccessProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkAccessProfileNetwork

Add a Network resource to the Network Access Profile resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest;
import org.openapis.openapi.models.operations.CreateNetworkAccessProfileNetworkRequest;
import org.openapis.openapi.models.operations.CreateNetworkAccessProfileNetworkResponse;
import org.openapis.openapi.models.operations.CreateNetworkAccessProfileNetworkSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateNetworkAccessProfileNetworkRequest req = new CreateNetworkAccessProfileNetworkRequest("esse") {{
                requestBody = new CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest("totam");;
            }};            

            CreateNetworkAccessProfileNetworkResponse res = sdk.sdk.createNetworkAccessProfileNetwork(req, new CreateNetworkAccessProfileNetworkSecurity("porro", "dolorum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.supersimV1NetworkAccessProfileNetworkAccessProfileNetwork != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSim

Register a Super SIM to your Account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSimCreateSimRequest;
import org.openapis.openapi.models.operations.CreateSimResponse;
import org.openapis.openapi.models.operations.CreateSimSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSimCreateSimRequest req = new CreateSimCreateSimRequest("dicta", "nam");            

            CreateSimResponse res = sdk.sdk.createSim(req, new CreateSimSecurity("officia", "occaecati") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.supersimV1Sim != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSmsCommand

Send SMS Command to a Sim.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSmsCommandCreateSmsCommandRequest;
import org.openapis.openapi.models.operations.CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateSmsCommandResponse;
import org.openapis.openapi.models.operations.CreateSmsCommandSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSmsCommandCreateSmsCommandRequest req = new CreateSmsCommandCreateSmsCommandRequest("fugit", "deleniti") {{
                callbackMethod = CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum.DELETE;
                callbackUrl = "https://mean-brick.info";
            }};            

            CreateSmsCommandResponse res = sdk.sdk.createSmsCommand(req, new CreateSmsCommandSecurity("molestiae", "modi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.supersimV1SmsCommand != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkAccessProfileNetwork

Remove a Network resource from the Network Access Profile resource's.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkAccessProfileNetworkRequest;
import org.openapis.openapi.models.operations.DeleteNetworkAccessProfileNetworkResponse;
import org.openapis.openapi.models.operations.DeleteNetworkAccessProfileNetworkSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteNetworkAccessProfileNetworkRequest req = new DeleteNetworkAccessProfileNetworkRequest("qui", "impedit");            

            DeleteNetworkAccessProfileNetworkResponse res = sdk.sdk.deleteNetworkAccessProfileNetwork(req, new DeleteNetworkAccessProfileNetworkSecurity("cum", "esse") {{
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

## fetchEsimProfile

Fetch an eSIM Profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchEsimProfileRequest;
import org.openapis.openapi.models.operations.FetchEsimProfileResponse;
import org.openapis.openapi.models.operations.FetchEsimProfileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchEsimProfileRequest req = new FetchEsimProfileRequest("ipsum");            

            FetchEsimProfileResponse res = sdk.sdk.fetchEsimProfile(req, new FetchEsimProfileSecurity("excepturi", "aspernatur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.supersimV1EsimProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchFleet

Fetch a Fleet instance from your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchFleetRequest;
import org.openapis.openapi.models.operations.FetchFleetResponse;
import org.openapis.openapi.models.operations.FetchFleetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchFleetRequest req = new FetchFleetRequest("perferendis");            

            FetchFleetResponse res = sdk.sdk.fetchFleet(req, new FetchFleetSecurity("ad", "natus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.supersimV1Fleet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchIpCommand

Fetch IP Command instance from your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchIpCommandRequest;
import org.openapis.openapi.models.operations.FetchIpCommandResponse;
import org.openapis.openapi.models.operations.FetchIpCommandSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchIpCommandRequest req = new FetchIpCommandRequest("sed");            

            FetchIpCommandResponse res = sdk.sdk.fetchIpCommand(req, new FetchIpCommandSecurity("iste", "dolor") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.supersimV1IpCommand != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchNetwork

Fetch a Network resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchNetworkRequest;
import org.openapis.openapi.models.operations.FetchNetworkResponse;
import org.openapis.openapi.models.operations.FetchNetworkSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchNetworkRequest req = new FetchNetworkRequest("natus");            

            FetchNetworkResponse res = sdk.sdk.fetchNetwork(req, new FetchNetworkSecurity("laboriosam", "hic") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.supersimV1Network != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchNetworkAccessProfile

Fetch a Network Access Profile instance from your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchNetworkAccessProfileRequest;
import org.openapis.openapi.models.operations.FetchNetworkAccessProfileResponse;
import org.openapis.openapi.models.operations.FetchNetworkAccessProfileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchNetworkAccessProfileRequest req = new FetchNetworkAccessProfileRequest("saepe");            

            FetchNetworkAccessProfileResponse res = sdk.sdk.fetchNetworkAccessProfile(req, new FetchNetworkAccessProfileSecurity("fuga", "in") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.supersimV1NetworkAccessProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchNetworkAccessProfileNetwork

Fetch a Network Access Profile resource's Network resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchNetworkAccessProfileNetworkRequest;
import org.openapis.openapi.models.operations.FetchNetworkAccessProfileNetworkResponse;
import org.openapis.openapi.models.operations.FetchNetworkAccessProfileNetworkSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchNetworkAccessProfileNetworkRequest req = new FetchNetworkAccessProfileNetworkRequest("corporis", "iste");            

            FetchNetworkAccessProfileNetworkResponse res = sdk.sdk.fetchNetworkAccessProfileNetwork(req, new FetchNetworkAccessProfileNetworkSecurity("iure", "saepe") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.supersimV1NetworkAccessProfileNetworkAccessProfileNetwork != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSim

Fetch a Super SIM instance from your account.

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

            FetchSimRequest req = new FetchSimRequest("quidem");            

            FetchSimResponse res = sdk.sdk.fetchSim(req, new FetchSimSecurity("architecto", "ipsa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.supersimV1Sim != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSmsCommand

Fetch SMS Command instance from your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSmsCommandRequest;
import org.openapis.openapi.models.operations.FetchSmsCommandResponse;
import org.openapis.openapi.models.operations.FetchSmsCommandSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSmsCommandRequest req = new FetchSmsCommandRequest("reiciendis");            

            FetchSmsCommandResponse res = sdk.sdk.fetchSmsCommand(req, new FetchSmsCommandSecurity("est", "mollitia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.supersimV1SmsCommand != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBillingPeriod

Retrieve a list of Billing Periods for a Super SIM.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBillingPeriodRequest;
import org.openapis.openapi.models.operations.ListBillingPeriodResponse;
import org.openapis.openapi.models.operations.ListBillingPeriodSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListBillingPeriodRequest req = new ListBillingPeriodRequest("laborum") {{
                page = 170909L;
                pageSize = 210382L;
                pageToken = "corporis";
            }};            

            ListBillingPeriodResponse res = sdk.sdk.listBillingPeriod(req, new ListBillingPeriodSecurity("explicabo", "nobis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listBillingPeriodResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEsimProfile

Retrieve a list of eSIM Profiles.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEsimProfileRequest;
import org.openapis.openapi.models.operations.ListEsimProfileResponse;
import org.openapis.openapi.models.operations.ListEsimProfileSecurity;
import org.openapis.openapi.models.shared.EsimProfileEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListEsimProfileRequest req = new ListEsimProfileRequest() {{
                eid = "enim";
                page = 607831L;
                pageSize = 363711L;
                pageToken = "minima";
                simSid = "excepturi";
                status = EsimProfileEnumStatusEnum.NEW_;
            }};            

            ListEsimProfileResponse res = sdk.sdk.listEsimProfile(req, new ListEsimProfileSecurity("iure", "culpa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listEsimProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFleet

Retrieve a list of Fleets from your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFleetRequest;
import org.openapis.openapi.models.operations.ListFleetResponse;
import org.openapis.openapi.models.operations.ListFleetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListFleetRequest req = new ListFleetRequest() {{
                networkAccessProfile = "doloribus";
                page = 958950L;
                pageSize = 102044L;
                pageToken = "mollitia";
            }};            

            ListFleetResponse res = sdk.sdk.listFleet(req, new ListFleetSecurity("dolorem", "culpa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listFleetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIpCommand

Retrieve a list of IP Commands from your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIpCommandRequest;
import org.openapis.openapi.models.operations.ListIpCommandResponse;
import org.openapis.openapi.models.operations.ListIpCommandSecurity;
import org.openapis.openapi.models.shared.IpCommandEnumDirectionEnum;
import org.openapis.openapi.models.shared.IpCommandEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListIpCommandRequest req = new ListIpCommandRequest() {{
                direction = IpCommandEnumDirectionEnum.TO_SIM;
                page = 995300L;
                pageSize = 653108L;
                pageToken = "occaecati";
                sim = "numquam";
                simIccid = "commodi";
                status = IpCommandEnumStatusEnum.SENT;
            }};            

            ListIpCommandResponse res = sdk.sdk.listIpCommand(req, new ListIpCommandSecurity("molestiae", "velit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listIpCommandResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listNetwork

Retrieve a list of Network resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListNetworkRequest;
import org.openapis.openapi.models.operations.ListNetworkResponse;
import org.openapis.openapi.models.operations.ListNetworkSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListNetworkRequest req = new ListNetworkRequest() {{
                isoCountry = "error";
                mcc = "quia";
                mnc = "quis";
                page = 110375L;
                pageSize = 674752L;
                pageToken = "animi";
            }};            

            ListNetworkResponse res = sdk.sdk.listNetwork(req, new ListNetworkSecurity("enim", "odit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listNetworkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listNetworkAccessProfile

Retrieve a list of Network Access Profiles from your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListNetworkAccessProfileRequest;
import org.openapis.openapi.models.operations.ListNetworkAccessProfileResponse;
import org.openapis.openapi.models.operations.ListNetworkAccessProfileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListNetworkAccessProfileRequest req = new ListNetworkAccessProfileRequest() {{
                page = 778346L;
                pageSize = 196582L;
                pageToken = "tenetur";
            }};            

            ListNetworkAccessProfileResponse res = sdk.sdk.listNetworkAccessProfile(req, new ListNetworkAccessProfileSecurity("ipsam", "id") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listNetworkAccessProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listNetworkAccessProfileNetwork

Retrieve a list of Network Access Profile resource's Network resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListNetworkAccessProfileNetworkRequest;
import org.openapis.openapi.models.operations.ListNetworkAccessProfileNetworkResponse;
import org.openapis.openapi.models.operations.ListNetworkAccessProfileNetworkSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListNetworkAccessProfileNetworkRequest req = new ListNetworkAccessProfileNetworkRequest("possimus") {{
                page = 13571L;
                pageSize = 97101L;
                pageToken = "error";
            }};            

            ListNetworkAccessProfileNetworkResponse res = sdk.sdk.listNetworkAccessProfileNetwork(req, new ListNetworkAccessProfileNetworkSecurity("temporibus", "laborum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listNetworkAccessProfileNetworkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSettingsUpdate

Retrieve a list of Settings Updates.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSettingsUpdateRequest;
import org.openapis.openapi.models.operations.ListSettingsUpdateResponse;
import org.openapis.openapi.models.operations.ListSettingsUpdateSecurity;
import org.openapis.openapi.models.shared.SettingsUpdateEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSettingsUpdateRequest req = new ListSettingsUpdateRequest() {{
                page = 96098L;
                pageSize = 971945L;
                pageToken = "voluptatibus";
                sim = "vero";
                status = SettingsUpdateEnumStatusEnum.IN_PROGRESS;
            }};            

            ListSettingsUpdateResponse res = sdk.sdk.listSettingsUpdate(req, new ListSettingsUpdateSecurity("praesentium", "voluptatibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSettingsUpdateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSim

Retrieve a list of Super SIMs from your account.

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
                fleet = "ipsa";
                iccid = "omnis";
                page = 451159L;
                pageSize = 739264L;
                pageToken = "perferendis";
                status = SimEnumStatusEnum.NEW_;
            }};            

            ListSimResponse res = sdk.sdk.listSim(req, new ListSimSecurity("reprehenderit", "ut") {{
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

## listSimIpAddress

Retrieve a list of IP Addresses for the given Super SIM.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSimIpAddressRequest;
import org.openapis.openapi.models.operations.ListSimIpAddressResponse;
import org.openapis.openapi.models.operations.ListSimIpAddressSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSimIpAddressRequest req = new ListSimIpAddressRequest("maiores") {{
                page = 120196L;
                pageSize = 359444L;
                pageToken = "dolore";
            }};            

            ListSimIpAddressResponse res = sdk.sdk.listSimIpAddress(req, new ListSimIpAddressSecurity("iusto", "dicta") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSimIpAddressResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSmsCommand

Retrieve a list of SMS Commands from your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSmsCommandRequest;
import org.openapis.openapi.models.operations.ListSmsCommandResponse;
import org.openapis.openapi.models.operations.ListSmsCommandSecurity;
import org.openapis.openapi.models.shared.SmsCommandEnumDirectionEnum;
import org.openapis.openapi.models.shared.SmsCommandEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSmsCommandRequest req = new ListSmsCommandRequest() {{
                direction = SmsCommandEnumDirectionEnum.FROM_SIM;
                page = 317983L;
                pageSize = 880476L;
                pageToken = "commodi";
                sim = "repudiandae";
                status = SmsCommandEnumStatusEnum.QUEUED;
            }};            

            ListSmsCommandResponse res = sdk.sdk.listSmsCommand(req, new ListSmsCommandSecurity("ipsum", "quidem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSmsCommandResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUsageRecord

List UsageRecords

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUsageRecordRequest;
import org.openapis.openapi.models.operations.ListUsageRecordResponse;
import org.openapis.openapi.models.operations.ListUsageRecordSecurity;
import org.openapis.openapi.models.shared.UsageRecordEnumGranularityEnum;
import org.openapis.openapi.models.shared.UsageRecordEnumGroupEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUsageRecordRequest req = new ListUsageRecordRequest() {{
                endTime = OffsetDateTime.parse("2021-11-13T09:08:33.009Z");
                fleet = "pariatur";
                granularity = UsageRecordEnumGranularityEnum.HOUR;
                group = UsageRecordEnumGroupEnum.NETWORK;
                isoCountry = "rem";
                network = "voluptates";
                page = 93940L;
                pageSize = 921158L;
                pageToken = "sint";
                sim = "veritatis";
                startTime = OffsetDateTime.parse("2022-03-02T21:33:21.372Z");
            }};            

            ListUsageRecordResponse res = sdk.sdk.listUsageRecord(req, new ListUsageRecordSecurity("enim", "consequatur") {{
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

## updateFleet

Updates the given properties of a Super SIM Fleet instance from your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFleetRequest;
import org.openapis.openapi.models.operations.UpdateFleetResponse;
import org.openapis.openapi.models.operations.UpdateFleetSecurity;
import org.openapis.openapi.models.operations.UpdateFleetUpdateFleetRequest;
import org.openapis.openapi.models.operations.UpdateFleetUpdateFleetRequestIpCommandsMethodEnum;
import org.openapis.openapi.models.operations.UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateFleetRequest req = new UpdateFleetRequest("est") {{
                requestBody = new UpdateFleetUpdateFleetRequest() {{
                    dataLimit = 842342L;
                    ipCommandsMethod = UpdateFleetUpdateFleetRequestIpCommandsMethodEnum.HEAD;
                    ipCommandsUrl = "https://sandy-spruce.biz";
                    networkAccessProfile = "modi";
                    smsCommandsMethod = UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum.GET;
                    smsCommandsUrl = "http://offensive-melody.com";
                    uniqueName = "magni";
                }};;
            }};            

            UpdateFleetResponse res = sdk.sdk.updateFleet(req, new UpdateFleetSecurity("assumenda", "ipsam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.supersimV1Fleet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkAccessProfile

Updates the given properties of a Network Access Profile in your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkAccessProfileRequest;
import org.openapis.openapi.models.operations.UpdateNetworkAccessProfileResponse;
import org.openapis.openapi.models.operations.UpdateNetworkAccessProfileSecurity;
import org.openapis.openapi.models.operations.UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateNetworkAccessProfileRequest req = new UpdateNetworkAccessProfileRequest("alias") {{
                requestBody = new UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest() {{
                    uniqueName = "fugit";
                }};;
            }};            

            UpdateNetworkAccessProfileResponse res = sdk.sdk.updateNetworkAccessProfile(req, new UpdateNetworkAccessProfileSecurity("dolorum", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.supersimV1NetworkAccessProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSim

Updates the given properties of a Super SIM instance from your account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSimRequest;
import org.openapis.openapi.models.operations.UpdateSimResponse;
import org.openapis.openapi.models.operations.UpdateSimSecurity;
import org.openapis.openapi.models.operations.UpdateSimUpdateSimRequest;
import org.openapis.openapi.models.operations.UpdateSimUpdateSimRequestCallbackMethodEnum;
import org.openapis.openapi.models.shared.SimEnumStatusUpdateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSimRequest req = new UpdateSimRequest("tempora") {{
                requestBody = new UpdateSimUpdateSimRequest() {{
                    accountSid = "facilis";
                    callbackMethod = UpdateSimUpdateSimRequestCallbackMethodEnum.PUT;
                    callbackUrl = "http://which-honor.biz";
                    fleet = "eligendi";
                    status = SimEnumStatusUpdateEnum.ACTIVE;
                    uniqueName = "aliquid";
                }};;
            }};            

            UpdateSimResponse res = sdk.sdk.updateSim(req, new UpdateSimSecurity("provident", "necessitatibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.supersimV1Sim != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
