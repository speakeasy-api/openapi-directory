package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLicenseTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=licenseTemplateNumber")
    public String licenseTemplateNumber;
    public DeleteLicenseTemplatePathParams withLicenseTemplateNumber(String licenseTemplateNumber) {
        this.licenseTemplateNumber = licenseTemplateNumber;
        return this;
    }
}