package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesManagementApplicationsListHiddenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationId")
    public String applicationId;
    public GamesManagementApplicationsListHiddenPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}