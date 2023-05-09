# Alias

## Overview

**Operations:** Create, Get, Update, Delete, Get List

### Available Operations

* [CreateAlias](#createalias) - Create alias
* [DeleteAlias](#deletealias) - Delete alias
* [GetAlias](#getalias) - Get alias
* [GetAliases](#getaliases) - Get aliases by domain
* [UpdateAlias](#updatealias) - Update alias

## CreateAlias

This POST method creates a new alias under a specified domain. If no domain is specified in the request the alias will be attached to the default domain Short.fyi 

 **NOTE:** You can override the domain level Meta Tags and Tracking Snippets by specifying them for each URL. Any variables you add to a specific URL will always override domain level settings.

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
    res, err := s.Alias.CreateAlias(ctx, operations.CreateAliasRequest{
        CreateAliasModel: shared.CreateAliasModel{
            Destinations: []shared.DestinationModel{
                shared.DestinationModel{
                    Country: sdk.String("Namibia"),
                    Os: sdk.String("dolor"),
                    URL: "natus",
                },
            },
            Metatags: []shared.MetaTagModel{
                shared.MetaTagModel{
                    Content: "hic",
                    Name: "Wilbur Kirlin",
                },
                shared.MetaTagModel{
                    Content: "iure",
                    Name: "Dr. Rickey Boyle",
                },
            },
            Snippets: []shared.SnippetModel{
                shared.SnippetModel{
                    ID: "a2352c59-5590-47af-b1a3-a2fa94677392",
                    Parameters: map[string]string{
                        "vitae": "laborum",
                        "animi": "enim",
                    },
                },
                shared.SnippetModel{
                    ID: "2c3f5ad0-19da-41ff-a78f-097b0074f154",
                    Parameters: map[string]string{
                        "dicta": "harum",
                        "enim": "accusamus",
                    },
                },
                shared.SnippetModel{
                    ID: "6e13b99d-488e-41e9-9e45-0ad2abd44269",
                    Parameters: map[string]string{
                        "perferendis": "magni",
                        "assumenda": "ipsam",
                        "alias": "fugit",
                    },
                },
            },
        },
        AliasName: sdk.String("dolorum"),
        DomainName: sdk.String("excepturi"),
    }, operations.CreateAliasSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAliasResponseModel != nil {
        // handle response
    }
}
```

## DeleteAlias

Deletes a single alias by providing alias and domain. If no domain is provided the API will search for the matching alias within the Short.fyi domain

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
    res, err := s.Alias.DeleteAlias(ctx, operations.DeleteAliasRequest{
        AliasName: "tempora",
        DomainName: sdk.String("facilis"),
    }, operations.DeleteAliasSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAlias

Get detailed information for a single alias by providing its alias and domain name

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
    res, err := s.Alias.GetAlias(ctx, operations.GetAliasRequest{
        AliasName: "tempore",
        DomainName: sdk.String("labore"),
    }, operations.GetAliasSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AliasModel != nil {
        // handle response
    }
}
```

## GetAliases

Obtain a list of all alias names associated with your account and given domain. Result array is in descending order by creation date. 

 If no domain is specified you will receive a list of all the alias names you have created using the Short.fyi domain. 

 If there are more results than the limit for the request the response will return you a value in lastId property you can specify it in the continueFrom query parameter to get the next batch of records.

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
    res, err := s.Alias.GetAliases(ctx, operations.GetAliasesRequest{
        ContinueFrom: sdk.String("delectus"),
        DomainName: sdk.String("eum"),
        Limit: sdk.Int64(248753),
    }, operations.GetAliasesSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAliasesModel != nil {
        // handle response
    }
}
```

## UpdateAlias

Update a single short URL by providing its alias and domain as a parameter, and the data you wish to update in the body of the request. If no domain is provided you will receive the alias found attached to the Short.fyi domain (if it exists and is linked to your account!)

 ### NOTE: 

 ( * )If you add a metatag or a snippet with a same name to an alias and the domain it's related to, the value will be taken from the alias and not the domain 

 ( ** ) When you update any array property (like destinations) the block is updated **completely** so you have to specify the old records to avoid deleting them

 ( *** ) The method updates only the specified properties so if there was no change in one of them you don't have to send it.

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
    res, err := s.Alias.UpdateAlias(ctx, operations.UpdateAliasRequest{
        CreateAliasModel: shared.CreateAliasModel{
            Destinations: []shared.DestinationModel{
                shared.DestinationModel{
                    Country: sdk.String("Micronesia"),
                    Os: sdk.String("aliquid"),
                    URL: "provident",
                },
                shared.DestinationModel{
                    Country: sdk.String("Tokelau"),
                    Os: sdk.String("sint"),
                    URL: "officia",
                },
                shared.DestinationModel{
                    Country: sdk.String("Cyprus"),
                    Os: sdk.String("debitis"),
                    URL: "a",
                },
                shared.DestinationModel{
                    Country: sdk.String("Palau"),
                    Os: sdk.String("in"),
                    URL: "in",
                },
            },
            Metatags: []shared.MetaTagModel{
                shared.MetaTagModel{
                    Content: "maiores",
                    Name: "Keith Gulgowski",
                },
                shared.MetaTagModel{
                    Content: "ea",
                    Name: "Kayla Thompson",
                },
                shared.MetaTagModel{
                    Content: "enim",
                    Name: "Toby Pouros",
                },
                shared.MetaTagModel{
                    Content: "id",
                    Name: "Jaime Will",
                },
            },
            Snippets: []shared.SnippetModel{
                shared.SnippetModel{
                    ID: "6997074b-a446-49b6-a214-1959890afa56",
                    Parameters: map[string]string{
                        "necessitatibus": "odit",
                    },
                },
                shared.SnippetModel{
                    ID: "516fe4c8-b711-4e5b-bfd2-ed028921cddc",
                    Parameters: map[string]string{
                        "excepturi": "odit",
                        "ea": "accusantium",
                    },
                },
            },
        },
        AliasName: "ab",
        DomainName: sdk.String("maiores"),
    }, operations.UpdateAliasSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
