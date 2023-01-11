package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1AnnotatorSelector
 * Selector of all available annotators and phrase matchers to run.
**/
public class GoogleCloudContactcenterinsightsV1AnnotatorSelector {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issueModels")
    public String[] issueModels;
    public GoogleCloudContactcenterinsightsV1AnnotatorSelector withIssueModels(String[] issueModels) {
        this.issueModels = issueModels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phraseMatchers")
    public String[] phraseMatchers;
    public GoogleCloudContactcenterinsightsV1AnnotatorSelector withPhraseMatchers(String[] phraseMatchers) {
        this.phraseMatchers = phraseMatchers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runEntityAnnotator")
    public Boolean runEntityAnnotator;
    public GoogleCloudContactcenterinsightsV1AnnotatorSelector withRunEntityAnnotator(Boolean runEntityAnnotator) {
        this.runEntityAnnotator = runEntityAnnotator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runIntentAnnotator")
    public Boolean runIntentAnnotator;
    public GoogleCloudContactcenterinsightsV1AnnotatorSelector withRunIntentAnnotator(Boolean runIntentAnnotator) {
        this.runIntentAnnotator = runIntentAnnotator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runInterruptionAnnotator")
    public Boolean runInterruptionAnnotator;
    public GoogleCloudContactcenterinsightsV1AnnotatorSelector withRunInterruptionAnnotator(Boolean runInterruptionAnnotator) {
        this.runInterruptionAnnotator = runInterruptionAnnotator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runIssueModelAnnotator")
    public Boolean runIssueModelAnnotator;
    public GoogleCloudContactcenterinsightsV1AnnotatorSelector withRunIssueModelAnnotator(Boolean runIssueModelAnnotator) {
        this.runIssueModelAnnotator = runIssueModelAnnotator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runPhraseMatcherAnnotator")
    public Boolean runPhraseMatcherAnnotator;
    public GoogleCloudContactcenterinsightsV1AnnotatorSelector withRunPhraseMatcherAnnotator(Boolean runPhraseMatcherAnnotator) {
        this.runPhraseMatcherAnnotator = runPhraseMatcherAnnotator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runSentimentAnnotator")
    public Boolean runSentimentAnnotator;
    public GoogleCloudContactcenterinsightsV1AnnotatorSelector withRunSentimentAnnotator(Boolean runSentimentAnnotator) {
        this.runSentimentAnnotator = runSentimentAnnotator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runSilenceAnnotator")
    public Boolean runSilenceAnnotator;
    public GoogleCloudContactcenterinsightsV1AnnotatorSelector withRunSilenceAnnotator(Boolean runSilenceAnnotator) {
        this.runSilenceAnnotator = runSilenceAnnotator;
        return this;
    }
}