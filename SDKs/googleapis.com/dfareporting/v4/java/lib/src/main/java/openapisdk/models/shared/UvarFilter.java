package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UvarFilter
 * Defines the filtering on a single uvar.
**/
public class UvarFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complement")
    public Boolean complement;
    public UvarFilter withComplement(Boolean complement) {
        this.complement = complement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public String index;
    public UvarFilter withIndex(String index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public UvarFilter withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("match")
    public UvarFilterMatchEnum match;
    public UvarFilter withMatch(UvarFilterMatchEnum match) {
        this.match = match;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public UvarFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}