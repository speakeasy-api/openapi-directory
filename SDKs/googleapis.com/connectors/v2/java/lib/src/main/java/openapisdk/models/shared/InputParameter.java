package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputParameter
 * Input Parameter message contains metadata about the parameters required for executing an Action.
**/
public class InputParameter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataType")
    public InputParameterDataTypeEnum dataType;
    public InputParameter withDataType(InputParameterDataTypeEnum dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultValue")
    public Object defaultValue;
    public InputParameter withDefaultValue(Object defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public InputParameter withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public InputParameter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nullable")
    public Boolean nullable;
    public InputParameter withNullable(Boolean nullable) {
        this.nullable = nullable;
        return this;
    }
}