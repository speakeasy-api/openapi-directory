package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsDomainMappingsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appsId")
    public String appsId;
    public AppengineAppsDomainMappingsPatchPathParams withAppsId(String appsId) {
        this.appsId = appsId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=domainMappingsId")
    public String domainMappingsId;
    public AppengineAppsDomainMappingsPatchPathParams withDomainMappingsId(String domainMappingsId) {
        this.domainMappingsId = domainMappingsId;
        return this;
    }
}