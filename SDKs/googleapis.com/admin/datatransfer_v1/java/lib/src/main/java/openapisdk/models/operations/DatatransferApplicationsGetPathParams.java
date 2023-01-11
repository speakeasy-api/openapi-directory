package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatatransferApplicationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationId")
    public String applicationId;
    public DatatransferApplicationsGetPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}