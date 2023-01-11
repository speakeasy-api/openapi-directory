package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExposedApi
 * The Open API configuration for your service (if one)
**/
public class ExposedApi {
    @JsonProperty("exposeApi")
    public Boolean exposeApi;
    public ExposedApi withExposeApi(Boolean exposeApi) {
        this.exposeApi = exposeApi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openApiDescriptorUrl")
    public String openApiDescriptorUrl;
    public ExposedApi withOpenApiDescriptorUrl(String openApiDescriptorUrl) {
        this.openApiDescriptorUrl = openApiDescriptorUrl;
        return this;
    }
}