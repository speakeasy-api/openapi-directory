package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EndpointPhoneFrom
 * Connect to a Phone (PSTN) number
**/
public class EndpointPhoneFrom {
    @JsonProperty("number")
    public String number;
    public EndpointPhoneFrom withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public EndpointPhoneFrom withType(String type) {
        this.type = type;
        return this;
    }
}