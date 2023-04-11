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