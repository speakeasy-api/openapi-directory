package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVodRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accepted_currencies")
    public CreateVodRequestBodyAcceptedCurrenciesEnum acceptedCurrencies;
    public CreateVodRequestBody withAcceptedCurrencies(CreateVodRequestBodyAcceptedCurrenciesEnum acceptedCurrencies) {
        this.acceptedCurrencies = acceptedCurrencies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buy")
    public CreateVodRequestBodyBuy buy;
    public CreateVodRequestBody withBuy(CreateVodRequestBodyBuy buy) {
        this.buy = buy;
        return this;
    }
    @JsonProperty("content_rating")
    public CreateVodRequestBodyContentRatingEnum contentRating;
    public CreateVodRequestBody withContentRating(CreateVodRequestBodyContentRatingEnum contentRating) {
        this.contentRating = contentRating;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public CreateVodRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain_link")
    public String domainLink;
    public CreateVodRequestBody withDomainLink(String domainLink) {
        this.domainLink = domainLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("episodes")
    public CreateVodRequestBodyEpisodes episodes;
    public CreateVodRequestBody withEpisodes(CreateVodRequestBodyEpisodes episodes) {
        this.episodes = episodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public CreateVodRequestBody withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateVodRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rent")
    public CreateVodRequestBodyRent rent;
    public CreateVodRequestBody withRent(CreateVodRequestBodyRent rent) {
        this.rent = rent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscription")
    public CreateVodRequestBodySubscription subscription;
    public CreateVodRequestBody withSubscription(CreateVodRequestBodySubscription subscription) {
        this.subscription = subscription;
        return this;
    }
    @JsonProperty("type")
    public CreateVodRequestBodyTypeEnum type;
    public CreateVodRequestBody withType(CreateVodRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}