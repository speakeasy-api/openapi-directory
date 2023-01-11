package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomainInformationByCertificateIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificateId")
    public String certificateId;
    public GetDomainInformationByCertificateIdPathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=customerId")
    public String customerId;
    public GetDomainInformationByCertificateIdPathParams withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
}