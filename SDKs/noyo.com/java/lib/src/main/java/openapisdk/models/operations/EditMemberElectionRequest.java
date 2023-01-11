package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditMemberElectionRequest {
    public EditMemberElectionPathParams pathParams;
    public EditMemberElectionRequest withPathParams(EditMemberElectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MemberElectionEditRequest request;
    public EditMemberElectionRequest withRequest(openapisdk.models.shared.MemberElectionEditRequest request) {
        this.request = request;
        return this;
    }
}