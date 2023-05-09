# Customers

### Available Operations

* [ResellerCustomersGet](#resellercustomersget) - Gets a customer account. Use this operation to see a customer account already in your reseller management, or to see the minimal account information for an existing customer that you do not manage. For more information about the API response for existing customers, see [retrieving a customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#get_customer).
* [ResellerCustomersInsert](#resellercustomersinsert) - Orders a new customer's account. Before ordering a new customer account, establish whether the customer account already exists using the [`customers.get`](/admin-sdk/reseller/v1/reference/customers/get) If the customer account exists as a direct Google account or as a resold customer account from another reseller, use the `customerAuthToken\` as described in [order a resold account for an existing customer](/admin-sdk/reseller/v1/how-tos/manage_customers#create_existing_customer). For more information about ordering a new customer account, see [order a new customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#create_customer). After creating a new customer account, you must provision a user as an administrator. The customer's administrator is required to sign in to the Admin console and sign the G Suite via Reseller agreement to activate the account. Resellers are prohibited from signing the G Suite via Reseller agreement on the customer's behalf. For more information, see [order a new customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#tos).
* [ResellerCustomersPatch](#resellercustomerspatch) - Updates a customer account's settings. This method supports patch semantics. You cannot update `customerType` via the Reseller API, but a `"team"` customer can verify their domain and become `customerType = "domain"`. For more information, see [Verify your domain to unlock Essentials features](https://support.google.com/a/answer/9122284).
* [ResellerCustomersUpdate](#resellercustomersupdate) - Updates a customer account's settings. You cannot update `customerType` via the Reseller API, but a `"team"` customer can verify their domain and become `customerType = "domain"`. For more information, see [update a customer's settings](/admin-sdk/reseller/v1/how-tos/manage_customers#update_customer).

## ResellerCustomersGet

Gets a customer account. Use this operation to see a customer account already in your reseller management, or to see the minimal account information for an existing customer that you do not manage. For more information about the API response for existing customers, see [retrieving a customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#get_customer).

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
    res, err := s.Customers.ResellerCustomersGet(ctx, operations.ResellerCustomersGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("debitis"),
        CustomerID: "ipsa",
        Fields: sdk.String("delectus"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.ResellerCustomersGetSecurity{
        Option1: &operations.ResellerCustomersGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Customer != nil {
        // handle response
    }
}
```

## ResellerCustomersInsert

Orders a new customer's account. Before ordering a new customer account, establish whether the customer account already exists using the [`customers.get`](/admin-sdk/reseller/v1/reference/customers/get) If the customer account exists as a direct Google account or as a resold customer account from another reseller, use the `customerAuthToken\` as described in [order a resold account for an existing customer](/admin-sdk/reseller/v1/how-tos/manage_customers#create_existing_customer). For more information about ordering a new customer account, see [order a new customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#create_customer). After creating a new customer account, you must provision a user as an administrator. The customer's administrator is required to sign in to the Admin console and sign the G Suite via Reseller agreement to activate the account. Resellers are prohibited from signing the G Suite via Reseller agreement on the customer's behalf. For more information, see [order a new customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#tos).

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
    res, err := s.Customers.ResellerCustomersInsert(ctx, operations.ResellerCustomersInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Customer: &shared.Customer{
            AlternateEmail: sdk.String("iusto"),
            CustomerDomain: sdk.String("excepturi"),
            CustomerDomainVerified: sdk.Bool(false),
            CustomerID: sdk.String("nisi"),
            CustomerType: shared.CustomerCustomerTypeEnumTeam.ToPointer(),
            Kind: sdk.String("temporibus"),
            PhoneNumber: sdk.String("ab"),
            PostalAddress: &shared.Address{
                AddressLine1: sdk.String("quis"),
                AddressLine2: sdk.String("veritatis"),
                AddressLine3: sdk.String("deserunt"),
                ContactName: sdk.String("perferendis"),
                CountryCode: sdk.String("GU"),
                Kind: sdk.String("repellendus"),
                Locality: sdk.String("sapiente"),
                OrganizationName: sdk.String("quo"),
                PostalCode: sdk.String("88947"),
                Region: sdk.String("quod"),
            },
            PrimaryAdmin: &shared.PrimaryAdmin{
                PrimaryEmail: sdk.String("esse"),
            },
            ResourceUIURL: sdk.String("totam"),
        },
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        CustomerAuthToken: sdk.String("nam"),
        Fields: sdk.String("officia"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("optio"),
    }, operations.ResellerCustomersInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Customer != nil {
        // handle response
    }
}
```

## ResellerCustomersPatch

Updates a customer account's settings. This method supports patch semantics. You cannot update `customerType` via the Reseller API, but a `"team"` customer can verify their domain and become `customerType = "domain"`. For more information, see [Verify your domain to unlock Essentials features](https://support.google.com/a/answer/9122284).

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
    res, err := s.Customers.ResellerCustomersPatch(ctx, operations.ResellerCustomersPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Customer: &shared.Customer{
            AlternateEmail: sdk.String("beatae"),
            CustomerDomain: sdk.String("commodi"),
            CustomerDomainVerified: sdk.Bool(false),
            CustomerID: sdk.String("molestiae"),
            CustomerType: shared.CustomerCustomerTypeEnumCustomerTypeUnspecified.ToPointer(),
            Kind: sdk.String("qui"),
            PhoneNumber: sdk.String("impedit"),
            PostalAddress: &shared.Address{
                AddressLine1: sdk.String("cum"),
                AddressLine2: sdk.String("esse"),
                AddressLine3: sdk.String("ipsum"),
                ContactName: sdk.String("excepturi"),
                CountryCode: sdk.String("BV"),
                Kind: sdk.String("perferendis"),
                Locality: sdk.String("ad"),
                OrganizationName: sdk.String("natus"),
                PostalCode: sdk.String("62639"),
                Region: sdk.String("saepe"),
            },
            PrimaryAdmin: &shared.PrimaryAdmin{
                PrimaryEmail: sdk.String("fuga"),
            },
            ResourceUIURL: sdk.String("in"),
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iure"),
        CustomerID: "saepe",
        Fields: sdk.String("quidem"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.ResellerCustomersPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Customer != nil {
        // handle response
    }
}
```

## ResellerCustomersUpdate

Updates a customer account's settings. You cannot update `customerType` via the Reseller API, but a `"team"` customer can verify their domain and become `customerType = "domain"`. For more information, see [update a customer's settings](/admin-sdk/reseller/v1/how-tos/manage_customers#update_customer).

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
    res, err := s.Customers.ResellerCustomersUpdate(ctx, operations.ResellerCustomersUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Customer: &shared.Customer{
            AlternateEmail: sdk.String("dolores"),
            CustomerDomain: sdk.String("dolorem"),
            CustomerDomainVerified: sdk.Bool(false),
            CustomerID: sdk.String("corporis"),
            CustomerType: shared.CustomerCustomerTypeEnumCustomerTypeUnspecified.ToPointer(),
            Kind: sdk.String("nobis"),
            PhoneNumber: sdk.String("enim"),
            PostalAddress: &shared.Address{
                AddressLine1: sdk.String("omnis"),
                AddressLine2: sdk.String("nemo"),
                AddressLine3: sdk.String("minima"),
                ContactName: sdk.String("excepturi"),
                CountryCode: sdk.String("AR"),
                Kind: sdk.String("iure"),
                Locality: sdk.String("culpa"),
                OrganizationName: sdk.String("doloribus"),
                PostalCode: sdk.String("16261-9652"),
                Region: sdk.String("commodi"),
            },
            PrimaryAdmin: &shared.PrimaryAdmin{
                PrimaryEmail: sdk.String("quam"),
            },
            ResourceUIURL: sdk.String("molestiae"),
        },
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quia"),
        CustomerID: "quis",
        Fields: sdk.String("vitae"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("animi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("quo"),
    }, operations.ResellerCustomersUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Customer != nil {
        // handle response
    }
}
```
