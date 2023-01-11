package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Pension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Pension")
    public PensionPension pension;
    public Pension withPension(PensionPension pension) {
        this.pension = pension;
        return this;
    }
}