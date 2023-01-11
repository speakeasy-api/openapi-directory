package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateCallbackGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificateId")
    public String certificateId;
    public CertificateCallbackGetPathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
}