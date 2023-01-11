package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimManufacturersUpdateRequest {
    public DcimManufacturersUpdatePathParams pathParams;
    public DcimManufacturersUpdateRequest withPathParams(DcimManufacturersUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ManufacturerInput request;
    public DcimManufacturersUpdateRequest withRequest(openapisdk.models.shared.ManufacturerInput request) {
        this.request = request;
        return this;
    }
}