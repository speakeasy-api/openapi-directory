package openapisdk.models.operations;



public class ServicecontrolServicesAllocateQuotaResponse {
    public openapisdk.models.shared.AllocateQuotaResponse allocateQuotaResponse;
    public ServicecontrolServicesAllocateQuotaResponse withAllocateQuotaResponse(openapisdk.models.shared.AllocateQuotaResponse allocateQuotaResponse) {
        this.allocateQuotaResponse = allocateQuotaResponse;
        return this;
    }
    public String contentType;
    public ServicecontrolServicesAllocateQuotaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ServicecontrolServicesAllocateQuotaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}