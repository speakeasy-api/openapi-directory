import { SpeakeasyBase } from "../../../internal/utils";
import { ClientGateway } from "./clientgateway";
/**
 * Message for response to listing ClientGateways.
 */
export declare class ListClientGatewaysResponse extends SpeakeasyBase {
    /**
     * The list of ClientGateway.
     */
    clientGateways?: ClientGateway[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
