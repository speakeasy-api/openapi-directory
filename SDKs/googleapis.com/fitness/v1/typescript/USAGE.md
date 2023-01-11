<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { FitnessUsersDataSourcesCreateRequest, FitnessUsersDataSourcesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: FitnessUsersDataSourcesCreateRequest = {
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
  pathParams: {
    userId: "sit",
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
    application: {
      detailsUrl: "dicta",
      name: "debitis",
      packageName: "voluptatum",
      version: "et",
    },
    dataQualityStandard: [
      "dataQualityUnknown",
      "dataQualityUnknown",
      "dataQualityBloodPressureBhsAA",
    ],
    dataStreamId: "iste",
    dataStreamName: "vitae",
    dataType: {
      field: [
        {
          format: "map",
          name: "illum",
          optional: true,
        },
        {
          format: "floatPoint",
          name: "odio",
          optional: true,
        },
        {
          format: "integerList",
          name: "aspernatur",
          optional: true,
        },
      ],
      name: "totam",
    },
    device: {
      manufacturer: "commodi",
      model: "quis",
      type: "phone",
      uid: "aut",
      version: "odit",
    },
    name: "non",
    type: "raw",
  },
};

sdk.users.fitnessUsersDataSourcesCreate(req).then((res: FitnessUsersDataSourcesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->