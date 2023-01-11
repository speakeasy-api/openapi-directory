package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoProcessingDetails
 * Describes processing status and progress and availability of some other Video resource parts.
**/
public class VideoProcessingDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("editorSuggestionsAvailability")
    public String editorSuggestionsAvailability;
    public VideoProcessingDetails withEditorSuggestionsAvailability(String editorSuggestionsAvailability) {
        this.editorSuggestionsAvailability = editorSuggestionsAvailability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileDetailsAvailability")
    public String fileDetailsAvailability;
    public VideoProcessingDetails withFileDetailsAvailability(String fileDetailsAvailability) {
        this.fileDetailsAvailability = fileDetailsAvailability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingFailureReason")
    public VideoProcessingDetailsProcessingFailureReasonEnum processingFailureReason;
    public VideoProcessingDetails withProcessingFailureReason(VideoProcessingDetailsProcessingFailureReasonEnum processingFailureReason) {
        this.processingFailureReason = processingFailureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingIssuesAvailability")
    public String processingIssuesAvailability;
    public VideoProcessingDetails withProcessingIssuesAvailability(String processingIssuesAvailability) {
        this.processingIssuesAvailability = processingIssuesAvailability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingProgress")
    public VideoProcessingDetailsProcessingProgress processingProgress;
    public VideoProcessingDetails withProcessingProgress(VideoProcessingDetailsProcessingProgress processingProgress) {
        this.processingProgress = processingProgress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingStatus")
    public VideoProcessingDetailsProcessingStatusEnum processingStatus;
    public VideoProcessingDetails withProcessingStatus(VideoProcessingDetailsProcessingStatusEnum processingStatus) {
        this.processingStatus = processingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagSuggestionsAvailability")
    public String tagSuggestionsAvailability;
    public VideoProcessingDetails withTagSuggestionsAvailability(String tagSuggestionsAvailability) {
        this.tagSuggestionsAvailability = tagSuggestionsAvailability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailsAvailability")
    public String thumbnailsAvailability;
    public VideoProcessingDetails withThumbnailsAvailability(String thumbnailsAvailability) {
        this.thumbnailsAvailability = thumbnailsAvailability;
        return this;
    }
}