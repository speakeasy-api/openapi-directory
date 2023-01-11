package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsInvitationsAcceptRequest {
    public MybusinessAccountsInvitationsAcceptPathParams pathParams;
    public MybusinessAccountsInvitationsAcceptRequest withPathParams(MybusinessAccountsInvitationsAcceptPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessAccountsInvitationsAcceptQueryParams queryParams;
    public MybusinessAccountsInvitationsAcceptRequest withQueryParams(MybusinessAccountsInvitationsAcceptQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public MybusinessAccountsInvitationsAcceptRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}