# countries

### Available Operations

* [~~listPaymentChannelRulesV1~~](#listpaymentchannelrulesv1) - List Payment Channel Country Rules :warning: **Deprecated**
* [~~listSupportedCountriesV1~~](#listsupportedcountriesv1) - List Supported Countries :warning: **Deprecated**
* [~~listSupportedCountriesV2~~](#listsupportedcountriesv2) - List Supported Countries :warning: **Deprecated**

## ~~listPaymentChannelRulesV1~~

List the country specific payment channel rules.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPaymentChannelRulesV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ListPaymentChannelRulesV1Response res = sdk.countries.listPaymentChannelRulesV1();

            if (res.paymentChannelRulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~listSupportedCountriesV1~~

<p>List the supported countries.</p>
<p>This version will be retired in March 2020. Use /v2/supportedCountries</p>


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSupportedCountriesV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ListSupportedCountriesV1Response res = sdk.countries.listSupportedCountriesV1();

            if (res.supportedCountriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~listSupportedCountriesV2~~

List the supported countries.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSupportedCountriesV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ListSupportedCountriesV2Response res = sdk.countries.listSupportedCountriesV2();

            if (res.supportedCountriesResponseV2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
