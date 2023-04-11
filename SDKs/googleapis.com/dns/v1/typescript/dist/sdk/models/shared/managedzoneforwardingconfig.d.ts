import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedZoneForwardingConfigNameServerTarget } from "./managedzoneforwardingconfignameservertarget";
export declare class ManagedZoneForwardingConfig extends SpeakeasyBase {
    kind?: string;
    /**
     * List of target name servers to forward to. Cloud DNS selects the best available name server if more than one target is given.
     */
    targetNameServers?: ManagedZoneForwardingConfigNameServerTarget[];
}
