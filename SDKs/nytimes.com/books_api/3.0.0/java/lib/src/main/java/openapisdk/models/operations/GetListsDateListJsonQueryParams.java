package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetListsDateListJsonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bestsellers-date")
    public String bestsellersDate;
    public GetListsDateListJsonQueryParams withBestsellersDate(String bestsellersDate) {
        this.bestsellersDate = bestsellersDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isbn")
    public Long isbn;
    public GetListsDateListJsonQueryParams withIsbn(Long isbn) {
        this.isbn = isbn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=list-name")
    public String listName;
    public GetListsDateListJsonQueryParams withListName(String listName) {
        this.listName = listName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetListsDateListJsonQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=published-date")
    public OffsetDateTime publishedDate;
    public GetListsDateListJsonQueryParams withPublishedDate(OffsetDateTime publishedDate) {
        this.publishedDate = publishedDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rank")
    public String rank;
    public GetListsDateListJsonQueryParams withRank(String rank) {
        this.rank = rank;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rank-last-week")
    public Long rankLastWeek;
    public GetListsDateListJsonQueryParams withRankLastWeek(Long rankLastWeek) {
        this.rankLastWeek = rankLastWeek;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort-order")
    public GetListsDateListJsonSortOrderEnum sortOrder;
    public GetListsDateListJsonQueryParams withSortOrder(GetListsDateListJsonSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=weeks-on-list")
    public Long weeksOnList;
    public GetListsDateListJsonQueryParams withWeeksOnList(Long weeksOnList) {
        this.weeksOnList = weeksOnList;
        return this;
    }
}