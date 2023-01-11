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
    @JsonProperty("name")
    public String name;
    public Attribute withName(String name) {
        this.name = name;
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
    @JsonProperty("uriValues")
    public UriAttributeValue[] uriValues;
    public Attribute withUriValues(UriAttributeValue[] uriValues) {
        this.uriValues = uriValues;
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