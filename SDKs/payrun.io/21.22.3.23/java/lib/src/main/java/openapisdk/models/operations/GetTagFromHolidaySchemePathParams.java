package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagFromHolidaySchemePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetTagFromHolidaySchemePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=HolidaySchemeId")
    public String holidaySchemeId;
    public GetTagFromHolidaySchemePathParams withHolidaySchemeId(String holidaySchemeId) {
        this.holidaySchemeId = holidaySchemeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public GetTagFromHolidaySchemePathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}