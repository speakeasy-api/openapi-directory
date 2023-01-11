package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SearchEntitiesRequest
 * Search entity request data
**/
public class SearchEntitiesRequest {
    @JsonProperty("text")
    public String text;
    public SearchEntitiesRequest withText(String text) {
        this.text = text;
        return this;
    }
}