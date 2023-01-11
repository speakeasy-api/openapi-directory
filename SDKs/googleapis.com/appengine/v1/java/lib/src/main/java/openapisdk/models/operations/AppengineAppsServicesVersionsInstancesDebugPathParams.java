package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsServicesVersionsInstancesDebugPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appsId")
    public String appsId;
    public AppengineAppsServicesVersionsInstancesDebugPathParams withAppsId(String appsId) {
        this.appsId = appsId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=instancesId")
    public String instancesId;
    public AppengineAppsServicesVersionsInstancesDebugPathParams withInstancesId(String instancesId) {
        this.instancesId = instancesId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=servicesId")
    public String servicesId;
    public AppengineAppsServicesVersionsInstancesDebugPathParams withServicesId(String servicesId) {
        this.servicesId = servicesId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionsId")
    public String versionsId;
    public AppengineAppsServicesVersionsInstancesDebugPathParams withVersionsId(String versionsId) {
        this.versionsId = versionsId;
        return this;
    }
}