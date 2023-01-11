package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SubmitPodcastResponse {
    @JsonProperty("podcast")
    public PodcastMinimum podcast;
    public SubmitPodcastResponse withPodcast(PodcastMinimum podcast) {
        this.podcast = podcast;
        return this;
    }
    @JsonProperty("status")
    public SubmitPodcastResponseStatusEnum status;
    public SubmitPodcastResponse withStatus(SubmitPodcastResponseStatusEnum status) {
        this.status = status;
        return this;
    }
}