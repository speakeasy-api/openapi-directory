package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteHolidaySchemeTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public DeleteHolidaySchemeTagPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=HolidaySchemeId")
    public String holidaySchemeId;
    public DeleteHolidaySchemeTagPathParams withHolidaySchemeId(String holidaySchemeId) {
        this.holidaySchemeId = holidaySchemeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public DeleteHolidaySchemeTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}