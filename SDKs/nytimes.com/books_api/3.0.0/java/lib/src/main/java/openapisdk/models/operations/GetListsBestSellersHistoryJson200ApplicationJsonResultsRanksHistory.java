package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asterisk")
    public Long asterisk;
    public GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory withAsterisk(Long asterisk) {
        this.asterisk = asterisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bestsellers_date")
    public String bestsellersDate;
    public GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory withBestsellersDate(String bestsellersDate) {
        this.bestsellersDate = bestsellersDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dagger")
    public Long dagger;
    public GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory withDagger(Long dagger) {
        this.dagger = dagger;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("list_name")
    public String listName;
    public GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory withListName(String listName) {
        this.listName = listName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_isbn10")
    public String primaryIsbn10;
    public GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory withPrimaryIsbn10(String primaryIsbn10) {
        this.primaryIsbn10 = primaryIsbn10;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_isbn13")
    public String primaryIsbn13;
    public GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory withPrimaryIsbn13(String primaryIsbn13) {
        this.primaryIsbn13 = primaryIsbn13;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published_date")
    public String publishedDate;
    public GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory withPublishedDate(String publishedDate) {
        this.publishedDate = publishedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rank")
    public Long rank;
    public GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory withRank(Long rank) {
        this.rank = rank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ranks_last_week")
    public Object ranksLastWeek;
    public GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory withRanksLastWeek(Object ranksLastWeek) {
        this.ranksLastWeek = ranksLastWeek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weeks_on_list")
    public Long weeksOnList;
    public GetListsBestSellersHistoryJson200ApplicationJsonResultsRanksHistory withWeeksOnList(Long weeksOnList) {
        this.weeksOnList = weeksOnList;
        return this;
    }
}