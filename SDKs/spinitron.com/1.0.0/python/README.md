# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/spinitron.com/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        access_token="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetPersonasRequest(
    count=548814,
    expand=[
        "distinctio",
        "quibusdam",
        "unde",
    ],
    fields_=[
        "corrupti",
        "illum",
        "vel",
        "error",
    ],
    name="deserunt",
    page=384382,
)
    
res = s.persona.get_personas(req)

if res.get_personas_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### persona

* `get_personas` - Get Personas
* `get_personas_id_` - Get Persona by id

### playlist

* `get_playlists` - Returns playlists optionally filtered by {start} and/or {end} datetimes
* `get_playlists_id_` - Get a Playlist by id

### show

* `get_shows` - Returns scheduled shows optionally filtered by {start} and/or {end} datetimes
* `get_shows_id_` - Get a Show by id

### spin

* `get_spins` - Returns spins optionally filtered by {start} and/or {end} datetimes
* `get_spins_id_` - Get a Spin by id
* `post_spins` - Log a Spin
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
