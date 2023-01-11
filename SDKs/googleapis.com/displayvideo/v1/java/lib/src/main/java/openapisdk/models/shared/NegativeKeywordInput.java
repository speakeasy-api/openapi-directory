package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NegativeKeywordInput
 * A negatively targeted keyword that belongs to a negative keyword list.
**/
public class NegativeKeywordInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywordValue")
    public String keywordValue;
    public NegativeKeywordInput withKeywordValue(String keywordValue) {
        this.keywordValue = keywordValue;
        return this;
    }
}