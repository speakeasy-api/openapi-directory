package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsServicesVersionsInstancesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appsId")
    public String appsId;
    public AppengineAppsServicesVersionsInstancesGetPathParams withAppsId(String appsId) {
        this.appsId = appsId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=instancesId")
    public String instancesId;
    public AppengineAppsServicesVersionsInstancesGetPathParams withInstancesId(String instancesId) {
        this.instancesId = instancesId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=servicesId")
    public String servicesId;
    public AppengineAppsServicesVersionsInstancesGetPathParams withServicesId(String servicesId) {
        this.servicesId = servicesId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionsId")
    public String versionsId;
    public AppengineAppsServicesVersionsInstancesGetPathParams withVersionsId(String versionsId) {
        this.versionsId = versionsId;
        return this;
    }
}