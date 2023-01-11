package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationInsightMonitoredMediaServerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=monitoredMediaServerId")
    public String monitoredMediaServerId;
    public GetOrganizationInsightMonitoredMediaServerPathParams withMonitoredMediaServerId(String monitoredMediaServerId) {
        this.monitoredMediaServerId = monitoredMediaServerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationInsightMonitoredMediaServerPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}