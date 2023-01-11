package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMemberElectionRequest {
    public CreateMemberElectionPathParams pathParams;
    public CreateMemberElectionRequest withPathParams(CreateMemberElectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MemberElectionCreateRequest request;
    public CreateMemberElectionRequest withRequest(openapisdk.models.shared.MemberElectionCreateRequest request) {
        this.request = request;
        return this;
    }
}