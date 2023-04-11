import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListWorkflowRunArtifactsRequest extends SpeakeasyBase {
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
    /**
     * The unique identifier of the workflow run.
     */
    runId: number;
}
/**
 * Response
 */
export declare class ActionsListWorkflowRunArtifacts200ApplicationJSON extends SpeakeasyBase {
    artifacts: shared.Artifact[];
    totalCount: number;
}
export declare class ActionsListWorkflowRunArtifactsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListWorkflowRunArtifacts200ApplicationJSONObject?: ActionsListWorkflowRunArtifacts200ApplicationJSON;
}
