package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appsId")
    public String appsId;
    public AppengineAppsGetPathParams withAppsId(String appsId) {
        this.appsId = appsId;
        return this;
    }
}