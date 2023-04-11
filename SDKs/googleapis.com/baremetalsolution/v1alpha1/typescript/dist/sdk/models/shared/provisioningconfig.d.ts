import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceConfig } from "./instanceconfig";
import { NetworkConfig } from "./networkconfig";
import { VolumeConfig } from "./volumeconfig";
/**
 * An provisioning configuration.
 */
export declare class ProvisioningConfig extends SpeakeasyBase {
    /**
     * Instances to be created.
     */
    instances?: InstanceConfig[];
    /**
     * Networks to be created.
     */
    networks?: NetworkConfig[];
    /**
     * A reference to track the request.
     */
    ticketId?: string;
    /**
     * Volumes to be created.
     */
    volumes?: VolumeConfig[];
}
