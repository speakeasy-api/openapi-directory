package openapisdk.models.operations;



public class DfsSlatesResponse {
    public String contentType;
    public DfsSlatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] dfsSlates;
    public DfsSlatesResponse withDfsSlates(Object[] dfsSlates) {
        this.dfsSlates = dfsSlates;
        return this;
    }
    public Long statusCode;
    public DfsSlatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}