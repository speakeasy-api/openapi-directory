# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/servicecontrol/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/servicecontrol/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ServicecontrolServicesAllocateQuotaRequest,
  ServicecontrolServicesAllocateQuotaResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  QuotaOperationQuotaModeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ServicecontrolServicesAllocateQuotaRequest = {
  dollarXgafv: XgafvEnum.Two,
  allocateQuotaRequest: {
    allocateOperation: {
      consumerId: "provident",
      labels: {
        "quibusdam": "unde",
        "nulla": "corrupti",
        "illum": "vel",
      },
      methodName: "error",
      operationId: "deserunt",
      quotaMetrics: [
        {
          metricName: "iure",
          metricValues: [
            {
              boolValue: false,
              distributionValue: {
                bucketCounts: [
                  "ipsa",
                  "delectus",
                  "tempora",
                  "suscipit",
                ],
                count: "molestiae",
                exemplars: [
                  {
                    attachments: [
                      {
                        "iusto": "excepturi",
                        "nisi": "recusandae",
                        "temporibus": "ab",
                      },
                      {
                        "veritatis": "deserunt",
                        "perferendis": "ipsam",
                      },
                      {
                        "sapiente": "quo",
                        "odit": "at",
                        "at": "maiores",
                        "molestiae": "quod",
                      },
                      {
                        "esse": "totam",
                        "porro": "dolorum",
                        "dicta": "nam",
                        "officia": "occaecati",
                      },
                    ],
                    timestamp: "fugit",
                    value: 5373.73,
                  },
                  {
                    attachments: [
                      {
                        "totam": "beatae",
                        "commodi": "molestiae",
                        "modi": "qui",
                        "impedit": "cum",
                      },
                      {
                        "ipsum": "excepturi",
                        "aspernatur": "perferendis",
                      },
                      {
                        "natus": "sed",
                        "iste": "dolor",
                      },
                      {
                        "laboriosam": "hic",
                        "saepe": "fuga",
                        "in": "corporis",
                      },
                    ],
                    timestamp: "iste",
                    value: 4370.32,
                  },
                  {
                    attachments: [
                      {
                        "architecto": "ipsa",
                        "reiciendis": "est",
                        "mollitia": "laborum",
                      },
                      {
                        "dolorem": "corporis",
                      },
                      {
                        "nobis": "enim",
                      },
                      {
                        "nemo": "minima",
                        "excepturi": "accusantium",
                        "iure": "culpa",
                      },
                    ],
                    timestamp: "doloribus",
                    value: 9589.5,
                  },
                  {
                    attachments: [
                      {
                        "dolorem": "culpa",
                        "consequuntur": "repellat",
                        "mollitia": "occaecati",
                      },
                    ],
                    timestamp: "numquam",
                    value: 4143.69,
                  },
                ],
                explicitBuckets: {
                  bounds: [
                    4746.97,
                    2444.25,
                  ],
                },
                exponentialBuckets: {
                  growthFactor: 6235.1,
                  numFiniteBuckets: 158969,
                  scale: 3380.07,
                },
                linearBuckets: {
                  numFiniteBuckets: 110375,
                  offset: 6747.52,
                  width: 6563.3,
                },
                maximum: 3172.02,
                mean: 1381.83,
                minimum: 7783.46,
                sumOfSquaredDeviation: 1965.82,
              },
              doubleValue: 9495.72,
              endTime: "ipsam",
              int64Value: "id",
              labels: {
                "aut": "quasi",
                "error": "temporibus",
                "laborum": "quasi",
                "reiciendis": "voluptatibus",
              },
              moneyValue: {
                currencyCode: "vero",
                nanos: 468651,
                units: "praesentium",
              },
              startTime: "voluptatibus",
              stringValue: "ipsa",
            },
            {
              boolValue: false,
              distributionValue: {
                bucketCounts: [
                  "voluptate",
                  "cum",
                  "perferendis",
                ],
                count: "doloremque",
                exemplars: [
                  {
                    attachments: [
                      {
                        "dicta": "corporis",
                        "dolore": "iusto",
                        "dicta": "harum",
                        "enim": "accusamus",
                      },
                      {
                        "repudiandae": "quae",
                        "ipsum": "quidem",
                      },
                    ],
                    timestamp: "molestias",
                    value: 5666.02,
                  },
                  {
                    attachments: [
                      {
                        "praesentium": "rem",
                        "voluptates": "quasi",
                      },
                      {
                        "sint": "veritatis",
                        "itaque": "incidunt",
                        "enim": "consequatur",
                        "est": "quibusdam",
                      },
                      {
                        "deserunt": "distinctio",
                      },
                      {
                        "labore": "modi",
                        "qui": "aliquid",
                        "cupiditate": "quos",
                        "perferendis": "magni",
                      },
                    ],
                    timestamp: "assumenda",
                    value: 3698.08,
                  },
                ],
                explicitBuckets: {
                  bounds: [
                    1464.41,
                  ],
                },
                exponentialBuckets: {
                  growthFactor: 6778.17,
                  numFiniteBuckets: 569618,
                  scale: 2700.08,
                },
                linearBuckets: {
                  numFiniteBuckets: 703737,
                  offset: 7351.94,
                  width: 2884.76,
                },
                maximum: 9621.89,
                mean: 4332.88,
                minimum: 2487.53,
                sumOfSquaredDeviation: 7561.07,
              },
              doubleValue: 5761.57,
              endTime: "aliquid",
              int64Value: "provident",
              labels: {
                "sint": "officia",
                "dolor": "debitis",
                "a": "dolorum",
                "in": "in",
              },
              moneyValue: {
                currencyCode: "illum",
                nanos: 978571,
                units: "rerum",
              },
              startTime: "dicta",
              stringValue: "magnam",
            },
          ],
        },
        {
          metricName: "cumque",
          metricValues: [
            {
              boolValue: false,
              distributionValue: {
                bucketCounts: [
                  "aliquid",
                  "laborum",
                ],
                count: "accusamus",
                exemplars: [
                  {
                    attachments: [
                      {
                        "accusamus": "delectus",
                        "quidem": "provident",
                      },
                      {
                        "id": "blanditiis",
                        "deleniti": "sapiente",
                        "amet": "deserunt",
                      },
                      {
                        "vel": "natus",
                        "omnis": "molestiae",
                      },
                    ],
                    timestamp: "perferendis",
                    value: 4701.32,
                  },
                ],
                explicitBuckets: {
                  bounds: [
                    7160.75,
                    6601.74,
                  ],
                },
                exponentialBuckets: {
                  growthFactor: 2879.91,
                  numFiniteBuckets: 290077,
                  scale: 3834.62,
                },
                linearBuckets: {
                  numFiniteBuckets: 618016,
                  offset: 7491.7,
                  width: 4287.69,
                },
                maximum: 8784.53,
                mean: 1354.74,
                minimum: 1028.63,
                sumOfSquaredDeviation: 2982.82,
              },
              doubleValue: 923.73,
              endTime: "excepturi",
              int64Value: "ullam",
              labels: {
                "quos": "sint",
                "accusantium": "mollitia",
                "reiciendis": "mollitia",
              },
              moneyValue: {
                currencyCode: "ad",
                nanos: 431418,
                units: "dolor",
              },
              startTime: "necessitatibus",
              stringValue: "odit",
            },
            {
              boolValue: false,
              distributionValue: {
                bucketCounts: [
                  "quasi",
                  "iure",
                ],
                count: "doloribus",
                exemplars: [
                  {
                    attachments: [
                      {
                        "deleniti": "facilis",
                        "in": "architecto",
                        "architecto": "repudiandae",
                        "ullam": "expedita",
                      },
                      {
                        "repellat": "quibusdam",
                        "sed": "saepe",
                      },
                    ],
                    timestamp: "pariatur",
                    value: 375.59,
                  },
                  {
                    attachments: [
                      {
                        "natus": "magni",
                        "sunt": "quo",
                        "illum": "pariatur",
                      },
                    ],
                    timestamp: "maxime",
                    value: 4113.97,
                  },
                  {
                    attachments: [
                      {
                        "ea": "accusantium",
                      },
                      {
                        "maiores": "quidem",
                      },
                      {
                        "voluptate": "autem",
                        "nam": "eaque",
                      },
                    ],
                    timestamp: "pariatur",
                    value: 3654.96,
                  },
                  {
                    attachments: [
                      {
                        "fugiat": "amet",
                      },
                      {
                        "cumque": "corporis",
                      },
                      {
                        "libero": "nobis",
                        "dolores": "quis",
                        "totam": "dignissimos",
                        "eaque": "quis",
                      },
                      {
                        "eos": "perferendis",
                      },
                    ],
                    timestamp: "dolores",
                    value: 7936.98,
                  },
                ],
                explicitBuckets: {
                  bounds: [
                    2239.24,
                    8745.73,
                  ],
                },
                exponentialBuckets: {
                  growthFactor: 3453.52,
                  numFiniteBuckets: 944120,
                  scale: 9280.82,
                },
                linearBuckets: {
                  numFiniteBuckets: 608253,
                  offset: 7044.15,
                  width: 5966.56,
                },
                maximum: 318.38,
                mean: 7836.45,
                minimum: 1646.94,
                sumOfSquaredDeviation: 5000.26,
              },
              doubleValue: 6214.79,
              endTime: "eaque",
              int64Value: "occaecati",
              labels: {
                "adipisci": "asperiores",
                "earum": "modi",
                "iste": "dolorum",
              },
              moneyValue: {
                currencyCode: "deleniti",
                nanos: 864282,
                units: "provident",
              },
              startTime: "nobis",
              stringValue: "libero",
            },
            {
              boolValue: false,
              distributionValue: {
                bucketCounts: [
                  "quaerat",
                  "quos",
                  "aliquid",
                  "dolorem",
                ],
                count: "dolorem",
                exemplars: [
                  {
                    attachments: [
                      {
                        "hic": "excepturi",
                      },
                    ],
                    timestamp: "cum",
                    value: 4521.09,
                  },
                ],
                explicitBuckets: {
                  bounds: [
                    9702.37,
                    2274.14,
                  ],
                },
                exponentialBuckets: {
                  growthFactor: 6805.45,
                  numFiniteBuckets: 254356,
                  scale: 852.95,
                },
                linearBuckets: {
                  numFiniteBuckets: 58029,
                  offset: 564.18,
                  width: 4344.17,
                },
                maximum: 4878.38,
                mean: 3117.96,
                minimum: 8810.05,
                sumOfSquaredDeviation: 6963.44,
              },
              doubleValue: 9764.05,
              endTime: "voluptas",
              int64Value: "natus",
              labels: {
                "atque": "sit",
              },
              moneyValue: {
                currencyCode: "fugiat",
                nanos: 67249,
                units: "soluta",
              },
              startTime: "dolorum",
              stringValue: "iusto",
            },
            {
              boolValue: false,
              distributionValue: {
                bucketCounts: [
                  "dolorum",
                  "deleniti",
                ],
                count: "omnis",
                exemplars: [
                  {
                    attachments: [
                      {
                        "nihil": "ipsum",
                        "voluptate": "id",
                        "saepe": "eius",
                        "aspernatur": "perferendis",
                      },
                      {
                        "optio": "accusamus",
                      },
                      {
                        "saepe": "suscipit",
                        "deserunt": "provident",
                      },
                    ],
                    timestamp: "minima",
                    value: 8310.49,
                  },
                  {
                    attachments: [
                      {
                        "alias": "at",
                        "quaerat": "tempora",
                        "vel": "quod",
                      },
                      {
                        "qui": "dolorum",
                        "a": "esse",
                        "harum": "iusto",
                        "ipsum": "quisquam",
                      },
                      {
                        "amet": "tempore",
                        "accusamus": "numquam",
                        "enim": "dolorem",
                        "sapiente": "totam",
                      },
                    ],
                    timestamp: "nihil",
                    value: 256.62,
                  },
                  {
                    attachments: [
                      {
                        "sed": "vel",
                      },
                      {
                        "voluptas": "deserunt",
                        "quam": "ipsum",
                        "incidunt": "qui",
                      },
                      {
                        "maxime": "pariatur",
                        "soluta": "dicta",
                        "laborum": "totam",
                      },
                    ],
                    timestamp: "incidunt",
                    value: 1320.68,
                  },
                  {
                    attachments: [
                      {
                        "facilis": "aliquid",
                        "quam": "molestias",
                        "temporibus": "qui",
                      },
                    ],
                    timestamp: "neque",
                    value: 1448.47,
                  },
                ],
                explicitBuckets: {
                  bounds: [
                    4880.56,
                  ],
                },
                exponentialBuckets: {
                  growthFactor: 1248.33,
                  numFiniteBuckets: 355613,
                  scale: 7220.81,
                },
                linearBuckets: {
                  numFiniteBuckets: 940432,
                  offset: 304.52,
                  width: 7653.26,
                },
                maximum: 7469.94,
                mean: 7486.64,
                minimum: 925.96,
                sumOfSquaredDeviation: 9037.2,
              },
              doubleValue: 2174.5,
              endTime: "veritatis",
              int64Value: "nobis",
              labels: {
                "tempore": "cupiditate",
                "aperiam": "delectus",
                "dolorem": "dolore",
              },
              moneyValue: {
                currencyCode: "labore",
                nanos: 240829,
                units: "dolorum",
              },
              startTime: "architecto",
              stringValue: "quae",
            },
          ],
        },
      ],
      quotaMode: QuotaOperationQuotaModeEnum.Unspecified,
    },
    serviceConfigId: "quas",
  },
  accessToken: "itaque",
  alt: AltEnum.Json,
  callback: "est",
  fields: "repellendus",
  key: "porro",
  oauthToken: "doloribus",
  prettyPrint: false,
  quotaUser: "ut",
  serviceName: "facilis",
  uploadType: "cupiditate",
  uploadProtocol: "qui",
};

sdk.services.servicecontrolServicesAllocateQuota(req).then((res: ServicecontrolServicesAllocateQuotaResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### services

* `servicecontrolServicesAllocateQuota` - Attempts to allocate quota for the specified consumer. It should be called before the operation is executed. This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam). **NOTE:** The client **must** fail-open on server errors `INTERNAL`, `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system reliability, the server may inject these errors to prohibit any hard dependency on the quota functionality.
* `servicecontrolServicesCheck` - Checks whether an operation on a service should be allowed to proceed based on the configuration of the service and related policies. It must be called before the operation is executed. If feasible, the client should cache the check results and reuse them for 60 seconds. In case of any server errors, the client should rely on the cached results for much longer time to avoid outage. WARNING: There is general 60s delay for the configuration and policy propagation, therefore callers MUST NOT depend on the `Check` method having the latest policy information. NOTE: the CheckRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam).
* `servicecontrolServicesReport` - Reports operation results to Google Service Control, such as logs and metrics. It should be called after an operation is completed. If feasible, the client should aggregate reporting data for up to 5 seconds to reduce API traffic. Limiting aggregation to 5 seconds is to reduce data loss during client crashes. Clients should carefully choose the aggregation time window to avoid data loss risk more than 0.01% for business and compliance reasons. NOTE: the ReportRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

