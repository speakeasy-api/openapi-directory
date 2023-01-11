import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MachineConfig } from "./machineconfig";



// PrimaryInstanceSettings
/** 
 * Settings for the cluster's primary instance
**/
export class PrimaryInstanceSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databaseFlags" })
  databaseFlags?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=machineConfig" })
  machineConfig?: MachineConfig;

  @SpeakeasyMetadata({ data: "json, name=privateIp" })
  privateIp?: string;
}


// PrimaryInstanceSettingsInput
/** 
 * Settings for the cluster's primary instance
**/
export class PrimaryInstanceSettingsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databaseFlags" })
  databaseFlags?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=machineConfig" })
  machineConfig?: MachineConfig;
}
