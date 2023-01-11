package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PayoutIndividualV3 {
    @JsonProperty("name")
    public PayoutNameV3 name;
    public PayoutIndividualV3 withName(PayoutNameV3 name) {
        this.name = name;
        return this;
    }
}