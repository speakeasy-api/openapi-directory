package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Suffix
 * Short Dynamic Link suffix.
**/
public class Suffix {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customSuffix")
    public String customSuffix;
    public Suffix withCustomSuffix(String customSuffix) {
        this.customSuffix = customSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("option")
    public SuffixOptionEnum option;
    public Suffix withOption(SuffixOptionEnum option) {
        this.option = option;
        return this;
    }
}