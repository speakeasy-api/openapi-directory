package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicecontrolServicesCheckRequest {
    public ServicecontrolServicesCheckPathParams pathParams;
    public ServicecontrolServicesCheckRequest withPathParams(ServicecontrolServicesCheckPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicecontrolServicesCheckQueryParams queryParams;
    public ServicecontrolServicesCheckRequest withQueryParams(ServicecontrolServicesCheckQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CheckRequest request;
    public ServicecontrolServicesCheckRequest withRequest(openapisdk.models.shared.CheckRequest request) {
        this.request = request;
        return this;
    }
    public ServicecontrolServicesCheckSecurity security;
    public ServicecontrolServicesCheckRequest withSecurity(ServicecontrolServicesCheckSecurity security) {
        this.security = security;
        return this;
    }
}