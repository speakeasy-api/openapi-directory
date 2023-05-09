# Cards

## Overview

Definitions and configuration for the CRM cards your app can display.

### Available Operations

* [DeleteCrmV3ExtensionsCardsAppIDCardIDArchive](#deletecrmv3extensionscardsappidcardidarchive) - Delete a card
* [GetCrmV3ExtensionsCardsAppIDCardIDGetByID](#getcrmv3extensionscardsappidcardidgetbyid) - Get a card.
* [GetCrmV3ExtensionsCardsAppIDGetAll](#getcrmv3extensionscardsappidgetall) - Get all cards
* [PatchCrmV3ExtensionsCardsAppIDCardIDUpdate](#patchcrmv3extensionscardsappidcardidupdate) - Update a card
* [PostCrmV3ExtensionsCardsAppIDCreate](#postcrmv3extensionscardsappidcreate) - Create a new card

## DeleteCrmV3ExtensionsCardsAppIDCardIDArchive

Permanently deletes a card definition with the given ID. Once deleted, data fetch requests for this card will no longer be sent to your service. This can't be undone.

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
    res, err := s.Cards.DeleteCrmV3ExtensionsCardsAppIDCardIDArchive(ctx, operations.DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveRequest{
        AppID: 715190,
        CardID: "quibusdam",
    }, operations.DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCrmV3ExtensionsCardsAppIDCardIDGetByID

Returns the definition for a card with the given ID.

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
    res, err := s.Cards.GetCrmV3ExtensionsCardsAppIDCardIDGetByID(ctx, operations.GetCrmV3ExtensionsCardsAppIDCardIDGetByIDRequest{
        AppID: 602763,
        CardID: "nulla",
    }, operations.GetCrmV3ExtensionsCardsAppIDCardIDGetByIDSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CardResponse != nil {
        // handle response
    }
}
```

## GetCrmV3ExtensionsCardsAppIDGetAll

Returns a list of cards for a given app.

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
    res, err := s.Cards.GetCrmV3ExtensionsCardsAppIDGetAll(ctx, operations.GetCrmV3ExtensionsCardsAppIDGetAllRequest{
        AppID: 544883,
    }, operations.GetCrmV3ExtensionsCardsAppIDGetAllSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CardListResponse != nil {
        // handle response
    }
}
```

## PatchCrmV3ExtensionsCardsAppIDCardIDUpdate

Update a card definition with new details.

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
    res, err := s.Cards.PatchCrmV3ExtensionsCardsAppIDCardIDUpdate(ctx, operations.PatchCrmV3ExtensionsCardsAppIDCardIDUpdateRequest{
        CardPatchRequest: shared.CardPatchRequest{
            Actions: &shared.CardActions{
                BaseUrls: []string{
                    "vel",
                    "error",
                    "deserunt",
                    "suscipit",
                },
            },
            Display: &shared.CardDisplayBody{
                Properties: []shared.CardDisplayProperty{
                    shared.CardDisplayProperty{
                        DataType: shared.CardDisplayPropertyDataTypeEnumDate,
                        Label: "debitis",
                        Name: "Lucia Goldner",
                        Options: []shared.DisplayOption{
                            shared.DisplayOption{
                                Label: "placeat",
                                Name: "Ted Mante",
                                Type: shared.DisplayOptionTypeEnumInfo,
                            },
                            shared.DisplayOption{
                                Label: "ab",
                                Name: "Mrs. Marie O'Connell",
                                Type: shared.DisplayOptionTypeEnumInfo,
                            },
                            shared.DisplayOption{
                                Label: "quo",
                                Name: "Teri Strosin",
                                Type: shared.DisplayOptionTypeEnumDanger,
                            },
                            shared.DisplayOption{
                                Label: "quod",
                                Name: "Deanna Sauer MD",
                                Type: shared.DisplayOptionTypeEnumDanger,
                            },
                        },
                    },
                    shared.CardDisplayProperty{
                        DataType: shared.CardDisplayPropertyDataTypeEnumLink,
                        Label: "fugit",
                        Name: "Irvin Rosenbaum III",
                        Options: []shared.DisplayOption{
                            shared.DisplayOption{
                                Label: "modi",
                                Name: "Krista Rippin",
                                Type: shared.DisplayOptionTypeEnumWarning,
                            },
                            shared.DisplayOption{
                                Label: "aspernatur",
                                Name: "Cathy Mosciski",
                                Type: shared.DisplayOptionTypeEnumSuccess,
                            },
                        },
                    },
                },
            },
            Fetch: &shared.CardFetchBodyPatch{
                ObjectTypes: []shared.CardObjectTypeBody{
                    shared.CardObjectTypeBody{
                        Name: shared.CardObjectTypeBodyNameEnumDeals,
                        PropertiesToSend: []string{
                            "saepe",
                            "fuga",
                            "in",
                            "corporis",
                        },
                    },
                    shared.CardObjectTypeBody{
                        Name: shared.CardObjectTypeBodyNameEnumCompanies,
                        PropertiesToSend: []string{
                            "saepe",
                            "quidem",
                        },
                    },
                    shared.CardObjectTypeBody{
                        Name: shared.CardObjectTypeBodyNameEnumContacts,
                        PropertiesToSend: []string{
                            "reiciendis",
                        },
                    },
                },
                TargetURL: sdk.String("est"),
            },
            Title: sdk.String("Miss"),
        },
        AppID: 670638,
        CardID: "dolores",
    }, operations.PatchCrmV3ExtensionsCardsAppIDCardIDUpdateSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CardResponse != nil {
        // handle response
    }
}
```

## PostCrmV3ExtensionsCardsAppIDCreate

Defines a new card that will become active on an account when this app is installed.

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
    res, err := s.Cards.PostCrmV3ExtensionsCardsAppIDCreate(ctx, operations.PostCrmV3ExtensionsCardsAppIDCreateRequest{
        CardCreateRequest: shared.CardCreateRequest{
            Actions: shared.CardActions{
                BaseUrls: []string{
                    "corporis",
                },
            },
            Display: shared.CardDisplayBody{
                Properties: []shared.CardDisplayProperty{
                    shared.CardDisplayProperty{
                        DataType: shared.CardDisplayPropertyDataTypeEnumNumeric,
                        Label: "enim",
                        Name: "Corey Hane III",
                        Options: []shared.DisplayOption{
                            shared.DisplayOption{
                                Label: "doloribus",
                                Name: "Juan O'Hara",
                                Type: shared.DisplayOptionTypeEnumDefault,
                            },
                            shared.DisplayOption{
                                Label: "repellat",
                                Name: "Tracy Fritsch",
                                Type: shared.DisplayOptionTypeEnumWarning,
                            },
                            shared.DisplayOption{
                                Label: "velit",
                                Name: "Miss Eugene Hauck",
                                Type: shared.DisplayOptionTypeEnumSuccess,
                            },
                        },
                    },
                },
            },
            Fetch: shared.CardFetchBody{
                ObjectTypes: []shared.CardObjectTypeBody{
                    shared.CardObjectTypeBody{
                        Name: shared.CardObjectTypeBodyNameEnumTickets,
                        PropertiesToSend: []string{
                            "tenetur",
                        },
                    },
                },
                TargetURL: "ipsam",
            },
            Title: "Miss",
        },
        AppID: 820994,
    }, operations.PostCrmV3ExtensionsCardsAppIDCreateSecurity{
        DeveloperHapikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CardResponse != nil {
        // handle response
    }
}
```
