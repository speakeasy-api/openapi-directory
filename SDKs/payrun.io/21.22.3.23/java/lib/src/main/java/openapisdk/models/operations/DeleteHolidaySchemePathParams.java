package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteHolidaySchemePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public DeleteHolidaySchemePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=HolidaySchemeId")
    public String holidaySchemeId;
    public DeleteHolidaySchemePathParams withHolidaySchemeId(String holidaySchemeId) {
        this.holidaySchemeId = holidaySchemeId;
        return this;
    }
}