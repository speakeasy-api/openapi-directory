package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetV2EditorialUpdatedQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public GetV2EditorialUpdatedQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetV2EditorialUpdatedQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_taken_end")
    public String dateTakenEnd;
    public GetV2EditorialUpdatedQueryParams withDateTakenEnd(String dateTakenEnd) {
        this.dateTakenEnd = dateTakenEnd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_taken_start")
    public String dateTakenStart;
    public GetV2EditorialUpdatedQueryParams withDateTakenStart(String dateTakenStart) {
        this.dateTakenStart = dateTakenStart;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_updated_end")
    public OffsetDateTime dateUpdatedEnd;
    public GetV2EditorialUpdatedQueryParams withDateUpdatedEnd(OffsetDateTime dateUpdatedEnd) {
        this.dateUpdatedEnd = dateUpdatedEnd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_updated_start")
    public OffsetDateTime dateUpdatedStart;
    public GetV2EditorialUpdatedQueryParams withDateUpdatedStart(OffsetDateTime dateUpdatedStart) {
        this.dateUpdatedStart = dateUpdatedStart;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetV2EditorialUpdatedQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetV2EditorialUpdatedSortEnum sort;
    public GetV2EditorialUpdatedQueryParams withSort(GetV2EditorialUpdatedSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supplier_code")
    public String[] supplierCode;
    public GetV2EditorialUpdatedQueryParams withSupplierCode(String[] supplierCode) {
        this.supplierCode = supplierCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public GetV2EditorialUpdatedTypeEnum type;
    public GetV2EditorialUpdatedQueryParams withType(GetV2EditorialUpdatedTypeEnum type) {
        this.type = type;
        return this;
    }
}