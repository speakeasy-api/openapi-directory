package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestnetGetFaucetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=address")
    public String address;
    public TestnetGetFaucetQueryParams withAddress(String address) {
        this.address = address;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=amount")
    public Double amount;
    public TestnetGetFaucetQueryParams withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
}