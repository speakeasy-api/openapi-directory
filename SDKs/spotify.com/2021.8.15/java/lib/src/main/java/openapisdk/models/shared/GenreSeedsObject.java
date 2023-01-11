package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GenreSeedsObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genres")
    public String[] genres;
    public GenreSeedsObject withGenres(String[] genres) {
        this.genres = genres;
        return this;
    }
}