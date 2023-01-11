package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateCallbackDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificateId")
    public String certificateId;
    public CertificateCallbackDeletePathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
}