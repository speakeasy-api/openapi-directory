package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestnetGetAddressUtxosPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=address")
    public String address;
    public TestnetGetAddressUtxosPathParams withAddress(String address) {
        this.address = address;
        return this;
    }
}