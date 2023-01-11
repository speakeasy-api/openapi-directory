package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetGenresResponse {
    @JsonProperty("genres")
    public Genre[] genres;
    public GetGenresResponse withGenres(Genre[] genres) {
        this.genres = genres;
        return this;
    }
}