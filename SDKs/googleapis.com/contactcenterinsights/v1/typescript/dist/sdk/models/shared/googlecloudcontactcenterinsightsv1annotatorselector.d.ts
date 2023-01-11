import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Selector of all available annotators and phrase matchers to run.
**/
export declare class GoogleCloudContactcenterinsightsV1AnnotatorSelector extends SpeakeasyBase {
    issueModels?: string[];
    phraseMatchers?: string[];
    runEntityAnnotator?: boolean;
    runIntentAnnotator?: boolean;
    runInterruptionAnnotator?: boolean;
    runIssueModelAnnotator?: boolean;
    runPhraseMatcherAnnotator?: boolean;
    runSentimentAnnotator?: boolean;
    runSilenceAnnotator?: boolean;
}
