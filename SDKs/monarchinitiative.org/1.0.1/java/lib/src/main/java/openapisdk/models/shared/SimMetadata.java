package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SimMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_max_ic")
    public Double maxMaxIc;
    public SimMetadata withMaxMaxIc(Double maxMaxIc) {
        this.maxMaxIc = maxMaxIc;
        return this;
    }
}