<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PeopleContactGroupsBatchGetRequest, PeopleContactGroupsBatchGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PeopleContactGroupsBatchGetRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      },
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      },
    },
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "voluptas",
    alt: "media",
    callback: "expedita",
    fields: "consequuntur",
    groupFields: "dolor",
    key: "expedita",
    maxMembers: 6044372234677422456,
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    resourceNames: [
      "dicta",
      "debitis",
      "voluptatum",
    ],
    uploadType: "et",
    uploadProtocol: "ut",
  },
};

sdk.contactGroups.peopleContactGroupsBatchGet(req).then((res: PeopleContactGroupsBatchGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->