<!-- Start SDK Example Usage -->
```typescript
import {
  FitnessUsersDataSourcesCreateRequest,
  FitnessUsersDataSourcesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  DataSourceDataQualityStandardEnum,
  DataSourceTypeEnum,
  DeviceTypeEnum,
  DataTypeFieldFormatEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FitnessUsersDataSourcesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  dataSource: {
    application: {
      detailsUrl: "provident",
      name: "distinctio",
      packageName: "quibusdam",
      version: "unde",
    },
    dataQualityStandard: [
      DataSourceDataQualityStandardEnum.DataQualityBloodPressureBhsAB,
      DataSourceDataQualityStandardEnum.DataQualityBloodGlucoseIso151972003,
      DataSourceDataQualityStandardEnum.DataQualityBloodPressureBhsAA,
      DataSourceDataQualityStandardEnum.DataQualityBloodPressureBhsBA,
    ],
    dataStreamId: "deserunt",
    dataStreamName: "suscipit",
    dataType: {
      field: [
        {
          format: DataTypeFieldFormatEnum.String,
          name: "debitis",
          optional: false,
        },
        {
          format: DataTypeFieldFormatEnum.Integer,
          name: "delectus",
          optional: false,
        },
      ],
      name: "tempora",
    },
    device: {
      manufacturer: "suscipit",
      model: "molestiae",
      type: DeviceTypeEnum.HeadMounted,
      uid: "placeat",
      version: "voluptatum",
    },
    name: "iusto",
    type: DataSourceTypeEnum.Derived,
  },
  accessToken: "nisi",
  alt: AltEnum.Proto,
  callback: "temporibus",
  fields: "ab",
  key: "quis",
  oauthToken: "veritatis",
  prettyPrint: false,
  quotaUser: "deserunt",
  uploadType: "perferendis",
  uploadProtocol: "ipsam",
  userId: "repellendus",
};

sdk.users.fitnessUsersDataSourcesCreate(req).then((res: FitnessUsersDataSourcesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->