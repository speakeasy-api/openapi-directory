package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicecontrolServicesAllocateQuotaRequest {
    public ServicecontrolServicesAllocateQuotaPathParams pathParams;
    public ServicecontrolServicesAllocateQuotaRequest withPathParams(ServicecontrolServicesAllocateQuotaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicecontrolServicesAllocateQuotaQueryParams queryParams;
    public ServicecontrolServicesAllocateQuotaRequest withQueryParams(ServicecontrolServicesAllocateQuotaQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AllocateQuotaRequest request;
    public ServicecontrolServicesAllocateQuotaRequest withRequest(openapisdk.models.shared.AllocateQuotaRequest request) {
        this.request = request;
        return this;
    }
    public ServicecontrolServicesAllocateQuotaSecurity security;
    public ServicecontrolServicesAllocateQuotaRequest withSecurity(ServicecontrolServicesAllocateQuotaSecurity security) {
        this.security = security;
        return this;
    }
}