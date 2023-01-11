package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateCallRequestTransferAnswerUrlDestination {
    @JsonProperty("type")
    public String type;
    public UpdateCallRequestTransferAnswerUrlDestination withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("url")
    public String[] url;
    public UpdateCallRequestTransferAnswerUrlDestination withUrl(String[] url) {
        this.url = url;
        return this;
    }
}