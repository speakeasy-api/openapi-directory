package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LoyaltyPoints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LoyaltyPoints withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pointsValue")
    public String pointsValue;
    public LoyaltyPoints withPointsValue(String pointsValue) {
        this.pointsValue = pointsValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratio")
    public Double ratio;
    public LoyaltyPoints withRatio(Double ratio) {
        this.ratio = ratio;
        return this;
    }
}