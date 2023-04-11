<!-- Start SDK Example Usage -->
```typescript
import {
  PredictJsonRequest,
  PredictJsonResponse
} from "openapi/dist/sdk/models/operations";
import {
  StatusStatusFlagEnum,
  MetricTypeEnum,
  TensorflowDataTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PredictJsonRequest = {
  seldonMessage: {
    binData: "corrupti",
    data: {
      names: [
        "distinctio",
        "quibusdam",
        "unde",
      ],
      ndarray: [
        "corrupti",
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
  deployment: "enim",
  namespace: "odit",
};

sdk.externalAmbassadorAPI.predictJson(req).then((res: PredictJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->