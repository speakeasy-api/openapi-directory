package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PodcastLookingForField {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cohosts")
    public Boolean cohosts;
    public PodcastLookingForField withCohosts(Boolean cohosts) {
        this.cohosts = cohosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cross_promotion")
    public Boolean crossPromotion;
    public PodcastLookingForField withCrossPromotion(Boolean crossPromotion) {
        this.crossPromotion = crossPromotion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guests")
    public Boolean guests;
    public PodcastLookingForField withGuests(Boolean guests) {
        this.guests = guests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sponsors")
    public Boolean sponsors;
    public PodcastLookingForField withSponsors(Boolean sponsors) {
        this.sponsors = sponsors;
        return this;
    }
}