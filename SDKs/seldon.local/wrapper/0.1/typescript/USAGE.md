<!-- Start SDK Example Usage -->
```typescript
import {
  Aggregate2RequestBody,
  Aggregate2Response
} from "openapi/dist/sdk/models/operations";
import {
  StatusStatusFlagEnum,
  MetricTypeEnum,
  TensorflowDataTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: Aggregate2RequestBody = {
  json: {
    seldonMessages: [
      {
        binData: "provident",
        data: {
          names: [
            "quibusdam",
            "unde",
            "nulla",
          ],
          ndarry: [
            "illum",
            "vel",
            "error",
          ],
          tensor: {
            shape: [
              384382,
              437587,
              297534,
            ],
            values: [
              567.13,
              9636.63,
              2726.56,
              3834.41,
            ],
          },
          tftensor: {
            boolVal: [
              false,
              false,
            ],
            dcomplexVal: [
              8121.69,
              5288.95,
              4799.77,
              5680.45,
            ],
            doubleVal: [
              9255.97,
              8360.79,
            ],
            dtype: TensorflowDataTypeEnum.DtInt32,
            floatVal: [
              871.29,
              6481.72,
            ],
            halfVal: [
              368241,
            ],
            int64Val: [
              "sapiente",
              "quo",
              "odit",
              "at",
            ],
            intVal: [
              978619,
              473608,
              799159,
              800911,
            ],
            resourceHandleVal: [
              {
                container: "totam",
                device: "porro",
                hashCode: "dolorum",
                maybeTypeName: "dicta",
                name: "nam",
              },
              {
                container: "officia",
                device: "occaecati",
                hashCode: "fugit",
                maybeTypeName: "deleniti",
                name: "hic",
              },
            ],
            scomplexVal: [
              5218.48,
              1059.07,
              4146.62,
              4736,
            ],
            stringVal: [
              "qui",
              "impedit",
            ],
            tensorContent: "cum",
            tensorShape: {
              dim: [
                {
                  name: "ipsum",
                  size: "excepturi",
                },
                {
                  name: "aspernatur",
                  size: "perferendis",
                },
              ],
              unknownRank: false,
            },
            uint32Val: [
              617636,
              149675,
            ],
            uint64Val: [
              "dolor",
              "natus",
              "laboriosam",
            ],
            variantVal: [
              {
                metadata: "saepe",
                tensors: [
                  {},
                  {},
                  {},
                ],
                typeName: "in",
              },
              {
                metadata: "corporis",
                tensors: [
                  {},
                  {},
                  {},
                ],
                typeName: "iure",
              },
              {
                metadata: "saepe",
                tensors: [
                  {},
                  {},
                  {},
                ],
                typeName: "architecto",
              },
              {
                metadata: "ipsa",
                tensors: [
                  {},
                  {},
                  {},
                  {},
                ],
                typeName: "est",
              },
            ],
            versionNumber: 653140,
          },
        },
        meta: {
          metrics: [
            {
              key: "dolores",
              type: MetricTypeEnum.Counter,
              value: 3581.52,
            },
            {
              key: "explicabo",
              type: MetricTypeEnum.Timer,
              value: 3154.28,
            },
            {
              key: "omnis",
              type: MetricTypeEnum.Gauge,
              value: 3250.47,
            },
          ],
          puid: "excepturi",
          requestPath: {
            "iure": "culpa",
          },
          routing: {
            "sapiente": 102044,
            "mollitia": 208876,
            "culpa": 161309,
            "repellat": 653108,
          },
          tags: {
            "numquam": "commodi",
            "quam": "molestiae",
            "velit": "error",
          },
        },
        status: {
          code: 158969,
          info: "quis",
          reason: "vitae",
          status: StatusStatusFlagEnum.Failure,
        },
        strData: "animi",
      },
      {
        binData: "enim",
        data: {
          names: [
            "quo",
          ],
          ndarry: [
            "tenetur",
          ],
          tensor: {
            shape: [
              662527,
              820994,
            ],
            values: [
              971.01,
            ],
          },
          tftensor: {
            boolVal: [
              false,
              false,
              false,
            ],
            dcomplexVal: [
              6736.6,
              960.98,
              9719.45,
              9764.6,
            ],
            doubleVal: [
              4686.51,
              5096.24,
              9767.62,
              557.14,
            ],
            dtype: TensorflowDataTypeEnum.DtInt16Ref,
            floatVal: [
              7392.64,
              199.87,
            ],
            halfVal: [
              441711,
            ],
            int64Val: [
              "maiores",
              "dicta",
            ],
            intVal: [
              296140,
              480894,
            ],
            resourceHandleVal: [
              {
                container: "harum",
                device: "enim",
                hashCode: "accusamus",
                maybeTypeName: "commodi",
                name: "repudiandae",
              },
            ],
            scomplexVal: [
              2168.22,
            ],
            stringVal: [
              "molestias",
              "excepturi",
              "pariatur",
            ],
            tensorContent: "modi",
            tensorShape: {
              dim: [
                {
                  name: "rem",
                  size: "voluptates",
                },
                {
                  name: "quasi",
                  size: "repudiandae",
                },
                {
                  name: "sint",
                  size: "veritatis",
                },
              ],
              unknownRank: false,
            },
            uint32Val: [
              277718,
              318569,
              9356,
              667411,
            ],
            uint64Val: [
              "explicabo",
              "deserunt",
              "distinctio",
              "quibusdam",
            ],
            variantVal: [
              {
                metadata: "modi",
                tensors: [
                  {},
                ],
                typeName: "aliquid",
              },
              {
                metadata: "cupiditate",
                tensors: [
                  {},
                  {},
                  {},
                ],
                typeName: "perferendis",
              },
            ],
            versionNumber: 164940,
          },
        },
        meta: {
          metrics: [
            {
              key: "ipsam",
              type: MetricTypeEnum.Counter,
              value: 1464.41,
            },
            {
              key: "dolorum",
              type: MetricTypeEnum.Gauge,
              value: 2700.08,
            },
            {
              key: "facilis",
              type: MetricTypeEnum.Timer,
              value: 2884.76,
            },
            {
              key: "delectus",
              type: MetricTypeEnum.Gauge,
              value: 2487.53,
            },
          ],
          puid: "eligendi",
          requestPath: {
            "aliquid": "provident",
            "necessitatibus": "sint",
            "officia": "dolor",
          },
          routing: {
            "a": 680056,
            "in": 449198,
            "illum": 978571,
            "rerum": 116202,
          },
          tags: {
            "cumque": "facere",
            "ea": "aliquid",
          },
        },
        status: {
          code: 675439,
          info: "accusamus",
          reason: "non",
          status: StatusStatusFlagEnum.Failure,
        },
        strData: "enim",
      },
      {
        binData: "accusamus",
        data: {
          names: [
            "quidem",
            "provident",
            "nam",
            "id",
          ],
          ndarry: [
            "deleniti",
            "sapiente",
            "amet",
          ],
          tensor: {
            shape: [
              394869,
              423855,
              618809,
            ],
            values: [
              4748.67,
              191.93,
              4701.32,
            ],
          },
          tftensor: {
            boolVal: [
              false,
              false,
            ],
            dcomplexVal: [
              6601.74,
              2879.91,
              2900.77,
            ],
            doubleVal: [
              6180.16,
              7491.7,
            ],
            dtype: TensorflowDataTypeEnum.DtResource,
            floatVal: [
              1354.74,
              1028.63,
              2982.82,
              923.73,
            ],
            halfVal: [
              354047,
              590873,
              551816,
            ],
            int64Val: [
              "accusantium",
              "mollitia",
              "reiciendis",
            ],
            intVal: [
              320997,
              431418,
              221262,
            ],
            resourceHandleVal: [
              {
                container: "odit",
                device: "nemo",
                hashCode: "quasi",
                maybeTypeName: "iure",
                name: "doloribus",
              },
              {
                container: "debitis",
                device: "eius",
                hashCode: "maxime",
                maybeTypeName: "deleniti",
                name: "facilis",
              },
              {
                container: "in",
                device: "architecto",
                hashCode: "architecto",
                maybeTypeName: "repudiandae",
                name: "ullam",
              },
              {
                container: "expedita",
                device: "nihil",
                hashCode: "repellat",
                maybeTypeName: "quibusdam",
                name: "sed",
              },
            ],
            scomplexVal: [
              8681.26,
              375.59,
              1624.93,
              5083.15,
            ],
            stringVal: [
              "magni",
              "sunt",
              "quo",
            ],
            tensorContent: "illum",
            tensorShape: {
              dim: [
                {
                  name: "maxime",
                  size: "ea",
                },
                {
                  name: "excepturi",
                  size: "odit",
                },
                {
                  name: "ea",
                  size: "accusantium",
                },
                {
                  name: "ab",
                  size: "maiores",
                },
              ],
              unknownRank: false,
            },
            uint32Val: [
              373291,
              453543,
              420075,
            ],
            uint64Val: [
              "eaque",
              "pariatur",
              "nemo",
            ],
            variantVal: [
              {
                metadata: "perferendis",
                tensors: [
                  {},
                  {},
                  {},
                  {},
                ],
                typeName: "amet",
              },
              {
                metadata: "aut",
                tensors: [
                  {},
                  {},
                  {},
                  {},
                ],
                typeName: "corporis",
              },
              {
                metadata: "hic",
                tensors: [
                  {},
                  {},
                  {},
                ],
                typeName: "nobis",
              },
              {
                metadata: "dolores",
                tensors: [
                  {},
                  {},
                ],
                typeName: "totam",
              },
            ],
            versionNumber: 489549,
          },
        },
        meta: {
          metrics: [
            {
              key: "quis",
              type: MetricTypeEnum.Counter,
              value: 1794.9,
            },
          ],
          puid: "perferendis",
          requestPath: {
            "minus": "quam",
          },
          routing: {
            "vero": 345352,
          },
          tags: {
            "recusandae": "omnis",
            "facilis": "perspiciatis",
            "voluptatem": "porro",
            "consequuntur": "blanditiis",
          },
        },
        status: {
          code: 621479,
          info: "eaque",
          reason: "occaecati",
          status: StatusStatusFlagEnum.Failure,
        },
        strData: "adipisci",
      },
    ],
  },
};

sdk.internal.aggregate2(req).then((res: Aggregate2Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->