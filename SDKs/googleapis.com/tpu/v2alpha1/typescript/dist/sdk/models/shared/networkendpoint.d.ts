import { SpeakeasyBase } from "../../../internal/utils";
import { AccessConfig } from "./accessconfig";
/**
 * A network endpoint over which a TPU worker can be reached.
 */
export declare class NetworkEndpoint extends SpeakeasyBase {
    /**
     * An access config attached to the TPU worker.
     */
    accessConfig?: AccessConfig;
    /**
     * The internal IP address of this network endpoint.
     */
    ipAddress?: string;
    /**
     * The port of this network endpoint.
     */
    port?: number;
}
