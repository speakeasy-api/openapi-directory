package openapisdk.models.operations;



public class CloudresourcemanagerTagValuesTagHoldsListResponse {
    public String contentType;
    public CloudresourcemanagerTagValuesTagHoldsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTagHoldsResponse listTagHoldsResponse;
    public CloudresourcemanagerTagValuesTagHoldsListResponse withListTagHoldsResponse(openapisdk.models.shared.ListTagHoldsResponse listTagHoldsResponse) {
        this.listTagHoldsResponse = listTagHoldsResponse;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerTagValuesTagHoldsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}