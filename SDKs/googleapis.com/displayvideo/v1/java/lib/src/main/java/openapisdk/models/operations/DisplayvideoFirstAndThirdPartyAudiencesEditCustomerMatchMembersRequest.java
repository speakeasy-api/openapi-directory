package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest {
    public DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersPathParams pathParams;
    public DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest withPathParams(DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersQueryParams queryParams;
    public DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest withQueryParams(DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EditCustomerMatchMembersRequest request;
    public DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest withRequest(openapisdk.models.shared.EditCustomerMatchMembersRequest request) {
        this.request = request;
        return this;
    }
    public DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersSecurity security;
    public DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest withSecurity(DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersSecurity security) {
        this.security = security;
        return this;
    }
}