package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetYearMonthJsonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=month")
    public Integer month;
    public GetYearMonthJsonPathParams withMonth(Integer month) {
        this.month = month;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=year")
    public Integer year;
    public GetYearMonthJsonPathParams withYear(Integer year) {
        this.year = year;
        return this;
    }
}