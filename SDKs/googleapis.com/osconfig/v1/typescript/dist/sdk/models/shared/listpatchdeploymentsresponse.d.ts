import { SpeakeasyBase } from "../../../internal/utils";
import { PatchDeployment } from "./patchdeployment";
/**
 * A response message for listing patch deployments.
 */
export declare class ListPatchDeploymentsResponse extends SpeakeasyBase {
    /**
     * A pagination token that can be used to get the next page of patch deployments.
     */
    nextPageToken?: string;
    /**
     * The list of patch deployments.
     */
    patchDeployments?: PatchDeployment[];
}
