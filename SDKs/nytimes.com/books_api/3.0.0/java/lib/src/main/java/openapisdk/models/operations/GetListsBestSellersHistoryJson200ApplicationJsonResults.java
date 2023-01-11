package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetListsBestSellersHistoryJson200ApplicationJsonResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("age_group")
    public String ageGroup;
    public GetListsBestSellersHistoryJson200ApplicationJsonResults withAgeGroup(String ageGroup) {
        this.ageGroup = ageGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public String author;
    public GetListsBestSellersHistoryJson200ApplicationJsonResults withAuthor(String author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor")
    public String contributor;
    public GetListsBestSellersHistoryJson200ApplicationJsonResults withContributor(String contributor) {
        this.contributor = contributor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_note")
    public String contributorNote;
    public GetListsBestSellersHistoryJson200ApplicationJsonResults withContributorNote(String contributorNote) {
        this.contributorNote = contributorNote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetListsBestSellersHistoryJson200ApplicationJsonResults withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isbns")
    public GetListsBestSellersHistoryJson200ApplicationJsonResultsIsbns[] isbns;
    public GetListsBestSellersHistoryJson200ApplicationJsonResults withIsbns(GetListsBestSellersHistoryJson200ApplicationJsonResultsIsbns[] isbns) {
        this.isbns = isbns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Long price;
    public GetListsBestSellersHistoryJson200ApplicationJsonResults withPrice(Long price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public String publisher;
    public GetListsBestSellersHistoryJson200ApplicationJsonResults withPublisher(String publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ranks_history")
    public GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory[] ranksHistory;
    public GetListsBestSellersHistoryJson200ApplicationJsonResults withRanksHistory(GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory[] ranksHistory) {
        this.ranksHistory = ranksHistory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviews")
    public GetListsBestSellersHistoryJson200ApplicationJsonResultsReviews[] reviews;
    public GetListsBestSellersHistoryJson200ApplicationJsonResults withReviews(GetListsBestSellersHistoryJson200ApplicationJsonResultsReviews[] reviews) {
        this.reviews = reviews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GetListsBestSellersHistoryJson200ApplicationJsonResults withTitle(String title) {
        this.title = title;
        return this;
    }
}