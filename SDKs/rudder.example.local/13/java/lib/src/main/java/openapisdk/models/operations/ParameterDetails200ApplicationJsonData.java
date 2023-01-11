package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ParameterDetails200ApplicationJsonData
 * Parameters
**/
public class ParameterDetails200ApplicationJsonData {
    @JsonProperty("parameters")
    public openapisdk.models.shared.Parameter[] parameters;
    public ParameterDetails200ApplicationJsonData withParameters(openapisdk.models.shared.Parameter[] parameters) {
        this.parameters = parameters;
        return this;
    }
}