package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Attributes
 * A set of attributes as key-value pairs.
**/
public class Attributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeMap")
    public java.util.Map<String, AttributeValue> attributeMap;
    public Attributes withAttributeMap(java.util.Map<String, AttributeValue> attributeMap) {
        this.attributeMap = attributeMap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droppedAttributesCount")
    public Integer droppedAttributesCount;
    public Attributes withDroppedAttributesCount(Integer droppedAttributesCount) {
        this.droppedAttributesCount = droppedAttributesCount;
        return this;
    }
}