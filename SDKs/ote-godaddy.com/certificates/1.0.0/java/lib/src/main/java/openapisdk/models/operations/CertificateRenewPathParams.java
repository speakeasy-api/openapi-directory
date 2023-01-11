package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateRenewPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificateId")
    public String certificateId;
    public CertificateRenewPathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
}