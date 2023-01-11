package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllHolidaySchemeTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetAllHolidaySchemeTagsPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}