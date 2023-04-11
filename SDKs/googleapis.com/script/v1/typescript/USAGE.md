<!-- Start SDK Example Usage -->
```typescript
import {
  ScriptProcessesListRequest,
  ScriptProcessesListResponse,
  ScriptProcessesListUserProcessFilterStatusesEnum,
  ScriptProcessesListUserProcessFilterTypesEnum,
  ScriptProcessesListUserProcessFilterUserAccessLevelsEnum,
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ScriptProcessesListRequest = {
  dollarXgafv: XgafvEnum.Two,
  accessToken: "provident",
  alt: AltEnum.Proto,
  callback: "quibusdam",
  fields: "unde",
  key: "nulla",
  oauthToken: "corrupti",
  pageSize: 847252,
  pageToken: "vel",
  prettyPrint: false,
  quotaUser: "error",
  uploadType: "deserunt",
  uploadProtocol: "suscipit",
  userProcessFilterDeploymentId: "iure",
  userProcessFilterEndTime: "magnam",
  userProcessFilterFunctionName: "debitis",
  userProcessFilterProjectName: "ipsa",
  userProcessFilterScriptId: "delectus",
  userProcessFilterStartTime: "tempora",
  userProcessFilterStatuses: [
    ScriptProcessesListUserProcessFilterStatusesEnum.Canceled,
    ScriptProcessesListUserProcessFilterStatusesEnum.Unknown,
  ],
  userProcessFilterTypes: [
    ScriptProcessesListUserProcessFilterTypesEnum.Webapp,
    ScriptProcessesListUserProcessFilterTypesEnum.Trigger,
    ScriptProcessesListUserProcessFilterTypesEnum.Webapp,
    ScriptProcessesListUserProcessFilterTypesEnum.TimeDriven,
  ],
  userProcessFilterUserAccessLevels: [
    ScriptProcessesListUserProcessFilterUserAccessLevelsEnum.Owner,
    ScriptProcessesListUserProcessFilterUserAccessLevelsEnum.UserAccessLevelUnspecified,
    ScriptProcessesListUserProcessFilterUserAccessLevelsEnum.None,
    ScriptProcessesListUserProcessFilterUserAccessLevelsEnum.UserAccessLevelUnspecified,
  ],
};

sdk.processes.scriptProcessesList(req).then((res: ScriptProcessesListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->