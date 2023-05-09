# import_

## Overview

Everything about Otoroshi import/export

### Available Operations

* [fullExport](#fullexport) - Export the full state of Otoroshi
* [fullImport](#fullimport) - Import the full state of Otoroshi
* [fullImportFromFile](#fullimportfromfile) - Import the full state of Otoroshi as a file

## fullExport

Export the full state of Otoroshi

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FullExportResponse;
import org.openapis.openapi.models.operations.FullExportSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FullExportResponse res = sdk.import_.fullExport(new FullExportSecurity("aspernatur", "minima") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.importExport != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fullImport

Import the full state of Otoroshi

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FullImportResponse;
import org.openapis.openapi.models.operations.FullImportSecurity;
import org.openapis.openapi.models.shared.Auth0Config;
import org.openapis.openapi.models.shared.BadResponse;
import org.openapis.openapi.models.shared.BadResponsesFaultConfig;
import org.openapis.openapi.models.shared.Canary;
import org.openapis.openapi.models.shared.ChaosConfig;
import org.openapis.openapi.models.shared.CleverSettings;
import org.openapis.openapi.models.shared.ClientConfig;
import org.openapis.openapi.models.shared.CorsSettings;
import org.openapis.openapi.models.shared.ESAlgoSettings;
import org.openapis.openapi.models.shared.ElasticConfig;
import org.openapis.openapi.models.shared.ExposedApi;
import org.openapis.openapi.models.shared.GlobalConfig;
import org.openapis.openapi.models.shared.Gzip;
import org.openapis.openapi.models.shared.HSAlgoSettings;
import org.openapis.openapi.models.shared.HealthCheck;
import org.openapis.openapi.models.shared.ImportExport;
import org.openapis.openapi.models.shared.ImportExportAdmins;
import org.openapis.openapi.models.shared.ImportExportApiKeys;
import org.openapis.openapi.models.shared.ImportExportErrorTemplates;
import org.openapis.openapi.models.shared.ImportExportServiceDescriptors;
import org.openapis.openapi.models.shared.ImportExportServiceGroups;
import org.openapis.openapi.models.shared.ImportExportSimpleAdmins;
import org.openapis.openapi.models.shared.ImportExportStats;
import org.openapis.openapi.models.shared.InCookie;
import org.openapis.openapi.models.shared.InHeader;
import org.openapis.openapi.models.shared.InQueryParam;
import org.openapis.openapi.models.shared.IpFiltering;
import org.openapis.openapi.models.shared.JWKSAlgoSettings;
import org.openapis.openapi.models.shared.LargeRequestFaultConfig;
import org.openapis.openapi.models.shared.LargeResponseFaultConfig;
import org.openapis.openapi.models.shared.LatencyInjectionFaultConfig;
import org.openapis.openapi.models.shared.LocalJwtVerifier;
import org.openapis.openapi.models.shared.MailerSettings;
import org.openapis.openapi.models.shared.MappingSettings;
import org.openapis.openapi.models.shared.PassThrough;
import org.openapis.openapi.models.shared.RSAlgoSettings;
import org.openapis.openapi.models.shared.RedirectionSettings;
import org.openapis.openapi.models.shared.RefJwtVerifier;
import org.openapis.openapi.models.shared.Sign;
import org.openapis.openapi.models.shared.StatsdConfig;
import org.openapis.openapi.models.shared.Target;
import org.openapis.openapi.models.shared.Transform;
import org.openapis.openapi.models.shared.TransformSettings;
import org.openapis.openapi.models.shared.VerificationSettings;
import org.openapis.openapi.models.shared.Webhook;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ImportExport req = new ImportExport(                new org.openapis.openapi.models.shared.ImportExportAdmins[]{{
                                add(new ImportExportAdmins(123L, "a string value", "a string value",                 new java.util.HashMap<String, String>() {{
                                                    put("non", "et");
                                                }}, "a string value") {{
                                    createdAt = 123L;
                                    label = "a string value";
                                    password = "a string value";
                                    registration = new java.util.HashMap<String, String>() {{
                                        put("libero", "aut");
                                        put("aut", "deleniti");
                                        put("impedit", "aliquam");
                                        put("fugit", "accusamus");
                                    }};
                                    username = "a string value";
                                }}),
                            }},                 new org.openapis.openapi.models.shared.ImportExportApiKeys[]{{
                                add(new ImportExportApiKeys(                new String[]{{
                                                    add("a string value"),
                                                    add("a string value"),
                                                    add("a string value"),
                                                }}, "a string value", "a string value", "a string value", true) {{
                                    authorizedEntities = new String[]{{
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                    }};
                                    clientId = "a string value";
                                    clientName = "a string value";
                                    clientSecret = "a string value";
                                    dailyQuota = 123L;
                                    enabled = true;
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("velit", "eum");
                                        put("autem", "nobis");
                                        put("quas", "assumenda");
                                        put("nulla", "voluptas");
                                    }};
                                    monthlyQuota = 123L;
                                    throttlingQuota = 123L;
                                }}),
                                add(new ImportExportApiKeys(                new String[]{{
                                                    add("a string value"),
                                                    add("a string value"),
                                                }}, "a string value", "a string value", "a string value", true) {{
                                    authorizedEntities = new String[]{{
                                        add("a string value"),
                                    }};
                                    clientId = "a string value";
                                    clientName = "a string value";
                                    clientSecret = "a string value";
                                    dailyQuota = 123L;
                                    enabled = true;
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("numquam", "explicabo");
                                        put("provident", "ipsa");
                                    }};
                                    monthlyQuota = 123L;
                                    throttlingQuota = 123L;
                                }}),
                                add(new ImportExportApiKeys(                new String[]{{
                                                    add("a string value"),
                                                    add("a string value"),
                                                    add("a string value"),
                                                }}, "a string value", "a string value", "a string value", true) {{
                                    authorizedEntities = new String[]{{
                                        add("a string value"),
                                        add("a string value"),
                                    }};
                                    clientId = "a string value";
                                    clientName = "a string value";
                                    clientSecret = "a string value";
                                    dailyQuota = 123L;
                                    enabled = true;
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("eius", "esse");
                                        put("esse", "rem");
                                    }};
                                    monthlyQuota = 123L;
                                    throttlingQuota = 123L;
                                }}),
                            }},                 new GlobalConfig(                new String[]{{
                                                add("admin@otoroshi.io"),
                                                add("admin@otoroshi.io"),
                                            }},                 new org.openapis.openapi.models.shared.Webhook[]{{
                                                add(new Webhook(                new java.util.HashMap<String, String>() {{
                                                                    put("id", "quidem");
                                                                }}, "http://www.google.com") {{
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("ut", "eum");
                                                        put("suscipit", "assumenda");
                                                        put("eos", "praesentium");
                                                        put("quisquam", "veritatis");
                                                    }};
                                                    url = "http://www.google.com";
                                                }}),
                                                add(new Webhook(                new java.util.HashMap<String, String>() {{
                                                                    put("fuga", "eius");
                                                                    put("eos", "voluptas");
                                                                    put("ab", "cupiditate");
                                                                    put("consequatur", "tempora");
                                                                }}, "http://www.google.com") {{
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("quo", "illum");
                                                    }};
                                                    url = "http://www.google.com";
                                                }}),
                                                add(new Webhook(                new java.util.HashMap<String, String>() {{
                                                                    put("dignissimos", "inventore");
                                                                    put("nihil", "totam");
                                                                    put("accusamus", "aliquam");
                                                                    put("odio", "occaecati");
                                                                }}, "http://www.google.com") {{
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("ipsam", "aspernatur");
                                                        put("sequi", "quo");
                                                        put("esse", "recusandae");
                                                        put("aperiam", "distinctio");
                                                    }};
                                                    url = "http://www.google.com";
                                                }}),
                                            }},                 new org.openapis.openapi.models.shared.Webhook[]{{
                                                add(new Webhook(                new java.util.HashMap<String, String>() {{
                                                                    put("deleniti", "fugit");
                                                                }}, "http://www.google.com") {{
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("dolores", "deserunt");
                                                        put("molestiae", "accusantium");
                                                        put("porro", "eum");
                                                        put("quas", "praesentium");
                                                    }};
                                                    url = "http://www.google.com";
                                                }}),
                                                add(new Webhook(                new java.util.HashMap<String, String>() {{
                                                                    put("sapiente", "consequuntur");
                                                                }}, "http://www.google.com") {{
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("mollitia", "incidunt");
                                                        put("atque", "explicabo");
                                                        put("minima", "nisi");
                                                    }};
                                                    url = "http://www.google.com";
                                                }}),
                                            }}, true, true,                 new String[]{{
                                                add("192.192.192.192"),
                                            }},                 new IpFiltering(                new String[]{{
                                                                add("192.192.192.192"),
                                                            }},                 new String[]{{
                                                                add("192.192.192.192"),
                                                                add("192.192.192.192"),
                                                                add("192.192.192.192"),
                                                                add("192.192.192.192"),
                                                            }});, true, 123L, 123L, true, 123L, true, true) {{
                                backofficeAuth0Config = new Auth0Config("a string value", "a string value", "a string value", "a string value");;
                                cleverSettings = new CleverSettings("a string value", "a string value", "a string value", "a string value", "a string value");;
                                elasticReadsConfig = new ElasticConfig("a string value",                 new java.util.HashMap<String, String>() {{
                                                    put("atque", "et");
                                                    put("esse", "eveniet");
                                                    put("accusamus", "veritatis");
                                                }}, "a string value", "a string value", "a string value", "a string value");;
                                elasticWritesConfigs = new org.openapis.openapi.models.shared.ElasticConfig[]{{
                                    add(new ElasticConfig("a string value",                 new java.util.HashMap<String, String>() {{
                                                        put("occaecati", "minima");
                                                        put("distinctio", "eligendi");
                                                        put("sit", "culpa");
                                                    }}, "a string value", "a string value", "a string value", "a string value") {{
                                        clusterUri = "a string value";
                                        headers = new java.util.HashMap<String, String>() {{
                                            put("nam", "vero");
                                            put("aliquid", "quasi");
                                            put("saepe", "vel");
                                            put("harum", "molestiae");
                                        }};
                                        index = "a string value";
                                        password = "a string value";
                                        type = "a string value";
                                        user = "a string value";
                                    }}),
                                    add(new ElasticConfig("a string value",                 new java.util.HashMap<String, String>() {{
                                                        put("consectetur", "esse");
                                                        put("blanditiis", "provident");
                                                        put("a", "nulla");
                                                        put("quas", "esse");
                                                    }}, "a string value", "a string value", "a string value", "a string value") {{
                                        clusterUri = "a string value";
                                        headers = new java.util.HashMap<String, String>() {{
                                            put("adipisci", "cumque");
                                            put("consequuntur", "consequatur");
                                            put("minus", "quaerat");
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
                                        put("error", "sint");
                                        put("pariatur", "possimus");
                                        put("quia", "eveniet");
                                        put("asperiores", "facere");
                                    }};
                                    type = "a string value";
                                    url = "a string value";
                                }};;
                                maxHttp10ResponseSize = 123L;
                                maxLogsSize = 123123;
                                middleFingers = true;
                                privateAppsAuth0Config = new Auth0Config("a string value", "a string value", "a string value", "a string value");;
                            }};, OffsetDateTime.parse("2017-07-21T17:32:28Z"), 123L,                 new org.openapis.openapi.models.shared.ImportExportErrorTemplates[]{{
                                add(new ImportExportErrorTemplates(                new java.util.HashMap<String, String>() {{
                                                    put("aliquid", "tenetur");
                                                    put("quae", "earum");
                                                    put("vel", "in");
                                                }}, "a string value", "a string value", "a string value", "a string value", "a string value") {{
                                    messages = new java.util.HashMap<String, String>() {{
                                        put("quasi", "similique");
                                    }};
                                    serviceId = "a string value";
                                    template40x = "a string value";
                                    template50x = "a string value";
                                    templateBuild = "a string value";
                                    templateMaintenance = "a string value";
                                }}),
                            }}, "a string value",                 new org.openapis.openapi.models.shared.ImportExportServiceDescriptors[]{{
                                add(new ImportExportServiceDescriptors(true, "a string value", true, true, "a string value", true,                 new String[]{{
                                                    add("a string value"),
                                                    add("a string value"),
                                                    add("a string value"),
                                                }}, "110e8400-e29b-11d4-a716-446655440000", true, "a string value", true, "a string value", "a string value",                 new org.openapis.openapi.models.shared.Target[]{{
                                                    add(new Target("www.google.com", "a string value") {{
                                                        host = "www.google.com";
                                                        scheme = "a string value";
                                                    }}),
                                                    add(new Target("www.google.com", "a string value") {{
                                                        host = "www.google.com";
                                                        scheme = "a string value";
                                                    }}),
                                                }}) {{
                                    canary = new Canary(true, "a string value",                 new org.openapis.openapi.models.shared.Target[]{{
                                                        add(new Target("www.google.com", "a string value") {{
                                                            host = "www.google.com";
                                                            scheme = "a string value";
                                                        }}),
                                                        add(new Target("www.google.com", "a string value") {{
                                                            host = "www.google.com";
                                                            scheme = "a string value";
                                                        }}),
                                                        add(new Target("www.google.com", "a string value") {{
                                                            host = "www.google.com";
                                                            scheme = "a string value";
                                                        }}),
                                                        add(new Target("www.google.com", "a string value") {{
                                                            host = "www.google.com";
                                                            scheme = "a string value";
                                                        }}),
                                                    }}, 123123) {{
                                        enabled = true;
                                        root = "a string value";
                                        targets = new org.openapis.openapi.models.shared.Target[]{{
                                            add(new Target("www.google.com", "a string value") {{
                                                host = "www.google.com";
                                                scheme = "a string value";
                                            }}),
                                            add(new Target("www.google.com", "a string value") {{
                                                host = "www.google.com";
                                                scheme = "a string value";
                                            }}),
                                            add(new Target("www.google.com", "a string value") {{
                                                host = "www.google.com";
                                                scheme = "a string value";
                                            }}),
                                        }};
                                        traffic = 123123;
                                    }};
                                    additionalHeaders = new java.util.HashMap<String, String>() {{
                                        put("accusantium", "aliquam");
                                        put("sapiente", "dicta");
                                        put("ullam", "reprehenderit");
                                    }};
                                    api = new ExposedApi(true) {{
                                        exposeApi = true;
                                        openApiDescriptorUrl = "http://www.google.com";
                                    }};
                                    authConfigRef = "a string value";
                                    buildMode = true;
                                    chaosConfig = new ChaosConfig(true) {{
                                        badResponsesFaultConfig = new BadResponsesFaultConfig(42.2,                 new org.openapis.openapi.models.shared.BadResponse[]{{
                                                            add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                                put("eum", "mollitia");
                                                                                put("ab", "corrupti");
                                                                                put("non", "voluptatem");
                                                                            }}, 123123) {{
                                                                body = "a string value";
                                                                headers = new java.util.HashMap<String, String>() {{
                                                                    put("rem", "aut");
                                                                }};
                                                                status = 123123;
                                                            }}),
                                                            add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                                put("explicabo", "voluptas");
                                                                                put("aut", "dignissimos");
                                                                                put("dicta", "maiores");
                                                                                put("natus", "velit");
                                                                            }}, 123123) {{
                                                                body = "a string value";
                                                                headers = new java.util.HashMap<String, String>() {{
                                                                    put("occaecati", "numquam");
                                                                }};
                                                                status = 123123;
                                                            }}),
                                                            add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                                put("dignissimos", "officia");
                                                                                put("asperiores", "nemo");
                                                                                put("quae", "quaerat");
                                                                                put("porro", "quod");
                                                                            }}, 123123) {{
                                                                body = "a string value";
                                                                headers = new java.util.HashMap<String, String>() {{
                                                                    put("voluptas", "asperiores");
                                                                    put("aperiam", "ea");
                                                                    put("quaerat", "consequuntur");
                                                                    put("repellendus", "officia");
                                                                }};
                                                                status = 123123;
                                                            }}),
                                                            add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                                put("velit", "culpa");
                                                                                put("est", "recusandae");
                                                                            }}, 123123) {{
                                                                body = "a string value";
                                                                headers = new java.util.HashMap<String, String>() {{
                                                                    put("ab", "adipisci");
                                                                    put("fuga", "id");
                                                                }};
                                                                status = 123123;
                                                            }}),
                                                        }}) {{
                                            ratio = 42.2;
                                            responses = new org.openapis.openapi.models.shared.BadResponse[]{{
                                                add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                    put("deleniti", "itaque");
                                                                    put("dolorum", "architecto");
                                                                }}, 123123) {{
                                                    body = "a string value";
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("aut", "voluptatum");
                                                        put("qui", "quibusdam");
                                                    }};
                                                    status = 123123;
                                                }}),
                                                add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                    put("veritatis", "consectetur");
                                                                    put("adipisci", "iste");
                                                                }}, 123123) {{
                                                    body = "a string value";
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("tenetur", "quasi");
                                                        put("at", "et");
                                                        put("voluptate", "ipsa");
                                                    }};
                                                    status = 123123;
                                                }}),
                                            }};
                                        }};
                                        enabled = true;
                                        largeRequestFaultConfig = new LargeRequestFaultConfig(123123, 42.2) {{
                                            additionalRequestSize = 123123;
                                            ratio = 42.2;
                                        }};
                                        largeResponseFaultConfig = new LargeResponseFaultConfig(42.2) {{
                                            additionalRequestSize = 123123;
                                            ratio = 42.2;
                                        }};
                                        latencyInjectionFaultConfig = new LatencyInjectionFaultConfig(123123, 42.2, 123123) {{
                                            from = 123123;
                                            ratio = 42.2;
                                            to = 123123;
                                        }};
                                    }};
                                    clientConfig = new ClientConfig(123123, 123123, 123123, 123123, 123123, 123123, 123123, true) {{
                                        backoffFactor = 123123;
                                        callTimeout = 123123;
                                        globalTimeout = 123123;
                                        maxErrors = 123123;
                                        retries = 123123;
                                        retryInitialDelay = 123123;
                                        sampleInterval = 123123;
                                        useCircuitBreaker = true;
                                    }};
                                    clientValidatorRef = "a string value";
                                    cors = new CorsSettings(true,                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }},                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }}, "a string value", true,                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }},                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }}, 123123) {{
                                        allowCredentials = true;
                                        allowHeaders = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                        allowMethods = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                        allowOrigin = "a string value";
                                        enabled = true;
                                        excludedPatterns = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                        exposeHeaders = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                        maxAge = 123123;
                                    }};
                                    domain = "a string value";
                                    enabled = true;
                                    enforceSecureCommunication = true;
                                    env = "a string value";
                                    forceHttps = true;
                                    groups = new String[]{{
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                    }};
                                    gzip = new Gzip(                new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }}, 123L, 123L, 123123, true,                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }},                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }}) {{
                                        blackList = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                        bufferSize = 123L;
                                        chunkedThreshold = 123L;
                                        compressionLevel = 123123;
                                        enabled = true;
                                        excludedPatterns = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                        whiteList = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                    }};
                                    headersVerification = new java.util.HashMap<String, String>() {{
                                        put("recusandae", "aliquid");
                                        put("aperiam", "cum");
                                    }};
                                    healthCheck = new HealthCheck(true) {{
                                        enabled = true;
                                        url = "http://www.google.com";
                                    }};
                                    id = "110e8400-e29b-11d4-a716-446655440000";
                                    ipFiltering = new IpFiltering(                new String[]{{
                                                        add("192.192.192.192"),
                                                        add("192.192.192.192"),
                                                    }},                 new String[]{{
                                                        add("192.192.192.192"),
                                                        add("192.192.192.192"),
                                                        add("192.192.192.192"),
                                                        add("192.192.192.192"),
                                                    }}) {{
                                        blacklist = new String[]{{
                                            add("192.192.192.192"),
                                        }};
                                        whitelist = new String[]{{
                                            add("192.192.192.192"),
                                            add("192.192.192.192"),
                                        }};
                                    }};
                                    jwtVerifier = new RefJwtVerifier(true, "a string value", "a string value") {{
                                        enabled = true;
                                        id = "a string value";
                                        type = "a string value";
                                    }};
                                    localHost = "a string value";
                                    localScheme = "a string value";
                                    maintenanceMode = true;
                                    matchingHeaders = new java.util.HashMap<String, String>() {{
                                        put("doloribus", "suscipit");
                                        put("reiciendis", "quidem");
                                    }};
                                    matchingRoot = "a string value";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("necessitatibus", "dolore");
                                        put("sunt", "asperiores");
                                        put("adipisci", "non");
                                        put("amet", "beatae");
                                    }};
                                    name = "a string value";
                                    overrideHost = true;
                                    privateApp = true;
                                    privatePatterns = new String[]{{
                                        add("a string value"),
                                        add("a string value"),
                                    }};
                                    publicPatterns = new String[]{{
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                    }};
                                    redirectToLocal = true;
                                    redirection = new RedirectionSettings(123123, true, "a string value") {{
                                        code = 123123;
                                        enabled = true;
                                        to = "a string value";
                                    }};
                                    root = "a string value";
                                    secComExcludedPatterns = new String[]{{
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                    }};
                                    secComSettings = new HSAlgoSettings("a string value", 123123, "a string value") {{
                                        secret = "a string value";
                                        size = 123123;
                                        type = "a string value";
                                    }};
                                    sendOtoroshiHeadersBack = true;
                                    statsdConfig = new StatsdConfig(true, "a string value", 123123) {{
                                        datadog = true;
                                        host = "a string value";
                                        port = 123123;
                                    }};
                                    subdomain = "a string value";
                                    targets = new org.openapis.openapi.models.shared.Target[]{{
                                        add(new Target("www.google.com", "a string value") {{
                                            host = "www.google.com";
                                            scheme = "a string value";
                                        }}),
                                        add(new Target("www.google.com", "a string value") {{
                                            host = "www.google.com";
                                            scheme = "a string value";
                                        }}),
                                    }};
                                    transformerRef = "a string value";
                                    userFacing = true;
                                    xForwardedHeaders = true;
                                }}),
                                add(new ImportExportServiceDescriptors(true, "a string value", true, true, "a string value", true,                 new String[]{{
                                                    add("a string value"),
                                                }}, "110e8400-e29b-11d4-a716-446655440000", true, "a string value", true, "a string value", "a string value",                 new org.openapis.openapi.models.shared.Target[]{{
                                                    add(new Target("www.google.com", "a string value") {{
                                                        host = "www.google.com";
                                                        scheme = "a string value";
                                                    }}),
                                                    add(new Target("www.google.com", "a string value") {{
                                                        host = "www.google.com";
                                                        scheme = "a string value";
                                                    }}),
                                                }}) {{
                                    canary = new Canary(true, "a string value",                 new org.openapis.openapi.models.shared.Target[]{{
                                                        add(new Target("www.google.com", "a string value") {{
                                                            host = "www.google.com";
                                                            scheme = "a string value";
                                                        }}),
                                                        add(new Target("www.google.com", "a string value") {{
                                                            host = "www.google.com";
                                                            scheme = "a string value";
                                                        }}),
                                                        add(new Target("www.google.com", "a string value") {{
                                                            host = "www.google.com";
                                                            scheme = "a string value";
                                                        }}),
                                                        add(new Target("www.google.com", "a string value") {{
                                                            host = "www.google.com";
                                                            scheme = "a string value";
                                                        }}),
                                                    }}, 123123) {{
                                        enabled = true;
                                        root = "a string value";
                                        targets = new org.openapis.openapi.models.shared.Target[]{{
                                            add(new Target("www.google.com", "a string value") {{
                                                host = "www.google.com";
                                                scheme = "a string value";
                                            }}),
                                        }};
                                        traffic = 123123;
                                    }};
                                    additionalHeaders = new java.util.HashMap<String, String>() {{
                                        put("vitae", "accusamus");
                                        put("similique", "tempora");
                                        put("aspernatur", "voluptas");
                                    }};
                                    api = new ExposedApi(true) {{
                                        exposeApi = true;
                                        openApiDescriptorUrl = "http://www.google.com";
                                    }};
                                    authConfigRef = "a string value";
                                    buildMode = true;
                                    chaosConfig = new ChaosConfig(true) {{
                                        badResponsesFaultConfig = new BadResponsesFaultConfig(42.2,                 new org.openapis.openapi.models.shared.BadResponse[]{{
                                                            add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                                put("explicabo", "asperiores");
                                                                                put("facilis", "voluptate");
                                                                                put("expedita", "ab");
                                                                                put("iste", "dolore");
                                                                            }}, 123123) {{
                                                                body = "a string value";
                                                                headers = new java.util.HashMap<String, String>() {{
                                                                    put("nobis", "sit");
                                                                    put("rerum", "sed");
                                                                }};
                                                                status = 123123;
                                                            }}),
                                                            add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                                put("architecto", "suscipit");
                                                                                put("sapiente", "debitis");
                                                                                put("illo", "reiciendis");
                                                                            }}, 123123) {{
                                                                body = "a string value";
                                                                headers = new java.util.HashMap<String, String>() {{
                                                                    put("sed", "in");
                                                                    put("commodi", "quidem");
                                                                    put("explicabo", "voluptas");
                                                                }};
                                                                status = 123123;
                                                            }}),
                                                            add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                                put("sed", "provident");
                                                                                put("eius", "necessitatibus");
                                                                            }}, 123123) {{
                                                                body = "a string value";
                                                                headers = new java.util.HashMap<String, String>() {{
                                                                    put("corrupti", "maiores");
                                                                }};
                                                                status = 123123;
                                                            }}),
                                                            add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                                put("voluptatibus", "tempora");
                                                                                put("tempora", "voluptate");
                                                                                put("reiciendis", "ex");
                                                                            }}, 123123) {{
                                                                body = "a string value";
                                                                headers = new java.util.HashMap<String, String>() {{
                                                                    put("ea", "occaecati");
                                                                }};
                                                                status = 123123;
                                                            }}),
                                                        }}) {{
                                            ratio = 42.2;
                                            responses = new org.openapis.openapi.models.shared.BadResponse[]{{
                                                add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                    put("dolores", "blanditiis");
                                                                    put("in", "dolore");
                                                                    put("aliquam", "officiis");
                                                                    put("temporibus", "ullam");
                                                                }}, 123123) {{
                                                    body = "a string value";
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("minima", "nobis");
                                                        put("dolorum", "adipisci");
                                                    }};
                                                    status = 123123;
                                                }}),
                                                add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                    put("hic", "nesciunt");
                                                                    put("culpa", "corrupti");
                                                                    put("pariatur", "totam");
                                                                }}, 123123) {{
                                                    body = "a string value";
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("cum", "blanditiis");
                                                    }};
                                                    status = 123123;
                                                }}),
                                            }};
                                        }};
                                        enabled = true;
                                        largeRequestFaultConfig = new LargeRequestFaultConfig(123123, 42.2) {{
                                            additionalRequestSize = 123123;
                                            ratio = 42.2;
                                        }};
                                        largeResponseFaultConfig = new LargeResponseFaultConfig(42.2) {{
                                            additionalRequestSize = 123123;
                                            ratio = 42.2;
                                        }};
                                        latencyInjectionFaultConfig = new LatencyInjectionFaultConfig(123123, 42.2, 123123) {{
                                            from = 123123;
                                            ratio = 42.2;
                                            to = 123123;
                                        }};
                                    }};
                                    clientConfig = new ClientConfig(123123, 123123, 123123, 123123, 123123, 123123, 123123, true) {{
                                        backoffFactor = 123123;
                                        callTimeout = 123123;
                                        globalTimeout = 123123;
                                        maxErrors = 123123;
                                        retries = 123123;
                                        retryInitialDelay = 123123;
                                        sampleInterval = 123123;
                                        useCircuitBreaker = true;
                                    }};
                                    clientValidatorRef = "a string value";
                                    cors = new CorsSettings(true,                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }},                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }}, "a string value", true,                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }},                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }}, 123123) {{
                                        allowCredentials = true;
                                        allowHeaders = new String[]{{
                                            add("a string value"),
                                        }};
                                        allowMethods = new String[]{{
                                            add("a string value"),
                                        }};
                                        allowOrigin = "a string value";
                                        enabled = true;
                                        excludedPatterns = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                        exposeHeaders = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                        maxAge = 123123;
                                    }};
                                    domain = "a string value";
                                    enabled = true;
                                    enforceSecureCommunication = true;
                                    env = "a string value";
                                    forceHttps = true;
                                    groups = new String[]{{
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                    }};
                                    gzip = new Gzip(                new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }}, 123L, 123L, 123123, true,                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }},                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }}) {{
                                        blackList = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                        bufferSize = 123L;
                                        chunkedThreshold = 123L;
                                        compressionLevel = 123123;
                                        enabled = true;
                                        excludedPatterns = new String[]{{
                                            add("a string value"),
                                        }};
                                        whiteList = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                    }};
                                    headersVerification = new java.util.HashMap<String, String>() {{
                                        put("reiciendis", "nulla");
                                        put("magni", "aperiam");
                                        put("saepe", "numquam");
                                        put("veniam", "in");
                                    }};
                                    healthCheck = new HealthCheck(true) {{
                                        enabled = true;
                                        url = "http://www.google.com";
                                    }};
                                    id = "110e8400-e29b-11d4-a716-446655440000";
                                    ipFiltering = new IpFiltering(                new String[]{{
                                                        add("192.192.192.192"),
                                                        add("192.192.192.192"),
                                                        add("192.192.192.192"),
                                                    }},                 new String[]{{
                                                        add("192.192.192.192"),
                                                        add("192.192.192.192"),
                                                    }}) {{
                                        blacklist = new String[]{{
                                            add("192.192.192.192"),
                                            add("192.192.192.192"),
                                            add("192.192.192.192"),
                                            add("192.192.192.192"),
                                        }};
                                        whitelist = new String[]{{
                                            add("192.192.192.192"),
                                        }};
                                    }};
                                    jwtVerifier = new RefJwtVerifier(true, "a string value", "a string value") {{
                                        enabled = true;
                                        id = "a string value";
                                        type = "a string value";
                                    }};
                                    localHost = "a string value";
                                    localScheme = "a string value";
                                    maintenanceMode = true;
                                    matchingHeaders = new java.util.HashMap<String, String>() {{
                                        put("laboriosam", "dolorum");
                                        put("voluptatum", "error");
                                        put("hic", "expedita");
                                    }};
                                    matchingRoot = "a string value";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("neque", "dolorum");
                                        put("nostrum", "officia");
                                        put("dolorum", "corrupti");
                                        put("accusamus", "tempora");
                                    }};
                                    name = "a string value";
                                    overrideHost = true;
                                    privateApp = true;
                                    privatePatterns = new String[]{{
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                    }};
                                    publicPatterns = new String[]{{
                                        add("a string value"),
                                    }};
                                    redirectToLocal = true;
                                    redirection = new RedirectionSettings(123123, true, "a string value") {{
                                        code = 123123;
                                        enabled = true;
                                        to = "a string value";
                                    }};
                                    root = "a string value";
                                    secComExcludedPatterns = new String[]{{
                                        add("a string value"),
                                        add("a string value"),
                                    }};
                                    secComSettings = new JWKSAlgoSettings("a string value") {{
                                        headers = new java.util.HashMap<String, String>() {{
                                            put("culpa", "expedita");
                                        }};
                                        kty = "a string value";
                                        timeout = 123L;
                                        ttl = 123L;
                                        type = "a string value";
                                        url = "a string value";
                                    }};
                                    sendOtoroshiHeadersBack = true;
                                    statsdConfig = new StatsdConfig(true, "a string value", 123123) {{
                                        datadog = true;
                                        host = "a string value";
                                        port = 123123;
                                    }};
                                    subdomain = "a string value";
                                    targets = new org.openapis.openapi.models.shared.Target[]{{
                                        add(new Target("www.google.com", "a string value") {{
                                            host = "www.google.com";
                                            scheme = "a string value";
                                        }}),
                                        add(new Target("www.google.com", "a string value") {{
                                            host = "www.google.com";
                                            scheme = "a string value";
                                        }}),
                                    }};
                                    transformerRef = "a string value";
                                    userFacing = true;
                                    xForwardedHeaders = true;
                                }}),
                            }},                 new org.openapis.openapi.models.shared.ImportExportServiceGroups[]{{
                                add(new ImportExportServiceGroups("a string value", "a string value") {{
                                    description = "a string value";
                                    id = "a string value";
                                    name = "a string value";
                                }}),
                                add(new ImportExportServiceGroups("a string value", "a string value") {{
                                    description = "a string value";
                                    id = "a string value";
                                    name = "a string value";
                                }}),
                            }},                 new org.openapis.openapi.models.shared.ImportExportSimpleAdmins[]{{
                                add(new ImportExportSimpleAdmins(123L, "a string value", "a string value", "a string value") {{
                                    createdAt = 123L;
                                    label = "a string value";
                                    password = "a string value";
                                    username = "a string value";
                                }}),
                            }},                 new ImportExportStats(123L, 123L, 123L);) {{
                appConfig = new java.util.HashMap<String, String>() {{
                    put("quas", "repudiandae");
                    put("corporis", "et");
                    put("blanditiis", "ex");
                }};
            }};            

            FullImportResponse res = sdk.import_.fullImport(req, new FullImportSecurity("sed", "sit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.done != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fullImportFromFile

Import the full state of Otoroshi as a file

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FullImportFromFileResponse;
import org.openapis.openapi.models.operations.FullImportFromFileSecurity;
import org.openapis.openapi.models.shared.Auth0Config;
import org.openapis.openapi.models.shared.BadResponse;
import org.openapis.openapi.models.shared.BadResponsesFaultConfig;
import org.openapis.openapi.models.shared.Canary;
import org.openapis.openapi.models.shared.ChaosConfig;
import org.openapis.openapi.models.shared.CleverSettings;
import org.openapis.openapi.models.shared.ClientConfig;
import org.openapis.openapi.models.shared.CorsSettings;
import org.openapis.openapi.models.shared.ESAlgoSettings;
import org.openapis.openapi.models.shared.ElasticConfig;
import org.openapis.openapi.models.shared.ExposedApi;
import org.openapis.openapi.models.shared.GlobalConfig;
import org.openapis.openapi.models.shared.Gzip;
import org.openapis.openapi.models.shared.HSAlgoSettings;
import org.openapis.openapi.models.shared.HealthCheck;
import org.openapis.openapi.models.shared.ImportExport;
import org.openapis.openapi.models.shared.ImportExportAdmins;
import org.openapis.openapi.models.shared.ImportExportApiKeys;
import org.openapis.openapi.models.shared.ImportExportErrorTemplates;
import org.openapis.openapi.models.shared.ImportExportServiceDescriptors;
import org.openapis.openapi.models.shared.ImportExportServiceGroups;
import org.openapis.openapi.models.shared.ImportExportSimpleAdmins;
import org.openapis.openapi.models.shared.ImportExportStats;
import org.openapis.openapi.models.shared.InCookie;
import org.openapis.openapi.models.shared.InHeader;
import org.openapis.openapi.models.shared.InQueryParam;
import org.openapis.openapi.models.shared.IpFiltering;
import org.openapis.openapi.models.shared.JWKSAlgoSettings;
import org.openapis.openapi.models.shared.LargeRequestFaultConfig;
import org.openapis.openapi.models.shared.LargeResponseFaultConfig;
import org.openapis.openapi.models.shared.LatencyInjectionFaultConfig;
import org.openapis.openapi.models.shared.LocalJwtVerifier;
import org.openapis.openapi.models.shared.MailerSettings;
import org.openapis.openapi.models.shared.MappingSettings;
import org.openapis.openapi.models.shared.PassThrough;
import org.openapis.openapi.models.shared.RSAlgoSettings;
import org.openapis.openapi.models.shared.RedirectionSettings;
import org.openapis.openapi.models.shared.RefJwtVerifier;
import org.openapis.openapi.models.shared.Sign;
import org.openapis.openapi.models.shared.StatsdConfig;
import org.openapis.openapi.models.shared.Target;
import org.openapis.openapi.models.shared.Transform;
import org.openapis.openapi.models.shared.TransformSettings;
import org.openapis.openapi.models.shared.VerificationSettings;
import org.openapis.openapi.models.shared.Webhook;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ImportExport req = new ImportExport(                new org.openapis.openapi.models.shared.ImportExportAdmins[]{{
                                add(new ImportExportAdmins(123L, "a string value", "a string value",                 new java.util.HashMap<String, String>() {{
                                                    put("dolorem", "harum");
                                                    put("dicta", "architecto");
                                                    put("occaecati", "labore");
                                                    put("quidem", "atque");
                                                }}, "a string value") {{
                                    createdAt = 123L;
                                    label = "a string value";
                                    password = "a string value";
                                    registration = new java.util.HashMap<String, String>() {{
                                        put("saepe", "error");
                                        put("consequatur", "incidunt");
                                    }};
                                    username = "a string value";
                                }}),
                                add(new ImportExportAdmins(123L, "a string value", "a string value",                 new java.util.HashMap<String, String>() {{
                                                    put("unde", "reiciendis");
                                                    put("provident", "repellendus");
                                                }}, "a string value") {{
                                    createdAt = 123L;
                                    label = "a string value";
                                    password = "a string value";
                                    registration = new java.util.HashMap<String, String>() {{
                                        put("nam", "tenetur");
                                        put("laboriosam", "alias");
                                        put("amet", "deserunt");
                                    }};
                                    username = "a string value";
                                }}),
                            }},                 new org.openapis.openapi.models.shared.ImportExportApiKeys[]{{
                                add(new ImportExportApiKeys(                new String[]{{
                                                    add("a string value"),
                                                    add("a string value"),
                                                }}, "a string value", "a string value", "a string value", true) {{
                                    authorizedEntities = new String[]{{
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                    }};
                                    clientId = "a string value";
                                    clientName = "a string value";
                                    clientSecret = "a string value";
                                    dailyQuota = 123L;
                                    enabled = true;
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("est", "quidem");
                                    }};
                                    monthlyQuota = 123L;
                                    throttlingQuota = 123L;
                                }}),
                                add(new ImportExportApiKeys(                new String[]{{
                                                    add("a string value"),
                                                }}, "a string value", "a string value", "a string value", true) {{
                                    authorizedEntities = new String[]{{
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                    }};
                                    clientId = "a string value";
                                    clientName = "a string value";
                                    clientSecret = "a string value";
                                    dailyQuota = 123L;
                                    enabled = true;
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("praesentium", "mollitia");
                                        put("veniam", "voluptatem");
                                        put("quisquam", "repudiandae");
                                    }};
                                    monthlyQuota = 123L;
                                    throttlingQuota = 123L;
                                }}),
                                add(new ImportExportApiKeys(                new String[]{{
                                                    add("a string value"),
                                                    add("a string value"),
                                                    add("a string value"),
                                                    add("a string value"),
                                                }}, "a string value", "a string value", "a string value", true) {{
                                    authorizedEntities = new String[]{{
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                    }};
                                    clientId = "a string value";
                                    clientName = "a string value";
                                    clientSecret = "a string value";
                                    dailyQuota = 123L;
                                    enabled = true;
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("asperiores", "totam");
                                        put("suscipit", "quidem");
                                    }};
                                    monthlyQuota = 123L;
                                    throttlingQuota = 123L;
                                }}),
                                add(new ImportExportApiKeys(                new String[]{{
                                                    add("a string value"),
                                                    add("a string value"),
                                                    add("a string value"),
                                                }}, "a string value", "a string value", "a string value", true) {{
                                    authorizedEntities = new String[]{{
                                        add("a string value"),
                                    }};
                                    clientId = "a string value";
                                    clientName = "a string value";
                                    clientSecret = "a string value";
                                    dailyQuota = 123L;
                                    enabled = true;
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("amet", "assumenda");
                                        put("ea", "atque");
                                    }};
                                    monthlyQuota = 123L;
                                    throttlingQuota = 123L;
                                }}),
                            }},                 new GlobalConfig(                new String[]{{
                                                add("admin@otoroshi.io"),
                                                add("admin@otoroshi.io"),
                                                add("admin@otoroshi.io"),
                                                add("admin@otoroshi.io"),
                                            }},                 new org.openapis.openapi.models.shared.Webhook[]{{
                                                add(new Webhook(                new java.util.HashMap<String, String>() {{
                                                                    put("suscipit", "repudiandae");
                                                                    put("atque", "atque");
                                                                    put("sunt", "recusandae");
                                                                }}, "http://www.google.com") {{
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("natus", "minima");
                                                        put("aspernatur", "ex");
                                                        put("maiores", "corrupti");
                                                        put("at", "error");
                                                    }};
                                                    url = "http://www.google.com";
                                                }}),
                                                add(new Webhook(                new java.util.HashMap<String, String>() {{
                                                                    put("beatae", "dolores");
                                                                }}, "http://www.google.com") {{
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("repellendus", "labore");
                                                        put("reiciendis", "doloremque");
                                                        put("repudiandae", "dicta");
                                                    }};
                                                    url = "http://www.google.com";
                                                }}),
                                                add(new Webhook(                new java.util.HashMap<String, String>() {{
                                                                    put("saepe", "consequuntur");
                                                                    put("occaecati", "officiis");
                                                                }}, "http://www.google.com") {{
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("laboriosam", "velit");
                                                        put("a", "molestias");
                                                    }};
                                                    url = "http://www.google.com";
                                                }}),
                                                add(new Webhook(                new java.util.HashMap<String, String>() {{
                                                                    put("quis", "reprehenderit");
                                                                    put("error", "illo");
                                                                    put("corporis", "quidem");
                                                                }}, "http://www.google.com") {{
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("in", "adipisci");
                                                        put("eveniet", "occaecati");
                                                        put("consequuntur", "fugit");
                                                    }};
                                                    url = "http://www.google.com";
                                                }}),
                                            }},                 new org.openapis.openapi.models.shared.Webhook[]{{
                                                add(new Webhook(                new java.util.HashMap<String, String>() {{
                                                                    put("ipsa", "totam");
                                                                    put("quae", "molestiae");
                                                                }}, "http://www.google.com") {{
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("vero", "doloremque");
                                                    }};
                                                    url = "http://www.google.com";
                                                }}),
                                                add(new Webhook(                new java.util.HashMap<String, String>() {{
                                                                    put("aliquam", "ad");
                                                                    put("repellat", "alias");
                                                                    put("corporis", "perspiciatis");
                                                                }}, "http://www.google.com") {{
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("qui", "cum");
                                                        put("iure", "necessitatibus");
                                                        put("ratione", "laborum");
                                                        put("distinctio", "voluptatum");
                                                    }};
                                                    url = "http://www.google.com";
                                                }}),
                                                add(new Webhook(                new java.util.HashMap<String, String>() {{
                                                                    put("dolores", "id");
                                                                    put("minima", "dolore");
                                                                    put("dolorum", "nesciunt");
                                                                    put("quae", "recusandae");
                                                                }}, "http://www.google.com") {{
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("mollitia", "voluptas");
                                                        put("alias", "maiores");
                                                    }};
                                                    url = "http://www.google.com";
                                                }}),
                                                add(new Webhook(                new java.util.HashMap<String, String>() {{
                                                                    put("laudantium", "eum");
                                                                    put("nemo", "recusandae");
                                                                    put("esse", "provident");
                                                                    put("quis", "eum");
                                                                }}, "http://www.google.com") {{
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("quaerat", "molestiae");
                                                        put("ex", "ut");
                                                        put("culpa", "adipisci");
                                                    }};
                                                    url = "http://www.google.com";
                                                }}),
                                            }}, true, true,                 new String[]{{
                                                add("192.192.192.192"),
                                                add("192.192.192.192"),
                                                add("192.192.192.192"),
                                                add("192.192.192.192"),
                                            }},                 new IpFiltering(                new String[]{{
                                                                add("192.192.192.192"),
                                                                add("192.192.192.192"),
                                                                add("192.192.192.192"),
                                                            }},                 new String[]{{
                                                                add("192.192.192.192"),
                                                            }});, true, 123L, 123L, true, 123L, true, true) {{
                                backofficeAuth0Config = new Auth0Config("a string value", "a string value", "a string value", "a string value");;
                                cleverSettings = new CleverSettings("a string value", "a string value", "a string value", "a string value", "a string value");;
                                elasticReadsConfig = new ElasticConfig("a string value",                 new java.util.HashMap<String, String>() {{
                                                    put("quasi", "animi");
                                                    put("nostrum", "mollitia");
                                                }}, "a string value", "a string value", "a string value", "a string value");;
                                elasticWritesConfigs = new org.openapis.openapi.models.shared.ElasticConfig[]{{
                                    add(new ElasticConfig("a string value",                 new java.util.HashMap<String, String>() {{
                                                        put("earum", "officia");
                                                        put("laborum", "placeat");
                                                        put("modi", "voluptatibus");
                                                    }}, "a string value", "a string value", "a string value", "a string value") {{
                                        clusterUri = "a string value";
                                        headers = new java.util.HashMap<String, String>() {{
                                            put("animi", "ex");
                                            put("aliquid", "accusantium");
                                            put("repellat", "doloribus");
                                            put("ullam", "in");
                                        }};
                                        index = "a string value";
                                        password = "a string value";
                                        type = "a string value";
                                        user = "a string value";
                                    }}),
                                    add(new ElasticConfig("a string value",                 new java.util.HashMap<String, String>() {{
                                                        put("inventore", "fugit");
                                                        put("cumque", "quae");
                                                    }}, "a string value", "a string value", "a string value", "a string value") {{
                                        clusterUri = "a string value";
                                        headers = new java.util.HashMap<String, String>() {{
                                            put("officiis", "sapiente");
                                            put("cumque", "vitae");
                                            put("rerum", "tempora");
                                        }};
                                        index = "a string value";
                                        password = "a string value";
                                        type = "a string value";
                                        user = "a string value";
                                    }}),
                                    add(new ElasticConfig("a string value",                 new java.util.HashMap<String, String>() {{
                                                        put("eius", "rem");
                                                        put("at", "impedit");
                                                    }}, "a string value", "a string value", "a string value", "a string value") {{
                                        clusterUri = "a string value";
                                        headers = new java.util.HashMap<String, String>() {{
                                            put("velit", "aspernatur");
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
                                        put("eum", "dicta");
                                        put("minima", "beatae");
                                        put("cupiditate", "provident");
                                        put("earum", "soluta");
                                    }};
                                    type = "a string value";
                                    url = "a string value";
                                }};;
                                maxHttp10ResponseSize = 123L;
                                maxLogsSize = 123123;
                                middleFingers = true;
                                privateAppsAuth0Config = new Auth0Config("a string value", "a string value", "a string value", "a string value");;
                            }};, OffsetDateTime.parse("2017-07-21T17:32:28Z"), 123L,                 new org.openapis.openapi.models.shared.ImportExportErrorTemplates[]{{
                                add(new ImportExportErrorTemplates(                new java.util.HashMap<String, String>() {{
                                                    put("fugit", "cumque");
                                                }}, "a string value", "a string value", "a string value", "a string value", "a string value") {{
                                    messages = new java.util.HashMap<String, String>() {{
                                        put("eaque", "earum");
                                        put("perspiciatis", "maiores");
                                        put("debitis", "aliquid");
                                        put("porro", "suscipit");
                                    }};
                                    serviceId = "a string value";
                                    template40x = "a string value";
                                    template50x = "a string value";
                                    templateBuild = "a string value";
                                    templateMaintenance = "a string value";
                                }}),
                                add(new ImportExportErrorTemplates(                new java.util.HashMap<String, String>() {{
                                                    put("ducimus", "natus");
                                                }}, "a string value", "a string value", "a string value", "a string value", "a string value") {{
                                    messages = new java.util.HashMap<String, String>() {{
                                        put("ratione", "animi");
                                        put("necessitatibus", "nulla");
                                        put("consequatur", "quasi");
                                    }};
                                    serviceId = "a string value";
                                    template40x = "a string value";
                                    template50x = "a string value";
                                    templateBuild = "a string value";
                                    templateMaintenance = "a string value";
                                }}),
                                add(new ImportExportErrorTemplates(                new java.util.HashMap<String, String>() {{
                                                    put("ipsa", "tempora");
                                                    put("nihil", "molestiae");
                                                    put("dicta", "iusto");
                                                    put("esse", "praesentium");
                                                }}, "a string value", "a string value", "a string value", "a string value", "a string value") {{
                                    messages = new java.util.HashMap<String, String>() {{
                                        put("suscipit", "adipisci");
                                        put("quasi", "magni");
                                        put("doloribus", "nulla");
                                    }};
                                    serviceId = "a string value";
                                    template40x = "a string value";
                                    template50x = "a string value";
                                    templateBuild = "a string value";
                                    templateMaintenance = "a string value";
                                }}),
                                add(new ImportExportErrorTemplates(                new java.util.HashMap<String, String>() {{
                                                    put("ex", "consectetur");
                                                    put("aliquid", "ipsa");
                                                }}, "a string value", "a string value", "a string value", "a string value", "a string value") {{
                                    messages = new java.util.HashMap<String, String>() {{
                                        put("reiciendis", "vel");
                                        put("architecto", "fugiat");
                                        put("doloremque", "dicta");
                                        put("odio", "tempora");
                                    }};
                                    serviceId = "a string value";
                                    template40x = "a string value";
                                    template50x = "a string value";
                                    templateBuild = "a string value";
                                    templateMaintenance = "a string value";
                                }}),
                            }}, "a string value",                 new org.openapis.openapi.models.shared.ImportExportServiceDescriptors[]{{
                                add(new ImportExportServiceDescriptors(true, "a string value", true, true, "a string value", true,                 new String[]{{
                                                    add("a string value"),
                                                    add("a string value"),
                                                }}, "110e8400-e29b-11d4-a716-446655440000", true, "a string value", true, "a string value", "a string value",                 new org.openapis.openapi.models.shared.Target[]{{
                                                    add(new Target("www.google.com", "a string value") {{
                                                        host = "www.google.com";
                                                        scheme = "a string value";
                                                    }}),
                                                    add(new Target("www.google.com", "a string value") {{
                                                        host = "www.google.com";
                                                        scheme = "a string value";
                                                    }}),
                                                    add(new Target("www.google.com", "a string value") {{
                                                        host = "www.google.com";
                                                        scheme = "a string value";
                                                    }}),
                                                }}) {{
                                    canary = new Canary(true, "a string value",                 new org.openapis.openapi.models.shared.Target[]{{
                                                        add(new Target("www.google.com", "a string value") {{
                                                            host = "www.google.com";
                                                            scheme = "a string value";
                                                        }}),
                                                        add(new Target("www.google.com", "a string value") {{
                                                            host = "www.google.com";
                                                            scheme = "a string value";
                                                        }}),
                                                    }}, 123123) {{
                                        enabled = true;
                                        root = "a string value";
                                        targets = new org.openapis.openapi.models.shared.Target[]{{
                                            add(new Target("www.google.com", "a string value") {{
                                                host = "www.google.com";
                                                scheme = "a string value";
                                            }}),
                                        }};
                                        traffic = 123123;
                                    }};
                                    additionalHeaders = new java.util.HashMap<String, String>() {{
                                        put("expedita", "aliquid");
                                        put("officia", "suscipit");
                                        put("aliquid", "perferendis");
                                        put("eum", "voluptas");
                                    }};
                                    api = new ExposedApi(true) {{
                                        exposeApi = true;
                                        openApiDescriptorUrl = "http://www.google.com";
                                    }};
                                    authConfigRef = "a string value";
                                    buildMode = true;
                                    chaosConfig = new ChaosConfig(true) {{
                                        badResponsesFaultConfig = new BadResponsesFaultConfig(42.2,                 new org.openapis.openapi.models.shared.BadResponse[]{{
                                                            add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                                put("ex", "sapiente");
                                                                                put("rem", "minus");
                                                                                put("nemo", "asperiores");
                                                                                put("ratione", "ullam");
                                                                            }}, 123123) {{
                                                                body = "a string value";
                                                                headers = new java.util.HashMap<String, String>() {{
                                                                    put("alias", "deleniti");
                                                                }};
                                                                status = 123123;
                                                            }}),
                                                            add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                                put("quibusdam", "nam");
                                                                                put("ipsam", "culpa");
                                                                                put("dolor", "aliquam");
                                                                                put("inventore", "deleniti");
                                                                            }}, 123123) {{
                                                                body = "a string value";
                                                                headers = new java.util.HashMap<String, String>() {{
                                                                    put("illum", "totam");
                                                                }};
                                                                status = 123123;
                                                            }}),
                                                            add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                                put("architecto", "sit");
                                                                            }}, 123123) {{
                                                                body = "a string value";
                                                                headers = new java.util.HashMap<String, String>() {{
                                                                    put("tempora", "dolor");
                                                                }};
                                                                status = 123123;
                                                            }}),
                                                            add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                                put("fugiat", "ipsam");
                                                                            }}, 123123) {{
                                                                body = "a string value";
                                                                headers = new java.util.HashMap<String, String>() {{
                                                                    put("fugit", "ab");
                                                                    put("laudantium", "quae");
                                                                }};
                                                                status = 123123;
                                                            }}),
                                                        }}) {{
                                            ratio = 42.2;
                                            responses = new org.openapis.openapi.models.shared.BadResponse[]{{
                                                add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                    put("ad", "deleniti");
                                                                    put("enim", "vitae");
                                                                    put("repellendus", "ex");
                                                                }}, 123123) {{
                                                    body = "a string value";
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("ab", "error");
                                                        put("possimus", "voluptates");
                                                        put("mollitia", "laborum");
                                                    }};
                                                    status = 123123;
                                                }}),
                                                add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                    put("voluptatum", "omnis");
                                                                }}, 123123) {{
                                                    body = "a string value";
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("ex", "ut");
                                                        put("ad", "expedita");
                                                        put("voluptatem", "molestias");
                                                        put("cum", "aliquid");
                                                    }};
                                                    status = 123123;
                                                }}),
                                                add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                    put("voluptatem", "sapiente");
                                                                    put("officiis", "architecto");
                                                                    put("fuga", "pariatur");
                                                                }}, 123123) {{
                                                    body = "a string value";
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("rerum", "est");
                                                    }};
                                                    status = 123123;
                                                }}),
                                            }};
                                        }};
                                        enabled = true;
                                        largeRequestFaultConfig = new LargeRequestFaultConfig(123123, 42.2) {{
                                            additionalRequestSize = 123123;
                                            ratio = 42.2;
                                        }};
                                        largeResponseFaultConfig = new LargeResponseFaultConfig(42.2) {{
                                            additionalRequestSize = 123123;
                                            ratio = 42.2;
                                        }};
                                        latencyInjectionFaultConfig = new LatencyInjectionFaultConfig(123123, 42.2, 123123) {{
                                            from = 123123;
                                            ratio = 42.2;
                                            to = 123123;
                                        }};
                                    }};
                                    clientConfig = new ClientConfig(123123, 123123, 123123, 123123, 123123, 123123, 123123, true) {{
                                        backoffFactor = 123123;
                                        callTimeout = 123123;
                                        globalTimeout = 123123;
                                        maxErrors = 123123;
                                        retries = 123123;
                                        retryInitialDelay = 123123;
                                        sampleInterval = 123123;
                                        useCircuitBreaker = true;
                                    }};
                                    clientValidatorRef = "a string value";
                                    cors = new CorsSettings(true,                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }},                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }}, "a string value", true,                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }},                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }}, 123123) {{
                                        allowCredentials = true;
                                        allowHeaders = new String[]{{
                                            add("a string value"),
                                        }};
                                        allowMethods = new String[]{{
                                            add("a string value"),
                                        }};
                                        allowOrigin = "a string value";
                                        enabled = true;
                                        excludedPatterns = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                        exposeHeaders = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                        maxAge = 123123;
                                    }};
                                    domain = "a string value";
                                    enabled = true;
                                    enforceSecureCommunication = true;
                                    env = "a string value";
                                    forceHttps = true;
                                    groups = new String[]{{
                                        add("a string value"),
                                    }};
                                    gzip = new Gzip(                new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }}, 123L, 123L, 123123, true,                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }},                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }}) {{
                                        blackList = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                        bufferSize = 123L;
                                        chunkedThreshold = 123L;
                                        compressionLevel = 123123;
                                        enabled = true;
                                        excludedPatterns = new String[]{{
                                            add("a string value"),
                                        }};
                                        whiteList = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                    }};
                                    headersVerification = new java.util.HashMap<String, String>() {{
                                        put("exercitationem", "ab");
                                        put("porro", "autem");
                                    }};
                                    healthCheck = new HealthCheck(true) {{
                                        enabled = true;
                                        url = "http://www.google.com";
                                    }};
                                    id = "110e8400-e29b-11d4-a716-446655440000";
                                    ipFiltering = new IpFiltering(                new String[]{{
                                                        add("192.192.192.192"),
                                                        add("192.192.192.192"),
                                                        add("192.192.192.192"),
                                                        add("192.192.192.192"),
                                                    }},                 new String[]{{
                                                        add("192.192.192.192"),
                                                    }}) {{
                                        blacklist = new String[]{{
                                            add("192.192.192.192"),
                                            add("192.192.192.192"),
                                            add("192.192.192.192"),
                                            add("192.192.192.192"),
                                        }};
                                        whitelist = new String[]{{
                                            add("192.192.192.192"),
                                            add("192.192.192.192"),
                                        }};
                                    }};
                                    jwtVerifier = new LocalJwtVerifier(                new RSAlgoSettings("a string value", 123123, "a string value") {{
                                                        privateKey = "a string value";
                                                        publicKey = "a string value";
                                                        size = 123123;
                                                        type = "a string value";
                                                    }}, true,                 new InCookie("a string value", "a string value") {{
                                                        name = "a string value";
                                                        type = "a string value";
                                                    }},                 new Transform(                new HSAlgoSettings("a string value", 123123, "a string value") {{
                                                                        secret = "a string value";
                                                                        size = 123123;
                                                                        type = "a string value";
                                                                    }}, "a string value",                 new VerificationSettings(                new java.util.HashMap<String, String>() {{
                                                                                        put("sit", "doloremque");
                                                                                        put("consequatur", "officia");
                                                                                    }}) {{
                                                                        mappingSettings = new MappingSettings(                new java.util.HashMap<String, String>() {{
                                                                                            put("ea", "quidem");
                                                                                            put("voluptas", "facilis");
                                                                                            put("placeat", "perspiciatis");
                                                                                            put("expedita", "deleniti");
                                                                                        }},                 new String[]{{
                                                                                            add("a string value"),
                                                                                            add("a string value"),
                                                                                            add("a string value"),
                                                                                            add("a string value"),
                                                                                        }},                 new java.util.HashMap<String, String>() {{
                                                                                            put("ullam", "unde");
                                                                                            put("necessitatibus", "animi");
                                                                                        }});;
                                                                    }};) {{
                                                        algoSettings = new HSAlgoSettings("a string value", 123123, "a string value") {{
                                                            secret = "a string value";
                                                            size = 123123;
                                                            type = "a string value";
                                                        }};
                                                        transformSettings = new TransformSettings(                new InQueryParam("a string value", "a string value") {{
                                                                            name = "a string value";
                                                                            type = "a string value";
                                                                        }},                 new MappingSettings(                new java.util.HashMap<String, String>() {{
                                                                                            put("atque", "ipsum");
                                                                                        }},                 new String[]{{
                                                                                            add("a string value"),
                                                                                            add("a string value"),
                                                                                            add("a string value"),
                                                                                            add("a string value"),
                                                                                        }},                 new java.util.HashMap<String, String>() {{
                                                                                            put("soluta", "repudiandae");
                                                                                        }});) {{
                                                            location = new InHeader("a string value", "a string value", "a string value") {{
                                                                name = "a string value";
                                                                remove = "a string value";
                                                                type = "a string value";
                                                            }};
                                                            mappingSettings = new MappingSettings(                new java.util.HashMap<String, String>() {{
                                                                                put("sint", "accusamus");
                                                                                put("impedit", "hic");
                                                                            }},                 new String[]{{
                                                                                add("a string value"),
                                                                                add("a string value"),
                                                                                add("a string value"),
                                                                                add("a string value"),
                                                                            }},                 new java.util.HashMap<String, String>() {{
                                                                                put("ex", "voluptas");
                                                                                put("debitis", "delectus");
                                                                                put("quae", "minus");
                                                                                put("fuga", "laborum");
                                                                            }}) {{
                                                                map = new java.util.HashMap<String, String>() {{
                                                                    put("alias", "quasi");
                                                                    put("non", "maiores");
                                                                }};
                                                                remove = new String[]{{
                                                                    add("a string value"),
                                                                    add("a string value"),
                                                                }};
                                                                values = new java.util.HashMap<String, String>() {{
                                                                    put("nulla", "deserunt");
                                                                    put("esse", "nemo");
                                                                    put("reprehenderit", "est");
                                                                }};
                                                            }};
                                                        }};
                                                        type = "a string value";
                                                        verificationSettings = new VerificationSettings(                new java.util.HashMap<String, String>() {{
                                                                            put("iste", "itaque");
                                                                            put("alias", "nisi");
                                                                            put("itaque", "velit");
                                                                            put("laborum", "non");
                                                                        }}) {{
                                                            fields = new java.util.HashMap<String, String>() {{
                                                                put("dolore", "iusto");
                                                                put("voluptate", "sequi");
                                                                put("dignissimos", "neque");
                                                            }};
                                                            mappingSettings = new MappingSettings(                new java.util.HashMap<String, String>() {{
                                                                                put("vel", "ea");
                                                                            }},                 new String[]{{
                                                                                add("a string value"),
                                                                            }},                 new java.util.HashMap<String, String>() {{
                                                                                put("excepturi", "eum");
                                                                                put("velit", "ut");
                                                                                put("perspiciatis", "earum");
                                                                                put("dicta", "impedit");
                                                                            }}) {{
                                                                map = new java.util.HashMap<String, String>() {{
                                                                    put("deleniti", "quibusdam");
                                                                    put("iure", "odit");
                                                                    put("voluptatibus", "vel");
                                                                    put("magnam", "quibusdam");
                                                                }};
                                                                remove = new String[]{{
                                                                    add("a string value"),
                                                                }};
                                                                values = new java.util.HashMap<String, String>() {{
                                                                    put("libero", "architecto");
                                                                    put("voluptatibus", "quia");
                                                                    put("porro", "aliquam");
                                                                    put("velit", "illo");
                                                                }};
                                                            }};
                                                        }};
                                                    }}, true, "a string value") {{
                                        algoSettings = new RSAlgoSettings("a string value", 123123, "a string value") {{
                                            privateKey = "a string value";
                                            publicKey = "a string value";
                                            size = 123123;
                                            type = "a string value";
                                        }};
                                        enabled = true;
                                        source = new InCookie("a string value", "a string value") {{
                                            name = "a string value";
                                            type = "a string value";
                                        }};
                                        strategy = new PassThrough("a string value",                 new VerificationSettings(                new java.util.HashMap<String, String>() {{
                                                                            put("soluta", "alias");
                                                                            put("omnis", "eos");
                                                                            put("occaecati", "iste");
                                                                            put("magni", "inventore");
                                                                        }}) {{
                                                            mappingSettings = new MappingSettings(                new java.util.HashMap<String, String>() {{
                                                                                put("accusamus", "voluptatibus");
                                                                                put("distinctio", "omnis");
                                                                                put("delectus", "minima");
                                                                            }},                 new String[]{{
                                                                                add("a string value"),
                                                                                add("a string value"),
                                                                                add("a string value"),
                                                                            }},                 new java.util.HashMap<String, String>() {{
                                                                                put("magnam", "temporibus");
                                                                                put("quos", "commodi");
                                                                                put("itaque", "commodi");
                                                                                put("totam", "earum");
                                                                            }});;
                                                        }};) {{
                                            type = "a string value";
                                            verificationSettings = new VerificationSettings(                new java.util.HashMap<String, String>() {{
                                                                put("consequuntur", "consectetur");
                                                                put("aperiam", "cupiditate");
                                                            }}) {{
                                                fields = new java.util.HashMap<String, String>() {{
                                                    put("at", "vero");
                                                    put("est", "harum");
                                                }};
                                                mappingSettings = new MappingSettings(                new java.util.HashMap<String, String>() {{
                                                                    put("quos", "eius");
                                                                    put("aspernatur", "ducimus");
                                                                }},                 new String[]{{
                                                                    add("a string value"),
                                                                }},                 new java.util.HashMap<String, String>() {{
                                                                    put("laudantium", "incidunt");
                                                                    put("quasi", "rem");
                                                                    put("fugiat", "dicta");
                                                                }}) {{
                                                    map = new java.util.HashMap<String, String>() {{
                                                        put("doloribus", "repudiandae");
                                                    }};
                                                    remove = new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }};
                                                    values = new java.util.HashMap<String, String>() {{
                                                        put("nemo", "voluptate");
                                                        put("blanditiis", "officia");
                                                        put("voluptas", "numquam");
                                                    }};
                                                }};
                                            }};
                                        }};
                                        strict = true;
                                        type = "a string value";
                                    }};
                                    localHost = "a string value";
                                    localScheme = "a string value";
                                    maintenanceMode = true;
                                    matchingHeaders = new java.util.HashMap<String, String>() {{
                                        put("ipsam", "corporis");
                                        put("est", "error");
                                        put("esse", "labore");
                                        put("veritatis", "vero");
                                    }};
                                    matchingRoot = "a string value";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("vitae", "inventore");
                                    }};
                                    name = "a string value";
                                    overrideHost = true;
                                    privateApp = true;
                                    privatePatterns = new String[]{{
                                        add("a string value"),
                                    }};
                                    publicPatterns = new String[]{{
                                        add("a string value"),
                                        add("a string value"),
                                    }};
                                    redirectToLocal = true;
                                    redirection = new RedirectionSettings(123123, true, "a string value") {{
                                        code = 123123;
                                        enabled = true;
                                        to = "a string value";
                                    }};
                                    root = "a string value";
                                    secComExcludedPatterns = new String[]{{
                                        add("a string value"),
                                    }};
                                    secComSettings = new ESAlgoSettings("a string value", 123123, "a string value") {{
                                        privateKey = "a string value";
                                        publicKey = "a string value";
                                        size = 123123;
                                        type = "a string value";
                                    }};
                                    sendOtoroshiHeadersBack = true;
                                    statsdConfig = new StatsdConfig(true, "a string value", 123123) {{
                                        datadog = true;
                                        host = "a string value";
                                        port = 123123;
                                    }};
                                    subdomain = "a string value";
                                    targets = new org.openapis.openapi.models.shared.Target[]{{
                                        add(new Target("www.google.com", "a string value") {{
                                            host = "www.google.com";
                                            scheme = "a string value";
                                        }}),
                                        add(new Target("www.google.com", "a string value") {{
                                            host = "www.google.com";
                                            scheme = "a string value";
                                        }}),
                                    }};
                                    transformerRef = "a string value";
                                    userFacing = true;
                                    xForwardedHeaders = true;
                                }}),
                                add(new ImportExportServiceDescriptors(true, "a string value", true, true, "a string value", true,                 new String[]{{
                                                    add("a string value"),
                                                    add("a string value"),
                                                    add("a string value"),
                                                }}, "110e8400-e29b-11d4-a716-446655440000", true, "a string value", true, "a string value", "a string value",                 new org.openapis.openapi.models.shared.Target[]{{
                                                    add(new Target("www.google.com", "a string value") {{
                                                        host = "www.google.com";
                                                        scheme = "a string value";
                                                    }}),
                                                    add(new Target("www.google.com", "a string value") {{
                                                        host = "www.google.com";
                                                        scheme = "a string value";
                                                    }}),
                                                }}) {{
                                    canary = new Canary(true, "a string value",                 new org.openapis.openapi.models.shared.Target[]{{
                                                        add(new Target("www.google.com", "a string value") {{
                                                            host = "www.google.com";
                                                            scheme = "a string value";
                                                        }}),
                                                        add(new Target("www.google.com", "a string value") {{
                                                            host = "www.google.com";
                                                            scheme = "a string value";
                                                        }}),
                                                        add(new Target("www.google.com", "a string value") {{
                                                            host = "www.google.com";
                                                            scheme = "a string value";
                                                        }}),
                                                    }}, 123123) {{
                                        enabled = true;
                                        root = "a string value";
                                        targets = new org.openapis.openapi.models.shared.Target[]{{
                                            add(new Target("www.google.com", "a string value") {{
                                                host = "www.google.com";
                                                scheme = "a string value";
                                            }}),
                                            add(new Target("www.google.com", "a string value") {{
                                                host = "www.google.com";
                                                scheme = "a string value";
                                            }}),
                                            add(new Target("www.google.com", "a string value") {{
                                                host = "www.google.com";
                                                scheme = "a string value";
                                            }}),
                                        }};
                                        traffic = 123123;
                                    }};
                                    additionalHeaders = new java.util.HashMap<String, String>() {{
                                        put("odio", "fugit");
                                        put("alias", "magni");
                                        put("vel", "quae");
                                    }};
                                    api = new ExposedApi(true) {{
                                        exposeApi = true;
                                        openApiDescriptorUrl = "http://www.google.com";
                                    }};
                                    authConfigRef = "a string value";
                                    buildMode = true;
                                    chaosConfig = new ChaosConfig(true) {{
                                        badResponsesFaultConfig = new BadResponsesFaultConfig(42.2,                 new org.openapis.openapi.models.shared.BadResponse[]{{
                                                            add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                                put("officia", "quos");
                                                                                put("placeat", "sit");
                                                                                put("iusto", "ipsa");
                                                                                put("voluptates", "inventore");
                                                                            }}, 123123) {{
                                                                body = "a string value";
                                                                headers = new java.util.HashMap<String, String>() {{
                                                                    put("quia", "quia");
                                                                    put("nostrum", "omnis");
                                                                    put("libero", "dicta");
                                                                    put("id", "libero");
                                                                }};
                                                                status = 123123;
                                                            }}),
                                                            add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                                put("distinctio", "voluptatem");
                                                                                put("autem", "esse");
                                                                                put("dolores", "assumenda");
                                                                                put("beatae", "est");
                                                                            }}, 123123) {{
                                                                body = "a string value";
                                                                headers = new java.util.HashMap<String, String>() {{
                                                                    put("totam", "dolore");
                                                                }};
                                                                status = 123123;
                                                            }}),
                                                            add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                                put("ipsam", "rerum");
                                                                                put("laudantium", "corporis");
                                                                            }}, 123123) {{
                                                                body = "a string value";
                                                                headers = new java.util.HashMap<String, String>() {{
                                                                    put("corrupti", "molestiae");
                                                                    put("provident", "accusamus");
                                                                    put("necessitatibus", "tempore");
                                                                    put("sint", "ea");
                                                                }};
                                                                status = 123123;
                                                            }}),
                                                        }}) {{
                                            ratio = 42.2;
                                            responses = new org.openapis.openapi.models.shared.BadResponse[]{{
                                                add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                    put("unde", "nulla");
                                                                }}, 123123) {{
                                                    body = "a string value";
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("neque", "exercitationem");
                                                        put("itaque", "et");
                                                    }};
                                                    status = 123123;
                                                }}),
                                            }};
                                        }};
                                        enabled = true;
                                        largeRequestFaultConfig = new LargeRequestFaultConfig(123123, 42.2) {{
                                            additionalRequestSize = 123123;
                                            ratio = 42.2;
                                        }};
                                        largeResponseFaultConfig = new LargeResponseFaultConfig(42.2) {{
                                            additionalRequestSize = 123123;
                                            ratio = 42.2;
                                        }};
                                        latencyInjectionFaultConfig = new LatencyInjectionFaultConfig(123123, 42.2, 123123) {{
                                            from = 123123;
                                            ratio = 42.2;
                                            to = 123123;
                                        }};
                                    }};
                                    clientConfig = new ClientConfig(123123, 123123, 123123, 123123, 123123, 123123, 123123, true) {{
                                        backoffFactor = 123123;
                                        callTimeout = 123123;
                                        globalTimeout = 123123;
                                        maxErrors = 123123;
                                        retries = 123123;
                                        retryInitialDelay = 123123;
                                        sampleInterval = 123123;
                                        useCircuitBreaker = true;
                                    }};
                                    clientValidatorRef = "a string value";
                                    cors = new CorsSettings(true,                 new String[]{{
                                                        add("a string value"),
                                                    }},                 new String[]{{
                                                        add("a string value"),
                                                    }}, "a string value", true,                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }},                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }}, 123123) {{
                                        allowCredentials = true;
                                        allowHeaders = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                        allowMethods = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                        allowOrigin = "a string value";
                                        enabled = true;
                                        excludedPatterns = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                        exposeHeaders = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                        maxAge = 123123;
                                    }};
                                    domain = "a string value";
                                    enabled = true;
                                    enforceSecureCommunication = true;
                                    env = "a string value";
                                    forceHttps = true;
                                    groups = new String[]{{
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                    }};
                                    gzip = new Gzip(                new String[]{{
                                                        add("a string value"),
                                                    }}, 123L, 123L, 123123, true,                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }},                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }}) {{
                                        blackList = new String[]{{
                                            add("a string value"),
                                        }};
                                        bufferSize = 123L;
                                        chunkedThreshold = 123L;
                                        compressionLevel = 123123;
                                        enabled = true;
                                        excludedPatterns = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                        whiteList = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                    }};
                                    headersVerification = new java.util.HashMap<String, String>() {{
                                        put("odit", "explicabo");
                                        put("corporis", "error");
                                        put("earum", "adipisci");
                                    }};
                                    healthCheck = new HealthCheck(true) {{
                                        enabled = true;
                                        url = "http://www.google.com";
                                    }};
                                    id = "110e8400-e29b-11d4-a716-446655440000";
                                    ipFiltering = new IpFiltering(                new String[]{{
                                                        add("192.192.192.192"),
                                                        add("192.192.192.192"),
                                                    }},                 new String[]{{
                                                        add("192.192.192.192"),
                                                        add("192.192.192.192"),
                                                        add("192.192.192.192"),
                                                    }}) {{
                                        blacklist = new String[]{{
                                            add("192.192.192.192"),
                                            add("192.192.192.192"),
                                            add("192.192.192.192"),
                                            add("192.192.192.192"),
                                        }};
                                        whitelist = new String[]{{
                                            add("192.192.192.192"),
                                            add("192.192.192.192"),
                                            add("192.192.192.192"),
                                        }};
                                    }};
                                    jwtVerifier = new LocalJwtVerifier(                new ESAlgoSettings("a string value", 123123, "a string value") {{
                                                        privateKey = "a string value";
                                                        publicKey = "a string value";
                                                        size = 123123;
                                                        type = "a string value";
                                                    }}, true,                 new InHeader("a string value", "a string value", "a string value") {{
                                                        name = "a string value";
                                                        remove = "a string value";
                                                        type = "a string value";
                                                    }},                 new Sign(                new ESAlgoSettings("a string value", 123123, "a string value") {{
                                                                        privateKey = "a string value";
                                                                        publicKey = "a string value";
                                                                        size = 123123;
                                                                        type = "a string value";
                                                                    }}, "a string value",                 new VerificationSettings(                new java.util.HashMap<String, String>() {{
                                                                                        put("tempore", "libero");
                                                                                        put("velit", "doloremque");
                                                                                        put("delectus", "impedit");
                                                                                        put("cum", "ipsum");
                                                                                    }}) {{
                                                                        mappingSettings = new MappingSettings(                new java.util.HashMap<String, String>() {{
                                                                                            put("saepe", "deserunt");
                                                                                        }},                 new String[]{{
                                                                                            add("a string value"),
                                                                                        }},                 new java.util.HashMap<String, String>() {{
                                                                                            put("veniam", "libero");
                                                                                            put("architecto", "cupiditate");
                                                                                        }});;
                                                                    }};) {{
                                                        algoSettings = new HSAlgoSettings("a string value", 123123, "a string value") {{
                                                            secret = "a string value";
                                                            size = 123123;
                                                            type = "a string value";
                                                        }};
                                                        type = "a string value";
                                                        verificationSettings = new VerificationSettings(                new java.util.HashMap<String, String>() {{
                                                                            put("eaque", "saepe");
                                                                            put("architecto", "quos");
                                                                        }}) {{
                                                            fields = new java.util.HashMap<String, String>() {{
                                                                put("ipsa", "sint");
                                                                put("vero", "sequi");
                                                            }};
                                                            mappingSettings = new MappingSettings(                new java.util.HashMap<String, String>() {{
                                                                                put("excepturi", "occaecati");
                                                                                put("nemo", "aliquam");
                                                                                put("nostrum", "doloribus");
                                                                            }},                 new String[]{{
                                                                                add("a string value"),
                                                                                add("a string value"),
                                                                                add("a string value"),
                                                                                add("a string value"),
                                                                            }},                 new java.util.HashMap<String, String>() {{
                                                                                put("enim", "hic");
                                                                                put("animi", "quas");
                                                                                put("totam", "molestias");
                                                                            }}) {{
                                                                map = new java.util.HashMap<String, String>() {{
                                                                    put("cum", "dicta");
                                                                    put("earum", "veniam");
                                                                    put("animi", "dolores");
                                                                    put("nam", "dicta");
                                                                }};
                                                                remove = new String[]{{
                                                                    add("a string value"),
                                                                }};
                                                                values = new java.util.HashMap<String, String>() {{
                                                                    put("nobis", "ipsa");
                                                                    put("ducimus", "maiores");
                                                                    put("veritatis", "quasi");
                                                                    put("laboriosam", "pariatur");
                                                                }};
                                                            }};
                                                        }};
                                                    }}, true, "a string value") {{
                                        algoSettings = new HSAlgoSettings("a string value", 123123, "a string value") {{
                                            secret = "a string value";
                                            size = 123123;
                                            type = "a string value";
                                        }};
                                        enabled = true;
                                        source = new InHeader("a string value", "a string value", "a string value") {{
                                            name = "a string value";
                                            remove = "a string value";
                                            type = "a string value";
                                        }};
                                        strategy = new Sign(                new ESAlgoSettings("a string value", 123123, "a string value") {{
                                                            privateKey = "a string value";
                                                            publicKey = "a string value";
                                                            size = 123123;
                                                            type = "a string value";
                                                        }}, "a string value",                 new VerificationSettings(                new java.util.HashMap<String, String>() {{
                                                                            put("error", "veritatis");
                                                                        }}) {{
                                                            mappingSettings = new MappingSettings(                new java.util.HashMap<String, String>() {{
                                                                                put("voluptate", "pariatur");
                                                                                put("itaque", "similique");
                                                                            }},                 new String[]{{
                                                                                add("a string value"),
                                                                                add("a string value"),
                                                                                add("a string value"),
                                                                                add("a string value"),
                                                                            }},                 new java.util.HashMap<String, String>() {{
                                                                                put("quaerat", "commodi");
                                                                                put("officiis", "placeat");
                                                                            }});;
                                                        }};) {{
                                            algoSettings = new JWKSAlgoSettings("a string value") {{
                                                headers = new java.util.HashMap<String, String>() {{
                                                    put("fugit", "numquam");
                                                    put("numquam", "nesciunt");
                                                    put("at", "officia");
                                                }};
                                                kty = "a string value";
                                                timeout = 123L;
                                                ttl = 123L;
                                                type = "a string value";
                                                url = "a string value";
                                            }};
                                            type = "a string value";
                                            verificationSettings = new VerificationSettings(                new java.util.HashMap<String, String>() {{
                                                                put("pariatur", "nemo");
                                                                put("reprehenderit", "aperiam");
                                                                put("odio", "minima");
                                                                put("in", "ducimus");
                                                            }}) {{
                                                fields = new java.util.HashMap<String, String>() {{
                                                    put("optio", "necessitatibus");
                                                    put("corporis", "qui");
                                                }};
                                                mappingSettings = new MappingSettings(                new java.util.HashMap<String, String>() {{
                                                                    put("ratione", "labore");
                                                                    put("totam", "occaecati");
                                                                    put("voluptas", "quo");
                                                                }},                 new String[]{{
                                                                    add("a string value"),
                                                                }},                 new java.util.HashMap<String, String>() {{
                                                                    put("fuga", "nostrum");
                                                                    put("est", "impedit");
                                                                    put("delectus", "tempore");
                                                                    put("vero", "odit");
                                                                }}) {{
                                                    map = new java.util.HashMap<String, String>() {{
                                                        put("voluptatum", "cupiditate");
                                                        put("minima", "placeat");
                                                        put("enim", "neque");
                                                    }};
                                                    remove = new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }};
                                                    values = new java.util.HashMap<String, String>() {{
                                                        put("eum", "modi");
                                                        put("corporis", "magnam");
                                                        put("voluptates", "maiores");
                                                        put("tempore", "aperiam");
                                                    }};
                                                }};
                                            }};
                                        }};
                                        strict = true;
                                        type = "a string value";
                                    }};
                                    localHost = "a string value";
                                    localScheme = "a string value";
                                    maintenanceMode = true;
                                    matchingHeaders = new java.util.HashMap<String, String>() {{
                                        put("eligendi", "possimus");
                                        put("non", "magnam");
                                    }};
                                    matchingRoot = "a string value";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("sed", "asperiores");
                                        put("veniam", "consequuntur");
                                        put("facere", "laudantium");
                                        put("odit", "pariatur");
                                    }};
                                    name = "a string value";
                                    overrideHost = true;
                                    privateApp = true;
                                    privatePatterns = new String[]{{
                                        add("a string value"),
                                    }};
                                    publicPatterns = new String[]{{
                                        add("a string value"),
                                        add("a string value"),
                                    }};
                                    redirectToLocal = true;
                                    redirection = new RedirectionSettings(123123, true, "a string value") {{
                                        code = 123123;
                                        enabled = true;
                                        to = "a string value";
                                    }};
                                    root = "a string value";
                                    secComExcludedPatterns = new String[]{{
                                        add("a string value"),
                                    }};
                                    secComSettings = new HSAlgoSettings("a string value", 123123, "a string value") {{
                                        secret = "a string value";
                                        size = 123123;
                                        type = "a string value";
                                    }};
                                    sendOtoroshiHeadersBack = true;
                                    statsdConfig = new StatsdConfig(true, "a string value", 123123) {{
                                        datadog = true;
                                        host = "a string value";
                                        port = 123123;
                                    }};
                                    subdomain = "a string value";
                                    targets = new org.openapis.openapi.models.shared.Target[]{{
                                        add(new Target("www.google.com", "a string value") {{
                                            host = "www.google.com";
                                            scheme = "a string value";
                                        }}),
                                        add(new Target("www.google.com", "a string value") {{
                                            host = "www.google.com";
                                            scheme = "a string value";
                                        }}),
                                        add(new Target("www.google.com", "a string value") {{
                                            host = "www.google.com";
                                            scheme = "a string value";
                                        }}),
                                    }};
                                    transformerRef = "a string value";
                                    userFacing = true;
                                    xForwardedHeaders = true;
                                }}),
                                add(new ImportExportServiceDescriptors(true, "a string value", true, true, "a string value", true,                 new String[]{{
                                                    add("a string value"),
                                                }}, "110e8400-e29b-11d4-a716-446655440000", true, "a string value", true, "a string value", "a string value",                 new org.openapis.openapi.models.shared.Target[]{{
                                                    add(new Target("www.google.com", "a string value") {{
                                                        host = "www.google.com";
                                                        scheme = "a string value";
                                                    }}),
                                                }}) {{
                                    canary = new Canary(true, "a string value",                 new org.openapis.openapi.models.shared.Target[]{{
                                                        add(new Target("www.google.com", "a string value") {{
                                                            host = "www.google.com";
                                                            scheme = "a string value";
                                                        }}),
                                                        add(new Target("www.google.com", "a string value") {{
                                                            host = "www.google.com";
                                                            scheme = "a string value";
                                                        }}),
                                                    }}, 123123) {{
                                        enabled = true;
                                        root = "a string value";
                                        targets = new org.openapis.openapi.models.shared.Target[]{{
                                            add(new Target("www.google.com", "a string value") {{
                                                host = "www.google.com";
                                                scheme = "a string value";
                                            }}),
                                            add(new Target("www.google.com", "a string value") {{
                                                host = "www.google.com";
                                                scheme = "a string value";
                                            }}),
                                            add(new Target("www.google.com", "a string value") {{
                                                host = "www.google.com";
                                                scheme = "a string value";
                                            }}),
                                            add(new Target("www.google.com", "a string value") {{
                                                host = "www.google.com";
                                                scheme = "a string value";
                                            }}),
                                        }};
                                        traffic = 123123;
                                    }};
                                    additionalHeaders = new java.util.HashMap<String, String>() {{
                                        put("distinctio", "nisi");
                                        put("quis", "nisi");
                                        put("libero", "minus");
                                    }};
                                    api = new ExposedApi(true) {{
                                        exposeApi = true;
                                        openApiDescriptorUrl = "http://www.google.com";
                                    }};
                                    authConfigRef = "a string value";
                                    buildMode = true;
                                    chaosConfig = new ChaosConfig(true) {{
                                        badResponsesFaultConfig = new BadResponsesFaultConfig(42.2,                 new org.openapis.openapi.models.shared.BadResponse[]{{
                                                            add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                                put("repellat", "quisquam");
                                                                                put("sequi", "nihil");
                                                                            }}, 123123) {{
                                                                body = "a string value";
                                                                headers = new java.util.HashMap<String, String>() {{
                                                                    put("veniam", "eos");
                                                                    put("reiciendis", "earum");
                                                                    put("reprehenderit", "praesentium");
                                                                }};
                                                                status = 123123;
                                                            }}),
                                                            add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                                put("repudiandae", "consequatur");
                                                                                put("maxime", "aspernatur");
                                                                                put("nam", "expedita");
                                                                            }}, 123123) {{
                                                                body = "a string value";
                                                                headers = new java.util.HashMap<String, String>() {{
                                                                    put("illo", "labore");
                                                                    put("assumenda", "aliquam");
                                                                    put("quisquam", "provident");
                                                                }};
                                                                status = 123123;
                                                            }}),
                                                            add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                                put("repellendus", "iure");
                                                                                put("dolorem", "commodi");
                                                                                put("impedit", "commodi");
                                                                            }}, 123123) {{
                                                                body = "a string value";
                                                                headers = new java.util.HashMap<String, String>() {{
                                                                    put("provident", "repudiandae");
                                                                    put("rerum", "dignissimos");
                                                                    put("corporis", "vero");
                                                                }};
                                                                status = 123123;
                                                            }}),
                                                            add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                                put("amet", "illum");
                                                                            }}, 123123) {{
                                                                body = "a string value";
                                                                headers = new java.util.HashMap<String, String>() {{
                                                                    put("voluptatem", "ad");
                                                                }};
                                                                status = 123123;
                                                            }}),
                                                        }}) {{
                                            ratio = 42.2;
                                            responses = new org.openapis.openapi.models.shared.BadResponse[]{{
                                                add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                    put("rerum", "eos");
                                                                    put("reprehenderit", "nostrum");
                                                                }}, 123123) {{
                                                    body = "a string value";
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("ipsum", "ad");
                                                        put("voluptatibus", "voluptatibus");
                                                        put("consequuntur", "debitis");
                                                    }};
                                                    status = 123123;
                                                }}),
                                                add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                    put("eligendi", "fugiat");
                                                                    put("unde", "officiis");
                                                                    put("ducimus", "dolor");
                                                                }}, 123123) {{
                                                    body = "a string value";
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("iusto", "est");
                                                    }};
                                                    status = 123123;
                                                }}),
                                                add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                    put("dignissimos", "esse");
                                                                }}, 123123) {{
                                                    body = "a string value";
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("error", "porro");
                                                    }};
                                                    status = 123123;
                                                }}),
                                                add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                    put("incidunt", "accusamus");
                                                                }}, 123123) {{
                                                    body = "a string value";
                                                    headers = new java.util.HashMap<String, String>() {{
                                                        put("ad", "aspernatur");
                                                        put("enim", "delectus");
                                                        put("iusto", "dignissimos");
                                                        put("libero", "illo");
                                                    }};
                                                    status = 123123;
                                                }}),
                                            }};
                                        }};
                                        enabled = true;
                                        largeRequestFaultConfig = new LargeRequestFaultConfig(123123, 42.2) {{
                                            additionalRequestSize = 123123;
                                            ratio = 42.2;
                                        }};
                                        largeResponseFaultConfig = new LargeResponseFaultConfig(42.2) {{
                                            additionalRequestSize = 123123;
                                            ratio = 42.2;
                                        }};
                                        latencyInjectionFaultConfig = new LatencyInjectionFaultConfig(123123, 42.2, 123123) {{
                                            from = 123123;
                                            ratio = 42.2;
                                            to = 123123;
                                        }};
                                    }};
                                    clientConfig = new ClientConfig(123123, 123123, 123123, 123123, 123123, 123123, 123123, true) {{
                                        backoffFactor = 123123;
                                        callTimeout = 123123;
                                        globalTimeout = 123123;
                                        maxErrors = 123123;
                                        retries = 123123;
                                        retryInitialDelay = 123123;
                                        sampleInterval = 123123;
                                        useCircuitBreaker = true;
                                    }};
                                    clientValidatorRef = "a string value";
                                    cors = new CorsSettings(true,                 new String[]{{
                                                        add("a string value"),
                                                    }},                 new String[]{{
                                                        add("a string value"),
                                                    }}, "a string value", true,                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }},                 new String[]{{
                                                        add("a string value"),
                                                    }}, 123123) {{
                                        allowCredentials = true;
                                        allowHeaders = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                        allowMethods = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                        allowOrigin = "a string value";
                                        enabled = true;
                                        excludedPatterns = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                        exposeHeaders = new String[]{{
                                            add("a string value"),
                                        }};
                                        maxAge = 123123;
                                    }};
                                    domain = "a string value";
                                    enabled = true;
                                    enforceSecureCommunication = true;
                                    env = "a string value";
                                    forceHttps = true;
                                    groups = new String[]{{
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                    }};
                                    gzip = new Gzip(                new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }}, 123L, 123L, 123123, true,                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }},                 new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }}) {{
                                        blackList = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                        bufferSize = 123L;
                                        chunkedThreshold = 123L;
                                        compressionLevel = 123123;
                                        enabled = true;
                                        excludedPatterns = new String[]{{
                                            add("a string value"),
                                        }};
                                        whiteList = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                    }};
                                    headersVerification = new java.util.HashMap<String, String>() {{
                                        put("consequatur", "nemo");
                                        put("molestiae", "itaque");
                                        put("facilis", "corrupti");
                                        put("aperiam", "sint");
                                    }};
                                    healthCheck = new HealthCheck(true) {{
                                        enabled = true;
                                        url = "http://www.google.com";
                                    }};
                                    id = "110e8400-e29b-11d4-a716-446655440000";
                                    ipFiltering = new IpFiltering(                new String[]{{
                                                        add("192.192.192.192"),
                                                        add("192.192.192.192"),
                                                        add("192.192.192.192"),
                                                    }},                 new String[]{{
                                                        add("192.192.192.192"),
                                                    }}) {{
                                        blacklist = new String[]{{
                                            add("192.192.192.192"),
                                            add("192.192.192.192"),
                                            add("192.192.192.192"),
                                            add("192.192.192.192"),
                                        }};
                                        whitelist = new String[]{{
                                            add("192.192.192.192"),
                                        }};
                                    }};
                                    jwtVerifier = new LocalJwtVerifier(                new RSAlgoSettings("a string value", 123123, "a string value") {{
                                                        privateKey = "a string value";
                                                        publicKey = "a string value";
                                                        size = 123123;
                                                        type = "a string value";
                                                    }}, true,                 new InCookie("a string value", "a string value") {{
                                                        name = "a string value";
                                                        type = "a string value";
                                                    }},                 new PassThrough("a string value",                 new VerificationSettings(                new java.util.HashMap<String, String>() {{
                                                                                        put("numquam", "dolorum");
                                                                                        put("possimus", "voluptate");
                                                                                    }}) {{
                                                                        mappingSettings = new MappingSettings(                new java.util.HashMap<String, String>() {{
                                                                                            put("nesciunt", "quaerat");
                                                                                        }},                 new String[]{{
                                                                                            add("a string value"),
                                                                                            add("a string value"),
                                                                                            add("a string value"),
                                                                                            add("a string value"),
                                                                                        }},                 new java.util.HashMap<String, String>() {{
                                                                                            put("sunt", "distinctio");
                                                                                            put("iusto", "quas");
                                                                                            put("et", "facilis");
                                                                                            put("amet", "autem");
                                                                                        }});;
                                                                    }};) {{
                                                        type = "a string value";
                                                        verificationSettings = new VerificationSettings(                new java.util.HashMap<String, String>() {{
                                                                            put("aut", "aut");
                                                                            put("eveniet", "odio");
                                                                        }}) {{
                                                            fields = new java.util.HashMap<String, String>() {{
                                                                put("explicabo", "accusamus");
                                                                put("rem", "aperiam");
                                                            }};
                                                            mappingSettings = new MappingSettings(                new java.util.HashMap<String, String>() {{
                                                                                put("mollitia", "dignissimos");
                                                                            }},                 new String[]{{
                                                                                add("a string value"),
                                                                                add("a string value"),
                                                                                add("a string value"),
                                                                                add("a string value"),
                                                                            }},                 new java.util.HashMap<String, String>() {{
                                                                                put("molestiae", "veniam");
                                                                                put("reiciendis", "ab");
                                                                            }}) {{
                                                                map = new java.util.HashMap<String, String>() {{
                                                                    put("deleniti", "enim");
                                                                }};
                                                                remove = new String[]{{
                                                                    add("a string value"),
                                                                    add("a string value"),
                                                                }};
                                                                values = new java.util.HashMap<String, String>() {{
                                                                    put("minima", "libero");
                                                                    put("magnam", "sit");
                                                                    put("modi", "eum");
                                                                }};
                                                            }};
                                                        }};
                                                    }}, true, "a string value") {{
                                        algoSettings = new HSAlgoSettings("a string value", 123123, "a string value") {{
                                            secret = "a string value";
                                            size = 123123;
                                            type = "a string value";
                                        }};
                                        enabled = true;
                                        source = new InQueryParam("a string value", "a string value") {{
                                            name = "a string value";
                                            type = "a string value";
                                        }};
                                        strategy = new PassThrough("a string value",                 new VerificationSettings(                new java.util.HashMap<String, String>() {{
                                                                            put("laborum", "dignissimos");
                                                                            put("vero", "qui");
                                                                            put("consectetur", "repellat");
                                                                            put("explicabo", "explicabo");
                                                                        }}) {{
                                                            mappingSettings = new MappingSettings(                new java.util.HashMap<String, String>() {{
                                                                                put("nihil", "non");
                                                                                put("ab", "illo");
                                                                            }},                 new String[]{{
                                                                                add("a string value"),
                                                                                add("a string value"),
                                                                                add("a string value"),
                                                                                add("a string value"),
                                                                            }},                 new java.util.HashMap<String, String>() {{
                                                                                put("delectus", "non");
                                                                                put("distinctio", "in");
                                                                                put("exercitationem", "labore");
                                                                            }});;
                                                        }};) {{
                                            type = "a string value";
                                            verificationSettings = new VerificationSettings(                new java.util.HashMap<String, String>() {{
                                                                put("quo", "itaque");
                                                            }}) {{
                                                fields = new java.util.HashMap<String, String>() {{
                                                    put("dolor", "occaecati");
                                                    put("atque", "beatae");
                                                    put("at", "labore");
                                                    put("minus", "esse");
                                                }};
                                                mappingSettings = new MappingSettings(                new java.util.HashMap<String, String>() {{
                                                                    put("porro", "provident");
                                                                }},                 new String[]{{
                                                                    add("a string value"),
                                                                }},                 new java.util.HashMap<String, String>() {{
                                                                    put("dignissimos", "consectetur");
                                                                    put("soluta", "natus");
                                                                    put("temporibus", "officia");
                                                                    put("amet", "tenetur");
                                                                }}) {{
                                                    map = new java.util.HashMap<String, String>() {{
                                                        put("perferendis", "rerum");
                                                    }};
                                                    remove = new String[]{{
                                                        add("a string value"),
                                                        add("a string value"),
                                                    }};
                                                    values = new java.util.HashMap<String, String>() {{
                                                        put("dignissimos", "repellat");
                                                    }};
                                                }};
                                            }};
                                        }};
                                        strict = true;
                                        type = "a string value";
                                    }};
                                    localHost = "a string value";
                                    localScheme = "a string value";
                                    maintenanceMode = true;
                                    matchingHeaders = new java.util.HashMap<String, String>() {{
                                        put("alias", "rem");
                                        put("aut", "quos");
                                        put("laudantium", "repellendus");
                                    }};
                                    matchingRoot = "a string value";
                                    metadata = new java.util.HashMap<String, String>() {{
                                        put("quae", "eaque");
                                    }};
                                    name = "a string value";
                                    overrideHost = true;
                                    privateApp = true;
                                    privatePatterns = new String[]{{
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                    }};
                                    publicPatterns = new String[]{{
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                    }};
                                    redirectToLocal = true;
                                    redirection = new RedirectionSettings(123123, true, "a string value") {{
                                        code = 123123;
                                        enabled = true;
                                        to = "a string value";
                                    }};
                                    root = "a string value";
                                    secComExcludedPatterns = new String[]{{
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                    }};
                                    secComSettings = new JWKSAlgoSettings("a string value") {{
                                        headers = new java.util.HashMap<String, String>() {{
                                            put("sed", "voluptatem");
                                            put("alias", "eveniet");
                                            put("hic", "voluptatem");
                                        }};
                                        kty = "a string value";
                                        timeout = 123L;
                                        ttl = 123L;
                                        type = "a string value";
                                        url = "a string value";
                                    }};
                                    sendOtoroshiHeadersBack = true;
                                    statsdConfig = new StatsdConfig(true, "a string value", 123123) {{
                                        datadog = true;
                                        host = "a string value";
                                        port = 123123;
                                    }};
                                    subdomain = "a string value";
                                    targets = new org.openapis.openapi.models.shared.Target[]{{
                                        add(new Target("www.google.com", "a string value") {{
                                            host = "www.google.com";
                                            scheme = "a string value";
                                        }}),
                                        add(new Target("www.google.com", "a string value") {{
                                            host = "www.google.com";
                                            scheme = "a string value";
                                        }}),
                                    }};
                                    transformerRef = "a string value";
                                    userFacing = true;
                                    xForwardedHeaders = true;
                                }}),
                            }},                 new org.openapis.openapi.models.shared.ImportExportServiceGroups[]{{
                                add(new ImportExportServiceGroups("a string value", "a string value") {{
                                    description = "a string value";
                                    id = "a string value";
                                    name = "a string value";
                                }}),
                                add(new ImportExportServiceGroups("a string value", "a string value") {{
                                    description = "a string value";
                                    id = "a string value";
                                    name = "a string value";
                                }}),
                                add(new ImportExportServiceGroups("a string value", "a string value") {{
                                    description = "a string value";
                                    id = "a string value";
                                    name = "a string value";
                                }}),
                                add(new ImportExportServiceGroups("a string value", "a string value") {{
                                    description = "a string value";
                                    id = "a string value";
                                    name = "a string value";
                                }}),
                            }},                 new org.openapis.openapi.models.shared.ImportExportSimpleAdmins[]{{
                                add(new ImportExportSimpleAdmins(123L, "a string value", "a string value", "a string value") {{
                                    createdAt = 123L;
                                    label = "a string value";
                                    password = "a string value";
                                    username = "a string value";
                                }}),
                                add(new ImportExportSimpleAdmins(123L, "a string value", "a string value", "a string value") {{
                                    createdAt = 123L;
                                    label = "a string value";
                                    password = "a string value";
                                    username = "a string value";
                                }}),
                                add(new ImportExportSimpleAdmins(123L, "a string value", "a string value", "a string value") {{
                                    createdAt = 123L;
                                    label = "a string value";
                                    password = "a string value";
                                    username = "a string value";
                                }}),
                            }},                 new ImportExportStats(123L, 123L, 123L);) {{
                appConfig = new java.util.HashMap<String, String>() {{
                    put("beatae", "aliquid");
                }};
            }};            

            FullImportFromFileResponse res = sdk.import_.fullImportFromFile(req, new FullImportFromFileSecurity("modi", "optio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.done != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
