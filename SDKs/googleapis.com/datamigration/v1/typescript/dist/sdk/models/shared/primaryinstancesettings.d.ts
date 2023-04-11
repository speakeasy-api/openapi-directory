import { SpeakeasyBase } from "../../../internal/utils";
import { MachineConfig } from "./machineconfig";
/**
 * Settings for the cluster's primary instance
 */
export declare class PrimaryInstanceSettings extends SpeakeasyBase {
    /**
     * Database flags to pass to AlloyDB when DMS is creating the AlloyDB cluster and instances. See the AlloyDB documentation for how these can be used.
     */
    databaseFlags?: Record<string, string>;
    /**
     * Required. The ID of the AlloyDB primary instance. The ID must satisfy the regex expression "[a-z0-9-]+".
     */
    id?: string;
    /**
     * Labels for the AlloyDB primary instance created by DMS. An object containing a list of 'key', 'value' pairs.
     */
    labels?: Record<string, string>;
    /**
     * MachineConfig describes the configuration of a machine.
     */
    machineConfig?: MachineConfig;
    /**
     * Output only. The private IP address for the Instance. This is the connection endpoint for an end-user application.
     */
    privateIp?: string;
}
/**
 * Settings for the cluster's primary instance
 */
export declare class PrimaryInstanceSettingsInput extends SpeakeasyBase {
    /**
     * Database flags to pass to AlloyDB when DMS is creating the AlloyDB cluster and instances. See the AlloyDB documentation for how these can be used.
     */
    databaseFlags?: Record<string, string>;
    /**
     * Required. The ID of the AlloyDB primary instance. The ID must satisfy the regex expression "[a-z0-9-]+".
     */
    id?: string;
    /**
     * Labels for the AlloyDB primary instance created by DMS. An object containing a list of 'key', 'value' pairs.
     */
    labels?: Record<string, string>;
    /**
     * MachineConfig describes the configuration of a machine.
     */
    machineConfig?: MachineConfig;
}
