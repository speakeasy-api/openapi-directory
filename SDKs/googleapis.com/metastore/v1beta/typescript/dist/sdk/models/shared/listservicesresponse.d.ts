import { SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";
/**
 * Response message for DataprocMetastore.ListServices.
 */
export declare class ListServicesResponse extends SpeakeasyBase {
    /**
     * A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The services in the specified location.
     */
    services?: Service[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
