<!-- Start SDK Example Usage -->
```typescript
import {
  CloudtraceProjectsPatchTracesRequest,
  CloudtraceProjectsPatchTracesResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  TraceSpanKindEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CloudtraceProjectsPatchTracesRequest = {
  dollarXgafv: XgafvEnum.Two,
  traces: {
    traces: [
      {
        projectId: "distinctio",
        spans: [
          {
            endTime: "unde",
            kind: TraceSpanKindEnum.RpcClient,
            labels: {
              "illum": "vel",
              "error": "deserunt",
              "suscipit": "iure",
            },
            name: "magnam",
            parentSpanId: "debitis",
            spanId: "ipsa",
            startTime: "delectus",
          },
          {
            endTime: "tempora",
            kind: TraceSpanKindEnum.RpcServer,
            labels: {
              "minus": "placeat",
              "voluptatum": "iusto",
            },
            name: "excepturi",
            parentSpanId: "nisi",
            spanId: "recusandae",
            startTime: "temporibus",
          },
          {
            endTime: "ab",
            kind: TraceSpanKindEnum.RpcServer,
            labels: {
              "deserunt": "perferendis",
            },
            name: "ipsam",
            parentSpanId: "repellendus",
            spanId: "sapiente",
            startTime: "quo",
          },
          {
            endTime: "odit",
            kind: TraceSpanKindEnum.RpcClient,
            labels: {
              "maiores": "molestiae",
              "quod": "quod",
              "esse": "totam",
              "porro": "dolorum",
            },
            name: "dicta",
            parentSpanId: "nam",
            spanId: "officia",
            startTime: "occaecati",
          },
        ],
        traceId: "fugit",
      },
      {
        projectId: "deleniti",
        spans: [
          {
            endTime: "optio",
            kind: TraceSpanKindEnum.RpcServer,
            labels: {
              "commodi": "molestiae",
            },
            name: "modi",
            parentSpanId: "qui",
            spanId: "impedit",
            startTime: "cum",
          },
          {
            endTime: "esse",
            kind: TraceSpanKindEnum.SpanKindUnspecified,
            labels: {
              "aspernatur": "perferendis",
              "ad": "natus",
              "sed": "iste",
            },
            name: "dolor",
            parentSpanId: "natus",
            spanId: "laboriosam",
            startTime: "hic",
          },
          {
            endTime: "saepe",
            kind: TraceSpanKindEnum.RpcClient,
            labels: {
              "corporis": "iste",
              "iure": "saepe",
            },
            name: "quidem",
            parentSpanId: "architecto",
            spanId: "ipsa",
            startTime: "reiciendis",
          },
          {
            endTime: "est",
            kind: TraceSpanKindEnum.RpcServer,
            labels: {
              "dolores": "dolorem",
              "corporis": "explicabo",
              "nobis": "enim",
            },
            name: "omnis",
            parentSpanId: "nemo",
            spanId: "minima",
            startTime: "excepturi",
          },
        ],
        traceId: "accusantium",
      },
      {
        projectId: "iure",
        spans: [
          {
            endTime: "doloribus",
            kind: TraceSpanKindEnum.RpcClient,
            labels: {
              "mollitia": "dolorem",
            },
            name: "culpa",
            parentSpanId: "consequuntur",
            spanId: "repellat",
            startTime: "mollitia",
          },
          {
            endTime: "occaecati",
            kind: TraceSpanKindEnum.SpanKindUnspecified,
            labels: {
              "quam": "molestiae",
              "velit": "error",
            },
            name: "quia",
            parentSpanId: "quis",
            spanId: "vitae",
            startTime: "laborum",
          },
          {
            endTime: "animi",
            kind: TraceSpanKindEnum.SpanKindUnspecified,
            labels: {
              "quo": "sequi",
            },
            name: "tenetur",
            parentSpanId: "ipsam",
            spanId: "id",
            startTime: "possimus",
          },
        ],
        traceId: "aut",
      },
    ],
  },
  accessToken: "quasi",
  alt: AltEnum.Media,
  callback: "temporibus",
  fields: "laborum",
  key: "quasi",
  oauthToken: "reiciendis",
  prettyPrint: false,
  projectId: "voluptatibus",
  quotaUser: "vero",
  uploadType: "nihil",
  uploadProtocol: "praesentium",
};

sdk.projects.cloudtraceProjectsPatchTraces(req).then((res: CloudtraceProjectsPatchTracesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->