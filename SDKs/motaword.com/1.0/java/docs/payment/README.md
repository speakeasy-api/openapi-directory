# payment

### Available Operations

* [deleteCreditCard](#deletecreditcard) - Delete credit card
* [getCreditCard](#getcreditcard) - View saved credit card
* [resetCardPaymentCode](#resetcardpaymentcode) - Reset credit card payment code
* [resetCorporatePaymentCode](#resetcorporatepaymentcode) - Reset payment code
* [toggleCorporateAutoCharge](#togglecorporateautocharge) - Manage automatic charges on your credit card

## deleteCreditCard

Delete credit card

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCreditCardRequest;
import org.openapis.openapi.models.operations.DeleteCreditCardResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteCreditCardRequest req = new DeleteCreditCardRequest(301831L);            

            DeleteCreditCardResponse res = sdk.payment.deleteCreditCard(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreditCard

View saved credit card

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCreditCardRequest;
import org.openapis.openapi.models.operations.GetCreditCardResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetCreditCardRequest req = new GetCreditCardRequest(775220L);            

            GetCreditCardResponse res = sdk.payment.getCreditCard(req);

            if (res.creditCard != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetCardPaymentCode

Reset the payment code used to bypass credit card payment. This will invalidate your current payment code and your users should be aware of this change while ordering translations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetCardPaymentCodeRequest;
import org.openapis.openapi.models.operations.ResetCardPaymentCodeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ResetCardPaymentCodeRequest req = new ResetCardPaymentCodeRequest(926213L);            

            ResetCardPaymentCodeResponse res = sdk.payment.resetCardPaymentCode(req);

            if (res.creditCard != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resetCorporatePaymentCode

Reset your corporate account's payment code to bypass credit card payment. This will invalidate your current payment code and your users should be aware of this change while ordering translations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetCorporatePaymentCodeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ResetCorporatePaymentCodeResponse res = sdk.payment.resetCorporatePaymentCode();

            if (res.creditCard != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## toggleCorporateAutoCharge

Toggle (enable/disable) automatic charges on the credit card on file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ToggleCorporateAutoChargeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ToggleCorporateAutoChargeResponse res = sdk.payment.toggleCorporateAutoCharge();

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
