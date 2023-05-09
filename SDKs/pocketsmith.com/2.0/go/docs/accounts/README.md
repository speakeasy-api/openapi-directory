# Accounts

### Available Operations

* [DeleteAccountsID](#deleteaccountsid) - Delete account
* [GetAccountsID](#getaccountsid) - Get account
* [GetInstitutionsIDAccounts](#getinstitutionsidaccounts) - List accounts in institution
* [GetUsersIDAccounts](#getusersidaccounts) - List accounts in user
* [PostUsersIDAccounts](#postusersidaccounts) - Create an account in user
* [PutAccountsID](#putaccountsid) - Update account
* [PutUsersIDAccounts](#putusersidaccounts) - Update the display order of accounts in user

## DeleteAccountsID

Deletes an account and all its data by ID, optionally merge scenarios into another account.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Accounts.DeleteAccountsID(ctx, operations.DeleteAccountsIDRequest{
        ID: 592845,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAccountsID

Gets an account by its ID.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Accounts.GetAccountsID(ctx, operations.GetAccountsIDRequest{
        ID: 715190,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## GetInstitutionsIDAccounts

Lists accounts belonging to an institution by its ID.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Accounts.GetInstitutionsIDAccounts(ctx, operations.GetInstitutionsIDAccountsRequest{
        ID: 844266,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Accounts != nil {
        // handle response
    }
}
```

## GetUsersIDAccounts

Lists all accounts belonging to the user by their ID.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Accounts.GetUsersIDAccounts(ctx, operations.GetUsersIDAccountsRequest{
        ID: 602763,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Accounts != nil {
        // handle response
    }
}
```

## PostUsersIDAccounts

Creates and returns an account belonging to the user by their ID.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Accounts.PostUsersIDAccounts(ctx, operations.PostUsersIDAccountsRequest{
        RequestBody: &operations.PostUsersIDAccountsRequestBody{
            CurrencyCode: "NZD",
            InstitutionID: 42,
            Title: "Foo",
            Type: operations.PostUsersIDAccountsRequestBodyTypeEnumBank,
        },
        ID: 857946,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## PutAccountsID

Updates and returns an account by its ID.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Accounts.PutAccountsID(ctx, operations.PutAccountsIDRequest{
        RequestBody: &operations.PutAccountsIDRequestBody{
            CurrencyCode: sdk.String("NZD"),
            IsNetWorth: sdk.Bool(false),
            Title: sdk.String("Savings"),
            Type: operations.PutAccountsIDRequestBodyTypeEnumBank.ToPointer(),
        },
        ID: 544883,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## PutUsersIDAccounts

Updates the display order of accounts belonging to the user, by accepting an array of accounts in their new display order.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Accounts.PutUsersIDAccounts(ctx, operations.PutUsersIDAccountsRequest{
        RequestBody: &operations.PutUsersIDAccountsRequestBody{
            Accounts: []shared.Account{
                shared.Account{
                    CreatedAt: sdk.String("2018-02-27"),
                    CurrencyCode: sdk.String("NZD"),
                    CurrentBalance: sdk.Float64(2694.39),
                    CurrentBalanceDate: sdk.String("2018-02-27"),
                    CurrentBalanceExchangeRate: sdk.Float64(1.5),
                    CurrentBalanceInBaseCurrency: sdk.Float64(4041.59),
                    ID: sdk.Int64(42),
                    IsNetWorth: sdk.Bool(false),
                    PrimaryScenario: &shared.Scenario{
                        AchieveDate: sdk.String("vel"),
                        ClosingBalance: sdk.Float64(5431.2),
                        ClosingBalanceDate: sdk.String("2018-02-27"),
                        CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                        CurrentBalance: sdk.Float64(5431.2),
                        CurrentBalanceDate: sdk.String("2018-02-27"),
                        CurrentBalanceExchangeRate: sdk.Float64(1.5),
                        CurrentBalanceInBaseCurrency: sdk.Float64(8146.8),
                        Description: sdk.String("error"),
                        ID: sdk.Int64(42),
                        InterestRate: sdk.Float64(2.4),
                        InterestRateRepeatID: sdk.Int64(4),
                        MaximumValue: sdk.Float64(42),
                        MinimumValue: sdk.Float64(4000),
                        SafeBalance: sdk.Float64(5431.2),
                        SafeBalanceInBaseCurrency: sdk.Float64(8146.8),
                        StartingBalance: sdk.Float64(2450),
                        StartingBalanceDate: sdk.String("2018-02-27"),
                        Title: sdk.String("Wedding"),
                        Type: shared.ScenarioTypeEnumNoInterest.ToPointer(),
                        UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                    },
                    PrimaryTransactionAccount: &shared.TransactionAccount{
                        CreatedAt: sdk.String("2015-03-17T02:42:10Z"),
                        CurrencyCode: sdk.String("NZD"),
                        CurrentBalance: sdk.Float64(2694.39),
                        CurrentBalanceDate: sdk.String("2015-07-03"),
                        CurrentBalanceExchangeRate: sdk.Float64(1.5),
                        CurrentBalanceInBaseCurrency: sdk.Float64(4041.59),
                        ID: sdk.Int64(96027),
                        Institution: &shared.Institution{
                            CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            CurrencyCode: sdk.String("NZD"),
                            ID: sdk.Int64(57),
                            Title: sdk.String("Bank of Foo"),
                            UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                        },
                        Name: sdk.String("Sample Credit"),
                        Number: sdk.String("ASBCRD44554"),
                        SafeBalance: sdk.Float64(2694.39),
                        SafeBalanceInBaseCurrency: sdk.Float64(4041.59),
                        StartingBalance: sdk.Float64(3547.45),
                        StartingBalanceDate: sdk.String("2015-03-15"),
                        Type: shared.TransactionAccountTypeEnumBank.ToPointer(),
                        UpdatedAt: sdk.String("2015-07-02T22:14:49Z"),
                    },
                    SafeBalance: sdk.Float64(2694.39),
                    SafeBalanceInBaseCurrency: sdk.Float64(4041.59),
                    Scenarios: []shared.Scenario{
                        shared.Scenario{
                            AchieveDate: sdk.String("suscipit"),
                            ClosingBalance: sdk.Float64(5431.2),
                            ClosingBalanceDate: sdk.String("2018-02-27"),
                            CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            CurrentBalance: sdk.Float64(5431.2),
                            CurrentBalanceDate: sdk.String("2018-02-27"),
                            CurrentBalanceExchangeRate: sdk.Float64(1.5),
                            CurrentBalanceInBaseCurrency: sdk.Float64(8146.8),
                            Description: sdk.String("iure"),
                            ID: sdk.Int64(42),
                            InterestRate: sdk.Float64(2.4),
                            InterestRateRepeatID: sdk.Int64(4),
                            MaximumValue: sdk.Float64(42),
                            MinimumValue: sdk.Float64(4000),
                            SafeBalance: sdk.Float64(5431.2),
                            SafeBalanceInBaseCurrency: sdk.Float64(8146.8),
                            StartingBalance: sdk.Float64(2450),
                            StartingBalanceDate: sdk.String("2018-02-27"),
                            Title: sdk.String("Wedding"),
                            Type: shared.ScenarioTypeEnumNoInterest.ToPointer(),
                            UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                        },
                        shared.Scenario{
                            AchieveDate: sdk.String("magnam"),
                            ClosingBalance: sdk.Float64(5431.2),
                            ClosingBalanceDate: sdk.String("2018-02-27"),
                            CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            CurrentBalance: sdk.Float64(5431.2),
                            CurrentBalanceDate: sdk.String("2018-02-27"),
                            CurrentBalanceExchangeRate: sdk.Float64(1.5),
                            CurrentBalanceInBaseCurrency: sdk.Float64(8146.8),
                            Description: sdk.String("debitis"),
                            ID: sdk.Int64(42),
                            InterestRate: sdk.Float64(2.4),
                            InterestRateRepeatID: sdk.Int64(4),
                            MaximumValue: sdk.Float64(42),
                            MinimumValue: sdk.Float64(4000),
                            SafeBalance: sdk.Float64(5431.2),
                            SafeBalanceInBaseCurrency: sdk.Float64(8146.8),
                            StartingBalance: sdk.Float64(2450),
                            StartingBalanceDate: sdk.String("2018-02-27"),
                            Title: sdk.String("Wedding"),
                            Type: shared.ScenarioTypeEnumNoInterest.ToPointer(),
                            UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                        },
                        shared.Scenario{
                            AchieveDate: sdk.String("ipsa"),
                            ClosingBalance: sdk.Float64(5431.2),
                            ClosingBalanceDate: sdk.String("2018-02-27"),
                            CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            CurrentBalance: sdk.Float64(5431.2),
                            CurrentBalanceDate: sdk.String("2018-02-27"),
                            CurrentBalanceExchangeRate: sdk.Float64(1.5),
                            CurrentBalanceInBaseCurrency: sdk.Float64(8146.8),
                            Description: sdk.String("delectus"),
                            ID: sdk.Int64(42),
                            InterestRate: sdk.Float64(2.4),
                            InterestRateRepeatID: sdk.Int64(4),
                            MaximumValue: sdk.Float64(42),
                            MinimumValue: sdk.Float64(4000),
                            SafeBalance: sdk.Float64(5431.2),
                            SafeBalanceInBaseCurrency: sdk.Float64(8146.8),
                            StartingBalance: sdk.Float64(2450),
                            StartingBalanceDate: sdk.String("2018-02-27"),
                            Title: sdk.String("Wedding"),
                            Type: shared.ScenarioTypeEnumNoInterest.ToPointer(),
                            UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                        },
                    },
                    Title: sdk.String("Bank of Foo"),
                    TransactionAccounts: []shared.TransactionAccount{
                        shared.TransactionAccount{
                            CreatedAt: sdk.String("2015-03-17T02:42:10Z"),
                            CurrencyCode: sdk.String("NZD"),
                            CurrentBalance: sdk.Float64(2694.39),
                            CurrentBalanceDate: sdk.String("2015-07-03"),
                            CurrentBalanceExchangeRate: sdk.Float64(1.5),
                            CurrentBalanceInBaseCurrency: sdk.Float64(4041.59),
                            ID: sdk.Int64(96027),
                            Institution: &shared.Institution{
                                CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                                CurrencyCode: sdk.String("NZD"),
                                ID: sdk.Int64(57),
                                Title: sdk.String("Bank of Foo"),
                                UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            },
                            Name: sdk.String("Sample Credit"),
                            Number: sdk.String("ASBCRD44554"),
                            SafeBalance: sdk.Float64(2694.39),
                            SafeBalanceInBaseCurrency: sdk.Float64(4041.59),
                            StartingBalance: sdk.Float64(3547.45),
                            StartingBalanceDate: sdk.String("2015-03-15"),
                            Type: shared.TransactionAccountTypeEnumBank.ToPointer(),
                            UpdatedAt: sdk.String("2015-07-02T22:14:49Z"),
                        },
                        shared.TransactionAccount{
                            CreatedAt: sdk.String("2015-03-17T02:42:10Z"),
                            CurrencyCode: sdk.String("NZD"),
                            CurrentBalance: sdk.Float64(2694.39),
                            CurrentBalanceDate: sdk.String("2015-07-03"),
                            CurrentBalanceExchangeRate: sdk.Float64(1.5),
                            CurrentBalanceInBaseCurrency: sdk.Float64(4041.59),
                            ID: sdk.Int64(96027),
                            Institution: &shared.Institution{
                                CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                                CurrencyCode: sdk.String("NZD"),
                                ID: sdk.Int64(57),
                                Title: sdk.String("Bank of Foo"),
                                UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            },
                            Name: sdk.String("Sample Credit"),
                            Number: sdk.String("ASBCRD44554"),
                            SafeBalance: sdk.Float64(2694.39),
                            SafeBalanceInBaseCurrency: sdk.Float64(4041.59),
                            StartingBalance: sdk.Float64(3547.45),
                            StartingBalanceDate: sdk.String("2015-03-15"),
                            Type: shared.TransactionAccountTypeEnumBank.ToPointer(),
                            UpdatedAt: sdk.String("2015-07-02T22:14:49Z"),
                        },
                    },
                    Type: shared.AccountTypeEnumBank.ToPointer(),
                    UpdatedAt: sdk.String("2018-02-27"),
                },
                shared.Account{
                    CreatedAt: sdk.String("2018-02-27"),
                    CurrencyCode: sdk.String("NZD"),
                    CurrentBalance: sdk.Float64(2694.39),
                    CurrentBalanceDate: sdk.String("2018-02-27"),
                    CurrentBalanceExchangeRate: sdk.Float64(1.5),
                    CurrentBalanceInBaseCurrency: sdk.Float64(4041.59),
                    ID: sdk.Int64(42),
                    IsNetWorth: sdk.Bool(false),
                    PrimaryScenario: &shared.Scenario{
                        AchieveDate: sdk.String("suscipit"),
                        ClosingBalance: sdk.Float64(5431.2),
                        ClosingBalanceDate: sdk.String("2018-02-27"),
                        CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                        CurrentBalance: sdk.Float64(5431.2),
                        CurrentBalanceDate: sdk.String("2018-02-27"),
                        CurrentBalanceExchangeRate: sdk.Float64(1.5),
                        CurrentBalanceInBaseCurrency: sdk.Float64(8146.8),
                        Description: sdk.String("molestiae"),
                        ID: sdk.Int64(42),
                        InterestRate: sdk.Float64(2.4),
                        InterestRateRepeatID: sdk.Int64(4),
                        MaximumValue: sdk.Float64(42),
                        MinimumValue: sdk.Float64(4000),
                        SafeBalance: sdk.Float64(5431.2),
                        SafeBalanceInBaseCurrency: sdk.Float64(8146.8),
                        StartingBalance: sdk.Float64(2450),
                        StartingBalanceDate: sdk.String("2018-02-27"),
                        Title: sdk.String("Wedding"),
                        Type: shared.ScenarioTypeEnumNoInterest.ToPointer(),
                        UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                    },
                    PrimaryTransactionAccount: &shared.TransactionAccount{
                        CreatedAt: sdk.String("2015-03-17T02:42:10Z"),
                        CurrencyCode: sdk.String("NZD"),
                        CurrentBalance: sdk.Float64(2694.39),
                        CurrentBalanceDate: sdk.String("2015-07-03"),
                        CurrentBalanceExchangeRate: sdk.Float64(1.5),
                        CurrentBalanceInBaseCurrency: sdk.Float64(4041.59),
                        ID: sdk.Int64(96027),
                        Institution: &shared.Institution{
                            CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            CurrencyCode: sdk.String("NZD"),
                            ID: sdk.Int64(57),
                            Title: sdk.String("Bank of Foo"),
                            UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                        },
                        Name: sdk.String("Sample Credit"),
                        Number: sdk.String("ASBCRD44554"),
                        SafeBalance: sdk.Float64(2694.39),
                        SafeBalanceInBaseCurrency: sdk.Float64(4041.59),
                        StartingBalance: sdk.Float64(3547.45),
                        StartingBalanceDate: sdk.String("2015-03-15"),
                        Type: shared.TransactionAccountTypeEnumBank.ToPointer(),
                        UpdatedAt: sdk.String("2015-07-02T22:14:49Z"),
                    },
                    SafeBalance: sdk.Float64(2694.39),
                    SafeBalanceInBaseCurrency: sdk.Float64(4041.59),
                    Scenarios: []shared.Scenario{
                        shared.Scenario{
                            AchieveDate: sdk.String("placeat"),
                            ClosingBalance: sdk.Float64(5431.2),
                            ClosingBalanceDate: sdk.String("2018-02-27"),
                            CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            CurrentBalance: sdk.Float64(5431.2),
                            CurrentBalanceDate: sdk.String("2018-02-27"),
                            CurrentBalanceExchangeRate: sdk.Float64(1.5),
                            CurrentBalanceInBaseCurrency: sdk.Float64(8146.8),
                            Description: sdk.String("voluptatum"),
                            ID: sdk.Int64(42),
                            InterestRate: sdk.Float64(2.4),
                            InterestRateRepeatID: sdk.Int64(4),
                            MaximumValue: sdk.Float64(42),
                            MinimumValue: sdk.Float64(4000),
                            SafeBalance: sdk.Float64(5431.2),
                            SafeBalanceInBaseCurrency: sdk.Float64(8146.8),
                            StartingBalance: sdk.Float64(2450),
                            StartingBalanceDate: sdk.String("2018-02-27"),
                            Title: sdk.String("Wedding"),
                            Type: shared.ScenarioTypeEnumNoInterest.ToPointer(),
                            UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                        },
                        shared.Scenario{
                            AchieveDate: sdk.String("iusto"),
                            ClosingBalance: sdk.Float64(5431.2),
                            ClosingBalanceDate: sdk.String("2018-02-27"),
                            CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            CurrentBalance: sdk.Float64(5431.2),
                            CurrentBalanceDate: sdk.String("2018-02-27"),
                            CurrentBalanceExchangeRate: sdk.Float64(1.5),
                            CurrentBalanceInBaseCurrency: sdk.Float64(8146.8),
                            Description: sdk.String("excepturi"),
                            ID: sdk.Int64(42),
                            InterestRate: sdk.Float64(2.4),
                            InterestRateRepeatID: sdk.Int64(4),
                            MaximumValue: sdk.Float64(42),
                            MinimumValue: sdk.Float64(4000),
                            SafeBalance: sdk.Float64(5431.2),
                            SafeBalanceInBaseCurrency: sdk.Float64(8146.8),
                            StartingBalance: sdk.Float64(2450),
                            StartingBalanceDate: sdk.String("2018-02-27"),
                            Title: sdk.String("Wedding"),
                            Type: shared.ScenarioTypeEnumNoInterest.ToPointer(),
                            UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                        },
                        shared.Scenario{
                            AchieveDate: sdk.String("nisi"),
                            ClosingBalance: sdk.Float64(5431.2),
                            ClosingBalanceDate: sdk.String("2018-02-27"),
                            CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            CurrentBalance: sdk.Float64(5431.2),
                            CurrentBalanceDate: sdk.String("2018-02-27"),
                            CurrentBalanceExchangeRate: sdk.Float64(1.5),
                            CurrentBalanceInBaseCurrency: sdk.Float64(8146.8),
                            Description: sdk.String("recusandae"),
                            ID: sdk.Int64(42),
                            InterestRate: sdk.Float64(2.4),
                            InterestRateRepeatID: sdk.Int64(4),
                            MaximumValue: sdk.Float64(42),
                            MinimumValue: sdk.Float64(4000),
                            SafeBalance: sdk.Float64(5431.2),
                            SafeBalanceInBaseCurrency: sdk.Float64(8146.8),
                            StartingBalance: sdk.Float64(2450),
                            StartingBalanceDate: sdk.String("2018-02-27"),
                            Title: sdk.String("Wedding"),
                            Type: shared.ScenarioTypeEnumNoInterest.ToPointer(),
                            UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                        },
                        shared.Scenario{
                            AchieveDate: sdk.String("temporibus"),
                            ClosingBalance: sdk.Float64(5431.2),
                            ClosingBalanceDate: sdk.String("2018-02-27"),
                            CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            CurrentBalance: sdk.Float64(5431.2),
                            CurrentBalanceDate: sdk.String("2018-02-27"),
                            CurrentBalanceExchangeRate: sdk.Float64(1.5),
                            CurrentBalanceInBaseCurrency: sdk.Float64(8146.8),
                            Description: sdk.String("ab"),
                            ID: sdk.Int64(42),
                            InterestRate: sdk.Float64(2.4),
                            InterestRateRepeatID: sdk.Int64(4),
                            MaximumValue: sdk.Float64(42),
                            MinimumValue: sdk.Float64(4000),
                            SafeBalance: sdk.Float64(5431.2),
                            SafeBalanceInBaseCurrency: sdk.Float64(8146.8),
                            StartingBalance: sdk.Float64(2450),
                            StartingBalanceDate: sdk.String("2018-02-27"),
                            Title: sdk.String("Wedding"),
                            Type: shared.ScenarioTypeEnumNoInterest.ToPointer(),
                            UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                        },
                    },
                    Title: sdk.String("Bank of Foo"),
                    TransactionAccounts: []shared.TransactionAccount{
                        shared.TransactionAccount{
                            CreatedAt: sdk.String("2015-03-17T02:42:10Z"),
                            CurrencyCode: sdk.String("NZD"),
                            CurrentBalance: sdk.Float64(2694.39),
                            CurrentBalanceDate: sdk.String("2015-07-03"),
                            CurrentBalanceExchangeRate: sdk.Float64(1.5),
                            CurrentBalanceInBaseCurrency: sdk.Float64(4041.59),
                            ID: sdk.Int64(96027),
                            Institution: &shared.Institution{
                                CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                                CurrencyCode: sdk.String("NZD"),
                                ID: sdk.Int64(57),
                                Title: sdk.String("Bank of Foo"),
                                UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            },
                            Name: sdk.String("Sample Credit"),
                            Number: sdk.String("ASBCRD44554"),
                            SafeBalance: sdk.Float64(2694.39),
                            SafeBalanceInBaseCurrency: sdk.Float64(4041.59),
                            StartingBalance: sdk.Float64(3547.45),
                            StartingBalanceDate: sdk.String("2015-03-15"),
                            Type: shared.TransactionAccountTypeEnumBank.ToPointer(),
                            UpdatedAt: sdk.String("2015-07-02T22:14:49Z"),
                        },
                        shared.TransactionAccount{
                            CreatedAt: sdk.String("2015-03-17T02:42:10Z"),
                            CurrencyCode: sdk.String("NZD"),
                            CurrentBalance: sdk.Float64(2694.39),
                            CurrentBalanceDate: sdk.String("2015-07-03"),
                            CurrentBalanceExchangeRate: sdk.Float64(1.5),
                            CurrentBalanceInBaseCurrency: sdk.Float64(4041.59),
                            ID: sdk.Int64(96027),
                            Institution: &shared.Institution{
                                CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                                CurrencyCode: sdk.String("NZD"),
                                ID: sdk.Int64(57),
                                Title: sdk.String("Bank of Foo"),
                                UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            },
                            Name: sdk.String("Sample Credit"),
                            Number: sdk.String("ASBCRD44554"),
                            SafeBalance: sdk.Float64(2694.39),
                            SafeBalanceInBaseCurrency: sdk.Float64(4041.59),
                            StartingBalance: sdk.Float64(3547.45),
                            StartingBalanceDate: sdk.String("2015-03-15"),
                            Type: shared.TransactionAccountTypeEnumBank.ToPointer(),
                            UpdatedAt: sdk.String("2015-07-02T22:14:49Z"),
                        },
                    },
                    Type: shared.AccountTypeEnumBank.ToPointer(),
                    UpdatedAt: sdk.String("2018-02-27"),
                },
                shared.Account{
                    CreatedAt: sdk.String("2018-02-27"),
                    CurrencyCode: sdk.String("NZD"),
                    CurrentBalance: sdk.Float64(2694.39),
                    CurrentBalanceDate: sdk.String("2018-02-27"),
                    CurrentBalanceExchangeRate: sdk.Float64(1.5),
                    CurrentBalanceInBaseCurrency: sdk.Float64(4041.59),
                    ID: sdk.Int64(42),
                    IsNetWorth: sdk.Bool(false),
                    PrimaryScenario: &shared.Scenario{
                        AchieveDate: sdk.String("veritatis"),
                        ClosingBalance: sdk.Float64(5431.2),
                        ClosingBalanceDate: sdk.String("2018-02-27"),
                        CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                        CurrentBalance: sdk.Float64(5431.2),
                        CurrentBalanceDate: sdk.String("2018-02-27"),
                        CurrentBalanceExchangeRate: sdk.Float64(1.5),
                        CurrentBalanceInBaseCurrency: sdk.Float64(8146.8),
                        Description: sdk.String("deserunt"),
                        ID: sdk.Int64(42),
                        InterestRate: sdk.Float64(2.4),
                        InterestRateRepeatID: sdk.Int64(4),
                        MaximumValue: sdk.Float64(42),
                        MinimumValue: sdk.Float64(4000),
                        SafeBalance: sdk.Float64(5431.2),
                        SafeBalanceInBaseCurrency: sdk.Float64(8146.8),
                        StartingBalance: sdk.Float64(2450),
                        StartingBalanceDate: sdk.String("2018-02-27"),
                        Title: sdk.String("Wedding"),
                        Type: shared.ScenarioTypeEnumNoInterest.ToPointer(),
                        UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                    },
                    PrimaryTransactionAccount: &shared.TransactionAccount{
                        CreatedAt: sdk.String("2015-03-17T02:42:10Z"),
                        CurrencyCode: sdk.String("NZD"),
                        CurrentBalance: sdk.Float64(2694.39),
                        CurrentBalanceDate: sdk.String("2015-07-03"),
                        CurrentBalanceExchangeRate: sdk.Float64(1.5),
                        CurrentBalanceInBaseCurrency: sdk.Float64(4041.59),
                        ID: sdk.Int64(96027),
                        Institution: &shared.Institution{
                            CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            CurrencyCode: sdk.String("NZD"),
                            ID: sdk.Int64(57),
                            Title: sdk.String("Bank of Foo"),
                            UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                        },
                        Name: sdk.String("Sample Credit"),
                        Number: sdk.String("ASBCRD44554"),
                        SafeBalance: sdk.Float64(2694.39),
                        SafeBalanceInBaseCurrency: sdk.Float64(4041.59),
                        StartingBalance: sdk.Float64(3547.45),
                        StartingBalanceDate: sdk.String("2015-03-15"),
                        Type: shared.TransactionAccountTypeEnumBank.ToPointer(),
                        UpdatedAt: sdk.String("2015-07-02T22:14:49Z"),
                    },
                    SafeBalance: sdk.Float64(2694.39),
                    SafeBalanceInBaseCurrency: sdk.Float64(4041.59),
                    Scenarios: []shared.Scenario{
                        shared.Scenario{
                            AchieveDate: sdk.String("ipsam"),
                            ClosingBalance: sdk.Float64(5431.2),
                            ClosingBalanceDate: sdk.String("2018-02-27"),
                            CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            CurrentBalance: sdk.Float64(5431.2),
                            CurrentBalanceDate: sdk.String("2018-02-27"),
                            CurrentBalanceExchangeRate: sdk.Float64(1.5),
                            CurrentBalanceInBaseCurrency: sdk.Float64(8146.8),
                            Description: sdk.String("repellendus"),
                            ID: sdk.Int64(42),
                            InterestRate: sdk.Float64(2.4),
                            InterestRateRepeatID: sdk.Int64(4),
                            MaximumValue: sdk.Float64(42),
                            MinimumValue: sdk.Float64(4000),
                            SafeBalance: sdk.Float64(5431.2),
                            SafeBalanceInBaseCurrency: sdk.Float64(8146.8),
                            StartingBalance: sdk.Float64(2450),
                            StartingBalanceDate: sdk.String("2018-02-27"),
                            Title: sdk.String("Wedding"),
                            Type: shared.ScenarioTypeEnumNoInterest.ToPointer(),
                            UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                        },
                    },
                    Title: sdk.String("Bank of Foo"),
                    TransactionAccounts: []shared.TransactionAccount{
                        shared.TransactionAccount{
                            CreatedAt: sdk.String("2015-03-17T02:42:10Z"),
                            CurrencyCode: sdk.String("NZD"),
                            CurrentBalance: sdk.Float64(2694.39),
                            CurrentBalanceDate: sdk.String("2015-07-03"),
                            CurrentBalanceExchangeRate: sdk.Float64(1.5),
                            CurrentBalanceInBaseCurrency: sdk.Float64(4041.59),
                            ID: sdk.Int64(96027),
                            Institution: &shared.Institution{
                                CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                                CurrencyCode: sdk.String("NZD"),
                                ID: sdk.Int64(57),
                                Title: sdk.String("Bank of Foo"),
                                UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            },
                            Name: sdk.String("Sample Credit"),
                            Number: sdk.String("ASBCRD44554"),
                            SafeBalance: sdk.Float64(2694.39),
                            SafeBalanceInBaseCurrency: sdk.Float64(4041.59),
                            StartingBalance: sdk.Float64(3547.45),
                            StartingBalanceDate: sdk.String("2015-03-15"),
                            Type: shared.TransactionAccountTypeEnumBank.ToPointer(),
                            UpdatedAt: sdk.String("2015-07-02T22:14:49Z"),
                        },
                        shared.TransactionAccount{
                            CreatedAt: sdk.String("2015-03-17T02:42:10Z"),
                            CurrencyCode: sdk.String("NZD"),
                            CurrentBalance: sdk.Float64(2694.39),
                            CurrentBalanceDate: sdk.String("2015-07-03"),
                            CurrentBalanceExchangeRate: sdk.Float64(1.5),
                            CurrentBalanceInBaseCurrency: sdk.Float64(4041.59),
                            ID: sdk.Int64(96027),
                            Institution: &shared.Institution{
                                CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                                CurrencyCode: sdk.String("NZD"),
                                ID: sdk.Int64(57),
                                Title: sdk.String("Bank of Foo"),
                                UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            },
                            Name: sdk.String("Sample Credit"),
                            Number: sdk.String("ASBCRD44554"),
                            SafeBalance: sdk.Float64(2694.39),
                            SafeBalanceInBaseCurrency: sdk.Float64(4041.59),
                            StartingBalance: sdk.Float64(3547.45),
                            StartingBalanceDate: sdk.String("2015-03-15"),
                            Type: shared.TransactionAccountTypeEnumBank.ToPointer(),
                            UpdatedAt: sdk.String("2015-07-02T22:14:49Z"),
                        },
                        shared.TransactionAccount{
                            CreatedAt: sdk.String("2015-03-17T02:42:10Z"),
                            CurrencyCode: sdk.String("NZD"),
                            CurrentBalance: sdk.Float64(2694.39),
                            CurrentBalanceDate: sdk.String("2015-07-03"),
                            CurrentBalanceExchangeRate: sdk.Float64(1.5),
                            CurrentBalanceInBaseCurrency: sdk.Float64(4041.59),
                            ID: sdk.Int64(96027),
                            Institution: &shared.Institution{
                                CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                                CurrencyCode: sdk.String("NZD"),
                                ID: sdk.Int64(57),
                                Title: sdk.String("Bank of Foo"),
                                UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            },
                            Name: sdk.String("Sample Credit"),
                            Number: sdk.String("ASBCRD44554"),
                            SafeBalance: sdk.Float64(2694.39),
                            SafeBalanceInBaseCurrency: sdk.Float64(4041.59),
                            StartingBalance: sdk.Float64(3547.45),
                            StartingBalanceDate: sdk.String("2015-03-15"),
                            Type: shared.TransactionAccountTypeEnumBank.ToPointer(),
                            UpdatedAt: sdk.String("2015-07-02T22:14:49Z"),
                        },
                        shared.TransactionAccount{
                            CreatedAt: sdk.String("2015-03-17T02:42:10Z"),
                            CurrencyCode: sdk.String("NZD"),
                            CurrentBalance: sdk.Float64(2694.39),
                            CurrentBalanceDate: sdk.String("2015-07-03"),
                            CurrentBalanceExchangeRate: sdk.Float64(1.5),
                            CurrentBalanceInBaseCurrency: sdk.Float64(4041.59),
                            ID: sdk.Int64(96027),
                            Institution: &shared.Institution{
                                CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                                CurrencyCode: sdk.String("NZD"),
                                ID: sdk.Int64(57),
                                Title: sdk.String("Bank of Foo"),
                                UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            },
                            Name: sdk.String("Sample Credit"),
                            Number: sdk.String("ASBCRD44554"),
                            SafeBalance: sdk.Float64(2694.39),
                            SafeBalanceInBaseCurrency: sdk.Float64(4041.59),
                            StartingBalance: sdk.Float64(3547.45),
                            StartingBalanceDate: sdk.String("2015-03-15"),
                            Type: shared.TransactionAccountTypeEnumBank.ToPointer(),
                            UpdatedAt: sdk.String("2015-07-02T22:14:49Z"),
                        },
                    },
                    Type: shared.AccountTypeEnumBank.ToPointer(),
                    UpdatedAt: sdk.String("2018-02-27"),
                },
                shared.Account{
                    CreatedAt: sdk.String("2018-02-27"),
                    CurrencyCode: sdk.String("NZD"),
                    CurrentBalance: sdk.Float64(2694.39),
                    CurrentBalanceDate: sdk.String("2018-02-27"),
                    CurrentBalanceExchangeRate: sdk.Float64(1.5),
                    CurrentBalanceInBaseCurrency: sdk.Float64(4041.59),
                    ID: sdk.Int64(42),
                    IsNetWorth: sdk.Bool(false),
                    PrimaryScenario: &shared.Scenario{
                        AchieveDate: sdk.String("quo"),
                        ClosingBalance: sdk.Float64(5431.2),
                        ClosingBalanceDate: sdk.String("2018-02-27"),
                        CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                        CurrentBalance: sdk.Float64(5431.2),
                        CurrentBalanceDate: sdk.String("2018-02-27"),
                        CurrentBalanceExchangeRate: sdk.Float64(1.5),
                        CurrentBalanceInBaseCurrency: sdk.Float64(8146.8),
                        Description: sdk.String("odit"),
                        ID: sdk.Int64(42),
                        InterestRate: sdk.Float64(2.4),
                        InterestRateRepeatID: sdk.Int64(4),
                        MaximumValue: sdk.Float64(42),
                        MinimumValue: sdk.Float64(4000),
                        SafeBalance: sdk.Float64(5431.2),
                        SafeBalanceInBaseCurrency: sdk.Float64(8146.8),
                        StartingBalance: sdk.Float64(2450),
                        StartingBalanceDate: sdk.String("2018-02-27"),
                        Title: sdk.String("Wedding"),
                        Type: shared.ScenarioTypeEnumNoInterest.ToPointer(),
                        UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                    },
                    PrimaryTransactionAccount: &shared.TransactionAccount{
                        CreatedAt: sdk.String("2015-03-17T02:42:10Z"),
                        CurrencyCode: sdk.String("NZD"),
                        CurrentBalance: sdk.Float64(2694.39),
                        CurrentBalanceDate: sdk.String("2015-07-03"),
                        CurrentBalanceExchangeRate: sdk.Float64(1.5),
                        CurrentBalanceInBaseCurrency: sdk.Float64(4041.59),
                        ID: sdk.Int64(96027),
                        Institution: &shared.Institution{
                            CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            CurrencyCode: sdk.String("NZD"),
                            ID: sdk.Int64(57),
                            Title: sdk.String("Bank of Foo"),
                            UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                        },
                        Name: sdk.String("Sample Credit"),
                        Number: sdk.String("ASBCRD44554"),
                        SafeBalance: sdk.Float64(2694.39),
                        SafeBalanceInBaseCurrency: sdk.Float64(4041.59),
                        StartingBalance: sdk.Float64(3547.45),
                        StartingBalanceDate: sdk.String("2015-03-15"),
                        Type: shared.TransactionAccountTypeEnumBank.ToPointer(),
                        UpdatedAt: sdk.String("2015-07-02T22:14:49Z"),
                    },
                    SafeBalance: sdk.Float64(2694.39),
                    SafeBalanceInBaseCurrency: sdk.Float64(4041.59),
                    Scenarios: []shared.Scenario{
                        shared.Scenario{
                            AchieveDate: sdk.String("at"),
                            ClosingBalance: sdk.Float64(5431.2),
                            ClosingBalanceDate: sdk.String("2018-02-27"),
                            CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            CurrentBalance: sdk.Float64(5431.2),
                            CurrentBalanceDate: sdk.String("2018-02-27"),
                            CurrentBalanceExchangeRate: sdk.Float64(1.5),
                            CurrentBalanceInBaseCurrency: sdk.Float64(8146.8),
                            Description: sdk.String("maiores"),
                            ID: sdk.Int64(42),
                            InterestRate: sdk.Float64(2.4),
                            InterestRateRepeatID: sdk.Int64(4),
                            MaximumValue: sdk.Float64(42),
                            MinimumValue: sdk.Float64(4000),
                            SafeBalance: sdk.Float64(5431.2),
                            SafeBalanceInBaseCurrency: sdk.Float64(8146.8),
                            StartingBalance: sdk.Float64(2450),
                            StartingBalanceDate: sdk.String("2018-02-27"),
                            Title: sdk.String("Wedding"),
                            Type: shared.ScenarioTypeEnumNoInterest.ToPointer(),
                            UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                        },
                        shared.Scenario{
                            AchieveDate: sdk.String("molestiae"),
                            ClosingBalance: sdk.Float64(5431.2),
                            ClosingBalanceDate: sdk.String("2018-02-27"),
                            CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            CurrentBalance: sdk.Float64(5431.2),
                            CurrentBalanceDate: sdk.String("2018-02-27"),
                            CurrentBalanceExchangeRate: sdk.Float64(1.5),
                            CurrentBalanceInBaseCurrency: sdk.Float64(8146.8),
                            Description: sdk.String("quod"),
                            ID: sdk.Int64(42),
                            InterestRate: sdk.Float64(2.4),
                            InterestRateRepeatID: sdk.Int64(4),
                            MaximumValue: sdk.Float64(42),
                            MinimumValue: sdk.Float64(4000),
                            SafeBalance: sdk.Float64(5431.2),
                            SafeBalanceInBaseCurrency: sdk.Float64(8146.8),
                            StartingBalance: sdk.Float64(2450),
                            StartingBalanceDate: sdk.String("2018-02-27"),
                            Title: sdk.String("Wedding"),
                            Type: shared.ScenarioTypeEnumNoInterest.ToPointer(),
                            UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                        },
                        shared.Scenario{
                            AchieveDate: sdk.String("quod"),
                            ClosingBalance: sdk.Float64(5431.2),
                            ClosingBalanceDate: sdk.String("2018-02-27"),
                            CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            CurrentBalance: sdk.Float64(5431.2),
                            CurrentBalanceDate: sdk.String("2018-02-27"),
                            CurrentBalanceExchangeRate: sdk.Float64(1.5),
                            CurrentBalanceInBaseCurrency: sdk.Float64(8146.8),
                            Description: sdk.String("esse"),
                            ID: sdk.Int64(42),
                            InterestRate: sdk.Float64(2.4),
                            InterestRateRepeatID: sdk.Int64(4),
                            MaximumValue: sdk.Float64(42),
                            MinimumValue: sdk.Float64(4000),
                            SafeBalance: sdk.Float64(5431.2),
                            SafeBalanceInBaseCurrency: sdk.Float64(8146.8),
                            StartingBalance: sdk.Float64(2450),
                            StartingBalanceDate: sdk.String("2018-02-27"),
                            Title: sdk.String("Wedding"),
                            Type: shared.ScenarioTypeEnumNoInterest.ToPointer(),
                            UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                        },
                        shared.Scenario{
                            AchieveDate: sdk.String("totam"),
                            ClosingBalance: sdk.Float64(5431.2),
                            ClosingBalanceDate: sdk.String("2018-02-27"),
                            CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            CurrentBalance: sdk.Float64(5431.2),
                            CurrentBalanceDate: sdk.String("2018-02-27"),
                            CurrentBalanceExchangeRate: sdk.Float64(1.5),
                            CurrentBalanceInBaseCurrency: sdk.Float64(8146.8),
                            Description: sdk.String("porro"),
                            ID: sdk.Int64(42),
                            InterestRate: sdk.Float64(2.4),
                            InterestRateRepeatID: sdk.Int64(4),
                            MaximumValue: sdk.Float64(42),
                            MinimumValue: sdk.Float64(4000),
                            SafeBalance: sdk.Float64(5431.2),
                            SafeBalanceInBaseCurrency: sdk.Float64(8146.8),
                            StartingBalance: sdk.Float64(2450),
                            StartingBalanceDate: sdk.String("2018-02-27"),
                            Title: sdk.String("Wedding"),
                            Type: shared.ScenarioTypeEnumNoInterest.ToPointer(),
                            UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                        },
                    },
                    Title: sdk.String("Bank of Foo"),
                    TransactionAccounts: []shared.TransactionAccount{
                        shared.TransactionAccount{
                            CreatedAt: sdk.String("2015-03-17T02:42:10Z"),
                            CurrencyCode: sdk.String("NZD"),
                            CurrentBalance: sdk.Float64(2694.39),
                            CurrentBalanceDate: sdk.String("2015-07-03"),
                            CurrentBalanceExchangeRate: sdk.Float64(1.5),
                            CurrentBalanceInBaseCurrency: sdk.Float64(4041.59),
                            ID: sdk.Int64(96027),
                            Institution: &shared.Institution{
                                CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                                CurrencyCode: sdk.String("NZD"),
                                ID: sdk.Int64(57),
                                Title: sdk.String("Bank of Foo"),
                                UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            },
                            Name: sdk.String("Sample Credit"),
                            Number: sdk.String("ASBCRD44554"),
                            SafeBalance: sdk.Float64(2694.39),
                            SafeBalanceInBaseCurrency: sdk.Float64(4041.59),
                            StartingBalance: sdk.Float64(3547.45),
                            StartingBalanceDate: sdk.String("2015-03-15"),
                            Type: shared.TransactionAccountTypeEnumBank.ToPointer(),
                            UpdatedAt: sdk.String("2015-07-02T22:14:49Z"),
                        },
                        shared.TransactionAccount{
                            CreatedAt: sdk.String("2015-03-17T02:42:10Z"),
                            CurrencyCode: sdk.String("NZD"),
                            CurrentBalance: sdk.Float64(2694.39),
                            CurrentBalanceDate: sdk.String("2015-07-03"),
                            CurrentBalanceExchangeRate: sdk.Float64(1.5),
                            CurrentBalanceInBaseCurrency: sdk.Float64(4041.59),
                            ID: sdk.Int64(96027),
                            Institution: &shared.Institution{
                                CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                                CurrencyCode: sdk.String("NZD"),
                                ID: sdk.Int64(57),
                                Title: sdk.String("Bank of Foo"),
                                UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            },
                            Name: sdk.String("Sample Credit"),
                            Number: sdk.String("ASBCRD44554"),
                            SafeBalance: sdk.Float64(2694.39),
                            SafeBalanceInBaseCurrency: sdk.Float64(4041.59),
                            StartingBalance: sdk.Float64(3547.45),
                            StartingBalanceDate: sdk.String("2015-03-15"),
                            Type: shared.TransactionAccountTypeEnumBank.ToPointer(),
                            UpdatedAt: sdk.String("2015-07-02T22:14:49Z"),
                        },
                        shared.TransactionAccount{
                            CreatedAt: sdk.String("2015-03-17T02:42:10Z"),
                            CurrencyCode: sdk.String("NZD"),
                            CurrentBalance: sdk.Float64(2694.39),
                            CurrentBalanceDate: sdk.String("2015-07-03"),
                            CurrentBalanceExchangeRate: sdk.Float64(1.5),
                            CurrentBalanceInBaseCurrency: sdk.Float64(4041.59),
                            ID: sdk.Int64(96027),
                            Institution: &shared.Institution{
                                CreatedAt: sdk.String("2015-04-21T22:42:22Z"),
                                CurrencyCode: sdk.String("NZD"),
                                ID: sdk.Int64(57),
                                Title: sdk.String("Bank of Foo"),
                                UpdatedAt: sdk.String("2015-04-21T22:42:22Z"),
                            },
                            Name: sdk.String("Sample Credit"),
                            Number: sdk.String("ASBCRD44554"),
                            SafeBalance: sdk.Float64(2694.39),
                            SafeBalanceInBaseCurrency: sdk.Float64(4041.59),
                            StartingBalance: sdk.Float64(3547.45),
                            StartingBalanceDate: sdk.String("2015-03-15"),
                            Type: shared.TransactionAccountTypeEnumBank.ToPointer(),
                            UpdatedAt: sdk.String("2015-07-02T22:14:49Z"),
                        },
                    },
                    Type: shared.AccountTypeEnumBank.ToPointer(),
                    UpdatedAt: sdk.String("2018-02-27"),
                },
            },
        },
        ID: 118274,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Accounts != nil {
        // handle response
    }
}
```
