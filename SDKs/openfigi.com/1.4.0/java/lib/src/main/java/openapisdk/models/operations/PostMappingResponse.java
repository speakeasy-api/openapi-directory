package openapisdk.models.operations;



public class PostMappingResponse {
    public Object[] bulkMappingJobResult;
    public PostMappingResponse withBulkMappingJobResult(Object[] bulkMappingJobResult) {
        this.bulkMappingJobResult = bulkMappingJobResult;
        return this;
    }
    public String contentType;
    public PostMappingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostMappingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String postMapping400WildcardString;
    public PostMappingResponse withPostMapping400WildcardString(String postMapping400WildcardString) {
        this.postMapping400WildcardString = postMapping400WildcardString;
        return this;
    }
    public String postMapping401WildcardString;
    public PostMappingResponse withPostMapping401WildcardString(String postMapping401WildcardString) {
        this.postMapping401WildcardString = postMapping401WildcardString;
        return this;
    }
    public String postMapping406WildcardString;
    public PostMappingResponse withPostMapping406WildcardString(String postMapping406WildcardString) {
        this.postMapping406WildcardString = postMapping406WildcardString;
        return this;
    }
    public String postMapping413WildcardString;
    public PostMappingResponse withPostMapping413WildcardString(String postMapping413WildcardString) {
        this.postMapping413WildcardString = postMapping413WildcardString;
        return this;
    }
    public String postMapping500WildcardString;
    public PostMappingResponse withPostMapping500WildcardString(String postMapping500WildcardString) {
        this.postMapping500WildcardString = postMapping500WildcardString;
        return this;
    }
}