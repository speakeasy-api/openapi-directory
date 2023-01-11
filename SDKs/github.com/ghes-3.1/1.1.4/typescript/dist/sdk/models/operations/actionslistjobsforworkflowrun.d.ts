import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsListJobsForWorkflowRunPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    runId: number;
}
export declare class ActionsListJobsForWorkflowRunQueryParams extends SpeakeasyBase {
    filter?: shared.RunIdEnum;
    page?: number;
    perPage?: number;
}
export declare class ActionsListJobsForWorkflowRun200ApplicationJson extends SpeakeasyBase {
    jobs: shared.Job[];
    totalCount: number;
}
export declare class ActionsListJobsForWorkflowRunRequest extends SpeakeasyBase {
    pathParams: ActionsListJobsForWorkflowRunPathParams;
    queryParams: ActionsListJobsForWorkflowRunQueryParams;
}
export declare class ActionsListJobsForWorkflowRunResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    actionsListJobsForWorkflowRun200ApplicationJSONObject?: ActionsListJobsForWorkflowRun200ApplicationJson;
}
