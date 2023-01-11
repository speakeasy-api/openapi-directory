package openapisdk.models.operations;



public class ListFactorResponse {
    public String contentType;
    public ListFactorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListFactorListFactorResponse listFactorResponse;
    public ListFactorResponse withListFactorResponse(ListFactorListFactorResponse listFactorResponse) {
        this.listFactorResponse = listFactorResponse;
        return this;
    }
    public Long statusCode;
    public ListFactorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}