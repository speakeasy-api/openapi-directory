package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestnetGetAddressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=address")
    public String address;
    public TestnetGetAddressPathParams withAddress(String address) {
        this.address = address;
        return this;
    }
}