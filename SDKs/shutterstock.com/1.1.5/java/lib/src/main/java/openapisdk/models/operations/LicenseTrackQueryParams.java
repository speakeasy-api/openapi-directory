package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LicenseTrackQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public LicenseTrackLicenseEnum license;
    public LicenseTrackQueryParams withLicense(LicenseTrackLicenseEnum license) {
        this.license = license;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search_id")
    public String searchId;
    public LicenseTrackQueryParams withSearchId(String searchId) {
        this.searchId = searchId;
        return this;
    }
}