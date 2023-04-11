import { SpeakeasyBase } from "../../../internal/utils";
import { Printer } from "./printer";
/**
 * Response for listing printers.
 */
export declare class ListPrintersResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * List of printers. If `org_unit_id` was given in the request, then only printers visible for this OU will be returned. If `org_unit_id` was not given in the request, then all printers will be returned.
     */
    printers?: Printer[];
}
