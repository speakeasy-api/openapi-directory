package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IndexingUrlNotificationsPublishRequest {
    public IndexingUrlNotificationsPublishQueryParams queryParams;
    public IndexingUrlNotificationsPublishRequest withQueryParams(IndexingUrlNotificationsPublishQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UrlNotification request;
    public IndexingUrlNotificationsPublishRequest withRequest(openapisdk.models.shared.UrlNotification request) {
        this.request = request;
        return this;
    }
    public IndexingUrlNotificationsPublishSecurity security;
    public IndexingUrlNotificationsPublishRequest withSecurity(IndexingUrlNotificationsPublishSecurity security) {
        this.security = security;
        return this;
    }
}