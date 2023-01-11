package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHolidaySchemesWithTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetHolidaySchemesWithTagPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TagId")
    public String tagId;
    public GetHolidaySchemesWithTagPathParams withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}