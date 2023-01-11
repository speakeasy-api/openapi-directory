package openapisdk.models.operations;



public class DeleteEarningByEarningCodeAndStartDateResponse {
    public String contentType;
    public DeleteEarningByEarningCodeAndStartDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteEarningByEarningCodeAndStartDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public DeleteEarningByEarningCodeAndStartDateResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
}