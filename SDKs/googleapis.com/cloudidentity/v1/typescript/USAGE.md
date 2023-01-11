<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CloudidentityCustomersUserinvitationsCancelRequest, CloudidentityCustomersUserinvitationsCancelResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CloudidentityCustomersUserinvitationsCancelRequest = {
  pathParams: {
    name: "sit",
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
    "debitis": "voluptatum",
    "et": "ut",
    "dolorem": "et",
  },
};

sdk.customers.cloudidentityCustomersUserinvitationsCancel(req).then((res: CloudidentityCustomersUserinvitationsCancelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->