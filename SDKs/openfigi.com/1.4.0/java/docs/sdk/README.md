# SDK

## Overview

A free & open API for FIGI discovery.

### Available Operations

* [getMappingValuesKey](#getmappingvalueskey) - Get values for enum-like fields.
* [postMapping](#postmapping) - Allows mapping from third-party identifiers to FIGIs.

## getMappingValuesKey

Get values for enum-like fields.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMappingValuesKeyKeyEnum;
import org.openapis.openapi.models.operations.GetMappingValuesKeyRequest;
import org.openapis.openapi.models.operations.GetMappingValuesKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMappingValuesKeyRequest req = new GetMappingValuesKeyRequest(GetMappingValuesKeyKeyEnum.MARKET_SEC_DES);            

            GetMappingValuesKeyResponse res = sdk.sdk.getMappingValuesKey(req);

            if (res.getMappingValuesKey200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMapping

Allows mapping from third-party identifiers to FIGIs.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMappingResponse;
import org.openapis.openapi.models.shared.MappingJob;
import org.openapis.openapi.models.shared.MappingJobIdTypeEnum;
import org.openapis.openapi.models.shared.MappingJobOptionTypeEnum;
import org.openapis.openapi.models.shared.MappingJobStateCodeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.MappingJob[]{{
                add(new MappingJob(MappingJobIdTypeEnum.ID_CINS, 473608L) {{
                    contractSize = new Double[]{{
                        add(6027.63),
                        add(8579.46),
                        add(5448.83),
                        add(8472.52),
                    }};
                    coupon = new Double[]{{
                        add(6235.64),
                        add(6458.94),
                    }};
                    currency = "suscipit";
                    exchCode = "iure";
                    expiration = new LocalDate[]{{
                        add(LocalDate.parse("2022-10-30")),
                        add(LocalDate.parse("2022-03-08")),
                    }};
                    idType = MappingJobIdTypeEnum.ID_FULL_EXCHANGE_SYMBOL;
                    idValue = "minus";
                    includeUnlistedEquities = false;
                    marketSecDes = "placeat";
                    maturity = new LocalDate[]{{
                        add(LocalDate.parse("2022-06-07")),
                        add(LocalDate.parse("2022-01-28")),
                        add(LocalDate.parse("2022-10-15")),
                    }};
                    micCode = "quis";
                    optionType = MappingJobOptionTypeEnum.PUT;
                    securityType = "deserunt";
                    securityType2 = "perferendis";
                    stateCode = MappingJobStateCodeEnum.JS;
                    strike = new Double[]{{
                        add(9571.56),
                        add(7781.57),
                        add(1403.5),
                        add(8700.13),
                    }};
                }}),
                add(new MappingJob(MappingJobIdTypeEnum.OCC_SYMBOL, "corporis") {{
                    contractSize = new Double[]{{
                        add(8009.11),
                        add(4614.79),
                        add(5204.78),
                        add(7805.29),
                    }};
                    coupon = new Double[]{{
                        add(1182.74),
                        add(7206.33),
                        add(6399.21),
                    }};
                    currency = "occaecati";
                    exchCode = "fugit";
                    expiration = new LocalDate[]{{
                        add(LocalDate.parse("2020-09-22")),
                        add(LocalDate.parse("2022-10-15")),
                        add(LocalDate.parse("2022-07-12")),
                    }};
                    idType = MappingJobIdTypeEnum.ID_BB;
                    idValue = "impedit";
                    includeUnlistedEquities = false;
                    marketSecDes = "cum";
                    maturity = new LocalDate[]{{
                        add(LocalDate.parse("2022-06-07")),
                        add(LocalDate.parse("2022-12-25")),
                    }};
                    micCode = "ad";
                    optionType = MappingJobOptionTypeEnum.CALL;
                    securityType = "sed";
                    securityType2 = "iste";
                    stateCode = MappingJobStateCodeEnum.GS;
                    strike = new Double[]{{
                        add(3864.89),
                        add(9437.49),
                        add(9025.99),
                    }};
                }}),
                add(new MappingJob(MappingJobIdTypeEnum.ID_BB_GLOBAL_SHARE_CLASS_LEVEL, "velit") {{
                    contractSize = new Double[]{{
                        add(4370.32),
                        add(9023.49),
                        add(6976.31),
                    }};
                    coupon = new Double[]{{
                        add(602.25),
                    }};
                    currency = "reiciendis";
                    exchCode = "est";
                    expiration = new LocalDate[]{{
                        add(LocalDate.parse("2022-08-29")),
                        add(LocalDate.parse("2022-08-23")),
                        add(LocalDate.parse("2022-04-01")),
                    }};
                    idType = MappingJobIdTypeEnum.ID_ITALY;
                    idValue = 363711L;
                    includeUnlistedEquities = false;
                    marketSecDes = "minima";
                    maturity = new LocalDate[]{{
                        add(LocalDate.parse("2022-07-24")),
                        add(LocalDate.parse("2021-01-09")),
                        add(LocalDate.parse("2022-09-11")),
                    }};
                    micCode = "mollitia";
                    optionType = MappingJobOptionTypeEnum.PUT;
                    securityType = "culpa";
                    securityType2 = "consequuntur";
                    stateCode = MappingJobStateCodeEnum.ZJ;
                    strike = new Double[]{{
                        add(5818.5),
                        add(2532.91),
                        add(4143.69),
                    }};
                }}),
            }}            

            PostMappingResponse res = sdk.sdk.postMapping(req);

            if (res.bulkMappingJobResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
