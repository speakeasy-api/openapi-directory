package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LabelDescriptor
 * A description of a label.
**/
public class LabelDescriptor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public LabelDescriptor withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public LabelDescriptor withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueType")
    public LabelDescriptorValueTypeEnum valueType;
    public LabelDescriptor withValueType(LabelDescriptorValueTypeEnum valueType) {
        this.valueType = valueType;
        return this;
    }
}