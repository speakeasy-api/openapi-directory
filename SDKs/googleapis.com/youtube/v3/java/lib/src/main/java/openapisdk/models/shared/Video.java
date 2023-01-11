package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Video
 * A *video* resource represents a YouTube video.
**/
public class Video {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageGating")
    public VideoAgeGating ageGating;
    public Video withAgeGating(VideoAgeGating ageGating) {
        this.ageGating = ageGating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentDetails")
    public VideoContentDetails contentDetails;
    public Video withContentDetails(VideoContentDetails contentDetails) {
        this.contentDetails = contentDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Video withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileDetails")
    public VideoFileDetails fileDetails;
    public Video withFileDetails(VideoFileDetails fileDetails) {
        this.fileDetails = fileDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Video withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Video withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liveStreamingDetails")
    public VideoLiveStreamingDetails liveStreamingDetails;
    public Video withLiveStreamingDetails(VideoLiveStreamingDetails liveStreamingDetails) {
        this.liveStreamingDetails = liveStreamingDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localizations")
    public java.util.Map<String, VideoLocalization> localizations;
    public Video withLocalizations(java.util.Map<String, VideoLocalization> localizations) {
        this.localizations = localizations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monetizationDetails")
    public VideoMonetizationDetails monetizationDetails;
    public Video withMonetizationDetails(VideoMonetizationDetails monetizationDetails) {
        this.monetizationDetails = monetizationDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("player")
    public VideoPlayer player;
    public Video withPlayer(VideoPlayer player) {
        this.player = player;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingDetails")
    public VideoProcessingDetails processingDetails;
    public Video withProcessingDetails(VideoProcessingDetails processingDetails) {
        this.processingDetails = processingDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectDetails")
    public java.util.Map<String, Object> projectDetails;
    public Video withProjectDetails(java.util.Map<String, Object> projectDetails) {
        this.projectDetails = projectDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordingDetails")
    public VideoRecordingDetails recordingDetails;
    public Video withRecordingDetails(VideoRecordingDetails recordingDetails) {
        this.recordingDetails = recordingDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snippet")
    public VideoSnippet snippet;
    public Video withSnippet(VideoSnippet snippet) {
        this.snippet = snippet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statistics")
    public VideoStatistics statistics;
    public Video withStatistics(VideoStatistics statistics) {
        this.statistics = statistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public VideoStatus status;
    public Video withStatus(VideoStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suggestions")
    public VideoSuggestions suggestions;
    public Video withSuggestions(VideoSuggestions suggestions) {
        this.suggestions = suggestions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topicDetails")
    public VideoTopicDetails topicDetails;
    public Video withTopicDetails(VideoTopicDetails topicDetails) {
        this.topicDetails = topicDetails;
        return this;
    }
}