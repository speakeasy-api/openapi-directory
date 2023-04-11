import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoRequest extends SpeakeasyBase {
    /**
     * The name of a self-hosted runner's custom label.
     */
    name: string;
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
export declare class ActionsRemoveCustomLabelFromSelfHostedRunnerForRepo200ApplicationJSON extends SpeakeasyBase {
    labels: shared.RunnerLabel[];
    totalCount: number;
}
export declare class ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsRemoveCustomLabelFromSelfHostedRunnerForRepo200ApplicationJSONObject?: ActionsRemoveCustomLabelFromSelfHostedRunnerForRepo200ApplicationJSON;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
