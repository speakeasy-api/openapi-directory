import { SpeakeasyBase } from "../../../internal/utils";
import { Deployment } from "./deployment";
/**
 * Response with the list of deployments for the specified Apps Script project.
 */
export declare class ListDeploymentsResponse extends SpeakeasyBase {
    /**
     * The list of deployments.
     */
    deployments?: Deployment[];
    /**
     * The token that can be used in the next call to get the next page of results.
     */
    nextPageToken?: string;
}
