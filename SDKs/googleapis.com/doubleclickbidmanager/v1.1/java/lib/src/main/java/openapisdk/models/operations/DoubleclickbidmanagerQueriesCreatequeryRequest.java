package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DoubleclickbidmanagerQueriesCreatequeryRequest {
    public DoubleclickbidmanagerQueriesCreatequeryQueryParams queryParams;
    public DoubleclickbidmanagerQueriesCreatequeryRequest withQueryParams(DoubleclickbidmanagerQueriesCreatequeryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Query request;
    public DoubleclickbidmanagerQueriesCreatequeryRequest withRequest(openapisdk.models.shared.Query request) {
        this.request = request;
        return this;
    }
    public DoubleclickbidmanagerQueriesCreatequerySecurity security;
    public DoubleclickbidmanagerQueriesCreatequeryRequest withSecurity(DoubleclickbidmanagerQueriesCreatequerySecurity security) {
        this.security = security;
        return this;
    }
}