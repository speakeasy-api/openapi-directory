package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLicenseTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=licenseTemplateNumber")
    public String licenseTemplateNumber;
    public UpdateLicenseTemplatePathParams withLicenseTemplateNumber(String licenseTemplateNumber) {
        this.licenseTemplateNumber = licenseTemplateNumber;
        return this;
    }
}