package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApiInformations200ApplicationJsonData {
    @JsonProperty("documentation")
    public String documentation;
    public ApiInformations200ApplicationJsonData withDocumentation(String documentation) {
        this.documentation = documentation;
        return this;
    }
    @JsonProperty("endpointName")
    public String endpointName;
    public ApiInformations200ApplicationJsonData withEndpointName(String endpointName) {
        this.endpointName = endpointName;
        return this;
    }
    @JsonProperty("endpoints")
    public ApiInformations200ApplicationJsonDataEndpoints[] endpoints;
    public ApiInformations200ApplicationJsonData withEndpoints(ApiInformations200ApplicationJsonDataEndpoints[] endpoints) {
        this.endpoints = endpoints;
        return this;
    }
}