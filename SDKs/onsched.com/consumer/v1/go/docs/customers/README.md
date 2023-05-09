# Customers

### Available Operations

* [DeleteConsumerV1CustomersID](#deleteconsumerv1customersid) - Delete Customer
* [GetConsumerV1Customers](#getconsumerv1customers) - List Customers
* [GetConsumerV1CustomersBookingfields](#getconsumerv1customersbookingfields) - Get Customer Booking Fields
* [GetConsumerV1CustomersCountries](#getconsumerv1customerscountries) - List Country Codes
* [GetConsumerV1CustomersCustomfields](#getconsumerv1customerscustomfields) - Get Customer Custom Fields
* [GetConsumerV1CustomersStates](#getconsumerv1customersstates) - List Country States
* [GetConsumerV1CustomersID](#getconsumerv1customersid) - Get Customer
* [PostConsumerV1Customers](#postconsumerv1customers) - Create Customer
* [PutConsumerV1CustomersID](#putconsumerv1customersid) - Update Customer

## DeleteConsumerV1CustomersID

<p>Use this endpoint to permanently <b>Delete</b> a Customer object. A valid <b>customer id</b> is required.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Customers.DeleteConsumerV1CustomersID(ctx, operations.DeleteConsumerV1CustomersIDRequest{
        ID: "c7abd74d-d39c-40f5-92cf-f7c70a45626d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetConsumerV1Customers

<p>Use this endpoint to return a <b>List of Customers</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Customers.GetConsumerV1Customers(ctx, operations.GetConsumerV1CustomersRequest{
        Deleted: sdk.Bool(false),
        Email: sdk.String("Clarabelle.Jacobs@gmail.com"),
        GroupID: sdk.String("dolor"),
        Lastname: sdk.String("Wuckert"),
        Limit: sdk.Int(97844),
        LocationID: sdk.String("ex"),
        Offset: sdk.Int(862192),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerListViewModel != nil {
        // handle response
    }
}
```

## GetConsumerV1CustomersBookingfields

<p>Use this endpoint to return <b>Customer Booking Fields</b>. Customer booking fields are stored with each customer object. They are used when the information collected during the booking is for a particular customer. Customer Booking Fields include any custom customer fields you define and want to capture with the Booking.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Customers.GetConsumerV1CustomersBookingfields(ctx, operations.GetConsumerV1CustomersBookingfieldsRequest{
        LocationID: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BookingFieldListViewModel != nil {
        // handle response
    }
}
```

## GetConsumerV1CustomersCountries

<p>Use this endpoint to return a <b>List of Countries with their associated Country Code</b>. Country codes are based on the 2-character ANSI standard. If your countries of operation are not currently listed, contact us at <i><b>support@onsched.com</b></i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Customers.GetConsumerV1CustomersCountries(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CountryViewModels != nil {
        // handle response
    }
}
```

## GetConsumerV1CustomersCustomfields

<p>Use this endpoint to return <b>Customer Custom Fields</b>. Customer custom fields are stored with the customer object. They are used when the information collected during the booking is specific to a particular customer.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Customers.GetConsumerV1CustomersCustomfields(ctx, operations.GetConsumerV1CustomersCustomfieldsRequest{
        LeadQuestions: sdk.Bool(false),
        LocationID: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomFieldDefinitionListViewModel != nil {
        // handle response
    }
}
```

## GetConsumerV1CustomersStates

<p>Use this endpoint to return a <b>List of Countries with their associated State Codes</b>. Supply a country code to filter results further. If states for your countries of operation are not currently listed, contact us at <i><b>support@onsched.com</b></i>.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Customers.GetConsumerV1CustomersStates(ctx, operations.GetConsumerV1CustomersStatesRequest{
        Country: sdk.String("Grenada"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StateViewModels != nil {
        // handle response
    }
}
```

## GetConsumerV1CustomersID

<p>Use this endpoint to return a <b>Customer</b> object. A valid <b>customer id</b> is required. Find customer id's by using the <i>GET /consumer/v1/customers</i> endpoint.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Customers.GetConsumerV1CustomersID(ctx, operations.GetConsumerV1CustomersIDRequest{
        ID: "fce6c556-146c-43e2-90fb-008c42e141aa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerViewModel != nil {
        // handle response
    }
}
```

## PostConsumerV1Customers

<p>Use this endpoint to <b>Create</b> a new Customer. A customer object is automatically created with the first appointment booking if it doesn't already exist. If not specified, the business location id defaults to the primary business location.</p>
<p>Required Fields: <b>Email</b> and <b>Name</b> or <b>First and Lastname</b> depending on customer type. Type 0 = Person, Type 1 = Business. For type 0, the firstname and lastname fields are used. For type 1, the Name field is used, and the name field is also used to populate the lastname.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Customers.PostConsumerV1Customers(ctx, shared.CustomerInputModel{
        Address: &shared.AddressInputModel{
            AddressLine1: sdk.String("placeat"),
            AddressLine2: sdk.String("velit"),
            City: sdk.String("Helenfort"),
            Country: sdk.String("Martinique"),
            PostalCode: sdk.String("83702-2150"),
            State: sdk.String("molestiae"),
        },
        Contact: &shared.ContactInputModel{
            BusinessPhone: sdk.String("magnam"),
            BusinessPhoneExt: sdk.String("odio"),
            ConferenceInfo: sdk.String("eius"),
            HomePhone: sdk.String("esse"),
            MobilePhone: sdk.String("esse"),
            PreferredPhoneType: sdk.String("rem"),
            SkypeUsername: sdk.String("fuga"),
        },
        CustomFields: &shared.CustomFieldInputModel{
            Field1: sdk.String("reprehenderit"),
            Field10: sdk.String("quidem"),
            Field2: sdk.String("fugiat"),
            Field3: sdk.String("ut"),
            Field4: sdk.String("eum"),
            Field5: sdk.String("suscipit"),
            Field6: sdk.String("assumenda"),
            Field7: sdk.String("eos"),
            Field8: sdk.String("praesentium"),
            Field9: sdk.String("quisquam"),
        },
        Email: sdk.String("Anahi.Olson77@gmail.com"),
        Firstname: sdk.String("Rosemarie"),
        Lastname: sdk.String("Sanford"),
        LocationID: sdk.String("fuga"),
        Name: sdk.String("Ms. Ruby Hintz II"),
        NotificationType: sdk.String("debitis"),
        SendLeadNotification: sdk.Bool(false),
        StripeCustomerID: sdk.String("ipsam"),
        Type: sdk.Int(133465),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerViewModel != nil {
        // handle response
    }
}
```

## PutConsumerV1CustomersID

<p>Use this endpoint to <b>Update</b> a Customer object. A valid <b>customer id</b> is required. Note: Blank fields are not changed.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Customers.PutConsumerV1CustomersID(ctx, operations.PutConsumerV1CustomersIDRequest{
        CustomerUpdateModel: &shared.CustomerUpdateModel{
            Address: &shared.AddressUpdateModel{
                AddressLine1: sdk.String("sequi"),
                AddressLine2: sdk.String("quo"),
                City: sdk.String("Tianaton"),
                Country: sdk.String("Portugal"),
                PostalCode: sdk.String("40458-3454"),
                State: sdk.String("sapiente"),
            },
            Contact: &shared.ContactUpdateModel{
                BusinessPhone: sdk.String("dolores"),
                BusinessPhoneExt: sdk.String("deserunt"),
                ConferenceInfo: sdk.String("molestiae"),
                HomePhone: sdk.String("accusantium"),
                MobilePhone: sdk.String("porro"),
                PreferredPhoneType: sdk.String("eum"),
                SkypeUsername: sdk.String("quas"),
            },
            CustomFields: &shared.CustomFieldUpdateModel{
                Field1: sdk.String("praesentium"),
                Field10: sdk.String("consequuntur"),
                Field2: sdk.String("deleniti"),
                Field3: sdk.String("fugit"),
                Field4: sdk.String("fuga"),
                Field5: sdk.String("mollitia"),
                Field6: sdk.String("incidunt"),
                Field7: sdk.String("atque"),
                Field8: sdk.String("explicabo"),
                Field9: sdk.String("minima"),
            },
            Email: sdk.String("Caesar18@yahoo.com"),
            Firstname: sdk.String("Braxton"),
            Lastname: sdk.String("Turner"),
            LocationID: sdk.String("occaecati"),
            Name: sdk.String("Carl Koch"),
            NotificationType: sdk.String("veritatis"),
            StripeCustomerID: sdk.String("esse"),
            Type: sdk.Int(800379),
        },
        ID: "be61e6b7-b95b-4c0a-b3c2-0c4f3789fd87",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
