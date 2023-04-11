import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Detailed completion information including completion attribution token and clicked completion info.
 */
export declare class GoogleCloudDiscoveryengineV1betaCompletionInfo extends SpeakeasyBase {
    /**
     * End user selected CompleteQueryResponse.CompletionResult.suggestion position, starting from 0.
     */
    selectedPosition?: number;
    /**
     * End user selected CompleteQueryResponse.CompletionResult.suggestion.
     */
    selectedSuggestion?: string;
}
