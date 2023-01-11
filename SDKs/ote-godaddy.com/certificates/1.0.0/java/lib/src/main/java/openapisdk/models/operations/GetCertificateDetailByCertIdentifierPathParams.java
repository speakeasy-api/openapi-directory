package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCertificateDetailByCertIdentifierPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificateId")
    public String certificateId;
    public GetCertificateDetailByCertIdentifierPathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customerId")
    public String customerId;
    public GetCertificateDetailByCertIdentifierPathParams withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
}