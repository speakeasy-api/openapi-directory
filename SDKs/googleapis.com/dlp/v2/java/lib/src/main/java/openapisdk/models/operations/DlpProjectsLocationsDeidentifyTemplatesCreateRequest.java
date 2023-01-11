package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsLocationsDeidentifyTemplatesCreateRequest {
    public DlpProjectsLocationsDeidentifyTemplatesCreatePathParams pathParams;
    public DlpProjectsLocationsDeidentifyTemplatesCreateRequest withPathParams(DlpProjectsLocationsDeidentifyTemplatesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DlpProjectsLocationsDeidentifyTemplatesCreateQueryParams queryParams;
    public DlpProjectsLocationsDeidentifyTemplatesCreateRequest withQueryParams(DlpProjectsLocationsDeidentifyTemplatesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GooglePrivacyDlpV2CreateDeidentifyTemplateRequestInput request;
    public DlpProjectsLocationsDeidentifyTemplatesCreateRequest withRequest(openapisdk.models.shared.GooglePrivacyDlpV2CreateDeidentifyTemplateRequestInput request) {
        this.request = request;
        return this;
    }
    public DlpProjectsLocationsDeidentifyTemplatesCreateSecurity security;
    public DlpProjectsLocationsDeidentifyTemplatesCreateRequest withSecurity(DlpProjectsLocationsDeidentifyTemplatesCreateSecurity security) {
        this.security = security;
        return this;
    }
}