package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCarrierPackageTypesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=carrier_id")
    public String carrierId;
    public ListCarrierPackageTypesPathParams withCarrierId(String carrierId) {
        this.carrierId = carrierId;
        return this;
    }
}