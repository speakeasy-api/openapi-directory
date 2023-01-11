package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLicensePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=licenseNumber")
    public String licenseNumber;
    public GetLicensePathParams withLicenseNumber(String licenseNumber) {
        this.licenseNumber = licenseNumber;
        return this;
    }
}