package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsLocationsImageRedactRequest {
    public DlpProjectsLocationsImageRedactPathParams pathParams;
    public DlpProjectsLocationsImageRedactRequest withPathParams(DlpProjectsLocationsImageRedactPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DlpProjectsLocationsImageRedactQueryParams queryParams;
    public DlpProjectsLocationsImageRedactRequest withQueryParams(DlpProjectsLocationsImageRedactQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GooglePrivacyDlpV2RedactImageRequest request;
    public DlpProjectsLocationsImageRedactRequest withRequest(openapisdk.models.shared.GooglePrivacyDlpV2RedactImageRequest request) {
        this.request = request;
        return this;
    }
    public DlpProjectsLocationsImageRedactSecurity security;
    public DlpProjectsLocationsImageRedactRequest withSecurity(DlpProjectsLocationsImageRedactSecurity security) {
        this.security = security;
        return this;
    }
}