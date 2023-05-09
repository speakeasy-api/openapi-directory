# SensitiveData

### Available Operations

* [AddOrUpdateSensitiveData](#addorupdatesensitivedata) - Add/update sensitive data
* [GetSensitiveData](#getsensitivedata) - Get sensitive data

## AddOrUpdateSensitiveData

Sends new or updated employee sensitive data information directly to Web Pay.

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
    res, err := s.SensitiveData.AddOrUpdateSensitiveData(ctx, operations.AddOrUpdateSensitiveDataRequest{
        CompanyID: "fugiat",
        EmployeeID: "expedita",
        SensitiveData: shared.SensitiveData{
            Disability: &shared.SensitiveDataDisability{
                Disability: sdk.String("aliquid"),
                DisabilityClassifications: []shared.SensitiveDataDisabilityDisabilityClassifications{
                    shared.SensitiveDataDisabilityDisabilityClassifications{
                        Classification: sdk.String("suscipit"),
                    },
                    shared.SensitiveDataDisabilityDisabilityClassifications{
                        Classification: sdk.String("aliquid"),
                    },
                    shared.SensitiveDataDisabilityDisabilityClassifications{
                        Classification: sdk.String("perferendis"),
                    },
                },
                HasDisability: sdk.String("eum"),
            },
            Ethnicity: &shared.SensitiveDataEthnicity{
                EthnicRacialIdentities: []shared.SensitiveDataEthnicityEthnicRacialIdentities{
                    shared.SensitiveDataEthnicityEthnicRacialIdentities{
                        Description: sdk.String("iste"),
                    },
                    shared.SensitiveDataEthnicityEthnicRacialIdentities{
                        Description: sdk.String("id"),
                    },
                },
                Ethnicity: sdk.String("ab"),
            },
            Gender: &shared.SensitiveDataGender{
                DisplayPronouns: sdk.Bool(false),
                GenderIdentityDescription: sdk.String("error"),
                IdentifyAsLegalGender: sdk.String("possimus"),
                LegalGender: sdk.String("voluptates"),
                Pronouns: sdk.String("mollitia"),
                SexualOrientation: sdk.String("laborum"),
            },
            Veteran: &shared.SensitiveDataVeteran{
                IsVeteran: sdk.String("libero"),
                Veteran: sdk.String("ad"),
            },
        },
    }, operations.AddOrUpdateSensitiveDataSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSensitiveData

Gets employee sensitive data information directly from Web Pay.

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
    res, err := s.SensitiveData.GetSensitiveData(ctx, operations.GetSensitiveDataRequest{
        CompanyID: "deleniti",
        EmployeeID: "enim",
    }, operations.GetSensitiveDataSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SensitiveData != nil {
        // handle response
    }
}
```
