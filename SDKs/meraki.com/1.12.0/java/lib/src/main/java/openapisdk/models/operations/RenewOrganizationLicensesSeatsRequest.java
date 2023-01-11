package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RenewOrganizationLicensesSeatsRequest {
    public RenewOrganizationLicensesSeatsPathParams pathParams;
    public RenewOrganizationLicensesSeatsRequest withPathParams(RenewOrganizationLicensesSeatsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RenewOrganizationLicensesSeatsRequestBody request;
    public RenewOrganizationLicensesSeatsRequest withRequest(RenewOrganizationLicensesSeatsRequestBody request) {
        this.request = request;
        return this;
    }
}