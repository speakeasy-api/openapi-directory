package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SubscriberEmailResponse {
    @JsonProperty("email")
    public String email;
    public SubscriberEmailResponse withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("vid")
    public Integer vid;
    public SubscriberEmailResponse withVid(Integer vid) {
        this.vid = vid;
        return this;
    }
}