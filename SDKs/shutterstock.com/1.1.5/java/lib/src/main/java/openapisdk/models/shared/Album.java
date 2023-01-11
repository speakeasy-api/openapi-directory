package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Album
 * Album metadata
**/
public class Album {
    @JsonProperty("id")
    public String id;
    public Album withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public Album withTitle(String title) {
        this.title = title;
        return this;
    }
}