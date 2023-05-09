# Sandbox

### Available Operations

* [DeleteSandboxSandboxID](#deletesandboxsandboxid) - Delete Sandbox
* [GetSandboxSandboxID](#getsandboxsandboxid) - Export Sandbox
* [PostSandbox](#postsandbox) - Create Sandbox
* [PutSandbox](#putsandbox) - Import Sandbox

## DeleteSandboxSandboxID

Delete Sandbox

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
    res, err := s.Sandbox.DeleteSandboxSandboxID(ctx, operations.DeleteSandboxSandboxIDRequest{
        SandboxID: "in",
    }, operations.DeleteSandboxSandboxIDSecurity{
        AuthorizationCodeToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSandboxSandboxID

Export Sandbox

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
    res, err := s.Sandbox.GetSandboxSandboxID(ctx, operations.GetSandboxSandboxIDRequest{
        SandboxID: "corporis",
    }, operations.GetSandboxSandboxIDSecurity{
        AuthorizationCodeToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Sandbox != nil {
        // handle response
    }
}
```

## PostSandbox

Create Sandbox

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
    res, err := s.Sandbox.PostSandbox(ctx, shared.SandboxRequest{
        SandboxID: "iste",
    }, operations.PostSandboxSecurity{
        AuthorizationCodeToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Sandbox != nil {
        // handle response
    }
}
```

## PutSandbox

Import Sandbox

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Sandbox.PutSandbox(ctx, shared.Sandbox{
        SandboxID: "iure",
        Users: []shared.SandboxUser{
            shared.SandboxUser{
                Accounts: []shared.SandboxBankAccount{
                    shared.SandboxBankAccount{
                        Beneficiaries: []shared.SandboxBeneficiary{
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Lela Orn"),
                            },
                        },
                        Info: &shared.SandboxBankAccountInfo{
                            AccountSubType: "dolores",
                            AccountType: "dolorem",
                            Alias: sdk.String("corporis"),
                            AvailableBalance: sdk.Float64(1289.26),
                            Currency: "nobis",
                            Description: sdk.String("enim"),
                            Iban: "omnis",
                            LedgerBalance: sdk.Float64(3637.11),
                            OpeningDate: types.MustTimeFromString("2022-06-06T21:04:34.044Z"),
                            OverdraftLimit: sdk.Float64(384.25),
                        },
                        Party: &shared.SandboxParty{
                            ID: sdk.String("7aff1a3a-2fa9-4467-b392-51aa52c3f5ad"),
                            Name: sdk.String("Joyce Mueller"),
                        },
                        ScheduledPayments: []shared.SandboxScheduledPayment{
                            shared.SandboxScheduledPayment{
                                Amount: sdk.Float64(9719.45),
                                Description: sdk.String("voluptatibus"),
                                ExecutionDate: types.MustTimeFromString("2021-08-05T19:50:46.898Z"),
                                SenderReference: sdk.String("praesentium"),
                            },
                        },
                        StandingOrders: []shared.SandboxStandingOrder{
                            shared.SandboxStandingOrder{
                                Amount: sdk.Float64(557.14),
                                Description: sdk.String("omnis"),
                                FinalPaymentDate: types.MustTimeFromString("2022-04-06T04:03:03.438Z"),
                                FirstPaymentDate: types.MustTimeFromString("2022-12-17T16:42:52.927Z"),
                                Frequency: "reprehenderit",
                                LastPaymentDate: types.MustTimeFromString("2022-01-08T10:49:12.847Z"),
                                NextPaymentDate: types.MustTimeFromString("2022-08-22T19:15:58.586Z"),
                                Status: sdk.String("dolore"),
                            },
                            shared.SandboxStandingOrder{
                                Amount: sdk.Float64(4808.94),
                                Description: sdk.String("dicta"),
                                FinalPaymentDate: types.MustTimeFromString("2022-05-13T20:56:04.612Z"),
                                FirstPaymentDate: types.MustTimeFromString("2021-10-04T09:10:06.610Z"),
                                Frequency: "repudiandae",
                                LastPaymentDate: types.MustTimeFromString("2022-10-13T20:38:16.426Z"),
                                NextPaymentDate: types.MustTimeFromString("2021-11-14T09:53:27.431Z"),
                                Status: sdk.String("excepturi"),
                            },
                            shared.SandboxStandingOrder{
                                Amount: sdk.Float64(8651.03),
                                Description: sdk.String("modi"),
                                FinalPaymentDate: types.MustTimeFromString("2021-12-15T00:41:38.329Z"),
                                FirstPaymentDate: types.MustTimeFromString("2022-09-20T03:14:35.704Z"),
                                Frequency: "repudiandae",
                                LastPaymentDate: types.MustTimeFromString("2022-11-01T07:52:08.326Z"),
                                NextPaymentDate: types.MustTimeFromString("2022-03-02T21:33:21.372Z"),
                                Status: sdk.String("enim"),
                            },
                            shared.SandboxStandingOrder{
                                Amount: sdk.Float64(93.56),
                                Description: sdk.String("est"),
                                FinalPaymentDate: types.MustTimeFromString("2022-08-09T16:21:07.003Z"),
                                FirstPaymentDate: types.MustTimeFromString("2021-07-27T01:56:50.693Z"),
                                Frequency: "quibusdam",
                                LastPaymentDate: types.MustTimeFromString("2022-09-26T08:57:48.803Z"),
                                NextPaymentDate: types.MustTimeFromString("2022-08-08T19:05:24.174Z"),
                                Status: sdk.String("cupiditate"),
                            },
                        },
                        Statements: []shared.SandboxStatement{
                            shared.SandboxStatement{
                                Month: sdk.Int(20107),
                                Number: sdk.String("magni"),
                                Year: sdk.Int(828940),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(369808),
                                Number: sdk.String("alias"),
                                Year: sdk.Int(146441),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(677817),
                                Number: sdk.String("excepturi"),
                                Year: sdk.Int(270008),
                            },
                        },
                        Transactions: []shared.SandboxTransaction{
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(7351.94),
                                Amount: sdk.Float64(2884.76),
                                BookingDateTime: types.MustTimeFromString("2021-09-13T13:11:22.288Z"),
                                CreditDebit: sdk.String("non"),
                                Currency: sdk.String("eligendi"),
                                Description: sdk.String("sint"),
                                Reference: sdk.String("aliquid"),
                                RelatedAccount: sdk.String("provident"),
                                RelatedName: sdk.String("necessitatibus"),
                                TransactionCode: sdk.String("sint"),
                                ValueDateTime: types.MustTimeFromString("2022-07-22T03:36:34.615Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(8915.55),
                                Amount: sdk.Float64(9527.49),
                                BookingDateTime: types.MustTimeFromString("2022-02-08T14:21:47.573Z"),
                                CreditDebit: sdk.String("in"),
                                Currency: sdk.String("illum"),
                                Description: sdk.String("maiores"),
                                Reference: sdk.String("rerum"),
                                RelatedAccount: sdk.String("dicta"),
                                RelatedName: sdk.String("magnam"),
                                TransactionCode: sdk.String("cumque"),
                                ValueDateTime: types.MustTimeFromString("2021-10-07T01:21:59.434Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(3965.06),
                                Amount: sdk.Float64(6754.39),
                                BookingDateTime: types.MustTimeFromString("2022-04-02T11:21:13.260Z"),
                                CreditDebit: sdk.String("occaecati"),
                                Currency: sdk.String("enim"),
                                Description: sdk.String("accusamus"),
                                Reference: sdk.String("delectus"),
                                RelatedAccount: sdk.String("quidem"),
                                RelatedName: sdk.String("provident"),
                                TransactionCode: sdk.String("nam"),
                                ValueDateTime: types.MustTimeFromString("2021-12-31T00:47:48.012Z"),
                            },
                        },
                    },
                    shared.SandboxBankAccount{
                        Beneficiaries: []shared.SandboxBeneficiary{
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Vincent Nolan"),
                            },
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Ms. Arturo Krajcik"),
                            },
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Alfonso Green"),
                            },
                        },
                        Info: &shared.SandboxBankAccountInfo{
                            AccountSubType: "natus",
                            AccountType: "nobis",
                            Alias: sdk.String("eum"),
                            AvailableBalance: sdk.Float64(8784.53),
                            Currency: "aspernatur",
                            Description: sdk.String("architecto"),
                            Iban: "magnam",
                            LedgerBalance: sdk.Float64(923.73),
                            OpeningDate: types.MustTimeFromString("2022-04-17T13:06:08.135Z"),
                            OverdraftLimit: sdk.Float64(5908.73),
                        },
                        Party: &shared.SandboxParty{
                            ID: sdk.String("890afa56-3e25-416f-a4c8-b711e5b7fd2e"),
                            Name: sdk.String("Edward Crooks"),
                        },
                        ScheduledPayments: []shared.SandboxScheduledPayment{
                            shared.SandboxScheduledPayment{
                                Amount: sdk.Float64(1238.2),
                                Description: sdk.String("quo"),
                                ExecutionDate: types.MustTimeFromString("2020-05-28T21:33:10.895Z"),
                                SenderReference: sdk.String("maxime"),
                            },
                        },
                        StandingOrders: []shared.SandboxStandingOrder{
                            shared.SandboxStandingOrder{
                                Amount: sdk.Float64(5691.01),
                                Description: sdk.String("odit"),
                                FinalPaymentDate: types.MustTimeFromString("2022-12-19T20:58:17.857Z"),
                                FirstPaymentDate: types.MustTimeFromString("2022-01-07T08:38:36.147Z"),
                                Frequency: "quidem",
                                LastPaymentDate: types.MustTimeFromString("2022-07-19T10:57:57.489Z"),
                                NextPaymentDate: types.MustTimeFromString("2022-04-12T10:47:34.158Z"),
                                Status: sdk.String("eaque"),
                            },
                            shared.SandboxStandingOrder{
                                Amount: sdk.Float64(8663.83),
                                Description: sdk.String("nemo"),
                                FinalPaymentDate: types.MustTimeFromString("2022-12-13T19:01:00.083Z"),
                                FirstPaymentDate: types.MustTimeFromString("2022-04-23T08:05:27.776Z"),
                                Frequency: "aut",
                                LastPaymentDate: types.MustTimeFromString("2021-12-02T19:46:35.147Z"),
                                NextPaymentDate: types.MustTimeFromString("2020-10-23T15:50:52.666Z"),
                                Status: sdk.String("nobis"),
                            },
                        },
                        Statements: []shared.SandboxStatement{
                            shared.SandboxStatement{
                                Month: sdk.Int(339404),
                                Number: sdk.String("totam"),
                                Year: sdk.Int(489549),
                            },
                        },
                        Transactions: []shared.SandboxTransaction{
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(3389.85),
                                Amount: sdk.Float64(1999.96),
                                BookingDateTime: types.MustTimeFromString("2022-12-25T05:44:55.720Z"),
                                CreditDebit: sdk.String("dolores"),
                                Currency: sdk.String("minus"),
                                Description: sdk.String("quam"),
                                Reference: sdk.String("dolor"),
                                RelatedAccount: sdk.String("vero"),
                                RelatedName: sdk.String("nostrum"),
                                TransactionCode: sdk.String("hic"),
                                ValueDateTime: types.MustTimeFromString("2021-03-05T23:06:52.311Z"),
                            },
                        },
                    },
                    shared.SandboxBankAccount{
                        Beneficiaries: []shared.SandboxBeneficiary{
                            shared.SandboxBeneficiary{
                                Name: sdk.String("George Sawayn"),
                            },
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Gary Mayert"),
                            },
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Merle Gleichner"),
                            },
                        },
                        Info: &shared.SandboxBankAccountInfo{
                            AccountSubType: "deleniti",
                            AccountType: "pariatur",
                            Alias: sdk.String("provident"),
                            AvailableBalance: sdk.Float64(7508.44),
                            Currency: "libero",
                            Description: sdk.String("delectus"),
                            Iban: "quaerat",
                            LedgerBalance: sdk.Float64(5542.42),
                            OpeningDate: types.MustTimeFromString("2022-10-15T11:27:32.342Z"),
                            OverdraftLimit: sdk.Float64(2098.43),
                        },
                        Party: &shared.SandboxParty{
                            ID: sdk.String("323f9b77-f3a4-4100-a74e-bf69280d1ba7"),
                            Name: sdk.String("Sonya Leuschke"),
                        },
                        ScheduledPayments: []shared.SandboxScheduledPayment{
                            shared.SandboxScheduledPayment{
                                Amount: sdk.Float64(9903.39),
                                Description: sdk.String("nihil"),
                                ExecutionDate: types.MustTimeFromString("2022-07-18T13:18:42.293Z"),
                                SenderReference: sdk.String("id"),
                            },
                            shared.SandboxScheduledPayment{
                                Amount: sdk.Float64(9064.18),
                                Description: sdk.String("eius"),
                                ExecutionDate: types.MustTimeFromString("2022-12-24T11:05:48.936Z"),
                                SenderReference: sdk.String("amet"),
                            },
                            shared.SandboxScheduledPayment{
                                Amount: sdk.Float64(7583.79),
                                Description: sdk.String("accusamus"),
                                ExecutionDate: types.MustTimeFromString("2022-02-04T21:14:13.821Z"),
                                SenderReference: sdk.String("suscipit"),
                            },
                        },
                        StandingOrders: []shared.SandboxStandingOrder{
                            shared.SandboxStandingOrder{
                                Amount: sdk.Float64(5883.17),
                                Description: sdk.String("minima"),
                                FinalPaymentDate: types.MustTimeFromString("2021-06-10T21:59:23.045Z"),
                                FirstPaymentDate: types.MustTimeFromString("2022-12-31T23:01:47.942Z"),
                                Frequency: "at",
                                LastPaymentDate: types.MustTimeFromString("2022-09-23T03:46:17.712Z"),
                                NextPaymentDate: types.MustTimeFromString("2022-03-15T17:06:34.956Z"),
                                Status: sdk.String("officiis"),
                            },
                            shared.SandboxStandingOrder{
                                Amount: sdk.Float64(1856.36),
                                Description: sdk.String("dolorum"),
                                FinalPaymentDate: types.MustTimeFromString("2021-08-19T12:54:33.953Z"),
                                FirstPaymentDate: types.MustTimeFromString("2022-01-13T02:40:51.157Z"),
                                Frequency: "ipsum",
                                LastPaymentDate: types.MustTimeFromString("2020-02-28T15:06:02.733Z"),
                                NextPaymentDate: types.MustTimeFromString("2022-04-09T05:42:11.142Z"),
                                Status: sdk.String("accusamus"),
                            },
                            shared.SandboxStandingOrder{
                                Amount: sdk.Float64(2539.41),
                                Description: sdk.String("enim"),
                                FinalPaymentDate: types.MustTimeFromString("2022-01-16T12:43:49.763Z"),
                                FirstPaymentDate: types.MustTimeFromString("2022-01-21T14:54:44.081Z"),
                                Frequency: "sit",
                                LastPaymentDate: types.MustTimeFromString("2022-08-02T13:07:26.403Z"),
                                NextPaymentDate: types.MustTimeFromString("2022-07-29T23:45:18.595Z"),
                                Status: sdk.String("libero"),
                            },
                        },
                        Statements: []shared.SandboxStatement{
                            shared.SandboxStatement{
                                Month: sdk.Int(646265),
                                Number: sdk.String("quam"),
                                Year: sdk.Int(214880),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(277628),
                                Number: sdk.String("qui"),
                                Year: sdk.Int(586784),
                            },
                        },
                        Transactions: []shared.SandboxTransaction{
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(8638.56),
                                Amount: sdk.Float64(7470.8),
                                BookingDateTime: types.MustTimeFromString("2022-04-29T16:20:13.800Z"),
                                CreditDebit: sdk.String("totam"),
                                Currency: sdk.String("incidunt"),
                                Description: sdk.String("aspernatur"),
                                Reference: sdk.String("dolores"),
                                RelatedAccount: sdk.String("distinctio"),
                                RelatedName: sdk.String("facilis"),
                                TransactionCode: sdk.String("aliquid"),
                                ValueDateTime: types.MustTimeFromString("2022-06-08T14:54:33.206Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(8404.29),
                                Amount: sdk.Float64(1832.8),
                                BookingDateTime: types.MustTimeFromString("2022-11-09T03:08:00.106Z"),
                                CreditDebit: sdk.String("magni"),
                                Currency: sdk.String("odio"),
                                Description: sdk.String("sunt"),
                                Reference: sdk.String("ullam"),
                                RelatedAccount: sdk.String("nam"),
                                RelatedName: sdk.String("hic"),
                                TransactionCode: sdk.String("voluptatem"),
                                ValueDateTime: types.MustTimeFromString("2020-10-05T00:59:28.911Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(7486.64),
                                Amount: sdk.Float64(925.96),
                                BookingDateTime: types.MustTimeFromString("2022-05-07T21:24:02.842Z"),
                                CreditDebit: sdk.String("veritatis"),
                                Currency: sdk.String("nobis"),
                                Description: sdk.String("quos"),
                                Reference: sdk.String("tempore"),
                                RelatedAccount: sdk.String("cupiditate"),
                                RelatedName: sdk.String("aperiam"),
                                TransactionCode: sdk.String("delectus"),
                                ValueDateTime: types.MustTimeFromString("2022-09-16T08:47:14.764Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(2869.15),
                                Amount: sdk.Float64(2408.29),
                                BookingDateTime: types.MustTimeFromString("2022-10-19T18:50:59.428Z"),
                                CreditDebit: sdk.String("quae"),
                                Currency: sdk.String("aut"),
                                Description: sdk.String("quas"),
                                Reference: sdk.String("itaque"),
                                RelatedAccount: sdk.String("consequatur"),
                                RelatedName: sdk.String("est"),
                                TransactionCode: sdk.String("repellendus"),
                                ValueDateTime: types.MustTimeFromString("2020-01-19T03:49:20.903Z"),
                            },
                        },
                    },
                },
                Cards: []shared.SandboxCard{
                    shared.SandboxCard{
                        Info: &shared.SandboxCardInfo{
                            AvailableBalance: sdk.Float64(7034.95),
                            CreditLimit: sdk.Float64(5864.1),
                            Description: sdk.String("qui"),
                            Expiration: "quae",
                            HolderName: "laudantium",
                            LedgerBalance: sdk.Float64(4856.28),
                            Number: "occaecati",
                            SubType: sdk.String("voluptatibus"),
                            Type: sdk.String("quisquam"),
                        },
                        Party: &shared.SandboxParty{
                            ID: sdk.String("e953f73e-f7fb-4c7a-bd74-dd39c0f5d2cf"),
                            Name: sdk.String("Ted Romaguera MD"),
                        },
                        Statements: []shared.SandboxStatement{
                            shared.SandboxStatement{
                                Month: sdk.Int(368584),
                                Number: sdk.String("ea"),
                                Year: sdk.Int(136900),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(428224),
                                Number: sdk.String("possimus"),
                                Year: sdk.Int(297842),
                            },
                        },
                        Transactions: []shared.SandboxTransaction{
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(4011.32),
                                Amount: sdk.Float64(5113.19),
                                BookingDateTime: types.MustTimeFromString("2022-10-11T02:58:57.556Z"),
                                CreditDebit: sdk.String("maiores"),
                                Currency: sdk.String("quasi"),
                                Description: sdk.String("ex"),
                                Reference: sdk.String("nulla"),
                                RelatedAccount: sdk.String("excepturi"),
                                RelatedName: sdk.String("voluptatibus"),
                                TransactionCode: sdk.String("nostrum"),
                                ValueDateTime: types.MustTimeFromString("2020-08-20T04:25:24.387Z"),
                            },
                        },
                    },
                    shared.SandboxCard{
                        Info: &shared.SandboxCardInfo{
                            AvailableBalance: sdk.Float64(9065.56),
                            CreditLimit: sdk.Float64(4113.72),
                            Description: sdk.String("impedit"),
                            Expiration: "corporis",
                            HolderName: "veniam",
                            LedgerBalance: sdk.Float64(3994.99),
                            Number: "inventore",
                            SubType: sdk.String("magnam"),
                            Type: sdk.String("ea"),
                        },
                        Party: &shared.SandboxParty{
                            ID: sdk.String("c3e250fb-008c-442e-941a-ac366c8dd6b1"),
                            Name: sdk.String("Carrie Cole IV"),
                        },
                        Statements: []shared.SandboxStatement{
                            shared.SandboxStatement{
                                Month: sdk.Int(487935),
                                Number: sdk.String("eius"),
                                Year: sdk.Int(458515),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(456141),
                                Number: sdk.String("rem"),
                                Year: sdk.Int(683282),
                            },
                        },
                        Transactions: []shared.SandboxTransaction{
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(6956.26),
                                Amount: sdk.Float64(8526.35),
                                BookingDateTime: types.MustTimeFromString("2022-07-26T19:04:27.877Z"),
                                CreditDebit: sdk.String("suscipit"),
                                Currency: sdk.String("assumenda"),
                                Description: sdk.String("eos"),
                                Reference: sdk.String("praesentium"),
                                RelatedAccount: sdk.String("quisquam"),
                                RelatedName: sdk.String("veritatis"),
                                TransactionCode: sdk.String("ipsa"),
                                ValueDateTime: types.MustTimeFromString("2021-08-10T04:36:29.661Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(2065.94),
                                Amount: sdk.Float64(7786.96),
                                BookingDateTime: types.MustTimeFromString("2020-09-01T17:43:45.536Z"),
                                CreditDebit: sdk.String("fuga"),
                                Currency: sdk.String("eius"),
                                Description: sdk.String("eos"),
                                Reference: sdk.String("voluptas"),
                                RelatedAccount: sdk.String("ab"),
                                RelatedName: sdk.String("cupiditate"),
                                TransactionCode: sdk.String("consequatur"),
                                ValueDateTime: types.MustTimeFromString("2022-02-09T09:38:41.756Z"),
                            },
                        },
                    },
                },
                RetryCacheEntries: []shared.SandboxRetryCacheEntry{
                    shared.SandboxRetryCacheEntry{
                        CacheKey: sdk.String("aspernatur"),
                        Count: sdk.Int(197054),
                        ExpirationTimestamp: types.MustTimeFromString("2021-08-15T10:59:14.485Z"),
                    },
                    shared.SandboxRetryCacheEntry{
                        CacheKey: sdk.String("recusandae"),
                        Count: sdk.Int(44612),
                        ExpirationTimestamp: types.MustTimeFromString("2021-05-27T03:34:33.852Z"),
                    },
                },
                UserID: sdk.String("dignissimos"),
            },
            shared.SandboxUser{
                Accounts: []shared.SandboxBankAccount{
                    shared.SandboxBankAccount{
                        Beneficiaries: []shared.SandboxBeneficiary{
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Sheldon Hackett"),
                            },
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Miranda Daniel"),
                            },
                        },
                        Info: &shared.SandboxBankAccountInfo{
                            AccountSubType: "accusantium",
                            AccountType: "porro",
                            Alias: sdk.String("eum"),
                            AvailableBalance: sdk.Float64(5564.29),
                            Currency: "praesentium",
                            Description: sdk.String("consequuntur"),
                            Iban: "deleniti",
                            LedgerBalance: sdk.Float64(1438.29),
                            OpeningDate: types.MustTimeFromString("2021-09-13T21:24:27.316Z"),
                            OverdraftLimit: sdk.Float64(2775.96),
                        },
                        Party: &shared.SandboxParty{
                            ID: sdk.String("82562f22-2e98-417e-a17c-be61e6b7b95b"),
                            Name: sdk.String("Mark Nicolas"),
                        },
                        ScheduledPayments: []shared.SandboxScheduledPayment{
                            shared.SandboxScheduledPayment{
                                Amount: sdk.Float64(1605.38),
                                Description: sdk.String("consequatur"),
                                ExecutionDate: types.MustTimeFromString("2022-01-28T10:14:21.975Z"),
                                SenderReference: sdk.String("sapiente"),
                            },
                            shared.SandboxScheduledPayment{
                                Amount: sdk.Float64(2328.65),
                                Description: sdk.String("esse"),
                                ExecutionDate: types.MustTimeFromString("2021-10-26T13:57:26.455Z"),
                                SenderReference: sdk.String("a"),
                            },
                            shared.SandboxScheduledPayment{
                                Amount: sdk.Float64(8577.23),
                                Description: sdk.String("quas"),
                                ExecutionDate: types.MustTimeFromString("2022-11-26T10:10:26.600Z"),
                                SenderReference: sdk.String("a"),
                            },
                            shared.SandboxScheduledPayment{
                                Amount: sdk.Float64(6216.79),
                                Description: sdk.String("sint"),
                                ExecutionDate: types.MustTimeFromString("2020-07-16T06:14:24.154Z"),
                                SenderReference: sdk.String("quia"),
                            },
                        },
                        StandingOrders: []shared.SandboxStandingOrder{
                            shared.SandboxStandingOrder{
                                Amount: sdk.Float64(9924.3),
                                Description: sdk.String("facere"),
                                FinalPaymentDate: types.MustTimeFromString("2022-11-03T19:31:44.626Z"),
                                FirstPaymentDate: types.MustTimeFromString("2022-05-16T10:50:58.442Z"),
                                Frequency: "culpa",
                                LastPaymentDate: types.MustTimeFromString("2022-01-19T12:09:14.633Z"),
                                NextPaymentDate: types.MustTimeFromString("2022-01-24T02:06:03.033Z"),
                                Status: sdk.String("vel"),
                            },
                            shared.SandboxStandingOrder{
                                Amount: sdk.Float64(4473.78),
                                Description: sdk.String("eius"),
                                FinalPaymentDate: types.MustTimeFromString("2021-04-21T04:50:55.832Z"),
                                FirstPaymentDate: types.MustTimeFromString("2022-12-07T16:30:09.640Z"),
                                Frequency: "aliquam",
                                LastPaymentDate: types.MustTimeFromString("2022-08-22T20:24:31.399Z"),
                                NextPaymentDate: types.MustTimeFromString("2022-07-22T23:37:21.399Z"),
                                Status: sdk.String("ullam"),
                            },
                            shared.SandboxStandingOrder{
                                Amount: sdk.Float64(3917.74),
                                Description: sdk.String("aut"),
                                FinalPaymentDate: types.MustTimeFromString("2022-08-18T18:43:46.013Z"),
                                FirstPaymentDate: types.MustTimeFromString("2021-10-18T14:54:00.905Z"),
                                Frequency: "deleniti",
                                LastPaymentDate: types.MustTimeFromString("2020-12-17T02:30:00.771Z"),
                                NextPaymentDate: types.MustTimeFromString("2022-05-23T15:36:15.509Z"),
                                Status: sdk.String("tenetur"),
                            },
                            shared.SandboxStandingOrder{
                                Amount: sdk.Float64(984.78),
                                Description: sdk.String("at"),
                                FinalPaymentDate: types.MustTimeFromString("2022-07-19T05:32:14.038Z"),
                                FirstPaymentDate: types.MustTimeFromString("2022-09-03T18:06:00.164Z"),
                                Frequency: "veritatis",
                                LastPaymentDate: types.MustTimeFromString("2022-10-06T10:21:42.350Z"),
                                NextPaymentDate: types.MustTimeFromString("2021-04-28T03:43:57.732Z"),
                                Status: sdk.String("accusantium"),
                            },
                        },
                        Statements: []shared.SandboxStatement{
                            shared.SandboxStatement{
                                Month: sdk.Int(15606),
                                Number: sdk.String("laudantium"),
                                Year: sdk.Int(428796),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(649832),
                                Number: sdk.String("ab"),
                                Year: sdk.Int(544591),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(251941),
                                Number: sdk.String("voluptatem"),
                                Year: sdk.Int(221161),
                            },
                        },
                        Transactions: []shared.SandboxTransaction{
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(2531.91),
                                Amount: sdk.Float64(7710.89),
                                BookingDateTime: types.MustTimeFromString("2022-08-16T16:15:17.905Z"),
                                CreditDebit: sdk.String("aut"),
                                Currency: sdk.String("dignissimos"),
                                Description: sdk.String("dicta"),
                                Reference: sdk.String("maiores"),
                                RelatedAccount: sdk.String("natus"),
                                RelatedName: sdk.String("velit"),
                                TransactionCode: sdk.String("voluptatibus"),
                                ValueDateTime: types.MustTimeFromString("2022-01-04T12:34:39.877Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(456.59),
                                Amount: sdk.Float64(4090.54),
                                BookingDateTime: types.MustTimeFromString("2022-11-02T12:31:08.461Z"),
                                CreditDebit: sdk.String("repellendus"),
                                Currency: sdk.String("officia"),
                                Description: sdk.String("maxime"),
                                Reference: sdk.String("dignissimos"),
                                RelatedAccount: sdk.String("officia"),
                                RelatedName: sdk.String("asperiores"),
                                TransactionCode: sdk.String("nemo"),
                                ValueDateTime: types.MustTimeFromString("2022-09-08T20:16:51.473Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(7832.35),
                                Amount: sdk.Float64(8018.36),
                                BookingDateTime: types.MustTimeFromString("2022-12-06T06:52:56.510Z"),
                                CreditDebit: sdk.String("adipisci"),
                                Currency: sdk.String("fuga"),
                                Description: sdk.String("id"),
                                Reference: sdk.String("suscipit"),
                                RelatedAccount: sdk.String("velit"),
                                RelatedName: sdk.String("culpa"),
                                TransactionCode: sdk.String("est"),
                                ValueDateTime: types.MustTimeFromString("2021-06-13T13:07:55.703Z"),
                            },
                        },
                    },
                },
                Cards: []shared.SandboxCard{
                    shared.SandboxCard{
                        Info: &shared.SandboxCardInfo{
                            AvailableBalance: sdk.Float64(4240.89),
                            CreditLimit: sdk.Float64(4976.78),
                            Description: sdk.String("quos"),
                            Expiration: "vel",
                            HolderName: "labore",
                            LedgerBalance: sdk.Float64(8225.6),
                            Number: "facilis",
                            SubType: sdk.String("cum"),
                            Type: sdk.String("commodi"),
                        },
                        Party: &shared.SandboxParty{
                            ID: sdk.String("75fd5e60-b375-4ed4-b6fb-ee41f33317fe"),
                            Name: sdk.String("Stacy Pollich DVM"),
                        },
                        Statements: []shared.SandboxStatement{
                            shared.SandboxStatement{
                                Month: sdk.Int(113816),
                                Number: sdk.String("accusamus"),
                                Year: sdk.Int(631126),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(272437),
                                Number: sdk.String("aspernatur"),
                                Year: sdk.Int(379057),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(374244),
                                Number: sdk.String("voluptas"),
                                Year: sdk.Int(324405),
                            },
                        },
                        Transactions: []shared.SandboxTransaction{
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(6801.16),
                                Amount: sdk.Float64(2378.07),
                                BookingDateTime: types.MustTimeFromString("2022-06-26T19:42:01.136Z"),
                                CreditDebit: sdk.String("blanditiis"),
                                Currency: sdk.String("in"),
                                Description: sdk.String("dolore"),
                                Reference: sdk.String("aliquam"),
                                RelatedAccount: sdk.String("officiis"),
                                RelatedName: sdk.String("temporibus"),
                                TransactionCode: sdk.String("ullam"),
                                ValueDateTime: types.MustTimeFromString("2022-04-06T11:42:02.049Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(5023.89),
                                Amount: sdk.Float64(5553.61),
                                BookingDateTime: types.MustTimeFromString("2022-05-25T08:06:51.452Z"),
                                CreditDebit: sdk.String("culpa"),
                                Currency: sdk.String("corrupti"),
                                Description: sdk.String("pariatur"),
                                Reference: sdk.String("totam"),
                                RelatedAccount: sdk.String("hic"),
                                RelatedName: sdk.String("exercitationem"),
                                TransactionCode: sdk.String("nobis"),
                                ValueDateTime: types.MustTimeFromString("2022-04-20T15:43:20.562Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(1488.29),
                                Amount: sdk.Float64(9679.66),
                                BookingDateTime: types.MustTimeFromString("2022-01-03T01:02:56.740Z"),
                                CreditDebit: sdk.String("facilis"),
                                Currency: sdk.String("voluptate"),
                                Description: sdk.String("expedita"),
                                Reference: sdk.String("ab"),
                                RelatedAccount: sdk.String("iste"),
                                RelatedName: sdk.String("dolore"),
                                TransactionCode: sdk.String("laborum"),
                                ValueDateTime: types.MustTimeFromString("2022-07-21T15:45:39.001Z"),
                            },
                        },
                    },
                    shared.SandboxCard{
                        Info: &shared.SandboxCardInfo{
                            AvailableBalance: sdk.Float64(4174.86),
                            CreditLimit: sdk.Float64(6960.77),
                            Description: sdk.String("explicabo"),
                            Expiration: "voluptas",
                            HolderName: "unde",
                            LedgerBalance: sdk.Float64(1000.32),
                            Number: "suscipit",
                            SubType: sdk.String("sapiente"),
                            Type: sdk.String("debitis"),
                        },
                        Party: &shared.SandboxParty{
                            ID: sdk.String("1f08f429-4e36-498f-847f-603e8b445e80"),
                            Name: sdk.String("Julius Hartmann"),
                        },
                        Statements: []shared.SandboxStatement{
                            shared.SandboxStatement{
                                Month: sdk.Int(862319),
                                Number: sdk.String("magni"),
                                Year: sdk.Int(48690),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(901483),
                                Number: sdk.String("numquam"),
                                Year: sdk.Int(329935),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(446135),
                                Number: sdk.String("officiis"),
                                Year: sdk.Int(104627),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(512452),
                                Number: sdk.String("exercitationem"),
                                Year: sdk.Int(510629),
                            },
                        },
                        Transactions: []shared.SandboxTransaction{
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(3868.27),
                                Amount: sdk.Float64(6805.15),
                                BookingDateTime: types.MustTimeFromString("2021-10-03T15:49:29.329Z"),
                                CreditDebit: sdk.String("hic"),
                                Currency: sdk.String("expedita"),
                                Description: sdk.String("debitis"),
                                Reference: sdk.String("neque"),
                                RelatedAccount: sdk.String("dolorum"),
                                RelatedName: sdk.String("nostrum"),
                                TransactionCode: sdk.String("officia"),
                                ValueDateTime: types.MustTimeFromString("2021-11-26T16:42:33.328Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(8792.35),
                                Amount: sdk.Float64(2726.83),
                                BookingDateTime: types.MustTimeFromString("2022-09-14T18:19:59.469Z"),
                                CreditDebit: sdk.String("ut"),
                                Currency: sdk.String("fugiat"),
                                Description: sdk.String("voluptatem"),
                                Reference: sdk.String("culpa"),
                                RelatedAccount: sdk.String("expedita"),
                                RelatedName: sdk.String("magnam"),
                                TransactionCode: sdk.String("consequatur"),
                                ValueDateTime: types.MustTimeFromString("2022-08-17T23:19:52.079Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(245.27),
                                Amount: sdk.Float64(5305.37),
                                BookingDateTime: types.MustTimeFromString("2021-02-26T20:36:25.696Z"),
                                CreditDebit: sdk.String("corporis"),
                                Currency: sdk.String("et"),
                                Description: sdk.String("blanditiis"),
                                Reference: sdk.String("ex"),
                                RelatedAccount: sdk.String("sed"),
                                RelatedName: sdk.String("sit"),
                                TransactionCode: sdk.String("vel"),
                                ValueDateTime: types.MustTimeFromString("2022-02-04T05:56:04.733Z"),
                            },
                        },
                    },
                    shared.SandboxCard{
                        Info: &shared.SandboxCardInfo{
                            AvailableBalance: sdk.Float64(6222.31),
                            CreditLimit: sdk.Float64(85.11),
                            Description: sdk.String("incidunt"),
                            Expiration: "reiciendis",
                            HolderName: "dolorem",
                            LedgerBalance: sdk.Float64(6908.94),
                            Number: "dicta",
                            SubType: sdk.String("architecto"),
                            Type: sdk.String("occaecati"),
                        },
                        Party: &shared.SandboxParty{
                            ID: sdk.String("4b8abf60-3a79-4f9d-be0a-b7da8a50ce18"),
                            Name: sdk.String("Tabitha Leannon"),
                        },
                        Statements: []shared.SandboxStatement{
                            shared.SandboxStatement{
                                Month: sdk.Int(90885),
                                Number: sdk.String("esse"),
                                Year: sdk.Int(227759),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(826825),
                                Number: sdk.String("ea"),
                                Year: sdk.Int(539118),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(623295),
                                Number: sdk.String("officiis"),
                                Year: sdk.Int(886961),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(880107),
                                Number: sdk.String("natus"),
                                Year: sdk.Int(328303),
                            },
                        },
                        Transactions: []shared.SandboxTransaction{
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(4044.25),
                                Amount: sdk.Float64(9805.81),
                                BookingDateTime: types.MustTimeFromString("2021-04-04T14:18:49.875Z"),
                                CreditDebit: sdk.String("error"),
                                Currency: sdk.String("blanditiis"),
                                Description: sdk.String("suscipit"),
                                Reference: sdk.String("repudiandae"),
                                RelatedAccount: sdk.String("atque"),
                                RelatedName: sdk.String("atque"),
                                TransactionCode: sdk.String("sunt"),
                                ValueDateTime: types.MustTimeFromString("2020-12-16T15:16:35.557Z"),
                            },
                        },
                    },
                    shared.SandboxCard{
                        Info: &shared.SandboxCardInfo{
                            AvailableBalance: sdk.Float64(8298.98),
                            CreditLimit: sdk.Float64(2871.19),
                            Description: sdk.String("reiciendis"),
                            Expiration: "doloremque",
                            HolderName: "repudiandae",
                            LedgerBalance: sdk.Float64(1160.98),
                            Number: "accusantium",
                            SubType: sdk.String("beatae"),
                            Type: sdk.String("dolores"),
                        },
                        Party: &shared.SandboxParty{
                            ID: sdk.String("563f94e2-9e97-43e9-a2a5-7a15be3e0608"),
                            Name: sdk.String("Nellie Upton"),
                        },
                        Statements: []shared.SandboxStatement{
                            shared.SandboxStatement{
                                Month: sdk.Int(898063),
                                Number: sdk.String("ratione"),
                                Year: sdk.Int(672582),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(715208),
                                Number: sdk.String("voluptatum"),
                                Year: sdk.Int(523006),
                            },
                        },
                        Transactions: []shared.SandboxTransaction{
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(3205.65),
                                Amount: sdk.Float64(9979.63),
                                BookingDateTime: types.MustTimeFromString("2022-08-21T19:13:25.245Z"),
                                CreditDebit: sdk.String("perspiciatis"),
                                Currency: sdk.String("nihil"),
                                Description: sdk.String("mollitia"),
                                Reference: sdk.String("voluptas"),
                                RelatedAccount: sdk.String("alias"),
                                RelatedName: sdk.String("maiores"),
                                TransactionCode: sdk.String("reiciendis"),
                                ValueDateTime: types.MustTimeFromString("2022-05-03T16:31:59.395Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(3279.88),
                                Amount: sdk.Float64(2931.44),
                                BookingDateTime: types.MustTimeFromString("2022-08-07T17:37:00.643Z"),
                                CreditDebit: sdk.String("quae"),
                                Currency: sdk.String("recusandae"),
                                Description: sdk.String("omnis"),
                                Reference: sdk.String("quaerat"),
                                RelatedAccount: sdk.String("molestiae"),
                                RelatedName: sdk.String("ex"),
                                TransactionCode: sdk.String("ut"),
                                ValueDateTime: types.MustTimeFromString("2022-07-10T22:59:57.144Z"),
                            },
                        },
                    },
                },
                RetryCacheEntries: []shared.SandboxRetryCacheEntry{
                    shared.SandboxRetryCacheEntry{
                        CacheKey: sdk.String("laudantium"),
                        Count: sdk.Int(432606),
                        ExpirationTimestamp: types.MustTimeFromString("2022-01-27T04:48:14.748Z"),
                    },
                    shared.SandboxRetryCacheEntry{
                        CacheKey: sdk.String("esse"),
                        Count: sdk.Int(592081),
                        ExpirationTimestamp: types.MustTimeFromString("2022-07-27T09:33:49.991Z"),
                    },
                    shared.SandboxRetryCacheEntry{
                        CacheKey: sdk.String("reiciendis"),
                        Count: sdk.Int(592780),
                        ExpirationTimestamp: types.MustTimeFromString("2022-08-24T14:31:36.261Z"),
                    },
                    shared.SandboxRetryCacheEntry{
                        CacheKey: sdk.String("quasi"),
                        Count: sdk.Int(657020),
                        ExpirationTimestamp: types.MustTimeFromString("2022-05-07T21:46:24.459Z"),
                    },
                },
                UserID: sdk.String("provident"),
            },
            shared.SandboxUser{
                Accounts: []shared.SandboxBankAccount{
                    shared.SandboxBankAccount{
                        Beneficiaries: []shared.SandboxBeneficiary{
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Beth Bashirian"),
                            },
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Arlene Reichert"),
                            },
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Irving Gleichner"),
                            },
                        },
                        Info: &shared.SandboxBankAccountInfo{
                            AccountSubType: "officiis",
                            AccountType: "sapiente",
                            Alias: sdk.String("cumque"),
                            AvailableBalance: sdk.Float64(1134.86),
                            Currency: "rerum",
                            Description: sdk.String("tempora"),
                            Iban: "quis",
                            LedgerBalance: sdk.Float64(820.57),
                            OpeningDate: types.MustTimeFromString("2022-03-27T16:13:46.480Z"),
                            OverdraftLimit: sdk.Float64(626.36),
                        },
                        Party: &shared.SandboxParty{
                            ID: sdk.String("032648dc-2f61-4519-9ebf-d0e9fe6c632c"),
                            Name: sdk.String("Philip O'Kon"),
                        },
                        ScheduledPayments: []shared.SandboxScheduledPayment{
                            shared.SandboxScheduledPayment{
                                Amount: sdk.Float64(972.58),
                                Description: sdk.String("et"),
                                ExecutionDate: types.MustTimeFromString("2022-05-19T23:57:30.950Z"),
                                SenderReference: sdk.String("occaecati"),
                            },
                        },
                        StandingOrders: []shared.SandboxStandingOrder{
                            shared.SandboxStandingOrder{
                                Amount: sdk.Float64(2415.57),
                                Description: sdk.String("quasi"),
                                FinalPaymentDate: types.MustTimeFromString("2022-01-06T11:59:03.269Z"),
                                FirstPaymentDate: types.MustTimeFromString("2020-04-24T05:50:40.136Z"),
                                Frequency: "ipsa",
                                LastPaymentDate: types.MustTimeFromString("2022-07-13T05:21:38.727Z"),
                                NextPaymentDate: types.MustTimeFromString("2022-11-19T17:17:37.988Z"),
                                Status: sdk.String("iusto"),
                            },
                            shared.SandboxStandingOrder{
                                Amount: sdk.Float64(4570.59),
                                Description: sdk.String("praesentium"),
                                FinalPaymentDate: types.MustTimeFromString("2020-02-06T20:25:31.567Z"),
                                FirstPaymentDate: types.MustTimeFromString("2022-11-25T12:21:47.459Z"),
                                Frequency: "fugiat",
                                LastPaymentDate: types.MustTimeFromString("2022-11-19T04:18:55.408Z"),
                                NextPaymentDate: types.MustTimeFromString("2022-09-23T23:49:53.776Z"),
                                Status: sdk.String("esse"),
                            },
                        },
                        Statements: []shared.SandboxStatement{
                            shared.SandboxStatement{
                                Month: sdk.Int(235263),
                                Number: sdk.String("aliquid"),
                                Year: sdk.Int(58870),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(671384),
                                Number: sdk.String("sunt"),
                                Year: sdk.Int(344718),
                            },
                        },
                        Transactions: []shared.SandboxTransaction{
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(7137.67),
                                Amount: sdk.Float64(3996.67),
                                BookingDateTime: types.MustTimeFromString("2022-03-28T13:55:18.249Z"),
                                CreditDebit: sdk.String("aliquid"),
                                Currency: sdk.String("perferendis"),
                                Description: sdk.String("eum"),
                                Reference: sdk.String("voluptas"),
                                RelatedAccount: sdk.String("iste"),
                                RelatedName: sdk.String("id"),
                                TransactionCode: sdk.String("ab"),
                                ValueDateTime: types.MustTimeFromString("2021-05-10T15:26:02.215Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(9139.92),
                                Amount: sdk.Float64(6534.21),
                                BookingDateTime: types.MustTimeFromString("2021-07-19T18:28:47.948Z"),
                                CreditDebit: sdk.String("ad"),
                                Currency: sdk.String("deleniti"),
                                Description: sdk.String("enim"),
                                Reference: sdk.String("vitae"),
                                RelatedAccount: sdk.String("repellendus"),
                                RelatedName: sdk.String("ex"),
                                TransactionCode: sdk.String("quo"),
                                ValueDateTime: types.MustTimeFromString("2022-09-20T09:05:59.303Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(3210.43),
                                Amount: sdk.Float64(7139.27),
                                BookingDateTime: types.MustTimeFromString("2022-06-10T00:34:58.414Z"),
                                CreditDebit: sdk.String("cum"),
                                Currency: sdk.String("aliquid"),
                                Description: sdk.String("beatae"),
                                Reference: sdk.String("voluptatum"),
                                RelatedAccount: sdk.String("omnis"),
                                RelatedName: sdk.String("veritatis"),
                                TransactionCode: sdk.String("rerum"),
                                ValueDateTime: types.MustTimeFromString("2021-09-24T14:32:36.483Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(296.34),
                                Amount: sdk.Float64(9591.43),
                                BookingDateTime: types.MustTimeFromString("2022-09-09T21:19:27.244Z"),
                                CreditDebit: sdk.String("fuga"),
                                Currency: sdk.String("pariatur"),
                                Description: sdk.String("debitis"),
                                Reference: sdk.String("voluptatem"),
                                RelatedAccount: sdk.String("alias"),
                                RelatedName: sdk.String("deleniti"),
                                TransactionCode: sdk.String("earum"),
                                ValueDateTime: types.MustTimeFromString("2022-01-16T05:13:39.110Z"),
                            },
                        },
                    },
                    shared.SandboxBankAccount{
                        Beneficiaries: []shared.SandboxBeneficiary{
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Herman Zemlak"),
                            },
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Desiree Leannon"),
                            },
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Clyde Nader"),
                            },
                        },
                        Info: &shared.SandboxBankAccountInfo{
                            AccountSubType: "inventore",
                            AccountType: "deleniti",
                            Alias: sdk.String("veritatis"),
                            AvailableBalance: sdk.Float64(2745.75),
                            Currency: "dolor",
                            Description: sdk.String("consequatur"),
                            Iban: "architecto",
                            LedgerBalance: sdk.Float64(249.44),
                            OpeningDate: types.MustTimeFromString("2022-11-09T08:03:12.737Z"),
                            OverdraftLimit: sdk.Float64(661.49),
                        },
                        Party: &shared.SandboxParty{
                            ID: sdk.String("813d5208-ece7-4e25-bb66-8451c6c6e205"),
                            Name: sdk.String("Arthur Huel"),
                        },
                        ScheduledPayments: []shared.SandboxScheduledPayment{
                            shared.SandboxScheduledPayment{
                                Amount: sdk.Float64(6907.85),
                                Description: sdk.String("sequi"),
                                ExecutionDate: types.MustTimeFromString("2020-03-31T16:32:36.866Z"),
                                SenderReference: sdk.String("optio"),
                            },
                            shared.SandboxScheduledPayment{
                                Amount: sdk.Float64(5796.81),
                                Description: sdk.String("nemo"),
                                ExecutionDate: types.MustTimeFromString("2022-07-02T02:41:11.426Z"),
                                SenderReference: sdk.String("officia"),
                            },
                            shared.SandboxScheduledPayment{
                                Amount: sdk.Float64(3763.89),
                                Description: sdk.String("numquam"),
                                ExecutionDate: types.MustTimeFromString("2022-06-13T20:32:47.541Z"),
                                SenderReference: sdk.String("eius"),
                            },
                        },
                        StandingOrders: []shared.SandboxStandingOrder{
                            shared.SandboxStandingOrder{
                                Amount: sdk.Float64(4959.7),
                                Description: sdk.String("nesciunt"),
                                FinalPaymentDate: types.MustTimeFromString("2021-12-21T17:45:55.733Z"),
                                FirstPaymentDate: types.MustTimeFromString("2022-11-26T09:57:27.688Z"),
                                Frequency: "rem",
                                LastPaymentDate: types.MustTimeFromString("2022-08-25T11:14:44.041Z"),
                                NextPaymentDate: types.MustTimeFromString("2022-11-03T15:45:18.212Z"),
                                Status: sdk.String("consectetur"),
                            },
                        },
                        Statements: []shared.SandboxStatement{
                            shared.SandboxStatement{
                                Month: sdk.Int(585432),
                                Number: sdk.String("reiciendis"),
                                Year: sdk.Int(746837),
                            },
                        },
                        Transactions: []shared.SandboxTransaction{
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(6089.89),
                                Amount: sdk.Float64(1785.8),
                                BookingDateTime: types.MustTimeFromString("2021-10-10T14:34:27.546Z"),
                                CreditDebit: sdk.String("magni"),
                                Currency: sdk.String("inventore"),
                                Description: sdk.String("fuga"),
                                Reference: sdk.String("accusamus"),
                                RelatedAccount: sdk.String("voluptatibus"),
                                RelatedName: sdk.String("distinctio"),
                                TransactionCode: sdk.String("omnis"),
                                ValueDateTime: types.MustTimeFromString("2022-01-06T10:12:04.022Z"),
                            },
                        },
                    },
                    shared.SandboxBankAccount{
                        Beneficiaries: []shared.SandboxBeneficiary{
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Oscar Smith"),
                            },
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Leslie Lebsack"),
                            },
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Ignacio Bartoletti"),
                            },
                        },
                        Info: &shared.SandboxBankAccountInfo{
                            AccountSubType: "alias",
                            AccountType: "quasi",
                            Alias: sdk.String("non"),
                            AvailableBalance: sdk.Float64(9785.48),
                            Currency: "enim",
                            Description: sdk.String("sint"),
                            Iban: "nulla",
                            LedgerBalance: sdk.Float64(6436.78),
                            OpeningDate: types.MustTimeFromString("2022-08-20T23:18:24.165Z"),
                            OverdraftLimit: sdk.Float64(4445.87),
                        },
                        Party: &shared.SandboxParty{
                            ID: sdk.String("a59ecfef-66ef-41ca-a338-3c2beb477373"),
                            Name: sdk.String("Casey Sporer"),
                        },
                        ScheduledPayments: []shared.SandboxScheduledPayment{
                            shared.SandboxScheduledPayment{
                                Amount: sdk.Float64(4269.04),
                                Description: sdk.String("magnam"),
                                ExecutionDate: types.MustTimeFromString("2022-10-06T12:40:14.425Z"),
                                SenderReference: sdk.String("facere"),
                            },
                            shared.SandboxScheduledPayment{
                                Amount: sdk.Float64(7268.78),
                                Description: sdk.String("architecto"),
                                ExecutionDate: types.MustTimeFromString("2022-07-13T18:14:43.574Z"),
                                SenderReference: sdk.String("porro"),
                            },
                            shared.SandboxScheduledPayment{
                                Amount: sdk.Float64(3041.98),
                                Description: sdk.String("velit"),
                                ExecutionDate: types.MustTimeFromString("2022-12-18T15:43:31.696Z"),
                                SenderReference: sdk.String("vel"),
                            },
                            shared.SandboxScheduledPayment{
                                Amount: sdk.Float64(4069.22),
                                Description: sdk.String("beatae"),
                                ExecutionDate: types.MustTimeFromString("2021-04-18T19:14:29.683Z"),
                                SenderReference: sdk.String("eum"),
                            },
                        },
                        StandingOrders: []shared.SandboxStandingOrder{
                            shared.SandboxStandingOrder{
                                Amount: sdk.Float64(2840.86),
                                Description: sdk.String("perspiciatis"),
                                FinalPaymentDate: types.MustTimeFromString("2022-08-25T07:25:33.000Z"),
                                FirstPaymentDate: types.MustTimeFromString("2020-01-28T09:46:18.788Z"),
                                Frequency: "iste",
                                LastPaymentDate: types.MustTimeFromString("2022-12-29T01:38:46.899Z"),
                                NextPaymentDate: types.MustTimeFromString("2022-01-26T00:00:57.040Z"),
                                Status: sdk.String("velit"),
                            },
                        },
                        Statements: []shared.SandboxStatement{
                            shared.SandboxStatement{
                                Month: sdk.Int(250398),
                                Number: sdk.String("dolor"),
                                Year: sdk.Int(483394),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(24753),
                                Number: sdk.String("doloremque"),
                                Year: sdk.Int(7468),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(639705),
                                Number: sdk.String("recusandae"),
                                Year: sdk.Int(408303),
                            },
                        },
                        Transactions: []shared.SandboxTransaction{
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(3774.06),
                                Amount: sdk.Float64(7051.48),
                                BookingDateTime: types.MustTimeFromString("2021-03-19T07:24:43.140Z"),
                                CreditDebit: sdk.String("expedita"),
                                Currency: sdk.String("deleniti"),
                                Description: sdk.String("a"),
                                Reference: sdk.String("voluptate"),
                                RelatedAccount: sdk.String("ullam"),
                                RelatedName: sdk.String("unde"),
                                TransactionCode: sdk.String("necessitatibus"),
                                ValueDateTime: types.MustTimeFromString("2021-06-17T22:10:29.339Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(3730.4),
                                Amount: sdk.Float64(3574.25),
                                BookingDateTime: types.MustTimeFromString("2021-10-04T04:25:17.046Z"),
                                CreditDebit: sdk.String("esse"),
                                Currency: sdk.String("labore"),
                                Description: sdk.String("veritatis"),
                                Reference: sdk.String("vero"),
                                RelatedAccount: sdk.String("consectetur"),
                                RelatedName: sdk.String("vitae"),
                                TransactionCode: sdk.String("inventore"),
                                ValueDateTime: types.MustTimeFromString("2022-09-05T11:07:40.496Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(1830.33),
                                Amount: sdk.Float64(6113.28),
                                BookingDateTime: types.MustTimeFromString("2022-08-19T19:35:40.341Z"),
                                CreditDebit: sdk.String("soluta"),
                                Currency: sdk.String("libero"),
                                Description: sdk.String("rem"),
                                Reference: sdk.String("dolorum"),
                                RelatedAccount: sdk.String("odio"),
                                RelatedName: sdk.String("fugit"),
                                TransactionCode: sdk.String("alias"),
                                ValueDateTime: types.MustTimeFromString("2022-07-29T17:28:50.439Z"),
                            },
                        },
                    },
                    shared.SandboxBankAccount{
                        Beneficiaries: []shared.SandboxBeneficiary{
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Pauline Durgan"),
                            },
                        },
                        Info: &shared.SandboxBankAccountInfo{
                            AccountSubType: "et",
                            AccountType: "ipsum",
                            Alias: sdk.String("unde"),
                            AvailableBalance: sdk.Float64(8583.38),
                            Currency: "distinctio",
                            Description: sdk.String("maxime"),
                            Iban: "quia",
                            LedgerBalance: sdk.Float64(1591.46),
                            OpeningDate: types.MustTimeFromString("2022-05-24T21:57:47.411Z"),
                            OverdraftLimit: sdk.Float64(7272.5),
                        },
                        Party: &shared.SandboxParty{
                            ID: sdk.String("1abda8c0-70e1-4084-8b06-72d1ad879eeb"),
                            Name: sdk.String("Angel Jones"),
                        },
                        ScheduledPayments: []shared.SandboxScheduledPayment{
                            shared.SandboxScheduledPayment{
                                Amount: sdk.Float64(3572.07),
                                Description: sdk.String("officiis"),
                                ExecutionDate: types.MustTimeFromString("2020-10-15T16:19:08.064Z"),
                                SenderReference: sdk.String("at"),
                            },
                            shared.SandboxScheduledPayment{
                                Amount: sdk.Float64(51.52),
                                Description: sdk.String("quia"),
                                ExecutionDate: types.MustTimeFromString("2021-08-19T14:07:01.740Z"),
                                SenderReference: sdk.String("repudiandae"),
                            },
                            shared.SandboxScheduledPayment{
                                Amount: sdk.Float64(340.7),
                                Description: sdk.String("expedita"),
                                ExecutionDate: types.MustTimeFromString("2022-06-21T04:17:16.724Z"),
                                SenderReference: sdk.String("quibusdam"),
                            },
                        },
                        StandingOrders: []shared.SandboxStandingOrder{
                            shared.SandboxStandingOrder{
                                Amount: sdk.Float64(5101.28),
                                Description: sdk.String("odit"),
                                FinalPaymentDate: types.MustTimeFromString("2022-08-22T23:12:04.283Z"),
                                FirstPaymentDate: types.MustTimeFromString("2021-02-15T21:42:33.554Z"),
                                Frequency: "adipisci",
                                LastPaymentDate: types.MustTimeFromString("2021-02-09T04:42:29.895Z"),
                                NextPaymentDate: types.MustTimeFromString("2022-04-22T18:47:14.845Z"),
                                Status: sdk.String("quis"),
                            },
                            shared.SandboxStandingOrder{
                                Amount: sdk.Float64(1062.55),
                                Description: sdk.String("unde"),
                                FinalPaymentDate: types.MustTimeFromString("2022-01-14T10:23:30.043Z"),
                                FirstPaymentDate: types.MustTimeFromString("2022-09-15T02:31:13.378Z"),
                                Frequency: "numquam",
                                LastPaymentDate: types.MustTimeFromString("2022-10-19T15:08:58.907Z"),
                                NextPaymentDate: types.MustTimeFromString("2021-02-01T13:09:02.595Z"),
                                Status: sdk.String("dignissimos"),
                            },
                        },
                        Statements: []shared.SandboxStatement{
                            shared.SandboxStatement{
                                Month: sdk.Int(898961),
                                Number: sdk.String("corporis"),
                                Year: sdk.Int(185518),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(708898),
                                Number: sdk.String("voluptatum"),
                                Year: sdk.Int(587375),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(326269),
                                Number: sdk.String("placeat"),
                                Year: sdk.Int(316542),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(204072),
                                Number: sdk.String("in"),
                                Year: sdk.Int(796397),
                            },
                        },
                        Transactions: []shared.SandboxTransaction{
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(2664.08),
                                Amount: sdk.Float64(3573.47),
                                BookingDateTime: types.MustTimeFromString("2022-02-01T00:51:21.880Z"),
                                CreditDebit: sdk.String("maiores"),
                                Currency: sdk.String("tempore"),
                                Description: sdk.String("aperiam"),
                                Reference: sdk.String("libero"),
                                RelatedAccount: sdk.String("ratione"),
                                RelatedName: sdk.String("labore"),
                                TransactionCode: sdk.String("totam"),
                                ValueDateTime: types.MustTimeFromString("2022-04-01T12:34:49.074Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(7791.8),
                                Amount: sdk.Float64(2420.99),
                                BookingDateTime: types.MustTimeFromString("2020-12-12T09:57:14.382Z"),
                                CreditDebit: sdk.String("nostrum"),
                                Currency: sdk.String("est"),
                                Description: sdk.String("impedit"),
                                Reference: sdk.String("delectus"),
                                RelatedAccount: sdk.String("tempore"),
                                RelatedName: sdk.String("vero"),
                                TransactionCode: sdk.String("odit"),
                                ValueDateTime: types.MustTimeFromString("2020-05-27T18:57:10.901Z"),
                            },
                        },
                    },
                },
                Cards: []shared.SandboxCard{
                    shared.SandboxCard{
                        Info: &shared.SandboxCardInfo{
                            AvailableBalance: sdk.Float64(4413.21),
                            CreditLimit: sdk.Float64(452.34),
                            Description: sdk.String("odio"),
                            Expiration: "minima",
                            HolderName: "in",
                            LedgerBalance: sdk.Float64(4969.15),
                            Number: "excepturi",
                            SubType: sdk.String("dolores"),
                            Type: sdk.String("error"),
                        },
                        Party: &shared.SandboxParty{
                            ID: sdk.String("177deac6-46ec-4b57-b409-e3eb1e5a2b12"),
                            Name: sdk.String("Robin Bednar"),
                        },
                        Statements: []shared.SandboxStatement{
                            shared.SandboxStatement{
                                Month: sdk.Int(96450),
                                Number: sdk.String("laboriosam"),
                                Year: sdk.Int(863471),
                            },
                        },
                        Transactions: []shared.SandboxTransaction{
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(5665.06),
                                Amount: sdk.Float64(5782.1),
                                BookingDateTime: types.MustTimeFromString("2022-09-11T04:05:16.062Z"),
                                CreditDebit: sdk.String("nostrum"),
                                Currency: sdk.String("doloribus"),
                                Description: sdk.String("eligendi"),
                                Reference: sdk.String("sint"),
                                RelatedAccount: sdk.String("enim"),
                                RelatedName: sdk.String("hic"),
                                TransactionCode: sdk.String("animi"),
                                ValueDateTime: types.MustTimeFromString("2021-12-19T08:26:48.749Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(5646.67),
                                Amount: sdk.Float64(4849.66),
                                BookingDateTime: types.MustTimeFromString("2022-02-06T01:49:09.565Z"),
                                CreditDebit: sdk.String("architecto"),
                                Currency: sdk.String("quos"),
                                Description: sdk.String("iste"),
                                Reference: sdk.String("assumenda"),
                                RelatedAccount: sdk.String("tempore"),
                                RelatedName: sdk.String("libero"),
                                TransactionCode: sdk.String("velit"),
                                ValueDateTime: types.MustTimeFromString("2022-01-14T03:34:21.654Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(7731.1),
                                Amount: sdk.Float64(7412.38),
                                BookingDateTime: types.MustTimeFromString("2022-10-06T03:01:15.693Z"),
                                CreditDebit: sdk.String("saepe"),
                                Currency: sdk.String("deserunt"),
                                Description: sdk.String("doloremque"),
                                Reference: sdk.String("quis"),
                                RelatedAccount: sdk.String("veniam"),
                                RelatedName: sdk.String("libero"),
                                TransactionCode: sdk.String("architecto"),
                                ValueDateTime: types.MustTimeFromString("2022-01-18T19:40:42.789Z"),
                            },
                        },
                    },
                    shared.SandboxCard{
                        Info: &shared.SandboxCardInfo{
                            AvailableBalance: sdk.Float64(7566.54),
                            CreditLimit: sdk.Float64(8200.23),
                            Description: sdk.String("non"),
                            Expiration: "magnam",
                            HolderName: "itaque",
                            LedgerBalance: sdk.Float64(1509.35),
                            Number: "asperiores",
                            SubType: sdk.String("veniam"),
                            Type: sdk.String("consequuntur"),
                        },
                        Party: &shared.SandboxParty{
                            ID: sdk.String("d82d3513-bb6f-448b-a56b-cdb35ff2e4b2"),
                            Name: sdk.String("Audrey Durgan"),
                        },
                        Statements: []shared.SandboxStatement{
                            shared.SandboxStatement{
                                Month: sdk.Int(753890),
                                Number: sdk.String("fugiat"),
                                Year: sdk.Int(604078),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(889448),
                                Number: sdk.String("ducimus"),
                                Year: sdk.Int(220104),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(118041),
                                Number: sdk.String("error"),
                                Year: sdk.Int(784731),
                            },
                        },
                        Transactions: []shared.SandboxTransaction{
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(4915.91),
                                Amount: sdk.Float64(4589.7),
                                BookingDateTime: types.MustTimeFromString("2022-01-13T01:04:27.808Z"),
                                CreditDebit: sdk.String("aspernatur"),
                                Currency: sdk.String("enim"),
                                Description: sdk.String("delectus"),
                                Reference: sdk.String("iusto"),
                                RelatedAccount: sdk.String("dignissimos"),
                                RelatedName: sdk.String("libero"),
                                TransactionCode: sdk.String("illo"),
                                ValueDateTime: types.MustTimeFromString("2022-09-20T18:12:12.240Z"),
                            },
                        },
                    },
                },
                RetryCacheEntries: []shared.SandboxRetryCacheEntry{
                    shared.SandboxRetryCacheEntry{
                        CacheKey: sdk.String("saepe"),
                        Count: sdk.Int(734814),
                        ExpirationTimestamp: types.MustTimeFromString("2022-10-28T13:51:54.669Z"),
                    },
                    shared.SandboxRetryCacheEntry{
                        CacheKey: sdk.String("reiciendis"),
                        Count: sdk.Int(939161),
                        ExpirationTimestamp: types.MustTimeFromString("2022-06-30T04:42:17.193Z"),
                    },
                    shared.SandboxRetryCacheEntry{
                        CacheKey: sdk.String("nemo"),
                        Count: sdk.Int(999809),
                        ExpirationTimestamp: types.MustTimeFromString("2022-05-30T00:01:15.072Z"),
                    },
                    shared.SandboxRetryCacheEntry{
                        CacheKey: sdk.String("nihil"),
                        Count: sdk.Int(534908),
                        ExpirationTimestamp: types.MustTimeFromString("2022-09-17T01:25:37.017Z"),
                    },
                },
                UserID: sdk.String("assumenda"),
            },
            shared.SandboxUser{
                Accounts: []shared.SandboxBankAccount{
                    shared.SandboxBankAccount{
                        Beneficiaries: []shared.SandboxBeneficiary{
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Dr. Armando Waelchi"),
                            },
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Rudolph Macejkovic"),
                            },
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Julio Hessel"),
                            },
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Elmer Emard"),
                            },
                        },
                        Info: &shared.SandboxBankAccountInfo{
                            AccountSubType: "commodi",
                            AccountType: "aut",
                            Alias: sdk.String("voluptatem"),
                            AvailableBalance: sdk.Float64(3228.29),
                            Currency: "quae",
                            Description: sdk.String("amet"),
                            Iban: "illum",
                            LedgerBalance: sdk.Float64(5068.63),
                            OpeningDate: types.MustTimeFromString("2021-07-12T02:19:57.085Z"),
                            OverdraftLimit: sdk.Float64(2304.11),
                        },
                        Party: &shared.SandboxParty{
                            ID: sdk.String("1180f739-ae9e-4057-ab80-9e2810331f39"),
                            Name: sdk.String("Albert Stroman"),
                        },
                        ScheduledPayments: []shared.SandboxScheduledPayment{
                            shared.SandboxScheduledPayment{
                                Amount: sdk.Float64(323.56),
                                Description: sdk.String("perferendis"),
                                ExecutionDate: types.MustTimeFromString("2022-03-06T12:29:45.421Z"),
                                SenderReference: sdk.String("aperiam"),
                            },
                            shared.SandboxScheduledPayment{
                                Amount: sdk.Float64(4894.59),
                                Description: sdk.String("repellat"),
                                ExecutionDate: types.MustTimeFromString("2022-03-20T19:09:29.668Z"),
                                SenderReference: sdk.String("provident"),
                            },
                        },
                        StandingOrders: []shared.SandboxStandingOrder{
                            shared.SandboxStandingOrder{
                                Amount: sdk.Float64(7532.4),
                                Description: sdk.String("dignissimos"),
                                FinalPaymentDate: types.MustTimeFromString("2022-04-04T09:40:23.441Z"),
                                FirstPaymentDate: types.MustTimeFromString("2021-04-27T22:35:22.648Z"),
                                Frequency: "officia",
                                LastPaymentDate: types.MustTimeFromString("2022-01-19T18:47:13.006Z"),
                                NextPaymentDate: types.MustTimeFromString("2022-03-22T22:18:02.609Z"),
                                Status: sdk.String("itaque"),
                            },
                        },
                        Statements: []shared.SandboxStatement{
                            shared.SandboxStatement{
                                Month: sdk.Int(670762),
                                Number: sdk.String("dignissimos"),
                                Year: sdk.Int(876285),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(185348),
                                Number: sdk.String("consectetur"),
                                Year: sdk.Int(995816),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(128696),
                                Number: sdk.String("explicabo"),
                                Year: sdk.Int(350325),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(471457),
                                Number: sdk.String("non"),
                                Year: sdk.Int(68093),
                            },
                        },
                        Transactions: []shared.SandboxTransaction{
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(9438.51),
                                Amount: sdk.Float64(6444.79),
                                BookingDateTime: types.MustTimeFromString("2022-03-31T22:08:57.998Z"),
                                CreditDebit: sdk.String("distinctio"),
                                Currency: sdk.String("in"),
                                Description: sdk.String("exercitationem"),
                                Reference: sdk.String("labore"),
                                RelatedAccount: sdk.String("numquam"),
                                RelatedName: sdk.String("repudiandae"),
                                TransactionCode: sdk.String("modi"),
                                ValueDateTime: types.MustTimeFromString("2022-11-15T12:54:14.890Z"),
                            },
                        },
                    },
                    shared.SandboxBankAccount{
                        Beneficiaries: []shared.SandboxBeneficiary{
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Kevin Conroy"),
                            },
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Marguerite Hansen"),
                            },
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Emma Keeling"),
                            },
                            shared.SandboxBeneficiary{
                                Name: sdk.String("Hope Hegmann"),
                            },
                        },
                        Info: &shared.SandboxBankAccountInfo{
                            AccountSubType: "reiciendis",
                            AccountType: "ab",
                            Alias: sdk.String("modi"),
                            AvailableBalance: sdk.Float64(138.65),
                            Currency: "aut",
                            Description: sdk.String("eveniet"),
                            Iban: "odio",
                            LedgerBalance: sdk.Float64(4137.58),
                            OpeningDate: types.MustTimeFromString("2022-04-28T21:05:23.278Z"),
                            OverdraftLimit: sdk.Float64(8237.18),
                        },
                        Party: &shared.SandboxParty{
                            ID: sdk.String("7334ec1b-781b-436a-8808-8d100efada20"),
                            Name: sdk.String("Mrs. Olive Weissnat"),
                        },
                        ScheduledPayments: []shared.SandboxScheduledPayment{
                            shared.SandboxScheduledPayment{
                                Amount: sdk.Float64(8959.12),
                                Description: sdk.String("harum"),
                                ExecutionDate: types.MustTimeFromString("2022-11-22T06:00:10.696Z"),
                                SenderReference: sdk.String("aliquid"),
                            },
                        },
                        StandingOrders: []shared.SandboxStandingOrder{
                            shared.SandboxStandingOrder{
                                Amount: sdk.Float64(7600.49),
                                Description: sdk.String("voluptatibus"),
                                FinalPaymentDate: types.MustTimeFromString("2021-09-21T04:36:43.651Z"),
                                FirstPaymentDate: types.MustTimeFromString("2021-12-16T21:43:29.741Z"),
                                Frequency: "sequi",
                                LastPaymentDate: types.MustTimeFromString("2022-08-03T14:25:13.657Z"),
                                NextPaymentDate: types.MustTimeFromString("2021-07-04T06:21:37.852Z"),
                                Status: sdk.String("odit"),
                            },
                            shared.SandboxStandingOrder{
                                Amount: sdk.Float64(2436.23),
                                Description: sdk.String("reiciendis"),
                                FinalPaymentDate: types.MustTimeFromString("2020-06-02T01:41:14.280Z"),
                                FirstPaymentDate: types.MustTimeFromString("2021-10-07T02:38:58.799Z"),
                                Frequency: "accusamus",
                                LastPaymentDate: types.MustTimeFromString("2022-08-10T13:36:39.170Z"),
                                NextPaymentDate: types.MustTimeFromString("2021-02-24T20:48:23.002Z"),
                                Status: sdk.String("voluptates"),
                            },
                        },
                        Statements: []shared.SandboxStatement{
                            shared.SandboxStatement{
                                Month: sdk.Int(524577),
                                Number: sdk.String("quia"),
                                Year: sdk.Int(354225),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(786860),
                                Number: sdk.String("dicta"),
                                Year: sdk.Int(973017),
                            },
                        },
                        Transactions: []shared.SandboxTransaction{
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(620.35),
                                Amount: sdk.Float64(8850.22),
                                BookingDateTime: types.MustTimeFromString("2022-11-25T09:47:39.954Z"),
                                CreditDebit: sdk.String("enim"),
                                Currency: sdk.String("optio"),
                                Description: sdk.String("rem"),
                                Reference: sdk.String("perferendis"),
                                RelatedAccount: sdk.String("facilis"),
                                RelatedName: sdk.String("reiciendis"),
                                TransactionCode: sdk.String("a"),
                                ValueDateTime: types.MustTimeFromString("2022-10-06T23:47:52.743Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(5524.39),
                                Amount: sdk.Float64(3563.15),
                                BookingDateTime: types.MustTimeFromString("2022-09-25T19:21:07.516Z"),
                                CreditDebit: sdk.String("itaque"),
                                Currency: sdk.String("maxime"),
                                Description: sdk.String("modi"),
                                Reference: sdk.String("consequuntur"),
                                RelatedAccount: sdk.String("assumenda"),
                                RelatedName: sdk.String("vero"),
                                TransactionCode: sdk.String("doloribus"),
                                ValueDateTime: types.MustTimeFromString("2020-08-26T04:20:10.413Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(8838.19),
                                Amount: sdk.Float64(5189.9),
                                BookingDateTime: types.MustTimeFromString("2022-10-20T15:34:05.164Z"),
                                CreditDebit: sdk.String("sint"),
                                Currency: sdk.String("nihil"),
                                Description: sdk.String("esse"),
                                Reference: sdk.String("iure"),
                                RelatedAccount: sdk.String("odio"),
                                RelatedName: sdk.String("nesciunt"),
                                TransactionCode: sdk.String("debitis"),
                                ValueDateTime: types.MustTimeFromString("2022-10-16T19:56:01.806Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(3577.58),
                                Amount: sdk.Float64(3753.5),
                                BookingDateTime: types.MustTimeFromString("2022-05-11T23:40:31.478Z"),
                                CreditDebit: sdk.String("reprehenderit"),
                                Currency: sdk.String("distinctio"),
                                Description: sdk.String("eius"),
                                Reference: sdk.String("ipsa"),
                                RelatedAccount: sdk.String("rem"),
                                RelatedName: sdk.String("maiores"),
                                TransactionCode: sdk.String("accusantium"),
                                ValueDateTime: types.MustTimeFromString("2022-02-04T05:24:45.768Z"),
                            },
                        },
                    },
                },
                Cards: []shared.SandboxCard{
                    shared.SandboxCard{
                        Info: &shared.SandboxCardInfo{
                            AvailableBalance: sdk.Float64(8163.65),
                            CreditLimit: sdk.Float64(3071.73),
                            Description: sdk.String("quos"),
                            Expiration: "doloribus",
                            HolderName: "fugiat",
                            LedgerBalance: sdk.Float64(6685.77),
                            Number: "delectus",
                            SubType: sdk.String("velit"),
                            Type: sdk.String("vitae"),
                        },
                        Party: &shared.SandboxParty{
                            ID: sdk.String("3a1f5fd9-4259-4c0b-b6f2-5ea944f3b756"),
                            Name: sdk.String("Andrew Brekke"),
                        },
                        Statements: []shared.SandboxStatement{
                            shared.SandboxStatement{
                                Month: sdk.Int(221218),
                                Number: sdk.String("ducimus"),
                                Year: sdk.Int(683727),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(326903),
                                Number: sdk.String("architecto"),
                                Year: sdk.Int(181476),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(397026),
                                Number: sdk.String("magni"),
                                Year: sdk.Int(276650),
                            },
                            shared.SandboxStatement{
                                Month: sdk.Int(240490),
                                Number: sdk.String("praesentium"),
                                Year: sdk.Int(220528),
                            },
                        },
                        Transactions: []shared.SandboxTransaction{
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(7097.01),
                                Amount: sdk.Float64(7064.11),
                                BookingDateTime: types.MustTimeFromString("2022-12-05T02:06:55.835Z"),
                                CreditDebit: sdk.String("nemo"),
                                Currency: sdk.String("culpa"),
                                Description: sdk.String("consequuntur"),
                                Reference: sdk.String("amet"),
                                RelatedAccount: sdk.String("deserunt"),
                                RelatedName: sdk.String("modi"),
                                TransactionCode: sdk.String("veniam"),
                                ValueDateTime: types.MustTimeFromString("2020-03-16T04:29:27.854Z"),
                            },
                            shared.SandboxTransaction{
                                AccountingBalance: sdk.Float64(9555.69),
                                Amount: sdk.Float64(7886.61),
                                BookingDateTime: types.MustTimeFromString("2022-01-05T11:14:11.433Z"),
                                CreditDebit: sdk.String("assumenda"),
                                Currency: sdk.String("officiis"),
                                Description: sdk.String("architecto"),
                                Reference: sdk.String("alias"),
                                RelatedAccount: sdk.String("culpa"),
                                RelatedName: sdk.String("ipsa"),
                                TransactionCode: sdk.String("nobis"),
                                ValueDateTime: types.MustTimeFromString("2022-07-14T04:53:58.786Z"),
                            },
                        },
                    },
                },
                RetryCacheEntries: []shared.SandboxRetryCacheEntry{
                    shared.SandboxRetryCacheEntry{
                        CacheKey: sdk.String("vel"),
                        Count: sdk.Int(595584),
                        ExpirationTimestamp: types.MustTimeFromString("2021-12-08T11:18:01.432Z"),
                    },
                },
                UserID: sdk.String("architecto"),
            },
        },
    }, operations.PutSandboxSecurity{
        AuthorizationCodeToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
