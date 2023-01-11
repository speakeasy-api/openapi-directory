package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DoubleclickbidmanagerQueriesRunRequest {
    public DoubleclickbidmanagerQueriesRunPathParams pathParams;
    public DoubleclickbidmanagerQueriesRunRequest withPathParams(DoubleclickbidmanagerQueriesRunPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DoubleclickbidmanagerQueriesRunQueryParams queryParams;
    public DoubleclickbidmanagerQueriesRunRequest withQueryParams(DoubleclickbidmanagerQueriesRunQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RunQueryRequest request;
    public DoubleclickbidmanagerQueriesRunRequest withRequest(openapisdk.models.shared.RunQueryRequest request) {
        this.request = request;
        return this;
    }
    public DoubleclickbidmanagerQueriesRunSecurity security;
    public DoubleclickbidmanagerQueriesRunRequest withSecurity(DoubleclickbidmanagerQueriesRunSecurity security) {
        this.security = security;
        return this;
    }
}