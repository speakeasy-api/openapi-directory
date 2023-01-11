package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostHolidaySchemeIntoEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PostHolidaySchemeIntoEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}