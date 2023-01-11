package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsServicesVersionsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appsId")
    public String appsId;
    public AppengineAppsServicesVersionsPatchPathParams withAppsId(String appsId) {
        this.appsId = appsId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=servicesId")
    public String servicesId;
    public AppengineAppsServicesVersionsPatchPathParams withServicesId(String servicesId) {
        this.servicesId = servicesId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionsId")
    public String versionsId;
    public AppengineAppsServicesVersionsPatchPathParams withVersionsId(String versionsId) {
        this.versionsId = versionsId;
        return this;
    }
}