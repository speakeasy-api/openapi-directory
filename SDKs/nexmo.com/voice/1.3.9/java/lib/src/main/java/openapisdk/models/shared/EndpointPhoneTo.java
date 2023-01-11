package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointPhoneTo
 * Connect to a Phone (PSTN) number
**/
public class EndpointPhoneTo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dtmfAnswer")
    public String dtmfAnswer;
    public EndpointPhoneTo withDtmfAnswer(String dtmfAnswer) {
        this.dtmfAnswer = dtmfAnswer;
        return this;
    }
    @JsonProperty("number")
    public String number;
    public EndpointPhoneTo withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public EndpointPhoneTo withType(String type) {
        this.type = type;
        return this;
    }
}