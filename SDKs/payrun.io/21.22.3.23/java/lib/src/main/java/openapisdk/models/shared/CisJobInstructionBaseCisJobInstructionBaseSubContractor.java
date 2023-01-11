package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CisJobInstructionBaseCisJobInstructionBaseSubContractor
 * The cis job instruction bases' sub contractors
**/
public class CisJobInstructionBaseCisJobInstructionBaseSubContractor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubContractor")
    public Object[] subContractor;
    public CisJobInstructionBaseCisJobInstructionBaseSubContractor withSubContractor(Object[] subContractor) {
        this.subContractor = subContractor;
        return this;
    }
}