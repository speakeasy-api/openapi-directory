package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeAbuseReportsInsertRequest {
    public YoutubeAbuseReportsInsertQueryParams queryParams;
    public YoutubeAbuseReportsInsertRequest withQueryParams(YoutubeAbuseReportsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AbuseReport request;
    public YoutubeAbuseReportsInsertRequest withRequest(openapisdk.models.shared.AbuseReport request) {
        this.request = request;
        return this;
    }
    public YoutubeAbuseReportsInsertSecurity security;
    public YoutubeAbuseReportsInsertRequest withSecurity(YoutubeAbuseReportsInsertSecurity security) {
        this.security = security;
        return this;
    }
}