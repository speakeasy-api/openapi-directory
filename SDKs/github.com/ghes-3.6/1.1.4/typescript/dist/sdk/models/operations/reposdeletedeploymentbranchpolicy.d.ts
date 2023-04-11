import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReposDeleteDeploymentBranchPolicyRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the branch policy.
     */
    branchPolicyId: number;
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
export declare class ReposDeleteDeploymentBranchPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
