package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateDownloadEntitlementQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entitlementId")
    public String entitlementId;
    public CertificateDownloadEntitlementQueryParams withEntitlementId(String entitlementId) {
        this.entitlementId = entitlementId;
        return this;
    }
}