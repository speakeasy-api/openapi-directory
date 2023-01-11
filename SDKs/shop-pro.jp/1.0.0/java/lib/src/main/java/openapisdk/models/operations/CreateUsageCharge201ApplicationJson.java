package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateUsageCharge201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage_charge")
    public CreateUsageCharge201ApplicationJsonUsageCharge usageCharge;
    public CreateUsageCharge201ApplicationJson withUsageCharge(CreateUsageCharge201ApplicationJsonUsageCharge usageCharge) {
        this.usageCharge = usageCharge;
        return this;
    }
}