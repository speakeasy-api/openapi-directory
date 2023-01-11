package openapisdk.models.operations;



public class ListBuildResponse {
    public String contentType;
    public ListBuildResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListBuildListBuildResponse listBuildResponse;
    public ListBuildResponse withListBuildResponse(ListBuildListBuildResponse listBuildResponse) {
        this.listBuildResponse = listBuildResponse;
        return this;
    }
    public Long statusCode;
    public ListBuildResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}