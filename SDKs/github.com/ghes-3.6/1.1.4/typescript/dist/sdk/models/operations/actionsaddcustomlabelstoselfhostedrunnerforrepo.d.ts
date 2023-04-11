import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsAddCustomLabelsToSelfHostedRunnerForRepoRequestBody extends SpeakeasyBase {
    /**
     * The names of the custom labels to add to the runner.
     */
    labels: string[];
}
export declare class ActionsAddCustomLabelsToSelfHostedRunnerForRepoRequest extends SpeakeasyBase {
    requestBody: ActionsAddCustomLabelsToSelfHostedRunnerForRepoRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
    /**
     * Unique identifier of the self-hosted runner.
     */
    runnerId: number;
}
/**
 * Response
 */
export declare class ActionsAddCustomLabelsToSelfHostedRunnerForRepo200ApplicationJSON extends SpeakeasyBase {
    labels: shared.RunnerLabel[];
    totalCount: number;
}
export declare class ActionsAddCustomLabelsToSelfHostedRunnerForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsAddCustomLabelsToSelfHostedRunnerForRepo200ApplicationJSONObject?: ActionsAddCustomLabelsToSelfHostedRunnerForRepo200ApplicationJSON;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
