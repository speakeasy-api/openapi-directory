package openapisdk.models.operations;



public class GetScanResultsResponse {
    public String contentType;
    public GetScanResultsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Example112[] example112s;
    public GetScanResultsResponse withExample112s(openapisdk.models.shared.Example112[] example112s) {
        this.example112s = example112s;
        return this;
    }
    public Long statusCode;
    public GetScanResultsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}