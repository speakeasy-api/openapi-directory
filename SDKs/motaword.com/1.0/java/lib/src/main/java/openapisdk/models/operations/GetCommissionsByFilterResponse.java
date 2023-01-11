package openapisdk.models.operations;



public class GetCommissionsByFilterResponse {
    public openapisdk.models.shared.CommissionList commissionList;
    public GetCommissionsByFilterResponse withCommissionList(openapisdk.models.shared.CommissionList commissionList) {
        this.commissionList = commissionList;
        return this;
    }
    public String contentType;
    public GetCommissionsByFilterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetCommissionsByFilterResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetCommissionsByFilterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}