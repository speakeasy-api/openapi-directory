package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsServicesVersionsInstancesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appsId")
    public String appsId;
    public AppengineAppsServicesVersionsInstancesDeletePathParams withAppsId(String appsId) {
        this.appsId = appsId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=instancesId")
    public String instancesId;
    public AppengineAppsServicesVersionsInstancesDeletePathParams withInstancesId(String instancesId) {
        this.instancesId = instancesId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=servicesId")
    public String servicesId;
    public AppengineAppsServicesVersionsInstancesDeletePathParams withServicesId(String servicesId) {
        this.servicesId = servicesId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionsId")
    public String versionsId;
    public AppengineAppsServicesVersionsInstancesDeletePathParams withVersionsId(String versionsId) {
        this.versionsId = versionsId;
        return this;
    }
}