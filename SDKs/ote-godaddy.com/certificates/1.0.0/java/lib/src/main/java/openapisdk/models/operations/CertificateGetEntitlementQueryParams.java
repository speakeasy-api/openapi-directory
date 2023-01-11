package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateGetEntitlementQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entitlementId")
    public String entitlementId;
    public CertificateGetEntitlementQueryParams withEntitlementId(String entitlementId) {
        this.entitlementId = entitlementId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=latest")
    public Boolean latest;
    public CertificateGetEntitlementQueryParams withLatest(Boolean latest) {
        this.latest = latest;
        return this;
    }
}