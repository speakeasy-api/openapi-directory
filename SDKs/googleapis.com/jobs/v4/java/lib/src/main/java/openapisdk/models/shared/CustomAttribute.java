package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomAttribute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterable")
    public Boolean filterable;
    public CustomAttribute withFilterable(Boolean filterable) {
        this.filterable = filterable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywordSearchable")
    public Boolean keywordSearchable;
    public CustomAttribute withKeywordSearchable(Boolean keywordSearchable) {
        this.keywordSearchable = keywordSearchable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longValues")
    public String[] longValues;
    public CustomAttribute withLongValues(String[] longValues) {
        this.longValues = longValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringValues")
    public String[] stringValues;
    public CustomAttribute withStringValues(String[] stringValues) {
        this.stringValues = stringValues;
        return this;
    }
}