# commands

## Overview

Sending commands to devices and stored command management

### Available Operations

* [deleteCommandsId](#deletecommandsid) - Delete a Saved Command
* [getCommands](#getcommands) - Fetch a list of Saved Commands
* [getCommandsSend](#getcommandssend) - Fetch a list of Saved Commands supported by Device at the moment
* [getCommandsTypes](#getcommandstypes) - Fetch a list of available Commands for the Device or all possible Commands if Device ommited
* [postCommands](#postcommands) - Create a Saved Command
* [postCommandsSend](#postcommandssend) - Dispatch commands to device
* [putCommandsId](#putcommandsid) - Update a Saved Command

## deleteCommandsId

Delete a Saved Command

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCommandsIdRequest;
import org.openapis.openapi.models.operations.DeleteCommandsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis", "ad") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteCommandsIdRequest req = new DeleteCommandsIdRequest(617636L);            

            DeleteCommandsIdResponse res = sdk.commands.deleteCommandsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommands

Without params, it returns a list of Saved Commands the user has access to

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommandsRequest;
import org.openapis.openapi.models.operations.GetCommandsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed", "iste") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetCommandsRequest req = new GetCommandsRequest() {{
                all = false;
                deviceId = 222321L;
                groupId = 616934L;
                refresh = false;
                userId = 386489L;
            }};            

            GetCommandsResponse res = sdk.commands.getCommands(req);

            if (res.commands != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommandsSend

Return a list of saved commands linked to Device and its groups, filtered by current Device protocol support

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommandsSendRequest;
import org.openapis.openapi.models.operations.GetCommandsSendResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic", "saepe") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetCommandsSendRequest req = new GetCommandsSendRequest() {{
                deviceId = 681820L;
            }};            

            GetCommandsSendResponse res = sdk.commands.getCommandsSend(req);

            if (res.commands != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommandsTypes

Fetch a list of available Commands for the Device or all possible Commands if Device ommited

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommandsTypesRequest;
import org.openapis.openapi.models.operations.GetCommandsTypesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in", "corporis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetCommandsTypesRequest req = new GetCommandsTypesRequest() {{
                deviceId = 613064L;
                protocol = "iure";
                textChannel = false;
            }};            

            GetCommandsTypesResponse res = sdk.commands.getCommandsTypes(req);

            if (res.commandTypes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCommands

Create a Saved Command

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCommandsResponse;
import org.openapis.openapi.models.shared.Command;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe", "quidem") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.Command req = new Command() {{
                attributes = new java.util.HashMap<String, Object>() {{
                    put("ipsa", "reiciendis");
                }};
                description = "est";
                deviceId = 653140L;
                id = 670638L;
                type = "dolores";
            }};            

            PostCommandsResponse res = sdk.commands.postCommands(req);

            if (res.command != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCommandsSend

Dispatch a new command or Saved Command if _body.id_ set

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCommandsSendResponse;
import org.openapis.openapi.models.shared.Command;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem", "corporis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.Command req = new Command() {{
                attributes = new java.util.HashMap<String, Object>() {{
                    put("nobis", "enim");
                }};
                description = "omnis";
                deviceId = 363711L;
                id = 325047L;
                type = "excepturi";
            }};            

            PostCommandsSendResponse res = sdk.commands.postCommandsSend(req);

            if (res.command != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putCommandsId

Update a Saved Command

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCommandsIdRequest;
import org.openapis.openapi.models.operations.PutCommandsIdResponse;
import org.openapis.openapi.models.shared.Command;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium", "iure") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PutCommandsIdRequest req = new PutCommandsIdRequest(                new Command() {{
                                attributes = new java.util.HashMap<String, Object>() {{
                                    put("doloribus", "sapiente");
                                    put("architecto", "mollitia");
                                    put("dolorem", "culpa");
                                }};
                                description = "consequuntur";
                                deviceId = 995300L;
                                id = 653108L;
                                type = "occaecati";
                            }};, 253291L);            

            PutCommandsIdResponse res = sdk.commands.putCommandsId(req);

            if (res.command != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
