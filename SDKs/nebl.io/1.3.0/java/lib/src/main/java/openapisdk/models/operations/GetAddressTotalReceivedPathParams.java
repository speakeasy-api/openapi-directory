package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAddressTotalReceivedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=address")
    public String address;
    public GetAddressTotalReceivedPathParams withAddress(String address) {
        this.address = address;
        return this;
    }
}