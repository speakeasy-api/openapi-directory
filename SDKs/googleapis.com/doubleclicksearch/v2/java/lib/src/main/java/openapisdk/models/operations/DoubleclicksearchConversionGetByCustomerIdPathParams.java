package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DoubleclicksearchConversionGetByCustomerIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customerId")
    public String customerId;
    public DoubleclicksearchConversionGetByCustomerIdPathParams withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
}