import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A network endpoint over which a TPU worker can be reached.
 */
export declare class NetworkEndpoint extends SpeakeasyBase {
    /**
     * The IP address of this network endpoint.
     */
    ipAddress?: string;
    /**
     * The port of this network endpoint.
     */
    port?: number;
}
