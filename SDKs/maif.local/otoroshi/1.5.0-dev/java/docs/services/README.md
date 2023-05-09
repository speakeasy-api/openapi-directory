# services

## Overview

Everything about Otoroshi service descriptors

### Available Operations

* [allServices](#allservices) - Get all services
* [createService](#createservice) - Create a new service descriptor
* [createServiceTemplate](#createservicetemplate) - Create a service descriptor error template
* [deleteService](#deleteservice) - Delete a service descriptor
* [deleteServiceTemplate](#deleteservicetemplate) - Delete a service descriptor error template
* [patchService](#patchservice) - Update a service descriptor with a diff
* [service](#service) - Get a service descriptor
* [serviceAddTarget](#serviceaddtarget) - Add a target to a service descriptor
* [serviceDeleteTarget](#servicedeletetarget) - Delete a service descriptor target
* [serviceGroupServices](#servicegroupservices) - Get all services descriptor for a group
* [serviceTargets](#servicetargets) - Get a service descriptor targets
* [serviceTemplate](#servicetemplate) - Get a service descriptor error template
* [updateService](#updateservice) - Update a service descriptor
* [updateServiceTargets](#updateservicetargets) - Update a service descriptor targets
* [updateServiceTemplate](#updateservicetemplate) - Update an error template to a service descriptor

## allServices

Get all services

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllServicesResponse;
import org.openapis.openapi.models.operations.AllServicesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AllServicesResponse res = sdk.services.allServices(new AllServicesSecurity("laborum", "eveniet") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.services != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createService

Create a new service descriptor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceResponse;
import org.openapis.openapi.models.operations.CreateServiceSecurity;
import org.openapis.openapi.models.shared.BadResponse;
import org.openapis.openapi.models.shared.BadResponsesFaultConfig;
import org.openapis.openapi.models.shared.Canary;
import org.openapis.openapi.models.shared.ChaosConfig;
import org.openapis.openapi.models.shared.ClientConfig;
import org.openapis.openapi.models.shared.CorsSettings;
import org.openapis.openapi.models.shared.ESAlgoSettings;
import org.openapis.openapi.models.shared.ExposedApi;
import org.openapis.openapi.models.shared.Gzip;
import org.openapis.openapi.models.shared.HSAlgoSettings;
import org.openapis.openapi.models.shared.HealthCheck;
import org.openapis.openapi.models.shared.InCookie;
import org.openapis.openapi.models.shared.InHeader;
import org.openapis.openapi.models.shared.InQueryParam;
import org.openapis.openapi.models.shared.IpFiltering;
import org.openapis.openapi.models.shared.JWKSAlgoSettings;
import org.openapis.openapi.models.shared.LargeRequestFaultConfig;
import org.openapis.openapi.models.shared.LargeResponseFaultConfig;
import org.openapis.openapi.models.shared.LatencyInjectionFaultConfig;
import org.openapis.openapi.models.shared.LocalJwtVerifier;
import org.openapis.openapi.models.shared.MappingSettings;
import org.openapis.openapi.models.shared.PassThrough;
import org.openapis.openapi.models.shared.RSAlgoSettings;
import org.openapis.openapi.models.shared.RedirectionSettings;
import org.openapis.openapi.models.shared.RefJwtVerifier;
import org.openapis.openapi.models.shared.Service;
import org.openapis.openapi.models.shared.Sign;
import org.openapis.openapi.models.shared.StatsdConfig;
import org.openapis.openapi.models.shared.Target;
import org.openapis.openapi.models.shared.Transform;
import org.openapis.openapi.models.shared.TransformSettings;
import org.openapis.openapi.models.shared.VerificationSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.Service req = new Service(true, "a string value", true, true, "a string value", true,                 new String[]{{
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
                                }}, 123123);;
                additionalHeaders = new java.util.HashMap<String, String>() {{
                    put("alias", "suscipit");
                    put("deserunt", "molestias");
                }};
                api = new ExposedApi(true) {{
                    openApiDescriptorUrl = "http://www.google.com";
                }};;
                authConfigRef = "a string value";
                chaosConfig = new ChaosConfig(true) {{
                    badResponsesFaultConfig = new BadResponsesFaultConfig(42.2,                 new org.openapis.openapi.models.shared.BadResponse[]{{
                                        add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                            put("quaerat", "eligendi");
                                                            put("hic", "nostrum");
                                                        }}, 123123) {{
                                            body = "a string value";
                                            headers = new java.util.HashMap<String, String>() {{
                                                put("occaecati", "labore");
                                                put("quo", "perferendis");
                                                put("fugit", "aliquid");
                                            }};
                                            status = 123123;
                                        }}),
                                        add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                            put("facere", "impedit");
                                                            put("quasi", "deserunt");
                                                            put("quod", "laboriosam");
                                                        }}, 123123) {{
                                            body = "a string value";
                                            headers = new java.util.HashMap<String, String>() {{
                                                put("unde", "nulla");
                                                put("error", "mollitia");
                                                put("magnam", "nostrum");
                                                put("esse", "corrupti");
                                            }};
                                            status = 123123;
                                        }}),
                                        add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                            put("maxime", "consequatur");
                                                            put("eaque", "architecto");
                                                            put("similique", "porro");
                                                            put("blanditiis", "quae");
                                                        }}, 123123) {{
                                            body = "a string value";
                                            headers = new java.util.HashMap<String, String>() {{
                                                put("voluptatem", "facere");
                                            }};
                                            status = 123123;
                                        }}),
                                    }});;
                    largeRequestFaultConfig = new LargeRequestFaultConfig(123123, 42.2);;
                    largeResponseFaultConfig = new LargeResponseFaultConfig(42.2) {{
                        additionalRequestSize = 123123;
                    }};;
                    latencyInjectionFaultConfig = new LatencyInjectionFaultConfig(123123, 42.2, 123123);;
                }};;
                clientConfig = new ClientConfig(123123, 123123, 123123, 123123, 123123, 123123, 123123, true);;
                clientValidatorRef = "a string value";
                cors = new CorsSettings(true,                 new String[]{{
                                    add("a string value"),
                                }},                 new String[]{{
                                    add("a string value"),
                                    add("a string value"),
                                    add("a string value"),
                                    add("a string value"),
                                }}, "a string value", true,                 new String[]{{
                                    add("a string value"),
                                }},                 new String[]{{
                                    add("a string value"),
                                    add("a string value"),
                                    add("a string value"),
                                    add("a string value"),
                                }}, 123123);;
                gzip = new Gzip(                new String[]{{
                                    add("a string value"),
                                    add("a string value"),
                                    add("a string value"),
                                    add("a string value"),
                                }}, 123L, 123L, 123123, true,                 new String[]{{
                                    add("a string value"),
                                }},                 new String[]{{
                                    add("a string value"),
                                    add("a string value"),
                                    add("a string value"),
                                }});;
                headersVerification = new java.util.HashMap<String, String>() {{
                    put("maiores", "laudantium");
                    put("maiores", "alias");
                    put("asperiores", "rem");
                    put("dicta", "suscipit");
                }};
                healthCheck = new HealthCheck(true) {{
                    url = "http://www.google.com";
                }};;
                ipFiltering = new IpFiltering(                new String[]{{
                                    add("192.192.192.192"),
                                    add("192.192.192.192"),
                                    add("192.192.192.192"),
                                    add("192.192.192.192"),
                                }},                 new String[]{{
                                    add("192.192.192.192"),
                                    add("192.192.192.192"),
                                    add("192.192.192.192"),
                                    add("192.192.192.192"),
                                }});;
                jwtVerifier = new LocalJwtVerifier(                new RSAlgoSettings("a string value", 123123, "a string value") {{
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
                                                                    put("laudantium", "velit");
                                                                    put("reiciendis", "amet");
                                                                    put("nemo", "ipsa");
                                                                    put("quisquam", "tenetur");
                                                                }}) {{
                                                    mappingSettings = new MappingSettings(                new java.util.HashMap<String, String>() {{
                                                                        put("molestiae", "aliquid");
                                                                        put("asperiores", "a");
                                                                        put("nobis", "perspiciatis");
                                                                    }},                 new String[]{{
                                                                        add("a string value"),
                                                                    }},                 new java.util.HashMap<String, String>() {{
                                                                        put("minus", "commodi");
                                                                    }});;
                                                }};) {{
                                    algoSettings = new JWKSAlgoSettings("a string value") {{
                                        headers = new java.util.HashMap<String, String>() {{
                                            put("neque", "vero");
                                        }};
                                        kty = "a string value";
                                        timeout = 123L;
                                        ttl = 123L;
                                        type = "a string value";
                                        url = "a string value";
                                    }};
                                    type = "a string value";
                                    verificationSettings = new VerificationSettings(                new java.util.HashMap<String, String>() {{
                                                        put("sed", "nesciunt");
                                                        put("maxime", "quis");
                                                        put("cupiditate", "aliquam");
                                                    }}) {{
                                        fields = new java.util.HashMap<String, String>() {{
                                            put("accusantium", "qui");
                                            put("impedit", "beatae");
                                            put("incidunt", "dicta");
                                        }};
                                        mappingSettings = new MappingSettings(                new java.util.HashMap<String, String>() {{
                                                            put("ullam", "quae");
                                                        }},                 new String[]{{
                                                            add("a string value"),
                                                            add("a string value"),
                                                            add("a string value"),
                                                        }},                 new java.util.HashMap<String, String>() {{
                                                            put("quam", "magni");
                                                            put("deserunt", "delectus");
                                                        }}) {{
                                            map = new java.util.HashMap<String, String>() {{
                                                put("corporis", "rerum");
                                            }};
                                            remove = new String[]{{
                                                add("a string value"),
                                            }};
                                            values = new java.util.HashMap<String, String>() {{
                                                put("vel", "accusantium");
                                                put("id", "laboriosam");
                                                put("ex", "quas");
                                            }};
                                        }};
                                    }};
                                }}, true, "a string value");;
                localHost = "a string value";
                localScheme = "a string value";
                matchingHeaders = new java.util.HashMap<String, String>() {{
                    put("porro", "tempore");
                    put("quidem", "modi");
                    put("voluptates", "fugit");
                    put("eius", "sequi");
                }};
                matchingRoot = "a string value";
                metadata = new java.util.HashMap<String, String>() {{
                    put("asperiores", "esse");
                    put("blanditiis", "sint");
                    put("repellat", "a");
                    put("animi", "maiores");
                }};
                overrideHost = true;
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
                redirection = new RedirectionSettings(123123, true, "a string value");;
                secComExcludedPatterns = new String[]{{
                    add("a string value"),
                    add("a string value"),
                    add("a string value"),
                }};
                secComSettings = new RSAlgoSettings("a string value", 123123, "a string value") {{
                    privateKey = "a string value";
                }};;
                sendOtoroshiHeadersBack = true;
                statsdConfig = new StatsdConfig(true, "a string value", 123123);;
                transformerRef = "a string value";
                userFacing = true;
                xForwardedHeaders = true;
            }};            

            CreateServiceResponse res = sdk.services.createService(req, new CreateServiceSecurity("velit", "officiis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createServiceTemplate

Update a service descriptor targets

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceTemplateRequest;
import org.openapis.openapi.models.operations.CreateServiceTemplateResponse;
import org.openapis.openapi.models.operations.CreateServiceTemplateSecurity;
import org.openapis.openapi.models.shared.ErrorTemplate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateServiceTemplateRequest req = new CreateServiceTemplateRequest("enim") {{
                errorTemplate = new ErrorTemplate(                new java.util.HashMap<String, String>() {{
                                    put("saepe", "eum");
                                    put("repudiandae", "accusantium");
                                    put("officia", "impedit");
                                }}, "a string value", "a string value", "a string value", "a string value", "a string value");;
            }};            

            CreateServiceTemplateResponse res = sdk.services.createServiceTemplate(req, new CreateServiceTemplateSecurity("quasi", "blanditiis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.errorTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteService

Delete a service descriptor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceRequest;
import org.openapis.openapi.models.operations.DeleteServiceResponse;
import org.openapis.openapi.models.operations.DeleteServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteServiceRequest req = new DeleteServiceRequest("eius");            

            DeleteServiceResponse res = sdk.services.deleteService(req, new DeleteServiceSecurity("quisquam", "eos") {{
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

## deleteServiceTemplate

Delete a service descriptor error template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceTemplateRequest;
import org.openapis.openapi.models.operations.DeleteServiceTemplateResponse;
import org.openapis.openapi.models.operations.DeleteServiceTemplateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteServiceTemplateRequest req = new DeleteServiceTemplateRequest("nobis");            

            DeleteServiceTemplateResponse res = sdk.services.deleteServiceTemplate(req, new DeleteServiceTemplateSecurity("natus", "minus") {{
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

## patchService

Update a service descriptor with a diff

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchServiceRequest;
import org.openapis.openapi.models.operations.PatchServiceResponse;
import org.openapis.openapi.models.operations.PatchServiceSecurity;
import org.openapis.openapi.models.shared.Patch;
import org.openapis.openapi.models.shared.PatchOpEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchServiceRequest req = new PatchServiceRequest("quia") {{
                requestBody = new org.openapis.openapi.models.shared.Patch[]{{
                    add(new Patch(PatchOpEnum.REMOVE, "a string value") {{
                        op = PatchOpEnum.REMOVE;
                        path = "a string value";
                        value = "quod";
                    }}),
                    add(new Patch(PatchOpEnum.REMOVE, "a string value") {{
                        op = PatchOpEnum.REMOVE;
                        path = "a string value";
                        value = "amet";
                    }}),
                }};
            }};            

            PatchServiceResponse res = sdk.services.patchService(req, new PatchServiceSecurity("amet", "laborum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## service

Get a service descriptor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceRequest;
import org.openapis.openapi.models.operations.ServiceResponse;
import org.openapis.openapi.models.operations.ServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceRequest req = new ServiceRequest("modi");            

            ServiceResponse res = sdk.services.service(req, new ServiceSecurity("perferendis", "necessitatibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## serviceAddTarget

Add a target to a service descriptor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceAddTargetRequest;
import org.openapis.openapi.models.operations.ServiceAddTargetResponse;
import org.openapis.openapi.models.operations.ServiceAddTargetSecurity;
import org.openapis.openapi.models.shared.Target;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceAddTargetRequest req = new ServiceAddTargetRequest("architecto") {{
                target = new Target("www.google.com", "a string value");;
            }};            

            ServiceAddTargetResponse res = sdk.services.serviceAddTarget(req, new ServiceAddTargetSecurity("molestias", "dolore") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.targets != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## serviceDeleteTarget

Delete a service descriptor target

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceDeleteTargetRequest;
import org.openapis.openapi.models.operations.ServiceDeleteTargetResponse;
import org.openapis.openapi.models.operations.ServiceDeleteTargetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceDeleteTargetRequest req = new ServiceDeleteTargetRequest("sunt");            

            ServiceDeleteTargetResponse res = sdk.services.serviceDeleteTarget(req, new ServiceDeleteTargetSecurity("maiores", "neque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.targets != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## serviceGroupServices

Get all services descriptor for a group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceGroupServicesRequest;
import org.openapis.openapi.models.operations.ServiceGroupServicesResponse;
import org.openapis.openapi.models.operations.ServiceGroupServicesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceGroupServicesRequest req = new ServiceGroupServicesRequest("odit");            

            ServiceGroupServicesResponse res = sdk.services.serviceGroupServices(req, new ServiceGroupServicesSecurity("earum", "veniam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiKeys != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## serviceTargets

Get a service descriptor targets

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceTargetsRequest;
import org.openapis.openapi.models.operations.ServiceTargetsResponse;
import org.openapis.openapi.models.operations.ServiceTargetsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceTargetsRequest req = new ServiceTargetsRequest("ipsam");            

            ServiceTargetsResponse res = sdk.services.serviceTargets(req, new ServiceTargetsSecurity("eaque", "exercitationem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.targets != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## serviceTemplate

Get a service descriptor error template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceTemplateRequest;
import org.openapis.openapi.models.operations.ServiceTemplateResponse;
import org.openapis.openapi.models.operations.ServiceTemplateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceTemplateRequest req = new ServiceTemplateRequest("veniam");            

            ServiceTemplateResponse res = sdk.services.serviceTemplate(req, new ServiceTemplateSecurity("nihil", "ad") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.errorTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateService

Update a service descriptor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceRequest;
import org.openapis.openapi.models.operations.UpdateServiceResponse;
import org.openapis.openapi.models.operations.UpdateServiceSecurity;
import org.openapis.openapi.models.shared.BadResponse;
import org.openapis.openapi.models.shared.BadResponsesFaultConfig;
import org.openapis.openapi.models.shared.Canary;
import org.openapis.openapi.models.shared.ChaosConfig;
import org.openapis.openapi.models.shared.ClientConfig;
import org.openapis.openapi.models.shared.CorsSettings;
import org.openapis.openapi.models.shared.ESAlgoSettings;
import org.openapis.openapi.models.shared.ExposedApi;
import org.openapis.openapi.models.shared.Gzip;
import org.openapis.openapi.models.shared.HSAlgoSettings;
import org.openapis.openapi.models.shared.HealthCheck;
import org.openapis.openapi.models.shared.InCookie;
import org.openapis.openapi.models.shared.InHeader;
import org.openapis.openapi.models.shared.InQueryParam;
import org.openapis.openapi.models.shared.IpFiltering;
import org.openapis.openapi.models.shared.JWKSAlgoSettings;
import org.openapis.openapi.models.shared.LargeRequestFaultConfig;
import org.openapis.openapi.models.shared.LargeResponseFaultConfig;
import org.openapis.openapi.models.shared.LatencyInjectionFaultConfig;
import org.openapis.openapi.models.shared.LocalJwtVerifier;
import org.openapis.openapi.models.shared.MappingSettings;
import org.openapis.openapi.models.shared.PassThrough;
import org.openapis.openapi.models.shared.RSAlgoSettings;
import org.openapis.openapi.models.shared.RedirectionSettings;
import org.openapis.openapi.models.shared.RefJwtVerifier;
import org.openapis.openapi.models.shared.Service;
import org.openapis.openapi.models.shared.Sign;
import org.openapis.openapi.models.shared.StatsdConfig;
import org.openapis.openapi.models.shared.Target;
import org.openapis.openapi.models.shared.Transform;
import org.openapis.openapi.models.shared.TransformSettings;
import org.openapis.openapi.models.shared.VerificationSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateServiceRequest req = new UpdateServiceRequest("nisi") {{
                service = new Service(true, "a string value", true, true, "a string value", true,                 new String[]{{
                                    add("a string value"),
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
                                    }}, 123123);;
                    additionalHeaders = new java.util.HashMap<String, String>() {{
                        put("suscipit", "pariatur");
                        put("sit", "quidem");
                    }};
                    api = new ExposedApi(true) {{
                        openApiDescriptorUrl = "http://www.google.com";
                    }};;
                    authConfigRef = "a string value";
                    chaosConfig = new ChaosConfig(true) {{
                        badResponsesFaultConfig = new BadResponsesFaultConfig(42.2,                 new org.openapis.openapi.models.shared.BadResponse[]{{
                                            add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                put("possimus", "repellat");
                                                            }}, 123123) {{
                                                body = "a string value";
                                                headers = new java.util.HashMap<String, String>() {{
                                                    put("id", "sapiente");
                                                }};
                                                status = 123123;
                                            }}),
                                            add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                put("soluta", "dolorum");
                                                                put("velit", "earum");
                                                                put("praesentium", "error");
                                                                put("non", "quasi");
                                                            }}, 123123) {{
                                                body = "a string value";
                                                headers = new java.util.HashMap<String, String>() {{
                                                    put("architecto", "adipisci");
                                                    put("pariatur", "harum");
                                                    put("dolore", "voluptatibus");
                                                    put("iure", "explicabo");
                                                }};
                                                status = 123123;
                                            }}),
                                            add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                put("deserunt", "aliquid");
                                                            }}, 123123) {{
                                                body = "a string value";
                                                headers = new java.util.HashMap<String, String>() {{
                                                    put("accusamus", "harum");
                                                    put("cumque", "doloremque");
                                                    put("expedita", "corrupti");
                                                }};
                                                status = 123123;
                                            }}),
                                            add(new BadResponse("a string value",                 new java.util.HashMap<String, String>() {{
                                                                put("optio", "delectus");
                                                                put("minus", "quo");
                                                                put("quos", "asperiores");
                                                                put("voluptatum", "iste");
                                                            }}, 123123) {{
                                                body = "a string value";
                                                headers = new java.util.HashMap<String, String>() {{
                                                    put("magni", "tempora");
                                                    put("possimus", "dolor");
                                                    put("rerum", "sed");
                                                }};
                                                status = 123123;
                                            }}),
                                        }});;
                        largeRequestFaultConfig = new LargeRequestFaultConfig(123123, 42.2);;
                        largeResponseFaultConfig = new LargeResponseFaultConfig(42.2) {{
                            additionalRequestSize = 123123;
                        }};;
                        latencyInjectionFaultConfig = new LatencyInjectionFaultConfig(123123, 42.2, 123123);;
                    }};;
                    clientConfig = new ClientConfig(123123, 123123, 123123, 123123, 123123, 123123, 123123, true);;
                    clientValidatorRef = "a string value";
                    cors = new CorsSettings(true,                 new String[]{{
                                        add("a string value"),
                                        add("a string value"),
                                    }},                 new String[]{{
                                        add("a string value"),
                                    }}, "a string value", true,                 new String[]{{
                                        add("a string value"),
                                    }},                 new String[]{{
                                        add("a string value"),
                                    }}, 123123);;
                    gzip = new Gzip(                new String[]{{
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                    }}, 123L, 123L, 123123, true,                 new String[]{{
                                        add("a string value"),
                                        add("a string value"),
                                    }},                 new String[]{{
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                        add("a string value"),
                                    }});;
                    headersVerification = new java.util.HashMap<String, String>() {{
                        put("neque", "pariatur");
                        put("vel", "sapiente");
                        put("mollitia", "quae");
                        put("quos", "aperiam");
                    }};
                    healthCheck = new HealthCheck(true) {{
                        url = "http://www.google.com";
                    }};;
                    ipFiltering = new IpFiltering(                new String[]{{
                                        add("192.192.192.192"),
                                        add("192.192.192.192"),
                                    }},                 new String[]{{
                                        add("192.192.192.192"),
                                        add("192.192.192.192"),
                                        add("192.192.192.192"),
                                        add("192.192.192.192"),
                                    }});;
                    jwtVerifier = new LocalJwtVerifier(                new RSAlgoSettings("a string value", 123123, "a string value") {{
                                        privateKey = "a string value";
                                        publicKey = "a string value";
                                        size = 123123;
                                        type = "a string value";
                                    }}, true,                 new InCookie("a string value", "a string value") {{
                                        name = "a string value";
                                        type = "a string value";
                                    }},                 new Sign(                new RSAlgoSettings("a string value", 123123, "a string value") {{
                                                        privateKey = "a string value";
                                                        publicKey = "a string value";
                                                        size = 123123;
                                                        type = "a string value";
                                                    }}, "a string value",                 new VerificationSettings(                new java.util.HashMap<String, String>() {{
                                                                        put("ullam", "eligendi");
                                                                        put("placeat", "voluptas");
                                                                        put("occaecati", "unde");
                                                                    }}) {{
                                                        mappingSettings = new MappingSettings(                new java.util.HashMap<String, String>() {{
                                                                            put("nihil", "inventore");
                                                                        }},                 new String[]{{
                                                                            add("a string value"),
                                                                            add("a string value"),
                                                                            add("a string value"),
                                                                        }},                 new java.util.HashMap<String, String>() {{
                                                                            put("quasi", "cumque");
                                                                            put("dicta", "harum");
                                                                        }});;
                                                    }};) {{
                                        algoSettings = new HSAlgoSettings("a string value", 123123, "a string value") {{
                                            secret = "a string value";
                                            size = 123123;
                                            type = "a string value";
                                        }};
                                        type = "a string value";
                                        verificationSettings = new VerificationSettings(                new java.util.HashMap<String, String>() {{
                                                            put("commodi", "alias");
                                                            put("fuga", "aut");
                                                            put("dolore", "maxime");
                                                        }}) {{
                                            fields = new java.util.HashMap<String, String>() {{
                                                put("inventore", "aliquid");
                                                put("laudantium", "est");
                                                put("dolor", "aliquid");
                                                put("consectetur", "cumque");
                                            }};
                                            mappingSettings = new MappingSettings(                new java.util.HashMap<String, String>() {{
                                                                put("veritatis", "tenetur");
                                                                put("autem", "quidem");
                                                                put("totam", "porro");
                                                            }},                 new String[]{{
                                                                add("a string value"),
                                                                add("a string value"),
                                                                add("a string value"),
                                                            }},                 new java.util.HashMap<String, String>() {{
                                                                put("nihil", "voluptas");
                                                            }}) {{
                                                map = new java.util.HashMap<String, String>() {{
                                                    put("voluptatum", "ducimus");
                                                    put("adipisci", "recusandae");
                                                    put("tempora", "blanditiis");
                                                }};
                                                remove = new String[]{{
                                                    add("a string value"),
                                                    add("a string value"),
                                                }};
                                                values = new java.util.HashMap<String, String>() {{
                                                    put("voluptatum", "sit");
                                                }};
                                            }};
                                        }};
                                    }}, true, "a string value");;
                    localHost = "a string value";
                    localScheme = "a string value";
                    matchingHeaders = new java.util.HashMap<String, String>() {{
                        put("facilis", "beatae");
                        put("cumque", "delectus");
                        put("labore", "expedita");
                        put("corrupti", "rem");
                    }};
                    matchingRoot = "a string value";
                    metadata = new java.util.HashMap<String, String>() {{
                        put("officiis", "cum");
                        put("pariatur", "sapiente");
                        put("quo", "incidunt");
                    }};
                    overrideHost = true;
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
                    redirection = new RedirectionSettings(123123, true, "a string value");;
                    secComExcludedPatterns = new String[]{{
                        add("a string value"),
                        add("a string value"),
                        add("a string value"),
                        add("a string value"),
                    }};
                    secComSettings = new ESAlgoSettings("a string value", 123123, "a string value") {{
                        privateKey = "a string value";
                    }};;
                    sendOtoroshiHeadersBack = true;
                    statsdConfig = new StatsdConfig(true, "a string value", 123123);;
                    transformerRef = "a string value";
                    userFacing = true;
                    xForwardedHeaders = true;
                }};;
            }};            

            UpdateServiceResponse res = sdk.services.updateService(req, new UpdateServiceSecurity("excepturi", "occaecati") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceTargets

Update a service descriptor targets

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceTargetsRequest;
import org.openapis.openapi.models.operations.UpdateServiceTargetsResponse;
import org.openapis.openapi.models.operations.UpdateServiceTargetsSecurity;
import org.openapis.openapi.models.shared.Patch;
import org.openapis.openapi.models.shared.PatchOpEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateServiceTargetsRequest req = new UpdateServiceTargetsRequest("libero") {{
                requestBody = new org.openapis.openapi.models.shared.Patch[]{{
                    add(new Patch(PatchOpEnum.TEST, "a string value") {{
                        op = PatchOpEnum.REMOVE;
                        path = "a string value";
                        value = "hic";
                    }}),
                    add(new Patch(PatchOpEnum.ADD, "a string value") {{
                        op = PatchOpEnum.ADD;
                        path = "a string value";
                        value = "soluta";
                    }}),
                    add(new Patch(PatchOpEnum.TEST, "a string value") {{
                        op = PatchOpEnum.TEST;
                        path = "a string value";
                        value = "eligendi";
                    }}),
                    add(new Patch(PatchOpEnum.REMOVE, "a string value") {{
                        op = PatchOpEnum.ADD;
                        path = "a string value";
                        value = "aut";
                    }}),
                }};
            }};            

            UpdateServiceTargetsResponse res = sdk.services.updateServiceTargets(req, new UpdateServiceTargetsSecurity("iusto", "dolor") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.targets != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceTemplate

Update an error template to a service descriptor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceTemplateRequest;
import org.openapis.openapi.models.operations.UpdateServiceTemplateResponse;
import org.openapis.openapi.models.operations.UpdateServiceTemplateSecurity;
import org.openapis.openapi.models.shared.ErrorTemplate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateServiceTemplateRequest req = new UpdateServiceTemplateRequest("voluptates") {{
                errorTemplate = new ErrorTemplate(                new java.util.HashMap<String, String>() {{
                                    put("magni", "rerum");
                                    put("doloremque", "voluptatem");
                                }}, "a string value", "a string value", "a string value", "a string value", "a string value");;
            }};            

            UpdateServiceTemplateResponse res = sdk.services.updateServiceTemplate(req, new UpdateServiceTemplateSecurity("eum", "at") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.errorTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
