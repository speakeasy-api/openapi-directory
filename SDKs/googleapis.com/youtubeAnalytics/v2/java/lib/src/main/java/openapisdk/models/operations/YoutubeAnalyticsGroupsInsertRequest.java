package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeAnalyticsGroupsInsertRequest {
    public YoutubeAnalyticsGroupsInsertQueryParams queryParams;
    public YoutubeAnalyticsGroupsInsertRequest withQueryParams(YoutubeAnalyticsGroupsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Group request;
    public YoutubeAnalyticsGroupsInsertRequest withRequest(openapisdk.models.shared.Group request) {
        this.request = request;
        return this;
    }
    public YoutubeAnalyticsGroupsInsertSecurity security;
    public YoutubeAnalyticsGroupsInsertRequest withSecurity(YoutubeAnalyticsGroupsInsertSecurity security) {
        this.security = security;
        return this;
    }
}