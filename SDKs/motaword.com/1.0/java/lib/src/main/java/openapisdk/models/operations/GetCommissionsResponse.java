package openapisdk.models.operations;



public class GetCommissionsResponse {
    public openapisdk.models.shared.CommissionList commissionList;
    public GetCommissionsResponse withCommissionList(openapisdk.models.shared.CommissionList commissionList) {
        this.commissionList = commissionList;
        return this;
    }
    public String contentType;
    public GetCommissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetCommissionsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetCommissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}