package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchCompanyAttendancesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public PatchCompanyAttendancesIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}