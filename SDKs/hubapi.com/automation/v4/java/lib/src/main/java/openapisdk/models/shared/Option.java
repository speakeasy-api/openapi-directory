package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Option
 * An option for a field value.
**/
public class Option {
    @JsonProperty("description")
    public String description;
    public Option withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("displayOrder")
    public Integer displayOrder;
    public Option withDisplayOrder(Integer displayOrder) {
        this.displayOrder = displayOrder;
        return this;
    }
    @JsonProperty("doubleData")
    public Double doubleData;
    public Option withDoubleData(Double doubleData) {
        this.doubleData = doubleData;
        return this;
    }
    @JsonProperty("hidden")
    public Boolean hidden;
    public Option withHidden(Boolean hidden) {
        this.hidden = hidden;
        return this;
    }
    @JsonProperty("label")
    public String label;
    public Option withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("readOnly")
    public Boolean readOnly;
    public Option withReadOnly(Boolean readOnly) {
        this.readOnly = readOnly;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public Option withValue(String value) {
        this.value = value;
        return this;
    }
}