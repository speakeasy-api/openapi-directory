package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCompanyAttendancesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public DeleteCompanyAttendancesIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}