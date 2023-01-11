package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOrganizationInsightMonitoredMediaServerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=monitoredMediaServerId")
    public String monitoredMediaServerId;
    public DeleteOrganizationInsightMonitoredMediaServerPathParams withMonitoredMediaServerId(String monitoredMediaServerId) {
        this.monitoredMediaServerId = monitoredMediaServerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public DeleteOrganizationInsightMonitoredMediaServerPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}