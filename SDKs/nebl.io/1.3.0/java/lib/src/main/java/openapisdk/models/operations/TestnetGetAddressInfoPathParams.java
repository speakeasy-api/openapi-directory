package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestnetGetAddressInfoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=address")
    public String address;
    public TestnetGetAddressInfoPathParams withAddress(String address) {
        this.address = address;
        return this;
    }
}