# Locations

### Available Operations

* [CreateLocation](#createlocation) - CreateLocation
* [ListLocations](#listlocations) - ListLocations
* [RetrieveLocation](#retrievelocation) - RetrieveLocation
* [UpdateLocation](#updatelocation) - UpdateLocation

## CreateLocation

Creates a location.

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
    res, err := s.Locations.CreateLocation(ctx, shared.CreateLocationRequest{
        Location: &shared.Location{
            Address: &shared.Address{
                AddressLine1: sdk.String("exercitationem"),
                AddressLine2: sdk.String("quis"),
                AddressLine3: sdk.String("quos"),
                AdministrativeDistrictLevel1: sdk.String("impedit"),
                AdministrativeDistrictLevel2: sdk.String("cupiditate"),
                AdministrativeDistrictLevel3: sdk.String("excepturi"),
                Country: sdk.String("Sierra Leone"),
                FirstName: sdk.String("Icie"),
                LastName: sdk.String("Corwin"),
                Locality: sdk.String("odit"),
                Organization: sdk.String("quibusdam"),
                PostalCode: sdk.String("77095"),
                Sublocality: sdk.String("numquam"),
                Sublocality2: sdk.String("voluptatem"),
                Sublocality3: sdk.String("voluptatum"),
            },
            BusinessEmail: sdk.String("ducimus"),
            BusinessHours: &shared.BusinessHours{
                Periods: []shared.BusinessHoursPeriod{
                    shared.BusinessHoursPeriod{
                        DayOfWeek: sdk.String("unde"),
                        EndLocalTime: sdk.String("maxime"),
                        StartLocalTime: sdk.String("culpa"),
                    },
                    shared.BusinessHoursPeriod{
                        DayOfWeek: sdk.String("deserunt"),
                        EndLocalTime: sdk.String("recusandae"),
                        StartLocalTime: sdk.String("doloremque"),
                    },
                    shared.BusinessHoursPeriod{
                        DayOfWeek: sdk.String("magnam"),
                        EndLocalTime: sdk.String("quia"),
                        StartLocalTime: sdk.String("quibusdam"),
                    },
                    shared.BusinessHoursPeriod{
                        DayOfWeek: sdk.String("temporibus"),
                        EndLocalTime: sdk.String("voluptate"),
                        StartLocalTime: sdk.String("placeat"),
                    },
                },
            },
            BusinessName: sdk.String("est"),
            Capabilities: []string{
                "placeat",
                "occaecati",
                "nam",
            },
            Coordinates: &shared.Coordinates{
                Latitude: sdk.Float64(2667.52),
                Longitude: sdk.Float64(7955.01),
            },
            Country: sdk.String("Northern Mariana Islands"),
            CreatedAt: sdk.String("culpa"),
            Currency: sdk.String("beatae"),
            Description: sdk.String("quod"),
            FacebookURL: sdk.String("a"),
            FullFormatLogoURL: sdk.String("eveniet"),
            ID: sdk.String("9e15df90-3907-4f37-8319-83d42e54a854"),
            InstagramUsername: sdk.String("commodi"),
            LanguageCode: sdk.String("commodi"),
            LogoURL: sdk.String("quis"),
            Mcc: sdk.String("provident"),
            MerchantID: sdk.String("iusto"),
            Name: sdk.String("Clyde Adams"),
            PhoneNumber: sdk.String("nesciunt"),
            PosBackgroundURL: sdk.String("maxime"),
            Status: sdk.String("inventore"),
            TaxIds: &shared.TaxIds{
                EuVat: sdk.String("modi"),
                FrNaf: sdk.String("nihil"),
                FrSiret: sdk.String("vitae"),
            },
            Timezone: sdk.String("quibusdam"),
            TwitterUsername: sdk.String("veniam"),
            Type: sdk.String("et"),
            WebsiteURL: sdk.String("dolorum"),
        },
    }, operations.CreateLocationSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLocationResponse != nil {
        // handle response
    }
}
```

## ListLocations

Provides information of all locations of a business.

Many Square API endpoints require a `location_id` parameter.
The `id` field of the [`Location`](https://developer.squareup.com/reference/square_2021-08-18/objects/Location) objects returned by this
endpoint correspond to that `location_id` parameter.

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
    res, err := s.Locations.ListLocations(ctx, operations.ListLocationsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## RetrieveLocation

Retrieves details of a location. You can specify "main" 
as the location ID to retrieve details of the 
main location.

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
    res, err := s.Locations.RetrieveLocation(ctx, operations.RetrieveLocationRequest{
        LocationID: "animi",
    }, operations.RetrieveLocationSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveLocationResponse != nil {
        // handle response
    }
}
```

## UpdateLocation

Updates a location.

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
    res, err := s.Locations.UpdateLocation(ctx, operations.UpdateLocationRequest{
        UpdateLocationRequest: shared.UpdateLocationRequest{
            Location: &shared.Location{
                Address: &shared.Address{
                    AddressLine1: sdk.String("mollitia"),
                    AddressLine2: sdk.String("autem"),
                    AddressLine3: sdk.String("illum"),
                    AdministrativeDistrictLevel1: sdk.String("at"),
                    AdministrativeDistrictLevel2: sdk.String("hic"),
                    AdministrativeDistrictLevel3: sdk.String("nemo"),
                    Country: sdk.String("Pakistan"),
                    FirstName: sdk.String("Maud"),
                    LastName: sdk.String("Stokes"),
                    Locality: sdk.String("aliquid"),
                    Organization: sdk.String("eius"),
                    PostalCode: sdk.String("47397-1754"),
                    Sublocality: sdk.String("aspernatur"),
                    Sublocality2: sdk.String("est"),
                    Sublocality3: sdk.String("voluptatem"),
                },
                BusinessEmail: sdk.String("aut"),
                BusinessHours: &shared.BusinessHours{
                    Periods: []shared.BusinessHoursPeriod{
                        shared.BusinessHoursPeriod{
                            DayOfWeek: sdk.String("saepe"),
                            EndLocalTime: sdk.String("maiores"),
                            StartLocalTime: sdk.String("autem"),
                        },
                        shared.BusinessHoursPeriod{
                            DayOfWeek: sdk.String("perspiciatis"),
                            EndLocalTime: sdk.String("saepe"),
                            StartLocalTime: sdk.String("illo"),
                        },
                        shared.BusinessHoursPeriod{
                            DayOfWeek: sdk.String("aperiam"),
                            EndLocalTime: sdk.String("quae"),
                            StartLocalTime: sdk.String("veritatis"),
                        },
                    },
                },
                BusinessName: sdk.String("enim"),
                Capabilities: []string{
                    "suscipit",
                    "dolor",
                },
                Coordinates: &shared.Coordinates{
                    Latitude: sdk.Float64(38.66),
                    Longitude: sdk.Float64(7301.78),
                },
                Country: sdk.String("Sudan"),
                CreatedAt: sdk.String("fuga"),
                Currency: sdk.String("nihil"),
                Description: sdk.String("similique"),
                FacebookURL: sdk.String("repellat"),
                FullFormatLogoURL: sdk.String("quibusdam"),
                ID: sdk.String("ed84a35a-4123-48e1-a735-ac26ae33bef9"),
                InstagramUsername: sdk.String("dignissimos"),
                LanguageCode: sdk.String("dicta"),
                LogoURL: sdk.String("id"),
                Mcc: sdk.String("blanditiis"),
                MerchantID: sdk.String("repellat"),
                Name: sdk.String("Vicki Rohan"),
                PhoneNumber: sdk.String("architecto"),
                PosBackgroundURL: sdk.String("quae"),
                Status: sdk.String("aut"),
                TaxIds: &shared.TaxIds{
                    EuVat: sdk.String("commodi"),
                    FrNaf: sdk.String("delectus"),
                    FrSiret: sdk.String("officiis"),
                },
                Timezone: sdk.String("omnis"),
                TwitterUsername: sdk.String("ea"),
                Type: sdk.String("ipsam"),
                WebsiteURL: sdk.String("soluta"),
            },
        },
        LocationID: "esse",
    }, operations.UpdateLocationSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLocationResponse != nil {
        // handle response
    }
}
```
