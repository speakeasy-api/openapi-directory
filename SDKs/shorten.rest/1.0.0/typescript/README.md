# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/shorten.rest/1.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/shorten.rest/1.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAliasRequest,
  CreateAliasResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateAliasRequest = {
  createAliasModel: {
    destinations: [
      {
        country: "Montenegro",
        os: "distinctio",
        url: "quibusdam",
      },
      {
        country: "Mozambique",
        os: "nulla",
        url: "corrupti",
      },
      {
        country: "Suriname",
        os: "vel",
        url: "error",
      },
    ],
    metatags: [
      {
        content: "suscipit",
        name: "iure",
      },
      {
        content: "magnam",
        name: "debitis",
      },
      {
        content: "ipsa",
        name: "delectus",
      },
    ],
    snippets: [
      {
        id: "suscipit",
        parameters: {
          "minus": "placeat",
          "voluptatum": "iusto",
        },
      },
      {
        id: "excepturi",
        parameters: {
          "recusandae": "temporibus",
          "ab": "quis",
        },
      },
    ],
  },
  aliasName: "veritatis",
  domainName: "deserunt",
};

sdk.alias.createAlias(req).then((res: CreateAliasResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### alias

* `createAlias` - Create alias
* `deleteAlias` - Delete alias
* `getAlias` - Get alias
* `getAliases` - Get aliases by domain
* `updateAlias` - Update alias

### click

* `getClicks` - Get clicks

### statistics

* `getStatistics` - Get clicks statistics
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

