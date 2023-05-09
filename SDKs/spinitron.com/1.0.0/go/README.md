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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AccessToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Persona.GetPersonas(ctx, operations.GetPersonasRequest{
        Count: sdk.Int64(548814),
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
        Name: sdk.String("Rick Kertzmann"),
        Page: sdk.Int64(56713),
    })
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


### [Persona](docs/persona/README.md)

* [GetPersonas](docs/persona/README.md#getpersonas) - Get Personas
* [GetPersonasID](docs/persona/README.md#getpersonasid) - Get Persona by id

### [Playlist](docs/playlist/README.md)

* [GetPlaylists](docs/playlist/README.md#getplaylists) - Returns playlists optionally filtered by {start} and/or {end} datetimes
* [GetPlaylistsID](docs/playlist/README.md#getplaylistsid) - Get a Playlist by id

### [Show](docs/show/README.md)

* [GetShows](docs/show/README.md#getshows) - Returns scheduled shows optionally filtered by {start} and/or {end} datetimes
* [GetShowsID](docs/show/README.md#getshowsid) - Get a Show by id

### [Spin](docs/spin/README.md)

* [GetSpins](docs/spin/README.md#getspins) - Returns spins optionally filtered by {start} and/or {end} datetimes
* [GetSpinsID](docs/spin/README.md#getspinsid) - Get a Spin by id
* [PostSpins](docs/spin/README.md#postspins) - Log a Spin
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
