import { SpeakeasyBase } from "../../../internal/utils";
import { PreservedState } from "./preservedstate";
/**
 * The status of applying this per-instance configuration on the corresponding managed instance.
 */
export declare enum PerInstanceConfigStatusEnum {
    Applying = "APPLYING",
    Deleting = "DELETING",
    Effective = "EFFECTIVE",
    None = "NONE",
    Unapplied = "UNAPPLIED",
    UnappliedDeletion = "UNAPPLIED_DELETION"
}
export declare class PerInstanceConfig extends SpeakeasyBase {
    /**
     * Fingerprint of this per-instance config. This field can be used in optimistic locking. It is ignored when inserting a per-instance config. An up-to-date fingerprint must be provided in order to update an existing per-instance configuration or the field needs to be unset.
     */
    fingerprint?: string;
    /**
     * The name of a per-instance configuration and its corresponding instance. Serves as a merge key during UpdatePerInstanceConfigs operations, that is, if a per-instance configuration with the same name exists then it will be updated, otherwise a new one will be created for the VM instance with the same name. An attempt to create a per-instance configconfiguration for a VM instance that either doesn't exist or is not part of the group will result in an error.
     */
    name?: string;
    /**
     * Preserved state for a given instance.
     */
    preservedState?: PreservedState;
    /**
     * The status of applying this per-instance configuration on the corresponding managed instance.
     */
    status?: PerInstanceConfigStatusEnum;
}
