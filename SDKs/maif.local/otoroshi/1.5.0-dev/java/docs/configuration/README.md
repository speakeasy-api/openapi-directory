# configuration

## Overview

Everything about Otoroshi global configuration

### Available Operations

* [globalConfig](#globalconfig) - Get the full configuration of Otoroshi
* [patchGlobalConfig](#patchglobalconfig) - Update the global configuration with a diff
* [putGlobalConfig](#putglobalconfig) - Update the global configuration

## globalConfig

Get the full configuration of Otoroshi

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GlobalConfigResponse;
import org.openapis.openapi.models.operations.GlobalConfigSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GlobalConfigResponse res = sdk.configuration.globalConfig(new GlobalConfigSecurity("a", "dolorum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.globalConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchGlobalConfig

Update the global configuration with a diff

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchGlobalConfigResponse;
import org.openapis.openapi.models.operations.PatchGlobalConfigSecurity;
import org.openapis.openapi.models.shared.Patch;
import org.openapis.openapi.models.shared.PatchOpEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.Patch[]{{
                add(new Patch(PatchOpEnum.TEST, "a string value") {{
                    op = PatchOpEnum.REMOVE;
                    path = "a string value";
                    value = "illum";
                }}),
                add(new Patch(PatchOpEnum.REPLACE, "a string value") {{
                    op = PatchOpEnum.COPY;
                    path = "a string value";
                    value = "dicta";
                }}),
            }}            

            PatchGlobalConfigResponse res = sdk.configuration.patchGlobalConfig(req, new PatchGlobalConfigSecurity("cumque", "facere") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.globalConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putGlobalConfig

Update the global configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutGlobalConfigResponse;
import org.openapis.openapi.models.operations.PutGlobalConfigSecurity;
import org.openapis.openapi.models.shared.Auth0Config;
import org.openapis.openapi.models.shared.CleverSettings;
import org.openapis.openapi.models.shared.ElasticConfig;
import org.openapis.openapi.models.shared.GlobalConfig;
import org.openapis.openapi.models.shared.IpFiltering;
import org.openapis.openapi.models.shared.MailerSettings;
import org.openapis.openapi.models.shared.Webhook;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.GlobalConfig req = new GlobalConfig(                new String[]{{
                                add("admin@otoroshi.io"),
                                add("admin@otoroshi.io"),
                            }},                 new org.openapis.openapi.models.shared.Webhook[]{{
                                add(new Webhook(                new java.util.HashMap<String, String>() {{
                                                    put("provident", "nam");
                                                    put("id", "blanditiis");
                                                    put("deleniti", "sapiente");
                                                }}, "http://www.google.com") {{
                                    headers = new java.util.HashMap<String, String>() {{
                                        put("accusamus", "non");
                                        put("occaecati", "enim");
                                        put("accusamus", "delectus");
                                    }};
                                    url = "http://www.google.com";
                                }}),
                                add(new Webhook(                new java.util.HashMap<String, String>() {{
                                                    put("natus", "omnis");
                                                    put("molestiae", "perferendis");
                                                }}, "http://www.google.com") {{
                                    headers = new java.util.HashMap<String, String>() {{
                                        put("deserunt", "nisi");
                                    }};
                                    url = "http://www.google.com";
                                }}),
                            }},                 new org.openapis.openapi.models.shared.Webhook[]{{
                                add(new Webhook(                new java.util.HashMap<String, String>() {{
                                                    put("natus", "nobis");
                                                    put("eum", "vero");
                                                }}, "http://www.google.com") {{
                                    headers = new java.util.HashMap<String, String>() {{
                                        put("distinctio", "id");
                                        put("labore", "labore");
                                    }};
                                    url = "http://www.google.com";
                                }}),
                                add(new Webhook(                new java.util.HashMap<String, String>() {{
                                                    put("excepturi", "ullam");
                                                }}, "http://www.google.com") {{
                                    headers = new java.util.HashMap<String, String>() {{
                                        put("architecto", "magnam");
                                    }};
                                    url = "http://www.google.com";
                                }}),
                            }}, true, true,                 new String[]{{
                                add("192.192.192.192"),
                                add("192.192.192.192"),
                                add("192.192.192.192"),
                            }},                 new IpFiltering(                new String[]{{
                                                add("192.192.192.192"),
                                                add("192.192.192.192"),
                                                add("192.192.192.192"),
                                            }},                 new String[]{{
                                                add("192.192.192.192"),
                                                add("192.192.192.192"),
                                                add("192.192.192.192"),
                                            }});, true, 123L, 123L, true, 123L, true, true) {{
                backofficeAuth0Config = new Auth0Config("a string value", "a string value", "a string value", "a string value");;
                cleverSettings = new CleverSettings("a string value", "a string value", "a string value", "a string value", "a string value");;
                elasticReadsConfig = new ElasticConfig("a string value",                 new java.util.HashMap<String, String>() {{
                                    put("mollitia", "reiciendis");
                                }}, "a string value", "a string value", "a string value", "a string value");;
                elasticWritesConfigs = new org.openapis.openapi.models.shared.ElasticConfig[]{{
                    add(new ElasticConfig("a string value",                 new java.util.HashMap<String, String>() {{
                                        put("quasi", "iure");
                                        put("doloribus", "debitis");
                                    }}, "a string value", "a string value", "a string value", "a string value") {{
                        clusterUri = "a string value";
                        headers = new java.util.HashMap<String, String>() {{
                            put("eum", "dolor");
                            put("necessitatibus", "odit");
                        }};
                        index = "a string value";
                        password = "a string value";
                        type = "a string value";
                        user = "a string value";
                    }}),
                    add(new ElasticConfig("a string value",                 new java.util.HashMap<String, String>() {{
                                        put("architecto", "repudiandae");
                                    }}, "a string value", "a string value", "a string value", "a string value") {{
                        clusterUri = "a string value";
                        headers = new java.util.HashMap<String, String>() {{
                            put("maxime", "deleniti");
                            put("facilis", "in");
                        }};
                        index = "a string value";
                        password = "a string value";
                        type = "a string value";
                        user = "a string value";
                    }}),
                    add(new ElasticConfig("a string value",                 new java.util.HashMap<String, String>() {{
                                        put("saepe", "pariatur");
                                    }}, "a string value", "a string value", "a string value", "a string value") {{
                        clusterUri = "a string value";
                        headers = new java.util.HashMap<String, String>() {{
                            put("expedita", "nihil");
                            put("repellat", "quibusdam");
                        }};
                        index = "a string value";
                        password = "a string value";
                        type = "a string value";
                        user = "a string value";
                    }}),
                }};
                lines = new String[]{{
                    add("a string value"),
                }};
                mailerSettings = new MailerSettings("a string value", "a string value") {{
                    apiKeyPrivate = "a string value";
                    apiKeyPublic = "a string value";
                    eu = true;
                    header = new java.util.HashMap<String, String>() {{
                        put("praesentium", "natus");
                    }};
                    type = "a string value";
                    url = "a string value";
                }};;
                maxHttp10ResponseSize = 123L;
                maxLogsSize = 123123;
                middleFingers = true;
                privateAppsAuth0Config = new Auth0Config("a string value", "a string value", "a string value", "a string value");;
            }};            

            PutGlobalConfigResponse res = sdk.configuration.putGlobalConfig(req, new PutGlobalConfigSecurity("magni", "sunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.globalConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
