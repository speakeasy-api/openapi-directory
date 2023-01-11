package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NegativeKeywordListInput
 * A list of negative keywords used for targeting.
**/
public class NegativeKeywordListInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public NegativeKeywordListInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}