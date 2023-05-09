# paymentAuditServiceDeprecated

### Available Operations

* [~~exportTransactionsCsvv3~~](#exporttransactionscsvv3) - V3 Export Transactions :warning: **Deprecated**
* [~~getFundingsV1~~](#getfundingsv1) - V1 Get Fundings for Payor :warning: **Deprecated**
* [~~getPaymentDetailsV3~~](#getpaymentdetailsv3) - V3 Get Payment :warning: **Deprecated**
* [~~getPaymentsForPayoutPAV3~~](#getpaymentsforpayoutpav3) - V3 Get Payments for Payout :warning: **Deprecated**
* [~~getPayoutStatsV1~~](#getpayoutstatsv1) - V1 Get Payout Statistics :warning: **Deprecated**
* [~~getPayoutsForPayorV3~~](#getpayoutsforpayorv3) - V3 Get Payouts for Payor :warning: **Deprecated**
* [~~listPaymentChanges~~](#listpaymentchanges) - V1 List Payment Changes :warning: **Deprecated**
* [~~listPaymentsAuditV3~~](#listpaymentsauditv3) - V3 Get List of Payments :warning: **Deprecated**

## ~~exportTransactionsCsvv3~~

Deprecated (use /v4/paymentaudit/transactions instead)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportTransactionsCsvv3Request;
import org.openapis.openapi.models.operations.ExportTransactionsCsvv3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ExportTransactionsCsvv3Request req = new ExportTransactionsCsvv3Request() {{
                endDate = LocalDate.parse("2021-02-26");
                payorId = "51862065-e904-4f3b-9194-b8abf603a79f";
                startDate = LocalDate.parse("2021-05-02");
            }};            

            ExportTransactionsCsvv3Response res = sdk.paymentAuditServiceDeprecated.exportTransactionsCsvv3(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getFundingsV1~~

Deprecated (use /v4/paymentaudit/fundings)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFundingsV1Request;
import org.openapis.openapi.models.operations.GetFundingsV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetFundingsV1Request req = new GetFundingsV1Request("e0ab7da8-a50c-4e18-bf86-bc173d689eee") {{
                page = 618826;
                pageSize = 328303;
                sort = "aspernatur";
            }};            

            GetFundingsV1Response res = sdk.paymentAuditServiceDeprecated.getFundingsV1(req);

            if (res.getFundingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getPaymentDetailsV3~~

Deprecated (use /v4/paymentaudit/payments/<paymentId> instead)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentDetailsV3Request;
import org.openapis.openapi.models.operations.GetPaymentDetailsV3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetPaymentDetailsV3Request req = new GetPaymentDetailsV3Request("f8d986e8-81ea-4d4f-8e10-12563f94e29e") {{
                sensitive = false;
            }};            

            GetPaymentDetailsV3Response res = sdk.paymentAuditServiceDeprecated.getPaymentDetailsV3(req);

            if (res.paymentResponseV3 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getPaymentsForPayoutPAV3~~

Deprecated (use /v4/paymentaudit/payouts/<payoutId> instead)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentsForPayoutPAV3Request;
import org.openapis.openapi.models.operations.GetPaymentsForPayoutPAV3Response;
import org.openapis.openapi.models.operations.GetPaymentsForPayoutPAV3StatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetPaymentsForPayoutPAV3Request req = new GetPaymentsForPayoutPAV3Request("73e922a5-7a15-4be3-a060-807e2b6e3ab8") {{
                page = 523006;
                pageSize = 304446;
                paymentAmountFrom = 320565;
                paymentAmountTo = 997963;
                remoteId = "alias";
                sensitive = false;
                sort = "corporis";
                sourceAmountFrom = 597303;
                sourceAmountTo = 470649;
                status = GetPaymentsForPayoutPAV3StatusEnum.CONFIRMED;
                submittedDateFrom = LocalDate.parse("2022-12-30");
                submittedDateTo = LocalDate.parse("2020-02-03");
            }};            

            GetPaymentsForPayoutPAV3Response res = sdk.paymentAuditServiceDeprecated.getPaymentsForPayoutPAV3(req);

            if (res.getPaymentsForPayoutResponseV3 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getPayoutStatsV1~~

Deprecated (Use /v4/paymentaudit/payoutStatistics)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayoutStatsV1Request;
import org.openapis.openapi.models.operations.GetPayoutStatsV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetPayoutStatsV1Request req = new GetPayoutStatsV1Request() {{
                payorId = "a54a31e9-4764-4a3e-865e-7956f9251a5a";
            }};            

            GetPayoutStatsV1Response res = sdk.paymentAuditServiceDeprecated.getPayoutStatsV1(req);

            if (res.getPayoutStatistics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getPayoutsForPayorV3~~

Deprecated (use /v4/paymentaudit/payouts instead)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayoutsForPayorV3Request;
import org.openapis.openapi.models.operations.GetPayoutsForPayorV3Response;
import org.openapis.openapi.models.operations.GetPayoutsForPayorV3StatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetPayoutsForPayorV3Request req = new GetPayoutsForPayorV3Request("da660ff5-7bfa-4ad4-b9ef-c1b4512c1032") {{
                page = 432281;
                pageSize = 260628;
                payoutMemo = "rem";
                sort = "at";
                status = GetPayoutsForPayorV3StatusEnum.INCOMPLETE;
                submittedDateFrom = LocalDate.parse("2022-01-16");
                submittedDateTo = LocalDate.parse("2022-11-19");
            }};            

            GetPayoutsForPayorV3Response res = sdk.paymentAuditServiceDeprecated.getPayoutsForPayorV3(req);

            if (res.getPayoutsResponseV3 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~listPaymentChanges~~

Deprecated (use /v4/payments/deltas instead)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPaymentChangesRequest;
import org.openapis.openapi.models.operations.ListPaymentChangesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ListPaymentChangesRequest req = new ListPaymentChangesRequest("199ebfd0-e9fe-46c6-b2ca-3aed01179963", OffsetDateTime.parse("2022-10-31T07:20:14.068Z")) {{
                page = 984934;
                pageSize = 859581;
            }};            

            ListPaymentChangesResponse res = sdk.paymentAuditServiceDeprecated.listPaymentChanges(req);

            if (res.paymentDeltaResponseV1 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~listPaymentsAuditV3~~

Deprecated (use /v4/paymentaudit/payments instead)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPaymentsAuditV3Request;
import org.openapis.openapi.models.operations.ListPaymentsAuditV3Response;
import org.openapis.openapi.models.operations.ListPaymentsAuditV3StatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ListPaymentsAuditV3Request req = new ListPaymentsAuditV3Request() {{
                page = 58534;
                pageSize = 271113;
                payeeId = "771778ff-61d0-4174-b636-0a15db6a6606";
                paymentAmountFrom = 374753;
                paymentAmountTo = 614528;
                paymentCurrency = "id";
                paymentMemo = "ab";
                payorId = "adeaab58-51d6-4c64-9b08-b61891baa0fe";
                payorName = "architecto";
                remoteId = "fuga";
                sensitive = false;
                sort = "pariatur";
                sourceAccountName = "debitis";
                sourceAmountFrom = 29190;
                sourceAmountTo = 1207;
                sourceCurrency = "deleniti";
                status = ListPaymentsAuditV3StatusEnum.WITHDRAWN;
                submittedDateFrom = LocalDate.parse("2022-01-16");
                submittedDateTo = LocalDate.parse("2021-05-29");
            }};            

            ListPaymentsAuditV3Response res = sdk.paymentAuditServiceDeprecated.listPaymentsAuditV3(req);

            if (res.listPaymentsResponseV3 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
