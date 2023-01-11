package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Game {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("added")
    public Long added;
    public Game withAdded(Long added) {
        this.added = added;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("added_by_status")
    public java.util.Map<String, Object> addedByStatus;
    public Game withAddedByStatus(java.util.Map<String, Object> addedByStatus) {
        this.addedByStatus = addedByStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("background_image")
    public String backgroundImage;
    public Game withBackgroundImage(String backgroundImage) {
        this.backgroundImage = backgroundImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("esrb_rating")
    public GameEsrbRating esrbRating;
    public Game withEsrbRating(GameEsrbRating esrbRating) {
        this.esrbRating = esrbRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Game withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metacritic")
    public Long metacritic;
    public Game withMetacritic(Long metacritic) {
        this.metacritic = metacritic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Game withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platforms")
    public GamePlatforms[] platforms;
    public Game withPlatforms(GamePlatforms[] platforms) {
        this.platforms = platforms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playtime")
    public Long playtime;
    public Game withPlaytime(Long playtime) {
        this.playtime = playtime;
        return this;
    }
    @JsonProperty("rating")
    public Double rating;
    public Game withRating(Double rating) {
        this.rating = rating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rating_top")
    public Long ratingTop;
    public Game withRatingTop(Long ratingTop) {
        this.ratingTop = ratingTop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratings")
    public java.util.Map<String, Object> ratings;
    public Game withRatings(java.util.Map<String, Object> ratings) {
        this.ratings = ratings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratings_count")
    public Long ratingsCount;
    public Game withRatingsCount(Long ratingsCount) {
        this.ratingsCount = ratingsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("released")
    public LocalDate released;
    public Game withReleased(LocalDate released) {
        this.released = released;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviews_text_count")
    public String reviewsTextCount;
    public Game withReviewsTextCount(String reviewsTextCount) {
        this.reviewsTextCount = reviewsTextCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slug")
    public String slug;
    public Game withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suggestions_count")
    public Long suggestionsCount;
    public Game withSuggestionsCount(Long suggestionsCount) {
        this.suggestionsCount = suggestionsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tba")
    public Boolean tba;
    public Game withTba(Boolean tba) {
        this.tba = tba;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated")
    public OffsetDateTime updated;
    public Game withUpdated(OffsetDateTime updated) {
        this.updated = updated;
        return this;
    }
}