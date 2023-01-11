package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimManufacturersPartialUpdateRequest {
    public DcimManufacturersPartialUpdatePathParams pathParams;
    public DcimManufacturersPartialUpdateRequest withPathParams(DcimManufacturersPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ManufacturerInput request;
    public DcimManufacturersPartialUpdateRequest withRequest(openapisdk.models.shared.ManufacturerInput request) {
        this.request = request;
        return this;
    }
}