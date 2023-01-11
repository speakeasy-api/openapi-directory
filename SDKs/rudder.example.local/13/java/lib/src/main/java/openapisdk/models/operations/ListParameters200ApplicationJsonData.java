package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListParameters200ApplicationJsonData
 * Parameters
**/
public class ListParameters200ApplicationJsonData {
    @JsonProperty("parameters")
    public openapisdk.models.shared.Parameter[] parameters;
    public ListParameters200ApplicationJsonData withParameters(openapisdk.models.shared.Parameter[] parameters) {
        this.parameters = parameters;
        return this;
    }
}