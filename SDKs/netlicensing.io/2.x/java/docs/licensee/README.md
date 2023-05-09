# licensee

## Overview

Licensee operations

Licensee Services
<https://netlicensing.io/wiki/licensee-services>
### Available Operations

* [createLicensee](#createlicensee) - Create Licensee
* [deleteLicensee](#deletelicensee) - Delete Licensee
* [getLicensee](#getlicensee) - Get Licensee
* [listLicensees](#listlicensees) - List Licensees
* [transferLicenses](#transferlicenses) - Transfer Licenses
* [updateLicensee](#updatelicensee) - Update Licensee
* [validateLicensee](#validatelicensee) - Validate Licensee

## createLicensee

Creates a new Licensee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLicenseeRequestBody;
import org.openapis.openapi.models.operations.CreateLicenseeResponse;
import org.openapis.openapi.models.operations.CreateLicenseeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateLicenseeRequestBody req = new CreateLicenseeRequestBody(false, "iure") {{
                markedForTransfer = false;
                name = "Miss Aubrey Williamson";
                number = "culpa";
            }};            

            CreateLicenseeResponse res = sdk.licensee.createLicensee(req, new CreateLicenseeSecurity("consequuntur", "repellat") {{
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

## deleteLicensee

Delete a Licensee by 'number'

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLicenseeRequest;
import org.openapis.openapi.models.operations.DeleteLicenseeResponse;
import org.openapis.openapi.models.operations.DeleteLicenseeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteLicenseeRequest req = new DeleteLicenseeRequest("mollitia") {{
                forceCascade = false;
            }};            

            DeleteLicenseeResponse res = sdk.licensee.deleteLicensee(req, new DeleteLicenseeSecurity("occaecati", "numquam") {{
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

## getLicensee

Return a Licensee by 'licenseeNumber'

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLicenseeRequest;
import org.openapis.openapi.models.operations.GetLicenseeResponse;
import org.openapis.openapi.models.operations.GetLicenseeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLicenseeRequest req = new GetLicenseeRequest("commodi");            

            GetLicenseeResponse res = sdk.licensee.getLicensee(req, new GetLicenseeSecurity("quam", "molestiae") {{
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

## listLicensees

Return a list of all Licensees for the current Vendor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLicenseesResponse;
import org.openapis.openapi.models.operations.ListLicenseesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListLicenseesResponse res = sdk.licensee.listLicensees(new ListLicenseesSecurity("velit", "error") {{
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

## transferLicenses

Licenses transfer between Licensees

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferLicensesRequest;
import org.openapis.openapi.models.operations.TransferLicensesRequestBody;
import org.openapis.openapi.models.operations.TransferLicensesResponse;
import org.openapis.openapi.models.operations.TransferLicensesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TransferLicensesRequest req = new TransferLicensesRequest(                new TransferLicensesRequestBody("quia");, "quis");            

            TransferLicensesResponse res = sdk.licensee.transferLicenses(req, new TransferLicensesSecurity("vitae", "laborum") {{
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

## updateLicensee

Sets the provided properties to a Licensee. Return an updated Licensee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLicenseeRequest;
import org.openapis.openapi.models.operations.UpdateLicenseeRequestBody;
import org.openapis.openapi.models.operations.UpdateLicenseeResponse;
import org.openapis.openapi.models.operations.UpdateLicenseeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateLicenseeRequest req = new UpdateLicenseeRequest("animi") {{
                requestBody = new UpdateLicenseeRequestBody() {{
                    active = false;
                    markedForTransfer = false;
                    name = "Christina Satterfield";
                    number = "ipsam";
                }};;
            }};            

            UpdateLicenseeResponse res = sdk.licensee.updateLicensee(req, new UpdateLicenseeSecurity("id", "possimus") {{
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

## validateLicensee

Validates active Licenses of the Licensee

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ValidateLicenseeRequest;
import org.openapis.openapi.models.operations.ValidateLicenseeRequestBody;
import org.openapis.openapi.models.operations.ValidateLicenseeRequestBodyActionEnum;
import org.openapis.openapi.models.operations.ValidateLicenseeResponse;
import org.openapis.openapi.models.operations.ValidateLicenseeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ValidateLicenseeRequest req = new ValidateLicenseeRequest("aut") {{
                requestBody = new ValidateLicenseeRequestBody() {{
                    action = ValidateLicenseeRequestBodyActionEnum.CHECK_OUT;
                    licenseeName = "error";
                    nodeSecret = "temporibus";
                    productModuleNumber = "laborum";
                    productNumber = "quasi";
                    sessionId = "reiciendis";
                }};;
            }};            

            ValidateLicenseeResponse res = sdk.licensee.validateLicensee(req, new ValidateLicenseeSecurity("voluptatibus", "vero") {{
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
