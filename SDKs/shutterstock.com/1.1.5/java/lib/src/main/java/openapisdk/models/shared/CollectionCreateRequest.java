package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CollectionCreateRequest
 * Collection creation request
**/
public class CollectionCreateRequest {
    @JsonProperty("name")
    public String name;
    public CollectionCreateRequest withName(String name) {
        this.name = name;
        return this;
    }
}