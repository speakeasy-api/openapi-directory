package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateVerifydomaincontrolPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificateId")
    public String certificateId;
    public CertificateVerifydomaincontrolPathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
}