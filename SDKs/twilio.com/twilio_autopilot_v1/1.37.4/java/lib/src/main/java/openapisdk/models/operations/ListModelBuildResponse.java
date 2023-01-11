package openapisdk.models.operations;



public class ListModelBuildResponse {
    public String contentType;
    public ListModelBuildResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListModelBuildListModelBuildResponse listModelBuildResponse;
    public ListModelBuildResponse withListModelBuildResponse(ListModelBuildListModelBuildResponse listModelBuildResponse) {
        this.listModelBuildResponse = listModelBuildResponse;
        return this;
    }
    public Long statusCode;
    public ListModelBuildResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}