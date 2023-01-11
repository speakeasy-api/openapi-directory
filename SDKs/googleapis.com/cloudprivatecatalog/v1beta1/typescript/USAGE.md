<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CloudprivatecatalogOrganizationsCatalogsSearchRequest, CloudprivatecatalogOrganizationsCatalogsSearchResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CloudprivatecatalogOrganizationsCatalogsSearchRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    resource: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    pageSize: 8274930044578894929,
    pageToken: "et",
    prettyPrint: true,
    query: "rerum",
    quotaUser: "dicta",
    uploadType: "debitis",
    uploadProtocol: "voluptatum",
  },
};

sdk.organizations.cloudprivatecatalogOrganizationsCatalogsSearch(req).then((res: CloudprivatecatalogOrganizationsCatalogsSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->