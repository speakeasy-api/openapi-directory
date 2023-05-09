# taxes

### Available Operations

* [createTaxRates](#createtaxrates) - Create new tax rates
* [deleteTaxRate](#deletetaxrate) - Delete a single tax rate
* [getProductCountForAllTaxes](#getproductcountforalltaxes) - Get all tax rates and a count of products associated with each
* [getTaxRate](#gettaxrate) - Get a single tax rate
* [getTaxRates](#gettaxrates) - Get all available tax rates
* [getTaxSettings](#gettaxsettings) - Get the organization tax settings 
* [setTaxationMode](#settaxationmode) - Update the organization tax settings
* [updateTaxRate](#updatetaxrate) - Update a single tax rate

## createTaxRates

Create new tax rates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTaxRatesResponse;
import org.openapis.openapi.models.operations.CreateTaxRatesSecurity;
import org.openapis.openapi.models.shared.TaxRate;
import org.openapis.openapi.models.shared.TaxRatesCreateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.TaxRatesCreateRequest req = new TaxRatesCreateRequest(                new org.openapis.openapi.models.shared.TaxRate[]{{
                                add(new TaxRate("quisquam", "d7993900-66a6-4d2d-8003-55338cec086f") {{
                                    default_ = false;
                                    label = "optio";
                                    percentage = 8501.96;
                                    uuid = "df857a9e-6187-46c6-ab21-d29dfc94d6fe";
                                }}),
                                add(new TaxRate("consectetur", "64ffd455-906d-4126-bd48-e935c2c9e81f") {{
                                    default_ = false;
                                    label = "est";
                                    percentage = 1440.58;
                                    uuid = "1e9152cb-3119-4167-b8e3-c8db03408d6d";
                                }}),
                            }});            

            CreateTaxRatesResponse res = sdk.taxes.createTaxRates(req, new CreateTaxRatesSecurity("ipsum") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.taxRatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTaxRate

Delete a single tax rate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTaxRateRequest;
import org.openapis.openapi.models.operations.DeleteTaxRateResponse;
import org.openapis.openapi.models.operations.DeleteTaxRateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteTaxRateRequest req = new DeleteTaxRateRequest("0be3e432-02d7-4216-9765-06641870d9d2");            

            DeleteTaxRateResponse res = sdk.taxes.deleteTaxRate(req, new DeleteTaxRateSecurity("inventore") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## getProductCountForAllTaxes

Get all tax rates and a count of products associated with each

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductCountForAllTaxesResponse;
import org.openapis.openapi.models.operations.GetProductCountForAllTaxesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductCountForAllTaxesResponse res = sdk.taxes.getProductCountForAllTaxes(new GetProductCountForAllTaxesSecurity("voluptatibus") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.taxRateProductCountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTaxRate

Get a single tax rate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTaxRateRequest;
import org.openapis.openapi.models.operations.GetTaxRateResponse;
import org.openapis.openapi.models.operations.GetTaxRateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTaxRateRequest req = new GetTaxRateRequest("9ad030c4-ecc1-41a0-8364-29068b8502a5");            

            GetTaxRateResponse res = sdk.taxes.getTaxRate(req, new GetTaxRateSecurity("corporis") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.taxRate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTaxRates

Get all available tax rates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTaxRatesResponse;
import org.openapis.openapi.models.operations.GetTaxRatesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTaxRatesResponse res = sdk.taxes.getTaxRates(new GetTaxRatesSecurity("accusamus") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.taxRatesResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTaxSettings

Get the organization tax settings 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTaxSettingsResponse;
import org.openapis.openapi.models.operations.GetTaxSettingsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTaxSettingsResponse res = sdk.taxes.getTaxSettings(new GetTaxSettingsSecurity("iusto") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.taxSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setTaxationMode

Update the organization tax settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetTaxationModeResponse;
import org.openapis.openapi.models.operations.SetTaxationModeSecurity;
import org.openapis.openapi.models.shared.TaxSettingsUpdateRequest;
import org.openapis.openapi.models.shared.TaxSettingsUpdateRequestTaxationModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.TaxSettingsUpdateRequest req = new TaxSettingsUpdateRequest(TaxSettingsUpdateRequestTaxationModeEnum.INCLUSIVE);            

            SetTaxationModeResponse res = sdk.taxes.setTaxationMode(req, new SetTaxationModeSecurity("esse") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.taxSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTaxRate

Update a single tax rate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTaxRateRequest;
import org.openapis.openapi.models.operations.UpdateTaxRateResponse;
import org.openapis.openapi.models.operations.UpdateTaxRateSecurity;
import org.openapis.openapi.models.shared.TaxRateUpdateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateTaxRateRequest req = new UpdateTaxRateRequest(                new TaxRateUpdateRequest() {{
                                default_ = false;
                                label = "neque";
                                percentage = 6975.91;
                            }};, "c845e320-a319-4f4b-adf9-47c9a867bc42");            

            UpdateTaxRateResponse res = sdk.taxes.updateTaxRate(req, new UpdateTaxRateSecurity("magnam") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.taxRate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
