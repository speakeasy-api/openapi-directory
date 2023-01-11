package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessaccountmanagementAccountsInvitationsAcceptRequest {
    public MybusinessaccountmanagementAccountsInvitationsAcceptPathParams pathParams;
    public MybusinessaccountmanagementAccountsInvitationsAcceptRequest withPathParams(MybusinessaccountmanagementAccountsInvitationsAcceptPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MybusinessaccountmanagementAccountsInvitationsAcceptQueryParams queryParams;
    public MybusinessaccountmanagementAccountsInvitationsAcceptRequest withQueryParams(MybusinessaccountmanagementAccountsInvitationsAcceptQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public MybusinessaccountmanagementAccountsInvitationsAcceptRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}