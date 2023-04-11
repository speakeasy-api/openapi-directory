import { SpeakeasyBase } from "../../../internal/utils";
import { AlertPolicy } from "./alertpolicy";
/**
 * The protocol for the ListAlertPolicies response.
 */
export declare class ListAlertPoliciesResponse extends SpeakeasyBase {
    /**
     * The returned alert policies.
     */
    alertPolicies?: AlertPolicy[];
    /**
     * If there might be more results than were returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method.
     */
    nextPageToken?: string;
    /**
     * The total number of alert policies in all pages. This number is only an estimate, and may change in subsequent pages. https://aip.dev/158
     */
    totalSize?: number;
}
