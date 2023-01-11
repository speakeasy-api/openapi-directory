package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomerCertificatesByCustomerIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customerId")
    public String customerId;
    public GetCustomerCertificatesByCustomerIdPathParams withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
}