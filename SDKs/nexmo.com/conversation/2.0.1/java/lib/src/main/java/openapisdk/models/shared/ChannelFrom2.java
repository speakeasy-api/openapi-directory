package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChannelFrom2
 * Connect to a Phone (PSTN) number
**/
public class ChannelFrom2 {
    @JsonProperty("number")
    public String number;
    public ChannelFrom2 withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ChannelFrom2 withType(String type) {
        this.type = type;
        return this;
    }
}