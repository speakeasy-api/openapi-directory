package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubContractor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubContractor")
    public SubContractorSubContractor subContractor;
    public SubContractor withSubContractor(SubContractorSubContractor subContractor) {
        this.subContractor = subContractor;
        return this;
    }
}