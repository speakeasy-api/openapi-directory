package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateRevokePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificateId")
    public String certificateId;
    public CertificateRevokePathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
}