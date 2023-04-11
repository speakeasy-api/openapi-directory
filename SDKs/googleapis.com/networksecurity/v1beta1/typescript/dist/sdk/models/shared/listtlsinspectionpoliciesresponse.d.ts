import { SpeakeasyBase } from "../../../internal/utils";
import { TlsInspectionPolicy } from "./tlsinspectionpolicy";
/**
 * Response returned by the ListTlsInspectionPolicies method.
 */
export declare class ListTlsInspectionPoliciesResponse extends SpeakeasyBase {
    /**
     * If there might be more results than those appearing in this response, then 'next_page_token' is included. To get the next set of results, call this method again using the value of 'next_page_token' as 'page_token'.
     */
    nextPageToken?: string;
    /**
     * List of TlsInspectionPolicies resources.
     */
    tlsInspectionPolicies?: TlsInspectionPolicy[];
}
