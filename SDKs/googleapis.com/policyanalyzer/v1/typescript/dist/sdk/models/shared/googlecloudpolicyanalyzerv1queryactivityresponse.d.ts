import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicyanalyzerV1Activity } from "./googlecloudpolicyanalyzerv1activity";
/**
 * Response to the `QueryActivity` method.
 */
export declare class GoogleCloudPolicyanalyzerV1QueryActivityResponse extends SpeakeasyBase {
    /**
     * The set of activities that match the filter included in the request.
     */
    activities?: GoogleCloudPolicyanalyzerV1Activity[];
    /**
     * If there might be more results than those appearing in this response, then `nextPageToken` is included. To get the next set of results, call this method again using the value of `nextPageToken` as `pageToken`.
     */
    nextPageToken?: string;
}
