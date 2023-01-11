<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest, AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest = {
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
    basic: {
      combiningFunction: "OR",
      conditions: [
        {
          devicePolicy: {
            allowedDeviceManagementLevels: [
              "BASIC",
            ],
            allowedEncryptionStatuses: [
              "UNENCRYPTED",
              "UNENCRYPTED",
              "UNENCRYPTED",
            ],
            osConstraints: [
              {
                minimumVersion: "vitae",
                osType: "DESKTOP_CHROME_OS",
                requireVerifiedChromeOs: true,
              },
              {
                minimumVersion: "illum",
                osType: "DESKTOP_LINUX",
                requireVerifiedChromeOs: false,
              },
              {
                minimumVersion: "odio",
                osType: "OS_UNSPECIFIED",
                requireVerifiedChromeOs: false,
              },
            ],
            requireAdminApproval: true,
            requireCorpOwned: true,
            requireScreenlock: false,
          },
          ipSubnetworks: [
            "quis",
            "est",
          ],
          members: [
            "odit",
            "non",
            "voluptas",
          ],
          negate: true,
          regions: [
            "illo",
          ],
          requiredAccessLevels: [
            "officiis",
            "autem",
            "consectetur",
          ],
        },
      ],
    },
    custom: {
      expr: {
        description: "nobis",
        expression: "odio",
        location: "qui",
        title: "recusandae",
      },
    },
    description: "at",
    name: "ipsum",
    title: "eveniet",
  },
};

sdk.accessPolicies.accesscontextmanagerAccessPoliciesAccessLevelsCreate(req).then((res: AccesscontextmanagerAccessPoliciesAccessLevelsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->