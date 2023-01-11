package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObjectToken {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataType")
    public ObjectTokenDataTypeEnum dataType;
    public ObjectToken withDataType(ObjectTokenDataTypeEnum dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public ObjectToken withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ObjectToken withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public ObjectToken withValue(String value) {
        this.value = value;
        return this;
    }
}