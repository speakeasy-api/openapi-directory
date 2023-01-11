package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityOrgUnitsMembershipsMoveRequest {
    public CloudidentityOrgUnitsMembershipsMovePathParams pathParams;
    public CloudidentityOrgUnitsMembershipsMoveRequest withPathParams(CloudidentityOrgUnitsMembershipsMovePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudidentityOrgUnitsMembershipsMoveQueryParams queryParams;
    public CloudidentityOrgUnitsMembershipsMoveRequest withQueryParams(CloudidentityOrgUnitsMembershipsMoveQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MoveOrgMembershipRequest request;
    public CloudidentityOrgUnitsMembershipsMoveRequest withRequest(openapisdk.models.shared.MoveOrgMembershipRequest request) {
        this.request = request;
        return this;
    }
}