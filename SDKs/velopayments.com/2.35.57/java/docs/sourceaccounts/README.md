# sourceAccounts

## Overview

<p>Source Accounts are where funds are drawn from for making payouts</p>


### Available Operations

* [~~getSourceAccountV2~~](#getsourceaccountv2) - Get Source Account :warning: **Deprecated**
* [getSourceAccountV3](#getsourceaccountv3) - Get details about given source account.
* [~~getSourceAccountsV2~~](#getsourceaccountsv2) - Get list of source accounts :warning: **Deprecated**
* [getSourceAccountsV3](#getsourceaccountsv3) - Get list of source accounts
* [~~setNotificationsRequest~~](#setnotificationsrequest) - Set notifications :warning: **Deprecated**
* [setNotificationsRequestV3](#setnotificationsrequestv3) - Set notifications
* [~~transferFundsV2~~](#transferfundsv2) - Transfer Funds between source accounts :warning: **Deprecated**
* [transferFundsV3](#transferfundsv3) - Transfer Funds between source accounts

## ~~getSourceAccountV2~~

Get details about given source account.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSourceAccountV2Request;
import org.openapis.openapi.models.operations.GetSourceAccountV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSourceAccountV2Request req = new GetSourceAccountV2Request("422eb216-4cf9-4ab8-b66c-723ffda9e06b");            

            GetSourceAccountV2Response res = sdk.sourceAccounts.getSourceAccountV2(req);

            if (res.sourceAccountResponseV2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSourceAccountV3

Get details about given source account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSourceAccountV3Request;
import org.openapis.openapi.models.operations.GetSourceAccountV3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSourceAccountV3Request req = new GetSourceAccountV3Request("e4825c1f-c0e1-415c-80bf-f918544ec42d");            

            GetSourceAccountV3Response res = sdk.sourceAccounts.getSourceAccountV3(req);

            if (res.sourceAccountResponseV3 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getSourceAccountsV2~~

List source accounts.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSourceAccountsV2Request;
import org.openapis.openapi.models.operations.GetSourceAccountsV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSourceAccountsV2Request req = new GetSourceAccountsV2Request() {{
                fundingAccountId = "fcce8f19-7777-43e6-b562-a7b408f05e3d";
                page = 307173;
                pageSize = 552581;
                payorId = "fdaf313a-1f5f-4d94-a59c-0b36f25ea944";
                physicalAccountId = "f3b756c1-1f6c-437a-9126-243835bbc05a";
                physicalAccountName = "consequuntur";
                sort = "amet";
            }};            

            GetSourceAccountsV2Response res = sdk.sourceAccounts.getSourceAccountsV2(req);

            if (res.listSourceAccountResponseV2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSourceAccountsV3

List source accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSourceAccountsV3Request;
import org.openapis.openapi.models.operations.GetSourceAccountsV3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSourceAccountsV3Request req = new GetSourceAccountsV3Request() {{
                fundingAccountId = "45cefc5f-de10-4a0c-a216-9e510019c6dc";
                includeUserDeleted = "nemo";
                page = 923456;
                pageSize = 246772;
                payorId = "4762799b-fbbe-4694-9fb2-bb4ecae6c3d5";
                physicalAccountId = "db3adebd-5dae-4a4c-906a-8aa94c02644c";
                physicalAccountName = "hic";
                sort = "nostrum";
                type = "officiis";
            }};            

            GetSourceAccountsV3Response res = sdk.sourceAccounts.getSourceAccountsV3(req);

            if (res.listSourceAccountResponseV3 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~setNotificationsRequest~~

<p>Set notifications for a given source account</p>
<p>deprecated since 2.34 (use v3 version)</p>


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetNotificationsRequestRequest;
import org.openapis.openapi.models.operations.SetNotificationsRequestResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetNotificationsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            SetNotificationsRequestRequest req = new SetNotificationsRequestRequest(                new SetNotificationsRequest(860311L);, "9a4578ad-c1ac-4600-9ec0-01ac802e2ec0");            

            SetNotificationsRequestResponse res = sdk.sourceAccounts.setNotificationsRequest(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setNotificationsRequestV3

<p>Set notifications for a given source account</p>
<p>If the balance falls below the amount set in the request an email notification will be sent to the email address registered in the payor profile</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetNotificationsRequestV3Request;
import org.openapis.openapi.models.operations.SetNotificationsRequestV3Response;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetNotificationsRequest2;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            SetNotificationsRequestV3Request req = new SetNotificationsRequestV3Request(                new SetNotificationsRequest2(10000000L);, "ff8f0f81-6ff3-4477-813e-902c14125b09");            

            SetNotificationsRequestV3Response res = sdk.sourceAccounts.setNotificationsRequestV3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~transferFundsV2~~

Transfer funds between source accounts for a Payor. The 'from' source account is identified in the URL, and is the account which will be debited. The 'to' (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the 'from' source account, otherwise the transfer attempt will fail.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferFundsV2Request;
import org.openapis.openapi.models.operations.TransferFundsV2Response;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferRequestV2;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            TransferFundsV2Request req = new TransferFundsV2Request(                new TransferRequestV2(35581L, "USD", "a668151a-472a-4f92-bc59-49f83f350cf8");, "76ffb901-c6ec-4bb4-a243-cf789ffafeda");            

            TransferFundsV2Response res = sdk.sourceAccounts.transferFundsV2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transferFundsV3

Transfer funds between source accounts for a Payor. The 'from' source account is identified in the URL, and is the account which will be debited. The 'to' (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the 'from' source account, otherwise the transfer attempt will fail.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransferFundsV3Request;
import org.openapis.openapi.models.operations.TransferFundsV3Response;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferRequestV3;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            TransferFundsV3Request req = new TransferFundsV3Request(                new TransferRequestV3(246577L, "USD", "e5ae6e0a-c184-4c2b-9c24-7c88373a40e1");, "942f32e5-5055-4756-b5d5-6d0bd0af2dfe");            

            TransferFundsV3Response res = sdk.sourceAccounts.transferFundsV3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
