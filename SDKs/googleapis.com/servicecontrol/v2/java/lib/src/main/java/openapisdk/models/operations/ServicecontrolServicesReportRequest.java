package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicecontrolServicesReportRequest {
    public ServicecontrolServicesReportPathParams pathParams;
    public ServicecontrolServicesReportRequest withPathParams(ServicecontrolServicesReportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicecontrolServicesReportQueryParams queryParams;
    public ServicecontrolServicesReportRequest withQueryParams(ServicecontrolServicesReportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReportRequest request;
    public ServicecontrolServicesReportRequest withRequest(openapisdk.models.shared.ReportRequest request) {
        this.request = request;
        return this;
    }
    public ServicecontrolServicesReportSecurity security;
    public ServicecontrolServicesReportRequest withSecurity(ServicecontrolServicesReportSecurity security) {
        this.security = security;
        return this;
    }
}