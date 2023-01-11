<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest, BaremetalsolutionProjectsLocationsSubmitProvisioningConfigResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    location: "sit",
    project: "voluptas",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "expedita",
    alt: "proto",
    callback: "dolor",
    fields: "expedita",
    key: "voluptas",
    oauthToken: "fugit",
    prettyPrint: false,
    quotaUser: "nihil",
    uploadType: "rerum",
    uploadProtocol: "dicta",
  },
  request: {
    email: "debitis",
    provisioningConfig: {
      instances: [
        {
          clientNetwork: {
            address: "et",
            existingNetworkId: "ut",
            networkId: "dolorem",
          },
          hyperthreading: false,
          id: "voluptate",
          instanceType: "iste",
          location: "vitae",
          osImage: "totam",
          privateNetwork: {
            address: "dolores",
            existingNetworkId: "illum",
            networkId: "debitis",
          },
          userNote: "vel",
        },
      ],
      networks: [
        {
          bandwidth: "BW_1_GBPS",
          cidr: "id",
          id: "aspernatur",
          location: "accusantium",
          serviceCidr: "SERVICE_CIDR_UNSPECIFIED",
          type: "CLIENT",
          userNote: "quis",
          vlanAttachments: [
            {
              id: "aut",
              pairingKey: "odit",
            },
            {
              id: "non",
              pairingKey: "voluptas",
            },
          ],
        },
      ],
      ticketId: "omnis",
      volumes: [
        {
          id: "illo",
          location: "sed",
          lunRanges: [
            {
              quantity: 771642788862502430,
              sizeGb: 8514850266767180993,
            },
            {
              quantity: 8683452355129068124,
              sizeGb: 4345851588384648695,
            },
          ],
          machineIds: [
            "recusandae",
          ],
          nfsExports: [
            {
              allowDev: false,
              allowSuid: true,
              cidr: "modi",
              machineId: "sint",
              networkId: "inventore",
              noRootSquash: true,
              permissions: "READ_WRITE",
            },
            {
              allowDev: true,
              allowSuid: false,
              cidr: "tempore",
              machineId: "maiores",
              networkId: "incidunt",
              noRootSquash: false,
              permissions: "READ_WRITE",
            },
          ],
          protocol: "PROTOCOL_FC",
          sizeGb: 2671030200101705776,
          snapshotsEnabled: false,
          type: "FLASH",
          userNote: "ipsum",
        },
      ],
    },
  },
};

sdk.projects.baremetalsolutionProjectsLocationsSubmitProvisioningConfig(req).then((res: BaremetalsolutionProjectsLocationsSubmitProvisioningConfigResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->