package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLicensePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=licenseNumber")
    public String licenseNumber;
    public DeleteLicensePathParams withLicenseNumber(String licenseNumber) {
        this.licenseNumber = licenseNumber;
        return this;
    }
}