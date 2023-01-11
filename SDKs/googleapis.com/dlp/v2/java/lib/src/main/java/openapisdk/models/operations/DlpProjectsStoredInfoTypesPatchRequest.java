package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsStoredInfoTypesPatchRequest {
    public DlpProjectsStoredInfoTypesPatchPathParams pathParams;
    public DlpProjectsStoredInfoTypesPatchRequest withPathParams(DlpProjectsStoredInfoTypesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DlpProjectsStoredInfoTypesPatchQueryParams queryParams;
    public DlpProjectsStoredInfoTypesPatchRequest withQueryParams(DlpProjectsStoredInfoTypesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GooglePrivacyDlpV2UpdateStoredInfoTypeRequest request;
    public DlpProjectsStoredInfoTypesPatchRequest withRequest(openapisdk.models.shared.GooglePrivacyDlpV2UpdateStoredInfoTypeRequest request) {
        this.request = request;
        return this;
    }
    public DlpProjectsStoredInfoTypesPatchSecurity security;
    public DlpProjectsStoredInfoTypesPatchRequest withSecurity(DlpProjectsStoredInfoTypesPatchSecurity security) {
        this.security = security;
        return this;
    }
}