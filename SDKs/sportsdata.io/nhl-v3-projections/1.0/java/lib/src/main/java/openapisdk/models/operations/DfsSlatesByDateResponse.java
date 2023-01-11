package openapisdk.models.operations;



public class DfsSlatesByDateResponse {
    public String contentType;
    public DfsSlatesByDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] dfsSlates;
    public DfsSlatesByDateResponse withDfsSlates(Object[] dfsSlates) {
        this.dfsSlates = dfsSlates;
        return this;
    }
    public Long statusCode;
    public DfsSlatesByDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}