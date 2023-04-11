import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Detailed completion information including completion attribution token and clicked completion info.
 */
export declare class GoogleCloudRetailV2alphaCompletionDetail extends SpeakeasyBase {
    /**
     * Completion attribution token in CompleteQueryResponse.attribution_token.
     */
    completionAttributionToken?: string;
    /**
     * End user selected CompleteQueryResponse.CompletionResult.suggestion position, starting from 0.
     */
    selectedPosition?: number;
    /**
     * End user selected CompleteQueryResponse.CompletionResult.suggestion.
     */
    selectedSuggestion?: string;
}
