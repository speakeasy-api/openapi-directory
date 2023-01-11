import { SpeakeasyBase } from "../../../internal/utils";
import { MachineConfig } from "./machineconfig";
/**
 * Settings for the cluster's primary instance
**/
export declare class PrimaryInstanceSettings extends SpeakeasyBase {
    databaseFlags?: Record<string, string>;
    id?: string;
    labels?: Record<string, string>;
    machineConfig?: MachineConfig;
    privateIp?: string;
}
/**
 * Settings for the cluster's primary instance
**/
export declare class PrimaryInstanceSettingsInput extends SpeakeasyBase {
    databaseFlags?: Record<string, string>;
    id?: string;
    labels?: Record<string, string>;
    machineConfig?: MachineConfig;
}
