package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsLocationsContentInspectRequest {
    public DlpProjectsLocationsContentInspectPathParams pathParams;
    public DlpProjectsLocationsContentInspectRequest withPathParams(DlpProjectsLocationsContentInspectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DlpProjectsLocationsContentInspectQueryParams queryParams;
    public DlpProjectsLocationsContentInspectRequest withQueryParams(DlpProjectsLocationsContentInspectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GooglePrivacyDlpV2InspectContentRequest request;
    public DlpProjectsLocationsContentInspectRequest withRequest(openapisdk.models.shared.GooglePrivacyDlpV2InspectContentRequest request) {
        this.request = request;
        return this;
    }
    public DlpProjectsLocationsContentInspectSecurity security;
    public DlpProjectsLocationsContentInspectRequest withSecurity(DlpProjectsLocationsContentInspectSecurity security) {
        this.security = security;
        return this;
    }
}