package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateUsageChargeRequestBodyUsageCharge {
    @JsonProperty("description")
    public String description;
    public CreateUsageChargeRequestBodyUsageCharge withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("point")
    public Long point;
    public CreateUsageChargeRequestBodyUsageCharge withPoint(Long point) {
        this.point = point;
        return this;
    }
}