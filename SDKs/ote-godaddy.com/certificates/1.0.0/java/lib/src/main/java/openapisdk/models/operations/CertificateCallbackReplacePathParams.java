package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateCallbackReplacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificateId")
    public String certificateId;
    public CertificateCallbackReplacePathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
}