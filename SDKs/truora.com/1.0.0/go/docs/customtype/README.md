# CustomType

## Overview

The Custom Type API allows the creation of new products so only desired datasets are included in background checks.

## Score Configuration
The `ScoreConfig` object has `Rules` to apply to related *databases* which are summed up creating a `Score` which is associated to a *dataset* of a background `check`. All weights given to the configuration must sum up 1.


### Available Operations

* [DeleteCustomType](#deletecustomtype) - Delete Custom Type
* [UpdateCustomType](#updatecustomtype) - Update Custom Type
* [CreateScoreConfig](#createscoreconfig) - Create Score Configurations
* [ListScoreConfigs](#listscoreconfigs) - List Score Configurations

## DeleteCustomType

Allows deleting a custom type. Person, vehicle, and company types cannot be deleted

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
    res, err := s.CustomType.DeleteCustomType(ctx, operations.DeleteCustomTypeRequest{
        Country: operations.DeleteCustomTypeCountryEnumAll.ToPointer(),
        Type: "quidem",
    }, operations.DeleteCustomTypeSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCustomType

Allows updating a custom type. Person, vehicle, and company types are not modifiable

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
    res, err := s.CustomType.UpdateCustomType(ctx, shared.CreateConfigInput{
        Country: shared.CreateConfigInputCountryEnumAll,
        DatasetAffiliationsAndInsurances: sdk.Float32(602.25),
        DatasetAlertInMedia: sdk.Float32(9698.1),
        DatasetBusinessBackground: sdk.Float32(6667.67),
        DatasetCriminalRecord: sdk.Float32(6531.4),
        DatasetDrivingLicenses: sdk.Float32(6706.38),
        DatasetInternationalBackground: sdk.Float32(1709.09),
        DatasetLegalBackground: sdk.Float32(2103.82),
        DatasetPersonalIdentity: sdk.Float32(3581.52),
        DatasetProfessionalBackground: sdk.Float32(1289.26),
        DatasetTaxesAndFinances: sdk.Float32(7506.86),
        DatasetTrafficFines: sdk.Float32(3154.28),
        DatasetVehicleInformation: sdk.Float32(6078.31),
        DatasetVehiclePermits: sdk.Float32(3637.11),
        Type: "minima",
    }, operations.UpdateCustomTypeSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateScoreConfig

Create a custom score configuration selecting the weight for each background check dataset and the country where it applies. Weights are numbers between 0 and 1 that represent how impactful the dataset is for the score. Keep in mind that the sum of all weights must equal 1.

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CustomType.CreateScoreConfig(ctx, shared.CreateConfigInput{
        Country: shared.CreateConfigInputCountryEnumEc,
        DatasetAffiliationsAndInsurances: sdk.Float32(384.25),
        DatasetAlertInMedia: sdk.Float32(4386.01),
        DatasetBusinessBackground: sdk.Float32(6342.74),
        DatasetCriminalRecord: sdk.Float32(9883.74),
        DatasetDrivingLicenses: sdk.Float32(9589.5),
        DatasetInternationalBackground: sdk.Float32(1020.44),
        DatasetLegalBackground: sdk.Float32(6527.9),
        DatasetPersonalIdentity: sdk.Float32(2088.76),
        DatasetProfessionalBackground: sdk.Float32(6350.59),
        DatasetTaxesAndFinances: sdk.Float32(1613.09),
        DatasetTrafficFines: sdk.Float32(9953),
        DatasetVehicleInformation: sdk.Float32(6531.08),
        DatasetVehiclePermits: sdk.Float32(5818.5),
        Type: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreConfigOutput != nil {
        // handle response
    }
}
```

## ListScoreConfigs

Lists the custom score configurations of the associated account.

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CustomType.ListScoreConfigs(ctx, operations.ListScoreConfigsRequest{
        StartKey: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreConfigsOutput != nil {
        // handle response
    }
}
```
