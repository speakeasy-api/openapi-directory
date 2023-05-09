# enterprises

### Available Operations

* [smartdevicemanagementEnterprisesDevicesExecuteCommand](#smartdevicemanagemententerprisesdevicesexecutecommand) - Executes a command to device managed by the enterprise.
* [smartdevicemanagementEnterprisesDevicesList](#smartdevicemanagemententerprisesdeviceslist) - Lists devices managed by the enterprise.
* [smartdevicemanagementEnterprisesStructuresList](#smartdevicemanagemententerprisesstructureslist) - Lists structures managed by the enterprise.
* [smartdevicemanagementEnterprisesStructuresRoomsGet](#smartdevicemanagemententerprisesstructuresroomsget) - Gets a room managed by the enterprise.
* [smartdevicemanagementEnterprisesStructuresRoomsList](#smartdevicemanagemententerprisesstructuresroomslist) - Lists rooms managed by the enterprise.

## smartdevicemanagementEnterprisesDevicesExecuteCommand

Executes a command to device managed by the enterprise.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest;
import org.openapis.openapi.models.operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse;
import org.openapis.openapi.models.operations.SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest req = new SmartdevicemanagementEnterprisesDevicesExecuteCommandRequest("iusto") {{
                dollarXgafv = XgafvEnum.TWO;
                googleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest = new GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest() {{
                    command = "nisi";
                    params = new java.util.HashMap<String, Object>() {{
                        put("temporibus", "ab");
                        put("quis", "veritatis");
                        put("deserunt", "perferendis");
                        put("ipsam", "repellendus");
                    }};
                }};;
                accessToken = "sapiente";
                alt = AltEnum.PROTO;
                callback = "odit";
                fields = "at";
                key = "at";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "quod";
                uploadProtocol = "quod";
            }};            

            SmartdevicemanagementEnterprisesDevicesExecuteCommandResponse res = sdk.enterprises.smartdevicemanagementEnterprisesDevicesExecuteCommand(req, new SmartdevicemanagementEnterprisesDevicesExecuteCommandSecurity("esse", "totam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## smartdevicemanagementEnterprisesDevicesList

Lists devices managed by the enterprise.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SmartdevicemanagementEnterprisesDevicesListRequest;
import org.openapis.openapi.models.operations.SmartdevicemanagementEnterprisesDevicesListResponse;
import org.openapis.openapi.models.operations.SmartdevicemanagementEnterprisesDevicesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SmartdevicemanagementEnterprisesDevicesListRequest req = new SmartdevicemanagementEnterprisesDevicesListRequest("porro") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dicta";
                alt = AltEnum.PROTO;
                callback = "officia";
                fields = "occaecati";
                filter = "fugit";
                key = "deleniti";
                oauthToken = "hic";
                pageSize = 758616L;
                pageToken = "totam";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "commodi";
                uploadProtocol = "molestiae";
            }};            

            SmartdevicemanagementEnterprisesDevicesListResponse res = sdk.enterprises.smartdevicemanagementEnterprisesDevicesList(req, new SmartdevicemanagementEnterprisesDevicesListSecurity("modi", "qui") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleHomeEnterpriseSdmV1ListDevicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## smartdevicemanagementEnterprisesStructuresList

Lists structures managed by the enterprise.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SmartdevicemanagementEnterprisesStructuresListRequest;
import org.openapis.openapi.models.operations.SmartdevicemanagementEnterprisesStructuresListResponse;
import org.openapis.openapi.models.operations.SmartdevicemanagementEnterprisesStructuresListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SmartdevicemanagementEnterprisesStructuresListRequest req = new SmartdevicemanagementEnterprisesStructuresListRequest("impedit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "esse";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "aspernatur";
                filter = "perferendis";
                key = "ad";
                oauthToken = "natus";
                pageSize = 149675L;
                pageToken = "iste";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "natus";
                uploadProtocol = "laboriosam";
            }};            

            SmartdevicemanagementEnterprisesStructuresListResponse res = sdk.enterprises.smartdevicemanagementEnterprisesStructuresList(req, new SmartdevicemanagementEnterprisesStructuresListSecurity("hic", "saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleHomeEnterpriseSdmV1ListStructuresResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## smartdevicemanagementEnterprisesStructuresRoomsGet

Gets a room managed by the enterprise.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SmartdevicemanagementEnterprisesStructuresRoomsGetRequest;
import org.openapis.openapi.models.operations.SmartdevicemanagementEnterprisesStructuresRoomsGetResponse;
import org.openapis.openapi.models.operations.SmartdevicemanagementEnterprisesStructuresRoomsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SmartdevicemanagementEnterprisesStructuresRoomsGetRequest req = new SmartdevicemanagementEnterprisesStructuresRoomsGetRequest("fuga") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corporis";
                alt = AltEnum.MEDIA;
                callback = "iure";
                fields = "saepe";
                key = "quidem";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "reiciendis";
                uploadProtocol = "est";
            }};            

            SmartdevicemanagementEnterprisesStructuresRoomsGetResponse res = sdk.enterprises.smartdevicemanagementEnterprisesStructuresRoomsGet(req, new SmartdevicemanagementEnterprisesStructuresRoomsGetSecurity("mollitia", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleHomeEnterpriseSdmV1Room != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## smartdevicemanagementEnterprisesStructuresRoomsList

Lists rooms managed by the enterprise.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SmartdevicemanagementEnterprisesStructuresRoomsListRequest;
import org.openapis.openapi.models.operations.SmartdevicemanagementEnterprisesStructuresRoomsListResponse;
import org.openapis.openapi.models.operations.SmartdevicemanagementEnterprisesStructuresRoomsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SmartdevicemanagementEnterprisesStructuresRoomsListRequest req = new SmartdevicemanagementEnterprisesStructuresRoomsListRequest("dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "nobis";
                fields = "enim";
                key = "omnis";
                oauthToken = "nemo";
                pageSize = 325047L;
                pageToken = "excepturi";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "iure";
                uploadProtocol = "culpa";
            }};            

            SmartdevicemanagementEnterprisesStructuresRoomsListResponse res = sdk.enterprises.smartdevicemanagementEnterprisesStructuresRoomsList(req, new SmartdevicemanagementEnterprisesStructuresRoomsListSecurity("doloribus", "sapiente") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleHomeEnterpriseSdmV1ListRoomsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
