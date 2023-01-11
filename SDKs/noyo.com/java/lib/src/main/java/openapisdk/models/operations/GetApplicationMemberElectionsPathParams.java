package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApplicationMemberElectionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application_id")
    public String applicationId;
    public GetApplicationMemberElectionsPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}