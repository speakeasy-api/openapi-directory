package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDistrictsByYearPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=year")
    public Long year;
    public GetDistrictsByYearPathParams withYear(Long year) {
        this.year = year;
        return this;
    }
}