package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MoveOrganizationLicensesRequest {
    public MoveOrganizationLicensesPathParams pathParams;
    public MoveOrganizationLicensesRequest withPathParams(MoveOrganizationLicensesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MoveOrganizationLicensesRequestBody request;
    public MoveOrganizationLicensesRequest withRequest(MoveOrganizationLicensesRequestBody request) {
        this.request = request;
        return this;
    }
}