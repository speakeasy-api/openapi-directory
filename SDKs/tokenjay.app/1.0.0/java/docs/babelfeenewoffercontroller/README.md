# babelFeeNewOfferController

### Available Operations

* [doCreateBabelBox](#docreatebabelbox)
* [ergoPayCreateBabelBox](#ergopaycreatebabelbox)
* [getBabelFeeNewOffer](#getbabelfeenewoffer)
* [replaceTokenAmountInputFields](#replacetokenamountinputfields)

## doCreateBabelBox

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoCreateBabelBoxResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                put("magnam", new java.util.HashMap<String, Object>() {{
                    put("ipsa", "delectus");
                    put("tempora", "suscipit");
                    put("molestiae", "minus");
                    put("placeat", "voluptatum");
                }});
                put("iusto", new java.util.HashMap<String, Object>() {{
                    put("nisi", "recusandae");
                    put("temporibus", "ab");
                    put("quis", "veritatis");
                }});
            }}            

            DoCreateBabelBoxResponse res = sdk.babelFeeNewOfferController.doCreateBabelBox(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ergoPayCreateBabelBox

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErgoPayCreateBabelBoxRequest;
import org.openapis.openapi.models.operations.ErgoPayCreateBabelBoxResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ErgoPayCreateBabelBoxRequest req = new ErgoPayCreateBabelBoxRequest("deserunt", 20218L, 368241L, "repellendus");            

            ErgoPayCreateBabelBoxResponse res = sdk.babelFeeNewOfferController.ergoPayCreateBabelBox(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBabelFeeNewOffer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBabelFeeNewOfferResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBabelFeeNewOfferResponse res = sdk.babelFeeNewOfferController.getBabelFeeNewOffer();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## replaceTokenAmountInputFields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReplaceTokenAmountInputFieldsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                put("quo", new java.util.HashMap<String, Object>() {{
                    put("at", "at");
                }});
                put("maiores", new java.util.HashMap<String, Object>() {{
                    put("quod", "quod");
                    put("esse", "totam");
                }});
                put("porro", new java.util.HashMap<String, Object>() {{
                    put("dicta", "nam");
                    put("officia", "occaecati");
                    put("fugit", "deleniti");
                }});
                put("hic", new java.util.HashMap<String, Object>() {{
                    put("totam", "beatae");
                    put("commodi", "molestiae");
                    put("modi", "qui");
                    put("impedit", "cum");
                }});
            }}            

            ReplaceTokenAmountInputFieldsResponse res = sdk.babelFeeNewOfferController.replaceTokenAmountInputFields(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
