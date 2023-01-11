package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetListsFormat200ApplicationJsonResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amazon_product_url")
    public String amazonProductUrl;
    public GetListsFormat200ApplicationJsonResults withAmazonProductUrl(String amazonProductUrl) {
        this.amazonProductUrl = amazonProductUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asterisk")
    public Long asterisk;
    public GetListsFormat200ApplicationJsonResults withAsterisk(Long asterisk) {
        this.asterisk = asterisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bestsellers_date")
    public String bestsellersDate;
    public GetListsFormat200ApplicationJsonResults withBestsellersDate(String bestsellersDate) {
        this.bestsellersDate = bestsellersDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("book_details")
    public GetListsFormat200ApplicationJsonResultsBookDetails[] bookDetails;
    public GetListsFormat200ApplicationJsonResults withBookDetails(GetListsFormat200ApplicationJsonResultsBookDetails[] bookDetails) {
        this.bookDetails = bookDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dagger")
    public Long dagger;
    public GetListsFormat200ApplicationJsonResults withDagger(Long dagger) {
        this.dagger = dagger;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public GetListsFormat200ApplicationJsonResults withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isbns")
    public GetListsFormat200ApplicationJsonResultsIsbns[] isbns;
    public GetListsFormat200ApplicationJsonResults withIsbns(GetListsFormat200ApplicationJsonResultsIsbns[] isbns) {
        this.isbns = isbns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("list_name")
    public String listName;
    public GetListsFormat200ApplicationJsonResults withListName(String listName) {
        this.listName = listName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published_date")
    public String publishedDate;
    public GetListsFormat200ApplicationJsonResults withPublishedDate(String publishedDate) {
        this.publishedDate = publishedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rank")
    public Long rank;
    public GetListsFormat200ApplicationJsonResults withRank(Long rank) {
        this.rank = rank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rank_last_week")
    public Long rankLastWeek;
    public GetListsFormat200ApplicationJsonResults withRankLastWeek(Long rankLastWeek) {
        this.rankLastWeek = rankLastWeek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviews")
    public GetListsFormat200ApplicationJsonResultsReviews[] reviews;
    public GetListsFormat200ApplicationJsonResults withReviews(GetListsFormat200ApplicationJsonResultsReviews[] reviews) {
        this.reviews = reviews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weeks_on_list")
    public Long weeksOnList;
    public GetListsFormat200ApplicationJsonResults withWeeksOnList(Long weeksOnList) {
        this.weeksOnList = weeksOnList;
        return this;
    }
}