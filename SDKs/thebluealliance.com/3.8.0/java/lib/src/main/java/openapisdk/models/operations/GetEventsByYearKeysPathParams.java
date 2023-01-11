package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventsByYearKeysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=year")
    public Long year;
    public GetEventsByYearKeysPathParams withYear(Long year) {
        this.year = year;
        return this;
    }
}