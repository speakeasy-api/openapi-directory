package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsInvitationsDeclineRequest {
    public MybusinessAccountsInvitationsDeclinePathParams pathParams;
    public MybusinessAccountsInvitationsDeclineRequest withPathParams(MybusinessAccountsInvitationsDeclinePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessAccountsInvitationsDeclineQueryParams queryParams;
    public MybusinessAccountsInvitationsDeclineRequest withQueryParams(MybusinessAccountsInvitationsDeclineQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public MybusinessAccountsInvitationsDeclineRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}