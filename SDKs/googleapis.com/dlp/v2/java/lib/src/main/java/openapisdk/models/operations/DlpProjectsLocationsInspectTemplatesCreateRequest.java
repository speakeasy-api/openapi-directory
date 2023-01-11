package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsLocationsInspectTemplatesCreateRequest {
    public DlpProjectsLocationsInspectTemplatesCreatePathParams pathParams;
    public DlpProjectsLocationsInspectTemplatesCreateRequest withPathParams(DlpProjectsLocationsInspectTemplatesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DlpProjectsLocationsInspectTemplatesCreateQueryParams queryParams;
    public DlpProjectsLocationsInspectTemplatesCreateRequest withQueryParams(DlpProjectsLocationsInspectTemplatesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GooglePrivacyDlpV2CreateInspectTemplateRequestInput request;
    public DlpProjectsLocationsInspectTemplatesCreateRequest withRequest(openapisdk.models.shared.GooglePrivacyDlpV2CreateInspectTemplateRequestInput request) {
        this.request = request;
        return this;
    }
    public DlpProjectsLocationsInspectTemplatesCreateSecurity security;
    public DlpProjectsLocationsInspectTemplatesCreateRequest withSecurity(DlpProjectsLocationsInspectTemplatesCreateSecurity security) {
        this.security = security;
        return this;
    }
}