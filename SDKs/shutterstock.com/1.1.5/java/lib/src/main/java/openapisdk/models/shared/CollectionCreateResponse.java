package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CollectionCreateResponse
 * Collection creation response
**/
public class CollectionCreateResponse {
    @JsonProperty("id")
    public String id;
    public CollectionCreateResponse withId(String id) {
        this.id = id;
        return this;
    }
}