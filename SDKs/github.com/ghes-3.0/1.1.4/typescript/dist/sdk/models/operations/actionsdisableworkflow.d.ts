import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsDisableWorkflowRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
    /**
     * The ID of the workflow. You can also pass the workflow file name as a string.
     */
    workflowId: any;
}
export declare class ActionsDisableWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
