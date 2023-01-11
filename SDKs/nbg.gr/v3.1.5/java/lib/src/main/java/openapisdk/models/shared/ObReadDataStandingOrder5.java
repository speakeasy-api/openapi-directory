package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObReadDataStandingOrder5 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StandingOrder")
    public ObStandingOrder5[] standingOrder;
    public ObReadDataStandingOrder5 withStandingOrder(ObStandingOrder5[] standingOrder) {
        this.standingOrder = standingOrder;
        return this;
    }
}