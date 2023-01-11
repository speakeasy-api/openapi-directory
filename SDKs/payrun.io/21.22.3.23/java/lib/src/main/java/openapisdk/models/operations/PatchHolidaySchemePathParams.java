package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchHolidaySchemePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PatchHolidaySchemePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=HolidaySchemeId")
    public String holidaySchemeId;
    public PatchHolidaySchemePathParams withHolidaySchemeId(String holidaySchemeId) {
        this.holidaySchemeId = holidaySchemeId;
        return this;
    }
}