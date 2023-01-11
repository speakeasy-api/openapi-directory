package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAddressInfoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=address")
    public String address;
    public GetAddressInfoPathParams withAddress(String address) {
        this.address = address;
        return this;
    }
}