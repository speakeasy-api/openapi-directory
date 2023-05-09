# utility

## Overview

Utility operations

Utility Services
<https://netlicensing.io/wiki/utility-services>
### Available Operations

* [licenseTypes](#licensetypes) - List License Types
* [licensingModels](#licensingmodels) - List Licensing Models

## licenseTypes

Return a list of all License Types supported by the service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LicenseTypesResponse;
import org.openapis.openapi.models.operations.LicenseTypesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LicenseTypesResponse res = sdk.utility.licenseTypes(new LicenseTypesSecurity("mollitia", "reiciendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensing != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## licensingModels

Return a list of all licensing models supported by the service

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LicensingModelsResponse;
import org.openapis.openapi.models.operations.LicensingModelsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LicensingModelsResponse res = sdk.utility.licensingModels(new LicensingModelsSecurity("mollitia", "ad") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensing != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
