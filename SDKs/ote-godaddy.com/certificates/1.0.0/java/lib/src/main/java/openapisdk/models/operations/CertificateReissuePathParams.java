package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateReissuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificateId")
    public String certificateId;
    public CertificateReissuePathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
}