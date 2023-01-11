package openapisdk.models.operations;



public class DisplayvideoGuaranteedOrdersListResponse {
    public String contentType;
    public DisplayvideoGuaranteedOrdersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListGuaranteedOrdersResponse listGuaranteedOrdersResponse;
    public DisplayvideoGuaranteedOrdersListResponse withListGuaranteedOrdersResponse(openapisdk.models.shared.ListGuaranteedOrdersResponse listGuaranteedOrdersResponse) {
        this.listGuaranteedOrdersResponse = listGuaranteedOrdersResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoGuaranteedOrdersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}