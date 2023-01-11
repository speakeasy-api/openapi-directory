package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdatedVideosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_date")
    public LocalDate endDate;
    public GetUpdatedVideosQueryParams withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interval")
    public String interval;
    public GetUpdatedVideosQueryParams withInterval(String interval) {
        this.interval = interval;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetUpdatedVideosQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetUpdatedVideosQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetUpdatedVideosSortEnum sort;
    public GetUpdatedVideosQueryParams withSort(GetUpdatedVideosSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_date")
    public LocalDate startDate;
    public GetUpdatedVideosQueryParams withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}