import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsCreateWorkflowDispatchRequestBody extends SpeakeasyBase {
    /**
     * Input keys and values configured in the workflow file. The maximum number of properties is 10. Any default properties configured in the workflow file will be used when `inputs` are omitted.
     */
    inputs?: Record<string, string>;
    /**
     * The git reference for the workflow. The reference can be a branch or tag name.
     */
    ref: string;
}
export declare class ActionsCreateWorkflowDispatchRequest extends SpeakeasyBase {
    requestBody: ActionsCreateWorkflowDispatchRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
    /**
     * The ID of the workflow. You can also pass the workflow file name as a string.
     */
    workflowId: any;
}
export declare class ActionsCreateWorkflowDispatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
