package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApiGeneralInformations200ApplicationJsonData {
    @JsonProperty("availableVersions")
    public openapisdk.models.shared.ApiVersions[] availableVersions;
    public ApiGeneralInformations200ApplicationJsonData withAvailableVersions(openapisdk.models.shared.ApiVersions[] availableVersions) {
        this.availableVersions = availableVersions;
        return this;
    }
    @JsonProperty("documentation")
    public String documentation;
    public ApiGeneralInformations200ApplicationJsonData withDocumentation(String documentation) {
        this.documentation = documentation;
        return this;
    }
    @JsonProperty("endpoints")
    public openapisdk.models.shared.ApiEndpoints[][] endpoints;
    public ApiGeneralInformations200ApplicationJsonData withEndpoints(openapisdk.models.shared.ApiEndpoints[][] endpoints) {
        this.endpoints = endpoints;
        return this;
    }
}