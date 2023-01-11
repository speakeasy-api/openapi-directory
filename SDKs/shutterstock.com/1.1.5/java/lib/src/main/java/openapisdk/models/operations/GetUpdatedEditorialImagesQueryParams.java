package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdatedEditorialImagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public GetUpdatedEditorialImagesQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetUpdatedEditorialImagesQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_taken_end")
    public String dateTakenEnd;
    public GetUpdatedEditorialImagesQueryParams withDateTakenEnd(String dateTakenEnd) {
        this.dateTakenEnd = dateTakenEnd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_taken_start")
    public String dateTakenStart;
    public GetUpdatedEditorialImagesQueryParams withDateTakenStart(String dateTakenStart) {
        this.dateTakenStart = dateTakenStart;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_updated_end")
    public OffsetDateTime dateUpdatedEnd;
    public GetUpdatedEditorialImagesQueryParams withDateUpdatedEnd(OffsetDateTime dateUpdatedEnd) {
        this.dateUpdatedEnd = dateUpdatedEnd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_updated_start")
    public OffsetDateTime dateUpdatedStart;
    public GetUpdatedEditorialImagesQueryParams withDateUpdatedStart(OffsetDateTime dateUpdatedStart) {
        this.dateUpdatedStart = dateUpdatedStart;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetUpdatedEditorialImagesQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetUpdatedEditorialImagesSortEnum sort;
    public GetUpdatedEditorialImagesQueryParams withSort(GetUpdatedEditorialImagesSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supplier_code")
    public String[] supplierCode;
    public GetUpdatedEditorialImagesQueryParams withSupplierCode(String[] supplierCode) {
        this.supplierCode = supplierCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public GetUpdatedEditorialImagesTypeEnum type;
    public GetUpdatedEditorialImagesQueryParams withType(GetUpdatedEditorialImagesTypeEnum type) {
        this.type = type;
        return this;
    }
}