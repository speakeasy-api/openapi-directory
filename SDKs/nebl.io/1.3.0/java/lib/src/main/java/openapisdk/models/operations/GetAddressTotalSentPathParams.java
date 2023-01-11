package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAddressTotalSentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=address")
    public String address;
    public GetAddressTotalSentPathParams withAddress(String address) {
        this.address = address;
        return this;
    }
}