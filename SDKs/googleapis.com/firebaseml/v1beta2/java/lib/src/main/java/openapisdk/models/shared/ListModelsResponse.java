package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListModelsResponse
 * The response for list models
**/
public class ListModelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("models")
    public Model[] models;
    public ListModelsResponse withModels(Model[] models) {
        this.models = models;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListModelsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}