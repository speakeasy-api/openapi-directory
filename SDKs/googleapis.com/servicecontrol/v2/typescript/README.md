# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/servicecontrol/v2/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/servicecontrol/v2/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ServicecontrolServicesCheckRequest,
  ServicecontrolServicesCheckResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ServicecontrolServicesCheckRequest = {
  dollarXgafv: XgafvEnum.Two,
  checkRequest: {
    attributes: {
      api: {
        operation: "provident",
        protocol: "distinctio",
        service: "quibusdam",
        version: "unde",
      },
      destination: {
        ip: "nulla",
        labels: {
          "illum": "vel",
          "error": "deserunt",
          "suscipit": "iure",
        },
        port: "magnam",
        principal: "debitis",
        regionCode: "ipsa",
      },
      extensions: [
        {
          "suscipit": "molestiae",
          "minus": "placeat",
        },
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
      ],
      origin: {
        ip: "quod",
        labels: {
          "totam": "porro",
          "dolorum": "dicta",
        },
        port: "nam",
        principal: "officia",
        regionCode: "occaecati",
      },
      request: {
        auth: {
          accessLevels: [
            "deleniti",
          ],
          audiences: [
            "optio",
            "totam",
            "beatae",
            "commodi",
          ],
          claims: {
            "modi": "qui",
            "impedit": "cum",
          },
          presenter: "esse",
          principal: "ipsum",
        },
        headers: {
          "aspernatur": "perferendis",
          "ad": "natus",
          "sed": "iste",
        },
        host: "dolor",
        id: "natus",
        method: "laboriosam",
        path: "hic",
        protocol: "saepe",
        query: "fuga",
        reason: "in",
        scheme: "corporis",
        size: "iste",
        time: "iure",
      },
      resource: {
        annotations: {
          "quidem": "architecto",
          "ipsa": "reiciendis",
          "est": "mollitia",
          "laborum": "dolores",
        },
        createTime: "dolorem",
        deleteTime: "corporis",
        displayName: "explicabo",
        etag: "nobis",
        labels: {
          "omnis": "nemo",
          "minima": "excepturi",
        },
        location: "accusantium",
        name: "iure",
        service: "culpa",
        type: "doloribus",
        uid: "sapiente",
        updateTime: "architecto",
      },
      response: {
        backendLatency: "mollitia",
        code: "dolorem",
        headers: {
          "consequuntur": "repellat",
          "mollitia": "occaecati",
          "numquam": "commodi",
        },
        size: "quam",
        time: "molestiae",
      },
      source: {
        ip: "velit",
        labels: {
          "quia": "quis",
          "vitae": "laborum",
          "animi": "enim",
        },
        port: "odit",
        principal: "quo",
        regionCode: "sequi",
      },
    },
    flags: "tenetur",
    resources: [
      {
        container: "id",
        location: "possimus",
        name: "aut",
        permission: "quasi",
        type: "error",
      },
      {
        container: "temporibus",
        location: "laborum",
        name: "quasi",
        permission: "reiciendis",
        type: "voluptatibus",
      },
    ],
    serviceConfigId: "vero",
  },
  accessToken: "nihil",
  alt: AltEnum.Media,
  callback: "voluptatibus",
  fields: "ipsa",
  key: "omnis",
  oauthToken: "voluptate",
  prettyPrint: false,
  quotaUser: "cum",
  serviceName: "perferendis",
  uploadType: "doloremque",
  uploadProtocol: "reprehenderit",
};

sdk.services.servicecontrolServicesCheck(req).then((res: ServicecontrolServicesCheckResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### services

* `servicecontrolServicesCheck` - Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
* `servicecontrolServicesReport` - Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

