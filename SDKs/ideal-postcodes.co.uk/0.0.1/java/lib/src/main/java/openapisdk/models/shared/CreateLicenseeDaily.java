package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLicenseeDaily {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Double limit;
    public CreateLicenseeDaily withLimit(Double limit) {
        this.limit = limit;
        return this;
    }
}