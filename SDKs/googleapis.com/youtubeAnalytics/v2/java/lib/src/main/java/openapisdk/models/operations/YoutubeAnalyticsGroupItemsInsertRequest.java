package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeAnalyticsGroupItemsInsertRequest {
    public YoutubeAnalyticsGroupItemsInsertQueryParams queryParams;
    public YoutubeAnalyticsGroupItemsInsertRequest withQueryParams(YoutubeAnalyticsGroupItemsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GroupItem request;
    public YoutubeAnalyticsGroupItemsInsertRequest withRequest(openapisdk.models.shared.GroupItem request) {
        this.request = request;
        return this;
    }
    public YoutubeAnalyticsGroupItemsInsertSecurity security;
    public YoutubeAnalyticsGroupItemsInsertRequest withSecurity(YoutubeAnalyticsGroupItemsInsertSecurity security) {
        this.security = security;
        return this;
    }
}