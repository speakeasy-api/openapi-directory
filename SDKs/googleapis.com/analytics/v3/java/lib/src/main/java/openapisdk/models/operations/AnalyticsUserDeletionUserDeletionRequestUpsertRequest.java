package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsUserDeletionUserDeletionRequestUpsertRequest {
    public AnalyticsUserDeletionUserDeletionRequestUpsertQueryParams queryParams;
    public AnalyticsUserDeletionUserDeletionRequestUpsertRequest withQueryParams(AnalyticsUserDeletionUserDeletionRequestUpsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserDeletionRequestInput request;
    public AnalyticsUserDeletionUserDeletionRequestUpsertRequest withRequest(openapisdk.models.shared.UserDeletionRequestInput request) {
        this.request = request;
        return this;
    }
    public AnalyticsUserDeletionUserDeletionRequestUpsertSecurity security;
    public AnalyticsUserDeletionUserDeletionRequestUpsertRequest withSecurity(AnalyticsUserDeletionUserDeletionRequestUpsertSecurity security) {
        this.security = security;
        return this;
    }
}