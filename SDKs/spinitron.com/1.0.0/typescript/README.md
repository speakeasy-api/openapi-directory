# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/spinitron.com/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/spinitron.com/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetPersonasRequest,
  GetPersonasResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    accessToken: "YOUR_API_KEY_HERE",
  },
});

const req: GetPersonasRequest = {
  count: 548814,
  expand: [
    "distinctio",
    "quibusdam",
    "unde",
  ],
  fields: [
    "corrupti",
    "illum",
    "vel",
    "error",
  ],
  name: "deserunt",
  page: 384382,
};

sdk.persona.getPersonas(req).then((res: GetPersonasResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### persona

* `getPersonas` - Get Personas
* `getPersonasId` - Get Persona by id

### playlist

* `getPlaylists` - Returns playlists optionally filtered by {start} and/or {end} datetimes
* `getPlaylistsId` - Get a Playlist by id

### show

* `getShows` - Returns scheduled shows optionally filtered by {start} and/or {end} datetimes
* `getShowsId` - Get a Show by id

### spin

* `getSpins` - Returns spins optionally filtered by {start} and/or {end} datetimes
* `getSpinsId` - Get a Spin by id
* `postSpins` - Log a Spin
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

