import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A reference to a Compute Engine instance.
 */
export declare class InstanceReference extends SpeakeasyBase {
    /**
     * The unique identifier of the Compute Engine instance.
     */
    instanceId?: string;
    /**
     * The user-friendly name of the Compute Engine instance.
     */
    instanceName?: string;
    /**
     * The public ECIES key used for sharing data with this instance.
     */
    publicEciesKey?: string;
    /**
     * The public RSA key used for sharing data with this instance.
     */
    publicKey?: string;
}
