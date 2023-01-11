package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MoveOrganizationLicensesSeatsRequest {
    public MoveOrganizationLicensesSeatsPathParams pathParams;
    public MoveOrganizationLicensesSeatsRequest withPathParams(MoveOrganizationLicensesSeatsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MoveOrganizationLicensesSeatsRequestBody request;
    public MoveOrganizationLicensesSeatsRequest withRequest(MoveOrganizationLicensesSeatsRequestBody request) {
        this.request = request;
        return this;
    }
}