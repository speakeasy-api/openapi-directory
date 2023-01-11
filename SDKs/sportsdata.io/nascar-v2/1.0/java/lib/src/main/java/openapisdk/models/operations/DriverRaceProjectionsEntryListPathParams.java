package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriverRaceProjectionsEntryListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public DriverRaceProjectionsEntryListFormatEnum format;
    public DriverRaceProjectionsEntryListPathParams withFormat(DriverRaceProjectionsEntryListFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=raceid")
    public String raceid;
    public DriverRaceProjectionsEntryListPathParams withRaceid(String raceid) {
        this.raceid = raceid;
        return this;
    }
}