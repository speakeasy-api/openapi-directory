import { SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
/**
 * Define the Connectors target endpoint.
 */
export declare class DestinationConfig extends SpeakeasyBase {
    /**
     * The destinations for the key.
     */
    destinations?: Destination[];
    /**
     * The key is the destination identifier that is supported by the Connector.
     */
    key?: string;
}
