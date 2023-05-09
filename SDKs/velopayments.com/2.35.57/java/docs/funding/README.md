# funding

## Overview

<p>APIs for initiating funding of source accounts from external sources and viewing balance updates</p>


### Available Operations

* [~~createFundingRequestV2~~](#createfundingrequestv2) - Create Funding Request :warning: **Deprecated**
* [createFundingRequestV3](#createfundingrequestv3) - Create Funding Request
* [getFundingAccountV2](#getfundingaccountv2) - Get Funding Account
* [getFundingAccountsV2](#getfundingaccountsv2) - Get Funding Accounts
* [getFundingByIdV1](#getfundingbyidv1) - Get Funding
* [listFundingAuditDeltas](#listfundingauditdeltas) - Get Funding Audit Delta

## ~~createFundingRequestV2~~

Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo  (202 - accepted, 400 - invalid request body, 404 - source account not found).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFundingRequestV2Request;
import org.openapis.openapi.models.operations.CreateFundingRequestV2Response;
import org.openapis.openapi.models.shared.FundingRequestV2;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateFundingRequestV2Request req = new CreateFundingRequestV2Request(                new FundingRequestV2(544883L);, "d69a674e-0f46-47cc-8796-ed151a05dfc2");            

            CreateFundingRequestV2Response res = sdk.funding.createFundingRequestV2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFundingRequestV3

<p>Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFundingRequestV3Request;
import org.openapis.openapi.models.operations.CreateFundingRequestV3Response;
import org.openapis.openapi.models.shared.FundingRequestV3;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateFundingRequestV3Request req = new CreateFundingRequestV3Request(                new FundingRequestV3(870088L, "f7cc78ca-1ba9-428f-8816-742cb7392059");, "29396fea-7596-4eb1-8faa-a2352c595590");            

            CreateFundingRequestV3Response res = sdk.funding.createFundingRequestV3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFundingAccountV2

Get Funding Account by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFundingAccountV2Request;
import org.openapis.openapi.models.operations.GetFundingAccountV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetFundingAccountV2Request req = new GetFundingAccountV2Request("aff1a3a2-fa94-4677-b925-1aa52c3f5ad0") {{
                sensitive = false;
            }};            

            GetFundingAccountV2Response res = sdk.funding.getFundingAccountV2(req);

            if (res.fundingAccountResponseV2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFundingAccountsV2

Get the funding accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFundingAccountsV2Request;
import org.openapis.openapi.models.operations.GetFundingAccountsV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetFundingAccountsV2Request req = new GetFundingAccountsV2Request() {{
                country = "US";
                currency = "USD";
                name = "Dr. Jake Pacocha";
                page = 878194;
                pageSize = 468651;
                payorId = "8f097b00-74f1-4547-9b5e-6e13b99d488e";
                sensitive = false;
                sort = "quasi";
                type = "FBO";
            }};            

            GetFundingAccountsV2Response res = sdk.funding.getFundingAccountsV2(req);

            if (res.listFundingAccountsResponseV2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFundingByIdV1

Get Funding by Id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFundingByIdV1Request;
import org.openapis.openapi.models.operations.GetFundingByIdV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetFundingByIdV1Request req = new GetFundingByIdV1Request("91e450ad-2abd-4442-a980-2d502a94bb4f");            

            GetFundingByIdV1Response res = sdk.funding.getFundingByIdV1(req);

            if (res.fundingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFundingAuditDeltas

Get funding audit deltas for a payor

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFundingAuditDeltasRequest;
import org.openapis.openapi.models.operations.ListFundingAuditDeltasResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ListFundingAuditDeltasRequest req = new ListFundingAuditDeltasRequest("3c969e9a-3efa-477d-bb14-cd66ae395efb", OffsetDateTime.parse("2021-07-20T13:32:41.687Z")) {{
                page = 659669;
                pageSize = 501324;
            }};            

            ListFundingAuditDeltasResponse res = sdk.funding.listFundingAuditDeltas(req);

            if (res.pageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
