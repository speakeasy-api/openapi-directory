# packageTypes

## Overview

custom package types


### Available Operations

* [createPackageType](#createpackagetype) - Create Custom Package Type
* [deletePackageType](#deletepackagetype) - Delete A Custom Package By ID
* [getPackageTypeById](#getpackagetypebyid) - Get Custom Package Type By ID
* [listPackageTypes](#listpackagetypes) - List Custom Package Types
* [updatePackageType](#updatepackagetype) - Update Custom Package Type By ID

## createPackageType

Create a custom package type to better assist in getting accurate rate estimates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePackageTypeResponse;
import org.openapis.openapi.models.shared.CreatePackageTypeRequestBody;
import org.openapis.openapi.models.shared.Dimensions;
import org.openapis.openapi.models.shared.DimensionsDimensionUnitEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreatePackageTypeRequestBody req = new CreatePackageTypeRequestBody("laptop_box", "small_flat_rate_box") {{
                description = "Packaging for laptops";
                dimensions = new Dimensions(7499.99, 1716.29, DimensionsDimensionUnitEnum.INCH, 5210.37);;
                packageId = "se-28529731";
            }};            

            CreatePackageTypeResponse res = sdk.packageTypes.createPackageType(req);

            if (res.createPackageTypeResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePackageType

Delete a custom package using the ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePackageTypeRequest;
import org.openapis.openapi.models.operations.DeletePackageTypeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePackageTypeRequest req = new DeletePackageTypeRequest("se-28529731");            

            DeletePackageTypeResponse res = sdk.packageTypes.deletePackageType(req);

            if (res.emptyResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPackageTypeById

Get Custom Package Type by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPackageTypeByIdRequest;
import org.openapis.openapi.models.operations.GetPackageTypeByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPackageTypeByIdRequest req = new GetPackageTypeByIdRequest("se-28529731");            

            GetPackageTypeByIdResponse res = sdk.packageTypes.getPackageTypeById(req);

            if (res.getPackageTypeByIdResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPackageTypes

List the custom package types associated with the account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPackageTypesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPackageTypesResponse res = sdk.packageTypes.listPackageTypes();

            if (res.listPackageTypesResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePackageType

Update the custom package type object by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePackageTypeRequest;
import org.openapis.openapi.models.operations.UpdatePackageTypeResponse;
import org.openapis.openapi.models.shared.Dimensions;
import org.openapis.openapi.models.shared.DimensionsDimensionUnitEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdatePackageTypeRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePackageTypeRequest req = new UpdatePackageTypeRequest("se-28529731",                 new UpdatePackageTypeRequestBody("laptop_box", "small_flat_rate_box") {{
                                description = "Packaging for laptops";
                                dimensions = new Dimensions(1794.9, 185.21, DimensionsDimensionUnitEnum.INCH, 7936.98);;
                                packageId = "se-28529731";
                            }};);            

            UpdatePackageTypeResponse res = sdk.packageTypes.updatePackageType(req);

            if (res.emptyResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
