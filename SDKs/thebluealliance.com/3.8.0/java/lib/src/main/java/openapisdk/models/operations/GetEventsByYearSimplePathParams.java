package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventsByYearSimplePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=year")
    public Long year;
    public GetEventsByYearSimplePathParams withYear(Long year) {
        this.year = year;
        return this;
    }
}