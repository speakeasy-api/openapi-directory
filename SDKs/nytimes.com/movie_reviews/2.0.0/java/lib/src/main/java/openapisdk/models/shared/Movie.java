package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Movie {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("byline")
    public String byline;
    public Movie withByline(String byline) {
        this.byline = byline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("critics_pick")
    public Long criticsPick;
    public Movie withCriticsPick(Long criticsPick) {
        this.criticsPick = criticsPick;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_updated")
    public String dateUpdated;
    public Movie withDateUpdated(String dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_title")
    public String displayTitle;
    public Movie withDisplayTitle(String displayTitle) {
        this.displayTitle = displayTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headline")
    public String headline;
    public Movie withHeadline(String headline) {
        this.headline = headline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public MovieLink link;
    public Movie withLink(MovieLink link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mpaa_rating")
    public String mpaaRating;
    public Movie withMpaaRating(String mpaaRating) {
        this.mpaaRating = mpaaRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multimedia")
    public MovieMultimedia multimedia;
    public Movie withMultimedia(MovieMultimedia multimedia) {
        this.multimedia = multimedia;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("opening_date")
    public String openingDate;
    public Movie withOpeningDate(String openingDate) {
        this.openingDate = openingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publication_date")
    public String publicationDate;
    public Movie withPublicationDate(String publicationDate) {
        this.publicationDate = publicationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary_short")
    public String summaryShort;
    public Movie withSummaryShort(String summaryShort) {
        this.summaryShort = summaryShort;
        return this;
    }
}