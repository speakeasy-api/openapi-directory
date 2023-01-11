<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { OrgpolicyOrganizationsCustomConstraintsCreateRequest, OrgpolicyOrganizationsCustomConstraintsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: OrgpolicyOrganizationsCustomConstraintsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "sit",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "media",
    callback: "consequuntur",
    fields: "dolor",
    key: "expedita",
    oauthToken: "voluptas",
    prettyPrint: true,
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    actionType: "DENY",
    condition: "debitis",
    description: "voluptatum",
    displayName: "et",
    methodTypes: [
      "UPDATE",
      "UPDATE",
      "UPDATE",
    ],
    name: "iste",
    resourceTypes: [
      "totam",
    ],
  },
};

sdk.organizations.orgpolicyOrganizationsCustomConstraintsCreate(req).then((res: OrgpolicyOrganizationsCustomConstraintsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->