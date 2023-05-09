# authConfig

## Overview

Everything about Otoroshi global auth. module config

### Available Operations

* [createGlobalAuthModule](#createglobalauthmodule) - Create one global auth. module config
* [deleteGlobalAuthModule](#deleteglobalauthmodule) - Delete one global auth. module config
* [findAllGlobalAuthModules](#findallglobalauthmodules) - Get all global auth. module configs
* [findGlobalAuthModuleById](#findglobalauthmodulebyid) - Get one global auth. module configs
* [patchGlobalAuthModule](#patchglobalauthmodule) - Update one global auth. module config
* [updateGlobalAuthModule](#updateglobalauthmodule) - Update one global auth. module config

## createGlobalAuthModule

Create one global auth. module config

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGlobalAuthModuleResponse;
import org.openapis.openapi.models.operations.CreateGlobalAuthModuleSecurity;
import org.openapis.openapi.models.shared.ESAlgoSettings;
import org.openapis.openapi.models.shared.GenericOauth2ModuleConfig;
import org.openapis.openapi.models.shared.HSAlgoSettings;
import org.openapis.openapi.models.shared.InMemoryAuthModuleConfig;
import org.openapis.openapi.models.shared.InMemoryUser;
import org.openapis.openapi.models.shared.JWKSAlgoSettings;
import org.openapis.openapi.models.shared.LdapAuthModuleConfig;
import org.openapis.openapi.models.shared.RSAlgoSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new InMemoryAuthModuleConfig("a string value", "a string value", "a string value", "a string value", "a string value",                 new org.openapis.openapi.models.shared.InMemoryUser[]{{
                                add(new InMemoryUser("a string value",                 new java.util.HashMap<String, String>() {{
                                                    put("possimus", "aut");
                                                    put("quasi", "error");
                                                    put("temporibus", "laborum");
                                                }}, "a string value", "a string value") {{
                                    email = "a string value";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("enim", "odit");
                                        put("quo", "sequi");
                                        put("tenetur", "ipsam");
                                    }};
                                    name = "a string value";
                                    password = "a string value";
                                }}),
                                add(new InMemoryUser("a string value",                 new java.util.HashMap<String, String>() {{
                                                    put("nihil", "praesentium");
                                                    put("voluptatibus", "ipsa");
                                                    put("omnis", "voluptate");
                                                    put("cum", "perferendis");
                                                }}, "a string value", "a string value") {{
                                    email = "a string value";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("reiciendis", "voluptatibus");
                                    }};
                                    name = "a string value";
                                    password = "a string value";
                                }}),
                                add(new InMemoryUser("a string value",                 new java.util.HashMap<String, String>() {{
                                                    put("dicta", "corporis");
                                                    put("dolore", "iusto");
                                                    put("dicta", "harum");
                                                    put("enim", "accusamus");
                                                }}, "a string value", "a string value") {{
                                    email = "a string value";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("reprehenderit", "ut");
                                    }};
                                    name = "a string value";
                                    password = "a string value";
                                }}),
                            }}) {{
                desc = "a string value";
                id = "a string value";
                name = "a string value";
                sessionMaxAge = "a string value";
                type = "a string value";
                users = new org.openapis.openapi.models.shared.InMemoryUser[]{{
                    add(new InMemoryUser("a string value",                 new java.util.HashMap<String, String>() {{
                                        put("quis", "vitae");
                                    }}, "a string value", "a string value") {{
                        email = "a string value";
                        metadata = new java.util.HashMap<String, String>() {{
                            put("mollitia", "occaecati");
                            put("numquam", "commodi");
                            put("quam", "molestiae");
                            put("velit", "error");
                        }};
                        name = "a string value";
                        password = "a string value";
                    }}),
                }};
            }}            

            CreateGlobalAuthModuleResponse res = sdk.authConfig.createGlobalAuthModule(req, new CreateGlobalAuthModuleSecurity("commodi", "repudiandae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.createGlobalAuthModule200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGlobalAuthModule

Delete one global auth. module config

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGlobalAuthModuleRequest;
import org.openapis.openapi.models.operations.DeleteGlobalAuthModuleResponse;
import org.openapis.openapi.models.operations.DeleteGlobalAuthModuleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteGlobalAuthModuleRequest req = new DeleteGlobalAuthModuleRequest("quae");            

            DeleteGlobalAuthModuleResponse res = sdk.authConfig.deleteGlobalAuthModule(req, new DeleteGlobalAuthModuleSecurity("ipsum", "quidem") {{
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

## findAllGlobalAuthModules

Get all global auth. module configs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindAllGlobalAuthModulesResponse;
import org.openapis.openapi.models.operations.FindAllGlobalAuthModulesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindAllGlobalAuthModulesResponse res = sdk.authConfig.findAllGlobalAuthModules(new FindAllGlobalAuthModulesSecurity("molestias", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.findAllGlobalAuthModules200ApplicationJSONOneoves != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findGlobalAuthModuleById

Get one global auth. module configs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindGlobalAuthModuleByIdRequest;
import org.openapis.openapi.models.operations.FindGlobalAuthModuleByIdResponse;
import org.openapis.openapi.models.operations.FindGlobalAuthModuleByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindGlobalAuthModuleByIdRequest req = new FindGlobalAuthModuleByIdRequest("pariatur");            

            FindGlobalAuthModuleByIdResponse res = sdk.authConfig.findGlobalAuthModuleById(req, new FindGlobalAuthModuleByIdSecurity("modi", "praesentium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.findGlobalAuthModuleById200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchGlobalAuthModule

Update one global auth. module config

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchGlobalAuthModuleRequest;
import org.openapis.openapi.models.operations.PatchGlobalAuthModuleResponse;
import org.openapis.openapi.models.operations.PatchGlobalAuthModuleSecurity;
import org.openapis.openapi.models.shared.Patch;
import org.openapis.openapi.models.shared.PatchOpEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchGlobalAuthModuleRequest req = new PatchGlobalAuthModuleRequest("rem") {{
                requestBody = new org.openapis.openapi.models.shared.Patch[]{{
                    add(new Patch(PatchOpEnum.REMOVE, "a string value") {{
                        op = PatchOpEnum.ADD;
                        path = "a string value";
                        value = "repudiandae";
                    }}),
                    add(new Patch(PatchOpEnum.REPLACE, "a string value") {{
                        op = PatchOpEnum.ADD;
                        path = "a string value";
                        value = "itaque";
                    }}),
                    add(new Patch(PatchOpEnum.COPY, "a string value") {{
                        op = PatchOpEnum.REPLACE;
                        path = "a string value";
                        value = "consequatur";
                    }}),
                    add(new Patch(PatchOpEnum.COPY, "a string value") {{
                        op = PatchOpEnum.TEST;
                        path = "a string value";
                        value = "explicabo";
                    }}),
                }};
            }};            

            PatchGlobalAuthModuleResponse res = sdk.authConfig.patchGlobalAuthModule(req, new PatchGlobalAuthModuleSecurity("distinctio", "quibusdam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.patchGlobalAuthModule200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGlobalAuthModule

Update one global auth. module config

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGlobalAuthModuleRequest;
import org.openapis.openapi.models.operations.UpdateGlobalAuthModuleResponse;
import org.openapis.openapi.models.operations.UpdateGlobalAuthModuleSecurity;
import org.openapis.openapi.models.shared.ESAlgoSettings;
import org.openapis.openapi.models.shared.GenericOauth2ModuleConfig;
import org.openapis.openapi.models.shared.HSAlgoSettings;
import org.openapis.openapi.models.shared.InMemoryAuthModuleConfig;
import org.openapis.openapi.models.shared.InMemoryUser;
import org.openapis.openapi.models.shared.JWKSAlgoSettings;
import org.openapis.openapi.models.shared.LdapAuthModuleConfig;
import org.openapis.openapi.models.shared.RSAlgoSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateGlobalAuthModuleRequest req = new UpdateGlobalAuthModuleRequest("labore") {{
                requestBody = new LdapAuthModuleConfig("a string value", "a string value", "a string value", "a string value", "a string value", "a string value", "a string value", "a string value", "a string value", "a string value", "a string value", 123123, "a string value", "a string value") {{
                    otoroshiDataField = "a string value";
                }};;
            }};            

            UpdateGlobalAuthModuleResponse res = sdk.authConfig.updateGlobalAuthModule(req, new UpdateGlobalAuthModuleSecurity("qui", "aliquid") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.updateGlobalAuthModule200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
