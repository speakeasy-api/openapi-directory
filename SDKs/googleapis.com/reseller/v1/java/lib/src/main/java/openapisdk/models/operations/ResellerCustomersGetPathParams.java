package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResellerCustomersGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customerId")
    public String customerId;
    public ResellerCustomersGetPathParams withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
}