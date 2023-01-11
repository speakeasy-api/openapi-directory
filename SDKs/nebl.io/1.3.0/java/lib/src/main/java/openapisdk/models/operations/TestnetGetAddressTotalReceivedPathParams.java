package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestnetGetAddressTotalReceivedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=address")
    public String address;
    public TestnetGetAddressTotalReceivedPathParams withAddress(String address) {
        this.address = address;
        return this;
    }
}