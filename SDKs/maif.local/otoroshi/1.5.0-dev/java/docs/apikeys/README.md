# apikeys

## Overview

Everything about Otoroshi api keys

### Available Operations

* [allApiKeys](#allapikeys) - Get all api keys
* [apiKey](#apikey) - Get an api key
* [apiKeyFromGroup](#apikeyfromgroup) - Get an api key
* [apiKeyFromGroupQuotas](#apikeyfromgroupquotas) - Get the quota state of an api key
* [apiKeyGroup](#apikeygroup) - Get the group of an api key
* [apiKeyQuotas](#apikeyquotas) - Get the quota state of an api key
* [apiKeys](#apikeys) - Get all api keys for the group of a service
* [apiKeysFromGroup](#apikeysfromgroup) - Get all api keys for the group of a service
* [createApiKey](#createapikey) - Create a new api key for a service
* [createApiKeyFromGroup](#createapikeyfromgroup) - Create a new api key for a group
* [deleteApiKey](#deleteapikey) - Delete an api key
* [deleteApiKeyFromGroup](#deleteapikeyfromgroup) - Delete an api key
* [patchApiKey](#patchapikey) - Update an api key with a diff
* [patchApiKeyFromGroup](#patchapikeyfromgroup) - Update an api key with a diff
* [resetApiKeyFromGroupQuotas](#resetapikeyfromgroupquotas) - Reset the quota state of an api key
* [resetApiKeyQuotas](#resetapikeyquotas) - Reset the quota state of an api key
* [updateApiKey](#updateapikey) - Update an api key
* [updateApiKeyFromGroup](#updateapikeyfromgroup) - Update an api key

## allApiKeys

Get all api keys

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllApiKeysResponse;
import org.openapis.openapi.models.operations.AllApiKeysSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AllApiKeysResponse res = sdk.apikeys.allApiKeys(new AllApiKeysSecurity("distinctio", "quibusdam") {{
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

## apiKey

Get an api key for a specified service descriptor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApiKeyRequest;
import org.openapis.openapi.models.operations.ApiKeyResponse;
import org.openapis.openapi.models.operations.ApiKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApiKeyRequest req = new ApiKeyRequest("unde", "nulla");            

            ApiKeyResponse res = sdk.apikeys.apiKey(req, new ApiKeySecurity("corrupti", "illum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apiKeyFromGroup

Get an api key for a specified service group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApiKeyFromGroupRequest;
import org.openapis.openapi.models.operations.ApiKeyFromGroupResponse;
import org.openapis.openapi.models.operations.ApiKeyFromGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApiKeyFromGroupRequest req = new ApiKeyFromGroupRequest("vel", "error");            

            ApiKeyFromGroupResponse res = sdk.apikeys.apiKeyFromGroup(req, new ApiKeyFromGroupSecurity("deserunt", "suscipit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apiKeyFromGroupQuotas

Get the quota state of an api key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApiKeyFromGroupQuotasRequest;
import org.openapis.openapi.models.operations.ApiKeyFromGroupQuotasResponse;
import org.openapis.openapi.models.operations.ApiKeyFromGroupQuotasSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApiKeyFromGroupQuotasRequest req = new ApiKeyFromGroupQuotasRequest("iure", "magnam");            

            ApiKeyFromGroupQuotasResponse res = sdk.apikeys.apiKeyFromGroupQuotas(req, new ApiKeyFromGroupQuotasSecurity("debitis", "ipsa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.quotas != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apiKeyGroup

Get the group of an api key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApiKeyGroupRequest;
import org.openapis.openapi.models.operations.ApiKeyGroupResponse;
import org.openapis.openapi.models.operations.ApiKeyGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApiKeyGroupRequest req = new ApiKeyGroupRequest("delectus", "tempora");            

            ApiKeyGroupResponse res = sdk.apikeys.apiKeyGroup(req, new ApiKeyGroupSecurity("suscipit", "molestiae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.group != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apiKeyQuotas

Get the quota state of an api key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApiKeyQuotasRequest;
import org.openapis.openapi.models.operations.ApiKeyQuotasResponse;
import org.openapis.openapi.models.operations.ApiKeyQuotasSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApiKeyQuotasRequest req = new ApiKeyQuotasRequest("minus", "placeat");            

            ApiKeyQuotasResponse res = sdk.apikeys.apiKeyQuotas(req, new ApiKeyQuotasSecurity("voluptatum", "iusto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.quotas != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apiKeys

Get all api keys for the group of a service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApiKeysRequest;
import org.openapis.openapi.models.operations.ApiKeysResponse;
import org.openapis.openapi.models.operations.ApiKeysSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApiKeysRequest req = new ApiKeysRequest("excepturi");            

            ApiKeysResponse res = sdk.apikeys.apiKeys(req, new ApiKeysSecurity("nisi", "recusandae") {{
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

## apiKeysFromGroup

Get all api keys for the group of a service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApiKeysFromGroupRequest;
import org.openapis.openapi.models.operations.ApiKeysFromGroupResponse;
import org.openapis.openapi.models.operations.ApiKeysFromGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApiKeysFromGroupRequest req = new ApiKeysFromGroupRequest("temporibus");            

            ApiKeysFromGroupResponse res = sdk.apikeys.apiKeysFromGroup(req, new ApiKeysFromGroupSecurity("ab", "quis") {{
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

## createApiKey

Create a new api key for a service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApiKeyRequest;
import org.openapis.openapi.models.operations.CreateApiKeyResponse;
import org.openapis.openapi.models.operations.CreateApiKeySecurity;
import org.openapis.openapi.models.shared.ApiKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateApiKeyRequest req = new CreateApiKeyRequest("veritatis") {{
                apiKey = new ApiKey(                new String[]{{
                                    add("a string value"),
                                    add("a string value"),
                                    add("a string value"),
                                }}, "a string value", "a string value", "a string value", true) {{
                    dailyQuota = 123L;
                    metadata = new java.util.HashMap<String, String>() {{
                        put("ipsam", "repellendus");
                    }};
                    monthlyQuota = 123L;
                    throttlingQuota = 123L;
                }};;
            }};            

            CreateApiKeyResponse res = sdk.apikeys.createApiKey(req, new CreateApiKeySecurity("sapiente", "quo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createApiKeyFromGroup

Create a new api key for a group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApiKeyFromGroupRequest;
import org.openapis.openapi.models.operations.CreateApiKeyFromGroupResponse;
import org.openapis.openapi.models.operations.CreateApiKeyFromGroupSecurity;
import org.openapis.openapi.models.shared.ApiKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateApiKeyFromGroupRequest req = new CreateApiKeyFromGroupRequest("odit") {{
                apiKey = new ApiKey(                new String[]{{
                                    add("a string value"),
                                    add("a string value"),
                                    add("a string value"),
                                    add("a string value"),
                                }}, "a string value", "a string value", "a string value", true) {{
                    dailyQuota = 123L;
                    metadata = new java.util.HashMap<String, String>() {{
                        put("maiores", "molestiae");
                        put("quod", "quod");
                        put("esse", "totam");
                        put("porro", "dolorum");
                    }};
                    monthlyQuota = 123L;
                    throttlingQuota = 123L;
                }};;
            }};            

            CreateApiKeyFromGroupResponse res = sdk.apikeys.createApiKeyFromGroup(req, new CreateApiKeyFromGroupSecurity("dicta", "nam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApiKey

Delete an api key for a specified service descriptor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiKeyRequest;
import org.openapis.openapi.models.operations.DeleteApiKeyResponse;
import org.openapis.openapi.models.operations.DeleteApiKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiKeyRequest req = new DeleteApiKeyRequest("officia", "occaecati");            

            DeleteApiKeyResponse res = sdk.apikeys.deleteApiKey(req, new DeleteApiKeySecurity("fugit", "deleniti") {{
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

## deleteApiKeyFromGroup

Delete an api key for a specified service group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiKeyFromGroupRequest;
import org.openapis.openapi.models.operations.DeleteApiKeyFromGroupResponse;
import org.openapis.openapi.models.operations.DeleteApiKeyFromGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiKeyFromGroupRequest req = new DeleteApiKeyFromGroupRequest("hic", "optio");            

            DeleteApiKeyFromGroupResponse res = sdk.apikeys.deleteApiKeyFromGroup(req, new DeleteApiKeyFromGroupSecurity("totam", "beatae") {{
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

## patchApiKey

Update an api key for a specified service descriptor with a diff

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchApiKeyRequest;
import org.openapis.openapi.models.operations.PatchApiKeyResponse;
import org.openapis.openapi.models.operations.PatchApiKeySecurity;
import org.openapis.openapi.models.shared.Patch;
import org.openapis.openapi.models.shared.PatchOpEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchApiKeyRequest req = new PatchApiKeyRequest("commodi", "molestiae") {{
                requestBody = new org.openapis.openapi.models.shared.Patch[]{{
                    add(new Patch(PatchOpEnum.COPY, "a string value") {{
                        op = PatchOpEnum.ADD;
                        path = "a string value";
                        value = "impedit";
                    }}),
                    add(new Patch(PatchOpEnum.REMOVE, "a string value") {{
                        op = PatchOpEnum.REMOVE;
                        path = "a string value";
                        value = "ipsum";
                    }}),
                }};
            }};            

            PatchApiKeyResponse res = sdk.apikeys.patchApiKey(req, new PatchApiKeySecurity("aspernatur", "perferendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchApiKeyFromGroup

Update an api key for a specified service descriptor with a diff

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchApiKeyFromGroupRequest;
import org.openapis.openapi.models.operations.PatchApiKeyFromGroupResponse;
import org.openapis.openapi.models.operations.PatchApiKeyFromGroupSecurity;
import org.openapis.openapi.models.shared.Patch;
import org.openapis.openapi.models.shared.PatchOpEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchApiKeyFromGroupRequest req = new PatchApiKeyFromGroupRequest("ad", "natus") {{
                requestBody = new org.openapis.openapi.models.shared.Patch[]{{
                    add(new Patch(PatchOpEnum.COPY, "a string value") {{
                        op = PatchOpEnum.COPY;
                        path = "a string value";
                        value = "dolor";
                    }}),
                }};
            }};            

            PatchApiKeyFromGroupResponse res = sdk.apikeys.patchApiKeyFromGroup(req, new PatchApiKeyFromGroupSecurity("laboriosam", "hic") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetApiKeyFromGroupQuotas

Reset the quota state of an api key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetApiKeyFromGroupQuotasRequest;
import org.openapis.openapi.models.operations.ResetApiKeyFromGroupQuotasResponse;
import org.openapis.openapi.models.operations.ResetApiKeyFromGroupQuotasSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResetApiKeyFromGroupQuotasRequest req = new ResetApiKeyFromGroupQuotasRequest("saepe", "fuga");            

            ResetApiKeyFromGroupQuotasResponse res = sdk.apikeys.resetApiKeyFromGroupQuotas(req, new ResetApiKeyFromGroupQuotasSecurity("in", "corporis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.quotas != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetApiKeyQuotas

Reset the quota state of an api key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetApiKeyQuotasRequest;
import org.openapis.openapi.models.operations.ResetApiKeyQuotasResponse;
import org.openapis.openapi.models.operations.ResetApiKeyQuotasSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResetApiKeyQuotasRequest req = new ResetApiKeyQuotasRequest("iste", "iure");            

            ResetApiKeyQuotasResponse res = sdk.apikeys.resetApiKeyQuotas(req, new ResetApiKeyQuotasSecurity("saepe", "quidem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.quotas != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateApiKey

Update an api key for a specified service descriptor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApiKeyRequest;
import org.openapis.openapi.models.operations.UpdateApiKeyResponse;
import org.openapis.openapi.models.operations.UpdateApiKeySecurity;
import org.openapis.openapi.models.shared.ApiKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateApiKeyRequest req = new UpdateApiKeyRequest("architecto", "ipsa") {{
                apiKey = new ApiKey(                new String[]{{
                                    add("a string value"),
                                    add("a string value"),
                                    add("a string value"),
                                    add("a string value"),
                                }}, "a string value", "a string value", "a string value", true) {{
                    dailyQuota = 123L;
                    metadata = new java.util.HashMap<String, String>() {{
                        put("mollitia", "laborum");
                        put("dolores", "dolorem");
                        put("corporis", "explicabo");
                    }};
                    monthlyQuota = 123L;
                    throttlingQuota = 123L;
                }};;
            }};            

            UpdateApiKeyResponse res = sdk.apikeys.updateApiKey(req, new UpdateApiKeySecurity("nobis", "enim") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateApiKeyFromGroup

Update an api key for a specified service group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApiKeyFromGroupRequest;
import org.openapis.openapi.models.operations.UpdateApiKeyFromGroupResponse;
import org.openapis.openapi.models.operations.UpdateApiKeyFromGroupSecurity;
import org.openapis.openapi.models.shared.ApiKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateApiKeyFromGroupRequest req = new UpdateApiKeyFromGroupRequest("omnis", "nemo") {{
                apiKey = new ApiKey(                new String[]{{
                                    add("a string value"),
                                    add("a string value"),
                                }}, "a string value", "a string value", "a string value", true) {{
                    dailyQuota = 123L;
                    metadata = new java.util.HashMap<String, String>() {{
                        put("accusantium", "iure");
                        put("culpa", "doloribus");
                        put("sapiente", "architecto");
                    }};
                    monthlyQuota = 123L;
                    throttlingQuota = 123L;
                }};;
            }};            

            UpdateApiKeyFromGroupResponse res = sdk.apikeys.updateApiKeyFromGroup(req, new UpdateApiKeyFromGroupSecurity("mollitia", "dolorem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
