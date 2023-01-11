package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLicensePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=licenseNumber")
    public String licenseNumber;
    public UpdateLicensePathParams withLicenseNumber(String licenseNumber) {
        this.licenseNumber = licenseNumber;
        return this;
    }
}