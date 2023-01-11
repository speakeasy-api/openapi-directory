package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GenreList
 * List of audio genres
**/
public class GenreList {
    @JsonProperty("data")
    public String[] data;
    public GenreList withData(String[] data) {
        this.data = data;
        return this;
    }
}