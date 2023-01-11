package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsServicesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appsId")
    public String appsId;
    public AppengineAppsServicesGetPathParams withAppsId(String appsId) {
        this.appsId = appsId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=servicesId")
    public String servicesId;
    public AppengineAppsServicesGetPathParams withServicesId(String servicesId) {
        this.servicesId = servicesId;
        return this;
    }
}