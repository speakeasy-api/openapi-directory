package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateParameter200ApplicationJsonData
 * Parameters
**/
public class UpdateParameter200ApplicationJsonData {
    @JsonProperty("parameters")
    public openapisdk.models.shared.Parameter[] parameters;
    public UpdateParameter200ApplicationJsonData withParameters(openapisdk.models.shared.Parameter[] parameters) {
        this.parameters = parameters;
        return this;
    }
}