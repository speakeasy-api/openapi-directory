package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeletePodcastResponse {
    @JsonProperty("status")
    public DeletePodcastResponseStatusEnum status;
    public DeletePodcastResponse withStatus(DeletePodcastResponseStatusEnum status) {
        this.status = status;
        return this;
    }
}