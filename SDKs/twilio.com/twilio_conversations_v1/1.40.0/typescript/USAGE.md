<!-- Start SDK Example Usage -->
```typescript
import {
  CreateConfigurationAddressCreateConfigurationAddressRequest,
  CreateConfigurationAddressResponse
} from "openapi/dist/sdk/models/operations";
import {
  ConfigurationAddressEnumTypeEnum,
  ConfigurationAddressEnumMethodEnum,
  ConfigurationAddressEnumAutoCreationTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateConfigurationAddressCreateConfigurationAddressRequest = {
  address: "5786 Little Streets",
  autoCreationConversationServiceSid: "vel",
  autoCreationEnabled: false,
  autoCreationStudioFlowSid: "error",
  autoCreationStudioRetryCount: 645894,
  autoCreationType: ConfigurationAddressEnumAutoCreationTypeEnum.Studio,
  autoCreationWebhookFilters: [
    "magnam",
    "debitis",
  ],
  autoCreationWebhookMethod: ConfigurationAddressEnumMethodEnum.Get,
  autoCreationWebhookUrl: "delectus",
  friendlyName: "tempora",
  type: ConfigurationAddressEnumTypeEnum.Whatsapp,
};

sdk.createConfigurationAddress(req).then((res: CreateConfigurationAddressResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->