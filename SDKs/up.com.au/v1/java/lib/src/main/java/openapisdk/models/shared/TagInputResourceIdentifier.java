package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TagInputResourceIdentifier
 * Uniquely identifies a single tag in the API.
 * 
**/
public class TagInputResourceIdentifier {
    @JsonProperty("id")
    public String id;
    public TagInputResourceIdentifier withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public TagInputResourceIdentifier withType(String type) {
        this.type = type;
        return this;
    }
}