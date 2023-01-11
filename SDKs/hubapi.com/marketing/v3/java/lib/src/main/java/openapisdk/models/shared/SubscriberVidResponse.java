package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SubscriberVidResponse {
    @JsonProperty("vid")
    public Integer vid;
    public SubscriberVidResponse withVid(Integer vid) {
        this.vid = vid;
        return this;
    }
}