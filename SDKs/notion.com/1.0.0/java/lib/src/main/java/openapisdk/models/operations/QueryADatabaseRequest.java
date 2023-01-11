package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QueryADatabaseRequest {
    public QueryADatabasePathParams pathParams;
    public QueryADatabaseRequest withPathParams(QueryADatabasePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public QueryADatabaseRequestBody request;
    public QueryADatabaseRequest withRequest(QueryADatabaseRequestBody request) {
        this.request = request;
        return this;
    }
}