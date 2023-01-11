package openapisdk.models.operations;



public class GetKeywordsResponse {
    public String contentType;
    public GetKeywordsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object keywordDataList;
    public GetKeywordsResponse withKeywordDataList(Object keywordDataList) {
        this.keywordDataList = keywordDataList;
        return this;
    }
    public Long statusCode;
    public GetKeywordsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}