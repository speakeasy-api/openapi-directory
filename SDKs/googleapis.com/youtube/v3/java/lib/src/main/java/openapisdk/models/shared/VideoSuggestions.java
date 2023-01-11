package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoSuggestions
 * Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions.
**/
public class VideoSuggestions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("editorSuggestions")
    public VideoSuggestionsEditorSuggestionsEnum[] editorSuggestions;
    public VideoSuggestions withEditorSuggestions(VideoSuggestionsEditorSuggestionsEnum[] editorSuggestions) {
        this.editorSuggestions = editorSuggestions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingErrors")
    public VideoSuggestionsProcessingErrorsEnum[] processingErrors;
    public VideoSuggestions withProcessingErrors(VideoSuggestionsProcessingErrorsEnum[] processingErrors) {
        this.processingErrors = processingErrors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingHints")
    public VideoSuggestionsProcessingHintsEnum[] processingHints;
    public VideoSuggestions withProcessingHints(VideoSuggestionsProcessingHintsEnum[] processingHints) {
        this.processingHints = processingHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingWarnings")
    public VideoSuggestionsProcessingWarningsEnum[] processingWarnings;
    public VideoSuggestions withProcessingWarnings(VideoSuggestionsProcessingWarningsEnum[] processingWarnings) {
        this.processingWarnings = processingWarnings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagSuggestions")
    public VideoSuggestionsTagSuggestion[] tagSuggestions;
    public VideoSuggestions withTagSuggestions(VideoSuggestionsTagSuggestion[] tagSuggestions) {
        this.tagSuggestions = tagSuggestions;
        return this;
    }
}