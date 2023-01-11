package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificateId")
    public String certificateId;
    public CertificateGetPathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
}