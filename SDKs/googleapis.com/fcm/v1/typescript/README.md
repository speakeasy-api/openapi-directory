# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/fcm/v1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/fcm/v1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  FcmProjectsMessagesSendRequest,
  FcmProjectsMessagesSendResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  AndroidConfigPriorityEnum,
  AndroidNotificationNotificationPriorityEnum,
  AndroidNotificationVisibilityEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FcmProjectsMessagesSendRequest = {
  dollarXgafv: XgafvEnum.Two,
  sendMessageRequest: {
    message: {
      android: {
        collapseKey: "provident",
        data: {
          "quibusdam": "unde",
          "nulla": "corrupti",
          "illum": "vel",
        },
        directBootOk: false,
        fcmOptions: {
          analyticsLabel: "error",
        },
        notification: {
          body: "deserunt",
          bodyLocArgs: [
            "iure",
            "magnam",
          ],
          bodyLocKey: "debitis",
          bypassProxyNotification: false,
          channelId: "ipsa",
          clickAction: "delectus",
          color: "tempora",
          defaultLightSettings: false,
          defaultSound: false,
          defaultVibrateTimings: false,
          eventTime: "suscipit",
          icon: "molestiae",
          image: "minus",
          lightSettings: {
            color: {
              alpha: 8121.69,
              blue: 5288.95,
              green: 4799.77,
              red: 5680.45,
            },
            lightOffDuration: "nisi",
            lightOnDuration: "recusandae",
          },
          localOnly: false,
          notificationCount: 836079,
          notificationPriority: AndroidNotificationNotificationPriorityEnum.PriorityUnspecified,
          sound: "quis",
          sticky: false,
          tag: "veritatis",
          ticker: "deserunt",
          title: "Mr.",
          titleLocArgs: [
            "repellendus",
            "sapiente",
          ],
          titleLocKey: "quo",
          vibrateTimings: [
            "at",
          ],
          visibility: AndroidNotificationVisibilityEnum.Secret,
        },
        priority: AndroidConfigPriorityEnum.High,
        restrictedPackageName: "molestiae",
        ttl: "quod",
      },
      apns: {
        fcmOptions: {
          analyticsLabel: "quod",
          image: "esse",
        },
        headers: {
          "porro": "dolorum",
          "dicta": "nam",
          "officia": "occaecati",
        },
        payload: {
          "deleniti": "hic",
        },
      },
      condition: "optio",
      data: {
        "beatae": "commodi",
        "molestiae": "modi",
        "qui": "impedit",
      },
      fcmOptions: {
        analyticsLabel: "cum",
      },
      name: "esse",
      notification: {
        body: "ipsum",
        image: "excepturi",
        title: "Mr.",
      },
      token: "perferendis",
      topic: "ad",
      webpush: {
        data: {
          "sed": "iste",
          "dolor": "natus",
          "laboriosam": "hic",
        },
        fcmOptions: {
          analyticsLabel: "saepe",
          link: "fuga",
        },
        headers: {
          "corporis": "iste",
          "iure": "saepe",
        },
        notification: {
          "architecto": "ipsa",
          "reiciendis": "est",
          "mollitia": "laborum",
        },
      },
    },
    validateOnly: false,
  },
  accessToken: "dolores",
  alt: AltEnum.Json,
  callback: "corporis",
  fields: "explicabo",
  key: "nobis",
  oauthToken: "enim",
  parent: "omnis",
  prettyPrint: false,
  quotaUser: "nemo",
  uploadType: "minima",
  uploadProtocol: "excepturi",
};

sdk.projects.fcmProjectsMessagesSend(req).then((res: FcmProjectsMessagesSendResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `fcmProjectsMessagesSend` - Send a message to specified target (a registration token, topic or condition).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

