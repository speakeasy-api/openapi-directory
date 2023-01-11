package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PhonePlaybackResponse {
    @JsonProperty("calling")
    public Boolean calling;
    public PhonePlaybackResponse withCalling(Boolean calling) {
        this.calling = calling;
        return this;
    }
    @JsonProperty("numberValid")
    public Boolean numberValid;
    public PhonePlaybackResponse withNumberValid(Boolean numberValid) {
        this.numberValid = numberValid;
        return this;
    }
}