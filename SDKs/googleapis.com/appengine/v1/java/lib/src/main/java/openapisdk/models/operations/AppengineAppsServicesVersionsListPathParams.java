package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsServicesVersionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appsId")
    public String appsId;
    public AppengineAppsServicesVersionsListPathParams withAppsId(String appsId) {
        this.appsId = appsId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=servicesId")
    public String servicesId;
    public AppengineAppsServicesVersionsListPathParams withServicesId(String servicesId) {
        this.servicesId = servicesId;
        return this;
    }
}