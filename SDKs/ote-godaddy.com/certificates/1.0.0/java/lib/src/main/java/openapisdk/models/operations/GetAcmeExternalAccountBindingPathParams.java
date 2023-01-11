package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAcmeExternalAccountBindingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customerId")
    public String customerId;
    public GetAcmeExternalAccountBindingPathParams withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
}