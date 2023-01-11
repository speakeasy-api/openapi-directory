package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitRequest {
    public BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitPathParams pathParams;
    public BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitRequest withPathParams(BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitQueryParams queryParams;
    public BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitRequest withQueryParams(BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubmitProvisioningConfigRequestInput request;
    public BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitRequest withRequest(openapisdk.models.shared.SubmitProvisioningConfigRequestInput request) {
        this.request = request;
        return this;
    }
    public BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitSecurity security;
    public BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitRequest withSecurity(BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitSecurity security) {
        this.security = security;
        return this;
    }
}