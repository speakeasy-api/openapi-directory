package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateUsageChargeRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage_charge")
    public CreateUsageChargeRequestBodyUsageCharge usageCharge;
    public CreateUsageChargeRequestBody withUsageCharge(CreateUsageChargeRequestBodyUsageCharge usageCharge) {
        this.usageCharge = usageCharge;
        return this;
    }
}