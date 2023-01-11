package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAddressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=address")
    public String address;
    public GetAddressPathParams withAddress(String address) {
        this.address = address;
        return this;
    }
}