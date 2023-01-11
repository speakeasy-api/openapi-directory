package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateParameter200ApplicationJsonData
 * Parameters
**/
public class CreateParameter200ApplicationJsonData {
    @JsonProperty("parameters")
    public openapisdk.models.shared.Parameter[] parameters;
    public CreateParameter200ApplicationJsonData withParameters(openapisdk.models.shared.Parameter[] parameters) {
        this.parameters = parameters;
        return this;
    }
}