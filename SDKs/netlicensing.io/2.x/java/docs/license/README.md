# license

## Overview

License operations

License Services
<https://netlicensing.io/wiki/license-services>
### Available Operations

* [createLicense](#createlicense) - Create License
* [deleteLicense](#deletelicense) - Delete License
* [getLicense](#getlicense) - Get License
* [listLicenses](#listlicenses) - List Licenses
* [updateLicense](#updatelicense) - Update License

## createLicense

Creates a new License

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLicenseRequestBody;
import org.openapis.openapi.models.operations.CreateLicenseResponse;
import org.openapis.openapi.models.operations.CreateLicenseSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateLicenseRequestBody req = new CreateLicenseRequestBody(false, "molestiae", "minus") {{
                currency = "placeat";
                hidden = false;
                name = "Ted Mante";
                number = "temporibus";
                parentfeature = "ab";
                price = 3373.96;
                quantity = "veritatis";
                startDate = OffsetDateTime.parse("2022-12-17T05:46:24.151Z");
                timeVolume = "ipsam";
                timeVolumePeriod = "repellendus";
                usedQuantity = "sapiente";
            }};            

            CreateLicenseResponse res = sdk.license.createLicense(req, new CreateLicenseSecurity("quo", "odit") {{
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

## deleteLicense

Delete License by a 'licenseNumber'

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLicenseRequest;
import org.openapis.openapi.models.operations.DeleteLicenseResponse;
import org.openapis.openapi.models.operations.DeleteLicenseSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteLicenseRequest req = new DeleteLicenseRequest("at");            

            DeleteLicenseResponse res = sdk.license.deleteLicense(req, new DeleteLicenseSecurity("at", "maiores") {{
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

## getLicense

Get License by a 'licenseNumber'

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLicenseRequest;
import org.openapis.openapi.models.operations.GetLicenseResponse;
import org.openapis.openapi.models.operations.GetLicenseSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLicenseRequest req = new GetLicenseRequest("molestiae");            

            GetLicenseResponse res = sdk.license.getLicense(req, new GetLicenseSecurity("quod", "quod") {{
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

## listLicenses

Return a list of all Licenses for the current Vendor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLicensesResponse;
import org.openapis.openapi.models.operations.ListLicensesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListLicensesResponse res = sdk.license.listLicenses(new ListLicensesSecurity("esse", "totam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLicense

Update License by a 'licenseNumber'

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLicenseRequest;
import org.openapis.openapi.models.operations.UpdateLicenseRequestBody;
import org.openapis.openapi.models.operations.UpdateLicenseResponse;
import org.openapis.openapi.models.operations.UpdateLicenseSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateLicenseRequest req = new UpdateLicenseRequest("porro") {{
                requestBody = new UpdateLicenseRequestBody() {{
                    active = false;
                    currency = "dolorum";
                    hidden = false;
                    name = "Antoinette Nikolaus";
                    number = "deleniti";
                    parentfeature = "hic";
                    price = 7586.16;
                    quantity = "totam";
                    startDate = OffsetDateTime.parse("2022-08-02T15:33:40.440Z");
                    timeVolume = "molestiae";
                    timeVolumePeriod = "modi";
                    usedQuantity = "qui";
                }};;
            }};            

            UpdateLicenseResponse res = sdk.license.updateLicense(req, new UpdateLicenseSecurity("impedit", "cum") {{
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
