package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResellerCustomersPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customerId")
    public String customerId;
    public ResellerCustomersPatchPathParams withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
}