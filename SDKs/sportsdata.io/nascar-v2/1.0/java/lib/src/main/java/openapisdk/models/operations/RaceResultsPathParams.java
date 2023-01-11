package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RaceResultsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public RaceResultsFormatEnum format;
    public RaceResultsPathParams withFormat(RaceResultsFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=raceid")
    public String raceid;
    public RaceResultsPathParams withRaceid(String raceid) {
        this.raceid = raceid;
        return this;
    }
}