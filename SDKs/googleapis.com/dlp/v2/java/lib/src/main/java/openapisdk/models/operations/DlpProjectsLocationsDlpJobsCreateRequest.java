package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsLocationsDlpJobsCreateRequest {
    public DlpProjectsLocationsDlpJobsCreatePathParams pathParams;
    public DlpProjectsLocationsDlpJobsCreateRequest withPathParams(DlpProjectsLocationsDlpJobsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DlpProjectsLocationsDlpJobsCreateQueryParams queryParams;
    public DlpProjectsLocationsDlpJobsCreateRequest withQueryParams(DlpProjectsLocationsDlpJobsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GooglePrivacyDlpV2CreateDlpJobRequest request;
    public DlpProjectsLocationsDlpJobsCreateRequest withRequest(openapisdk.models.shared.GooglePrivacyDlpV2CreateDlpJobRequest request) {
        this.request = request;
        return this;
    }
    public DlpProjectsLocationsDlpJobsCreateSecurity security;
    public DlpProjectsLocationsDlpJobsCreateRequest withSecurity(DlpProjectsLocationsDlpJobsCreateSecurity security) {
        this.security = security;
        return this;
    }
}