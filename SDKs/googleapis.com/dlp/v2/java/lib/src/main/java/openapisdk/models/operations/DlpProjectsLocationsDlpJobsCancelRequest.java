package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DlpProjectsLocationsDlpJobsCancelRequest {
    public DlpProjectsLocationsDlpJobsCancelPathParams pathParams;
    public DlpProjectsLocationsDlpJobsCancelRequest withPathParams(DlpProjectsLocationsDlpJobsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DlpProjectsLocationsDlpJobsCancelQueryParams queryParams;
    public DlpProjectsLocationsDlpJobsCancelRequest withQueryParams(DlpProjectsLocationsDlpJobsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DlpProjectsLocationsDlpJobsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public DlpProjectsLocationsDlpJobsCancelSecurity security;
    public DlpProjectsLocationsDlpJobsCancelRequest withSecurity(DlpProjectsLocationsDlpJobsCancelSecurity security) {
        this.security = security;
        return this;
    }
}