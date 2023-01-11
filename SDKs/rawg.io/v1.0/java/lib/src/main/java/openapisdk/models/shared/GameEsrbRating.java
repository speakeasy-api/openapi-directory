package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GameEsrbRating {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GameEsrbRating withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public GameEsrbRatingNameEnum name;
    public GameEsrbRating withName(GameEsrbRatingNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slug")
    public GameEsrbRatingSlugEnum slug;
    public GameEsrbRating withSlug(GameEsrbRatingSlugEnum slug) {
        this.slug = slug;
        return this;
    }
}