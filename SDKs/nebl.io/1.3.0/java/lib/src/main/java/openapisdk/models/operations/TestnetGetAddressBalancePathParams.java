package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestnetGetAddressBalancePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=address")
    public String address;
    public TestnetGetAddressBalancePathParams withAddress(String address) {
        this.address = address;
        return this;
    }
}