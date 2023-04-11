import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsDownloadJobLogsForWorkflowRunRequest extends SpeakeasyBase {
    /**
     * job_id parameter
     */
    jobId: number;
    owner: string;
    repo: string;
}
export declare class ActionsDownloadJobLogsForWorkflowRunResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
