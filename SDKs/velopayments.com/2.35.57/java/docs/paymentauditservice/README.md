# paymentAuditService

## Overview

Payment Audit Service APIs allow you to see the history of fundings, payouts, and payments to payees.

### Available Operations

* [exportTransactionsCsvv4](#exporttransactionscsvv4) - Export Transactions
* [getFundingsV4](#getfundingsv4) - Get Fundings for Payor
* [getPaymentDetailsV4](#getpaymentdetailsv4) - Get Payment
* [getPaymentsForPayoutV4](#getpaymentsforpayoutv4) - Get Payments for Payout
* [getPayoutStatsV4](#getpayoutstatsv4) - Get Payout Statistics
* [getPayoutsForPayorV4](#getpayoutsforpayorv4) - Get Payouts for Payor
* [listPaymentChangesV4](#listpaymentchangesv4) - List Payment Changes
* [listPaymentsAuditV4](#listpaymentsauditv4) - Get List of Payments

## exportTransactionsCsvv4

Download a CSV file containing payments in a date range. Uses Transfer-Encoding - chunked to stream to the client. Date range is inclusive of both the start and end dates.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportTransactionsCsvv4IncludeEnum;
import org.openapis.openapi.models.operations.ExportTransactionsCsvv4Request;
import org.openapis.openapi.models.operations.ExportTransactionsCsvv4Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ExportTransactionsCsvv4Request req = new ExportTransactionsCsvv4Request() {{
                endDate = LocalDate.parse("2022-06-04");
                include = ExportTransactionsCsvv4IncludeEnum.PAYOR_ONLY;
                payorId = "f2a70c68-8282-4aa4-8256-2f222e9817ee";
                startDate = LocalDate.parse("2022-07-17");
            }};            

            ExportTransactionsCsvv4Response res = sdk.paymentAuditService.exportTransactionsCsvv4(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFundingsV4

<p>Get a list of Fundings for a payor.</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFundingsV4Request;
import org.openapis.openapi.models.operations.GetFundingsV4Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetFundingsV4Request req = new GetFundingsV4Request("be61e6b7-b95b-4c0a-b3c2-0c4f3789fd87") {{
                page = 97468;
                pageSize = 951875;
                sort = "error";
                sourceAccountName = "sint";
            }};            

            GetFundingsV4Response res = sdk.paymentAuditService.getFundingsV4(req);

            if (res.getFundingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaymentDetailsV4

Get the payment with the given id. This contains the payment history.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentDetailsV4Request;
import org.openapis.openapi.models.operations.GetPaymentDetailsV4Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetPaymentDetailsV4Request req = new GetPaymentDetailsV4Request("d2efd121-aa6f-41e6-b4bd-b04f15756082") {{
                sensitive = false;
            }};            

            GetPaymentDetailsV4Response res = sdk.paymentAuditService.getPaymentDetailsV4(req);

            if (res.paymentResponseV4 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaymentsForPayoutV4

Get List of payments for Payout, allowing for RETURNED status


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentsForPayoutV4Request;
import org.openapis.openapi.models.operations.GetPaymentsForPayoutV4Response;
import org.openapis.openapi.models.operations.GetPaymentsForPayoutV4StatusEnum;
import org.openapis.openapi.models.operations.GetPaymentsForPayoutV4TransmissionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetPaymentsForPayoutV4Request req = new GetPaymentsForPayoutV4Request("68ea19f1-d170-4513-b9d0-8086a1840394") {{
                page = 771089;
                pageSize = 131055;
                paymentAmountFrom = 376226;
                paymentAmountTo = 12036;
                railsId = "dignissimos";
                remoteId = "dicta";
                remoteSystemId = "maiores";
                sensitive = false;
                sort = "natus";
                sourceAmountFrom = 244651;
                sourceAmountTo = 974257;
                status = GetPaymentsForPayoutV4StatusEnum.BANK_PAYMENT_REQUESTED;
                submittedDateFrom = LocalDate.parse("2022-11-12");
                submittedDateTo = LocalDate.parse("2022-09-09");
                transmissionType = GetPaymentsForPayoutV4TransmissionTypeEnum.ACH;
            }};            

            GetPaymentsForPayoutV4Response res = sdk.paymentAuditService.getPaymentsForPayoutV4(req);

            if (res.getPaymentsForPayoutResponseV4 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayoutStatsV4

<p>Get payout statistics for a payor.</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayoutStatsV4Request;
import org.openapis.openapi.models.operations.GetPayoutStatsV4Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetPayoutStatsV4Request req = new GetPayoutStatsV4Request() {{
                payorId = "ac7af515-cc41-43aa-a3aa-e8d67864dbb6";
            }};            

            GetPayoutStatsV4Response res = sdk.paymentAuditService.getPayoutStatsV4(req);

            if (res.getPayoutStatistics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayoutsForPayorV4

Get List of payouts for payor


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayoutsForPayorV4Request;
import org.openapis.openapi.models.operations.GetPayoutsForPayorV4Response;
import org.openapis.openapi.models.operations.GetPayoutsForPayorV4ScheduleStatusEnum;
import org.openapis.openapi.models.operations.GetPayoutsForPayorV4StatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetPayoutsForPayorV4Request req = new GetPayoutsForPayorV4Request() {{
                fromPayorName = "corporis";
                page = 968904;
                pageSize = 828657;
                payorId = "5e60b375-ed4f-46fb-ae41-f33317fe35b6";
                payoutMemo = "ipsa";
                scheduleStatus = GetPayoutsForPayorV4ScheduleStatusEnum.FAILED;
                scheduledForDateFrom = LocalDate.parse("2022-10-09");
                scheduledForDateTo = LocalDate.parse("2021-02-08");
                sort = "tempora";
                status = GetPayoutsForPayorV4StatusEnum.REJECTED;
                submittedDateFrom = LocalDate.parse("2022-08-17");
                submittedDateTo = LocalDate.parse("2022-09-04");
            }};            

            GetPayoutsForPayorV4Response res = sdk.paymentAuditService.getPayoutsForPayorV4(req);

            if (res.getPayoutsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPaymentChangesV4

Get a paginated response listing payment changes.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPaymentChangesV4Request;
import org.openapis.openapi.models.operations.ListPaymentChangesV4Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ListPaymentChangesV4Request req = new ListPaymentChangesV4Request("a3c28744-ed53-4b88-b3a8-d8f5c0b2f2fb", OffsetDateTime.parse("2022-04-17T04:31:41.347Z")) {{
                page = 70869;
                pageSize = 611749;
            }};            

            ListPaymentChangesV4Response res = sdk.paymentAuditService.listPaymentChangesV4(req);

            if (res.paymentDeltaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPaymentsAuditV4

Get payments for the given payor Id

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPaymentsAuditV4PostInstructFxStatusEnum;
import org.openapis.openapi.models.operations.ListPaymentsAuditV4Request;
import org.openapis.openapi.models.operations.ListPaymentsAuditV4Response;
import org.openapis.openapi.models.operations.ListPaymentsAuditV4ScheduleStatusEnum;
import org.openapis.openapi.models.operations.ListPaymentsAuditV4StatusEnum;
import org.openapis.openapi.models.operations.ListPaymentsAuditV4TransmissionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ListPaymentsAuditV4Request req = new ListPaymentsAuditV4Request() {{
                page = 671907;
                pageSize = 152354;
                payeeId = "76b26916-fe1f-408f-8294-e3698f447f60";
                paymentAmountFrom = 248413;
                paymentAmountTo = 888044;
                paymentCurrency = "praesentium";
                paymentMemo = "facilis";
                payorId = "445e80ca-55ef-4d20-a457-e1858b6a89fb";
                payorName = "debitis";
                postInstructFxStatus = ListPaymentsAuditV4PostInstructFxStatusEnum.INITIATED;
                railsId = "dolorum";
                remoteId = "nostrum";
                remoteSystemId = "officia";
                scheduleStatus = ListPaymentsAuditV4ScheduleStatusEnum.EXECUTED;
                scheduledForDateFrom = LocalDate.parse("2021-03-30");
                scheduledForDateTo = LocalDate.parse("2022-06-16");
                sensitive = false;
                sort = "fugit";
                sourceAccountName = "ut";
                sourceAmountFrom = 856303;
                sourceAmountTo = 30235;
                sourceCurrency = "culpa";
                status = ListPaymentsAuditV4StatusEnum.CONFIRMED;
                submittedDateFrom = LocalDate.parse("2022-12-29");
                submittedDateTo = LocalDate.parse("2022-08-17");
                transmissionType = ListPaymentsAuditV4TransmissionTypeEnum.ACH;
            }};            

            ListPaymentsAuditV4Response res = sdk.paymentAuditService.listPaymentsAuditV4(req);

            if (res.listPaymentsResponseV4 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
