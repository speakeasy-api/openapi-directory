# Resources

### Available Operations

* [DirectoryResourcesBuildingsDelete](#directoryresourcesbuildingsdelete) - Deletes a building.
* [DirectoryResourcesBuildingsGet](#directoryresourcesbuildingsget) - Retrieves a building.
* [DirectoryResourcesBuildingsInsert](#directoryresourcesbuildingsinsert) - Inserts a building.
* [DirectoryResourcesBuildingsList](#directoryresourcesbuildingslist) - Retrieves a list of buildings for an account.
* [DirectoryResourcesBuildingsPatch](#directoryresourcesbuildingspatch) - Patches a building.
* [DirectoryResourcesBuildingsUpdate](#directoryresourcesbuildingsupdate) - Updates a building.
* [DirectoryResourcesCalendarsDelete](#directoryresourcescalendarsdelete) - Deletes a calendar resource.
* [DirectoryResourcesCalendarsGet](#directoryresourcescalendarsget) - Retrieves a calendar resource.
* [DirectoryResourcesCalendarsInsert](#directoryresourcescalendarsinsert) - Inserts a calendar resource.
* [DirectoryResourcesCalendarsList](#directoryresourcescalendarslist) - Retrieves a list of calendar resources for an account.
* [DirectoryResourcesCalendarsPatch](#directoryresourcescalendarspatch) - Patches a calendar resource.
* [DirectoryResourcesCalendarsUpdate](#directoryresourcescalendarsupdate) - Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.
* [DirectoryResourcesFeaturesDelete](#directoryresourcesfeaturesdelete) - Deletes a feature.
* [DirectoryResourcesFeaturesGet](#directoryresourcesfeaturesget) - Retrieves a feature.
* [DirectoryResourcesFeaturesInsert](#directoryresourcesfeaturesinsert) - Inserts a feature.
* [DirectoryResourcesFeaturesList](#directoryresourcesfeatureslist) - Retrieves a list of features for an account.
* [DirectoryResourcesFeaturesPatch](#directoryresourcesfeaturespatch) - Patches a feature.
* [DirectoryResourcesFeaturesRename](#directoryresourcesfeaturesrename) - Renames a feature.
* [DirectoryResourcesFeaturesUpdate](#directoryresourcesfeaturesupdate) - Updates a feature.

## DirectoryResourcesBuildingsDelete

Deletes a building.

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
    res, err := s.Resources.DirectoryResourcesBuildingsDelete(ctx, operations.DirectoryResourcesBuildingsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("autem"),
        Alt: shared.AltEnumProto.ToPointer(),
        BuildingID: "alias",
        Callback: sdk.String("rem"),
        Customer: "aut",
        Fields: sdk.String("quos"),
        Key: sdk.String("laudantium"),
        OauthToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("eaque"),
    }, operations.DirectoryResourcesBuildingsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DirectoryResourcesBuildingsGet

Retrieves a building.

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
    res, err := s.Resources.DirectoryResourcesBuildingsGet(ctx, operations.DirectoryResourcesBuildingsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BuildingID: "nulla",
        Callback: sdk.String("officia"),
        Customer: "sed",
        Fields: sdk.String("voluptatem"),
        Key: sdk.String("alias"),
        OauthToken: sdk.String("eveniet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("incidunt"),
    }, operations.DirectoryResourcesBuildingsGetSecurity{
        Option1: &operations.DirectoryResourcesBuildingsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Building != nil {
        // handle response
    }
}
```

## DirectoryResourcesBuildingsInsert

Inserts a building.

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
    res, err := s.Resources.DirectoryResourcesBuildingsInsert(ctx, operations.DirectoryResourcesBuildingsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Building: &shared.Building{
            Address: &shared.BuildingAddress{
                AddressLines: []string{
                    "necessitatibus",
                },
                AdministrativeArea: sdk.String("harum"),
                LanguageCode: sdk.String("explicabo"),
                Locality: sdk.String("beatae"),
                PostalCode: sdk.String("27956"),
                RegionCode: sdk.String("libero"),
                Sublocality: sdk.String("totam"),
            },
            BuildingID: sdk.String("sequi"),
            BuildingName: sdk.String("aliquid"),
            Coordinates: &shared.BuildingCoordinates{
                Latitude: sdk.Float64(4120.52),
                Longitude: sdk.Float64(7745.01),
            },
            Description: sdk.String("ducimus"),
            Etags: sdk.String("odit"),
            FloorNames: []string{
                "reiciendis",
            },
            Kind: sdk.String("repellat"),
        },
        AccessToken: sdk.String("nulla"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("natus"),
        CoordinatesSource: operations.DirectoryResourcesBuildingsInsertCoordinatesSourceEnumSourceUnspecified.ToPointer(),
        Customer: "doloremque",
        Fields: sdk.String("nisi"),
        Key: sdk.String("rerum"),
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptates"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("rem"),
    }, operations.DirectoryResourcesBuildingsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Building != nil {
        // handle response
    }
}
```

## DirectoryResourcesBuildingsList

Retrieves a list of buildings for an account.

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
    res, err := s.Resources.DirectoryResourcesBuildingsList(ctx, operations.DirectoryResourcesBuildingsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Customer: "voluptatibus",
        Fields: sdk.String("eligendi"),
        Key: sdk.String("quae"),
        MaxResults: sdk.Int64(885022),
        OauthToken: sdk.String("architecto"),
        PageToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("rem"),
    }, operations.DirectoryResourcesBuildingsListSecurity{
        Option1: &operations.DirectoryResourcesBuildingsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Buildings != nil {
        // handle response
    }
}
```

## DirectoryResourcesBuildingsPatch

Patches a building.

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
    res, err := s.Resources.DirectoryResourcesBuildingsPatch(ctx, operations.DirectoryResourcesBuildingsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Building: &shared.Building{
            Address: &shared.BuildingAddress{
                AddressLines: []string{
                    "reiciendis",
                    "a",
                    "iste",
                },
                AdministrativeArea: sdk.String("dicta"),
                LanguageCode: sdk.String("quos"),
                Locality: sdk.String("ullam"),
                PostalCode: sdk.String("29821"),
                RegionCode: sdk.String("assumenda"),
                Sublocality: sdk.String("vero"),
            },
            BuildingID: sdk.String("doloribus"),
            BuildingName: sdk.String("impedit"),
            Coordinates: &shared.BuildingCoordinates{
                Latitude: sdk.Float64(7833.97),
                Longitude: sdk.Float64(8838.19),
            },
            Description: sdk.String("totam"),
            Etags: sdk.String("reiciendis"),
            FloorNames: []string{
                "sint",
            },
            Kind: sdk.String("nihil"),
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BuildingID: "odio",
        Callback: sdk.String("nesciunt"),
        CoordinatesSource: operations.DirectoryResourcesBuildingsPatchCoordinatesSourceEnumSourceUnspecified.ToPointer(),
        Customer: "vel",
        Fields: sdk.String("neque"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("voluptas"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("reprehenderit"),
    }, operations.DirectoryResourcesBuildingsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Building != nil {
        // handle response
    }
}
```

## DirectoryResourcesBuildingsUpdate

Updates a building.

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
    res, err := s.Resources.DirectoryResourcesBuildingsUpdate(ctx, operations.DirectoryResourcesBuildingsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Building: &shared.Building{
            Address: &shared.BuildingAddress{
                AddressLines: []string{
                    "ipsa",
                    "rem",
                },
                AdministrativeArea: sdk.String("maiores"),
                LanguageCode: sdk.String("accusantium"),
                Locality: sdk.String("veniam"),
                PostalCode: sdk.String("28359-8692"),
                RegionCode: sdk.String("vitae"),
                Sublocality: sdk.String("nesciunt"),
            },
            BuildingID: sdk.String("similique"),
            BuildingName: sdk.String("illo"),
            Coordinates: &shared.BuildingCoordinates{
                Latitude: sdk.Float64(9979.95),
                Longitude: sdk.Float64(3632.14),
            },
            Description: sdk.String("doloribus"),
            Etags: sdk.String("possimus"),
            FloorNames: []string{
                "incidunt",
                "explicabo",
                "ipsam",
            },
            Kind: sdk.String("cupiditate"),
        },
        AccessToken: sdk.String("optio"),
        Alt: shared.AltEnumJSON.ToPointer(),
        BuildingID: "quidem",
        Callback: sdk.String("nesciunt"),
        CoordinatesSource: operations.DirectoryResourcesBuildingsUpdateCoordinatesSourceEnumResolvedFromAddress.ToPointer(),
        Customer: "sapiente",
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("veniam"),
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("ut"),
    }, operations.DirectoryResourcesBuildingsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Building != nil {
        // handle response
    }
}
```

## DirectoryResourcesCalendarsDelete

Deletes a calendar resource.

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
    res, err := s.Resources.DirectoryResourcesCalendarsDelete(ctx, operations.DirectoryResourcesCalendarsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        CalendarResourceID: "libero",
        Callback: sdk.String("in"),
        Customer: "minima",
        Fields: sdk.String("ex"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("nisi"),
    }, operations.DirectoryResourcesCalendarsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DirectoryResourcesCalendarsGet

Retrieves a calendar resource.

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
    res, err := s.Resources.DirectoryResourcesCalendarsGet(ctx, operations.DirectoryResourcesCalendarsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumMedia.ToPointer(),
        CalendarResourceID: "fuga",
        Callback: sdk.String("minima"),
        Customer: "architecto",
        Fields: sdk.String("qui"),
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("magni"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.DirectoryResourcesCalendarsGetSecurity{
        Option1: &operations.DirectoryResourcesCalendarsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CalendarResource != nil {
        // handle response
    }
}
```

## DirectoryResourcesCalendarsInsert

Inserts a calendar resource.

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
    res, err := s.Resources.DirectoryResourcesCalendarsInsert(ctx, operations.DirectoryResourcesCalendarsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CalendarResource: &shared.CalendarResource{
            BuildingID: sdk.String("exercitationem"),
            Capacity: sdk.Int(709701),
            Etags: sdk.String("facilis"),
            FeatureInstances: sdk.String("impedit"),
            FloorName: sdk.String("sit"),
            FloorSection: sdk.String("nemo"),
            GeneratedResourceName: sdk.String("culpa"),
            Kind: sdk.String("consequuntur"),
            ResourceCategory: sdk.String("amet"),
            ResourceDescription: sdk.String("deserunt"),
            ResourceEmail: sdk.String("modi"),
            ResourceID: sdk.String("veniam"),
            ResourceName: sdk.String("quod"),
            ResourceType: sdk.String("itaque"),
            UserVisibleDescription: sdk.String("a"),
        },
        AccessToken: sdk.String("quisquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("doloribus"),
        Customer: "assumenda",
        Fields: sdk.String("officiis"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("nobis"),
    }, operations.DirectoryResourcesCalendarsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CalendarResource != nil {
        // handle response
    }
}
```

## DirectoryResourcesCalendarsList

Retrieves a list of calendar resources for an account.

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
    res, err := s.Resources.DirectoryResourcesCalendarsList(ctx, operations.DirectoryResourcesCalendarsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vel"),
        Customer: "perspiciatis",
        Fields: sdk.String("debitis"),
        Key: sdk.String("ullam"),
        MaxResults: sdk.Int64(103578),
        OauthToken: sdk.String("accusantium"),
        OrderBy: sdk.String("perferendis"),
        PageToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("provident"),
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.DirectoryResourcesCalendarsListSecurity{
        Option1: &operations.DirectoryResourcesCalendarsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CalendarResources != nil {
        // handle response
    }
}
```

## DirectoryResourcesCalendarsPatch

Patches a calendar resource.

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
    res, err := s.Resources.DirectoryResourcesCalendarsPatch(ctx, operations.DirectoryResourcesCalendarsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CalendarResource: &shared.CalendarResource{
            BuildingID: sdk.String("nemo"),
            Capacity: sdk.Int(923456),
            Etags: sdk.String("velit"),
            FeatureInstances: sdk.String("magnam"),
            FloorName: sdk.String("dignissimos"),
            FloorSection: sdk.String("laboriosam"),
            GeneratedResourceName: sdk.String("sed"),
            Kind: sdk.String("odio"),
            ResourceCategory: sdk.String("natus"),
            ResourceDescription: sdk.String("provident"),
            ResourceEmail: sdk.String("cum"),
            ResourceID: sdk.String("doloribus"),
            ResourceName: sdk.String("facilis"),
            ResourceType: sdk.String("quidem"),
            UserVisibleDescription: sdk.String("itaque"),
        },
        AccessToken: sdk.String("laboriosam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        CalendarResourceID: "modi",
        Callback: sdk.String("perspiciatis"),
        Customer: "hic",
        Fields: sdk.String("cum"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nam"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.DirectoryResourcesCalendarsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CalendarResource != nil {
        // handle response
    }
}
```

## DirectoryResourcesCalendarsUpdate

Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.

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
    res, err := s.Resources.DirectoryResourcesCalendarsUpdate(ctx, operations.DirectoryResourcesCalendarsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CalendarResource: &shared.CalendarResource{
            BuildingID: sdk.String("id"),
            Capacity: sdk.Int(904440),
            Etags: sdk.String("autem"),
            FeatureInstances: sdk.String("quo"),
            FloorName: sdk.String("nesciunt"),
            FloorSection: sdk.String("illum"),
            GeneratedResourceName: sdk.String("nemo"),
            Kind: sdk.String("illum"),
            ResourceCategory: sdk.String("facilis"),
            ResourceDescription: sdk.String("non"),
            ResourceEmail: sdk.String("mollitia"),
            ResourceID: sdk.String("assumenda"),
            ResourceName: sdk.String("recusandae"),
            ResourceType: sdk.String("distinctio"),
            UserVisibleDescription: sdk.String("pariatur"),
        },
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumProto.ToPointer(),
        CalendarResourceID: "laborum",
        Callback: sdk.String("eveniet"),
        Customer: "laborum",
        Fields: sdk.String("incidunt"),
        Key: sdk.String("maxime"),
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.DirectoryResourcesCalendarsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CalendarResource != nil {
        // handle response
    }
}
```

## DirectoryResourcesFeaturesDelete

Deletes a feature.

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
    res, err := s.Resources.DirectoryResourcesFeaturesDelete(ctx, operations.DirectoryResourcesFeaturesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("occaecati"),
        Customer: "labore",
        FeatureKey: "quo",
        Fields: sdk.String("perferendis"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("eligendi"),
    }, operations.DirectoryResourcesFeaturesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DirectoryResourcesFeaturesGet

Retrieves a feature.

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
    res, err := s.Resources.DirectoryResourcesFeaturesGet(ctx, operations.DirectoryResourcesFeaturesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nostrum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("unde"),
        Customer: "nulla",
        FeatureKey: "error",
        Fields: sdk.String("mollitia"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("nostrum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("corrupti"),
        UploadProtocol: sdk.String("fuga"),
    }, operations.DirectoryResourcesFeaturesGetSecurity{
        Option1: &operations.DirectoryResourcesFeaturesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Feature != nil {
        // handle response
    }
}
```

## DirectoryResourcesFeaturesInsert

Inserts a feature.

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
    res, err := s.Resources.DirectoryResourcesFeaturesInsert(ctx, operations.DirectoryResourcesFeaturesInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Feature: &shared.Feature{
            Etags: sdk.String("impedit"),
            Kind: sdk.String("quasi"),
            Name: sdk.String("Mr. Forrest Howe"),
        },
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consequatur"),
        Customer: "eaque",
        Fields: sdk.String("architecto"),
        Key: sdk.String("similique"),
        OauthToken: sdk.String("porro"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("blanditiis"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("magni"),
    }, operations.DirectoryResourcesFeaturesInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Feature != nil {
        // handle response
    }
}
```

## DirectoryResourcesFeaturesList

Retrieves a list of features for an account.

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
    res, err := s.Resources.DirectoryResourcesFeaturesList(ctx, operations.DirectoryResourcesFeaturesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("impedit"),
        Customer: "ipsa",
        Fields: sdk.String("excepturi"),
        Key: sdk.String("a"),
        MaxResults: sdk.Int64(983000),
        OauthToken: sdk.String("laudantium"),
        PageToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("asperiores"),
        UploadProtocol: sdk.String("rem"),
    }, operations.DirectoryResourcesFeaturesListSecurity{
        Option1: &operations.DirectoryResourcesFeaturesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Features != nil {
        // handle response
    }
}
```

## DirectoryResourcesFeaturesPatch

Patches a feature.

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
    res, err := s.Resources.DirectoryResourcesFeaturesPatch(ctx, operations.DirectoryResourcesFeaturesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Feature: &shared.Feature{
            Etags: sdk.String("suscipit"),
            Kind: sdk.String("earum"),
            Name: sdk.String("Lee Gibson"),
        },
        AccessToken: sdk.String("eligendi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("neque"),
        Customer: "vero",
        FeatureKey: "excepturi",
        Fields: sdk.String("accusantium"),
        Key: sdk.String("qui"),
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.DirectoryResourcesFeaturesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Feature != nil {
        // handle response
    }
}
```

## DirectoryResourcesFeaturesRename

Renames a feature.

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
    res, err := s.Resources.DirectoryResourcesFeaturesRename(ctx, operations.DirectoryResourcesFeaturesRenameRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        FeatureRename: &shared.FeatureRename{
            NewName: sdk.String("corporis"),
        },
        AccessToken: sdk.String("rerum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("error"),
        Customer: "vel",
        Fields: sdk.String("accusantium"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("laboriosam"),
        OldName: "ex",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quas"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("ullam"),
    }, operations.DirectoryResourcesFeaturesRenameSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DirectoryResourcesFeaturesUpdate

Updates a feature.

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
    res, err := s.Resources.DirectoryResourcesFeaturesUpdate(ctx, operations.DirectoryResourcesFeaturesUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Feature: &shared.Feature{
            Etags: sdk.String("similique"),
            Kind: sdk.String("incidunt"),
            Name: sdk.String("Anne Oberbrunner"),
        },
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maxime"),
        Customer: "quis",
        FeatureKey: "cupiditate",
        Fields: sdk.String("aliquam"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laudantium"),
        UploadType: sdk.String("velit"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.DirectoryResourcesFeaturesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Feature != nil {
        // handle response
    }
}
```
