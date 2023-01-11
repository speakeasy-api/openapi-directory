package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessaccountmanagementAccountsInvitationsDeclineRequest {
    public MybusinessaccountmanagementAccountsInvitationsDeclinePathParams pathParams;
    public MybusinessaccountmanagementAccountsInvitationsDeclineRequest withPathParams(MybusinessaccountmanagementAccountsInvitationsDeclinePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessaccountmanagementAccountsInvitationsDeclineQueryParams queryParams;
    public MybusinessaccountmanagementAccountsInvitationsDeclineRequest withQueryParams(MybusinessaccountmanagementAccountsInvitationsDeclineQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public MybusinessaccountmanagementAccountsInvitationsDeclineRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}