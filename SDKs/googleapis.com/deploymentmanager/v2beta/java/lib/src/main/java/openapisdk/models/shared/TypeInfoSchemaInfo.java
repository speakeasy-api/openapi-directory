package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TypeInfoSchemaInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("input")
    public String input;
    public TypeInfoSchemaInfo withInput(String input) {
        this.input = input;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("output")
    public String output;
    public TypeInfoSchemaInfo withOutput(String output) {
        this.output = output;
        return this;
    }
}