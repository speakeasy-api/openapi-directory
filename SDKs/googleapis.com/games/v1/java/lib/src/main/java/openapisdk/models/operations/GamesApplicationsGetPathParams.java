package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesApplicationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationId")
    public String applicationId;
    public GamesApplicationsGetPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}