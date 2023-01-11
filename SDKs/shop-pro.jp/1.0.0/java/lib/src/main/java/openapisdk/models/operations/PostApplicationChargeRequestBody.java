package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostApplicationChargeRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("application_charge")
    public PostApplicationChargeRequestBodyApplicationCharge applicationCharge;
    public PostApplicationChargeRequestBody withApplicationCharge(PostApplicationChargeRequestBodyApplicationCharge applicationCharge) {
        this.applicationCharge = applicationCharge;
        return this;
    }
}