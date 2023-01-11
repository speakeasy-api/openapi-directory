package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAddressBalancePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=address")
    public String address;
    public GetAddressBalancePathParams withAddress(String address) {
        this.address = address;
        return this;
    }
}