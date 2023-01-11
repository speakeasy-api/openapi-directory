package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchEditorialImagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category")
    public String category;
    public SearchEditorialImagesQueryParams withCategory(String category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public SearchEditorialImagesQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public SearchEditorialImagesQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_end")
    public LocalDate dateEnd;
    public SearchEditorialImagesQueryParams withDateEnd(LocalDate dateEnd) {
        this.dateEnd = dateEnd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_start")
    public LocalDate dateStart;
    public SearchEditorialImagesQueryParams withDateStart(LocalDate dateStart) {
        this.dateStart = dateStart;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public SearchEditorialImagesQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public SearchEditorialImagesQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public SearchEditorialImagesSortEnum sort;
    public SearchEditorialImagesQueryParams withSort(SearchEditorialImagesSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supplier_code")
    public String[] supplierCode;
    public SearchEditorialImagesQueryParams withSupplierCode(String[] supplierCode) {
        this.supplierCode = supplierCode;
        return this;
    }
}