import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceConfig, InstanceConfigInput } from "./instanceconfig";
import { NetworkConfig, NetworkConfigInput } from "./networkconfig";
import { VolumeConfig, VolumeConfigInput } from "./volumeconfig";
/**
 * A provisioning configuration.
 */
export declare class ProvisioningConfigInput extends SpeakeasyBase {
    /**
     * Optional. The user-defined identifier of the provisioning config.
     */
    customId?: string;
    /**
     * Email provided to send a confirmation with provisioning config to. Deprecated in favour of email field in request messages.
     */
    email?: string;
    /**
     * A service account to enable customers to access instance credentials upon handover.
     */
    handoverServiceAccount?: string;
    /**
     * Instances to be created.
     */
    instances?: InstanceConfigInput[];
    /**
     * Optional. Location name of this ProvisioningConfig. It is optional only for Intake UI transition period.
     */
    location?: string;
    /**
     * Networks to be created.
     */
    networks?: NetworkConfigInput[];
    /**
     * Optional status messages associated with the FAILED state.
     */
    statusMessage?: string;
    /**
     * A generated ticket id to track provisioning request.
     */
    ticketId?: string;
    /**
     * Volumes to be created.
     */
    volumes?: VolumeConfigInput[];
    /**
     * If true, VPC SC is enabled for the cluster.
     */
    vpcScEnabled?: boolean;
}
/**
 * Output only. State of ProvisioningConfig.
 */
export declare enum ProvisioningConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Submitted = "SUBMITTED",
    Provisioning = "PROVISIONING",
    Provisioned = "PROVISIONED",
    Validated = "VALIDATED",
    Cancelled = "CANCELLED",
    Failed = "FAILED"
}
/**
 * A provisioning configuration.
 */
export declare class ProvisioningConfig extends SpeakeasyBase {
    /**
     * Output only. URI to Cloud Console UI view of this provisioning config.
     */
    cloudConsoleUri?: string;
    /**
     * Optional. The user-defined identifier of the provisioning config.
     */
    customId?: string;
    /**
     * Email provided to send a confirmation with provisioning config to. Deprecated in favour of email field in request messages.
     */
    email?: string;
    /**
     * A service account to enable customers to access instance credentials upon handover.
     */
    handoverServiceAccount?: string;
    /**
     * Instances to be created.
     */
    instances?: InstanceConfig[];
    /**
     * Optional. Location name of this ProvisioningConfig. It is optional only for Intake UI transition period.
     */
    location?: string;
    /**
     * Output only. The system-generated name of the provisioning config. This follows the UUID format.
     */
    name?: string;
    /**
     * Networks to be created.
     */
    networks?: NetworkConfig[];
    /**
     * Output only. State of ProvisioningConfig.
     */
    state?: ProvisioningConfigStateEnum;
    /**
     * Optional status messages associated with the FAILED state.
     */
    statusMessage?: string;
    /**
     * A generated ticket id to track provisioning request.
     */
    ticketId?: string;
    /**
     * Output only. Last update timestamp.
     */
    updateTime?: string;
    /**
     * Volumes to be created.
     */
    volumes?: VolumeConfig[];
    /**
     * If true, VPC SC is enabled for the cluster.
     */
    vpcScEnabled?: boolean;
}
