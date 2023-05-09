# paymentDetails

### Available Operations

* [getDomesticPaymentsDomesticPaymentIdPaymentDetails](#getdomesticpaymentsdomesticpaymentidpaymentdetails) - Get Payment Details
* [getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails](#getdomesticscheduledpaymentsdomesticscheduledpaymentidpaymentdetails) - Get Payment Details
* [getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails](#getdomesticstandingordersdomesticstandingorderidpaymentdetails) - Get Payment Details
* [getFilePaymentsFilePaymentIdPaymentDetails](#getfilepaymentsfilepaymentidpaymentdetails) - Get Payment Details
* [getInternationalPaymentsInternationalPaymentIdPaymentDetails](#getinternationalpaymentsinternationalpaymentidpaymentdetails) - Get Payment Details
* [getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails](#getinternationalscheduledpaymentsinternationalscheduledpaymentidpaymentdetails) - Get Payment Details
* [getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails](#getinternationalstandingordersinternationalstandingorderpaymentidpaymentdetails) - Get Payment Details

## getDomesticPaymentsDomesticPaymentIdPaymentDetails

Get Payment Details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomesticPaymentsDomesticPaymentIdPaymentDetailsRequest;
import org.openapis.openapi.models.operations.GetDomesticPaymentsDomesticPaymentIdPaymentDetailsResponse;
import org.openapis.openapi.models.operations.GetDomesticPaymentsDomesticPaymentIdPaymentDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomesticPaymentsDomesticPaymentIdPaymentDetailsRequest req = new GetDomesticPaymentsDomesticPaymentIdPaymentDetailsRequest("dicta", "impedit") {{
                xCustomerUserAgent = "voluptatibus";
                xFapiAuthDate = "iste";
                xFapiCustomerIpAddress = "itaque";
                xFapiInteractionId = "alias";
            }};            

            GetDomesticPaymentsDomesticPaymentIdPaymentDetailsResponse res = sdk.paymentDetails.getDomesticPaymentsDomesticPaymentIdPaymentDetails(req, new GetDomesticPaymentsDomesticPaymentIdPaymentDetailsSecurity("nisi") {{
                tppoAuth2Security = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails

Get Payment Details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRequest;
import org.openapis.openapi.models.operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsResponse;
import org.openapis.openapi.models.operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRequest req = new GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRequest("itaque", "velit") {{
                xCustomerUserAgent = "laborum";
                xFapiAuthDate = "non";
                xFapiCustomerIpAddress = "dolor";
                xFapiInteractionId = "iusto";
            }};            

            GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsResponse res = sdk.paymentDetails.getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails(req, new GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsSecurity("sit") {{
                tppoAuth2Security = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails

Get Payment Details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRequest;
import org.openapis.openapi.models.operations.GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsResponse;
import org.openapis.openapi.models.operations.GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRequest req = new GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRequest("doloremque", "consequatur") {{
                xCustomerUserAgent = "officia";
                xFapiAuthDate = "recusandae";
                xFapiCustomerIpAddress = "ea";
                xFapiInteractionId = "quidem";
            }};            

            GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsResponse res = sdk.paymentDetails.getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails(req, new GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsSecurity("voluptas") {{
                tppoAuth2Security = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFilePaymentsFilePaymentIdPaymentDetails

Get Payment Details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFilePaymentsFilePaymentIdPaymentDetailsRequest;
import org.openapis.openapi.models.operations.GetFilePaymentsFilePaymentIdPaymentDetailsResponse;
import org.openapis.openapi.models.operations.GetFilePaymentsFilePaymentIdPaymentDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFilePaymentsFilePaymentIdPaymentDetailsRequest req = new GetFilePaymentsFilePaymentIdPaymentDetailsRequest("facilis", "placeat") {{
                xCustomerUserAgent = "perspiciatis";
                xFapiAuthDate = "expedita";
                xFapiCustomerIpAddress = "deleniti";
                xFapiInteractionId = "a";
            }};            

            GetFilePaymentsFilePaymentIdPaymentDetailsResponse res = sdk.paymentDetails.getFilePaymentsFilePaymentIdPaymentDetails(req, new GetFilePaymentsFilePaymentIdPaymentDetailsSecurity("voluptate") {{
                tppoAuth2Security = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInternationalPaymentsInternationalPaymentIdPaymentDetails

Get Payment Details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInternationalPaymentsInternationalPaymentIdPaymentDetailsRequest;
import org.openapis.openapi.models.operations.GetInternationalPaymentsInternationalPaymentIdPaymentDetailsResponse;
import org.openapis.openapi.models.operations.GetInternationalPaymentsInternationalPaymentIdPaymentDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInternationalPaymentsInternationalPaymentIdPaymentDetailsRequest req = new GetInternationalPaymentsInternationalPaymentIdPaymentDetailsRequest("ullam", "unde") {{
                xCustomerUserAgent = "necessitatibus";
                xFapiAuthDate = "animi";
                xFapiCustomerIpAddress = "impedit";
                xFapiInteractionId = "ipsam";
            }};            

            GetInternationalPaymentsInternationalPaymentIdPaymentDetailsResponse res = sdk.paymentDetails.getInternationalPaymentsInternationalPaymentIdPaymentDetails(req, new GetInternationalPaymentsInternationalPaymentIdPaymentDetailsSecurity("corporis") {{
                tppoAuth2Security = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails

Get Payment Details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRequest;
import org.openapis.openapi.models.operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsResponse;
import org.openapis.openapi.models.operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRequest req = new GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRequest("est", "error") {{
                xCustomerUserAgent = "esse";
                xFapiAuthDate = "labore";
                xFapiCustomerIpAddress = "veritatis";
                xFapiInteractionId = "vero";
            }};            

            GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsResponse res = sdk.paymentDetails.getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails(req, new GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsSecurity("consectetur") {{
                tppoAuth2Security = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails

Get Payment Details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsRequest;
import org.openapis.openapi.models.operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsResponse;
import org.openapis.openapi.models.operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsRequest req = new GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsRequest("vitae", "inventore") {{
                xCustomerUserAgent = "dolorem";
                xFapiAuthDate = "ad";
                xFapiCustomerIpAddress = "qui";
                xFapiInteractionId = "iste";
            }};            

            GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsResponse res = sdk.paymentDetails.getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails(req, new GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsSecurity("ex") {{
                tppoAuth2Security = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
