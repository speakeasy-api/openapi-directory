package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteParameter200ApplicationJsonData
 * Parameters
**/
public class DeleteParameter200ApplicationJsonData {
    @JsonProperty("parameters")
    public openapisdk.models.shared.Parameter[] parameters;
    public DeleteParameter200ApplicationJsonData withParameters(openapisdk.models.shared.Parameter[] parameters) {
        this.parameters = parameters;
        return this;
    }
}