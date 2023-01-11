package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVodAlt1RequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accepted_currencies")
    public CreateVodAlt1RequestBodyAcceptedCurrenciesEnum acceptedCurrencies;
    public CreateVodAlt1RequestBody withAcceptedCurrencies(CreateVodAlt1RequestBodyAcceptedCurrenciesEnum acceptedCurrencies) {
        this.acceptedCurrencies = acceptedCurrencies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buy")
    public CreateVodAlt1RequestBodyBuy buy;
    public CreateVodAlt1RequestBody withBuy(CreateVodAlt1RequestBodyBuy buy) {
        this.buy = buy;
        return this;
    }
    @JsonProperty("content_rating")
    public CreateVodAlt1RequestBodyContentRatingEnum contentRating;
    public CreateVodAlt1RequestBody withContentRating(CreateVodAlt1RequestBodyContentRatingEnum contentRating) {
        this.contentRating = contentRating;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public CreateVodAlt1RequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain_link")
    public String domainLink;
    public CreateVodAlt1RequestBody withDomainLink(String domainLink) {
        this.domainLink = domainLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("episodes")
    public CreateVodAlt1RequestBodyEpisodes episodes;
    public CreateVodAlt1RequestBody withEpisodes(CreateVodAlt1RequestBodyEpisodes episodes) {
        this.episodes = episodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public CreateVodAlt1RequestBody withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateVodAlt1RequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rent")
    public CreateVodAlt1RequestBodyRent rent;
    public CreateVodAlt1RequestBody withRent(CreateVodAlt1RequestBodyRent rent) {
        this.rent = rent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscription")
    public CreateVodAlt1RequestBodySubscription subscription;
    public CreateVodAlt1RequestBody withSubscription(CreateVodAlt1RequestBodySubscription subscription) {
        this.subscription = subscription;
        return this;
    }
    @JsonProperty("type")
    public CreateVodAlt1RequestBodyTypeEnum type;
    public CreateVodAlt1RequestBody withType(CreateVodAlt1RequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}