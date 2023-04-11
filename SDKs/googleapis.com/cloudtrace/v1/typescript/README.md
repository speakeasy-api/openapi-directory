# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudtrace/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudtrace/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `cloudtraceProjectsPatchTraces` - Sends new traces to Cloud Trace or updates existing traces. If the ID of a trace that you send matches that of an existing trace, any fields in the existing trace and its spans are overwritten by the provided values, and any new fields provided are merged with the existing trace data. If the ID does not match, a new trace is created.
* `cloudtraceProjectsTracesGet` - Gets a single trace by its ID.
* `cloudtraceProjectsTracesList` - Returns a list of traces that match the specified filter conditions.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

