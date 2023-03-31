# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/spinitron.com/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    req := operations.GetPersonasRequest{
        Count: 548814,
        Expand: []string{
            "distinctio",
            "quibusdam",
            "unde",
        },
        Fields: []string{
            "corrupti",
            "illum",
            "vel",
            "error",
        },
        Name: "deserunt",
        Page: 384382,
    }

    ctx := context.Background()
    res, err := s.Persona.GetPersonas(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPersonas200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Persona

* `GetPersonas` - Get Personas
* `GetPersonasID` - Get Persona by id

### Playlist

* `GetPlaylists` - Returns playlists optionally filtered by {start} and/or {end} datetimes
* `GetPlaylistsID` - Get a Playlist by id

### Show

* `GetShows` - Returns scheduled shows optionally filtered by {start} and/or {end} datetimes
* `GetShowsID` - Get a Show by id

### Spin

* `GetSpins` - Returns spins optionally filtered by {start} and/or {end} datetimes
* `GetSpinsID` - Get a Spin by id
* `PostSpins` - Log a Spin
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
