<!-- Start SDK Example Usage -->
```typescript
import {
  AutomlProjectsLocationsDatasetsCreateRequest,
  AutomlProjectsLocationsDatasetsCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  TextClassificationDatasetMetadataClassificationTypeEnum,
  ImageClassificationDatasetMetadataClassificationTypeEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AutomlProjectsLocationsDatasetsCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  dataset: {
    createTime: "provident",
    description: "distinctio",
    displayName: "quibusdam",
    etag: "unde",
    exampleCount: 857946,
    imageClassificationDatasetMetadata: {
      classificationType: ImageClassificationDatasetMetadataClassificationTypeEnum.Multiclass,
    },
    imageObjectDetectionDatasetMetadata: {
      "vel": "error",
      "deserunt": "suscipit",
      "iure": "magnam",
      "debitis": "ipsa",
    },
    name: "delectus",
    tablesDatasetMetadata: {
      mlUseColumnSpecId: "tempora",
      primaryTableSpecId: "suscipit",
      statsUpdateTime: "molestiae",
      targetColumnCorrelations: {
        "placeat": {
          cramersV: 5288.95,
        },
        "iusto": {
          cramersV: 5680.45,
        },
        "nisi": {
          cramersV: 9255.97,
        },
        "temporibus": {
          cramersV: 710.36,
        },
      },
      targetColumnSpecId: "quis",
      weightColumnSpecId: "veritatis",
    },
    textClassificationDatasetMetadata: {
      classificationType: TextClassificationDatasetMetadataClassificationTypeEnum.Multiclass,
    },
    textExtractionDatasetMetadata: {
      "ipsam": "repellendus",
    },
    textSentimentDatasetMetadata: {
      sentimentMax: 957156,
    },
    translationDatasetMetadata: {
      sourceLanguageCode: "quo",
      targetLanguageCode: "odit",
    },
    videoClassificationDatasetMetadata: {
      "at": "maiores",
      "molestiae": "quod",
      "quod": "esse",
      "totam": "porro",
    },
    videoObjectTrackingDatasetMetadata: {
      "dicta": "nam",
      "officia": "occaecati",
      "fugit": "deleniti",
    },
  },
  accessToken: "hic",
  alt: AltEnum.Proto,
  callback: "totam",
  fields: "beatae",
  key: "commodi",
  oauthToken: "molestiae",
  parent: "modi",
  prettyPrint: false,
  quotaUser: "qui",
  uploadType: "impedit",
  uploadProtocol: "cum",
};

sdk.projects.automlProjectsLocationsDatasetsCreate(req).then((res: AutomlProjectsLocationsDatasetsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->