import { SpeakeasyBase } from "../../../internal/utils";
import { PrintServer } from "./printserver";
/**
 * Successful response
 */
export declare class ListPrintServersResponse extends SpeakeasyBase {
    /**
     * A token that can be sent as `page_token` in a request to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * List of print servers.
     */
    printServers?: PrintServer[];
}
