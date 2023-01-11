package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsDomainMappingsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appsId")
    public String appsId;
    public AppengineAppsDomainMappingsDeletePathParams withAppsId(String appsId) {
        this.appsId = appsId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domainMappingsId")
    public String domainMappingsId;
    public AppengineAppsDomainMappingsDeletePathParams withDomainMappingsId(String domainMappingsId) {
        this.domainMappingsId = domainMappingsId;
        return this;
    }
}