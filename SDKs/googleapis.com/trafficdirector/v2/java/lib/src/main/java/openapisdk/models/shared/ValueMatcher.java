package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ValueMatcher
 * Specifies the way to match a ProtobufWkt::Value. Primitive values and ListValue are supported. StructValue is not supported and is always not matched. [#next-free-field: 7]
**/
public class ValueMatcher {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boolMatch")
    public Boolean boolMatch;
    public ValueMatcher withBoolMatch(Boolean boolMatch) {
        this.boolMatch = boolMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doubleMatch")
    public DoubleMatcher doubleMatch;
    public ValueMatcher withDoubleMatch(DoubleMatcher doubleMatch) {
        this.doubleMatch = doubleMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listMatch")
    public ListMatcher listMatch;
    public ValueMatcher withListMatch(ListMatcher listMatch) {
        this.listMatch = listMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nullMatch")
    public java.util.Map<String, Object> nullMatch;
    public ValueMatcher withNullMatch(java.util.Map<String, Object> nullMatch) {
        this.nullMatch = nullMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("presentMatch")
    public Boolean presentMatch;
    public ValueMatcher withPresentMatch(Boolean presentMatch) {
        this.presentMatch = presentMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringMatch")
    public StringMatcher stringMatch;
    public ValueMatcher withStringMatch(StringMatcher stringMatch) {
        this.stringMatch = stringMatch;
        return this;
    }
}