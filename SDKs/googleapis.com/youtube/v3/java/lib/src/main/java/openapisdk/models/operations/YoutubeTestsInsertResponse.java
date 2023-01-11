package openapisdk.models.operations;



public class YoutubeTestsInsertResponse {
    public String contentType;
    public YoutubeTestsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeTestsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestItem testItem;
    public YoutubeTestsInsertResponse withTestItem(openapisdk.models.shared.TestItem testItem) {
        this.testItem = testItem;
        return this;
    }
}