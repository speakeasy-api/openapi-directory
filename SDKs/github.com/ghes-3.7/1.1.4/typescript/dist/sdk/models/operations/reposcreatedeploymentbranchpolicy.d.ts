import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposCreateDeploymentBranchPolicyRequest extends SpeakeasyBase {
    deploymentBranchPolicyNamePattern: shared.DeploymentBranchPolicyNamePattern;
    /**
     * The name of the environment.
     */
    environmentName: string;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposCreateDeploymentBranchPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    deploymentBranchPolicy?: shared.DeploymentBranchPolicy;
}
