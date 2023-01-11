package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsAddOrUpdateMembershipForUserLegacyRequest {
    public TeamsAddOrUpdateMembershipForUserLegacyPathParams pathParams;
    public TeamsAddOrUpdateMembershipForUserLegacyRequest withPathParams(TeamsAddOrUpdateMembershipForUserLegacyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TeamsAddOrUpdateMembershipForUserLegacyRequestBody request;
    public TeamsAddOrUpdateMembershipForUserLegacyRequest withRequest(TeamsAddOrUpdateMembershipForUserLegacyRequestBody request) {
        this.request = request;
        return this;
    }
}