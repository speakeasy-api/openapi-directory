package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1LocationsIdHolidaysHolidayIdClosedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=closed")
    public Boolean closed;
    public PutSetupV1LocationsIdHolidaysHolidayIdClosedPathParams withClosed(Boolean closed) {
        this.closed = closed;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=holidayId")
    public String holidayId;
    public PutSetupV1LocationsIdHolidaysHolidayIdClosedPathParams withHolidayId(String holidayId) {
        this.holidayId = holidayId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutSetupV1LocationsIdHolidaysHolidayIdClosedPathParams withId(String id) {
        this.id = id;
        return this;
    }
}