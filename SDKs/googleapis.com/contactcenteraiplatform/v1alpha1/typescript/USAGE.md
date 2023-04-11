<!-- Start SDK Example Usage -->
```typescript
import {
  ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest,
  ContactcenteraiplatformProjectsLocationsContactCentersCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  InstanceConfigInstanceSizeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  contactCenterInput: {
    adminUser: {
      familyName: "provident",
      givenName: "distinctio",
    },
    ccaipManagedUsers: false,
    customerDomainPrefix: "quibusdam",
    displayName: "unde",
    instanceConfig: {
      instanceSize: InstanceConfigInstanceSizeEnum.Standard3Xlarge,
    },
    labels: {
      "illum": "vel",
      "error": "deserunt",
      "suscipit": "iure",
    },
    name: "magnam",
    samlParams: {
      certificate: "debitis",
      entityId: "ipsa",
      ssoUri: "delectus",
      userEmail: "tempora",
    },
    uris: {
      chatBotUri: "suscipit",
      mediaUri: "molestiae",
      rootUri: "minus",
      virtualAgentStreamingServiceUri: "placeat",
    },
    userEmail: "voluptatum",
  },
  accessToken: "iusto",
  alt: AltEnum.Media,
  callback: "nisi",
  contactCenterId: "recusandae",
  fields: "temporibus",
  key: "ab",
  oauthToken: "quis",
  parent: "veritatis",
  prettyPrint: false,
  quotaUser: "deserunt",
  requestId: "perferendis",
  uploadType: "ipsam",
  uploadProtocol: "repellendus",
};

sdk.projects.contactcenteraiplatformProjectsLocationsContactCentersCreate(req).then((res: ContactcenteraiplatformProjectsLocationsContactCentersCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->