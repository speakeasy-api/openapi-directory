package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateResendEmailAddressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificateId")
    public String certificateId;
    public CertificateResendEmailAddressPathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=emailAddress")
    public String emailAddress;
    public CertificateResendEmailAddressPathParams withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=emailId")
    public String emailId;
    public CertificateResendEmailAddressPathParams withEmailId(String emailId) {
        this.emailId = emailId;
        return this;
    }
}