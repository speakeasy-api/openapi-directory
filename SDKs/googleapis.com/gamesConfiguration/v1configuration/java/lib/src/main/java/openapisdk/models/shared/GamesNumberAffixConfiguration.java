package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GamesNumberAffixConfiguration
 * A number affix resource.
**/
public class GamesNumberAffixConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("few")
    public LocalizedStringBundle few;
    public GamesNumberAffixConfiguration withFew(LocalizedStringBundle few) {
        this.few = few;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("many")
    public LocalizedStringBundle many;
    public GamesNumberAffixConfiguration withMany(LocalizedStringBundle many) {
        this.many = many;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("one")
    public LocalizedStringBundle one;
    public GamesNumberAffixConfiguration withOne(LocalizedStringBundle one) {
        this.one = one;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("other")
    public LocalizedStringBundle other;
    public GamesNumberAffixConfiguration withOther(LocalizedStringBundle other) {
        this.other = other;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("two")
    public LocalizedStringBundle two;
    public GamesNumberAffixConfiguration withTwo(LocalizedStringBundle two) {
        this.two = two;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zero")
    public LocalizedStringBundle zero;
    public GamesNumberAffixConfiguration withZero(LocalizedStringBundle zero) {
        this.zero = zero;
        return this;
    }
}