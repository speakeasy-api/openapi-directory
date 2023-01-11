<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PolicysimulatorProjectsLocationsReplaysCreateRequest, PolicysimulatorProjectsLocationsReplaysCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PolicysimulatorProjectsLocationsReplaysCreateRequest = {
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
    config: {
      logSource: "RECENT_ACCESSES",
      policyOverlay: {
        "voluptatum": {
          auditConfigs: [
            {
              auditLogConfigs: [
                {
                  exemptedMembers: [
                    "et",
                    "voluptate",
                    "iste",
                  ],
                  logType: "LOG_TYPE_UNSPECIFIED",
                },
                {
                  exemptedMembers: [
                    "dolores",
                    "illum",
                    "debitis",
                  ],
                  logType: "LOG_TYPE_UNSPECIFIED",
                },
                {
                  exemptedMembers: [
                    "dolore",
                  ],
                  logType: "LOG_TYPE_UNSPECIFIED",
                },
              ],
              service: "aspernatur",
            },
          ],
          bindings: [
            {
              condition: {
                description: "totam",
                expression: "commodi",
                location: "quis",
                title: "est",
              },
              members: [
                "odit",
                "non",
                "voluptas",
              ],
              role: "omnis",
            },
            {
              condition: {
                description: "aut",
                expression: "illo",
                location: "sed",
                title: "officiis",
              },
              members: [
                "consectetur",
                "nobis",
              ],
              role: "odio",
            },
            {
              condition: {
                description: "qui",
                expression: "recusandae",
                location: "at",
                title: "ipsum",
              },
              members: [
                "modi",
                "sint",
              ],
              role: "inventore",
            },
          ],
          etag: "ut",
          version: 406703151708498928,
        },
      },
    },
    resultsSummary: {
      differenceCount: 4756106358532488297,
      errorCount: 5837486892148644279,
      logCount: 4736217237333769909,
      newestDate: {
        day: 2264299874001785192,
        month: 1061380815263676471,
        year: 7242748068272024738,
      },
      oldestDate: {
        day: 7719717197379695442,
        month: 4112921325496946042,
        year: 2671030200101705776,
      },
      unchangedCount: 3508963237347473586,
    },
  },
};

sdk.projects.policysimulatorProjectsLocationsReplaysCreate(req).then((res: PolicysimulatorProjectsLocationsReplaysCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->