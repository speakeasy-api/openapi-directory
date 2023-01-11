package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignOrganizationLicensesSeatsRequest {
    public AssignOrganizationLicensesSeatsPathParams pathParams;
    public AssignOrganizationLicensesSeatsRequest withPathParams(AssignOrganizationLicensesSeatsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AssignOrganizationLicensesSeatsRequestBody request;
    public AssignOrganizationLicensesSeatsRequest withRequest(AssignOrganizationLicensesSeatsRequestBody request) {
        this.request = request;
        return this;
    }
}