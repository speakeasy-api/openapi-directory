package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrivateData
 * Buyers are allowed to store certain types of private data in a proposal/deal.
**/
public class PrivateData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referenceId")
    public String referenceId;
    public PrivateData withReferenceId(String referenceId) {
        this.referenceId = referenceId;
        return this;
    }
}