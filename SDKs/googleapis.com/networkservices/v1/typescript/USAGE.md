<!-- Start SDK Example Usage -->
```typescript
import {
  NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest,
  NetworkservicesProjectsLocationsEndpointPoliciesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  EndpointPolicyTypeEnum,
  EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  endpointPolicyInput: {
    authorizationPolicy: "provident",
    clientTlsPolicy: "distinctio",
    description: "quibusdam",
    endpointMatcher: {
      metadataLabelMatcher: {
        metadataLabelMatchCriteria: EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnum.MatchAny,
        metadataLabels: [
          {
            labelName: "corrupti",
            labelValue: "illum",
          },
          {
            labelName: "vel",
            labelValue: "error",
          },
          {
            labelName: "deserunt",
            labelValue: "suscipit",
          },
          {
            labelName: "iure",
            labelValue: "magnam",
          },
        ],
      },
    },
    labels: {
      "ipsa": "delectus",
      "tempora": "suscipit",
      "molestiae": "minus",
      "placeat": "voluptatum",
    },
    name: "iusto",
    serverTlsPolicy: "excepturi",
    trafficPortSelector: {
      ports: [
        "recusandae",
        "temporibus",
      ],
    },
    type: EndpointPolicyTypeEnum.EndpointPolicyTypeUnspecified,
  },
  accessToken: "quis",
  alt: AltEnum.Json,
  callback: "deserunt",
  endpointPolicyId: "perferendis",
  fields: "ipsam",
  key: "repellendus",
  oauthToken: "sapiente",
  parent: "quo",
  prettyPrint: false,
  quotaUser: "odit",
  uploadType: "at",
  uploadProtocol: "at",
};

sdk.projects.networkservicesProjectsLocationsEndpointPoliciesCreate(req).then((res: NetworkservicesProjectsLocationsEndpointPoliciesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->