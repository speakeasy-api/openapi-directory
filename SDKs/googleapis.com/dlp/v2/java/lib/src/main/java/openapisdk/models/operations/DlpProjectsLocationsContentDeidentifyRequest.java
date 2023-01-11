package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsLocationsContentDeidentifyRequest {
    public DlpProjectsLocationsContentDeidentifyPathParams pathParams;
    public DlpProjectsLocationsContentDeidentifyRequest withPathParams(DlpProjectsLocationsContentDeidentifyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DlpProjectsLocationsContentDeidentifyQueryParams queryParams;
    public DlpProjectsLocationsContentDeidentifyRequest withQueryParams(DlpProjectsLocationsContentDeidentifyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GooglePrivacyDlpV2DeidentifyContentRequest request;
    public DlpProjectsLocationsContentDeidentifyRequest withRequest(openapisdk.models.shared.GooglePrivacyDlpV2DeidentifyContentRequest request) {
        this.request = request;
        return this;
    }
    public DlpProjectsLocationsContentDeidentifySecurity security;
    public DlpProjectsLocationsContentDeidentifyRequest withSecurity(DlpProjectsLocationsContentDeidentifySecurity security) {
        this.security = security;
        return this;
    }
}