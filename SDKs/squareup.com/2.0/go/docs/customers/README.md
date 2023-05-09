# Customers

### Available Operations

* [AddGroupToCustomer](#addgrouptocustomer) - AddGroupToCustomer
* [CreateCustomer](#createcustomer) - CreateCustomer
* [CreateCustomerCard](#createcustomercard) - CreateCustomerCard
* [DeleteCustomer](#deletecustomer) - DeleteCustomer
* [DeleteCustomerCard](#deletecustomercard) - DeleteCustomerCard
* [ListCustomers](#listcustomers) - ListCustomers
* [RemoveGroupFromCustomer](#removegroupfromcustomer) - RemoveGroupFromCustomer
* [RetrieveCustomer](#retrievecustomer) - RetrieveCustomer
* [SearchCustomers](#searchcustomers) - SearchCustomers
* [UpdateCustomer](#updatecustomer) - UpdateCustomer

## AddGroupToCustomer

Adds a group membership to a customer.

The customer is identified by the `customer_id` value
and the customer group is identified by the `group_id` value.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Customers.AddGroupToCustomer(ctx, operations.AddGroupToCustomerRequest{
        CustomerID: "magni",
        GroupID: "modi",
    }, operations.AddGroupToCustomerSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddGroupToCustomerResponse != nil {
        // handle response
    }
}
```

## CreateCustomer

Creates a new customer for a business.

You must provide at least one of the following values in your request to this
endpoint:

- `given_name`
- `family_name`
- `company_name`
- `email_address`
- `phone_number`

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Customers.CreateCustomer(ctx, shared.CreateCustomerRequest{
        Address: &shared.Address{
            AddressLine1: sdk.String("voluptatum"),
            AddressLine2: sdk.String("dolore"),
            AddressLine3: sdk.String("possimus"),
            AdministrativeDistrictLevel1: sdk.String("dolorum"),
            AdministrativeDistrictLevel2: sdk.String("eos"),
            AdministrativeDistrictLevel3: sdk.String("sunt"),
            Country: sdk.String("Democratic People's Republic of Korea"),
            FirstName: sdk.String("Chelsea"),
            LastName: sdk.String("Monahan"),
            Locality: sdk.String("reiciendis"),
            Organization: sdk.String("qui"),
            PostalCode: sdk.String("72089-3413"),
            Sublocality: sdk.String("maiores"),
            Sublocality2: sdk.String("dicta"),
            Sublocality3: sdk.String("dicta"),
        },
        Birthday: sdk.String("eum"),
        CompanyName: sdk.String("sint"),
        EmailAddress: sdk.String("id"),
        FamilyName: sdk.String("nobis"),
        GivenName: sdk.String("quasi"),
        IdempotencyKey: sdk.String("itaque"),
        Nickname: sdk.String("aliquam"),
        Note: sdk.String("vitae"),
        PhoneNumber: sdk.String("temporibus"),
        ReferenceID: sdk.String("voluptatum"),
    }, operations.CreateCustomerSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCustomerResponse != nil {
        // handle response
    }
}
```

## CreateCustomerCard

Adds a card on file to an existing customer.

As with charges, calls to `CreateCustomerCard` are idempotent. Multiple
calls with the same card nonce return the same card record that was created
with the provided nonce during the _first_ call.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Customers.CreateCustomerCard(ctx, operations.CreateCustomerCardRequest{
        CreateCustomerCardRequest: shared.CreateCustomerCardRequest{
            BillingAddress: &shared.Address{
                AddressLine1: sdk.String("deserunt"),
                AddressLine2: sdk.String("aspernatur"),
                AddressLine3: sdk.String("neque"),
                AdministrativeDistrictLevel1: sdk.String("impedit"),
                AdministrativeDistrictLevel2: sdk.String("consequuntur"),
                AdministrativeDistrictLevel3: sdk.String("neque"),
                Country: sdk.String("Trinidad and Tobago"),
                FirstName: sdk.String("Daniella"),
                LastName: sdk.String("Grant"),
                Locality: sdk.String("repellat"),
                Organization: sdk.String("eos"),
                PostalCode: sdk.String("96361-5494"),
                Sublocality: sdk.String("nulla"),
                Sublocality2: sdk.String("recusandae"),
                Sublocality3: sdk.String("iste"),
            },
            CardNonce: "aspernatur",
            CardholderName: sdk.String("aspernatur"),
            VerificationToken: sdk.String("et"),
        },
        CustomerID: "ipsam",
    }, operations.CreateCustomerCardSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCustomerCardResponse != nil {
        // handle response
    }
}
```

## DeleteCustomer

Deletes a customer profile from a business. This operation also unlinks any associated cards on file. 

As a best practice, you should include the `version` field in the request to enable [optimistic concurrency](https://developer.squareup.com/docs/working-with-apis/optimistic-concurrency) control. The value must be set to the current version of the customer profile. 

To delete a customer profile that was created by merging existing profiles, you must use the ID of the newly created profile.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Customers.DeleteCustomer(ctx, operations.DeleteCustomerRequest{
        CustomerID: "et",
        Version: sdk.Int64(961555),
    }, operations.DeleteCustomerSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCustomerResponse != nil {
        // handle response
    }
}
```

## DeleteCustomerCard

Removes a card on file from a customer.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Customers.DeleteCustomerCard(ctx, operations.DeleteCustomerCardRequest{
        CardID: "saepe",
        CustomerID: "sunt",
    }, operations.DeleteCustomerCardSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCustomerCardResponse != nil {
        // handle response
    }
}
```

## ListCustomers

Lists customer profiles associated with a Square account.

Under normal operating conditions, newly created or updated customer profiles become available
for the listing operation in well under 30 seconds. Occasionally, propagation of the new or updated
profiles can take closer to one minute or longer, especially during network incidents and outages.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Customers.ListCustomers(ctx, operations.ListCustomersRequest{
        Cursor: sdk.String("in"),
        Limit: sdk.Int64(99163),
        SortField: sdk.String("sed"),
        SortOrder: sdk.String("voluptatem"),
    }, operations.ListCustomersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomersResponse != nil {
        // handle response
    }
}
```

## RemoveGroupFromCustomer

Removes a group membership from a customer.

The customer is identified by the `customer_id` value
and the customer group is identified by the `group_id` value.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Customers.RemoveGroupFromCustomer(ctx, operations.RemoveGroupFromCustomerRequest{
        CustomerID: "perspiciatis",
        GroupID: "error",
    }, operations.RemoveGroupFromCustomerSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveGroupFromCustomerResponse != nil {
        // handle response
    }
}
```

## RetrieveCustomer

Returns details for a single customer.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Customers.RetrieveCustomer(ctx, operations.RetrieveCustomerRequest{
        CustomerID: "deleniti",
    }, operations.RetrieveCustomerSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveCustomerResponse != nil {
        // handle response
    }
}
```

## SearchCustomers

Searches the customer profiles associated with a Square account using a supported query filter.

Calling `SearchCustomers` without any explicit query filter returns all
customer profiles ordered alphabetically based on `given_name` and
`family_name`.

Under normal operating conditions, newly created or updated customer profiles become available
for the search operation in well under 30 seconds. Occasionally, propagation of the new or updated
profiles can take closer to one minute or longer, especially during network incidents and outages.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Customers.SearchCustomers(ctx, shared.SearchCustomersRequest{
        Cursor: sdk.String("enim"),
        Limit: sdk.Int64(198406),
        Query: &shared.CustomerQuery{
            Filter: &shared.CustomerFilter{
                CreatedAt: &shared.TimeRange{
                    EndAt: sdk.String("saepe"),
                    StartAt: sdk.String("unde"),
                },
                CreationSource: &shared.CustomerCreationSourceFilter{
                    Rule: sdk.String("reiciendis"),
                    Values: []string{
                        "modi",
                        "adipisci",
                    },
                },
                EmailAddress: &shared.CustomerTextFilter{
                    Exact: sdk.String("pariatur"),
                    Fuzzy: sdk.String("praesentium"),
                },
                GroupIds: &shared.FilterValue{
                    All: []string{
                        "dolore",
                        "numquam",
                    },
                    Any: []string{
                        "perspiciatis",
                    },
                    None: []string{
                        "voluptates",
                        "quia",
                        "aspernatur",
                        "ut",
                    },
                },
                PhoneNumber: &shared.CustomerTextFilter{
                    Exact: sdk.String("non"),
                    Fuzzy: sdk.String("laboriosam"),
                },
                ReferenceID: &shared.CustomerTextFilter{
                    Exact: sdk.String("accusantium"),
                    Fuzzy: sdk.String("tempora"),
                },
                UpdatedAt: &shared.TimeRange{
                    EndAt: sdk.String("aliquam"),
                    StartAt: sdk.String("dolorem"),
                },
            },
            Sort: &shared.CustomerSort{
                Field: sdk.String("expedita"),
                Order: sdk.String("impedit"),
            },
        },
    }, operations.SearchCustomersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchCustomersResponse != nil {
        // handle response
    }
}
```

## UpdateCustomer

Updates a customer profile. To change an attribute, specify the new value. To remove an attribute, specify the value as an empty string or empty object.

As a best practice, you should include the `version` field in the request to enable [optimistic concurrency](https://developer.squareup.com/docs/working-with-apis/optimistic-concurrency) control. The value must be set to the current version of the customer profile.

To update a customer profile that was created by merging existing profiles, you must use the ID of the newly created profile.

You cannot use this endpoint to change cards on file. To make changes, use the [Cards API](https://developer.squareup.com/reference/square_2021-08-18/cards-api) or [Gift Cards API](https://developer.squareup.com/reference/square_2021-08-18/gift-cards-api).

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Customers.UpdateCustomer(ctx, operations.UpdateCustomerRequest{
        UpdateCustomerRequest: shared.UpdateCustomerRequest{
            Address: &shared.Address{
                AddressLine1: sdk.String("architecto"),
                AddressLine2: sdk.String("minima"),
                AddressLine3: sdk.String("magnam"),
                AdministrativeDistrictLevel1: sdk.String("vitae"),
                AdministrativeDistrictLevel2: sdk.String("quos"),
                AdministrativeDistrictLevel3: sdk.String("atque"),
                Country: sdk.String("Serbia"),
                FirstName: sdk.String("Brain"),
                LastName: sdk.String("Yundt"),
                Locality: sdk.String("corporis"),
                Organization: sdk.String("vel"),
                PostalCode: sdk.String("53864-5218"),
                Sublocality: sdk.String("mollitia"),
                Sublocality2: sdk.String("libero"),
                Sublocality3: sdk.String("fugiat"),
            },
            Birthday: sdk.String("voluptas"),
            CompanyName: sdk.String("et"),
            EmailAddress: sdk.String("odio"),
            FamilyName: sdk.String("eligendi"),
            GivenName: sdk.String("nesciunt"),
            Nickname: sdk.String("harum"),
            Note: sdk.String("aperiam"),
            PhoneNumber: sdk.String("pariatur"),
            ReferenceID: sdk.String("ad"),
            Version: sdk.Int64(104092),
        },
        CustomerID: "culpa",
    }, operations.UpdateCustomerSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCustomerResponse != nil {
        // handle response
    }
}
```
