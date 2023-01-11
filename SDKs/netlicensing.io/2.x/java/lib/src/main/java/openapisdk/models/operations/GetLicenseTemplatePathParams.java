package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLicenseTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=licenseTemplateNumber")
    public String licenseTemplateNumber;
    public GetLicenseTemplatePathParams withLicenseTemplateNumber(String licenseTemplateNumber) {
        this.licenseTemplateNumber = licenseTemplateNumber;
        return this;
    }
}