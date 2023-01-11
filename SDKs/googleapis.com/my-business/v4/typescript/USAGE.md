<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { MybusinessAccountsCreateRequest, MybusinessAccountsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: MybusinessAccountsCreateRequest = {
  queryParams: {
    dollarXgafv: "1",
    accessToken: "voluptas",
    alt: "media",
    callback: "expedita",
    fields: "consequuntur",
    key: "dolor",
    oauthToken: "expedita",
    prettyPrint: true,
    primaryOwner: "fugit",
    quotaUser: "et",
    uploadType: "nihil",
    uploadProtocol: "rerum",
  },
  request: {
    accountName: "dicta",
    accountNumber: "debitis",
    name: "voluptatum",
    organizationInfo: {
      phoneNumber: "et",
      postalAddress: {
        addressLines: [
          "dolorem",
          "et",
          "voluptate",
        ],
        administrativeArea: "iste",
        languageCode: "vitae",
        locality: "totam",
        organization: "dolores",
        postalCode: "illum",
        recipients: [
          "vel",
        ],
        regionCode: "odio",
        revision: 6303220950515014660,
        sortingCode: "id",
        sublocality: "aspernatur",
      },
      registeredDomain: "accusantium",
    },
    permissionLevel: "MEMBER_LEVEL",
    role: "COMMUNITY_MANAGER",
    state: {
      status: "UNVERIFIED",
    },
    type: "USER_GROUP",
  },
};

sdk.accounts.mybusinessAccountsCreate(req).then((res: MybusinessAccountsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->