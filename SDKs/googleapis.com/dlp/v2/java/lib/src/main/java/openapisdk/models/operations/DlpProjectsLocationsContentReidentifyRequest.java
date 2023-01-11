package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsLocationsContentReidentifyRequest {
    public DlpProjectsLocationsContentReidentifyPathParams pathParams;
    public DlpProjectsLocationsContentReidentifyRequest withPathParams(DlpProjectsLocationsContentReidentifyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DlpProjectsLocationsContentReidentifyQueryParams queryParams;
    public DlpProjectsLocationsContentReidentifyRequest withQueryParams(DlpProjectsLocationsContentReidentifyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GooglePrivacyDlpV2ReidentifyContentRequest request;
    public DlpProjectsLocationsContentReidentifyRequest withRequest(openapisdk.models.shared.GooglePrivacyDlpV2ReidentifyContentRequest request) {
        this.request = request;
        return this;
    }
    public DlpProjectsLocationsContentReidentifySecurity security;
    public DlpProjectsLocationsContentReidentifyRequest withSecurity(DlpProjectsLocationsContentReidentifySecurity security) {
        this.security = security;
        return this;
    }
}