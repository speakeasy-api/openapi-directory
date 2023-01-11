package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResellerSubscriptionsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customerId")
    public String customerId;
    public ResellerSubscriptionsInsertPathParams withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
}