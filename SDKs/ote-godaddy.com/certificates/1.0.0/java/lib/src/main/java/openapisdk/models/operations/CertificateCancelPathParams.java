package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificateId")
    public String certificateId;
    public CertificateCancelPathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
}