import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsReRunJobForWorkflowRunRequestBody extends SpeakeasyBase {
    /**
     * Whether to enable debug logging for the re-run.
     */
    enableDebugLogging?: boolean;
}
export declare class ActionsReRunJobForWorkflowRunRequest extends SpeakeasyBase {
    requestBody?: ActionsReRunJobForWorkflowRunRequestBody;
    /**
     * The unique identifier of the job.
     */
    jobId: number;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ActionsReRunJobForWorkflowRunResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    emptyObject?: Record<string, any>;
}
