package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CardDisplayProperty
 * Definition for a card display property.
**/
public class CardDisplayProperty {
    @JsonProperty("dataType")
    public CardDisplayPropertyDataTypeEnum dataType;
    public CardDisplayProperty withDataType(CardDisplayPropertyDataTypeEnum dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonProperty("label")
    public String label;
    public CardDisplayProperty withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CardDisplayProperty withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("options")
    public DisplayOption[] options;
    public CardDisplayProperty withOptions(DisplayOption[] options) {
        this.options = options;
        return this;
    }
}