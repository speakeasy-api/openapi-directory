package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest {
    public BaremetalsolutionProjectsLocationsSubmitProvisioningConfigPathParams pathParams;
    public BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest withPathParams(BaremetalsolutionProjectsLocationsSubmitProvisioningConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BaremetalsolutionProjectsLocationsSubmitProvisioningConfigQueryParams queryParams;
    public BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest withQueryParams(BaremetalsolutionProjectsLocationsSubmitProvisioningConfigQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubmitProvisioningConfigRequest request;
    public BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest withRequest(openapisdk.models.shared.SubmitProvisioningConfigRequest request) {
        this.request = request;
        return this;
    }
    public BaremetalsolutionProjectsLocationsSubmitProvisioningConfigSecurity security;
    public BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest withSecurity(BaremetalsolutionProjectsLocationsSubmitProvisioningConfigSecurity security) {
        this.security = security;
        return this;
    }
}