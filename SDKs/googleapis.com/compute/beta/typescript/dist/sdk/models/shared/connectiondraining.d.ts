import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message containing connection draining configuration.
 */
export declare class ConnectionDraining extends SpeakeasyBase {
    /**
     * Configures a duration timeout for existing requests on a removed backend instance. For supported load balancers and protocols, as described in Enabling connection draining.
     */
    drainingTimeoutSec?: number;
}
