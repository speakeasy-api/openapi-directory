package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DoubleclickbidmanagerQueriesCreateRequest {
    public DoubleclickbidmanagerQueriesCreateQueryParams queryParams;
    public DoubleclickbidmanagerQueriesCreateRequest withQueryParams(DoubleclickbidmanagerQueriesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.QueryInput request;
    public DoubleclickbidmanagerQueriesCreateRequest withRequest(openapisdk.models.shared.QueryInput request) {
        this.request = request;
        return this;
    }
    public DoubleclickbidmanagerQueriesCreateSecurity security;
    public DoubleclickbidmanagerQueriesCreateRequest withSecurity(DoubleclickbidmanagerQueriesCreateSecurity security) {
        this.security = security;
        return this;
    }
}