package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsStoredInfoTypesCreateRequest {
    public DlpProjectsStoredInfoTypesCreatePathParams pathParams;
    public DlpProjectsStoredInfoTypesCreateRequest withPathParams(DlpProjectsStoredInfoTypesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DlpProjectsStoredInfoTypesCreateQueryParams queryParams;
    public DlpProjectsStoredInfoTypesCreateRequest withQueryParams(DlpProjectsStoredInfoTypesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GooglePrivacyDlpV2CreateStoredInfoTypeRequest request;
    public DlpProjectsStoredInfoTypesCreateRequest withRequest(openapisdk.models.shared.GooglePrivacyDlpV2CreateStoredInfoTypeRequest request) {
        this.request = request;
        return this;
    }
    public DlpProjectsStoredInfoTypesCreateSecurity security;
    public DlpProjectsStoredInfoTypesCreateRequest withSecurity(DlpProjectsStoredInfoTypesCreateSecurity security) {
        this.security = security;
        return this;
    }
}