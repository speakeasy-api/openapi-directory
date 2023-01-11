package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsDomainMappingsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appsId")
    public String appsId;
    public AppengineAppsDomainMappingsListPathParams withAppsId(String appsId) {
        this.appsId = appsId;
        return this;
    }
}