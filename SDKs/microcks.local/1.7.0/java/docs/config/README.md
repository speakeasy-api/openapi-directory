# config

## Overview

Operations related to configuration

### Available Operations

* [createSecret](#createsecret) - Create a new Secret
* [deleteSecret](#deletesecret) - Delete Secret
* [getFeaturesConfiguration](#getfeaturesconfiguration) - Get features configuration
* [getKeycloakConfig](#getkeycloakconfig) - Get authentification configuration
* [getSecret](#getsecret) - Get Secret
* [getSecrets](#getsecrets) - Get Secrets
* [getSecretsCounter](#getsecretscounter) - Get the Secrets counter
* [updateSecret](#updatesecret) - Update Secret

## createSecret

Create a new Secret

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSecretResponse;
import org.openapis.openapi.models.operations.CreateSecretSecurity;
import org.openapis.openapi.models.shared.Secret;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.Secret req = new Secret("corrupti", "illum") {{
                caCertPem = "vel";
                id = "9a674e0f-467c-4c87-96ed-151a05dfc2dd";
                password = "maiores";
                token = "molestiae";
                tokenHeader = "quod";
                username = "Presley_Koepp";
            }};            

            CreateSecretResponse res = sdk.config.createSecret(req, new CreateSecretSecurity("dolorum") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.secret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSecret

Delete a Secret

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSecretRequest;
import org.openapis.openapi.models.operations.DeleteSecretResponse;
import org.openapis.openapi.models.operations.DeleteSecretSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSecretRequest req = new DeleteSecretRequest("dicta");            

            DeleteSecretResponse res = sdk.config.deleteSecret(req, new DeleteSecretSecurity("nam") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## getFeaturesConfiguration

Get features configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFeaturesConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetFeaturesConfigurationResponse res = sdk.config.getFeaturesConfiguration();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getKeycloakConfig

Get authentification configuration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetKeycloakConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetKeycloakConfigResponse res = sdk.config.getKeycloakConfig();

            if (res.keycloakConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSecret

Retrieve a Secret

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSecretRequest;
import org.openapis.openapi.models.operations.GetSecretResponse;
import org.openapis.openapi.models.operations.GetSecretSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSecretRequest req = new GetSecretRequest("fugit");            

            GetSecretResponse res = sdk.config.getSecret(req, new GetSecretSecurity("deleniti") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.secret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSecrets

Get Secrets

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSecretsRequest;
import org.openapis.openapi.models.operations.GetSecretsResponse;
import org.openapis.openapi.models.operations.GetSecretsSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSecretsRequest req = new GetSecretsRequest() {{
                page = 944669L;
                size = 758616L;
            }};            

            GetSecretsResponse res = sdk.config.getSecrets(req, new GetSecretsSecurity("totam") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.secrets != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSecretsCounter

Get the Secrets counter

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSecretsCounterResponse;
import org.openapis.openapi.models.operations.GetSecretsCounterSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSecretsCounterResponse res = sdk.config.getSecretsCounter(new GetSecretsCounterSecurity("beatae") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.counter != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSecret

Update a Secret

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSecretRequest;
import org.openapis.openapi.models.operations.UpdateSecretResponse;
import org.openapis.openapi.models.operations.UpdateSecretSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSecretRequest req = new UpdateSecretRequest("commodi");            

            UpdateSecretResponse res = sdk.config.updateSecret(req, new UpdateSecretSecurity("molestiae") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
