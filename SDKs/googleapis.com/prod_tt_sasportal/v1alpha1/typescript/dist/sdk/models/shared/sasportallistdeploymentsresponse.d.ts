import { SpeakeasyBase } from "../../../internal/utils";
import { SasPortalDeployment } from "./sasportaldeployment";
/**
 * Response for ListDeployments.
 */
export declare class SasPortalListDeploymentsResponse extends SpeakeasyBase {
    /**
     * The deployments that match the request.
     */
    deployments?: SasPortalDeployment[];
    /**
     * A pagination token returned from a previous call to ListDeployments that indicates from where listing should continue. If the field is missing or empty, it means there are no more deployments.
     */
    nextPageToken?: string;
}
