# Customers

### Available Operations

* [AdminCustomersChromePrintServersBatchCreatePrintServers](#admincustomerschromeprintserversbatchcreateprintservers) - Creates multiple print servers.
* [AdminCustomersChromePrintServersBatchDeletePrintServers](#admincustomerschromeprintserversbatchdeleteprintservers) - Deletes multiple print servers.
* [AdminCustomersChromePrintServersCreate](#admincustomerschromeprintserverscreate) - Creates a print server.
* [AdminCustomersChromePrintServersDelete](#admincustomerschromeprintserversdelete) - Deletes a print server.
* [AdminCustomersChromePrintServersGet](#admincustomerschromeprintserversget) - Returns a print server's configuration.
* [AdminCustomersChromePrintServersList](#admincustomerschromeprintserverslist) - Lists print server configurations.
* [AdminCustomersChromePrintServersPatch](#admincustomerschromeprintserverspatch) - Updates a print server's configuration.
* [AdminCustomersChromePrintersBatchCreatePrinters](#admincustomerschromeprintersbatchcreateprinters) - Creates printers under given Organization Unit.
* [AdminCustomersChromePrintersBatchDeletePrinters](#admincustomerschromeprintersbatchdeleteprinters) - Deletes printers in batch.
* [AdminCustomersChromePrintersCreate](#admincustomerschromeprinterscreate) - Creates a printer under given Organization Unit.
* [AdminCustomersChromePrintersList](#admincustomerschromeprinterslist) - List printers configs.
* [AdminCustomersChromePrintersListPrinterModels](#admincustomerschromeprinterslistprintermodels) - Lists the supported printer models.
* [DirectoryCustomersGet](#directorycustomersget) - Retrieves a customer.
* [DirectoryCustomersPatch](#directorycustomerspatch) - Patches a customer.
* [DirectoryCustomersUpdate](#directorycustomersupdate) - Updates a customer.

## AdminCustomersChromePrintServersBatchCreatePrintServers

Creates multiple print servers.

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
    res, err := s.Customers.AdminCustomersChromePrintServersBatchCreatePrintServers(ctx, operations.AdminCustomersChromePrintServersBatchCreatePrintServersRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BatchCreatePrintServersRequestInput: &shared.BatchCreatePrintServersRequestInput{
            Requests: []shared.CreatePrintServerRequestInput{
                shared.CreatePrintServerRequestInput{
                    Parent: sdk.String("harum"),
                    PrintServer: &shared.PrintServerInput{
                        Description: sdk.String("molestiae"),
                        DisplayName: sdk.String("rerum"),
                        ID: sdk.String("95bc0ab3-c20c-44f3-b89f-d871f99dd2ef"),
                        Name: sdk.String("Miss Peter Cronin"),
                        OrgUnitID: sdk.String("aliquid"),
                        URI: sdk.String("https://barren-tuxedo.info"),
                    },
                },
                shared.CreatePrintServerRequestInput{
                    Parent: sdk.String("in"),
                    PrintServer: &shared.PrintServerInput{
                        Description: sdk.String("eius"),
                        DisplayName: sdk.String("libero"),
                        ID: sdk.String("db04f157-5608-42d6-8ea1-9f1d17051339"),
                        Name: sdk.String("Ms. Kenneth Ledner"),
                        OrgUnitID: sdk.String("mollitia"),
                        URI: sdk.String("http://moral-derrick.com"),
                    },
                },
            },
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("numquam"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("voluptas"),
        Parent: "aut",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.AdminCustomersChromePrintServersBatchCreatePrintServersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchCreatePrintServersResponse != nil {
        // handle response
    }
}
```

## AdminCustomersChromePrintServersBatchDeletePrintServers

Deletes multiple print servers.

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
    res, err := s.Customers.AdminCustomersChromePrintServersBatchDeletePrintServers(ctx, operations.AdminCustomersChromePrintServersBatchDeletePrintServersRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BatchDeletePrintServersRequest: &shared.BatchDeletePrintServersRequest{
            PrintServerIds: []string{
                "voluptatibus",
            },
        },
        AccessToken: sdk.String("voluptas"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aperiam"),
        Fields: sdk.String("ea"),
        Key: sdk.String("quaerat"),
        OauthToken: sdk.String("consequuntur"),
        Parent: "repellendus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("dignissimos"),
    }, operations.AdminCustomersChromePrintServersBatchDeletePrintServersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeletePrintServersResponse != nil {
        // handle response
    }
}
```

## AdminCustomersChromePrintServersCreate

Creates a print server.

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
    res, err := s.Customers.AdminCustomersChromePrintServersCreate(ctx, operations.AdminCustomersChromePrintServersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PrintServerInput: &shared.PrintServerInput{
            Description: sdk.String("asperiores"),
            DisplayName: sdk.String("nemo"),
            ID: sdk.String("15cc413a-a63a-4ae8-9678-64dbb675fd5e"),
            Name: sdk.String("Kimberly Ritchie"),
            OrgUnitID: sdk.String("exercitationem"),
            URI: sdk.String("https://sturdy-diabetes.org"),
        },
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("necessitatibus"),
        OauthToken: sdk.String("dolore"),
        Parent: "sunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("non"),
    }, operations.AdminCustomersChromePrintServersCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PrintServer != nil {
        // handle response
    }
}
```

## AdminCustomersChromePrintServersDelete

Deletes a print server.

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
    res, err := s.Customers.AdminCustomersChromePrintServersDelete(ctx, operations.AdminCustomersChromePrintServersDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("beatae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("debitis"),
        Key: sdk.String("consectetur"),
        Name: "Dr. Maryann Howe",
        OauthToken: sdk.String("vitae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("similique"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.AdminCustomersChromePrintServersDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## AdminCustomersChromePrintServersGet

Returns a print server's configuration.

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
    res, err := s.Customers.AdminCustomersChromePrintServersGet(ctx, operations.AdminCustomersChromePrintServersGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptas"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("minima"),
        Key: sdk.String("nobis"),
        Name: "Travis Schinner",
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolore"),
        UploadType: sdk.String("aliquam"),
        UploadProtocol: sdk.String("officiis"),
    }, operations.AdminCustomersChromePrintServersGetSecurity{
        Option1: &operations.AdminCustomersChromePrintServersGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PrintServer != nil {
        // handle response
    }
}
```

## AdminCustomersChromePrintServersList

Lists print server configurations.

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
    res, err := s.Customers.AdminCustomersChromePrintServersList(ctx, operations.AdminCustomersChromePrintServersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("blanditiis"),
        Filter: sdk.String("quas"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("nesciunt"),
        OrderBy: sdk.String("culpa"),
        OrgUnitID: sdk.String("corrupti"),
        PageSize: sdk.Int64(867290),
        PageToken: sdk.String("totam"),
        Parent: "hic",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("exercitationem"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("sit"),
    }, operations.AdminCustomersChromePrintServersListSecurity{
        Option1: &operations.AdminCustomersChromePrintServersListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPrintServersResponse != nil {
        // handle response
    }
}
```

## AdminCustomersChromePrintServersPatch

Updates a print server's configuration.

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
    res, err := s.Customers.AdminCustomersChromePrintServersPatch(ctx, operations.AdminCustomersChromePrintServersPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PrintServerInput: &shared.PrintServerInput{
            Description: sdk.String("sed"),
            DisplayName: sdk.String("reiciendis"),
            ID: sdk.String("2fb7b194-a276-4b26-916f-e1f08f4294e3"),
            Name: sdk.String("Kristina Lueilwitz"),
            OrgUnitID: sdk.String("tempora"),
            URI: sdk.String("http://wiggly-gripper.com"),
        },
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("quaerat"),
        Name: "Brittany Tremblay DDS",
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veniam"),
        UpdateMask: sdk.String("minima"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.AdminCustomersChromePrintServersPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PrintServer != nil {
        // handle response
    }
}
```

## AdminCustomersChromePrintersBatchCreatePrinters

Creates printers under given Organization Unit.

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
    res, err := s.Customers.AdminCustomersChromePrintersBatchCreatePrinters(ctx, operations.AdminCustomersChromePrintersBatchCreatePrintersRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BatchCreatePrintersRequestInput: &shared.BatchCreatePrintersRequestInput{
            Requests: []shared.CreatePrinterRequestInput{
                shared.CreatePrinterRequestInput{
                    Parent: sdk.String("aperiam"),
                    Printer: &shared.PrinterInput{
                        Description: sdk.String("saepe"),
                        DisplayName: sdk.String("numquam"),
                        ID: sdk.String("57e1858b-6a89-4fbe-ba5a-a8e4824d0ab4"),
                        MakeAndModel: sdk.String("consequatur"),
                        Name: sdk.String("Brittany Bailey"),
                        OrgUnitID: sdk.String("repudiandae"),
                        URI: sdk.String("http://breakable-lawyer.info"),
                        UseDriverlessConfig: sdk.Bool(false),
                    },
                },
            },
        },
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("nostrum"),
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("error"),
        Parent: "consequatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.AdminCustomersChromePrintersBatchCreatePrintersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchCreatePrintersResponse != nil {
        // handle response
    }
}
```

## AdminCustomersChromePrintersBatchDeletePrinters

Deletes printers in batch.

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
    res, err := s.Customers.AdminCustomersChromePrintersBatchDeletePrinters(ctx, operations.AdminCustomersChromePrintersBatchDeletePrintersRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BatchDeletePrintersRequest: &shared.BatchDeletePrintersRequest{
            PrinterIds: []string{
                "architecto",
            },
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("atque"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("nam"),
        Parent: "tenetur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laboriosam"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("amet"),
    }, operations.AdminCustomersChromePrintersBatchDeletePrintersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeletePrintersResponse != nil {
        // handle response
    }
}
```

## AdminCustomersChromePrintersCreate

Creates a printer under given Organization Unit.

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
    res, err := s.Customers.AdminCustomersChromePrintersCreate(ctx, operations.AdminCustomersChromePrintersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PrinterInput: &shared.PrinterInput{
            Description: sdk.String("voluptate"),
            DisplayName: sdk.String("unde"),
            ID: sdk.String("f9dfe0ab-7da8-4a50-8e18-7f86bc173d68"),
            MakeAndModel: sdk.String("error"),
            Name: sdk.String("Frankie Thompson"),
            OrgUnitID: sdk.String("aspernatur"),
            URI: sdk.String("http://woozy-marten.org"),
            UseDriverlessConfig: sdk.Bool(false),
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("atque"),
        OauthToken: sdk.String("atque"),
        Parent: "sunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("repellendus"),
    }, operations.AdminCustomersChromePrintersCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Printer != nil {
        // handle response
    }
}
```

## AdminCustomersChromePrintersList

List printers configs.

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
    res, err := s.Customers.AdminCustomersChromePrintersList(ctx, operations.AdminCustomersChromePrintersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("dicta"),
        Filter: sdk.String("accusantium"),
        Key: sdk.String("beatae"),
        OauthToken: sdk.String("dolores"),
        OrderBy: sdk.String("enim"),
        OrgUnitID: sdk.String("laboriosam"),
        PageSize: sdk.Int64(246535),
        PageToken: sdk.String("a"),
        Parent: "molestias",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.AdminCustomersChromePrintersListSecurity{
        Option1: &operations.AdminCustomersChromePrintersListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPrintersResponse != nil {
        // handle response
    }
}
```

## AdminCustomersChromePrintersListPrinterModels

Lists the supported printer models.

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
    res, err := s.Customers.AdminCustomersChromePrintersListPrinterModels(ctx, operations.AdminCustomersChromePrintersListPrinterModelsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("adipisci"),
        Filter: sdk.String("eveniet"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("consequuntur"),
        PageSize: sdk.Int64(145870),
        PageToken: sdk.String("id"),
        Parent: "quis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reprehenderit"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("illo"),
    }, operations.AdminCustomersChromePrintersListPrinterModelsSecurity{
        Option1: &operations.AdminCustomersChromePrintersListPrinterModelsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPrinterModelsResponse != nil {
        // handle response
    }
}
```

## DirectoryCustomersGet

Retrieves a customer.

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
    res, err := s.Customers.DirectoryCustomersGet(ctx, operations.DirectoryCustomersGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("non"),
        CustomerKey: "vero",
        Fields: sdk.String("doloremque"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.DirectoryCustomersGetSecurity{
        Option1: &operations.DirectoryCustomersGetSecurityOption1{
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

## DirectoryCustomersPatch

Patches a customer.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Customers.DirectoryCustomersPatch(ctx, operations.DirectoryCustomersPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Customer: &shared.Customer{
            AlternateEmail: sdk.String("qui"),
            CustomerCreationTime: types.MustTimeFromString("2022-02-17T14:59:36.472Z"),
            CustomerDomain: sdk.String("necessitatibus"),
            Etag: sdk.String("ratione"),
            ID: sdk.String("ab8845f0-597a-460f-b2a5-4a31e94764a3"),
            Kind: sdk.String("debitis"),
            Language: sdk.String("laudantium"),
            PhoneNumber: sdk.String("eum"),
            PostalAddress: &shared.CustomerPostalAddress{
                AddressLine1: sdk.String("nemo"),
                AddressLine2: sdk.String("recusandae"),
                AddressLine3: sdk.String("esse"),
                ContactName: sdk.String("provident"),
                CountryCode: sdk.String("GM"),
                Locality: sdk.String("eum"),
                OrganizationName: sdk.String("reiciendis"),
                PostalCode: sdk.String("13063-6586"),
                Region: sdk.String("ex"),
            },
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repellat"),
        CustomerKey: "doloribus",
        Fields: sdk.String("ullam"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("earum"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.DirectoryCustomersPatchSecurity{
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

## DirectoryCustomersUpdate

Updates a customer.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Customers.DirectoryCustomersUpdate(ctx, operations.DirectoryCustomersUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Customer: &shared.Customer{
            AlternateEmail: sdk.String("modi"),
            CustomerCreationTime: types.MustTimeFromString("2021-04-23T08:23:19.189Z"),
            CustomerDomain: sdk.String("officiis"),
            Etag: sdk.String("sapiente"),
            ID: sdk.String("c1b4512c-1032-4648-9c2f-615199ebfd0e"),
            Kind: sdk.String("perspiciatis"),
            Language: sdk.String("maiores"),
            PhoneNumber: sdk.String("debitis"),
            PostalAddress: &shared.CustomerPostalAddress{
                AddressLine1: sdk.String("aliquid"),
                AddressLine2: sdk.String("porro"),
                AddressLine3: sdk.String("suscipit"),
                ContactName: sdk.String("dolorem"),
                CountryCode: sdk.String("BZ"),
                Locality: sdk.String("cumque"),
                OrganizationName: sdk.String("fuga"),
                PostalCode: sdk.String("68800"),
                Region: sdk.String("et"),
            },
        },
        AccessToken: sdk.String("ducimus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        CustomerKey: "suscipit",
        Fields: sdk.String("adipisci"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("magni"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        UploadType: sdk.String("nulla"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.DirectoryCustomersUpdateSecurity{
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
