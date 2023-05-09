# Geocoding

### Available Operations

* [GetSearchVersionNumberGeocodeQueryExt](#getsearchversionnumbergeocodequeryext) - Geocode
* [GetSearchVersionNumberStructuredGeocodeExt](#getsearchversionnumberstructuredgeocodeext) - Structured Geocode

## GetSearchVersionNumberGeocodeQueryExt

Geocode

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Geocoding.GetSearchVersionNumberGeocodeQueryExt(ctx, operations.GetSearchVersionNumberGeocodeQueryExtRequest{
        BtmRight: sdk.String("hic"),
        CountrySet: sdk.String("saepe"),
        Ext: shared.ExtEnumJs,
        ExtendedPostalCodesFor: sdk.String("in"),
        Language: sdk.String("corporis"),
        Lat: sdk.Float32(6130.64),
        Limit: sdk.Int64(437032),
        Lon: sdk.Float32(9023.49),
        Ofs: sdk.Int64(697631),
        Query: "architecto",
        Radius: sdk.Int64(60225),
        StoreResult: sdk.Bool(false),
        TopLeft: sdk.String("reiciendis"),
        Typeahead: sdk.Bool(false),
        VersionNumber: shared.VersionNumberEnumTwo,
        View: shared.ViewEnumIl.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSearchVersionNumberStructuredGeocodeExt

Structured Geocode

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Geocoding.GetSearchVersionNumberStructuredGeocodeExt(ctx, operations.GetSearchVersionNumberStructuredGeocodeExtRequest{
        CountryCode: "NF",
        CountrySecondarySubdivision: sdk.String("laborum"),
        CountrySubdivision: sdk.String("dolores"),
        CountryTertiarySubdivision: sdk.String("dolorem"),
        CrossStreet: sdk.String("corporis"),
        Ext: shared.ExtEnumJSON,
        ExtendedPostalCodesFor: sdk.String("nobis"),
        Language: sdk.String("enim"),
        Limit: sdk.Int64(607831),
        Municipality: sdk.String("nemo"),
        MunicipalitySubdivision: sdk.String("minima"),
        Ofs: sdk.Int64(570197),
        PostalCode: sdk.String("46991"),
        StreetName: sdk.String("mollitia"),
        StreetNumber: sdk.String("dolorem"),
        VersionNumber: shared.VersionNumberEnumTwo,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
