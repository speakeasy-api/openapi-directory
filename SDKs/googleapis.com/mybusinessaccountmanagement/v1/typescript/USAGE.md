<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { MybusinessaccountmanagementAccountsCreateRequest, MybusinessaccountmanagementAccountsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: MybusinessaccountmanagementAccountsCreateRequest = {
  queryParams: {
    dollarXgafv: "1",
    accessToken: "voluptas",
    alt: "media",
    callback: "expedita",
    fields: "consequuntur",
    key: "dolor",
    oauthToken: "expedita",
    prettyPrint: true,
    quotaUser: "fugit",
    uploadType: "et",
    uploadProtocol: "nihil",
  },
  request: {
    accountName: "rerum",
    name: "dicta",
    organizationInfo: {
      address: {
        addressLines: [
          "voluptatum",
        ],
        administrativeArea: "et",
        languageCode: "ut",
        locality: "dolorem",
        organization: "et",
        postalCode: "voluptate",
        recipients: [
          "vitae",
          "totam",
          "dolores",
        ],
        regionCode: "illum",
        revision: 6392442863481646880,
        sortingCode: "vel",
        sublocality: "odio",
      },
    },
    primaryOwner: "dolore",
    type: "LOCATION_GROUP",
  },
};

sdk.accounts.mybusinessaccountmanagementAccountsCreate(req).then((res: MybusinessaccountmanagementAccountsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->