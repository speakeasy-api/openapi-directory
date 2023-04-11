import { SpeakeasyBase } from "../../../internal/utils";
import { Connector } from "./connector";
/**
 * Response message for Connectors.ListConnectors.
 */
export declare class ListConnectorsResponse extends SpeakeasyBase {
    /**
     * A list of connectors.
     */
    connectors?: Connector[];
    /**
     * Next page token.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
