package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetListsFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bestsellers-date")
    public OffsetDateTime bestsellersDate;
    public GetListsFormatQueryParams withBestsellersDate(OffsetDateTime bestsellersDate) {
        this.bestsellersDate = bestsellersDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date")
    public String date;
    public GetListsFormatQueryParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isbn")
    public String isbn;
    public GetListsFormatQueryParams withIsbn(String isbn) {
        this.isbn = isbn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=list")
    public String list;
    public GetListsFormatQueryParams withList(String list) {
        this.list = list;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetListsFormatQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=published-date")
    public String publishedDate;
    public GetListsFormatQueryParams withPublishedDate(String publishedDate) {
        this.publishedDate = publishedDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rank")
    public Long rank;
    public GetListsFormatQueryParams withRank(Long rank) {
        this.rank = rank;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rank-last-week")
    public Long rankLastWeek;
    public GetListsFormatQueryParams withRankLastWeek(Long rankLastWeek) {
        this.rankLastWeek = rankLastWeek;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort-order")
    public GetListsFormatSortOrderEnum sortOrder;
    public GetListsFormatQueryParams withSortOrder(GetListsFormatSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=weeks-on-list")
    public Long weeksOnList;
    public GetListsFormatQueryParams withWeeksOnList(Long weeksOnList) {
        this.weeksOnList = weeksOnList;
        return this;
    }
}