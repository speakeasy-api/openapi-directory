package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsDomainMappingsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appsId")
    public String appsId;
    public AppengineAppsDomainMappingsCreatePathParams withAppsId(String appsId) {
        this.appsId = appsId;
        return this;
    }
}