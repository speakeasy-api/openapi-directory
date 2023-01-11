package openapisdk.models.operations;



public class GetContinuousProjectsResponse {
    public String contentType;
    public GetContinuousProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ContinuousProjectsList continuousProjectsList;
    public GetContinuousProjectsResponse withContinuousProjectsList(openapisdk.models.shared.ContinuousProjectsList continuousProjectsList) {
        this.continuousProjectsList = continuousProjectsList;
        return this;
    }
    public Long statusCode;
    public GetContinuousProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}