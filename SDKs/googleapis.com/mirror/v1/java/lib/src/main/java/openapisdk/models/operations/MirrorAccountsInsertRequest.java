package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorAccountsInsertRequest {
    public MirrorAccountsInsertPathParams pathParams;
    public MirrorAccountsInsertRequest withPathParams(MirrorAccountsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MirrorAccountsInsertQueryParams queryParams;
    public MirrorAccountsInsertRequest withQueryParams(MirrorAccountsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Account request;
    public MirrorAccountsInsertRequest withRequest(openapisdk.models.shared.Account request) {
        this.request = request;
        return this;
    }
}