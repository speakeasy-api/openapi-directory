<!-- Start SDK Example Usage -->
```typescript
import {
  DocumentaiProjectsLocationsDocumentsBatchProcessRequest,
  DocumentaiProjectsLocationsDocumentsBatchProcessResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DocumentaiProjectsLocationsDocumentsBatchProcessRequest = {
  dollarXgafv: XgafvEnum.Two,
  googleCloudDocumentaiV1beta2BatchProcessDocumentsRequest: {
    requests: [
      {
        automlParams: {
          model: "distinctio",
        },
        documentType: "quibusdam",
        entityExtractionParams: {
          enabled: false,
          modelVersion: "unde",
        },
        formExtractionParams: {
          enabled: false,
          keyValuePairHints: [
            {
              key: "corrupti",
              valueTypes: [
                "vel",
                "error",
                "deserunt",
                "suscipit",
              ],
            },
            {
              key: "iure",
              valueTypes: [
                "debitis",
                "ipsa",
              ],
            },
            {
              key: "delectus",
              valueTypes: [
                "suscipit",
                "molestiae",
              ],
            },
            {
              key: "minus",
              valueTypes: [
                "voluptatum",
                "iusto",
                "excepturi",
                "nisi",
              ],
            },
          ],
          modelVersion: "recusandae",
        },
        inputConfig: {
          contents: "temporibus",
          gcsSource: {
            uri: "http://gloomy-blanket.name",
          },
          mimeType: "perferendis",
        },
        ocrParams: {
          languageHints: [
            "repellendus",
            "sapiente",
          ],
        },
        outputConfig: {
          gcsDestination: {
            uri: "https://constant-sundae.org",
          },
          pagesPerShard: 978619,
        },
        parent: "molestiae",
        tableExtractionParams: {
          enabled: false,
          headerHints: [
            "quod",
            "esse",
            "totam",
            "porro",
          ],
          modelVersion: "dolorum",
          tableBoundHints: [
            {
              boundingBox: {
                normalizedVertices: [
                  {
                    x: 6399.21,
                    y: 5820.2,
                  },
                  {
                    x: 1433.53,
                    y: 5373.73,
                  },
                  {
                    x: 9446.69,
                    y: 7586.16,
                  },
                ],
                vertices: [
                  {
                    x: 105907,
                    y: 414662,
                  },
                  {
                    x: 473600,
                    y: 264555,
                  },
                  {
                    x: 186332,
                    y: 774234,
                  },
                ],
              },
              pageNumber: 736918,
            },
          ],
        },
      },
      {
        automlParams: {
          model: "esse",
        },
        documentType: "ipsum",
        entityExtractionParams: {
          enabled: false,
          modelVersion: "excepturi",
        },
        formExtractionParams: {
          enabled: false,
          keyValuePairHints: [
            {
              key: "perferendis",
              valueTypes: [
                "natus",
                "sed",
              ],
            },
          ],
          modelVersion: "iste",
        },
        inputConfig: {
          contents: "dolor",
          gcsSource: {
            uri: "https://hoarse-upper.org",
          },
          mimeType: "fuga",
        },
        ocrParams: {
          languageHints: [
            "corporis",
            "iste",
          ],
        },
        outputConfig: {
          gcsDestination: {
            uri: "http://unsteady-progress.com",
          },
          pagesPerShard: 60225,
        },
        parent: "reiciendis",
        tableExtractionParams: {
          enabled: false,
          headerHints: [
            "mollitia",
            "laborum",
            "dolores",
          ],
          modelVersion: "dolorem",
          tableBoundHints: [
            {
              boundingBox: {
                normalizedVertices: [
                  {
                    x: 7506.86,
                    y: 3154.28,
                  },
                ],
                vertices: [
                  {
                    x: 363711,
                    y: 325047,
                  },
                  {
                    x: 570197,
                    y: 38425,
                  },
                  {
                    x: 438601,
                    y: 634274,
                  },
                ],
              },
              pageNumber: 988374,
            },
            {
              boundingBox: {
                normalizedVertices: [
                  {
                    x: 1020.44,
                    y: 6527.9,
                  },
                  {
                    x: 2088.76,
                    y: 6350.59,
                  },
                  {
                    x: 1613.09,
                    y: 9953,
                  },
                  {
                    x: 6531.08,
                    y: 5818.5,
                  },
                ],
                vertices: [
                  {
                    x: 414369,
                    y: 466311,
                  },
                  {
                    x: 474697,
                    y: 244425,
                  },
                ],
              },
              pageNumber: 623510,
            },
          ],
        },
      },
      {
        automlParams: {
          model: "quia",
        },
        documentType: "quis",
        entityExtractionParams: {
          enabled: false,
          modelVersion: "vitae",
        },
        formExtractionParams: {
          enabled: false,
          keyValuePairHints: [
            {
              key: "animi",
              valueTypes: [
                "odit",
                "quo",
              ],
            },
            {
              key: "sequi",
              valueTypes: [
                "ipsam",
                "id",
                "possimus",
                "aut",
              ],
            },
            {
              key: "quasi",
              valueTypes: [
                "temporibus",
                "laborum",
                "quasi",
              ],
            },
          ],
          modelVersion: "reiciendis",
        },
        inputConfig: {
          contents: "voluptatibus",
          gcsSource: {
            uri: "https://klutzy-level.org",
          },
          mimeType: "ipsa",
        },
        ocrParams: {
          languageHints: [
            "voluptate",
            "cum",
            "perferendis",
          ],
        },
        outputConfig: {
          gcsDestination: {
            uri: "http://insubstantial-dramaturge.org",
          },
          pagesPerShard: 120196,
        },
        parent: "corporis",
        tableExtractionParams: {
          enabled: false,
          headerHints: [
            "iusto",
            "dicta",
          ],
          modelVersion: "harum",
          tableBoundHints: [
            {
              boundingBox: {
                normalizedVertices: [
                  {
                    x: 4142.63,
                    y: 9182.36,
                  },
                  {
                    x: 641.47,
                    y: 2168.22,
                  },
                  {
                    x: 6924.72,
                    y: 5651.89,
                  },
                  {
                    x: 5666.02,
                    y: 8651.03,
                  },
                ],
                vertices: [
                  {
                    x: 508969,
                    y: 523248,
                  },
                  {
                    x: 916723,
                    y: 93940,
                  },
                ],
              },
              pageNumber: 921158,
            },
            {
              boundingBox: {
                normalizedVertices: [
                  {
                    x: 831.12,
                    y: 9292.97,
                  },
                  {
                    x: 2777.18,
                    y: 3185.69,
                  },
                  {
                    x: 93.56,
                    y: 6674.11,
                  },
                ],
                vertices: [
                  {
                    x: 131797,
                    y: 647174,
                  },
                  {
                    x: 716327,
                    y: 841386,
                  },
                  {
                    x: 289406,
                    y: 264730,
                  },
                  {
                    x: 183191,
                    y: 397821,
                  },
                ],
              },
              pageNumber: 586513,
            },
          ],
        },
      },
    ],
  },
  accessToken: "quos",
  alt: AltEnum.Json,
  callback: "magni",
  fields: "assumenda",
  key: "ipsam",
  oauthToken: "alias",
  parent: "fugit",
  prettyPrint: false,
  quotaUser: "dolorum",
  uploadType: "excepturi",
  uploadProtocol: "tempora",
};

sdk.projects.documentaiProjectsLocationsDocumentsBatchProcess(req).then((res: DocumentaiProjectsLocationsDocumentsBatchProcessResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->