import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposListDeploymentBranchPoliciesRequest extends SpeakeasyBase {
    /**
     * The name of the environment.
     */
    environmentName: string;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
/**
 * Response
 */
export declare class ReposListDeploymentBranchPolicies200ApplicationJSON extends SpeakeasyBase {
    branchPolicies: shared.DeploymentBranchPolicy[];
    /**
     * The number of deployment branch policies for the environment.
     */
    totalCount: number;
}
export declare class ReposListDeploymentBranchPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    reposListDeploymentBranchPolicies200ApplicationJSONObject?: ReposListDeploymentBranchPolicies200ApplicationJSON;
}
