package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeAnalyticsGroupsUpdateRequest {
    public YoutubeAnalyticsGroupsUpdateQueryParams queryParams;
    public YoutubeAnalyticsGroupsUpdateRequest withQueryParams(YoutubeAnalyticsGroupsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Group request;
    public YoutubeAnalyticsGroupsUpdateRequest withRequest(openapisdk.models.shared.Group request) {
        this.request = request;
        return this;
    }
    public YoutubeAnalyticsGroupsUpdateSecurity security;
    public YoutubeAnalyticsGroupsUpdateRequest withSecurity(YoutubeAnalyticsGroupsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}