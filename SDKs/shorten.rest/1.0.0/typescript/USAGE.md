<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateAliasRequest, CreateAliasResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateAliasRequest = {
  security: {
    apiKeyAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  queryParams: {
    aliasName: "sit",
    domainName: "voluptas",
  },
  request: {
    destinations: [
      {
        country: "expedita",
        os: "consequuntur",
        url: "dolor",
      },
      {
        country: "expedita",
        os: "voluptas",
        url: "fugit",
      },
    ],
    metatags: [
      {
        content: "nihil",
        name: "rerum",
      },
    ],
    snippets: [
      {
        id: "debitis",
        parameters: {
          "et": "ut",
        },
      },
      {
        id: "dolorem",
        parameters: {
          "voluptate": "iste",
          "vitae": "totam",
        },
      },
      {
        id: "dolores",
        parameters: {
          "debitis": "vel",
          "odio": "dolore",
          "id": "aspernatur",
        },
      },
    ],
  },
};

sdk.alias.createAlias(req).then((res: CreateAliasResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->