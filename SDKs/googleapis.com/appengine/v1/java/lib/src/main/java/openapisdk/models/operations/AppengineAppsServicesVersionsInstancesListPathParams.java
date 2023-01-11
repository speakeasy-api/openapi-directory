package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsServicesVersionsInstancesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appsId")
    public String appsId;
    public AppengineAppsServicesVersionsInstancesListPathParams withAppsId(String appsId) {
        this.appsId = appsId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=servicesId")
    public String servicesId;
    public AppengineAppsServicesVersionsInstancesListPathParams withServicesId(String servicesId) {
        this.servicesId = servicesId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionsId")
    public String versionsId;
    public AppengineAppsServicesVersionsInstancesListPathParams withVersionsId(String versionsId) {
        this.versionsId = versionsId;
        return this;
    }
}