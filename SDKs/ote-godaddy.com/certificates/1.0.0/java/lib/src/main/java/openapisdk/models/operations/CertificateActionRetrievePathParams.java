package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateActionRetrievePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificateId")
    public String certificateId;
    public CertificateActionRetrievePathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
}