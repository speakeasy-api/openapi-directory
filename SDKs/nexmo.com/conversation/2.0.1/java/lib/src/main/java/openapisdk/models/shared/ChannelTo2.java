package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelTo2
 * Connect to a Phone (PSTN) number
**/
public class ChannelTo2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dtmfAnswer")
    public String dtmfAnswer;
    public ChannelTo2 withDtmfAnswer(String dtmfAnswer) {
        this.dtmfAnswer = dtmfAnswer;
        return this;
    }
    @JsonProperty("number")
    public String number;
    public ChannelTo2 withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ChannelTo2 withType(String type) {
        this.type = type;
        return this;
    }
}