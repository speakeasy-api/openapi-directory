# payouts

## Overview

<p>Payout APIs allow you to create and instruct payouts to payees</p>
<p>There are three phases to a payout:</p>
<ul>
    <li>Submit - the payments are created within the platform</li>
    <li>Quote - optional step if FX is involved</li>
    <li>Instruct - the payments are sent to the payment rails for processing</li>
</ul>
<p>Between 1 and 2000 payments can be created within the platform as part of a Payout</p>


### Available Operations

* [createQuoteForPayoutV3](#createquoteforpayoutv3) - Create a quote for the payout
* [deschedulePayout](#deschedulepayout) - Deschedule a payout
* [getPaymentsForPayoutV3](#getpaymentsforpayoutv3) - Retrieve payments for a payout
* [getPayoutSummaryV3](#getpayoutsummaryv3) - Get Payout Summary
* [instructPayoutV3](#instructpayoutv3) - Instruct Payout
* [scheduleForPayout](#scheduleforpayout) - Schedule a payout
* [submitPayoutV3Json](#submitpayoutv3json) - Submit Payout
* [submitPayoutV3Multipart](#submitpayoutv3multipart) - Submit Payout
* [withdrawPayment](#withdrawpayment) - Withdraw a Payment
* [withdrawPayoutV3](#withdrawpayoutv3) - Withdraw Payout

## createQuoteForPayoutV3

Create quote for a payout

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateQuoteForPayoutV3Request;
import org.openapis.openapi.models.operations.CreateQuoteForPayoutV3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateQuoteForPayoutV3Request req = new CreateQuoteForPayoutV3Request("fd570757-7929-4177-9eac-646ecb573409");            

            CreateQuoteForPayoutV3Response res = sdk.payouts.createQuoteForPayoutV3(req);

            if (res.quoteResponseV3 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deschedulePayout

Remove the schedule for a scheduled payout

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeschedulePayoutRequest;
import org.openapis.openapi.models.operations.DeschedulePayoutResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeschedulePayoutRequest req = new DeschedulePayoutRequest("3eb1e5a2-b12e-4b07-b116-db99545fc95f");            

            DeschedulePayoutResponse res = sdk.payouts.deschedulePayout(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaymentsForPayoutV3

Retrieve payments for a payout

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentsForPayoutV3Request;
import org.openapis.openapi.models.operations.GetPaymentsForPayoutV3Response;
import org.openapis.openapi.models.operations.GetPaymentsForPayoutV3StatusEnum;
import org.openapis.openapi.models.operations.GetPaymentsForPayoutV3TransmissionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetPaymentsForPayoutV3Request req = new GetPaymentsForPayoutV3Request("88970e18-9dbb-430f-8b33-ea055b197cd4") {{
                page = 298187;
                pageSize = 932296;
                paymentMemo = "sed";
                payorPaymentId = "asperiores";
                remoteId = "veniam";
                sourceAccountName = "consequuntur";
                status = GetPaymentsForPayoutV3StatusEnum.WITHDRAWABLE;
                transmissionType = GetPaymentsForPayoutV3TransmissionTypeEnum.SAME_DAY_ACH;
            }};            

            GetPaymentsForPayoutV3Response res = sdk.payouts.getPaymentsForPayoutV3(req);

            if (res.pagedPaymentsResponseV3 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayoutSummaryV3

Get payout summary - returns the current state of the payout.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayoutSummaryV3Request;
import org.openapis.openapi.models.operations.GetPayoutSummaryV3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetPayoutSummaryV3Request req = new GetPayoutSummaryV3Request("d3513bb6-f48b-4656-bcdb-35ff2e4b2753");            

            GetPayoutSummaryV3Response res = sdk.payouts.getPayoutSummaryV3(req);

            if (res.payoutSummaryResponseV3 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## instructPayoutV3

Instruct a payout to be made for the specified payoutId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InstructPayoutV3Request;
import org.openapis.openapi.models.operations.InstructPayoutV3Response;
import org.openapis.openapi.models.shared.InstructPayoutRequestV3;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            InstructPayoutV3Request req = new InstructPayoutV3Request("a8cd9e73-19c1-477d-925f-77b114eeb52f") {{
                instructPayoutRequestV3 = new InstructPayoutRequestV3() {{
                    fxRateDegredationThresholdPercentage = 9391.61;
                }};;
            }};            

            InstructPayoutV3Response res = sdk.payouts.instructPayoutV3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## scheduleForPayout

<p>Schedule a payout for auto-instruction in the future
or update existing payout schedule if the payout has been scheduled before.</p>


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ScheduleForPayoutRequest;
import org.openapis.openapi.models.operations.ScheduleForPayoutResponse;
import org.openapis.openapi.models.shared.SchedulePayoutRequestV3;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ScheduleForPayoutRequest req = new ScheduleForPayoutRequest("85fc3781-4d4c-498e-8c2b-b89eb75dad63") {{
                schedulePayoutRequestV3 = new SchedulePayoutRequestV3(false, OffsetDateTime.parse("2025-01-01T10:00:00Z"));;
            }};            

            ScheduleForPayoutResponse res = sdk.payouts.scheduleForPayout(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## submitPayoutV3Json

<p>Create a new payout and return a location header with a link to the payout</p>
<p>Basic validation of the payout is performed before returning but more comprehensive validation is done asynchronously</p>
<p>The results can be obtained by issuing a HTTP GET to the URL returned in the location header</p>
<p>**NOTE:** amount values in payments must be in 'minor units' format. E.g. cents for USD, pence for GBP etc with no decimal places</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubmitPayoutV3JsonResponse;
import org.openapis.openapi.models.shared.CreatePayoutRequestV3;
import org.openapis.openapi.models.shared.PaymentInstructionV3;
import org.openapis.openapi.models.shared.PaymentInstructionV3TransmissionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreatePayoutRequestV3 req = new CreatePayoutRequestV3(                new org.openapis.openapi.models.shared.PaymentInstructionV3[]{{
                                add(new PaymentInstructionV3(1299L, "USD", "remoteId1234", "MyAccountName") {{
                                    amount = 1299L;
                                    currency = "USD";
                                    paymentMemo = "my memo";
                                    paymentMetadata = "invoiceeId_123|abc001:12345|xyz002:4567";
                                    payorPaymentId = "123211321ABSD";
                                    remoteId = "remoteId1234";
                                    remoteSystemId = "commodi";
                                    sourceAccountName = "MyAccountName";
                                    transmissionType = PaymentInstructionV3TransmissionTypeEnum.ACH;
                                }}),
                                add(new PaymentInstructionV3(1299L, "USD", "remoteId1234", "MyAccountName") {{
                                    amount = 1299L;
                                    currency = "USD";
                                    paymentMemo = "my memo";
                                    paymentMetadata = "invoiceeId_123|abc001:12345|xyz002:4567";
                                    payorPaymentId = "123211321ABSD";
                                    remoteId = "remoteId1234";
                                    remoteSystemId = "aut";
                                    sourceAccountName = "MyAccountName";
                                    transmissionType = PaymentInstructionV3TransmissionTypeEnum.ACH;
                                }}),
                                add(new PaymentInstructionV3(1299L, "USD", "remoteId1234", "MyAccountName") {{
                                    amount = 1299L;
                                    currency = "USD";
                                    paymentMemo = "my memo";
                                    paymentMetadata = "invoiceeId_123|abc001:12345|xyz002:4567";
                                    payorPaymentId = "123211321ABSD";
                                    remoteId = "remoteId1234";
                                    remoteSystemId = "voluptatem";
                                    sourceAccountName = "MyAccountName";
                                    transmissionType = PaymentInstructionV3TransmissionTypeEnum.ACH;
                                }}),
                                add(new PaymentInstructionV3(1299L, "USD", "remoteId1234", "MyAccountName") {{
                                    amount = 1299L;
                                    currency = "USD";
                                    paymentMemo = "my memo";
                                    paymentMetadata = "invoiceeId_123|abc001:12345|xyz002:4567";
                                    payorPaymentId = "123211321ABSD";
                                    remoteId = "remoteId1234";
                                    remoteSystemId = "ad";
                                    sourceAccountName = "MyAccountName";
                                    transmissionType = PaymentInstructionV3TransmissionTypeEnum.ACH;
                                }}),
                            }}) {{
                payoutFromPayorId = "c4261044-13df-4a6c-b1d4-fa8be2b46f5a";
                payoutMemo = "Monthly Payment";
                payoutToPayorId = "9afc6b39-de12-466a-a9ca-07c7a23b312d";
            }};            

            SubmitPayoutV3JsonResponse res = sdk.payouts.submitPayoutV3Json(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## submitPayoutV3Multipart

<p>Create a new payout and return a location header with a link to the payout</p>
<p>Basic validation of the payout is performed before returning but more comprehensive validation is done asynchronously</p>
<p>The results can be obtained by issuing a HTTP GET to the URL returned in the location header</p>
<p>**NOTE:** amount values in payments must be in 'minor units' format. E.g. cents for USD, pence for GBP etc with no decimal places</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubmitPayoutV3MultipartFormData;
import org.openapis.openapi.models.operations.SubmitPayoutV3MultipartResponse;
import org.openapis.openapi.models.shared.PaymentInstructionV3;
import org.openapis.openapi.models.shared.PaymentInstructionV3TransmissionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            SubmitPayoutV3MultipartFormData req = new SubmitPayoutV3MultipartFormData() {{
                file = new org.openapis.openapi.models.shared.PaymentInstructionV3[]{{
                    add(new PaymentInstructionV3(1299L, "USD", "remoteId1234", "MyAccountName") {{
                        amount = 1299L;
                        currency = "USD";
                        paymentMemo = "my memo";
                        paymentMetadata = "invoiceeId_123|abc001:12345|xyz002:4567";
                        payorPaymentId = "123211321ABSD";
                        remoteId = "remoteId1234";
                        remoteSystemId = "illum";
                        sourceAccountName = "MyAccountName";
                        transmissionType = PaymentInstructionV3TransmissionTypeEnum.ACH;
                    }}),
                }};
                payorId = "8bb31180-f739-4ae9-a057-eb809e281033";
                payoutFromPayorId = "1f3981d4-c700-4b60-bf3c-93c73b9da3f2";
                payoutToPayorId = "ceda7e23-f225-4741-9faf-4b7544e472e8";
            }};            

            SubmitPayoutV3MultipartResponse res = sdk.payouts.submitPayoutV3Multipart(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## withdrawPayment

<p>withdraw a payment </p>
<p>There are a variety of reasons why this can fail</p>
<ul>
    <li>the payment must be in a state of 'accepted' or 'unfunded'</li>
    <li>the payout must not be in a state of 'instructed'</li>
</ul>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WithdrawPaymentRequest;
import org.openapis.openapi.models.operations.WithdrawPaymentResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WithdrawPaymentRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            WithdrawPaymentRequest req = new WithdrawPaymentRequest(                new WithdrawPaymentRequest("Payment submitted in error");, "2857a5b4-0463-4a7d-975f-1400e764ad73");            

            WithdrawPaymentResponse res = sdk.payouts.withdrawPayment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## withdrawPayoutV3

Withdraw Payout will remove the payout details from the rails but the payout will still be accessible in payout service in WITHDRAWN status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WithdrawPayoutV3Request;
import org.openapis.openapi.models.operations.WithdrawPayoutV3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            WithdrawPayoutV3Request req = new WithdrawPayoutV3Request("4ec1b781-b36a-4080-88d1-00efada200ef");            

            WithdrawPayoutV3Response res = sdk.payouts.withdrawPayoutV3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
