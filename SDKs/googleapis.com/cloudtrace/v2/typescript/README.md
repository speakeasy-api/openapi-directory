# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudtrace/v2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudtrace/v2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CloudtraceProjectsTracesBatchWriteRequest,
  CloudtraceProjectsTracesBatchWriteResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  SpanSpanKindEnum,
  MessageEventTypeEnum,
  LinkTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudtraceProjectsTracesBatchWriteRequest = {
  dollarXgafv: XgafvEnum.Two,
  batchWriteSpansRequest: {
    spans: [
      {
        attributes: {
          attributeMap: {
            "quibusdam": {
              boolValue: false,
              intValue: "unde",
              stringValue: {
                truncatedByteCount: 857946,
                value: "corrupti",
              },
            },
            "illum": {
              boolValue: false,
              intValue: "vel",
              stringValue: {
                truncatedByteCount: 623564,
                value: "deserunt",
              },
            },
            "suscipit": {
              boolValue: false,
              intValue: "iure",
              stringValue: {
                truncatedByteCount: 297534,
                value: "debitis",
              },
            },
          },
          droppedAttributesCount: 56713,
        },
        childSpanCount: 963663,
        displayName: {
          truncatedByteCount: 272656,
          value: "suscipit",
        },
        endTime: "molestiae",
        links: {
          droppedLinksCount: 791725,
          link: [
            {
              attributes: {
                attributeMap: {
                  "iusto": {
                    boolValue: false,
                    intValue: "excepturi",
                    stringValue: {
                      truncatedByteCount: 392785,
                      value: "recusandae",
                    },
                  },
                  "temporibus": {
                    boolValue: false,
                    intValue: "ab",
                    stringValue: {
                      truncatedByteCount: 337396,
                      value: "veritatis",
                    },
                  },
                  "deserunt": {
                    boolValue: false,
                    intValue: "perferendis",
                    stringValue: {
                      truncatedByteCount: 368241,
                      value: "repellendus",
                    },
                  },
                },
                droppedAttributesCount: 957156,
              },
              spanId: "quo",
              traceId: "odit",
              type: LinkTypeEnum.ParentLinkedSpan,
            },
            {
              attributes: {
                attributeMap: {
                  "maiores": {
                    boolValue: false,
                    intValue: "molestiae",
                    stringValue: {
                      truncatedByteCount: 799159,
                      value: "quod",
                    },
                  },
                  "esse": {
                    boolValue: false,
                    intValue: "totam",
                    stringValue: {
                      truncatedByteCount: 780529,
                      value: "dolorum",
                    },
                  },
                  "dicta": {
                    boolValue: false,
                    intValue: "nam",
                    stringValue: {
                      truncatedByteCount: 639921,
                      value: "occaecati",
                    },
                  },
                  "fugit": {
                    boolValue: false,
                    intValue: "deleniti",
                    stringValue: {
                      truncatedByteCount: 944669,
                      value: "optio",
                    },
                  },
                },
                droppedAttributesCount: 521848,
              },
              spanId: "beatae",
              traceId: "commodi",
              type: LinkTypeEnum.ChildLinkedSpan,
            },
            {
              attributes: {
                attributeMap: {
                  "qui": {
                    boolValue: false,
                    intValue: "impedit",
                    stringValue: {
                      truncatedByteCount: 736918,
                      value: "esse",
                    },
                  },
                  "ipsum": {
                    boolValue: false,
                    intValue: "excepturi",
                    stringValue: {
                      truncatedByteCount: 135218,
                      value: "perferendis",
                    },
                  },
                },
                droppedAttributesCount: 324141,
              },
              spanId: "natus",
              traceId: "sed",
              type: LinkTypeEnum.ChildLinkedSpan,
            },
            {
              attributes: {
                attributeMap: {
                  "natus": {
                    boolValue: false,
                    intValue: "laboriosam",
                    stringValue: {
                      truncatedByteCount: 943749,
                      value: "saepe",
                    },
                  },
                },
                droppedAttributesCount: 681820,
              },
              spanId: "in",
              traceId: "corporis",
              type: LinkTypeEnum.ChildLinkedSpan,
            },
          ],
        },
        name: "iure",
        parentSpanId: "saepe",
        sameProcessAsParentSpan: false,
        spanId: "quidem",
        spanKind: SpanSpanKindEnum.SpanKindUnspecified,
        stackTrace: {
          stackFrames: {
            droppedFramesCount: 60225,
            frame: [
              {
                columnNumber: "est",
                fileName: {
                  truncatedByteCount: 653140,
                  value: "laborum",
                },
                functionName: {
                  truncatedByteCount: 170909,
                  value: "dolorem",
                },
                lineNumber: "corporis",
                loadModule: {
                  buildId: {
                    truncatedByteCount: 128926,
                    value: "nobis",
                  },
                  module: {
                    truncatedByteCount: 315428,
                    value: "omnis",
                  },
                },
                originalFunctionName: {
                  truncatedByteCount: 363711,
                  value: "minima",
                },
                sourceVersion: {
                  truncatedByteCount: 570197,
                  value: "accusantium",
                },
              },
              {
                columnNumber: "iure",
                fileName: {
                  truncatedByteCount: 634274,
                  value: "doloribus",
                },
                functionName: {
                  truncatedByteCount: 958950,
                  value: "architecto",
                },
                lineNumber: "mollitia",
                loadModule: {
                  buildId: {
                    truncatedByteCount: 208876,
                    value: "culpa",
                  },
                  module: {
                    truncatedByteCount: 161309,
                    value: "repellat",
                  },
                },
                originalFunctionName: {
                  truncatedByteCount: 653108,
                  value: "occaecati",
                },
                sourceVersion: {
                  truncatedByteCount: 253291,
                  value: "commodi",
                },
              },
              {
                columnNumber: "quam",
                fileName: {
                  truncatedByteCount: 474697,
                  value: "velit",
                },
                functionName: {
                  truncatedByteCount: 623510,
                  value: "quia",
                },
                lineNumber: "quis",
                loadModule: {
                  buildId: {
                    truncatedByteCount: 110375,
                    value: "laborum",
                  },
                  module: {
                    truncatedByteCount: 656330,
                    value: "enim",
                  },
                },
                originalFunctionName: {
                  truncatedByteCount: 138183,
                  value: "quo",
                },
                sourceVersion: {
                  truncatedByteCount: 196582,
                  value: "tenetur",
                },
              },
              {
                columnNumber: "ipsam",
                fileName: {
                  truncatedByteCount: 662527,
                  value: "possimus",
                },
                functionName: {
                  truncatedByteCount: 13571,
                  value: "quasi",
                },
                lineNumber: "error",
                loadModule: {
                  buildId: {
                    truncatedByteCount: 837945,
                    value: "laborum",
                  },
                  module: {
                    truncatedByteCount: 96098,
                    value: "reiciendis",
                  },
                },
                originalFunctionName: {
                  truncatedByteCount: 976460,
                  value: "vero",
                },
                sourceVersion: {
                  truncatedByteCount: 468651,
                  value: "praesentium",
                },
              },
            ],
          },
          stackTraceHashId: "voluptatibus",
        },
        startTime: "ipsa",
        status: {
          code: 604846,
          details: [
            {
              "perferendis": "doloremque",
              "reprehenderit": "ut",
              "maiores": "dicta",
            },
            {
              "dolore": "iusto",
              "dicta": "harum",
            },
          ],
          message: "enim",
        },
        timeEvents: {
          droppedAnnotationsCount: 880476,
          droppedMessageEventsCount: 414263,
          timeEvent: [
            {
              annotation: {
                attributes: {
                  attributeMap: {
                    "ipsum": {
                      boolValue: false,
                      intValue: "quidem",
                      stringValue: {
                        truncatedByteCount: 565189,
                        value: "excepturi",
                      },
                    },
                  },
                  droppedAttributesCount: 865103,
                },
                description: {
                  truncatedByteCount: 265389,
                  value: "praesentium",
                },
              },
              messageEvent: {
                compressedSizeBytes: "rem",
                id: "voluptates",
                type: MessageEventTypeEnum.TypeUnspecified,
                uncompressedSizeBytes: "repudiandae",
              },
              time: "sint",
            },
            {
              annotation: {
                attributes: {
                  attributeMap: {
                    "itaque": {
                      boolValue: false,
                      intValue: "incidunt",
                      stringValue: {
                        truncatedByteCount: 318569,
                        value: "consequatur",
                      },
                    },
                  },
                  droppedAttributesCount: 667411,
                },
                description: {
                  truncatedByteCount: 842342,
                  value: "explicabo",
                },
              },
              messageEvent: {
                compressedSizeBytes: "deserunt",
                id: "distinctio",
                type: MessageEventTypeEnum.Received,
                uncompressedSizeBytes: "labore",
              },
              time: "modi",
            },
            {
              annotation: {
                attributes: {
                  attributeMap: {
                    "aliquid": {
                      boolValue: false,
                      intValue: "cupiditate",
                      stringValue: {
                        truncatedByteCount: 552822,
                        value: "perferendis",
                      },
                    },
                  },
                  droppedAttributesCount: 164940,
                },
                description: {
                  truncatedByteCount: 828940,
                  value: "ipsam",
                },
              },
              messageEvent: {
                compressedSizeBytes: "alias",
                id: "fugit",
                type: MessageEventTypeEnum.Received,
                uncompressedSizeBytes: "excepturi",
              },
              time: "tempora",
            },
            {
              annotation: {
                attributes: {
                  attributeMap: {
                    "tempore": {
                      boolValue: false,
                      intValue: "labore",
                      stringValue: {
                        truncatedByteCount: 962189,
                        value: "eum",
                      },
                    },
                    "non": {
                      boolValue: false,
                      intValue: "eligendi",
                      stringValue: {
                        truncatedByteCount: 576157,
                        value: "aliquid",
                      },
                    },
                    "provident": {
                      boolValue: false,
                      intValue: "necessitatibus",
                      stringValue: {
                        truncatedByteCount: 572252,
                        value: "officia",
                      },
                    },
                  },
                  droppedAttributesCount: 223081,
                },
                description: {
                  truncatedByteCount: 891555,
                  value: "a",
                },
              },
              messageEvent: {
                compressedSizeBytes: "dolorum",
                id: "in",
                type: MessageEventTypeEnum.Sent,
                uncompressedSizeBytes: "illum",
              },
              time: "maiores",
            },
          ],
        },
      },
      {
        attributes: {
          attributeMap: {
            "dicta": {
              boolValue: false,
              intValue: "magnam",
              stringValue: {
                truncatedByteCount: 767024,
                value: "facere",
              },
            },
            "ea": {
              boolValue: false,
              intValue: "aliquid",
              stringValue: {
                truncatedByteCount: 675439,
                value: "accusamus",
              },
            },
            "non": {
              boolValue: false,
              intValue: "occaecati",
              stringValue: {
                truncatedByteCount: 313218,
                value: "accusamus",
              },
            },
          },
          droppedAttributesCount: 965417,
        },
        childSpanCount: 692532,
        displayName: {
          truncatedByteCount: 588465,
          value: "nam",
        },
        endTime: "id",
        links: {
          droppedLinksCount: 501324,
          link: [
            {
              attributes: {
                attributeMap: {
                  "amet": {
                    boolValue: false,
                    intValue: "deserunt",
                    stringValue: {
                      truncatedByteCount: 394869,
                      value: "vel",
                    },
                  },
                  "natus": {
                    boolValue: false,
                    intValue: "omnis",
                    stringValue: {
                      truncatedByteCount: 474867,
                      value: "perferendis",
                    },
                  },
                  "nihil": {
                    boolValue: false,
                    intValue: "magnam",
                    stringValue: {
                      truncatedByteCount: 716075,
                      value: "id",
                    },
                  },
                  "labore": {
                    boolValue: false,
                    intValue: "labore",
                    stringValue: {
                      truncatedByteCount: 383462,
                      value: "natus",
                    },
                  },
                },
                droppedAttributesCount: 749170,
              },
              spanId: "eum",
              traceId: "vero",
              type: LinkTypeEnum.TypeUnspecified,
            },
            {
              attributes: {
                attributeMap: {
                  "magnam": {
                    boolValue: false,
                    intValue: "et",
                    stringValue: {
                      truncatedByteCount: 569965,
                      value: "ullam",
                    },
                  },
                },
                droppedAttributesCount: 590873,
              },
              spanId: "quos",
              traceId: "sint",
              type: LinkTypeEnum.TypeUnspecified,
            },
            {
              attributes: {
                attributeMap: {
                  "reiciendis": {
                    boolValue: false,
                    intValue: "mollitia",
                    stringValue: {
                      truncatedByteCount: 320997,
                      value: "eum",
                    },
                  },
                  "dolor": {
                    boolValue: false,
                    intValue: "necessitatibus",
                    stringValue: {
                      truncatedByteCount: 141264,
                      value: "nemo",
                    },
                  },
                  "quasi": {
                    boolValue: false,
                    intValue: "iure",
                    stringValue: {
                      truncatedByteCount: 984043,
                      value: "debitis",
                    },
                  },
                },
                droppedAttributesCount: 260341,
              },
              spanId: "maxime",
              traceId: "deleniti",
              type: LinkTypeEnum.ParentLinkedSpan,
            },
          ],
        },
        name: "in",
        parentSpanId: "architecto",
        sameProcessAsParentSpan: false,
        spanId: "architecto",
        spanKind: SpanSpanKindEnum.Consumer,
        stackTrace: {
          stackFrames: {
            droppedFramesCount: 352312,
            frame: [
              {
                columnNumber: "nihil",
                fileName: {
                  truncatedByteCount: 998848,
                  value: "quibusdam",
                },
                functionName: {
                  truncatedByteCount: 149448,
                  value: "saepe",
                },
                lineNumber: "pariatur",
                loadModule: {
                  buildId: {
                    truncatedByteCount: 37559,
                    value: "consequuntur",
                  },
                  module: {
                    truncatedByteCount: 508315,
                    value: "natus",
                  },
                },
                originalFunctionName: {
                  truncatedByteCount: 166847,
                  value: "sunt",
                },
                sourceVersion: {
                  truncatedByteCount: 779051,
                  value: "illum",
                },
              },
              {
                columnNumber: "pariatur",
                fileName: {
                  truncatedByteCount: 807319,
                  value: "ea",
                },
                functionName: {
                  truncatedByteCount: 569101,
                  value: "odit",
                },
                lineNumber: "ea",
                loadModule: {
                  buildId: {
                    truncatedByteCount: 33222,
                    value: "ab",
                  },
                  module: {
                    truncatedByteCount: 982575,
                    value: "quidem",
                  },
                },
                originalFunctionName: {
                  truncatedByteCount: 373291,
                  value: "voluptate",
                },
                sourceVersion: {
                  truncatedByteCount: 420075,
                  value: "nam",
                },
              },
              {
                columnNumber: "eaque",
                fileName: {
                  truncatedByteCount: 866383,
                  value: "nemo",
                },
                functionName: {
                  truncatedByteCount: 975522,
                  value: "perferendis",
                },
                lineNumber: "fugiat",
                loadModule: {
                  buildId: {
                    truncatedByteCount: 230742,
                    value: "aut",
                  },
                  module: {
                    truncatedByteCount: 764912,
                    value: "corporis",
                  },
                },
                originalFunctionName: {
                  truncatedByteCount: 944124,
                  value: "libero",
                },
                sourceVersion: {
                  truncatedByteCount: 749999,
                  value: "dolores",
                },
              },
            ],
          },
          stackTraceHashId: "quis",
        },
        startTime: "totam",
        status: {
          code: 489549,
          details: [
            {
              "nesciunt": "eos",
              "perferendis": "dolores",
            },
          ],
          message: "minus",
        },
        timeEvents: {
          droppedAnnotationsCount: 463451,
          droppedMessageEventsCount: 223924,
          timeEvent: [
            {
              annotation: {
                attributes: {
                  attributeMap: {
                    "hic": {
                      boolValue: false,
                      intValue: "recusandae",
                      stringValue: {
                        truncatedByteCount: 608253,
                        value: "facilis",
                      },
                    },
                    "perspiciatis": {
                      boolValue: false,
                      intValue: "voluptatem",
                      stringValue: {
                        truncatedByteCount: 783645,
                        value: "consequuntur",
                      },
                    },
                  },
                  droppedAttributesCount: 500026,
                },
                description: {
                  truncatedByteCount: 621479,
                  value: "eaque",
                },
              },
              messageEvent: {
                compressedSizeBytes: "occaecati",
                id: "rerum",
                type: MessageEventTypeEnum.TypeUnspecified,
                uncompressedSizeBytes: "asperiores",
              },
              time: "earum",
            },
            {
              annotation: {
                attributes: {
                  attributeMap: {
                    "iste": {
                      boolValue: false,
                      intValue: "dolorum",
                      stringValue: {
                        truncatedByteCount: 535633,
                        value: "pariatur",
                      },
                    },
                    "provident": {
                      boolValue: false,
                      intValue: "nobis",
                      stringValue: {
                        truncatedByteCount: 730122,
                        value: "delectus",
                      },
                    },
                  },
                  droppedAttributesCount: 311945,
                },
                description: {
                  truncatedByteCount: 554242,
                  value: "aliquid",
                },
              },
              messageEvent: {
                compressedSizeBytes: "dolorem",
                id: "dolorem",
                type: MessageEventTypeEnum.TypeUnspecified,
                uncompressedSizeBytes: "qui",
              },
              time: "ipsum",
            },
            {
              annotation: {
                attributes: {
                  attributeMap: {
                    "excepturi": {
                      boolValue: false,
                      intValue: "cum",
                      stringValue: {
                        truncatedByteCount: 452109,
                        value: "dignissimos",
                      },
                    },
                    "reiciendis": {
                      boolValue: false,
                      intValue: "amet",
                      stringValue: {
                        truncatedByteCount: 680545,
                        value: "numquam",
                      },
                    },
                    "veritatis": {
                      boolValue: false,
                      intValue: "ipsa",
                      stringValue: {
                        truncatedByteCount: 56418,
                        value: "iure",
                      },
                    },
                    "odio": {
                      boolValue: false,
                      intValue: "quaerat",
                      stringValue: {
                        truncatedByteCount: 881005,
                        value: "quidem",
                      },
                    },
                  },
                  droppedAttributesCount: 976405,
                },
                description: {
                  truncatedByteCount: 377752,
                  value: "natus",
                },
              },
              messageEvent: {
                compressedSizeBytes: "eos",
                id: "atque",
                type: MessageEventTypeEnum.TypeUnspecified,
                uncompressedSizeBytes: "fugiat",
              },
              time: "ab",
            },
            {
              annotation: {
                attributes: {
                  attributeMap: {
                    "dolorum": {
                      boolValue: false,
                      intValue: "iusto",
                      stringValue: {
                        truncatedByteCount: 453697,
                        value: "dolorum",
                      },
                    },
                    "deleniti": {
                      boolValue: false,
                      intValue: "omnis",
                      stringValue: {
                        truncatedByteCount: 896672,
                        value: "distinctio",
                      },
                    },
                    "asperiores": {
                      boolValue: false,
                      intValue: "nihil",
                      stringValue: {
                        truncatedByteCount: 216897,
                        value: "voluptate",
                      },
                    },
                  },
                  droppedAttributesCount: 663078,
                },
                description: {
                  truncatedByteCount: 906418,
                  value: "eius",
                },
              },
              messageEvent: {
                compressedSizeBytes: "aspernatur",
                id: "perferendis",
                type: MessageEventTypeEnum.TypeUnspecified,
                uncompressedSizeBytes: "optio",
              },
              time: "accusamus",
            },
          ],
        },
      },
      {
        attributes: {
          attributeMap: {
            "saepe": {
              boolValue: false,
              intValue: "suscipit",
              stringValue: {
                truncatedByteCount: 645785,
                value: "provident",
              },
            },
            "minima": {
              boolValue: false,
              intValue: "repellendus",
              stringValue: {
                truncatedByteCount: 519711,
                value: "similique",
              },
            },
          },
          droppedAttributesCount: 55,
        },
        childSpanCount: 872651,
        displayName: {
          truncatedByteCount: 311860,
          value: "tempora",
        },
        endTime: "vel",
        links: {
          droppedLinksCount: 798047,
          link: [
            {
              attributes: {
                attributeMap: {
                  "dolorum": {
                    boolValue: false,
                    intValue: "a",
                    stringValue: {
                      truncatedByteCount: 456130,
                      value: "harum",
                    },
                  },
                },
                droppedAttributesCount: 483409,
              },
              spanId: "ipsum",
              traceId: "quisquam",
              type: LinkTypeEnum.ParentLinkedSpan,
            },
            {
              attributes: {
                attributeMap: {
                  "tempore": {
                    boolValue: false,
                    intValue: "accusamus",
                    stringValue: {
                      truncatedByteCount: 253941,
                      value: "enim",
                    },
                  },
                },
                droppedAttributesCount: 213312,
              },
              spanId: "sapiente",
              traceId: "totam",
              type: LinkTypeEnum.ChildLinkedSpan,
            },
            {
              attributes: {
                attributeMap: {
                  "expedita": {
                    boolValue: false,
                    intValue: "neque",
                    stringValue: {
                      truncatedByteCount: 153694,
                      value: "vel",
                    },
                  },
                },
                droppedAttributesCount: 730442,
              },
              spanId: "voluptas",
              traceId: "deserunt",
              type: LinkTypeEnum.ChildLinkedSpan,
            },
            {
              attributes: {
                attributeMap: {
                  "incidunt": {
                    boolValue: false,
                    intValue: "qui",
                    stringValue: {
                      truncatedByteCount: 586784,
                      value: "maxime",
                    },
                  },
                },
                droppedAttributesCount: 863856,
              },
              spanId: "soluta",
              traceId: "dicta",
              type: LinkTypeEnum.ParentLinkedSpan,
            },
          ],
        },
        name: "totam",
        parentSpanId: "incidunt",
        sameProcessAsParentSpan: false,
        spanId: "aspernatur",
        spanKind: SpanSpanKindEnum.Internal,
        stackTrace: {
          stackFrames: {
            droppedFramesCount: 716860,
            frame: [
              {
                columnNumber: "aliquid",
                fileName: {
                  truncatedByteCount: 463150,
                  value: "molestias",
                },
                functionName: {
                  truncatedByteCount: 840429,
                  value: "qui",
                },
                lineNumber: "neque",
                loadModule: {
                  buildId: {
                    truncatedByteCount: 144847,
                    value: "magni",
                  },
                  module: {
                    truncatedByteCount: 488056,
                    value: "sunt",
                  },
                },
                originalFunctionName: {
                  truncatedByteCount: 355613,
                  value: "nam",
                },
                sourceVersion: {
                  truncatedByteCount: 940432,
                  value: "voluptatem",
                },
              },
              {
                columnNumber: "cumque",
                fileName: {
                  truncatedByteCount: 746994,
                  value: "nobis",
                },
                functionName: {
                  truncatedByteCount: 92596,
                  value: "saepe",
                },
                lineNumber: "ipsum",
                loadModule: {
                  buildId: {
                    truncatedByteCount: 83422,
                    value: "nobis",
                  },
                  module: {
                    truncatedByteCount: 552193,
                    value: "tempore",
                  },
                },
                originalFunctionName: {
                  truncatedByteCount: 584476,
                  value: "aperiam",
                },
                sourceVersion: {
                  truncatedByteCount: 961937,
                  value: "dolorem",
                },
              },
              {
                columnNumber: "dolore",
                fileName: {
                  truncatedByteCount: 286915,
                  value: "adipisci",
                },
                functionName: {
                  truncatedByteCount: 677263,
                  value: "architecto",
                },
                lineNumber: "quae",
                loadModule: {
                  buildId: {
                    truncatedByteCount: 16429,
                    value: "quas",
                  },
                  module: {
                    truncatedByteCount: 929530,
                    value: "consequatur",
                  },
                },
                originalFunctionName: {
                  truncatedByteCount: 669917,
                  value: "repellendus",
                },
                sourceVersion: {
                  truncatedByteCount: 785153,
                  value: "doloribus",
                },
              },
            ],
          },
          stackTraceHashId: "ut",
        },
        startTime: "facilis",
        status: {
          code: 586410,
          details: [
            {
              "laudantium": "odio",
            },
          ],
          message: "occaecati",
        },
        timeEvents: {
          droppedAnnotationsCount: 977496,
          droppedMessageEventsCount: 787542,
          timeEvent: [
            {
              annotation: {
                attributes: {
                  attributeMap: {
                    "quis": {
                      boolValue: false,
                      intValue: "ipsum",
                      stringValue: {
                        truncatedByteCount: 961571,
                        value: "voluptate",
                      },
                    },
                    "consectetur": {
                      boolValue: false,
                      intValue: "vero",
                      stringValue: {
                        truncatedByteCount: 949319,
                        value: "dignissimos",
                      },
                    },
                    "hic": {
                      boolValue: false,
                      intValue: "distinctio",
                      stringValue: {
                        truncatedByteCount: 799203,
                        value: "odio",
                      },
                    },
                  },
                  droppedAttributesCount: 630448,
                },
                description: {
                  truncatedByteCount: 708548,
                  value: "vero",
                },
              },
              messageEvent: {
                compressedSizeBytes: "ducimus",
                id: "dolore",
                type: MessageEventTypeEnum.Received,
                uncompressedSizeBytes: "illum",
              },
              time: "sequi",
            },
            {
              annotation: {
                attributes: {
                  attributeMap: {
                    "impedit": {
                      boolValue: false,
                      intValue: "aut",
                      stringValue: {
                        truncatedByteCount: 974259,
                        value: "exercitationem",
                      },
                    },
                    "nulla": {
                      boolValue: false,
                      intValue: "fugit",
                      stringValue: {
                        truncatedByteCount: 780427,
                        value: "maiores",
                      },
                    },
                    "doloribus": {
                      boolValue: false,
                      intValue: "iusto",
                      stringValue: {
                        truncatedByteCount: 753570,
                        value: "ducimus",
                      },
                    },
                  },
                  droppedAttributesCount: 4048,
                },
                description: {
                  truncatedByteCount: 639473,
                  value: "tempora",
                },
              },
              messageEvent: {
                compressedSizeBytes: "ipsam",
                id: "ea",
                type: MessageEventTypeEnum.TypeUnspecified,
                uncompressedSizeBytes: "vel",
              },
              time: "possimus",
            },
            {
              annotation: {
                attributes: {
                  attributeMap: {
                    "ratione": {
                      boolValue: false,
                      intValue: "ex",
                      stringValue: {
                        truncatedByteCount: 511319,
                        value: "dicta",
                      },
                    },
                    "dolor": {
                      boolValue: false,
                      intValue: "maiores",
                      stringValue: {
                        truncatedByteCount: 97844,
                        value: "ex",
                      },
                    },
                  },
                  droppedAttributesCount: 862192,
                },
                description: {
                  truncatedByteCount: 569211,
                  value: "voluptatibus",
                },
              },
              messageEvent: {
                compressedSizeBytes: "nostrum",
                id: "sapiente",
                type: MessageEventTypeEnum.Received,
                uncompressedSizeBytes: "saepe",
              },
              time: "ea",
            },
            {
              annotation: {
                attributes: {
                  attributeMap: {
                    "corporis": {
                      boolValue: false,
                      intValue: "veniam",
                      stringValue: {
                        truncatedByteCount: 399499,
                        value: "inventore",
                      },
                    },
                    "magnam": {
                      boolValue: false,
                      intValue: "ea",
                      stringValue: {
                        truncatedByteCount: 775220,
                        value: "consectetur",
                      },
                    },
                    "recusandae": {
                      boolValue: false,
                      intValue: "aspernatur",
                      stringValue: {
                        truncatedByteCount: 325310,
                        value: "eaque",
                      },
                    },
                    "a": {
                      boolValue: false,
                      intValue: "libero",
                      stringValue: {
                        truncatedByteCount: 13948,
                        value: "aut",
                      },
                    },
                  },
                  droppedAttributesCount: 533466,
                },
                description: {
                  truncatedByteCount: 770581,
                  value: "aliquam",
                },
              },
              messageEvent: {
                compressedSizeBytes: "fugit",
                id: "accusamus",
                type: MessageEventTypeEnum.TypeUnspecified,
                uncompressedSizeBytes: "non",
              },
              time: "et",
            },
          ],
        },
      },
    ],
  },
  accessToken: "dolorum",
  alt: AltEnum.Proto,
  callback: "placeat",
  fields: "velit",
  key: "eum",
  name: "autem",
  oauthToken: "nobis",
  prettyPrint: false,
  quotaUser: "quas",
  uploadType: "assumenda",
  uploadProtocol: "nulla",
};

sdk.projects.cloudtraceProjectsTracesBatchWrite(req).then((res: CloudtraceProjectsTracesBatchWriteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `cloudtraceProjectsTracesBatchWrite` - Batch writes new spans to new or existing traces. You cannot update existing spans.
* `cloudtraceProjectsTracesSpansCreateSpan` - Creates a new span.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

