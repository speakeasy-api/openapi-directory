package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsLocationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appsId")
    public String appsId;
    public AppengineAppsLocationsListPathParams withAppsId(String appsId) {
        this.appsId = appsId;
        return this;
    }
}