package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApiSubInformations200ApplicationJsonData {
    @JsonProperty("availableVersions")
    public openapisdk.models.shared.ApiVersions[] availableVersions;
    public ApiSubInformations200ApplicationJsonData withAvailableVersions(openapisdk.models.shared.ApiVersions[] availableVersions) {
        this.availableVersions = availableVersions;
        return this;
    }
    @JsonProperty("documentation")
    public String documentation;
    public ApiSubInformations200ApplicationJsonData withDocumentation(String documentation) {
        this.documentation = documentation;
        return this;
    }
    @JsonProperty("endpoints")
    public openapisdk.models.shared.ApiEndpoints[][] endpoints;
    public ApiSubInformations200ApplicationJsonData withEndpoints(openapisdk.models.shared.ApiEndpoints[][] endpoints) {
        this.endpoints = endpoints;
        return this;
    }
}