<!-- Start SDK Example Usage -->
```typescript
import {
  PolicysimulatorProjectsLocationsReplaysCreateRequest,
  PolicysimulatorProjectsLocationsReplaysCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum,
  GoogleIamV1AuditLogConfigLogTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PolicysimulatorProjectsLocationsReplaysCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudPolicysimulatorV1ReplayInput: {
    config: {
      logSource: GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum.RecentAccesses,
      policyOverlay: {
        "quibusdam": {
          auditConfigs: [
            {
              auditLogConfigs: [
                {
                  exemptedMembers: [
                    "illum",
                    "vel",
                    "error",
                  ],
                  logType: GoogleIamV1AuditLogConfigLogTypeEnum.DataWrite,
                },
                {
                  exemptedMembers: [
                    "iure",
                    "magnam",
                  ],
                  logType: GoogleIamV1AuditLogConfigLogTypeEnum.DataRead,
                },
                {
                  exemptedMembers: [
                    "delectus",
                  ],
                  logType: GoogleIamV1AuditLogConfigLogTypeEnum.AdminRead,
                },
                {
                  exemptedMembers: [
                    "molestiae",
                    "minus",
                  ],
                  logType: GoogleIamV1AuditLogConfigLogTypeEnum.DataRead,
                },
              ],
              service: "voluptatum",
            },
            {
              auditLogConfigs: [
                {
                  exemptedMembers: [
                    "nisi",
                    "recusandae",
                    "temporibus",
                  ],
                  logType: GoogleIamV1AuditLogConfigLogTypeEnum.LogTypeUnspecified,
                },
                {
                  exemptedMembers: [
                    "veritatis",
                    "deserunt",
                  ],
                  logType: GoogleIamV1AuditLogConfigLogTypeEnum.LogTypeUnspecified,
                },
              ],
              service: "ipsam",
            },
            {
              auditLogConfigs: [
                {
                  exemptedMembers: [
                    "quo",
                    "odit",
                    "at",
                    "at",
                  ],
                  logType: GoogleIamV1AuditLogConfigLogTypeEnum.DataRead,
                },
                {
                  exemptedMembers: [
                    "quod",
                    "quod",
                  ],
                  logType: GoogleIamV1AuditLogConfigLogTypeEnum.AdminRead,
                },
                {
                  exemptedMembers: [
                    "porro",
                    "dolorum",
                    "dicta",
                  ],
                  logType: GoogleIamV1AuditLogConfigLogTypeEnum.DataWrite,
                },
                {
                  exemptedMembers: [
                    "occaecati",
                    "fugit",
                    "deleniti",
                  ],
                  logType: GoogleIamV1AuditLogConfigLogTypeEnum.DataRead,
                },
              ],
              service: "optio",
            },
          ],
          bindings: [
            {
              condition: {
                description: "beatae",
                expression: "commodi",
                location: "molestiae",
                title: "Mrs.",
              },
              members: [
                "impedit",
              ],
              role: "cum",
            },
            {
              condition: {
                description: "esse",
                expression: "ipsum",
                location: "excepturi",
                title: "Mr.",
              },
              members: [
                "ad",
              ],
              role: "natus",
            },
            {
              condition: {
                description: "sed",
                expression: "iste",
                location: "dolor",
                title: "Miss",
              },
              members: [
                "hic",
                "saepe",
              ],
              role: "fuga",
            },
          ],
          etag: "in",
          version: 359508,
        },
        "iste": {
          auditConfigs: [
            {
              auditLogConfigs: [
                {
                  exemptedMembers: [
                    "architecto",
                    "ipsa",
                    "reiciendis",
                  ],
                  logType: GoogleIamV1AuditLogConfigLogTypeEnum.DataWrite,
                },
                {
                  exemptedMembers: [
                    "laborum",
                    "dolores",
                    "dolorem",
                  ],
                  logType: GoogleIamV1AuditLogConfigLogTypeEnum.AdminRead,
                },
                {
                  exemptedMembers: [
                    "nobis",
                  ],
                  logType: GoogleIamV1AuditLogConfigLogTypeEnum.AdminRead,
                },
                {
                  exemptedMembers: [
                    "nemo",
                    "minima",
                    "excepturi",
                  ],
                  logType: GoogleIamV1AuditLogConfigLogTypeEnum.LogTypeUnspecified,
                },
              ],
              service: "iure",
            },
            {
              auditLogConfigs: [
                {
                  exemptedMembers: [
                    "sapiente",
                    "architecto",
                    "mollitia",
                    "dolorem",
                  ],
                  logType: GoogleIamV1AuditLogConfigLogTypeEnum.DataWrite,
                },
                {
                  exemptedMembers: [
                    "repellat",
                  ],
                  logType: GoogleIamV1AuditLogConfigLogTypeEnum.DataWrite,
                },
                {
                  exemptedMembers: [
                    "numquam",
                    "commodi",
                    "quam",
                  ],
                  logType: GoogleIamV1AuditLogConfigLogTypeEnum.AdminRead,
                },
              ],
              service: "velit",
            },
          ],
          bindings: [
            {
              condition: {
                description: "quia",
                expression: "quis",
                location: "vitae",
                title: "Miss",
              },
              members: [
                "enim",
                "odit",
                "quo",
              ],
              role: "sequi",
            },
            {
              condition: {
                description: "tenetur",
                expression: "ipsam",
                location: "id",
                title: "Dr.",
              },
              members: [
                "quasi",
              ],
              role: "error",
            },
            {
              condition: {
                description: "temporibus",
                expression: "laborum",
                location: "quasi",
                title: "Dr.",
              },
              members: [
                "vero",
                "nihil",
                "praesentium",
                "voluptatibus",
              ],
              role: "ipsa",
            },
          ],
          etag: "omnis",
          version: 451159,
        },
        "cum": {
          auditConfigs: [
            {
              auditLogConfigs: [
                {
                  exemptedMembers: [
                    "ut",
                    "maiores",
                  ],
                  logType: GoogleIamV1AuditLogConfigLogTypeEnum.LogTypeUnspecified,
                },
              ],
              service: "corporis",
            },
          ],
          bindings: [
            {
              condition: {
                description: "iusto",
                expression: "dicta",
                location: "harum",
                title: "Mrs.",
              },
              members: [
                "commodi",
                "repudiandae",
                "quae",
                "ipsum",
              ],
              role: "quidem",
            },
            {
              condition: {
                description: "molestias",
                expression: "excepturi",
                location: "pariatur",
                title: "Mrs.",
              },
              members: [
                "rem",
                "voluptates",
                "quasi",
              ],
              role: "repudiandae",
            },
          ],
          etag: "sint",
          version: 83112,
        },
      },
    },
    resultsSummary: {
      differenceCount: 929297,
      errorCount: 277718,
      logCount: 318569,
      newestDate: {
        day: 9356,
        month: 667411,
        year: 842342,
      },
      oldestDate: {
        day: 131797,
        month: 647174,
        year: 716327,
      },
      unchangedCount: 841386,
    },
  },
  accessToken: "labore",
  alt: AltEnum.Json,
  callback: "qui",
  fields: "aliquid",
  key: "cupiditate",
  oauthToken: "quos",
  parent: "perferendis",
  prettyPrint: false,
  quotaUser: "magni",
  uploadType: "assumenda",
  uploadProtocol: "ipsam",
};

sdk.projects.policysimulatorProjectsLocationsReplaysCreate(req).then((res: PolicysimulatorProjectsLocationsReplaysCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->