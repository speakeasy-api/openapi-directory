package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Field
 * Message contains EntityType's Field metadata.
**/
public class Field {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalDetails")
    public java.util.Map<String, Object> additionalDetails;
    public Field withAdditionalDetails(java.util.Map<String, Object> additionalDetails) {
        this.additionalDetails = additionalDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataType")
    public FieldDataTypeEnum dataType;
    public Field withDataType(FieldDataTypeEnum dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultValue")
    public Object defaultValue;
    public Field withDefaultValue(Object defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Field withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public Boolean key;
    public Field withKey(Boolean key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Field withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nullable")
    public Boolean nullable;
    public Field withNullable(Boolean nullable) {
        this.nullable = nullable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reference")
    public Reference reference;
    public Field withReference(Reference reference) {
        this.reference = reference;
        return this;
    }
}