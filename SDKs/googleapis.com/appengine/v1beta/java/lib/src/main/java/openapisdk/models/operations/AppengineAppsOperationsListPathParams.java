package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appsId")
    public String appsId;
    public AppengineAppsOperationsListPathParams withAppsId(String appsId) {
        this.appsId = appsId;
        return this;
    }
}