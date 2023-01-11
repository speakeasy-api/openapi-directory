package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAddressUtxosPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=address")
    public String address;
    public GetAddressUtxosPathParams withAddress(String address) {
        this.address = address;
        return this;
    }
}