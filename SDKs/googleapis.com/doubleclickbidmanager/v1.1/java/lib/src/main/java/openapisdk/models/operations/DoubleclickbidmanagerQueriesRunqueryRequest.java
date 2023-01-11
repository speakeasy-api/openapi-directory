package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DoubleclickbidmanagerQueriesRunqueryRequest {
    public DoubleclickbidmanagerQueriesRunqueryPathParams pathParams;
    public DoubleclickbidmanagerQueriesRunqueryRequest withPathParams(DoubleclickbidmanagerQueriesRunqueryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DoubleclickbidmanagerQueriesRunqueryQueryParams queryParams;
    public DoubleclickbidmanagerQueriesRunqueryRequest withQueryParams(DoubleclickbidmanagerQueriesRunqueryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RunQueryRequest request;
    public DoubleclickbidmanagerQueriesRunqueryRequest withRequest(openapisdk.models.shared.RunQueryRequest request) {
        this.request = request;
        return this;
    }
    public DoubleclickbidmanagerQueriesRunquerySecurity security;
    public DoubleclickbidmanagerQueriesRunqueryRequest withSecurity(DoubleclickbidmanagerQueriesRunquerySecurity security) {
        this.security = security;
        return this;
    }
}