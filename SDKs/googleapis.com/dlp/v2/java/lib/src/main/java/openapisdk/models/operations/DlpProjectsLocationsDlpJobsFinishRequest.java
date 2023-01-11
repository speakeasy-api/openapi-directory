package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsLocationsDlpJobsFinishRequest {
    public DlpProjectsLocationsDlpJobsFinishPathParams pathParams;
    public DlpProjectsLocationsDlpJobsFinishRequest withPathParams(DlpProjectsLocationsDlpJobsFinishPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DlpProjectsLocationsDlpJobsFinishQueryParams queryParams;
    public DlpProjectsLocationsDlpJobsFinishRequest withQueryParams(DlpProjectsLocationsDlpJobsFinishQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DlpProjectsLocationsDlpJobsFinishRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public DlpProjectsLocationsDlpJobsFinishSecurity security;
    public DlpProjectsLocationsDlpJobsFinishRequest withSecurity(DlpProjectsLocationsDlpJobsFinishSecurity security) {
        this.security = security;
        return this;
    }
}