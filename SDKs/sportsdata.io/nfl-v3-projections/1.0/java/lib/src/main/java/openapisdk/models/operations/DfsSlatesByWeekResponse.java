package openapisdk.models.operations;



public class DfsSlatesByWeekResponse {
    public String contentType;
    public DfsSlatesByWeekResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] dfsSlates;
    public DfsSlatesByWeekResponse withDfsSlates(Object[] dfsSlates) {
        this.dfsSlates = dfsSlates;
        return this;
    }
    public Long statusCode;
    public DfsSlatesByWeekResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}