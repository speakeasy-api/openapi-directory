import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message for the SuggestTrial service method.
 */
export declare class GoogleCloudMlV1SuggestTrialsRequest extends SpeakeasyBase {
    /**
     * Required. The identifier of the client that is requesting the suggestion. If multiple SuggestTrialsRequests have the same `client_id`, the service will return the identical suggested trial if the trial is pending, and provide a new trial if the last suggested trial was completed.
     */
    clientId?: string;
    /**
     * Required. The number of suggestions requested.
     */
    suggestionCount?: number;
}
