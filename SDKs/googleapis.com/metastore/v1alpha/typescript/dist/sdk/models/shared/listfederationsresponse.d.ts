import { SpeakeasyBase } from "../../../internal/utils";
import { Federation } from "./federation";
/**
 * Response message for ListFederations
 */
export declare class ListFederationsResponse extends SpeakeasyBase {
    /**
     * The services in the specified location.
     */
    federations?: Federation[];
    /**
     * A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
