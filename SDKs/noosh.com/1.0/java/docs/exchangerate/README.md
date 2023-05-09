# exchangeRate

### Available Operations

* [getExchangeRateList](#getexchangeratelist) - Get Exchange Rate List
* [postExchangeRateJson](#postexchangeratejson) - Create Exchange Rates
* [postExchangeRateRaw](#postexchangerateraw) - Create Exchange Rates

## getExchangeRateList

Get Exchange Rate List

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExchangeRateListRequest;
import org.openapis.openapi.models.operations.GetExchangeRateListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetExchangeRateListRequest req = new GetExchangeRateListRequest("sequi");            

            GetExchangeRateListResponse res = sdk.exchangeRate.getExchangeRateList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postExchangeRateJson

Create Exchange Rates

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostExchangeRateJsonRequest;
import org.openapis.openapi.models.operations.PostExchangeRateJsonResponse;
import org.openapis.openapi.models.shared.MultiExchangeRatePersisitVO;
import org.openapis.openapi.models.shared.MultiExchangeRatePersistListVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostExchangeRateJsonRequest req = new PostExchangeRateJsonRequest("tenetur") {{
                multiExchangeRatePersistListVO = new MultiExchangeRatePersistListVO() {{
                    exchangeRates = new org.openapis.openapi.models.shared.MultiExchangeRatePersisitVO[]{{
                        add(new MultiExchangeRatePersisitVO() {{
                            activateDate = LocalDate.parse("2021-05-11");
                            buClientWorkgroupId = 1L;
                            currency = "sample currency";
                            rate = "aut";
                            target = "sample target";
                        }}),
                        add(new MultiExchangeRatePersisitVO() {{
                            activateDate = LocalDate.parse("2022-05-18");
                            buClientWorkgroupId = 1L;
                            currency = "sample currency";
                            rate = "temporibus";
                            target = "sample target";
                        }}),
                    }};
                }};;
            }};            

            PostExchangeRateJsonResponse res = sdk.exchangeRate.postExchangeRateJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postExchangeRateRaw

Create Exchange Rates

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostExchangeRateRawRequest;
import org.openapis.openapi.models.operations.PostExchangeRateRawResponse;
import org.openapis.openapi.models.shared.MultiExchangeRatePersisitVO;
import org.openapis.openapi.models.shared.MultiExchangeRatePersistListVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostExchangeRateRawRequest req = new PostExchangeRateRawRequest("laborum") {{
                requestBody = "quasi".getBytes();
            }};            

            PostExchangeRateRawResponse res = sdk.exchangeRate.postExchangeRateRaw(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
