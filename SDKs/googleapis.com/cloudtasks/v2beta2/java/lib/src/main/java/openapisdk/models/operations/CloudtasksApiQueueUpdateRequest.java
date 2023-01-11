package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtasksApiQueueUpdateRequest {
    public CloudtasksApiQueueUpdateQueryParams queryParams;
    public CloudtasksApiQueueUpdateRequest withQueryParams(CloudtasksApiQueueUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HttpBody request;
    public CloudtasksApiQueueUpdateRequest withRequest(openapisdk.models.shared.HttpBody request) {
        this.request = request;
        return this;
    }
    public CloudtasksApiQueueUpdateSecurity security;
    public CloudtasksApiQueueUpdateRequest withSecurity(CloudtasksApiQueueUpdateSecurity security) {
        this.security = security;
        return this;
    }
}