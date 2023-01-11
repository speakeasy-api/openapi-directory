package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Attribute
 * A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes.
**/
public class Attribute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeId")
    public String attributeId;
    public Attribute withAttributeId(String attributeId) {
        this.attributeId = attributeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repeatedEnumValue")
    public RepeatedEnumAttributeValue repeatedEnumValue;
    public Attribute withRepeatedEnumValue(RepeatedEnumAttributeValue repeatedEnumValue) {
        this.repeatedEnumValue = repeatedEnumValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlValues")
    public UrlAttributeValue[] urlValues;
    public Attribute withUrlValues(UrlAttributeValue[] urlValues) {
        this.urlValues = urlValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueType")
    public AttributeValueTypeEnum valueType;
    public Attribute withValueType(AttributeValueTypeEnum valueType) {
        this.valueType = valueType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public Object[] values;
    public Attribute withValues(Object[] values) {
        this.values = values;
        return this;
    }
}