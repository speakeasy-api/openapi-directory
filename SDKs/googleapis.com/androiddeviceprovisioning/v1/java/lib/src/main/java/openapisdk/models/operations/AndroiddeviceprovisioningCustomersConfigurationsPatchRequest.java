package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningCustomersConfigurationsPatchRequest {
    public AndroiddeviceprovisioningCustomersConfigurationsPatchPathParams pathParams;
    public AndroiddeviceprovisioningCustomersConfigurationsPatchRequest withPathParams(AndroiddeviceprovisioningCustomersConfigurationsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroiddeviceprovisioningCustomersConfigurationsPatchQueryParams queryParams;
    public AndroiddeviceprovisioningCustomersConfigurationsPatchRequest withQueryParams(AndroiddeviceprovisioningCustomersConfigurationsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConfigurationInput request;
    public AndroiddeviceprovisioningCustomersConfigurationsPatchRequest withRequest(openapisdk.models.shared.ConfigurationInput request) {
        this.request = request;
        return this;
    }
}