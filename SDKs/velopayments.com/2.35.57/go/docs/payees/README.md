# Payees

## Overview

A payee is a person you wish to transfer money to. In this section you will find API opertions for working with Payees.


### Available Operations

* [~~DeletePayeeByIDV3~~](#deletepayeebyidv3) - Delete Payee by Id :warning: **Deprecated**
* [DeletePayeeByIDV4](#deletepayeebyidv4) - Delete Payee by Id
* [~~GetPayeeByIDV3~~](#getpayeebyidv3) - Get Payee by Id :warning: **Deprecated**
* [GetPayeeByIDV4](#getpayeebyidv4) - Get Payee by Id
* [~~ListPayeeChangesV3~~](#listpayeechangesv3) - List Payee Changes :warning: **Deprecated**
* [ListPayeeChangesV4](#listpayeechangesv4) - List Payee Changes
* [~~ListPayeesV3~~](#listpayeesv3) - List Payees :warning: **Deprecated**
* [ListPayeesV4](#listpayeesv4) - List Payees
* [~~PayeeDetailsUpdateV3~~](#payeedetailsupdatev3) - Update Payee Details :warning: **Deprecated**
* [PayeeDetailsUpdateV4](#payeedetailsupdatev4) - Update Payee Details
* [~~PostV3PayeesPayeeIDRemoteIDUpdate~~](#postv3payeespayeeidremoteidupdate) - Update Payee Remote Id :warning: **Deprecated**
* [PostV4PayeesPayeeIDRemoteIDUpdate](#postv4payeespayeeidremoteidupdate) - Update Payee Remote Id

## ~~DeletePayeeByIDV3~~

<p>Use v4 instead</p>
<p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p>
<p>* Payee ID is not found</p>
<p>* If Payee has not been on-boarded</p>
<p>* If Payee is in grace period</p>
<p>* If Payee has existing payments</p>


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
    res, err := s.Payees.DeletePayeeByIDV3(ctx, operations.DeletePayeeByIDV3Request{
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

## DeletePayeeByIDV4

<p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p>
<p>* Payee ID is not found</p>
<p>* If Payee has not been on-boarded</p>
<p>* If Payee is in grace period</p>
<p>* If Payee has existing payments</p>


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
    res, err := s.Payees.DeletePayeeByIDV4(ctx, operations.DeletePayeeByIDV4Request{
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

## ~~GetPayeeByIDV3~~

<p>Use v4 instead</p>
<p>Get Payee by Id</p>


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
    res, err := s.Payees.GetPayeeByIDV3(ctx, operations.GetPayeeByIDV3Request{
        PayeeID: "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
        Sensitive: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayeeDetailResponseV3 != nil {
        // handle response
    }
}
```

## GetPayeeByIDV4

Get Payee by Id

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
    res, err := s.Payees.GetPayeeByIDV4(ctx, operations.GetPayeeByIDV4Request{
        PayeeID: "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
        Sensitive: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayeeDetailResponseV4 != nil {
        // handle response
    }
}
```

## ~~ListPayeeChangesV3~~

<p>Use v4 instead</p>
<p>Get a paginated response listing payee changes.</p>


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payees.ListPayeeChangesV3(ctx, operations.ListPayeeChangesV3Request{
        Page: sdk.Int(1),
        PageSize: sdk.Int(100),
        PayorID: "2322715b-f0cb-4b1e-b1b8-b90f3443a110",
        UpdatedSince: types.MustTimeFromString("2021-02-21T10:38:46.777Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayeeDeltaResponseV3 != nil {
        // handle response
    }
}
```

## ListPayeeChangesV4

Get a paginated response listing payee changes (updated since a particular time) to a limited set of fields:
- dbaName
- displayName
- email
- onboardedStatus
- payeeCountry
- payeeId
- remoteId


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payees.ListPayeeChangesV4(ctx, operations.ListPayeeChangesV4Request{
        Page: sdk.Int(1),
        PageSize: sdk.Int(100),
        PayorID: "0adcf4b9-2187-49fc-a953-f73ef7fbc7ab",
        UpdatedSince: types.MustTimeFromString("2021-07-04T12:52:28.765Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayeeDeltaResponseV4 != nil {
        // handle response
    }
}
```

## ~~ListPayeesV3~~

<p>Use v4 instead</p>
Get a paginated response listing the payees for a payor.


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
    res, err := s.Payees.ListPayeesV3(ctx, operations.ListPayeesV3Request{
        Disabled: sdk.Bool(false),
        DisplayName: sdk.String("Bob Smith"),
        Email: sdk.String("bob@example.com"),
        OnboardedStatus: sdk.String("dolore"),
        Page: sdk.Int(1),
        PageSize: sdk.Int(25),
        PayeeCountry: sdk.String("US"),
        PayeeType: sdk.String("quibusdam"),
        PayorID: "d39c0f5d-2cff-47c7-8a45-626d436813f1",
        RemoteID: sdk.String("remoteId123"),
        Sort: sdk.String("displayName:asc"),
        WatchlistStatus: sdk.String("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedPayeeResponseV3 != nil {
        // handle response
    }
}
```

## ListPayeesV4

Get a paginated response listing the payees for a payor.

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
    res, err := s.Payees.ListPayeesV4(ctx, operations.ListPayeesV4Request{
        Disabled: sdk.Bool(false),
        DisplayName: sdk.String("Bob Smith"),
        Email: sdk.String("bob@example.com"),
        OfacStatus: sdk.String("nulla"),
        OnboardedStatus: sdk.String("excepturi"),
        Page: sdk.Int(1),
        PageSize: sdk.Int(25),
        PayeeCountry: sdk.String("US"),
        PayeeType: sdk.String("voluptatibus"),
        PayorID: "5fce6c55-6146-4c3e-a50f-b008c42e141a",
        RemoteID: sdk.String("remoteId123"),
        Sort: sdk.String("displayName:asc"),
        WatchlistStatus: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PagedPayeeResponseV4 != nil {
        // handle response
    }
}
```

## ~~PayeeDetailsUpdateV3~~

<p>Use v4 instead</p>
<p>Update payee details for the given Payee Id.<p>


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
    res, err := s.Payees.PayeeDetailsUpdateV3(ctx, operations.PayeeDetailsUpdateV3Request{
        UpdatePayeeDetailsRequestV3Input: shared.UpdatePayeeDetailsRequestV3Input{
            Address: &shared.PayeeAddressV3{
                City: "Key West",
                Country: "US",
                CountyOrProvince: sdk.String("FL"),
                Line1: "500 Duval St",
                Line2: sdk.String("placeat"),
                Line3: sdk.String("velit"),
                Line4: sdk.String("eum"),
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
            Email: sdk.String("bob@example.com"),
            Individual: &shared.IndividualV3Input{
                Name: shared.IndividualV3Name{
                    FirstName: "Bob",
                    LastName: "Smith",
                    OtherNames: sdk.String("A"),
                    Title: sdk.String("Mr"),
                },
            },
            Language: sdk.String("en-US"),
            PayeeType: shared.PayeeTypeEnumEnumIndividual.ToPointer(),
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

## PayeeDetailsUpdateV4

<p>Update payee details for the given Payee Id.</p>
<p>Payors may only update the payee details if the payee has not yet onboarded</p>


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
    res, err := s.Payees.PayeeDetailsUpdateV4(ctx, operations.PayeeDetailsUpdateV4Request{
        UpdatePayeeDetailsRequestV4Input: shared.UpdatePayeeDetailsRequestV4Input{
            Address: &shared.PayeeAddressV4{
                City: "Key West",
                Country: "US",
                CountyOrProvince: sdk.String("FL"),
                Line1: "500 Duval St",
                Line2: sdk.String("nobis"),
                Line3: sdk.String("quas"),
                Line4: sdk.String("assumenda"),
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
            ContactSmsNumber: sdk.String("11235555555"),
            Email: sdk.String("bob@example.com"),
            Individual: &shared.IndividualV4Input{
                Name: shared.IndividualV3Name{
                    FirstName: "Bob",
                    LastName: "Smith",
                    OtherNames: sdk.String("A"),
                    Title: sdk.String("Mr"),
                },
            },
            Language: sdk.String("en-US"),
            PayeeType: shared.PayeeTypeEnumEnumCompany.ToPointer(),
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

## ~~PostV3PayeesPayeeIDRemoteIDUpdate~~

<p>Use v4 instead</p>
<p>Update the remote Id for the given Payee Id.</p>


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
    res, err := s.Payees.PostV3PayeesPayeeIDRemoteIDUpdate(ctx, operations.PostV3PayeesPayeeIDRemoteIDUpdateRequest{
        UpdateRemoteIDRequestV3: shared.UpdateRemoteIDRequestV3{
            PayorID: "9ac75325-5dcd-42d5-b992-175d7e0a035e",
            RemoteID: "remoteId123",
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

## PostV4PayeesPayeeIDRemoteIDUpdate

<p>Update the remote Id for the given Payee Id.</p>


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
    res, err := s.Payees.PostV4PayeesPayeeIDRemoteIDUpdate(ctx, operations.PostV4PayeesPayeeIDRemoteIDUpdateRequest{
        UpdateRemoteIDRequestV4: shared.UpdateRemoteIDRequestV4{
            PayorID: "9ac75325-5dcd-42d5-b992-175d7e0a035e",
            RemoteID: "remoteId123",
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
