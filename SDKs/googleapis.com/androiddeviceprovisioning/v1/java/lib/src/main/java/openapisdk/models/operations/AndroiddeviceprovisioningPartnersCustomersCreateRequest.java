package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AndroiddeviceprovisioningPartnersCustomersCreateRequest {
    public AndroiddeviceprovisioningPartnersCustomersCreatePathParams pathParams;
    public AndroiddeviceprovisioningPartnersCustomersCreateRequest withPathParams(AndroiddeviceprovisioningPartnersCustomersCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AndroiddeviceprovisioningPartnersCustomersCreateQueryParams queryParams;
    public AndroiddeviceprovisioningPartnersCustomersCreateRequest withQueryParams(AndroiddeviceprovisioningPartnersCustomersCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateCustomerRequestInput request;
    public AndroiddeviceprovisioningPartnersCustomersCreateRequest withRequest(openapisdk.models.shared.CreateCustomerRequestInput request) {
        this.request = request;
        return this;
    }
}