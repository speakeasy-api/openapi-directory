package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventsByYearPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=year")
    public Long year;
    public GetEventsByYearPathParams withYear(Long year) {
        this.year = year;
        return this;
    }
}