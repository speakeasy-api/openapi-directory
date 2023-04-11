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