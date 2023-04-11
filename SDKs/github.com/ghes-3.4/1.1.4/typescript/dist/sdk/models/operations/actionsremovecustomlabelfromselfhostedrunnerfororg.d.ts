import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgRequest extends SpeakeasyBase {
    /**
     * The name of a self-hosted runner's custom label.
     */
    name: string;
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
export declare class ActionsRemoveCustomLabelFromSelfHostedRunnerForOrg200ApplicationJSON extends SpeakeasyBase {
    labels: shared.RunnerLabel[];
    totalCount: number;
}
export declare class ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsRemoveCustomLabelFromSelfHostedRunnerForOrg200ApplicationJSONObject?: ActionsRemoveCustomLabelFromSelfHostedRunnerForOrg200ApplicationJSON;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
