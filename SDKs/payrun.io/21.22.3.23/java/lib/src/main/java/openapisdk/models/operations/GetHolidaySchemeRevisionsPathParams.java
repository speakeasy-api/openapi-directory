package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHolidaySchemeRevisionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetHolidaySchemeRevisionsPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=HolidaySchemeId")
    public String holidaySchemeId;
    public GetHolidaySchemeRevisionsPathParams withHolidaySchemeId(String holidaySchemeId) {
        this.holidaySchemeId = holidaySchemeId;
        return this;
    }
}