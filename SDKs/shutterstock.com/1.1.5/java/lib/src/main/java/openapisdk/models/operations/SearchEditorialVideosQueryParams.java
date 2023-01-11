package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchEditorialVideosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category")
    public String category;
    public SearchEditorialVideosQueryParams withCategory(String category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public SearchEditorialVideosQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public SearchEditorialVideosQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_end")
    public LocalDate dateEnd;
    public SearchEditorialVideosQueryParams withDateEnd(LocalDate dateEnd) {
        this.dateEnd = dateEnd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_start")
    public LocalDate dateStart;
    public SearchEditorialVideosQueryParams withDateStart(LocalDate dateStart) {
        this.dateStart = dateStart;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fps")
    public Double fps;
    public SearchEditorialVideosQueryParams withFps(Double fps) {
        this.fps = fps;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public SearchEditorialVideosQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public SearchEditorialVideosQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resolution")
    public SearchEditorialVideosResolutionEnum resolution;
    public SearchEditorialVideosQueryParams withResolution(SearchEditorialVideosResolutionEnum resolution) {
        this.resolution = resolution;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public SearchEditorialVideosSortEnum sort;
    public SearchEditorialVideosQueryParams withSort(SearchEditorialVideosSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supplier_code")
    public String[] supplierCode;
    public SearchEditorialVideosQueryParams withSupplierCode(String[] supplierCode) {
        this.supplierCode = supplierCode;
        return this;
    }
}