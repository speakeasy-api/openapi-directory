# scripts

## Overview

Everything about Otoroshi request transformer scripts

### Available Operations

* [compileScript](#compilescript) - Compile a script
* [createScript](#createscript) - Create a new script
* [deleteScript](#deletescript) - Delete a script
* [findAllScripts](#findallscripts) - Get all scripts
* [findScriptById](#findscriptbyid) - Get a script
* [patchScript](#patchscript) - Update a script with a diff
* [updateScript](#updatescript) - Update a script

## compileScript

Compile a script

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CompileScriptResponse;
import org.openapis.openapi.models.operations.CompileScriptSecurity;
import org.openapis.openapi.models.shared.Script;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.Script req = new Script(                new java.util.HashMap<String, String>() {{
                                put("nobis", "necessitatibus");
                            }},                 new java.util.HashMap<String, String>() {{
                                put("dicta", "vel");
                            }}, "a string value", "a string value");            

            CompileScriptResponse res = sdk.scripts.compileScript(req, new CompileScriptSecurity("perspiciatis", "debitis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.scriptCompilationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createScript

Create a new script

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateScriptResponse;
import org.openapis.openapi.models.operations.CreateScriptSecurity;
import org.openapis.openapi.models.shared.Script;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.Script req = new Script(                new java.util.HashMap<String, String>() {{
                                put("architecto", "accusantium");
                                put("perferendis", "veritatis");
                            }},                 new java.util.HashMap<String, String>() {{
                                put("cumque", "iure");
                                put("quibusdam", "quod");
                                put("nemo", "recusandae");
                            }}, "a string value", "a string value");            

            CreateScriptResponse res = sdk.scripts.createScript(req, new CreateScriptSecurity("velit", "magnam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.script != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteScript

Delete a script

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteScriptRequest;
import org.openapis.openapi.models.operations.DeleteScriptResponse;
import org.openapis.openapi.models.operations.DeleteScriptSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteScriptRequest req = new DeleteScriptRequest("dignissimos");            

            DeleteScriptResponse res = sdk.scripts.deleteScript(req, new DeleteScriptSecurity("laboriosam", "sed") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.deleted != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findAllScripts

Get all scripts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindAllScriptsResponse;
import org.openapis.openapi.models.operations.FindAllScriptsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindAllScriptsResponse res = sdk.scripts.findAllScripts(new FindAllScriptsSecurity("odio", "natus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.scripts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findScriptById

Get a script

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindScriptByIdRequest;
import org.openapis.openapi.models.operations.FindScriptByIdResponse;
import org.openapis.openapi.models.operations.FindScriptByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindScriptByIdRequest req = new FindScriptByIdRequest("provident");            

            FindScriptByIdResponse res = sdk.scripts.findScriptById(req, new FindScriptByIdSecurity("cum", "doloribus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.script != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchScript

Update a script with a diff

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchScriptRequest;
import org.openapis.openapi.models.operations.PatchScriptResponse;
import org.openapis.openapi.models.operations.PatchScriptSecurity;
import org.openapis.openapi.models.shared.Patch;
import org.openapis.openapi.models.shared.PatchOpEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchScriptRequest req = new PatchScriptRequest("facilis") {{
                requestBody = new org.openapis.openapi.models.shared.Patch[]{{
                    add(new Patch(PatchOpEnum.COPY, "a string value") {{
                        op = PatchOpEnum.TEST;
                        path = "a string value";
                        value = "laboriosam";
                    }}),
                    add(new Patch(PatchOpEnum.TEST, "a string value") {{
                        op = PatchOpEnum.REPLACE;
                        path = "a string value";
                        value = "perspiciatis";
                    }}),
                    add(new Patch(PatchOpEnum.COPY, "a string value") {{
                        op = PatchOpEnum.COPY;
                        path = "a string value";
                        value = "aspernatur";
                    }}),
                }};
            }};            

            PatchScriptResponse res = sdk.scripts.patchScript(req, new PatchScriptSecurity("nam", "incidunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.script != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateScript

Update a script

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateScriptRequest;
import org.openapis.openapi.models.operations.UpdateScriptResponse;
import org.openapis.openapi.models.operations.UpdateScriptSecurity;
import org.openapis.openapi.models.shared.Script;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateScriptRequest req = new UpdateScriptRequest("recusandae") {{
                script = new Script(                new java.util.HashMap<String, String>() {{
                                    put("id", "saepe");
                                    put("autem", "quo");
                                    put("nesciunt", "illum");
                                    put("nemo", "illum");
                                }},                 new java.util.HashMap<String, String>() {{
                                    put("non", "mollitia");
                                    put("assumenda", "recusandae");
                                    put("distinctio", "pariatur");
                                }}, "a string value", "a string value");;
            }};            

            UpdateScriptResponse res = sdk.scripts.updateScript(req, new UpdateScriptSecurity("ad", "facere") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.script != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
