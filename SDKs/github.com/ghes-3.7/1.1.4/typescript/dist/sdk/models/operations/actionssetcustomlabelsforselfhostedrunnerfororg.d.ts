import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsSetCustomLabelsForSelfHostedRunnerForOrgRequestBody extends SpeakeasyBase {
    /**
     * The names of the custom labels to set for the runner. You can pass an empty array to remove all custom labels.
     */
    labels: string[];
}
export declare class ActionsSetCustomLabelsForSelfHostedRunnerForOrgRequest extends SpeakeasyBase {
    requestBody: ActionsSetCustomLabelsForSelfHostedRunnerForOrgRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Unique identifier of the self-hosted runner.
     */
    runnerId: number;
}
/**
 * Response
 */
export declare class ActionsSetCustomLabelsForSelfHostedRunnerForOrg200ApplicationJSON extends SpeakeasyBase {
    labels: shared.RunnerLabel[];
    totalCount: number;
}
export declare class ActionsSetCustomLabelsForSelfHostedRunnerForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsSetCustomLabelsForSelfHostedRunnerForOrg200ApplicationJSONObject?: ActionsSetCustomLabelsForSelfHostedRunnerForOrg200ApplicationJSON;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
