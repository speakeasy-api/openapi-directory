package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateAlternateEmailAddressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificateId")
    public String certificateId;
    public CertificateAlternateEmailAddressPathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=emailAddress")
    public String emailAddress;
    public CertificateAlternateEmailAddressPathParams withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
}