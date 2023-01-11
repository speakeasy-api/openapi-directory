package openapisdk.models.operations;



public class GetPaySchedulesFromEmployerResponse {
    public String contentType;
    public GetPaySchedulesFromEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetPaySchedulesFromEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public openapisdk.models.shared.LinkCollection linkCollection;
    public GetPaySchedulesFromEmployerResponse withLinkCollection(openapisdk.models.shared.LinkCollection linkCollection) {
        this.linkCollection = linkCollection;
        return this;
    }
    public Long statusCode;
    public GetPaySchedulesFromEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}