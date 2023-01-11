package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMonatsbelegeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=month")
    public Long month;
    public GetMonatsbelegeQueryParams withMonth(Long month) {
        this.month = month;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetMonatsbelegeQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}