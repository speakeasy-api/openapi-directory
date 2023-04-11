import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For display only. Metadata associated with a Compute Engine instance.
 */
export declare class InstanceInfo extends SpeakeasyBase {
    /**
     * Name of a Compute Engine instance.
     */
    displayName?: string;
    /**
     * External IP address of the network interface.
     */
    externalIp?: string;
    /**
     * Name of the network interface of a Compute Engine instance.
     */
    interface?: string;
    /**
     * Internal IP address of the network interface.
     */
    internalIp?: string;
    /**
     * Network tags configured on the instance.
     */
    networkTags?: string[];
    /**
     * URI of a Compute Engine network.
     */
    networkUri?: string;
    /**
     * Service account authorized for the instance.
     */
    serviceAccount?: string;
    /**
     * URI of a Compute Engine instance.
     */
    uri?: string;
}
