import { SpeakeasyBase } from "../../../internal/utils";
import { IamPolicySearchResult } from "./iampolicysearchresult";
/**
 * Search all IAM policies response.
 */
export declare class SearchAllIamPoliciesResponse extends SpeakeasyBase {
    /**
     * Set if there are more results than those appearing in this response; to get the next set of results, call this method again, using this value as the `page_token`.
     */
    nextPageToken?: string;
    /**
     * A list of IAM policies that match the search query. Related information such as the associated resource is returned along with the policy.
     */
    results?: IamPolicySearchResult[];
}
