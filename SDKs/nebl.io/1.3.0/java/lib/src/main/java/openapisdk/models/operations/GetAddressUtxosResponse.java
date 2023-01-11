package openapisdk.models.operations;



public class GetAddressUtxosResponse {
    public String contentType;
    public GetAddressUtxosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAddressUtxosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetAddressUtxosResponse[] getAddressUtxosResponse;
    public GetAddressUtxosResponse withGetAddressUtxosResponse(openapisdk.models.shared.GetAddressUtxosResponse[] getAddressUtxosResponse) {
        this.getAddressUtxosResponse = getAddressUtxosResponse;
        return this;
    }
}