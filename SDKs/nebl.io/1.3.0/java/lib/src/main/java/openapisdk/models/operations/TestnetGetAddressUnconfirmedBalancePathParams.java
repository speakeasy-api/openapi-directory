package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestnetGetAddressUnconfirmedBalancePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=address")
    public String address;
    public TestnetGetAddressUnconfirmedBalancePathParams withAddress(String address) {
        this.address = address;
        return this;
    }
}