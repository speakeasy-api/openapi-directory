package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Person {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("games_count")
    public Long gamesCount;
    public Person withGamesCount(Long gamesCount) {
        this.gamesCount = gamesCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Person withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public Person withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_background")
    public String imageBackground;
    public Person withImageBackground(String imageBackground) {
        this.imageBackground = imageBackground;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Person withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slug")
    public String slug;
    public Person withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}