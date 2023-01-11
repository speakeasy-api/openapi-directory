package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesApplicationsVerifyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationId")
    public String applicationId;
    public GamesApplicationsVerifyPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}