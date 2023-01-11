<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { MybusinessverificationsLocationsFetchVerificationOptionsRequest, MybusinessverificationsLocationsFetchVerificationOptionsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: MybusinessverificationsLocationsFetchVerificationOptionsRequest = {
  pathParams: {
    location: "sit",
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
    context: {
      address: {
        addressLines: [
          "debitis",
          "voluptatum",
          "et",
        ],
        administrativeArea: "ut",
        languageCode: "dolorem",
        locality: "et",
        organization: "voluptate",
        postalCode: "iste",
        recipients: [
          "totam",
        ],
        regionCode: "dolores",
        revision: 1929546706668609706,
        sortingCode: "debitis",
        sublocality: "vel",
      },
    },
    languageCode: "odio",
  },
};

sdk.locations.mybusinessverificationsLocationsFetchVerificationOptions(req).then((res: MybusinessverificationsLocationsFetchVerificationOptionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->