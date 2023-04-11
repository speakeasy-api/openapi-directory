import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudSecuritycenterV1beta1Finding } from "./googlecloudsecuritycenterv1beta1finding";
/**
 * Response message for listing findings.
 */
export declare class ListFindingsResponse extends SpeakeasyBase {
    /**
     * Findings matching the list request.
     */
    findings?: GoogleCloudSecuritycenterV1beta1Finding[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results.
     */
    nextPageToken?: string;
    /**
     * Time used for executing the list request.
     */
    readTime?: string;
    /**
     * The total number of findings matching the query.
     */
    totalSize?: number;
}
