package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PopularLanguagePairs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pairs")
    public LanguagePair[] pairs;
    public PopularLanguagePairs withPairs(LanguagePair[] pairs) {
        this.pairs = pairs;
        return this;
    }
}