package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FilterAdvancedDetails
 * Details for the filter of the type ADVANCED.
**/
public class FilterAdvancedDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caseSensitive")
    public Boolean caseSensitive;
    public FilterAdvancedDetails withCaseSensitive(Boolean caseSensitive) {
        this.caseSensitive = caseSensitive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extractA")
    public String extractA;
    public FilterAdvancedDetails withExtractA(String extractA) {
        this.extractA = extractA;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extractB")
    public String extractB;
    public FilterAdvancedDetails withExtractB(String extractB) {
        this.extractB = extractB;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldA")
    public String fieldA;
    public FilterAdvancedDetails withFieldA(String fieldA) {
        this.fieldA = fieldA;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldAIndex")
    public Integer fieldAIndex;
    public FilterAdvancedDetails withFieldAIndex(Integer fieldAIndex) {
        this.fieldAIndex = fieldAIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldARequired")
    public Boolean fieldARequired;
    public FilterAdvancedDetails withFieldARequired(Boolean fieldARequired) {
        this.fieldARequired = fieldARequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldB")
    public String fieldB;
    public FilterAdvancedDetails withFieldB(String fieldB) {
        this.fieldB = fieldB;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldBIndex")
    public Integer fieldBIndex;
    public FilterAdvancedDetails withFieldBIndex(Integer fieldBIndex) {
        this.fieldBIndex = fieldBIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldBRequired")
    public Boolean fieldBRequired;
    public FilterAdvancedDetails withFieldBRequired(Boolean fieldBRequired) {
        this.fieldBRequired = fieldBRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputConstructor")
    public String outputConstructor;
    public FilterAdvancedDetails withOutputConstructor(String outputConstructor) {
        this.outputConstructor = outputConstructor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputToField")
    public String outputToField;
    public FilterAdvancedDetails withOutputToField(String outputToField) {
        this.outputToField = outputToField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputToFieldIndex")
    public Integer outputToFieldIndex;
    public FilterAdvancedDetails withOutputToFieldIndex(Integer outputToFieldIndex) {
        this.outputToFieldIndex = outputToFieldIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overrideOutputField")
    public Boolean overrideOutputField;
    public FilterAdvancedDetails withOverrideOutputField(Boolean overrideOutputField) {
        this.overrideOutputField = overrideOutputField;
        return this;
    }
}