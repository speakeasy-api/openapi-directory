# PayeeInvitation

## Overview

Payee invitation is a process of inviting individual payees to the Velo platform. In this sction you will find APIs for working with Payee Invitations.

### Available Operations

* [~~CreatePayeeV3JSON~~](#createpayeev3json) - Initiate Payee Creation :warning: **Deprecated**
* [~~CreatePayeeV3Multipart~~](#createpayeev3multipart) - Initiate Payee Creation :warning: **Deprecated**
* [~~GetPayeesInvitationStatusV3~~](#getpayeesinvitationstatusv3) - Get Payee Invitation Status :warning: **Deprecated**
* [GetPayeesInvitationStatusV4](#getpayeesinvitationstatusv4) - Get Payee Invitation Status
* [~~QueryBatchStatusV3~~](#querybatchstatusv3) - Query Batch Status :warning: **Deprecated**
* [QueryBatchStatusV4](#querybatchstatusv4) - Query Batch Status
* [~~ResendPayeeInviteV3~~](#resendpayeeinvitev3) - Resend Payee Invite :warning: **Deprecated**
* [ResendPayeeInviteV4](#resendpayeeinvitev4) - Resend Payee Invite
* [V4CreatePayeeJSON](#v4createpayeejson) - Initiate Payee Creation
* [V4CreatePayeeMultipart](#v4createpayeemultipart) - Initiate Payee Creation

## ~~CreatePayeeV3JSON~~

<p>Use v4 instead</p>
Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query
for status (201 - Created, 400 - invalid request body. In addition to standard semantic validations, a
400 will also result if there is a duplicate remote id within the batch / if there is a duplicate email
within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and
that provided for another payee within the same batch). The validation at this stage is intra-batch only.
Validation against payees who have already been invited occurs subsequently during processing of the batch.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PayeeInvitation.CreatePayeeV3JSON(ctx, shared.CreatePayeesRequestV3Input{
        Payees: []shared.CreatePayeeV3Input{
            shared.CreatePayeeV3Input{
                Address: shared.CreatePayeeAddressV3{
                    City: "Key West",
                    Country: "US",
                    CountyOrProvince: sdk.String("FL"),
                    Line1: "500 Duval St",
                    Line2: sdk.String("praesentium"),
                    Line3: sdk.String("natus"),
                    Line4: sdk.String("magni"),
                    ZipOrPostcode: sdk.String("33945"),
                },
                Challenge: &shared.ChallengeV3{
                    Description: "challenge description",
                    Value: "challenge test",
                },
                Company: &shared.CompanyV3{
                    Name: "ABC Group Plc",
                    OperatingName: sdk.String("ABC Co"),
                    TaxID: sdk.String("123123123"),
                },
                Email: "bob@example.com",
                Individual: &shared.CreateIndividualV3{
                    DateOfBirth: types.MustDateFromString("1970-05-20"),
                    Name: shared.CreateIndividualV3Name{
                        FirstName: "Bob",
                        LastName: "Smith",
                        OtherNames: sdk.String("H"),
                        Title: sdk.String("Mr"),
                    },
                    NationalIdentification: sdk.String("SA211123K"),
                },
                Language: sdk.String("en-US"),
                PaymentChannel: &shared.CreatePaymentChannelV3{
                    AccountName: "My account",
                    AccountNumber: sdk.String("XXXXXX5678"),
                    CountryCode: "US",
                    Currency: "USD",
                    Iban: sdk.String("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234"),
                    PaymentChannelName: sdk.String("My Payment Channel"),
                    RoutingNumber: sdk.String("XXXXX6789"),
                },
                RemoteID: "Remote ID",
                Type: "sunt",
            },
        },
        PayorID: "9ac75325-5dcd-42d5-b992-175d7e0a035e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePayeesCSVResponseV3 != nil {
        // handle response
    }
}
```

## ~~CreatePayeeV3Multipart~~

<p>Use v4 instead</p>
Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query
for status (201 - Created, 400 - invalid request body. In addition to standard semantic validations, a
400 will also result if there is a duplicate remote id within the batch / if there is a duplicate email
within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and
that provided for another payee within the same batch). The validation at this stage is intra-batch only.
Validation against payees who have already been invited occurs subsequently during processing of the batch.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PayeeInvitation.CreatePayeeV3Multipart(ctx, operations.CreatePayeeV3MultipartFormData{
        File: []shared.CreatePayeesCSVRequestV3{
            shared.CreatePayeesCSVRequestV3{
                AddressCity: "Key West",
                AddressCountry: "US",
                AddressCountyOrProvince: sdk.String("FL"),
                AddressLine1: "500 Duval St",
                AddressLine2: sdk.String("illum"),
                AddressLine3: sdk.String("pariatur"),
                AddressLine4: sdk.String("maxime"),
                AddressZipOrPostcode: "33945",
                ChallengeDescription: sdk.String("challenge description"),
                ChallengeValue: sdk.String("challenge value"),
                CompanyEIN: sdk.String("123456789"),
                CompanyName: sdk.String("ABC Ltd"),
                CompanyOperatingName: sdk.String("ABC"),
                Email: "bob@example.com",
                IndividualDateOfBirth: types.MustDateFromString("1985-01-01"),
                IndividualFirstName: sdk.String("ea"),
                IndividualLastName: sdk.String("Smith"),
                IndividualNationalIdentification: sdk.String("AB123456C"),
                IndividualOtherNames: sdk.String("Bob"),
                IndividualTitle: sdk.String("Mr"),
                PayeeLanguage: sdk.String("en-US"),
                PaymentChannelAccountName: sdk.String("My Account"),
                PaymentChannelAccountNumber: sdk.String("XXXXXX5678"),
                PaymentChannelCountryCode: sdk.String("US"),
                PaymentChannelCurrency: sdk.String("USD"),
                PaymentChannelIban: sdk.String("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234"),
                PaymentChannelRoutingNumber: sdk.String("XXXXX6789"),
                RemoteID: "remoteId123",
                Type: shared.PayeeTypeEnumEnumCompany,
            },
            shared.CreatePayeesCSVRequestV3{
                AddressCity: "Key West",
                AddressCountry: "US",
                AddressCountyOrProvince: sdk.String("FL"),
                AddressLine1: "500 Duval St",
                AddressLine2: sdk.String("odit"),
                AddressLine3: sdk.String("ea"),
                AddressLine4: sdk.String("accusantium"),
                AddressZipOrPostcode: "33945",
                ChallengeDescription: sdk.String("challenge description"),
                ChallengeValue: sdk.String("challenge value"),
                CompanyEIN: sdk.String("123456789"),
                CompanyName: sdk.String("ABC Ltd"),
                CompanyOperatingName: sdk.String("ABC"),
                Email: "bob@example.com",
                IndividualDateOfBirth: types.MustDateFromString("1985-01-01"),
                IndividualFirstName: sdk.String("ab"),
                IndividualLastName: sdk.String("Smith"),
                IndividualNationalIdentification: sdk.String("AB123456C"),
                IndividualOtherNames: sdk.String("Bob"),
                IndividualTitle: sdk.String("Mr"),
                PayeeLanguage: sdk.String("en-US"),
                PaymentChannelAccountName: sdk.String("My Account"),
                PaymentChannelAccountNumber: sdk.String("XXXXXX5678"),
                PaymentChannelCountryCode: sdk.String("US"),
                PaymentChannelCurrency: sdk.String("USD"),
                PaymentChannelIban: sdk.String("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234"),
                PaymentChannelRoutingNumber: sdk.String("XXXXX6789"),
                RemoteID: "remoteId123",
                Type: shared.PayeeTypeEnumEnumCompany,
            },
            shared.CreatePayeesCSVRequestV3{
                AddressCity: "Key West",
                AddressCountry: "US",
                AddressCountyOrProvince: sdk.String("FL"),
                AddressLine1: "500 Duval St",
                AddressLine2: sdk.String("quidem"),
                AddressLine3: sdk.String("ipsam"),
                AddressLine4: sdk.String("voluptate"),
                AddressZipOrPostcode: "33945",
                ChallengeDescription: sdk.String("challenge description"),
                ChallengeValue: sdk.String("challenge value"),
                CompanyEIN: sdk.String("123456789"),
                CompanyName: sdk.String("ABC Ltd"),
                CompanyOperatingName: sdk.String("ABC"),
                Email: "bob@example.com",
                IndividualDateOfBirth: types.MustDateFromString("1985-01-01"),
                IndividualFirstName: sdk.String("autem"),
                IndividualLastName: sdk.String("Smith"),
                IndividualNationalIdentification: sdk.String("AB123456C"),
                IndividualOtherNames: sdk.String("Bob"),
                IndividualTitle: sdk.String("Mr"),
                PayeeLanguage: sdk.String("en-US"),
                PaymentChannelAccountName: sdk.String("My Account"),
                PaymentChannelAccountNumber: sdk.String("XXXXXX5678"),
                PaymentChannelCountryCode: sdk.String("US"),
                PaymentChannelCurrency: sdk.String("USD"),
                PaymentChannelIban: sdk.String("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234"),
                PaymentChannelRoutingNumber: sdk.String("XXXXX6789"),
                RemoteID: "remoteId123",
                Type: shared.PayeeTypeEnumEnumCompany,
            },
            shared.CreatePayeesCSVRequestV3{
                AddressCity: "Key West",
                AddressCountry: "US",
                AddressCountyOrProvince: sdk.String("FL"),
                AddressLine1: "500 Duval St",
                AddressLine2: sdk.String("eaque"),
                AddressLine3: sdk.String("pariatur"),
                AddressLine4: sdk.String("nemo"),
                AddressZipOrPostcode: "33945",
                ChallengeDescription: sdk.String("challenge description"),
                ChallengeValue: sdk.String("challenge value"),
                CompanyEIN: sdk.String("123456789"),
                CompanyName: sdk.String("ABC Ltd"),
                CompanyOperatingName: sdk.String("ABC"),
                Email: "bob@example.com",
                IndividualDateOfBirth: types.MustDateFromString("1985-01-01"),
                IndividualFirstName: sdk.String("voluptatibus"),
                IndividualLastName: sdk.String("Smith"),
                IndividualNationalIdentification: sdk.String("AB123456C"),
                IndividualOtherNames: sdk.String("Bob"),
                IndividualTitle: sdk.String("Mr"),
                PayeeLanguage: sdk.String("en-US"),
                PaymentChannelAccountName: sdk.String("My Account"),
                PaymentChannelAccountNumber: sdk.String("XXXXXX5678"),
                PaymentChannelCountryCode: sdk.String("US"),
                PaymentChannelCurrency: sdk.String("USD"),
                PaymentChannelIban: sdk.String("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234"),
                PaymentChannelRoutingNumber: sdk.String("XXXXX6789"),
                RemoteID: "remoteId123",
                Type: shared.PayeeTypeEnumEnumIndividual,
            },
        },
        PayorID: sdk.String("d30c5fbb-2587-4053-a02c-73d5fe9b90c2"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePayeesCSVResponseV3 != nil {
        // handle response
    }
}
```

## ~~GetPayeesInvitationStatusV3~~

<p>Use v4 instead</p>
<p>Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.</p>


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PayeeInvitation.GetPayeesInvitationStatusV3(ctx, operations.GetPayeesInvitationStatusV3Request{
        InvitationStatus: sdk.String("blanditiis"),
        Page: sdk.Int(1),
        PageSize: sdk.Int(25),
        PayeeID: sdk.String("2aa5d7e0-2ecb-403f-8494-1865ed0454e9"),
        PayorID: "9ac75325-5dcd-42d5-b992-175d7e0a035e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedPayeeInvitationStatusResponseV3 != nil {
        // handle response
    }
}
```

## GetPayeesInvitationStatusV4

Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PayeeInvitation.GetPayeesInvitationStatusV4(ctx, operations.GetPayeesInvitationStatusV4Request{
        InvitationStatus: sdk.String("error"),
        Page: sdk.Int(1),
        PageSize: sdk.Int(25),
        PayeeID: sdk.String("2aa5d7e0-2ecb-403f-8494-1865ed0454e9"),
        PayorID: "9ac75325-5dcd-42d5-b992-175d7e0a035e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedPayeeInvitationStatusResponseV4 != nil {
        // handle response
    }
}
```

## ~~QueryBatchStatusV3~~

<p>Use v4 instead</p>
Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ).


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PayeeInvitation.QueryBatchStatusV3(ctx, operations.QueryBatchStatusV3Request{
        BatchID: "09b3fe49-a8d9-4cbf-8863-3323f9b77f3a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryBatchResponseV3 != nil {
        // handle response
    }
}
```

## QueryBatchStatusV4

Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ).


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PayeeInvitation.QueryBatchStatusV4(ctx, operations.QueryBatchStatusV4Request{
        BatchID: "4100674e-bf69-4280-91ba-77a89ebf737a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryBatchResponseV4 != nil {
        // handle response
    }
}
```

## ~~ResendPayeeInviteV3~~

<p>Use v4 instead</p>
<p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p>
<p>Any previous invites to the payee by this Payor will be invalidated</p>


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PayeeInvitation.ResendPayeeInviteV3(ctx, operations.ResendPayeeInviteV3Request{
        InvitePayeeRequestV3: shared.InvitePayeeRequestV3{
            PayorID: "9ac75325-5dcd-42d5-b992-175d7e0a035e",
        },
        PayeeID: "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ResendPayeeInviteV4

<p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p>
<p>Any previous invites to the payee by this Payor will be invalidated</p>


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PayeeInvitation.ResendPayeeInviteV4(ctx, operations.ResendPayeeInviteV4Request{
        InvitePayeeRequestV4: shared.InvitePayeeRequestV4{
            PayorID: "9ac75325-5dcd-42d5-b992-175d7e0a035e",
        },
        PayeeID: "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## V4CreatePayeeJSON

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PayeeInvitation.V4CreatePayeeJSON(ctx, shared.CreatePayeesRequestV4{
        Payees: []shared.CreatePayeeV4{
            shared.CreatePayeeV4{
                Address: shared.CreatePayeeAddressV4{
                    City: "Key West",
                    Country: "US",
                    CountyOrProvince: sdk.String("FL"),
                    Line1: "500 Duval St",
                    Line2: sdk.String("eius"),
                    Line3: sdk.String("aspernatur"),
                    Line4: sdk.String("perferendis"),
                    ZipOrPostcode: sdk.String("33945"),
                },
                Challenge: &shared.ChallengeV4{
                    Description: "challenge description",
                    Value: "11984567",
                },
                Company: &shared.CompanyV4{
                    Name: "ABC Group Plc",
                    OperatingName: sdk.String("ABC Co"),
                    TaxID: sdk.String("123123123"),
                },
                Email: "bob@example.com",
                Individual: &shared.CreateIndividualV4{
                    DateOfBirth: types.MustDateFromString("1970-05-20"),
                    Name: shared.CreateIndividualV3Name{
                        FirstName: "Bob",
                        LastName: "Smith",
                        OtherNames: sdk.String("H"),
                        Title: sdk.String("Mr"),
                    },
                    NationalIdentification: sdk.String("SA211123K"),
                },
                Language: sdk.String("en-US"),
                PaymentChannel: &shared.CreatePaymentChannelV4{
                    AccountName: "My account",
                    AccountNumber: sdk.String("XXXXXX5678"),
                    CountryCode: "US",
                    Currency: "USD",
                    Iban: sdk.String("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234"),
                    PaymentChannelName: sdk.String("My Payment Channel"),
                    RoutingNumber: sdk.String("XXXXX6789"),
                },
                RemoteID: "Remote ID",
                Type: shared.PayeeTypeEnumEnumIndividual,
            },
            shared.CreatePayeeV4{
                Address: shared.CreatePayeeAddressV4{
                    City: "Key West",
                    Country: "US",
                    CountyOrProvince: sdk.String("FL"),
                    Line1: "500 Duval St",
                    Line2: sdk.String("optio"),
                    Line3: sdk.String("accusamus"),
                    Line4: sdk.String("ad"),
                    ZipOrPostcode: sdk.String("33945"),
                },
                Challenge: &shared.ChallengeV4{
                    Description: "challenge description",
                    Value: "11984567",
                },
                Company: &shared.CompanyV4{
                    Name: "ABC Group Plc",
                    OperatingName: sdk.String("ABC Co"),
                    TaxID: sdk.String("123123123"),
                },
                Email: "bob@example.com",
                Individual: &shared.CreateIndividualV4{
                    DateOfBirth: types.MustDateFromString("1970-05-20"),
                    Name: shared.CreateIndividualV3Name{
                        FirstName: "Bob",
                        LastName: "Smith",
                        OtherNames: sdk.String("H"),
                        Title: sdk.String("Mr"),
                    },
                    NationalIdentification: sdk.String("SA211123K"),
                },
                Language: sdk.String("en-US"),
                PaymentChannel: &shared.CreatePaymentChannelV4{
                    AccountName: "My account",
                    AccountNumber: sdk.String("XXXXXX5678"),
                    CountryCode: "US",
                    Currency: "USD",
                    Iban: sdk.String("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234"),
                    PaymentChannelName: sdk.String("My Payment Channel"),
                    RoutingNumber: sdk.String("XXXXX6789"),
                },
                RemoteID: "Remote ID",
                Type: shared.PayeeTypeEnumEnumCompany,
            },
            shared.CreatePayeeV4{
                Address: shared.CreatePayeeAddressV4{
                    City: "Key West",
                    Country: "US",
                    CountyOrProvince: sdk.String("FL"),
                    Line1: "500 Duval St",
                    Line2: sdk.String("suscipit"),
                    Line3: sdk.String("deserunt"),
                    Line4: sdk.String("provident"),
                    ZipOrPostcode: sdk.String("33945"),
                },
                Challenge: &shared.ChallengeV4{
                    Description: "challenge description",
                    Value: "11984567",
                },
                Company: &shared.CompanyV4{
                    Name: "ABC Group Plc",
                    OperatingName: sdk.String("ABC Co"),
                    TaxID: sdk.String("123123123"),
                },
                Email: "bob@example.com",
                Individual: &shared.CreateIndividualV4{
                    DateOfBirth: types.MustDateFromString("1970-05-20"),
                    Name: shared.CreateIndividualV3Name{
                        FirstName: "Bob",
                        LastName: "Smith",
                        OtherNames: sdk.String("H"),
                        Title: sdk.String("Mr"),
                    },
                    NationalIdentification: sdk.String("SA211123K"),
                },
                Language: sdk.String("en-US"),
                PaymentChannel: &shared.CreatePaymentChannelV4{
                    AccountName: "My account",
                    AccountNumber: sdk.String("XXXXXX5678"),
                    CountryCode: "US",
                    Currency: "USD",
                    Iban: sdk.String("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234"),
                    PaymentChannelName: sdk.String("My Payment Channel"),
                    RoutingNumber: sdk.String("XXXXX6789"),
                },
                RemoteID: "Remote ID",
                Type: shared.PayeeTypeEnumEnumIndividual,
            },
            shared.CreatePayeeV4{
                Address: shared.CreatePayeeAddressV4{
                    City: "Key West",
                    Country: "US",
                    CountyOrProvince: sdk.String("FL"),
                    Line1: "500 Duval St",
                    Line2: sdk.String("repellendus"),
                    Line3: sdk.String("totam"),
                    Line4: sdk.String("similique"),
                    ZipOrPostcode: sdk.String("33945"),
                },
                Challenge: &shared.ChallengeV4{
                    Description: "challenge description",
                    Value: "11984567",
                },
                Company: &shared.CompanyV4{
                    Name: "ABC Group Plc",
                    OperatingName: sdk.String("ABC Co"),
                    TaxID: sdk.String("123123123"),
                },
                Email: "bob@example.com",
                Individual: &shared.CreateIndividualV4{
                    DateOfBirth: types.MustDateFromString("1970-05-20"),
                    Name: shared.CreateIndividualV3Name{
                        FirstName: "Bob",
                        LastName: "Smith",
                        OtherNames: sdk.String("H"),
                        Title: sdk.String("Mr"),
                    },
                    NationalIdentification: sdk.String("SA211123K"),
                },
                Language: sdk.String("en-US"),
                PaymentChannel: &shared.CreatePaymentChannelV4{
                    AccountName: "My account",
                    AccountNumber: sdk.String("XXXXXX5678"),
                    CountryCode: "US",
                    Currency: "USD",
                    Iban: sdk.String("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234"),
                    PaymentChannelName: sdk.String("My Payment Channel"),
                    RoutingNumber: sdk.String("XXXXX6789"),
                },
                RemoteID: "Remote ID",
                Type: shared.PayeeTypeEnumEnumIndividual,
            },
        },
        PayorID: "9ac75325-5dcd-42d5-b992-175d7e0a035e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePayeesCSVResponseV4 != nil {
        // handle response
    }
}
```

## V4CreatePayeeMultipart

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PayeeInvitation.V4CreatePayeeMultipart(ctx, operations.V4CreatePayeeMultipartFormData{
        File: []shared.CreatePayeesCSVRequestV4{
            shared.CreatePayeesCSVRequestV4{
                AddressCity: "Key West",
                AddressCountry: "US",
                AddressCountyOrProvince: sdk.String("FL"),
                AddressLine1: "500 Duval St",
                AddressLine2: sdk.String("quaerat"),
                AddressLine3: sdk.String("tempora"),
                AddressLine4: sdk.String("vel"),
                AddressZipOrPostcode: "33945",
                ChallengeDescription: sdk.String("challenge description"),
                ChallengeValue: sdk.String("challenge value"),
                CompanyEIN: sdk.String("123456789"),
                CompanyName: sdk.String("ABC Ltd"),
                CompanyOperatingName: sdk.String("ABC"),
                Email: "bob@example.com",
                IndividualDateOfBirth: types.MustDateFromString("1985-01-01"),
                IndividualFirstName: sdk.String("quod"),
                IndividualLastName: sdk.String("Smith"),
                IndividualNationalIdentification: sdk.String("AB123456C"),
                IndividualOtherNames: sdk.String("Bob"),
                IndividualTitle: sdk.String("Mr"),
                PayeeLanguage: sdk.String("en-US"),
                PaymentChannelAccountName: sdk.String("My Account"),
                PaymentChannelAccountNumber: sdk.String("XXXXXX5678"),
                PaymentChannelCountryCode: sdk.String("US"),
                PaymentChannelCurrency: sdk.String("USD"),
                PaymentChannelIban: sdk.String("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234"),
                PaymentChannelRoutingNumber: sdk.String("XXXXX6789"),
                RemoteID: "remoteId123",
                Type: shared.PayeeTypeEnumEnumCompany,
            },
            shared.CreatePayeesCSVRequestV4{
                AddressCity: "Key West",
                AddressCountry: "US",
                AddressCountyOrProvince: sdk.String("FL"),
                AddressLine1: "500 Duval St",
                AddressLine2: sdk.String("qui"),
                AddressLine3: sdk.String("dolorum"),
                AddressLine4: sdk.String("a"),
                AddressZipOrPostcode: "33945",
                ChallengeDescription: sdk.String("challenge description"),
                ChallengeValue: sdk.String("challenge value"),
                CompanyEIN: sdk.String("123456789"),
                CompanyName: sdk.String("ABC Ltd"),
                CompanyOperatingName: sdk.String("ABC"),
                Email: "bob@example.com",
                IndividualDateOfBirth: types.MustDateFromString("1985-01-01"),
                IndividualFirstName: sdk.String("esse"),
                IndividualLastName: sdk.String("Smith"),
                IndividualNationalIdentification: sdk.String("AB123456C"),
                IndividualOtherNames: sdk.String("Bob"),
                IndividualTitle: sdk.String("Mr"),
                PayeeLanguage: sdk.String("en-US"),
                PaymentChannelAccountName: sdk.String("My Account"),
                PaymentChannelAccountNumber: sdk.String("XXXXXX5678"),
                PaymentChannelCountryCode: sdk.String("US"),
                PaymentChannelCurrency: sdk.String("USD"),
                PaymentChannelIban: sdk.String("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234"),
                PaymentChannelRoutingNumber: sdk.String("XXXXX6789"),
                RemoteID: "remoteId123",
                Type: shared.PayeeTypeEnumEnumCompany,
            },
            shared.CreatePayeesCSVRequestV4{
                AddressCity: "Key West",
                AddressCountry: "US",
                AddressCountyOrProvince: sdk.String("FL"),
                AddressLine1: "500 Duval St",
                AddressLine2: sdk.String("iusto"),
                AddressLine3: sdk.String("ipsum"),
                AddressLine4: sdk.String("quisquam"),
                AddressZipOrPostcode: "33945",
                ChallengeDescription: sdk.String("challenge description"),
                ChallengeValue: sdk.String("challenge value"),
                CompanyEIN: sdk.String("123456789"),
                CompanyName: sdk.String("ABC Ltd"),
                CompanyOperatingName: sdk.String("ABC"),
                Email: "bob@example.com",
                IndividualDateOfBirth: types.MustDateFromString("1985-01-01"),
                IndividualFirstName: sdk.String("tenetur"),
                IndividualLastName: sdk.String("Smith"),
                IndividualNationalIdentification: sdk.String("AB123456C"),
                IndividualOtherNames: sdk.String("Bob"),
                IndividualTitle: sdk.String("Mr"),
                PayeeLanguage: sdk.String("en-US"),
                PaymentChannelAccountName: sdk.String("My Account"),
                PaymentChannelAccountNumber: sdk.String("XXXXXX5678"),
                PaymentChannelCountryCode: sdk.String("US"),
                PaymentChannelCurrency: sdk.String("USD"),
                PaymentChannelIban: sdk.String("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234"),
                PaymentChannelRoutingNumber: sdk.String("XXXXX6789"),
                RemoteID: "remoteId123",
                Type: shared.PayeeTypeEnumEnumIndividual,
            },
            shared.CreatePayeesCSVRequestV4{
                AddressCity: "Key West",
                AddressCountry: "US",
                AddressCountyOrProvince: sdk.String("FL"),
                AddressLine1: "500 Duval St",
                AddressLine2: sdk.String("tempore"),
                AddressLine3: sdk.String("accusamus"),
                AddressLine4: sdk.String("numquam"),
                AddressZipOrPostcode: "33945",
                ChallengeDescription: sdk.String("challenge description"),
                ChallengeValue: sdk.String("challenge value"),
                CompanyEIN: sdk.String("123456789"),
                CompanyName: sdk.String("ABC Ltd"),
                CompanyOperatingName: sdk.String("ABC"),
                Email: "bob@example.com",
                IndividualDateOfBirth: types.MustDateFromString("1985-01-01"),
                IndividualFirstName: sdk.String("enim"),
                IndividualLastName: sdk.String("Smith"),
                IndividualNationalIdentification: sdk.String("AB123456C"),
                IndividualOtherNames: sdk.String("Bob"),
                IndividualTitle: sdk.String("Mr"),
                PayeeLanguage: sdk.String("en-US"),
                PaymentChannelAccountName: sdk.String("My Account"),
                PaymentChannelAccountNumber: sdk.String("XXXXXX5678"),
                PaymentChannelCountryCode: sdk.String("US"),
                PaymentChannelCurrency: sdk.String("USD"),
                PaymentChannelIban: sdk.String("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234"),
                PaymentChannelRoutingNumber: sdk.String("XXXXX6789"),
                RemoteID: "remoteId123",
                Type: shared.PayeeTypeEnumEnumIndividual,
            },
        },
        PayorID: sdk.String("f870b326-b5a7-4342-9cdb-1a8422bb679d"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePayeesCSVResponseV4 != nil {
        // handle response
    }
}
```
