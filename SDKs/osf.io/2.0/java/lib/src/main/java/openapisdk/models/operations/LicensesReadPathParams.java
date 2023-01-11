package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LicensesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=license_id")
    public String licenseId;
    public LicensesReadPathParams withLicenseId(String licenseId) {
        this.licenseId = licenseId;
        return this;
    }
}