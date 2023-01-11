package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateDownloadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificateId")
    public String certificateId;
    public CertificateDownloadPathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
}