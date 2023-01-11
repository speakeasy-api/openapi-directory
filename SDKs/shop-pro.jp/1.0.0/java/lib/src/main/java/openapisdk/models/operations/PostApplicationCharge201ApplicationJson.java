package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostApplicationCharge201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("application_charge")
    public PostApplicationCharge201ApplicationJsonApplicationCharge applicationCharge;
    public PostApplicationCharge201ApplicationJson withApplicationCharge(PostApplicationCharge201ApplicationJsonApplicationCharge applicationCharge) {
        this.applicationCharge = applicationCharge;
        return this;
    }
}