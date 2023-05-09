# payees

## Overview

A payee is a person you wish to transfer money to. In this section you will find API opertions for working with Payees.


### Available Operations

* [~~deletePayeeByIdV3~~](#deletepayeebyidv3) - Delete Payee by Id :warning: **Deprecated**
* [deletePayeeByIdV4](#deletepayeebyidv4) - Delete Payee by Id
* [~~getPayeeByIdV3~~](#getpayeebyidv3) - Get Payee by Id :warning: **Deprecated**
* [getPayeeByIdV4](#getpayeebyidv4) - Get Payee by Id
* [~~listPayeeChangesV3~~](#listpayeechangesv3) - List Payee Changes :warning: **Deprecated**
* [listPayeeChangesV4](#listpayeechangesv4) - List Payee Changes
* [~~listPayeesV3~~](#listpayeesv3) - List Payees :warning: **Deprecated**
* [listPayeesV4](#listpayeesv4) - List Payees
* [~~payeeDetailsUpdateV3~~](#payeedetailsupdatev3) - Update Payee Details :warning: **Deprecated**
* [payeeDetailsUpdateV4](#payeedetailsupdatev4) - Update Payee Details
* [~~postV3PayeesPayeeIdRemoteIdUpdate~~](#postv3payeespayeeidremoteidupdate) - Update Payee Remote Id :warning: **Deprecated**
* [postV4PayeesPayeeIdRemoteIdUpdate](#postv4payeespayeeidremoteidupdate) - Update Payee Remote Id

## ~~deletePayeeByIdV3~~

<p>Use v4 instead</p>
<p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p>
<p>* Payee ID is not found</p>
<p>* If Payee has not been on-boarded</p>
<p>* If Payee is in grace period</p>
<p>* If Payee has existing payments</p>


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePayeeByIdV3Request;
import org.openapis.openapi.models.operations.DeletePayeeByIdV3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeletePayeeByIdV3Request req = new DeletePayeeByIdV3Request("2aa5d7e0-2ecb-403f-8494-1865ed0454e9");            

            DeletePayeeByIdV3Response res = sdk.payees.deletePayeeByIdV3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePayeeByIdV4

<p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p>
<p>* Payee ID is not found</p>
<p>* If Payee has not been on-boarded</p>
<p>* If Payee is in grace period</p>
<p>* If Payee has existing payments</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePayeeByIdV4Request;
import org.openapis.openapi.models.operations.DeletePayeeByIdV4Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeletePayeeByIdV4Request req = new DeletePayeeByIdV4Request("2aa5d7e0-2ecb-403f-8494-1865ed0454e9");            

            DeletePayeeByIdV4Response res = sdk.payees.deletePayeeByIdV4(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getPayeeByIdV3~~

<p>Use v4 instead</p>
<p>Get Payee by Id</p>


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayeeByIdV3Request;
import org.openapis.openapi.models.operations.GetPayeeByIdV3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetPayeeByIdV3Request req = new GetPayeeByIdV3Request("2aa5d7e0-2ecb-403f-8494-1865ed0454e9") {{
                sensitive = false;
            }};            

            GetPayeeByIdV3Response res = sdk.payees.getPayeeByIdV3(req);

            if (res.payeeDetailResponseV3 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayeeByIdV4

Get Payee by Id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayeeByIdV4Request;
import org.openapis.openapi.models.operations.GetPayeeByIdV4Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetPayeeByIdV4Request req = new GetPayeeByIdV4Request("2aa5d7e0-2ecb-403f-8494-1865ed0454e9") {{
                sensitive = false;
            }};            

            GetPayeeByIdV4Response res = sdk.payees.getPayeeByIdV4(req);

            if (res.payeeDetailResponseV4 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~listPayeeChangesV3~~

<p>Use v4 instead</p>
<p>Get a paginated response listing payee changes.</p>


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPayeeChangesV3Request;
import org.openapis.openapi.models.operations.ListPayeeChangesV3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ListPayeeChangesV3Request req = new ListPayeeChangesV3Request("53f73ef7-fbc7-4abd-b4dd-39c0f5d2cff7", OffsetDateTime.parse("2021-07-05T08:33:16.995Z")) {{
                page = 1;
                pageSize = 100;
            }};            

            ListPayeeChangesV3Response res = sdk.payees.listPayeeChangesV3(req);

            if (res.payeeDeltaResponseV3 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPayeeChangesV4

Get a paginated response listing payee changes (updated since a particular time) to a limited set of fields:
- dbaName
- displayName
- email
- onboardedStatus
- payeeCountry
- payeeId
- remoteId


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPayeeChangesV4Request;
import org.openapis.openapi.models.operations.ListPayeeChangesV4Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ListPayeeChangesV4Request req = new ListPayeeChangesV4Request("a45626d4-3681-43f1-ad9f-5fce6c556146", OffsetDateTime.parse("2022-04-21T16:53:11.568Z")) {{
                page = 1;
                pageSize = 100;
            }};            

            ListPayeeChangesV4Response res = sdk.payees.listPayeeChangesV4(req);

            if (res.payeeDeltaResponseV4 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~listPayeesV3~~

<p>Use v4 instead</p>
Get a paginated response listing the payees for a payor.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPayeesV3Request;
import org.openapis.openapi.models.operations.ListPayeesV3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ListPayeesV3Request req = new ListPayeesV3Request("250fb008-c42e-4141-aac3-66c8dd6b1442") {{
                disabled = false;
                displayName = "Bob Smith";
                email = "bob@example.com";
                onboardedStatus = "provident";
                page = 1;
                pageSize = 25;
                payeeCountry = "US";
                payeeType = "ipsa";
                remoteId = "remoteId123";
                sort = "displayName:asc";
                watchlistStatus = "molestiae";
            }};            

            ListPayeesV3Response res = sdk.payees.listPayeesV3(req);

            if (res.pagedPayeeResponseV3 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPayeesV4

Get a paginated response listing the payees for a payor.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPayeesV4Request;
import org.openapis.openapi.models.operations.ListPayeesV4Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ListPayeesV4Request req = new ListPayeesV4Request("74778a7b-d466-4d28-810a-b3cdca425190") {{
                disabled = false;
                displayName = "Bob Smith";
                email = "bob@example.com";
                ofacStatus = "tempora";
                onboardedStatus = "debitis";
                page = 1;
                pageSize = 25;
                payeeCountry = "US";
                payeeType = "ipsam";
                remoteId = "remoteId123";
                sort = "displayName:asc";
                watchlistStatus = "aspernatur";
            }};            

            ListPayeesV4Response res = sdk.payees.listPayeesV4(req);

            if (res.pagedPayeeResponseV4 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~payeeDetailsUpdateV3~~

<p>Use v4 instead</p>
<p>Update payee details for the given Payee Id.<p>


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PayeeDetailsUpdateV3Request;
import org.openapis.openapi.models.operations.PayeeDetailsUpdateV3Response;
import org.openapis.openapi.models.shared.ChallengeV3;
import org.openapis.openapi.models.shared.CompanyV3;
import org.openapis.openapi.models.shared.IndividualV3Input;
import org.openapis.openapi.models.shared.IndividualV3Name;
import org.openapis.openapi.models.shared.PayeeAddressV3;
import org.openapis.openapi.models.shared.PayeeTypeEnumEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdatePayeeDetailsRequestV3Input;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PayeeDetailsUpdateV3Request req = new PayeeDetailsUpdateV3Request(                new UpdatePayeeDetailsRequestV3Input() {{
                                address = new PayeeAddressV3("Key West", "US", "500 Duval St") {{
                                    countyOrProvince = "FL";
                                    line2 = "quo";
                                    line3 = "esse";
                                    line4 = "recusandae";
                                    zipOrPostcode = "33945";
                                }};;
                                challenge = new ChallengeV3("challenge description", "challenge test");;
                                company = new CompanyV3("ABC Group Plc") {{
                                    operatingName = "ABC Co";
                                    taxId = "123123123";
                                }};;
                                email = "bob@example.com";
                                individual = new IndividualV3Input(                new IndividualV3Name("Bob", "Smith") {{
                                                    otherNames = "A";
                                                    title = "Mr";
                                                }};);;
                                language = "en-US";
                                payeeType = PayeeTypeEnumEnum.INDIVIDUAL;
                            }};, "2aa5d7e0-2ecb-403f-8494-1865ed0454e9");            

            PayeeDetailsUpdateV3Response res = sdk.payees.payeeDetailsUpdateV3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## payeeDetailsUpdateV4

<p>Update payee details for the given Payee Id.</p>
<p>Payors may only update the payee details if the payee has not yet onboarded</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PayeeDetailsUpdateV4Request;
import org.openapis.openapi.models.operations.PayeeDetailsUpdateV4Response;
import org.openapis.openapi.models.shared.ChallengeV4;
import org.openapis.openapi.models.shared.CompanyV4;
import org.openapis.openapi.models.shared.IndividualV3Name;
import org.openapis.openapi.models.shared.IndividualV4Input;
import org.openapis.openapi.models.shared.PayeeAddressV4;
import org.openapis.openapi.models.shared.PayeeTypeEnumEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdatePayeeDetailsRequestV4Input;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PayeeDetailsUpdateV4Request req = new PayeeDetailsUpdateV4Request(                new UpdatePayeeDetailsRequestV4Input() {{
                                address = new PayeeAddressV4("Key West", "US", "500 Duval St") {{
                                    countyOrProvince = "FL";
                                    line2 = "quod";
                                    line3 = "dignissimos";
                                    line4 = "inventore";
                                    zipOrPostcode = "33945";
                                }};;
                                challenge = new ChallengeV4("challenge description", "11984567");;
                                company = new CompanyV4("ABC Group Plc") {{
                                    operatingName = "ABC Co";
                                    taxId = "123123123";
                                }};;
                                contactSmsNumber = "11235555555";
                                email = "bob@example.com";
                                individual = new IndividualV4Input(                new IndividualV3Name("Bob", "Smith") {{
                                                    otherNames = "A";
                                                    title = "Mr";
                                                }};);;
                                language = "en-US";
                                payeeType = PayeeTypeEnumEnum.INDIVIDUAL;
                            }};, "2aa5d7e0-2ecb-403f-8494-1865ed0454e9");            

            PayeeDetailsUpdateV4Response res = sdk.payees.payeeDetailsUpdateV4(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~postV3PayeesPayeeIdRemoteIdUpdate~~

<p>Use v4 instead</p>
<p>Update the remote Id for the given Payee Id.</p>


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV3PayeesPayeeIdRemoteIdUpdateRequest;
import org.openapis.openapi.models.operations.PostV3PayeesPayeeIdRemoteIdUpdateResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateRemoteIdRequestV3;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostV3PayeesPayeeIdRemoteIdUpdateRequest req = new PostV3PayeesPayeeIdRemoteIdUpdateRequest(                new UpdateRemoteIdRequestV3("9ac75325-5dcd-42d5-b992-175d7e0a035e", "remoteId123");, "2aa5d7e0-2ecb-403f-8494-1865ed0454e9");            

            PostV3PayeesPayeeIdRemoteIdUpdateResponse res = sdk.payees.postV3PayeesPayeeIdRemoteIdUpdate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV4PayeesPayeeIdRemoteIdUpdate

<p>Update the remote Id for the given Payee Id.</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV4PayeesPayeeIdRemoteIdUpdateRequest;
import org.openapis.openapi.models.operations.PostV4PayeesPayeeIdRemoteIdUpdateResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateRemoteIdRequestV4;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostV4PayeesPayeeIdRemoteIdUpdateRequest req = new PostV4PayeesPayeeIdRemoteIdUpdateRequest(                new UpdateRemoteIdRequestV4("9ac75325-5dcd-42d5-b992-175d7e0a035e", "remoteId123");, "2aa5d7e0-2ecb-403f-8494-1865ed0454e9");            

            PostV4PayeesPayeeIdRemoteIdUpdateResponse res = sdk.payees.postV4PayeesPayeeIdRemoteIdUpdate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
