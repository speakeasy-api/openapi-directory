# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createAccountConfig](#createaccountconfig) - Create a config for an Account.
* [createAccountSecret](#createaccountsecret) - Create a secret for an Account.
* [createDeviceConfig](#createdeviceconfig) - Create a config for a Microvisor Device.
* [createDeviceSecret](#createdevicesecret) - Create a secret for a Microvisor Device.
* [deleteAccountConfig](#deleteaccountconfig) - Delete a config for an Account.
* [deleteAccountSecret](#deleteaccountsecret) - Delete a secret for an Account.
* [deleteApp](#deleteapp) - Delete a specific App.
* [deleteDeviceConfig](#deletedeviceconfig) - Delete a config for a Microvisor Device.
* [deleteDeviceSecret](#deletedevicesecret) - Delete a secret for a Microvisor Device.
* [fetchAccountConfig](#fetchaccountconfig) - Retrieve a Config for an Account.
* [fetchAccountSecret](#fetchaccountsecret) - Retrieve a Secret for an Account.
* [fetchApp](#fetchapp) - Fetch a specific App.
* [fetchAppManifest](#fetchappmanifest) - Retrieve the Manifest for an App.
* [fetchDevice](#fetchdevice) - Fetch a specific Device.
* [fetchDeviceConfig](#fetchdeviceconfig) - Retrieve a Config for a Device.
* [fetchDeviceSecret](#fetchdevicesecret) - Retrieve a Secret for a Device.
* [listAccountConfig](#listaccountconfig) - Retrieve a list of all Configs for an Account.
* [listAccountSecret](#listaccountsecret) - Retrieve a list of all Secrets for an Account.
* [listApp](#listapp) - Retrieve a list of all Apps for an Account.
* [listDevice](#listdevice) - Retrieve a list of all Devices registered with the Account.
* [listDeviceConfig](#listdeviceconfig) - Retrieve a list of all Configs for a Device.
* [listDeviceSecret](#listdevicesecret) - Retrieve a list of all Secrets for a Device.
* [updateAccountConfig](#updateaccountconfig) - Update a config for an Account.
* [updateAccountSecret](#updateaccountsecret) - Update a secret for an Account.
* [updateDevice](#updatedevice) - Update a specific Device.
* [updateDeviceConfig](#updatedeviceconfig) - Update a config for a Microvisor Device.
* [updateDeviceSecret](#updatedevicesecret) - Update a secret for a Microvisor Device.

## createAccountConfig

Create a config for an Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccountConfigCreateAccountConfigRequest;
import org.openapis.openapi.models.operations.CreateAccountConfigResponse;
import org.openapis.openapi.models.operations.CreateAccountConfigSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAccountConfigCreateAccountConfigRequest req = new CreateAccountConfigCreateAccountConfigRequest("unde", "nulla");            

            CreateAccountConfigResponse res = sdk.sdk.createAccountConfig(req, new CreateAccountConfigSecurity("corrupti", "illum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.microvisorV1AccountConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAccountSecret

Create a secret for an Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccountSecretCreateAccountSecretRequest;
import org.openapis.openapi.models.operations.CreateAccountSecretResponse;
import org.openapis.openapi.models.operations.CreateAccountSecretSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAccountSecretCreateAccountSecretRequest req = new CreateAccountSecretCreateAccountSecretRequest("vel", "error");            

            CreateAccountSecretResponse res = sdk.sdk.createAccountSecret(req, new CreateAccountSecretSecurity("deserunt", "suscipit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.microvisorV1AccountSecret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDeviceConfig

Create a config for a Microvisor Device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeviceConfigCreateDeviceConfigRequest;
import org.openapis.openapi.models.operations.CreateDeviceConfigRequest;
import org.openapis.openapi.models.operations.CreateDeviceConfigResponse;
import org.openapis.openapi.models.operations.CreateDeviceConfigSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDeviceConfigRequest req = new CreateDeviceConfigRequest("iure") {{
                requestBody = new CreateDeviceConfigCreateDeviceConfigRequest("magnam", "debitis");;
            }};            

            CreateDeviceConfigResponse res = sdk.sdk.createDeviceConfig(req, new CreateDeviceConfigSecurity("ipsa", "delectus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.microvisorV1DeviceDeviceConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDeviceSecret

Create a secret for a Microvisor Device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeviceSecretCreateDeviceSecretRequest;
import org.openapis.openapi.models.operations.CreateDeviceSecretRequest;
import org.openapis.openapi.models.operations.CreateDeviceSecretResponse;
import org.openapis.openapi.models.operations.CreateDeviceSecretSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDeviceSecretRequest req = new CreateDeviceSecretRequest("tempora") {{
                requestBody = new CreateDeviceSecretCreateDeviceSecretRequest("suscipit", "molestiae");;
            }};            

            CreateDeviceSecretResponse res = sdk.sdk.createDeviceSecret(req, new CreateDeviceSecretSecurity("minus", "placeat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.microvisorV1DeviceDeviceSecret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAccountConfig

Delete a config for an Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAccountConfigRequest;
import org.openapis.openapi.models.operations.DeleteAccountConfigResponse;
import org.openapis.openapi.models.operations.DeleteAccountConfigSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAccountConfigRequest req = new DeleteAccountConfigRequest("voluptatum");            

            DeleteAccountConfigResponse res = sdk.sdk.deleteAccountConfig(req, new DeleteAccountConfigSecurity("iusto", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteAccountSecret

Delete a secret for an Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAccountSecretRequest;
import org.openapis.openapi.models.operations.DeleteAccountSecretResponse;
import org.openapis.openapi.models.operations.DeleteAccountSecretSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAccountSecretRequest req = new DeleteAccountSecretRequest("nisi");            

            DeleteAccountSecretResponse res = sdk.sdk.deleteAccountSecret(req, new DeleteAccountSecretSecurity("recusandae", "temporibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteApp

Delete a specific App.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAppRequest;
import org.openapis.openapi.models.operations.DeleteAppResponse;
import org.openapis.openapi.models.operations.DeleteAppSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAppRequest req = new DeleteAppRequest("ab");            

            DeleteAppResponse res = sdk.sdk.deleteApp(req, new DeleteAppSecurity("quis", "veritatis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteDeviceConfig

Delete a config for a Microvisor Device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDeviceConfigRequest;
import org.openapis.openapi.models.operations.DeleteDeviceConfigResponse;
import org.openapis.openapi.models.operations.DeleteDeviceConfigSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDeviceConfigRequest req = new DeleteDeviceConfigRequest("deserunt", "perferendis");            

            DeleteDeviceConfigResponse res = sdk.sdk.deleteDeviceConfig(req, new DeleteDeviceConfigSecurity("ipsam", "repellendus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteDeviceSecret

Delete a secret for a Microvisor Device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDeviceSecretRequest;
import org.openapis.openapi.models.operations.DeleteDeviceSecretResponse;
import org.openapis.openapi.models.operations.DeleteDeviceSecretSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDeviceSecretRequest req = new DeleteDeviceSecretRequest("sapiente", "quo");            

            DeleteDeviceSecretResponse res = sdk.sdk.deleteDeviceSecret(req, new DeleteDeviceSecretSecurity("odit", "at") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## fetchAccountConfig

Retrieve a Config for an Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchAccountConfigRequest;
import org.openapis.openapi.models.operations.FetchAccountConfigResponse;
import org.openapis.openapi.models.operations.FetchAccountConfigSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchAccountConfigRequest req = new FetchAccountConfigRequest("at");            

            FetchAccountConfigResponse res = sdk.sdk.fetchAccountConfig(req, new FetchAccountConfigSecurity("maiores", "molestiae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.microvisorV1AccountConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchAccountSecret

Retrieve a Secret for an Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchAccountSecretRequest;
import org.openapis.openapi.models.operations.FetchAccountSecretResponse;
import org.openapis.openapi.models.operations.FetchAccountSecretSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchAccountSecretRequest req = new FetchAccountSecretRequest("quod");            

            FetchAccountSecretResponse res = sdk.sdk.fetchAccountSecret(req, new FetchAccountSecretSecurity("quod", "esse") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.microvisorV1AccountSecret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchApp

Fetch a specific App.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchAppRequest;
import org.openapis.openapi.models.operations.FetchAppResponse;
import org.openapis.openapi.models.operations.FetchAppSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchAppRequest req = new FetchAppRequest("totam");            

            FetchAppResponse res = sdk.sdk.fetchApp(req, new FetchAppSecurity("porro", "dolorum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.microvisorV1App != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchAppManifest

Retrieve the Manifest for an App.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchAppManifestRequest;
import org.openapis.openapi.models.operations.FetchAppManifestResponse;
import org.openapis.openapi.models.operations.FetchAppManifestSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchAppManifestRequest req = new FetchAppManifestRequest("dicta");            

            FetchAppManifestResponse res = sdk.sdk.fetchAppManifest(req, new FetchAppManifestSecurity("nam", "officia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.microvisorV1AppAppManifest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchDevice

Fetch a specific Device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchDeviceRequest;
import org.openapis.openapi.models.operations.FetchDeviceResponse;
import org.openapis.openapi.models.operations.FetchDeviceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchDeviceRequest req = new FetchDeviceRequest("occaecati");            

            FetchDeviceResponse res = sdk.sdk.fetchDevice(req, new FetchDeviceSecurity("fugit", "deleniti") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.microvisorV1Device != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchDeviceConfig

Retrieve a Config for a Device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchDeviceConfigRequest;
import org.openapis.openapi.models.operations.FetchDeviceConfigResponse;
import org.openapis.openapi.models.operations.FetchDeviceConfigSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchDeviceConfigRequest req = new FetchDeviceConfigRequest("hic", "optio");            

            FetchDeviceConfigResponse res = sdk.sdk.fetchDeviceConfig(req, new FetchDeviceConfigSecurity("totam", "beatae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.microvisorV1DeviceDeviceConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchDeviceSecret

Retrieve a Secret for a Device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchDeviceSecretRequest;
import org.openapis.openapi.models.operations.FetchDeviceSecretResponse;
import org.openapis.openapi.models.operations.FetchDeviceSecretSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchDeviceSecretRequest req = new FetchDeviceSecretRequest("commodi", "molestiae");            

            FetchDeviceSecretResponse res = sdk.sdk.fetchDeviceSecret(req, new FetchDeviceSecretSecurity("modi", "qui") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.microvisorV1DeviceDeviceSecret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAccountConfig

Retrieve a list of all Configs for an Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAccountConfigRequest;
import org.openapis.openapi.models.operations.ListAccountConfigResponse;
import org.openapis.openapi.models.operations.ListAccountConfigSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAccountConfigRequest req = new ListAccountConfigRequest() {{
                page = 774234L;
                pageSize = 736918L;
                pageToken = "esse";
            }};            

            ListAccountConfigResponse res = sdk.sdk.listAccountConfig(req, new ListAccountConfigSecurity("ipsum", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listAccountConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAccountSecret

Retrieve a list of all Secrets for an Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAccountSecretRequest;
import org.openapis.openapi.models.operations.ListAccountSecretResponse;
import org.openapis.openapi.models.operations.ListAccountSecretSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAccountSecretRequest req = new ListAccountSecretRequest() {{
                page = 135218L;
                pageSize = 18789L;
                pageToken = "ad";
            }};            

            ListAccountSecretResponse res = sdk.sdk.listAccountSecret(req, new ListAccountSecretSecurity("natus", "sed") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listAccountSecretResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApp

Retrieve a list of all Apps for an Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAppRequest;
import org.openapis.openapi.models.operations.ListAppResponse;
import org.openapis.openapi.models.operations.ListAppSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAppRequest req = new ListAppRequest() {{
                page = 612096L;
                pageSize = 222321L;
                pageToken = "natus";
            }};            

            ListAppResponse res = sdk.sdk.listApp(req, new ListAppSecurity("laboriosam", "hic") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listAppResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDevice

Retrieve a list of all Devices registered with the Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeviceRequest;
import org.openapis.openapi.models.operations.ListDeviceResponse;
import org.openapis.openapi.models.operations.ListDeviceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDeviceRequest req = new ListDeviceRequest() {{
                page = 902599L;
                pageSize = 681820L;
                pageToken = "in";
            }};            

            ListDeviceResponse res = sdk.sdk.listDevice(req, new ListDeviceSecurity("corporis", "iste") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listDeviceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDeviceConfig

Retrieve a list of all Configs for a Device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeviceConfigRequest;
import org.openapis.openapi.models.operations.ListDeviceConfigResponse;
import org.openapis.openapi.models.operations.ListDeviceConfigSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDeviceConfigRequest req = new ListDeviceConfigRequest("iure") {{
                page = 902349L;
                pageSize = 697631L;
                pageToken = "architecto";
            }};            

            ListDeviceConfigResponse res = sdk.sdk.listDeviceConfig(req, new ListDeviceConfigSecurity("ipsa", "reiciendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listDeviceConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDeviceSecret

Retrieve a list of all Secrets for a Device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeviceSecretRequest;
import org.openapis.openapi.models.operations.ListDeviceSecretResponse;
import org.openapis.openapi.models.operations.ListDeviceSecretSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDeviceSecretRequest req = new ListDeviceSecretRequest("est") {{
                page = 653140L;
                pageSize = 670638L;
                pageToken = "dolores";
            }};            

            ListDeviceSecretResponse res = sdk.sdk.listDeviceSecret(req, new ListDeviceSecretSecurity("dolorem", "corporis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listDeviceSecretResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAccountConfig

Update a config for an Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAccountConfigRequest;
import org.openapis.openapi.models.operations.UpdateAccountConfigResponse;
import org.openapis.openapi.models.operations.UpdateAccountConfigSecurity;
import org.openapis.openapi.models.operations.UpdateAccountConfigUpdateAccountConfigRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAccountConfigRequest req = new UpdateAccountConfigRequest("explicabo") {{
                requestBody = new UpdateAccountConfigUpdateAccountConfigRequest("nobis");;
            }};            

            UpdateAccountConfigResponse res = sdk.sdk.updateAccountConfig(req, new UpdateAccountConfigSecurity("enim", "omnis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.microvisorV1AccountConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAccountSecret

Update a secret for an Account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAccountSecretRequest;
import org.openapis.openapi.models.operations.UpdateAccountSecretResponse;
import org.openapis.openapi.models.operations.UpdateAccountSecretSecurity;
import org.openapis.openapi.models.operations.UpdateAccountSecretUpdateAccountSecretRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAccountSecretRequest req = new UpdateAccountSecretRequest("nemo") {{
                requestBody = new UpdateAccountSecretUpdateAccountSecretRequest("minima");;
            }};            

            UpdateAccountSecretResponse res = sdk.sdk.updateAccountSecret(req, new UpdateAccountSecretSecurity("excepturi", "accusantium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.microvisorV1AccountSecret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDevice

Update a specific Device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceRequest;
import org.openapis.openapi.models.operations.UpdateDeviceResponse;
import org.openapis.openapi.models.operations.UpdateDeviceSecurity;
import org.openapis.openapi.models.operations.UpdateDeviceUpdateDeviceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateDeviceRequest req = new UpdateDeviceRequest("iure") {{
                requestBody = new UpdateDeviceUpdateDeviceRequest() {{
                    loggingEnabled = false;
                    targetApp = "culpa";
                    uniqueName = "doloribus";
                }};;
            }};            

            UpdateDeviceResponse res = sdk.sdk.updateDevice(req, new UpdateDeviceSecurity("sapiente", "architecto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.microvisorV1Device != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceConfig

Update a config for a Microvisor Device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceConfigRequest;
import org.openapis.openapi.models.operations.UpdateDeviceConfigResponse;
import org.openapis.openapi.models.operations.UpdateDeviceConfigSecurity;
import org.openapis.openapi.models.operations.UpdateDeviceConfigUpdateDeviceConfigRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateDeviceConfigRequest req = new UpdateDeviceConfigRequest("mollitia", "dolorem") {{
                requestBody = new UpdateDeviceConfigUpdateDeviceConfigRequest("culpa");;
            }};            

            UpdateDeviceConfigResponse res = sdk.sdk.updateDeviceConfig(req, new UpdateDeviceConfigSecurity("consequuntur", "repellat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.microvisorV1DeviceDeviceConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDeviceSecret

Update a secret for a Microvisor Device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDeviceSecretRequest;
import org.openapis.openapi.models.operations.UpdateDeviceSecretResponse;
import org.openapis.openapi.models.operations.UpdateDeviceSecretSecurity;
import org.openapis.openapi.models.operations.UpdateDeviceSecretUpdateDeviceSecretRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateDeviceSecretRequest req = new UpdateDeviceSecretRequest("mollitia", "occaecati") {{
                requestBody = new UpdateDeviceSecretUpdateDeviceSecretRequest("numquam");;
            }};            

            UpdateDeviceSecretResponse res = sdk.sdk.updateDeviceSecret(req, new UpdateDeviceSecretSecurity("commodi", "quam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.microvisorV1DeviceDeviceSecret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
