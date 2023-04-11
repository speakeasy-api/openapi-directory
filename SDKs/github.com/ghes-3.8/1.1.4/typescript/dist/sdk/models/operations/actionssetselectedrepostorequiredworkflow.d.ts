import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsSetSelectedReposToRequiredWorkflowRequestBody extends SpeakeasyBase {
    /**
     * The IDs of the repositories for which the workflow should be required.
     */
    selectedRepositoryIds: number[];
}
export declare class ActionsSetSelectedReposToRequiredWorkflowRequest extends SpeakeasyBase {
    requestBody: ActionsSetSelectedReposToRequiredWorkflowRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The unique identifier of the required workflow.
     */
    requiredWorkflowId: number;
}
export declare class ActionsSetSelectedReposToRequiredWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
