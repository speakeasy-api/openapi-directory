package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningCustomersConfigurationsCreateRequest {
    public AndroiddeviceprovisioningCustomersConfigurationsCreatePathParams pathParams;
    public AndroiddeviceprovisioningCustomersConfigurationsCreateRequest withPathParams(AndroiddeviceprovisioningCustomersConfigurationsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams queryParams;
    public AndroiddeviceprovisioningCustomersConfigurationsCreateRequest withQueryParams(AndroiddeviceprovisioningCustomersConfigurationsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConfigurationInput request;
    public AndroiddeviceprovisioningCustomersConfigurationsCreateRequest withRequest(openapisdk.models.shared.ConfigurationInput request) {
        this.request = request;
        return this;
    }
}