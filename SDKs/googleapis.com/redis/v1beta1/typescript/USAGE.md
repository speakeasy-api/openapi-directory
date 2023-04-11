<!-- Start SDK Example Usage -->
```typescript
import {
  RedisProjectsLocationsInstancesCreateRequest,
  RedisProjectsLocationsInstancesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  InstanceConnectModeEnum,
  InstanceReadReplicasModeEnum,
  InstanceSuspensionReasonsEnum,
  InstanceTierEnum,
  InstanceTransitEncryptionModeEnum,
  PersistenceConfigPersistenceModeEnum,
  PersistenceConfigRdbSnapshotPeriodEnum,
  WeeklyMaintenanceWindowDayEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: RedisProjectsLocationsInstancesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  instanceInput: {
    alternativeLocationId: "provident",
    authEnabled: false,
    authorizedNetwork: "distinctio",
    availableMaintenanceVersions: [
      "unde",
      "nulla",
      "corrupti",
      "illum",
    ],
    connectMode: InstanceConnectModeEnum.DirectPeering,
    customerManagedKey: "error",
    displayName: "deserunt",
    labels: {
      "iure": "magnam",
      "debitis": "ipsa",
    },
    locationId: "delectus",
    maintenancePolicy: {
      description: "tempora",
      weeklyMaintenanceWindow: [
        {
          day: WeeklyMaintenanceWindowDayEnum.Wednesday,
          startTime: {
            hours: 791725,
            minutes: 812169,
            nanos: 528895,
            seconds: 479977,
          },
        },
        {
          day: WeeklyMaintenanceWindowDayEnum.Thursday,
          startTime: {
            hours: 392785,
            minutes: 925597,
            nanos: 836079,
            seconds: 71036,
          },
        },
      ],
    },
    maintenanceSchedule: {
      canReschedule: false,
    },
    maintenanceVersion: "quis",
    memorySizeGb: 87129,
    name: "deserunt",
    persistenceConfig: {
      persistenceMode: PersistenceConfigPersistenceModeEnum.PersistenceModeUnspecified,
      rdbSnapshotPeriod: PersistenceConfigRdbSnapshotPeriodEnum.OneHour,
      rdbSnapshotStartTime: "repellendus",
    },
    readReplicasMode: InstanceReadReplicasModeEnum.ReadReplicasEnabled,
    redisConfigs: {
      "odit": "at",
      "at": "maiores",
      "molestiae": "quod",
      "quod": "esse",
    },
    redisVersion: "totam",
    replicaCount: 780529,
    reservedIpRange: "dolorum",
    secondaryIpRange: "dicta",
    suspensionReasons: [
      InstanceSuspensionReasonsEnum.CustomerManagedKeyIssue,
      InstanceSuspensionReasonsEnum.CustomerManagedKeyIssue,
      InstanceSuspensionReasonsEnum.SuspensionReasonUnspecified,
    ],
    tier: InstanceTierEnum.Basic,
    transitEncryptionMode: InstanceTransitEncryptionModeEnum.Disabled,
  },
  accessToken: "optio",
  alt: AltEnum.Media,
  callback: "beatae",
  fields: "commodi",
  instanceId: "molestiae",
  key: "modi",
  oauthToken: "qui",
  parent: "impedit",
  prettyPrint: false,
  quotaUser: "cum",
  uploadType: "esse",
  uploadProtocol: "ipsum",
};

sdk.projects.redisProjectsLocationsInstancesCreate(req).then((res: RedisProjectsLocationsInstancesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->