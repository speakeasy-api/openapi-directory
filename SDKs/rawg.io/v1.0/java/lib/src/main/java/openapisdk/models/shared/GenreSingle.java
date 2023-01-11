package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GenreSingle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GenreSingle withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("games_count")
    public Long gamesCount;
    public GenreSingle withGamesCount(Long gamesCount) {
        this.gamesCount = gamesCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GenreSingle withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_background")
    public String imageBackground;
    public GenreSingle withImageBackground(String imageBackground) {
        this.imageBackground = imageBackground;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GenreSingle withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slug")
    public String slug;
    public GenreSingle withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}