# payeeInvitation

## Overview

Payee invitation is a process of inviting individual payees to the Velo platform. In this sction you will find APIs for working with Payee Invitations.

### Available Operations

* [~~createPayeeV3Json~~](#createpayeev3json) - Initiate Payee Creation :warning: **Deprecated**
* [~~createPayeeV3Multipart~~](#createpayeev3multipart) - Initiate Payee Creation :warning: **Deprecated**
* [~~getPayeesInvitationStatusV3~~](#getpayeesinvitationstatusv3) - Get Payee Invitation Status :warning: **Deprecated**
* [getPayeesInvitationStatusV4](#getpayeesinvitationstatusv4) - Get Payee Invitation Status
* [~~queryBatchStatusV3~~](#querybatchstatusv3) - Query Batch Status :warning: **Deprecated**
* [queryBatchStatusV4](#querybatchstatusv4) - Query Batch Status
* [~~resendPayeeInviteV3~~](#resendpayeeinvitev3) - Resend Payee Invite :warning: **Deprecated**
* [resendPayeeInviteV4](#resendpayeeinvitev4) - Resend Payee Invite
* [v4CreatePayeeJson](#v4createpayeejson) - Initiate Payee Creation
* [v4CreatePayeeMultipart](#v4createpayeemultipart) - Initiate Payee Creation

## ~~createPayeeV3Json~~

<p>Use v4 instead</p>
Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query
for status (201 - Created, 400 - invalid request body. In addition to standard semantic validations, a
400 will also result if there is a duplicate remote id within the batch / if there is a duplicate email
within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and
that provided for another payee within the same batch). The validation at this stage is intra-batch only.
Validation against payees who have already been invited occurs subsequently during processing of the batch.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePayeeV3JsonResponse;
import org.openapis.openapi.models.shared.ChallengeV3;
import org.openapis.openapi.models.shared.CompanyV3;
import org.openapis.openapi.models.shared.CreateIndividualV3;
import org.openapis.openapi.models.shared.CreateIndividualV3Name;
import org.openapis.openapi.models.shared.CreatePayeeAddressV3;
import org.openapis.openapi.models.shared.CreatePayeeV3Input;
import org.openapis.openapi.models.shared.CreatePayeesRequestV3Input;
import org.openapis.openapi.models.shared.CreatePaymentChannelV3;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreatePayeesRequestV3Input req = new CreatePayeesRequestV3Input(                new org.openapis.openapi.models.shared.CreatePayeeV3Input[]{{
                                add(new CreatePayeeV3Input(                new CreatePayeeAddressV3("Key West", "US", "500 Duval St") {{
                                                    countyOrProvince = "FL";
                                                    line2 = "eaque";
                                                    line3 = "pariatur";
                                                    line4 = "nemo";
                                                    zipOrPostcode = "33945";
                                                }};, "bob@example.com", "Remote ID", "voluptatibus") {{
                                    address = new CreatePayeeAddressV3("Key West", "US", "500 Duval St") {{
                                        city = "Key West";
                                        country = "US";
                                        countyOrProvince = "FL";
                                        line1 = "500 Duval St";
                                        line2 = "ipsam";
                                        line3 = "voluptate";
                                        line4 = "autem";
                                        zipOrPostcode = "33945";
                                    }};
                                    challenge = new ChallengeV3("challenge description", "challenge test") {{
                                        description = "challenge description";
                                        value = "challenge test";
                                    }};
                                    company = new CompanyV3("ABC Group Plc") {{
                                        name = "ABC Group Plc";
                                        operatingName = "ABC Co";
                                        taxId = "123123123";
                                    }};
                                    email = "bob@example.com";
                                    individual = new CreateIndividualV3(LocalDate.parse("1970-05-20"),                 new CreateIndividualV3Name("Bob", "Smith") {{
                                                        otherNames = "H";
                                                        title = "Mr";
                                                    }};) {{
                                        dateOfBirth = LocalDate.parse("1970-05-20");
                                        name = new CreateIndividualV3Name("Bob", "Smith") {{
                                            firstName = "Bob";
                                            lastName = "Smith";
                                            otherNames = "H";
                                            title = "Mr";
                                        }};
                                        nationalIdentification = "SA211123K";
                                    }};
                                    language = "en-US";
                                    paymentChannel = new CreatePaymentChannelV3("My account", "US", "USD") {{
                                        accountName = "My account";
                                        accountNumber = "XXXXXX5678";
                                        countryCode = "US";
                                        currency = "USD";
                                        iban = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234";
                                        paymentChannelName = "My Payment Channel";
                                        routingNumber = "XXXXX6789";
                                    }};
                                    remoteId = "Remote ID";
                                    type = "nam";
                                }}),
                                add(new CreatePayeeV3Input(                new CreatePayeeAddressV3("Key West", "US", "500 Duval St") {{
                                                    countyOrProvince = "FL";
                                                    line2 = "cumque";
                                                    line3 = "corporis";
                                                    line4 = "hic";
                                                    zipOrPostcode = "33945";
                                                }};, "bob@example.com", "Remote ID", "libero") {{
                                    address = new CreatePayeeAddressV3("Key West", "US", "500 Duval St") {{
                                        city = "Key West";
                                        country = "US";
                                        countyOrProvince = "FL";
                                        line1 = "500 Duval St";
                                        line2 = "perferendis";
                                        line3 = "fugiat";
                                        line4 = "amet";
                                        zipOrPostcode = "33945";
                                    }};
                                    challenge = new ChallengeV3("challenge description", "challenge test") {{
                                        description = "challenge description";
                                        value = "challenge test";
                                    }};
                                    company = new CompanyV3("ABC Group Plc") {{
                                        name = "ABC Group Plc";
                                        operatingName = "ABC Co";
                                        taxId = "123123123";
                                    }};
                                    email = "bob@example.com";
                                    individual = new CreateIndividualV3(LocalDate.parse("1970-05-20"),                 new CreateIndividualV3Name("Bob", "Smith") {{
                                                        otherNames = "H";
                                                        title = "Mr";
                                                    }};) {{
                                        dateOfBirth = LocalDate.parse("1970-05-20");
                                        name = new CreateIndividualV3Name("Bob", "Smith") {{
                                            firstName = "Bob";
                                            lastName = "Smith";
                                            otherNames = "H";
                                            title = "Mr";
                                        }};
                                        nationalIdentification = "SA211123K";
                                    }};
                                    language = "en-US";
                                    paymentChannel = new CreatePaymentChannelV3("My account", "US", "USD") {{
                                        accountName = "My account";
                                        accountNumber = "XXXXXX5678";
                                        countryCode = "US";
                                        currency = "USD";
                                        iban = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234";
                                        paymentChannelName = "My Payment Channel";
                                        routingNumber = "XXXXX6789";
                                    }};
                                    remoteId = "Remote ID";
                                    type = "aut";
                                }}),
                                add(new CreatePayeeV3Input(                new CreatePayeeAddressV3("Key West", "US", "500 Duval St") {{
                                                    countyOrProvince = "FL";
                                                    line2 = "dignissimos";
                                                    line3 = "eaque";
                                                    line4 = "quis";
                                                    zipOrPostcode = "33945";
                                                }};, "bob@example.com", "Remote ID", "nesciunt") {{
                                    address = new CreatePayeeAddressV3("Key West", "US", "500 Duval St") {{
                                        city = "Key West";
                                        country = "US";
                                        countyOrProvince = "FL";
                                        line1 = "500 Duval St";
                                        line2 = "nobis";
                                        line3 = "dolores";
                                        line4 = "quis";
                                        zipOrPostcode = "33945";
                                    }};
                                    challenge = new ChallengeV3("challenge description", "challenge test") {{
                                        description = "challenge description";
                                        value = "challenge test";
                                    }};
                                    company = new CompanyV3("ABC Group Plc") {{
                                        name = "ABC Group Plc";
                                        operatingName = "ABC Co";
                                        taxId = "123123123";
                                    }};
                                    email = "bob@example.com";
                                    individual = new CreateIndividualV3(LocalDate.parse("1970-05-20"),                 new CreateIndividualV3Name("Bob", "Smith") {{
                                                        otherNames = "H";
                                                        title = "Mr";
                                                    }};) {{
                                        dateOfBirth = LocalDate.parse("1970-05-20");
                                        name = new CreateIndividualV3Name("Bob", "Smith") {{
                                            firstName = "Bob";
                                            lastName = "Smith";
                                            otherNames = "H";
                                            title = "Mr";
                                        }};
                                        nationalIdentification = "SA211123K";
                                    }};
                                    language = "en-US";
                                    paymentChannel = new CreatePaymentChannelV3("My account", "US", "USD") {{
                                        accountName = "My account";
                                        accountNumber = "XXXXXX5678";
                                        countryCode = "US";
                                        currency = "USD";
                                        iban = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234";
                                        paymentChannelName = "My Payment Channel";
                                        routingNumber = "XXXXX6789";
                                    }};
                                    remoteId = "Remote ID";
                                    type = "totam";
                                }}),
                            }}, "9ac75325-5dcd-42d5-b992-175d7e0a035e");            

            CreatePayeeV3JsonResponse res = sdk.payeeInvitation.createPayeeV3Json(req);

            if (res.createPayeesCSVResponseV3 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~createPayeeV3Multipart~~

<p>Use v4 instead</p>
Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query
for status (201 - Created, 400 - invalid request body. In addition to standard semantic validations, a
400 will also result if there is a duplicate remote id within the batch / if there is a duplicate email
within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and
that provided for another payee within the same batch). The validation at this stage is intra-batch only.
Validation against payees who have already been invited occurs subsequently during processing of the batch.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePayeeV3MultipartFormData;
import org.openapis.openapi.models.operations.CreatePayeeV3MultipartResponse;
import org.openapis.openapi.models.shared.CreatePayeesCSVRequestV3;
import org.openapis.openapi.models.shared.PayeeTypeEnumEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreatePayeeV3MultipartFormData req = new CreatePayeeV3MultipartFormData() {{
                file = new org.openapis.openapi.models.shared.CreatePayeesCSVRequestV3[]{{
                    add(new CreatePayeesCSVRequestV3("Key West", "US", "500 Duval St", "33945", "bob@example.com", "remoteId123", PayeeTypeEnumEnum.INDIVIDUAL) {{
                        addressCity = "Key West";
                        addressCountry = "US";
                        addressCountyOrProvince = "FL";
                        addressLine1 = "500 Duval St";
                        addressLine2 = "dolores";
                        addressLine3 = "minus";
                        addressLine4 = "quam";
                        addressZipOrPostcode = "33945";
                        challengeDescription = "challenge description";
                        challengeValue = "challenge value";
                        companyEIN = "123456789";
                        companyName = "ABC Ltd";
                        companyOperatingName = "ABC";
                        email = "bob@example.com";
                        individualDateOfBirth = LocalDate.parse("1985-01-01");
                        individualFirstName = "dolor";
                        individualLastName = "Smith";
                        individualNationalIdentification = "AB123456C";
                        individualOtherNames = "Bob";
                        individualTitle = "Mr";
                        payeeLanguage = "en-US";
                        paymentChannelAccountName = "My Account";
                        paymentChannelAccountNumber = "XXXXXX5678";
                        paymentChannelCountryCode = "US";
                        paymentChannelCurrency = "USD";
                        paymentChannelIban = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234";
                        paymentChannelRoutingNumber = "XXXXX6789";
                        remoteId = "remoteId123";
                        type = PayeeTypeEnumEnum.COMPANY;
                    }}),
                }};
                payorId = "fe9b90c2-8909-4b3f-a49a-8d9cbf486333";
            }};            

            CreatePayeeV3MultipartResponse res = sdk.payeeInvitation.createPayeeV3Multipart(req);

            if (res.createPayeesCSVResponseV3 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getPayeesInvitationStatusV3~~

<p>Use v4 instead</p>
<p>Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.</p>


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayeesInvitationStatusV3Request;
import org.openapis.openapi.models.operations.GetPayeesInvitationStatusV3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetPayeesInvitationStatusV3Request req = new GetPayeesInvitationStatusV3Request("9ac75325-5dcd-42d5-b992-175d7e0a035e") {{
                invitationStatus = "ipsum";
                page = 1;
                pageSize = 25;
                payeeId = "2aa5d7e0-2ecb-403f-8494-1865ed0454e9";
            }};            

            GetPayeesInvitationStatusV3Response res = sdk.payeeInvitation.getPayeesInvitationStatusV3(req);

            if (res.pagedPayeeInvitationStatusResponseV3 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayeesInvitationStatusV4

Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayeesInvitationStatusV4Request;
import org.openapis.openapi.models.operations.GetPayeesInvitationStatusV4Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetPayeesInvitationStatusV4Request req = new GetPayeesInvitationStatusV4Request("9ac75325-5dcd-42d5-b992-175d7e0a035e") {{
                invitationStatus = "excepturi";
                page = 1;
                pageSize = 25;
                payeeId = "2aa5d7e0-2ecb-403f-8494-1865ed0454e9";
            }};            

            GetPayeesInvitationStatusV4Response res = sdk.payeeInvitation.getPayeesInvitationStatusV4(req);

            if (res.pagedPayeeInvitationStatusResponseV4 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~queryBatchStatusV3~~

<p>Use v4 instead</p>
Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ).


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryBatchStatusV3Request;
import org.openapis.openapi.models.operations.QueryBatchStatusV3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            QueryBatchStatusV3Request req = new QueryBatchStatusV3Request("77f3a410-0674-4ebf-a928-0d1ba77a89eb");            

            QueryBatchStatusV3Response res = sdk.payeeInvitation.queryBatchStatusV3(req);

            if (res.queryBatchResponseV3 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryBatchStatusV4

Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryBatchStatusV4Request;
import org.openapis.openapi.models.operations.QueryBatchStatusV4Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            QueryBatchStatusV4Request req = new QueryBatchStatusV4Request("737ae420-3ce5-4e6a-95d8-a0d446ce2af7");            

            QueryBatchStatusV4Response res = sdk.payeeInvitation.queryBatchStatusV4(req);

            if (res.queryBatchResponseV4 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~resendPayeeInviteV3~~

<p>Use v4 instead</p>
<p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p>
<p>Any previous invites to the payee by this Payor will be invalidated</p>


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResendPayeeInviteV3Request;
import org.openapis.openapi.models.operations.ResendPayeeInviteV3Response;
import org.openapis.openapi.models.shared.InvitePayeeRequestV3;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ResendPayeeInviteV3Request req = new ResendPayeeInviteV3Request(                new InvitePayeeRequestV3("9ac75325-5dcd-42d5-b992-175d7e0a035e");, "2aa5d7e0-2ecb-403f-8494-1865ed0454e9");            

            ResendPayeeInviteV3Response res = sdk.payeeInvitation.resendPayeeInviteV3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resendPayeeInviteV4

<p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p>
<p>Any previous invites to the payee by this Payor will be invalidated</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResendPayeeInviteV4Request;
import org.openapis.openapi.models.operations.ResendPayeeInviteV4Response;
import org.openapis.openapi.models.shared.InvitePayeeRequestV4;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ResendPayeeInviteV4Request req = new ResendPayeeInviteV4Request(                new InvitePayeeRequestV4("9ac75325-5dcd-42d5-b992-175d7e0a035e");, "2aa5d7e0-2ecb-403f-8494-1865ed0454e9");            

            ResendPayeeInviteV4Response res = sdk.payeeInvitation.resendPayeeInviteV4(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## v4CreatePayeeJson

<p>Initiate the process of creating 1 to 2000 payees in a batch</p>
<p>Use the batchId in the response to query for status.</p>
<p>In addition to standard semantic validations, a 400 will also result if: </p>
<ul>
<li>there is a duplicate remote id within the batch</li>
<li>there is a duplicate email within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and
that provided for another payee within the same batch).</li>
</ul>
<p>The validation at this stage is intra-batch only.</p>
<p>Validation against payees who have already been invited occurs subsequently during processing of the batch.</p>


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.V4CreatePayeeJsonResponse;
import org.openapis.openapi.models.shared.ChallengeV4;
import org.openapis.openapi.models.shared.CompanyV4;
import org.openapis.openapi.models.shared.CreateIndividualV3Name;
import org.openapis.openapi.models.shared.CreateIndividualV4;
import org.openapis.openapi.models.shared.CreatePayeeAddressV4;
import org.openapis.openapi.models.shared.CreatePayeeV4;
import org.openapis.openapi.models.shared.CreatePayeesRequestV4;
import org.openapis.openapi.models.shared.CreatePaymentChannelV4;
import org.openapis.openapi.models.shared.PayeeTypeEnumEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreatePayeesRequestV4 req = new CreatePayeesRequestV4(                new org.openapis.openapi.models.shared.CreatePayeeV4[]{{
                                add(new CreatePayeeV4(                new CreatePayeeAddressV4("Key West", "US", "500 Duval St") {{
                                                    countyOrProvince = "FL";
                                                    line2 = "numquam";
                                                    line3 = "enim";
                                                    line4 = "dolorem";
                                                    zipOrPostcode = "33945";
                                                }};, "bob@example.com", "Remote ID", PayeeTypeEnumEnum.COMPANY) {{
                                    address = new CreatePayeeAddressV4("Key West", "US", "500 Duval St") {{
                                        city = "Key West";
                                        country = "US";
                                        countyOrProvince = "FL";
                                        line1 = "500 Duval St";
                                        line2 = "tenetur";
                                        line3 = "amet";
                                        line4 = "tempore";
                                        zipOrPostcode = "33945";
                                    }};
                                    challenge = new ChallengeV4("challenge description", "11984567") {{
                                        description = "challenge description";
                                        value = "11984567";
                                    }};
                                    company = new CompanyV4("ABC Group Plc") {{
                                        name = "ABC Group Plc";
                                        operatingName = "ABC Co";
                                        taxId = "123123123";
                                    }};
                                    email = "bob@example.com";
                                    individual = new CreateIndividualV4(LocalDate.parse("1970-05-20"),                 new CreateIndividualV3Name("Bob", "Smith") {{
                                                        otherNames = "H";
                                                        title = "Mr";
                                                    }};) {{
                                        dateOfBirth = LocalDate.parse("1970-05-20");
                                        name = new CreateIndividualV3Name("Bob", "Smith") {{
                                            firstName = "Bob";
                                            lastName = "Smith";
                                            otherNames = "H";
                                            title = "Mr";
                                        }};
                                        nationalIdentification = "SA211123K";
                                    }};
                                    language = "en-US";
                                    paymentChannel = new CreatePaymentChannelV4("My account", "US", "USD") {{
                                        accountName = "My account";
                                        accountNumber = "XXXXXX5678";
                                        countryCode = "US";
                                        currency = "USD";
                                        iban = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234";
                                        paymentChannelName = "My Payment Channel";
                                        routingNumber = "XXXXX6789";
                                    }};
                                    remoteId = "Remote ID";
                                    type = PayeeTypeEnumEnum.COMPANY;
                                }}),
                                add(new CreatePayeeV4(                new CreatePayeeAddressV4("Key West", "US", "500 Duval St") {{
                                                    countyOrProvince = "FL";
                                                    line2 = "neque";
                                                    line3 = "sed";
                                                    line4 = "vel";
                                                    zipOrPostcode = "33945";
                                                }};, "bob@example.com", "Remote ID", PayeeTypeEnumEnum.COMPANY) {{
                                    address = new CreatePayeeAddressV4("Key West", "US", "500 Duval St") {{
                                        city = "Key West";
                                        country = "US";
                                        countyOrProvince = "FL";
                                        line1 = "500 Duval St";
                                        line2 = "totam";
                                        line3 = "nihil";
                                        line4 = "sit";
                                        zipOrPostcode = "33945";
                                    }};
                                    challenge = new ChallengeV4("challenge description", "11984567") {{
                                        description = "challenge description";
                                        value = "11984567";
                                    }};
                                    company = new CompanyV4("ABC Group Plc") {{
                                        name = "ABC Group Plc";
                                        operatingName = "ABC Co";
                                        taxId = "123123123";
                                    }};
                                    email = "bob@example.com";
                                    individual = new CreateIndividualV4(LocalDate.parse("1970-05-20"),                 new CreateIndividualV3Name("Bob", "Smith") {{
                                                        otherNames = "H";
                                                        title = "Mr";
                                                    }};) {{
                                        dateOfBirth = LocalDate.parse("1970-05-20");
                                        name = new CreateIndividualV3Name("Bob", "Smith") {{
                                            firstName = "Bob";
                                            lastName = "Smith";
                                            otherNames = "H";
                                            title = "Mr";
                                        }};
                                        nationalIdentification = "SA211123K";
                                    }};
                                    language = "en-US";
                                    paymentChannel = new CreatePaymentChannelV4("My account", "US", "USD") {{
                                        accountName = "My account";
                                        accountNumber = "XXXXXX5678";
                                        countryCode = "US";
                                        currency = "USD";
                                        iban = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234";
                                        paymentChannelName = "My Payment Channel";
                                        routingNumber = "XXXXX6789";
                                    }};
                                    remoteId = "Remote ID";
                                    type = PayeeTypeEnumEnum.COMPANY;
                                }}),
                                add(new CreatePayeeV4(                new CreatePayeeAddressV4("Key West", "US", "500 Duval St") {{
                                                    countyOrProvince = "FL";
                                                    line2 = "incidunt";
                                                    line3 = "qui";
                                                    line4 = "cupiditate";
                                                    zipOrPostcode = "33945";
                                                }};, "bob@example.com", "Remote ID", PayeeTypeEnumEnum.COMPANY) {{
                                    address = new CreatePayeeAddressV4("Key West", "US", "500 Duval St") {{
                                        city = "Key West";
                                        country = "US";
                                        countyOrProvince = "FL";
                                        line1 = "500 Duval St";
                                        line2 = "voluptas";
                                        line3 = "deserunt";
                                        line4 = "quam";
                                        zipOrPostcode = "33945";
                                    }};
                                    challenge = new ChallengeV4("challenge description", "11984567") {{
                                        description = "challenge description";
                                        value = "11984567";
                                    }};
                                    company = new CompanyV4("ABC Group Plc") {{
                                        name = "ABC Group Plc";
                                        operatingName = "ABC Co";
                                        taxId = "123123123";
                                    }};
                                    email = "bob@example.com";
                                    individual = new CreateIndividualV4(LocalDate.parse("1970-05-20"),                 new CreateIndividualV3Name("Bob", "Smith") {{
                                                        otherNames = "H";
                                                        title = "Mr";
                                                    }};) {{
                                        dateOfBirth = LocalDate.parse("1970-05-20");
                                        name = new CreateIndividualV3Name("Bob", "Smith") {{
                                            firstName = "Bob";
                                            lastName = "Smith";
                                            otherNames = "H";
                                            title = "Mr";
                                        }};
                                        nationalIdentification = "SA211123K";
                                    }};
                                    language = "en-US";
                                    paymentChannel = new CreatePaymentChannelV4("My account", "US", "USD") {{
                                        accountName = "My account";
                                        accountNumber = "XXXXXX5678";
                                        countryCode = "US";
                                        currency = "USD";
                                        iban = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234";
                                        paymentChannelName = "My Payment Channel";
                                        routingNumber = "XXXXX6789";
                                    }};
                                    remoteId = "Remote ID";
                                    type = PayeeTypeEnumEnum.INDIVIDUAL;
                                }}),
                                add(new CreatePayeeV4(                new CreatePayeeAddressV4("Key West", "US", "500 Duval St") {{
                                                    countyOrProvince = "FL";
                                                    line2 = "totam";
                                                    line3 = "incidunt";
                                                    line4 = "aspernatur";
                                                    zipOrPostcode = "33945";
                                                }};, "bob@example.com", "Remote ID", PayeeTypeEnumEnum.INDIVIDUAL) {{
                                    address = new CreatePayeeAddressV4("Key West", "US", "500 Duval St") {{
                                        city = "Key West";
                                        country = "US";
                                        countyOrProvince = "FL";
                                        line1 = "500 Duval St";
                                        line2 = "pariatur";
                                        line3 = "soluta";
                                        line4 = "dicta";
                                        zipOrPostcode = "33945";
                                    }};
                                    challenge = new ChallengeV4("challenge description", "11984567") {{
                                        description = "challenge description";
                                        value = "11984567";
                                    }};
                                    company = new CompanyV4("ABC Group Plc") {{
                                        name = "ABC Group Plc";
                                        operatingName = "ABC Co";
                                        taxId = "123123123";
                                    }};
                                    email = "bob@example.com";
                                    individual = new CreateIndividualV4(LocalDate.parse("1970-05-20"),                 new CreateIndividualV3Name("Bob", "Smith") {{
                                                        otherNames = "H";
                                                        title = "Mr";
                                                    }};) {{
                                        dateOfBirth = LocalDate.parse("1970-05-20");
                                        name = new CreateIndividualV3Name("Bob", "Smith") {{
                                            firstName = "Bob";
                                            lastName = "Smith";
                                            otherNames = "H";
                                            title = "Mr";
                                        }};
                                        nationalIdentification = "SA211123K";
                                    }};
                                    language = "en-US";
                                    paymentChannel = new CreatePaymentChannelV4("My account", "US", "USD") {{
                                        accountName = "My account";
                                        accountNumber = "XXXXXX5678";
                                        countryCode = "US";
                                        currency = "USD";
                                        iban = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234";
                                        paymentChannelName = "My Payment Channel";
                                        routingNumber = "XXXXX6789";
                                    }};
                                    remoteId = "Remote ID";
                                    type = PayeeTypeEnumEnum.COMPANY;
                                }}),
                            }}, "9ac75325-5dcd-42d5-b992-175d7e0a035e");            

            V4CreatePayeeJsonResponse res = sdk.payeeInvitation.v4CreatePayeeJson(req);

            if (res.createPayeesCSVResponseV4 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## v4CreatePayeeMultipart

<p>Initiate the process of creating 1 to 2000 payees in a batch</p>
<p>Use the batchId in the response to query for status.</p>
<p>In addition to standard semantic validations, a 400 will also result if: </p>
<ul>
<li>there is a duplicate remote id within the batch</li>
<li>there is a duplicate email within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and
that provided for another payee within the same batch).</li>
</ul>
<p>The validation at this stage is intra-batch only.</p>
<p>Validation against payees who have already been invited occurs subsequently during processing of the batch.</p>


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.V4CreatePayeeMultipartFormData;
import org.openapis.openapi.models.operations.V4CreatePayeeMultipartResponse;
import org.openapis.openapi.models.shared.CreatePayeesCSVRequestV4;
import org.openapis.openapi.models.shared.PayeeTypeEnumEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            V4CreatePayeeMultipartFormData req = new V4CreatePayeeMultipartFormData() {{
                file = new org.openapis.openapi.models.shared.CreatePayeesCSVRequestV4[]{{
                    add(new CreatePayeesCSVRequestV4("Key West", "US", "500 Duval St", "33945", "bob@example.com", "remoteId123", PayeeTypeEnumEnum.INDIVIDUAL) {{
                        addressCity = "Key West";
                        addressCountry = "US";
                        addressCountyOrProvince = "FL";
                        addressLine1 = "500 Duval St";
                        addressLine2 = "aliquid";
                        addressLine3 = "quam";
                        addressLine4 = "molestias";
                        addressZipOrPostcode = "33945";
                        challengeDescription = "challenge description";
                        challengeValue = "challenge value";
                        companyEIN = "123456789";
                        companyName = "ABC Ltd";
                        companyOperatingName = "ABC";
                        email = "bob@example.com";
                        individualDateOfBirth = LocalDate.parse("1985-01-01");
                        individualFirstName = "temporibus";
                        individualLastName = "Smith";
                        individualNationalIdentification = "AB123456C";
                        individualOtherNames = "Bob";
                        individualTitle = "Mr";
                        payeeLanguage = "en-US";
                        paymentChannelAccountName = "My Account";
                        paymentChannelAccountNumber = "XXXXXX5678";
                        paymentChannelCountryCode = "US";
                        paymentChannelCurrency = "USD";
                        paymentChannelIban = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234";
                        paymentChannelRoutingNumber = "XXXXX6789";
                        remoteId = "remoteId123";
                        type = PayeeTypeEnumEnum.INDIVIDUAL;
                    }}),
                    add(new CreatePayeesCSVRequestV4("Key West", "US", "500 Duval St", "33945", "bob@example.com", "remoteId123", PayeeTypeEnumEnum.COMPANY) {{
                        addressCity = "Key West";
                        addressCountry = "US";
                        addressCountyOrProvince = "FL";
                        addressLine1 = "500 Duval St";
                        addressLine2 = "fugit";
                        addressLine3 = "magni";
                        addressLine4 = "odio";
                        addressZipOrPostcode = "33945";
                        challengeDescription = "challenge description";
                        challengeValue = "challenge value";
                        companyEIN = "123456789";
                        companyName = "ABC Ltd";
                        companyOperatingName = "ABC";
                        email = "bob@example.com";
                        individualDateOfBirth = LocalDate.parse("1985-01-01");
                        individualFirstName = "sunt";
                        individualLastName = "Smith";
                        individualNationalIdentification = "AB123456C";
                        individualOtherNames = "Bob";
                        individualTitle = "Mr";
                        payeeLanguage = "en-US";
                        paymentChannelAccountName = "My Account";
                        paymentChannelAccountNumber = "XXXXXX5678";
                        paymentChannelCountryCode = "US";
                        paymentChannelCurrency = "USD";
                        paymentChannelIban = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234";
                        paymentChannelRoutingNumber = "XXXXX6789";
                        remoteId = "remoteId123";
                        type = PayeeTypeEnumEnum.INDIVIDUAL;
                    }}),
                    add(new CreatePayeesCSVRequestV4("Key West", "US", "500 Duval St", "33945", "bob@example.com", "remoteId123", PayeeTypeEnumEnum.INDIVIDUAL) {{
                        addressCity = "Key West";
                        addressCountry = "US";
                        addressCountyOrProvince = "FL";
                        addressLine1 = "500 Duval St";
                        addressLine2 = "hic";
                        addressLine3 = "voluptatem";
                        addressLine4 = "cumque";
                        addressZipOrPostcode = "33945";
                        challengeDescription = "challenge description";
                        challengeValue = "challenge value";
                        companyEIN = "123456789";
                        companyName = "ABC Ltd";
                        companyOperatingName = "ABC";
                        email = "bob@example.com";
                        individualDateOfBirth = LocalDate.parse("1985-01-01");
                        individualFirstName = "soluta";
                        individualLastName = "Smith";
                        individualNationalIdentification = "AB123456C";
                        individualOtherNames = "Bob";
                        individualTitle = "Mr";
                        payeeLanguage = "en-US";
                        paymentChannelAccountName = "My Account";
                        paymentChannelAccountNumber = "XXXXXX5678";
                        paymentChannelCountryCode = "US";
                        paymentChannelCurrency = "USD";
                        paymentChannelIban = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234";
                        paymentChannelRoutingNumber = "XXXXX6789";
                        remoteId = "remoteId123";
                        type = PayeeTypeEnumEnum.COMPANY;
                    }}),
                }};
                payorId = "e31b8b90-f344-43a1-908e-0adcf4b92187";
            }};            

            V4CreatePayeeMultipartResponse res = sdk.payeeInvitation.v4CreatePayeeMultipart(req);

            if (res.createPayeesCSVResponseV4 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
