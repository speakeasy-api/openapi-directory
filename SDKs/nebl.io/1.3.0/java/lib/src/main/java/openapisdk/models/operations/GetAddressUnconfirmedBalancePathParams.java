package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAddressUnconfirmedBalancePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=address")
    public String address;
    public GetAddressUnconfirmedBalancePathParams withAddress(String address) {
        this.address = address;
        return this;
    }
}