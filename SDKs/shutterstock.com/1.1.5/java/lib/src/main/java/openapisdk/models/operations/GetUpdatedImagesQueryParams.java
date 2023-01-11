package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdatedImagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_date")
    public LocalDate endDate;
    public GetUpdatedImagesQueryParams withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interval")
    public String interval;
    public GetUpdatedImagesQueryParams withInterval(String interval) {
        this.interval = interval;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetUpdatedImagesQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetUpdatedImagesQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetUpdatedImagesSortEnum sort;
    public GetUpdatedImagesQueryParams withSort(GetUpdatedImagesSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_date")
    public LocalDate startDate;
    public GetUpdatedImagesQueryParams withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public GetUpdatedImagesTypeEnum[] type;
    public GetUpdatedImagesQueryParams withType(GetUpdatedImagesTypeEnum[] type) {
        this.type = type;
        return this;
    }
}