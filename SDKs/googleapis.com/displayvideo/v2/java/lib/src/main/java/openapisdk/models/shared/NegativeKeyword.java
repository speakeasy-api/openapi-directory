package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NegativeKeyword
 * A negatively targeted keyword that belongs to a negative keyword list.
**/
public class NegativeKeyword {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywordValue")
    public String keywordValue;
    public NegativeKeyword withKeywordValue(String keywordValue) {
        this.keywordValue = keywordValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NegativeKeyword withName(String name) {
        this.name = name;
        return this;
    }
}