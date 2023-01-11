import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudContactcenterinsightsV1AnnotatorSelector
/** 
 * Selector of all available annotators and phrase matchers to run.
**/
export class GoogleCloudContactcenterinsightsV1AnnotatorSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issueModels" })
  issueModels?: string[];

  @SpeakeasyMetadata({ data: "json, name=phraseMatchers" })
  phraseMatchers?: string[];

  @SpeakeasyMetadata({ data: "json, name=runEntityAnnotator" })
  runEntityAnnotator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=runIntentAnnotator" })
  runIntentAnnotator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=runInterruptionAnnotator" })
  runInterruptionAnnotator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=runIssueModelAnnotator" })
  runIssueModelAnnotator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=runPhraseMatcherAnnotator" })
  runPhraseMatcherAnnotator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=runSentimentAnnotator" })
  runSentimentAnnotator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=runSilenceAnnotator" })
  runSilenceAnnotator?: boolean;
}
