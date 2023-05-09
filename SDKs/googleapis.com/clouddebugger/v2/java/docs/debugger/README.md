# debugger

### Available Operations

* [clouddebuggerDebuggerDebuggeesBreakpointsDelete](#clouddebuggerdebuggerdebuggeesbreakpointsdelete) - Deletes the breakpoint from the debuggee.
* [clouddebuggerDebuggerDebuggeesBreakpointsGet](#clouddebuggerdebuggerdebuggeesbreakpointsget) - Gets breakpoint information.
* [clouddebuggerDebuggerDebuggeesBreakpointsList](#clouddebuggerdebuggerdebuggeesbreakpointslist) - Lists all breakpoints for the debuggee.
* [clouddebuggerDebuggerDebuggeesBreakpointsSet](#clouddebuggerdebuggerdebuggeesbreakpointsset) - Sets the breakpoint to the debuggee.
* [clouddebuggerDebuggerDebuggeesList](#clouddebuggerdebuggerdebuggeeslist) - Lists all the debuggees that the user has access to.

## clouddebuggerDebuggerDebuggeesBreakpointsDelete

Deletes the breakpoint from the debuggee.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteRequest;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteResponse;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurity;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddebuggerDebuggerDebuggeesBreakpointsDeleteRequest req = new ClouddebuggerDebuggerDebuggeesBreakpointsDeleteRequest("maiores", "doloribus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eligendi";
                alt = AltEnum.MEDIA;
                callback = "alias";
                clientVersion = "officia";
                fields = "tempora";
                key = "ipsam";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "vel";
                uploadProtocol = "possimus";
            }};            

            ClouddebuggerDebuggerDebuggeesBreakpointsDeleteResponse res = sdk.debugger.clouddebuggerDebuggerDebuggeesBreakpointsDelete(req, new ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurity() {{
                option1 = new ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption1("magnam", "ratione") {{
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

## clouddebuggerDebuggerDebuggeesBreakpointsGet

Gets breakpoint information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetResponse;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurity;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption1;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest req = new ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest("ex", "laudantium") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "quasi";
                clientVersion = "ex";
                fields = "nulla";
                key = "excepturi";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "sapiente";
                uploadProtocol = "quisquam";
            }};            

            ClouddebuggerDebuggerDebuggeesBreakpointsGetResponse res = sdk.debugger.clouddebuggerDebuggerDebuggeesBreakpointsGet(req, new ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurity() {{
                option1 = new ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption1("saepe", "ea") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.getBreakpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clouddebuggerDebuggerDebuggeesBreakpointsList

Lists all breakpoints for the debuggee.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnum;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesBreakpointsListRequest;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesBreakpointsListResponse;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesBreakpointsListSecurity;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption1;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddebuggerDebuggerDebuggeesBreakpointsListRequest req = new ClouddebuggerDebuggerDebuggeesBreakpointsListRequest("impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veniam";
                actionValue = ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnum.CAPTURE;
                alt = AltEnum.JSON;
                callback = "magnam";
                clientVersion = "ea";
                fields = "quo";
                includeAllUsers = false;
                includeInactive = false;
                key = "consectetur";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "aspernatur";
                stripResults = false;
                uploadType = "minima";
                uploadProtocol = "eaque";
                waitToken = "a";
            }};            

            ClouddebuggerDebuggerDebuggeesBreakpointsListResponse res = sdk.debugger.clouddebuggerDebuggerDebuggeesBreakpointsList(req, new ClouddebuggerDebuggerDebuggeesBreakpointsListSecurity() {{
                option1 = new ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption1("libero", "aut") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listBreakpointsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clouddebuggerDebuggerDebuggeesBreakpointsSet

Sets the breakpoint to the debuggee.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Breakpoint;
import org.openapis.openapi.models.shared.BreakpointActionEnum;
import org.openapis.openapi.models.shared.BreakpointLogLevelEnum;
import org.openapis.openapi.models.shared.BreakpointStateEnum;
import org.openapis.openapi.models.shared.FormatMessage;
import org.openapis.openapi.models.shared.SourceLocation;
import org.openapis.openapi.models.shared.StackFrame;
import org.openapis.openapi.models.shared.StatusMessage;
import org.openapis.openapi.models.shared.StatusMessageRefersToEnum;
import org.openapis.openapi.models.shared.Variable;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest req = new ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest("aut") {{
                dollarXgafv = XgafvEnum.TWO;
                breakpoint = new Breakpoint() {{
                    action = BreakpointActionEnum.LOG;
                    canaryExpireTime = "aliquam";
                    condition = "fugit";
                    createTime = "accusamus";
                    evaluatedExpressions = new org.openapis.openapi.models.shared.Variable[]{{
                        add(new Variable() {{
                            members = new org.openapis.openapi.models.shared.Variable[]{{
                                add(new Variable() {{}}),
                                add(new Variable() {{}}),
                            }};
                            name = "Sonya Osinski";
                            status = new StatusMessage() {{
                                description = new FormatMessage() {{
                                    format = "eum";
                                    parameters = new String[]{{
                                        add("nobis"),
                                        add("quas"),
                                    }};
                                }};
                                isError = false;
                                refersTo = StatusMessageRefersToEnum.VARIABLE_NAME;
                            }};
                            type = "nulla";
                            value = "voluptas";
                            varTableIndex = 727044;
                        }}),
                    }};
                    expressions = new String[]{{
                        add("tempora"),
                    }};
                    finalTime = "numquam";
                    id = "29074747-78a7-4bd4-a6d2-8c10ab3cdca4";
                    isFinalState = false;
                    labels = new java.util.HashMap<String, String>() {{
                        put("voluptas", "ab");
                    }};
                    location = new SourceLocation() {{
                        column = 587600;
                        line = 9688;
                        path = "tempora";
                    }};;
                    logLevel = BreakpointLogLevelEnum.ERROR;
                    logMessageFormat = "ipsam";
                    stackFrames = new org.openapis.openapi.models.shared.StackFrame[]{{
                        add(new StackFrame() {{
                            arguments = new org.openapis.openapi.models.shared.Variable[]{{
                                add(new Variable() {{
                                    members = new org.openapis.openapi.models.shared.Variable[]{{
                                        add(new Variable() {{}}),
                                        add(new Variable() {{}}),
                                        add(new Variable() {{}}),
                                        add(new Variable() {{}}),
                                    }};
                                    name = "Sophie Bayer";
                                    status = new StatusMessage() {{
                                        description = new FormatMessage() {{
                                            format = "dignissimos";
                                            parameters = new String[]{{
                                                add("nihil"),
                                            }};
                                        }};
                                        isError = false;
                                        refersTo = StatusMessageRefersToEnum.BREAKPOINT_AGE;
                                    }};
                                    type = "accusamus";
                                    value = "aliquam";
                                    varTableIndex = 488410;
                                }}),
                            }};
                            function = "occaecati";
                            locals = new org.openapis.openapi.models.shared.Variable[]{{
                                add(new Variable() {{
                                    members = new org.openapis.openapi.models.shared.Variable[]{{
                                        add(new Variable() {{}}),
                                        add(new Variable() {{}}),
                                        add(new Variable() {{}}),
                                        add(new Variable() {{}}),
                                    }};
                                    name = "Miss Rosie Krajcik";
                                    status = new StatusMessage() {{
                                        description = new FormatMessage() {{
                                            format = "quas";
                                            parameters = new String[]{{
                                                add("consequuntur"),
                                                add("deleniti"),
                                                add("fugit"),
                                            }};
                                        }};
                                        isError = false;
                                        refersTo = StatusMessageRefersToEnum.BREAKPOINT_CANARY_FAILED;
                                    }};
                                    type = "mollitia";
                                    value = "incidunt";
                                    varTableIndex = 539224;
                                }}),
                                add(new Variable() {{
                                    members = new org.openapis.openapi.models.shared.Variable[]{{
                                        add(new Variable() {{}}),
                                    }};
                                    name = "Sue Corkery";
                                    status = new StatusMessage() {{
                                        description = new FormatMessage() {{
                                            format = "ratione";
                                            parameters = new String[]{{
                                                add("saepe"),
                                            }};
                                        }};
                                        isError = false;
                                        refersTo = StatusMessageRefersToEnum.BREAKPOINT_AGE;
                                    }};
                                    type = "atque";
                                    value = "et";
                                    varTableIndex = 456911;
                                }}),
                            }};
                            location = new SourceLocation() {{
                                column = 910545;
                                line = 882042;
                                path = "veritatis";
                            }};
                        }}),
                    }};
                    state = BreakpointStateEnum.STATE_CANARY_ACTIVE;
                    status = new StatusMessage() {{
                        description = new FormatMessage() {{
                            format = "quod";
                            parameters = new String[]{{
                                add("vero"),
                                add("aliquid"),
                                add("quasi"),
                            }};
                        }};;
                        isError = false;
                        refersTo = StatusMessageRefersToEnum.VARIABLE_VALUE;
                    }};;
                    userEmail = "vel";
                    variableTable = new org.openapis.openapi.models.shared.Variable[]{{
                        add(new Variable() {{
                            members = new org.openapis.openapi.models.shared.Variable[]{{
                                add(new Variable() {{}}),
                                add(new Variable() {{}}),
                            }};
                            name = "Tracy Harber";
                            status = new StatusMessage() {{
                                description = new FormatMessage() {{
                                    format = "sit";
                                    parameters = new String[]{{
                                        add("tempore"),
                                        add("adipisci"),
                                        add("cumque"),
                                    }};
                                }};
                                isError = false;
                                refersTo = StatusMessageRefersToEnum.BREAKPOINT_SOURCE_LOCATION;
                            }};
                            type = "consequatur";
                            value = "minus";
                            varTableIndex = 308286;
                        }}),
                        add(new Variable() {{
                            members = new org.openapis.openapi.models.shared.Variable[]{{
                                add(new Variable() {{}}),
                                add(new Variable() {{}}),
                                add(new Variable() {{}}),
                                add(new Variable() {{}}),
                            }};
                            name = "Joy Labadie";
                            status = new StatusMessage() {{
                                description = new FormatMessage() {{
                                    format = "nulla";
                                    parameters = new String[]{{
                                        add("esse"),
                                        add("quasi"),
                                        add("a"),
                                    }};
                                }};
                                isError = false;
                                refersTo = StatusMessageRefersToEnum.BREAKPOINT_AGE;
                            }};
                            type = "sint";
                            value = "pariatur";
                            varTableIndex = 820767;
                        }}),
                        add(new Variable() {{
                            members = new org.openapis.openapi.models.shared.Variable[]{{
                                add(new Variable() {{}}),
                            }};
                            name = "Mr. Marlon Schultz V";
                            status = new StatusMessage() {{
                                description = new FormatMessage() {{
                                    format = "culpa";
                                    parameters = new String[]{{
                                        add("tenetur"),
                                        add("quae"),
                                    }};
                                }};
                                isError = false;
                                refersTo = StatusMessageRefersToEnum.VARIABLE_VALUE;
                            }};
                            type = "vel";
                            value = "in";
                            varTableIndex = 258684;
                        }}),
                    }};
                }};;
                accessToken = "libero";
                alt = AltEnum.PROTO;
                callback = "soluta";
                canaryOption = ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum.CANARY_OPTION_UNSPECIFIED;
                clientVersion = "aliquam";
                fields = "sapiente";
                key = "dicta";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                uploadType = "ullam";
                uploadProtocol = "nisi";
            }};            

            ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse res = sdk.debugger.clouddebuggerDebuggerDebuggeesBreakpointsSet(req, new ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity() {{
                option1 = new ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1("aut", "voluptatum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.setBreakpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clouddebuggerDebuggerDebuggeesList

Lists all the debuggees that the user has access to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesListRequest;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesListResponse;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesListSecurity;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesListSecurityOption1;
import org.openapis.openapi.models.operations.ClouddebuggerDebuggerDebuggeesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddebuggerDebuggerDebuggeesListRequest req = new ClouddebuggerDebuggerDebuggeesListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "deleniti";
                clientVersion = "itaque";
                fields = "dolorum";
                includeInactive = false;
                key = "architecto";
                oauthToken = "omnis";
                prettyPrint = false;
                project = "tenetur";
                quotaUser = "quasi";
                uploadType = "at";
                uploadProtocol = "et";
            }};            

            ClouddebuggerDebuggerDebuggeesListResponse res = sdk.debugger.clouddebuggerDebuggerDebuggeesList(req, new ClouddebuggerDebuggerDebuggeesListSecurity() {{
                option1 = new ClouddebuggerDebuggerDebuggeesListSecurityOption1("voluptate", "ipsa") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listDebuggeesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
