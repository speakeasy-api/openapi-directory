package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest {
    public BaremetalsolutionProjectsLocationsProvisioningConfigsCreatePathParams pathParams;
    public BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest withPathParams(BaremetalsolutionProjectsLocationsProvisioningConfigsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BaremetalsolutionProjectsLocationsProvisioningConfigsCreateQueryParams queryParams;
    public BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest withQueryParams(BaremetalsolutionProjectsLocationsProvisioningConfigsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProvisioningConfigInput request;
    public BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest withRequest(openapisdk.models.shared.ProvisioningConfigInput request) {
        this.request = request;
        return this;
    }
    public BaremetalsolutionProjectsLocationsProvisioningConfigsCreateSecurity security;
    public BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest withSecurity(BaremetalsolutionProjectsLocationsProvisioningConfigsCreateSecurity security) {
        this.security = security;
        return this;
    }
}