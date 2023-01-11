package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Flag
 * A flag resource.
**/
public class Flag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedIntValues")
    public String[] allowedIntValues;
    public Flag withAllowedIntValues(String[] allowedIntValues) {
        this.allowedIntValues = allowedIntValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedStringValues")
    public String[] allowedStringValues;
    public Flag withAllowedStringValues(String[] allowedStringValues) {
        this.allowedStringValues = allowedStringValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliesTo")
    public FlagAppliesToEnum[] appliesTo;
    public Flag withAppliesTo(FlagAppliesToEnum[] appliesTo) {
        this.appliesTo = appliesTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inBeta")
    public Boolean inBeta;
    public Flag withInBeta(Boolean inBeta) {
        this.inBeta = inBeta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Flag withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxValue")
    public String maxValue;
    public Flag withMaxValue(String maxValue) {
        this.maxValue = maxValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minValue")
    public String minValue;
    public Flag withMinValue(String minValue) {
        this.minValue = minValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Flag withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requiresRestart")
    public Boolean requiresRestart;
    public Flag withRequiresRestart(Boolean requiresRestart) {
        this.requiresRestart = requiresRestart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public FlagTypeEnum type;
    public Flag withType(FlagTypeEnum type) {
        this.type = type;
        return this;
    }
}