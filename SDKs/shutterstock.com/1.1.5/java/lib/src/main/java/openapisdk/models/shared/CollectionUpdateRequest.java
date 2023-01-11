package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CollectionUpdateRequest
 * Collection update request
**/
public class CollectionUpdateRequest {
    @JsonProperty("name")
    public String name;
    public CollectionUpdateRequest withName(String name) {
        this.name = name;
        return this;
    }
}