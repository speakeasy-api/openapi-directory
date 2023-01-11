package openapisdk.models.operations;



public class CloudresourcemanagerTagValuesGetResponse {
    public String contentType;
    public CloudresourcemanagerTagValuesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerTagValuesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TagValue tagValue;
    public CloudresourcemanagerTagValuesGetResponse withTagValue(openapisdk.models.shared.TagValue tagValue) {
        this.tagValue = tagValue;
        return this;
    }
}