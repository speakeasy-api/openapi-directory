package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationInsightMonitoredMediaServersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationInsightMonitoredMediaServersPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}