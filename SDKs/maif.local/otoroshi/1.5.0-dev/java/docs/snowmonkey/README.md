# snowmonkey

## Overview

Everything about Otoroshi Snow Monkey

### Available Operations

* [getSnowMonkeyConfig](#getsnowmonkeyconfig) - Get current Snow Monkey config
* [getSnowMonkeyOutages](#getsnowmonkeyoutages) - Get all current Snow Monkey ourages
* [patchSnowMonkey](#patchsnowmonkey) - Update current Snow Monkey config
* [resetSnowMonkey](#resetsnowmonkey) - Reset Snow Monkey Outages for the day
* [startSnowMonkey](#startsnowmonkey) - Start the Snow Monkey
* [stopSnowMonkey](#stopsnowmonkey) - Stop the Snow Monkey
* [updateSnowMonkey](#updatesnowmonkey) - Update current Snow Monkey config

## getSnowMonkeyConfig

Get current Snow Monkey config

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSnowMonkeyConfigResponse;
import org.openapis.openapi.models.operations.GetSnowMonkeyConfigSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSnowMonkeyConfigResponse res = sdk.snowmonkey.getSnowMonkeyConfig(new GetSnowMonkeyConfigSecurity("eum", "reprehenderit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.snowMonkeyConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSnowMonkeyOutages

Get all current Snow Monkey ourages

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSnowMonkeyOutagesResponse;
import org.openapis.openapi.models.operations.GetSnowMonkeyOutagesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSnowMonkeyOutagesResponse res = sdk.snowmonkey.getSnowMonkeyOutages(new GetSnowMonkeyOutagesSecurity("voluptatum", "blanditiis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.outages != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchSnowMonkey

Update current Snow Monkey config

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchSnowMonkeyResponse;
import org.openapis.openapi.models.operations.PatchSnowMonkeySecurity;
import org.openapis.openapi.models.shared.Group;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.Group req = new Group("a string value", "a string value") {{
                description = "a string value";
            }};            

            PatchSnowMonkeyResponse res = sdk.snowmonkey.patchSnowMonkey(req, new PatchSnowMonkeySecurity("nihil", "atque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.snowMonkeyConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetSnowMonkey

Reset Snow Monkey Outages for the day

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetSnowMonkeyResponse;
import org.openapis.openapi.models.operations.ResetSnowMonkeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResetSnowMonkeyResponse res = sdk.snowmonkey.resetSnowMonkey(new ResetSnowMonkeySecurity("rerum", "deserunt") {{
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

## startSnowMonkey

Start the Snow Monkey

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartSnowMonkeyResponse;
import org.openapis.openapi.models.operations.StartSnowMonkeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StartSnowMonkeyResponse res = sdk.snowmonkey.startSnowMonkey(new StartSnowMonkeySecurity("atque", "nostrum") {{
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

## stopSnowMonkey

Stop the Snow Monkey

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopSnowMonkeyResponse;
import org.openapis.openapi.models.operations.StopSnowMonkeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopSnowMonkeyResponse res = sdk.snowmonkey.stopSnowMonkey(new StopSnowMonkeySecurity("atque", "architecto") {{
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

## updateSnowMonkey

Update current Snow Monkey config

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSnowMonkeyResponse;
import org.openapis.openapi.models.operations.UpdateSnowMonkeySecurity;
import org.openapis.openapi.models.shared.Group;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.Group req = new Group("a string value", "a string value") {{
                description = "a string value";
            }};            

            UpdateSnowMonkeyResponse res = sdk.snowmonkey.updateSnowMonkey(req, new UpdateSnowMonkeySecurity("est", "enim") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.snowMonkeyConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
