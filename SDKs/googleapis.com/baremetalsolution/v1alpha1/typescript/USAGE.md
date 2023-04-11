<!-- Start SDK Example Usage -->
```typescript
import {
  BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest,
  BaremetalsolutionProjectsLocationsSubmitProvisioningConfigResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  VolumeConfigProtocolEnum,
  VolumeConfigTypeEnum,
  NfsExportPermissionsEnum,
  NetworkConfigBandwidthEnum,
  NetworkConfigServiceCidrEnum,
  NetworkConfigTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest = {
  dollarXgafv: XgafvEnum.Two,
  submitProvisioningConfigRequest: {
    email: "Micheal_Sporer@yahoo.com",
    provisioningConfig: {
      instances: [
        {
          clientNetwork: {
            address: "466 Hunter Fort",
            existingNetworkId: "debitis",
            networkId: "ipsa",
          },
          hyperthreading: false,
          id: "delectus",
          instanceType: "tempora",
          location: "suscipit",
          osImage: "molestiae",
          privateNetwork: {
            address: "854 Huel Via",
            existingNetworkId: "temporibus",
            networkId: "ab",
          },
          userNote: "quis",
        },
        {
          clientNetwork: {
            address: "60389 Connelly Trace",
            existingNetworkId: "at",
            networkId: "maiores",
          },
          hyperthreading: false,
          id: "molestiae",
          instanceType: "quod",
          location: "quod",
          osImage: "esse",
          privateNetwork: {
            address: "7617 McCullough Coves",
            existingNetworkId: "deleniti",
            networkId: "hic",
          },
          userNote: "optio",
        },
        {
          clientNetwork: {
            address: "1442 Ona River",
            existingNetworkId: "esse",
            networkId: "ipsum",
          },
          hyperthreading: false,
          id: "excepturi",
          instanceType: "aspernatur",
          location: "perferendis",
          osImage: "ad",
          privateNetwork: {
            address: "1626 Tyra Union",
            existingNetworkId: "fuga",
            networkId: "in",
          },
          userNote: "corporis",
        },
      ],
      networks: [
        {
          bandwidth: NetworkConfigBandwidthEnum.Bw2Gbps,
          cidr: "saepe",
          id: "quidem",
          location: "architecto",
          serviceCidr: NetworkConfigServiceCidrEnum.ServiceCidrUnspecified,
          type: NetworkConfigTypeEnum.Private,
          userNote: "est",
          vlanAttachments: [
            {
              id: "laborum",
              pairingKey: "dolores",
            },
            {
              id: "dolorem",
              pairingKey: "corporis",
            },
            {
              id: "explicabo",
              pairingKey: "nobis",
            },
          ],
        },
        {
          bandwidth: NetworkConfigBandwidthEnum.Bw1Gbps,
          cidr: "omnis",
          id: "nemo",
          location: "minima",
          serviceCidr: NetworkConfigServiceCidrEnum.High26,
          type: NetworkConfigTypeEnum.TypeUnspecified,
          userNote: "iure",
          vlanAttachments: [
            {
              id: "doloribus",
              pairingKey: "sapiente",
            },
            {
              id: "architecto",
              pairingKey: "mollitia",
            },
            {
              id: "dolorem",
              pairingKey: "culpa",
            },
          ],
        },
        {
          bandwidth: NetworkConfigBandwidthEnum.BandwidthUnspecified,
          cidr: "repellat",
          id: "mollitia",
          location: "occaecati",
          serviceCidr: NetworkConfigServiceCidrEnum.Disabled,
          type: NetworkConfigTypeEnum.Client,
          userNote: "quam",
          vlanAttachments: [
            {
              id: "velit",
              pairingKey: "error",
            },
            {
              id: "quia",
              pairingKey: "quis",
            },
          ],
        },
      ],
      ticketId: "vitae",
      volumes: [
        {
          id: "animi",
          location: "enim",
          lunRanges: [
            {
              quantity: 778346,
              sizeGb: 196582,
            },
          ],
          machineIds: [
            "ipsam",
            "id",
            "possimus",
            "aut",
          ],
          nfsExports: [
            {
              allowDev: false,
              allowSuid: false,
              cidr: "error",
              machineId: "temporibus",
              networkId: "laborum",
              noRootSquash: false,
              permissions: NfsExportPermissionsEnum.PermissionsUnspecified,
            },
          ],
          protocol: VolumeConfigProtocolEnum.ProtocolNfs,
          sizeGb: 976460,
          snapshotsEnabled: false,
          type: VolumeConfigTypeEnum.Disk,
          userNote: "nihil",
        },
        {
          id: "praesentium",
          location: "voluptatibus",
          lunRanges: [
            {
              quantity: 604846,
              sizeGb: 451159,
            },
          ],
          machineIds: [
            "perferendis",
            "doloremque",
            "reprehenderit",
          ],
          nfsExports: [
            {
              allowDev: false,
              allowSuid: false,
              cidr: "maiores",
              machineId: "dicta",
              networkId: "corporis",
              noRootSquash: false,
              permissions: NfsExportPermissionsEnum.PermissionsUnspecified,
            },
            {
              allowDev: false,
              allowSuid: false,
              cidr: "iusto",
              machineId: "dicta",
              networkId: "harum",
              noRootSquash: false,
              permissions: NfsExportPermissionsEnum.PermissionsUnspecified,
            },
          ],
          protocol: VolumeConfigProtocolEnum.ProtocolNfs,
          sizeGb: 414263,
          snapshotsEnabled: false,
          type: VolumeConfigTypeEnum.Disk,
          userNote: "quae",
        },
        {
          id: "ipsum",
          location: "quidem",
          lunRanges: [
            {
              quantity: 566602,
              sizeGb: 865103,
            },
            {
              quantity: 265389,
              sizeGb: 508969,
            },
            {
              quantity: 523248,
              sizeGb: 916723,
            },
          ],
          machineIds: [
            "repudiandae",
          ],
          nfsExports: [
            {
              allowDev: false,
              allowSuid: false,
              cidr: "veritatis",
              machineId: "itaque",
              networkId: "incidunt",
              noRootSquash: false,
              permissions: NfsExportPermissionsEnum.PermissionsUnspecified,
            },
            {
              allowDev: false,
              allowSuid: false,
              cidr: "consequatur",
              machineId: "est",
              networkId: "quibusdam",
              noRootSquash: false,
              permissions: NfsExportPermissionsEnum.PermissionsUnspecified,
            },
            {
              allowDev: false,
              allowSuid: false,
              cidr: "deserunt",
              machineId: "distinctio",
              networkId: "quibusdam",
              noRootSquash: false,
              permissions: NfsExportPermissionsEnum.PermissionsUnspecified,
            },
          ],
          protocol: VolumeConfigProtocolEnum.ProtocolUnspecified,
          sizeGb: 183191,
          snapshotsEnabled: false,
          type: VolumeConfigTypeEnum.Flash,
          userNote: "cupiditate",
        },
      ],
    },
  },
  accessToken: "quos",
  alt: AltEnum.Json,
  callback: "magni",
  fields: "assumenda",
  key: "ipsam",
  location: "alias",
  oauthToken: "fugit",
  prettyPrint: false,
  project: "dolorum",
  quotaUser: "excepturi",
  uploadType: "tempora",
  uploadProtocol: "facilis",
};

sdk.projects.baremetalsolutionProjectsLocationsSubmitProvisioningConfig(req).then((res: BaremetalsolutionProjectsLocationsSubmitProvisioningConfigResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->