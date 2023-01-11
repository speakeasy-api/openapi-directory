<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CloudtraceProjectsTracesBatchWriteRequest, CloudtraceProjectsTracesBatchWriteResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CloudtraceProjectsTracesBatchWriteRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      },
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      },
    },
  },
  pathParams: {
    name: "sit",
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
    spans: [
      {
        attributes: {
          attributeMap: {
            "voluptatum": {
              boolValue: false,
              intValue: "ut",
              stringValue: {
                truncatedByteCount: 161231572858529631,
                value: "et",
              },
            },
          },
          droppedAttributesCount: 7373105480197164748,
        },
        childSpanCount: 3287288577352441706,
        displayName: {
          truncatedByteCount: 3930927879439176946,
          value: "totam",
        },
        endTime: "dolores",
        links: {
          droppedLinksCount: 1929546706668609706,
          link: [
            {
              attributes: {
                attributeMap: {
                  "odio": {
                    boolValue: true,
                    intValue: "id",
                    stringValue: {
                      truncatedByteCount: 959367522974354090,
                      value: "accusantium",
                    },
                  },
                  "totam": {
                    boolValue: false,
                    intValue: "quis",
                    stringValue: {
                      truncatedByteCount: 3398579248012586914,
                      value: "aut",
                    },
                  },
                },
                droppedAttributesCount: 3317123977833389635,
              },
              spanId: "non",
              traceId: "voluptas",
              type: "CHILD_LINKED_SPAN",
            },
          ],
        },
        name: "aut",
        parentSpanId: "illo",
        sameProcessAsParentSpan: false,
        spanId: "officiis",
        spanKind: "INTERNAL",
        stackTrace: {
          stackFrames: {
            droppedFramesCount: 8514850266767180993,
            frame: [
              {
                columnNumber: "odio",
                fileName: {
                  truncatedByteCount: 7699391924090763411,
                  value: "recusandae",
                },
                functionName: {
                  truncatedByteCount: 7561811714888168464,
                  value: "ipsum",
                },
                lineNumber: "eveniet",
                loadModule: {
                  buildId: {
                    truncatedByteCount: 303089054982227392,
                    value: "sint",
                  },
                  module: {
                    truncatedByteCount: 5392504858645185670,
                    value: "ut",
                  },
                },
                originalFunctionName: {
                  truncatedByteCount: 406703151708498928,
                  value: "aut",
                },
                sourceVersion: {
                  truncatedByteCount: 5837486892148644279,
                  value: "tempore",
                },
              },
            ],
          },
          stackTraceHashId: "maiores",
        },
        startTime: "incidunt",
        status: {
          code: 7242748068272024738,
          details: [
            {
              "in": "et",
              "omnis": "ipsum",
            },
            {
              "dolores": "placeat",
            },
            {
              "rerum": "mollitia",
              "voluptas": "quam",
            },
          ],
          message: "reprehenderit",
        },
        timeEvents: {
          droppedAnnotationsCount: 6056649900269286653,
          droppedMessageEventsCount: 8056746523676181822,
          timeEvent: [
            {
              annotation: {
                attributes: {
                  attributeMap: {
                    "autem": {
                      boolValue: true,
                      intValue: "ut",
                      stringValue: {
                        truncatedByteCount: 8559453321117178323,
                        value: "ab",
                      },
                    },
                    "neque": {
                      boolValue: true,
                      intValue: "et",
                      stringValue: {
                        truncatedByteCount: 4304520335772049496,
                        value: "esse",
                      },
                    },
                  },
                  droppedAttributesCount: 5902760509050140210,
                },
                description: {
                  truncatedByteCount: 9021104375654741729,
                  value: "velit",
                },
              },
              messageEvent: {
                compressedSizeBytes: "cumque",
                id: "soluta",
                type: "SENT",
                uncompressedSizeBytes: "voluptates",
              },
              time: "magni",
            },
            {
              annotation: {
                attributes: {
                  attributeMap: {
                    "optio": {
                      boolValue: true,
                      intValue: "earum",
                      stringValue: {
                        truncatedByteCount: 4391202566038595699,
                        value: "omnis",
                      },
                    },
                    "ut": {
                      boolValue: false,
                      intValue: "dolor",
                      stringValue: {
                        truncatedByteCount: 7945398411639602224,
                        value: "error",
                      },
                    },
                    "reprehenderit": {
                      boolValue: false,
                      intValue: "nostrum",
                      stringValue: {
                        truncatedByteCount: 950400323440343118,
                        value: "laboriosam",
                      },
                    },
                  },
                  droppedAttributesCount: 1937101031588528881,
                },
                description: {
                  truncatedByteCount: 6604365855503062775,
                  value: "soluta",
                },
              },
              messageEvent: {
                compressedSizeBytes: "aut",
                id: "quas",
                type: "RECEIVED",
                uncompressedSizeBytes: "laudantium",
              },
              time: "autem",
            },
            {
              annotation: {
                attributes: {
                  attributeMap: {
                    "expedita": {
                      boolValue: false,
                      intValue: "perferendis",
                      stringValue: {
                        truncatedByteCount: 8497925768463229012,
                        value: "ratione",
                      },
                    },
                  },
                  droppedAttributesCount: 3967212276624460248,
                },
                description: {
                  truncatedByteCount: 1681876124477381252,
                  value: "ea",
                },
              },
              messageEvent: {
                compressedSizeBytes: "maxime",
                id: "eum",
                type: "SENT",
                uncompressedSizeBytes: "et",
              },
              time: "rerum",
            },
          ],
        },
      },
      {
        attributes: {
          attributeMap: {
            "quis": {
              boolValue: true,
              intValue: "minima",
              stringValue: {
                truncatedByteCount: 2333048574390956331,
                value: "est",
              },
            },
            "quis": {
              boolValue: true,
              intValue: "labore",
              stringValue: {
                truncatedByteCount: 544981646038740619,
                value: "impedit",
              },
            },
            "ad": {
              boolValue: true,
              intValue: "vel",
              stringValue: {
                truncatedByteCount: 5310832663795041070,
                value: "modi",
              },
            },
          },
          droppedAttributesCount: 8279128640960530079,
        },
        childSpanCount: 1011676084465510524,
        displayName: {
          truncatedByteCount: 8764227983217623240,
          value: "eaque",
        },
        endTime: "sunt",
        links: {
          droppedLinksCount: 157519078836327761,
          link: [
            {
              attributes: {
                attributeMap: {
                  "vel": {
                    boolValue: false,
                    intValue: "placeat",
                    stringValue: {
                      truncatedByteCount: 3755969145755718156,
                      value: "nisi",
                    },
                  },
                  "quis": {
                    boolValue: false,
                    intValue: "porro",
                    stringValue: {
                      truncatedByteCount: 4230816687517220040,
                      value: "et",
                    },
                  },
                  "accusamus": {
                    boolValue: true,
                    intValue: "laborum",
                    stringValue: {
                      truncatedByteCount: 8958290475970215309,
                      value: "ut",
                    },
                  },
                },
                droppedAttributesCount: 4400124260933614083,
              },
              spanId: "fugit",
              traceId: "quis",
              type: "CHILD_LINKED_SPAN",
            },
          ],
        },
        name: "soluta",
        parentSpanId: "aperiam",
        sameProcessAsParentSpan: true,
        spanId: "excepturi",
        spanKind: "PRODUCER",
        stackTrace: {
          stackFrames: {
            droppedFramesCount: 1377327594979300801,
            frame: [
              {
                columnNumber: "ipsa",
                fileName: {
                  truncatedByteCount: 8997481548049309375,
                  value: "animi",
                },
                functionName: {
                  truncatedByteCount: 2606774689767964810,
                  value: "aliquam",
                },
                lineNumber: "fuga",
                loadModule: {
                  buildId: {
                    truncatedByteCount: 7899896093082851758,
                    value: "sed",
                  },
                  module: {
                    truncatedByteCount: 6464511094049078446,
                    value: "consequuntur",
                  },
                },
                originalFunctionName: {
                  truncatedByteCount: 3308475210590835610,
                  value: "cupiditate",
                },
                sourceVersion: {
                  truncatedByteCount: 432317278959866118,
                  value: "molestiae",
                },
              },
            ],
          },
          stackTraceHashId: "pariatur",
        },
        startTime: "quasi",
        status: {
          code: 5534365872829545664,
          details: [
            {
              "sit": "possimus",
            },
            {
              "neque": "consequuntur",
              "quia": "et",
            },
          ],
          message: "est",
        },
        timeEvents: {
          droppedAnnotationsCount: 6028661030721431741,
          droppedMessageEventsCount: 7949662743330369695,
          timeEvent: [
            {
              annotation: {
                attributes: {
                  attributeMap: {
                    "temporibus": {
                      boolValue: false,
                      intValue: "quae",
                      stringValue: {
                        truncatedByteCount: 5042961816383320698,
                        value: "ut",
                      },
                    },
                    "necessitatibus": {
                      boolValue: true,
                      intValue: "possimus",
                      stringValue: {
                        truncatedByteCount: 1123791776565256914,
                        value: "dolorum",
                      },
                    },
                    "doloribus": {
                      boolValue: true,
                      intValue: "sunt",
                      stringValue: {
                        truncatedByteCount: 2676265675595725604,
                        value: "et",
                      },
                    },
                  },
                  droppedAttributesCount: 6499763367080957833,
                },
                description: {
                  truncatedByteCount: 1514803956160473307,
                  value: "et",
                },
              },
              messageEvent: {
                compressedSizeBytes: "est",
                id: "ipsum",
                type: "TYPE_UNSPECIFIED",
                uncompressedSizeBytes: "voluptas",
              },
              time: "nihil",
            },
            {
              annotation: {
                attributes: {
                  attributeMap: {
                    "suscipit": {
                      boolValue: true,
                      intValue: "non",
                      stringValue: {
                        truncatedByteCount: 2991421044203248760,
                        value: "ut",
                      },
                    },
                  },
                  droppedAttributesCount: 3357930257403748968,
                },
                description: {
                  truncatedByteCount: 371208508841907247,
                  value: "qui",
                },
              },
              messageEvent: {
                compressedSizeBytes: "quia",
                id: "ipsam",
                type: "SENT",
                uncompressedSizeBytes: "enim",
              },
              time: "blanditiis",
            },
          ],
        },
      },
      {
        attributes: {
          attributeMap: {
            "delectus": {
              boolValue: true,
              intValue: "dolore",
              stringValue: {
                truncatedByteCount: 7274936573655343394,
                value: "velit",
              },
            },
          },
          droppedAttributesCount: 1469755398674317289,
        },
        childSpanCount: 8230160685758639177,
        displayName: {
          truncatedByteCount: 6225508190691823821,
          value: "voluptas",
        },
        endTime: "amet",
        links: {
          droppedLinksCount: 8268186752735240934,
          link: [
            {
              attributes: {
                attributeMap: {
                  "excepturi": {
                    boolValue: false,
                    intValue: "corporis",
                    stringValue: {
                      truncatedByteCount: 4588799179103092032,
                      value: "rem",
                    },
                  },
                  "doloremque": {
                    boolValue: false,
                    intValue: "nisi",
                    stringValue: {
                      truncatedByteCount: 7977311963062833636,
                      value: "qui",
                    },
                  },
                },
                droppedAttributesCount: 3553406609570696275,
              },
              spanId: "et",
              traceId: "rerum",
              type: "CHILD_LINKED_SPAN",
            },
          ],
        },
        name: "rem",
        parentSpanId: "eos",
        sameProcessAsParentSpan: false,
        spanId: "reiciendis",
        spanKind: "SPAN_KIND_UNSPECIFIED",
        stackTrace: {
          stackFrames: {
            droppedFramesCount: 5683174242247563523,
            frame: [
              {
                columnNumber: "nihil",
                fileName: {
                  truncatedByteCount: 4897843869982862208,
                  value: "consequatur",
                },
                functionName: {
                  truncatedByteCount: 3196051979344515342,
                  value: "accusantium",
                },
                lineNumber: "atque",
                loadModule: {
                  buildId: {
                    truncatedByteCount: 1444501184389758573,
                    value: "nisi",
                  },
                  module: {
                    truncatedByteCount: 1782404925332466934,
                    value: "est",
                  },
                },
                originalFunctionName: {
                  truncatedByteCount: 9117043256905423229,
                  value: "vero",
                },
                sourceVersion: {
                  truncatedByteCount: 8663396966358647741,
                  value: "totam",
                },
              },
              {
                columnNumber: "deserunt",
                fileName: {
                  truncatedByteCount: 1958777829936408748,
                  value: "repellat",
                },
                functionName: {
                  truncatedByteCount: 7470170325123997143,
                  value: "omnis",
                },
                lineNumber: "totam",
                loadModule: {
                  buildId: {
                    truncatedByteCount: 6110482739283003758,
                    value: "et",
                  },
                  module: {
                    truncatedByteCount: 7167106058699817943,
                    value: "necessitatibus",
                  },
                },
                originalFunctionName: {
                  truncatedByteCount: 4525004039791920848,
                  value: "culpa",
                },
                sourceVersion: {
                  truncatedByteCount: 8364267861508686372,
                  value: "voluptas",
                },
              },
              {
                columnNumber: "ut",
                fileName: {
                  truncatedByteCount: 2118949171484888039,
                  value: "architecto",
                },
                functionName: {
                  truncatedByteCount: 9207329833049742865,
                  value: "rerum",
                },
                lineNumber: "quo",
                loadModule: {
                  buildId: {
                    truncatedByteCount: 7465719782626729327,
                    value: "saepe",
                  },
                  module: {
                    truncatedByteCount: 1215184329252422444,
                    value: "in",
                  },
                },
                originalFunctionName: {
                  truncatedByteCount: 8590975497400104807,
                  value: "asperiores",
                },
                sourceVersion: {
                  truncatedByteCount: 5721519542403305305,
                  value: "ea",
                },
              },
            ],
          },
          stackTraceHashId: "soluta",
        },
        startTime: "tempora",
        status: {
          code: 5850174490929081658,
          details: [
            {
              "in": "et",
              "odit": "est",
            },
            {
              "ipsum": "aut",
              "perspiciatis": "et",
              "vero": "voluptatem",
            },
          ],
          message: "ex",
        },
        timeEvents: {
          droppedAnnotationsCount: 1253678802066634880,
          droppedMessageEventsCount: 5185464786920936105,
          timeEvent: [
            {
              annotation: {
                attributes: {
                  attributeMap: {
                    "ea": {
                      boolValue: false,
                      intValue: "non",
                      stringValue: {
                        truncatedByteCount: 930977177771307407,
                        value: "beatae",
                      },
                    },
                    "quae": {
                      boolValue: false,
                      intValue: "magni",
                      stringValue: {
                        truncatedByteCount: 6901636176146439792,
                        value: "sit",
                      },
                    },
                  },
                  droppedAttributesCount: 3696118768821457648,
                },
                description: {
                  truncatedByteCount: 3450989031171849556,
                  value: "iusto",
                },
              },
              messageEvent: {
                compressedSizeBytes: "quia",
                id: "repudiandae",
                type: "TYPE_UNSPECIFIED",
                uncompressedSizeBytes: "autem",
              },
              time: "odit",
            },
          ],
        },
      },
    ],
  },
};

sdk.projects.cloudtraceProjectsTracesBatchWrite(req).then((res: CloudtraceProjectsTracesBatchWriteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->