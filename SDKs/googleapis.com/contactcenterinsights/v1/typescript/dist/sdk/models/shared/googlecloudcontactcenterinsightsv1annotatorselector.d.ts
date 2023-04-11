import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Selector of all available annotators and phrase matchers to run.
 */
export declare class GoogleCloudContactcenterinsightsV1AnnotatorSelector extends SpeakeasyBase {
    /**
     * The issue model to run. If not provided, the most recently deployed topic model will be used. The provided issue model will only be used for inference if the issue model is deployed and if run_issue_model_annotator is set to true. If more than one issue model is provided, only the first provided issue model will be used for inference.
     */
    issueModels?: string[];
    /**
     * The list of phrase matchers to run. If not provided, all active phrase matchers will be used. If inactive phrase matchers are provided, they will not be used. Phrase matchers will be run only if run_phrase_matcher_annotator is set to true. Format: projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher}
     */
    phraseMatchers?: string[];
    /**
     * Whether to run the entity annotator.
     */
    runEntityAnnotator?: boolean;
    /**
     * Whether to run the intent annotator.
     */
    runIntentAnnotator?: boolean;
    /**
     * Whether to run the interruption annotator.
     */
    runInterruptionAnnotator?: boolean;
    /**
     * Whether to run the issue model annotator. A model should have already been deployed for this to take effect.
     */
    runIssueModelAnnotator?: boolean;
    /**
     * Whether to run the active phrase matcher annotator(s).
     */
    runPhraseMatcherAnnotator?: boolean;
    /**
     * Whether to run the sentiment annotator.
     */
    runSentimentAnnotator?: boolean;
    /**
     * Whether to run the silence annotator.
     */
    runSilenceAnnotator?: boolean;
}
