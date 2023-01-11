package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrderServiceOfferingRequest {
    public OrderServiceOfferingPathParams pathParams;
    public OrderServiceOfferingRequest withPathParams(OrderServiceOfferingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrderParametersServiceOfferingInput request;
    public OrderServiceOfferingRequest withRequest(openapisdk.models.shared.OrderParametersServiceOfferingInput request) {
        this.request = request;
        return this;
    }
}