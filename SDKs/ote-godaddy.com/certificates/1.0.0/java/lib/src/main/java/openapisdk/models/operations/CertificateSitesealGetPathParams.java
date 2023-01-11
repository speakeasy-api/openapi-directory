package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateSitesealGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificateId")
    public String certificateId;
    public CertificateSitesealGetPathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
}