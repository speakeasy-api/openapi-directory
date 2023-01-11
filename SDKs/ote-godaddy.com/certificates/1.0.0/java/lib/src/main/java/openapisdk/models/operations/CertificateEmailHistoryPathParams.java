package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateEmailHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificateId")
    public String certificateId;
    public CertificateEmailHistoryPathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
}