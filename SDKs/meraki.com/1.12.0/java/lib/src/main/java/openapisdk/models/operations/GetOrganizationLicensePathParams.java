package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationLicensePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=licenseId")
    public String licenseId;
    public GetOrganizationLicensePathParams withLicenseId(String licenseId) {
        this.licenseId = licenseId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationLicensePathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}