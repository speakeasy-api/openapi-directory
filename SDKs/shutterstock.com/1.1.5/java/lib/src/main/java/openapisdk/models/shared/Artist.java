package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Artist
 * Metadata about the artist that created the media
**/
public class Artist {
    @JsonProperty("name")
    public String name;
    public Artist withName(String name) {
        this.name = name;
        return this;
    }
}