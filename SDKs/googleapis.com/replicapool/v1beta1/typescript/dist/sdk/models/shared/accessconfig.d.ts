import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Compute Engine network accessConfig. Identical to the accessConfig on corresponding Compute Engine resource.
 */
export declare class AccessConfig extends SpeakeasyBase {
    /**
     * Name of this access configuration.
     */
    name?: string;
    /**
     * An external IP address associated with this instance.
     */
    natIp?: string;
    /**
     * Type of this access configuration file. Currently only ONE_TO_ONE_NAT is supported.
     */
    type?: string;
}
