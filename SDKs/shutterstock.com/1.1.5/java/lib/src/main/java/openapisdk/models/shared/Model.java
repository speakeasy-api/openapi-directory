package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Model
 * Information about a human model or property that appears in media; used to search for assets that this model is in
**/
public class Model {
    @JsonProperty("id")
    public String id;
    public Model withId(String id) {
        this.id = id;
        return this;
    }
}