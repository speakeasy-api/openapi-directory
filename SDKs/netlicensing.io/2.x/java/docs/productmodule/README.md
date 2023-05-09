# productModule

## Overview

Product Module operations

Product Module Services
<https://netlicensing.io/wiki/product-module-services>
### Available Operations

* [createProductModule](#createproductmodule) - Create Product Module
* [deleteProductModule](#deleteproductmodule) - Delete Product Module
* [getProductModule](#getproductmodule) - Get Product Module
* [listProductModules](#listproductmodules) - List Product Modules
* [updateProductModule](#updateproductmodule) - Update Product Module

## createProductModule

Creates a new Product Module

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProductModuleRequestBody;
import org.openapis.openapi.models.operations.CreateProductModuleRequestBodyLicenseTemplateEnum;
import org.openapis.openapi.models.operations.CreateProductModuleRequestBodyNodeSecretModeEnum;
import org.openapis.openapi.models.operations.CreateProductModuleResponse;
import org.openapis.openapi.models.operations.CreateProductModuleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateProductModuleRequestBody req = new CreateProductModuleRequestBody(false, "consequatur", "est", "quibusdam") {{
                licenseTemplate = new org.openapis.openapi.models.operations.CreateProductModuleRequestBodyLicenseTemplateEnum[]{{
                    add(CreateProductModuleRequestBodyLicenseTemplateEnum.FEATURE),
                }};
                maxCheckoutValidity = 716327;
                nodeSecretMode = new org.openapis.openapi.models.operations.CreateProductModuleRequestBodyNodeSecretModeEnum[]{{
                    add(CreateProductModuleRequestBodyNodeSecretModeEnum.PREDEFINED),
                    add(CreateProductModuleRequestBodyNodeSecretModeEnum.PREDEFINED),
                    add(CreateProductModuleRequestBodyNodeSecretModeEnum.PREDEFINED),
                    add(CreateProductModuleRequestBodyNodeSecretModeEnum.PREDEFINED),
                }};
                number = "cupiditate";
                redThreshold = 552822;
                yellowThreshold = 20107;
            }};            

            CreateProductModuleResponse res = sdk.productModule.createProductModule(req, new CreateProductModuleSecurity("magni", "assumenda") {{
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

## deleteProductModule

Delete a Product Module by 'number'

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProductModuleRequest;
import org.openapis.openapi.models.operations.DeleteProductModuleResponse;
import org.openapis.openapi.models.operations.DeleteProductModuleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteProductModuleRequest req = new DeleteProductModuleRequest("ipsam") {{
                forceCascade = false;
            }};            

            DeleteProductModuleResponse res = sdk.productModule.deleteProductModule(req, new DeleteProductModuleSecurity("alias", "fugit") {{
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

## getProductModule

Return a Product Module by 'productModuleNumber'

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductModuleRequest;
import org.openapis.openapi.models.operations.GetProductModuleResponse;
import org.openapis.openapi.models.operations.GetProductModuleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductModuleRequest req = new GetProductModuleRequest("dolorum");            

            GetProductModuleResponse res = sdk.productModule.getProductModule(req, new GetProductModuleSecurity("excepturi", "tempora") {{
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

## listProductModules

Return a list of all Product Modules for the current Vendor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProductModulesResponse;
import org.openapis.openapi.models.operations.ListProductModulesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListProductModulesResponse res = sdk.productModule.listProductModules(new ListProductModulesSecurity("facilis", "tempore") {{
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

## updateProductModule

Sets the provided properties to a Product Module. Return an updated Product Module

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProductModuleRequest;
import org.openapis.openapi.models.operations.UpdateProductModuleRequestBody;
import org.openapis.openapi.models.operations.UpdateProductModuleRequestBodyLicenseTemplateEnum;
import org.openapis.openapi.models.operations.UpdateProductModuleRequestBodyNodeSecretModeEnum;
import org.openapis.openapi.models.operations.UpdateProductModuleResponse;
import org.openapis.openapi.models.operations.UpdateProductModuleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateProductModuleRequest req = new UpdateProductModuleRequest("labore") {{
                requestBody = new UpdateProductModuleRequestBody() {{
                    active = false;
                    licenseTemplate = new org.openapis.openapi.models.operations.UpdateProductModuleRequestBodyLicenseTemplateEnum[]{{
                        add(UpdateProductModuleRequestBodyLicenseTemplateEnum.TIMEVOLUME),
                        add(UpdateProductModuleRequestBodyLicenseTemplateEnum.TIMEVOLUME),
                        add(UpdateProductModuleRequestBodyLicenseTemplateEnum.FEATURE),
                        add(UpdateProductModuleRequestBodyLicenseTemplateEnum.FEATURE),
                    }};
                    licensingModel = "aliquid";
                    maxCheckoutValidity = 592042;
                    name = "Perry Nikolaus";
                    nodeSecretMode = new org.openapis.openapi.models.operations.UpdateProductModuleRequestBodyNodeSecretModeEnum[]{{
                        add(UpdateProductModuleRequestBodyNodeSecretModeEnum.CLIENT),
                        add(UpdateProductModuleRequestBodyNodeSecretModeEnum.PREDEFINED),
                        add(UpdateProductModuleRequestBodyNodeSecretModeEnum.PREDEFINED),
                        add(UpdateProductModuleRequestBodyNodeSecretModeEnum.CLIENT),
                    }};
                    number = "maiores";
                    redThreshold = 699479;
                    yellowThreshold = 116202;
                }};;
            }};            

            UpdateProductModuleResponse res = sdk.productModule.updateProductModule(req, new UpdateProductModuleSecurity("magnam", "cumque") {{
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
