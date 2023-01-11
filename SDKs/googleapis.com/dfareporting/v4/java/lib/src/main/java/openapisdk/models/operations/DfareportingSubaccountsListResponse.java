package openapisdk.models.operations;



public class DfareportingSubaccountsListResponse {
    public String contentType;
    public DfareportingSubaccountsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingSubaccountsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubaccountsListResponse subaccountsListResponse;
    public DfareportingSubaccountsListResponse withSubaccountsListResponse(openapisdk.models.shared.SubaccountsListResponse subaccountsListResponse) {
        this.subaccountsListResponse = subaccountsListResponse;
        return this;
    }
}