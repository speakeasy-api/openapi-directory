package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateResendEmailPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificateId")
    public String certificateId;
    public CertificateResendEmailPathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=emailId")
    public String emailId;
    public CertificateResendEmailPathParams withEmailId(String emailId) {
        this.emailId = emailId;
        return this;
    }
}