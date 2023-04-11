import { SpeakeasyBase } from "../../../internal/utils";
import { ClientConnectorService } from "./clientconnectorservice";
/**
 * Message for response to listing ClientConnectorServices.
 */
export declare class ListClientConnectorServicesResponse extends SpeakeasyBase {
    /**
     * The list of ClientConnectorService.
     */
    clientConnectorServices?: ClientConnectorService[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
