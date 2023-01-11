package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostApplicationChargeRequestBodyApplicationCharge {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("application_charge_source_id")
    public String applicationChargeSourceId;
    public PostApplicationChargeRequestBodyApplicationCharge withApplicationChargeSourceId(String applicationChargeSourceId) {
        this.applicationChargeSourceId = applicationChargeSourceId;
        return this;
    }
}