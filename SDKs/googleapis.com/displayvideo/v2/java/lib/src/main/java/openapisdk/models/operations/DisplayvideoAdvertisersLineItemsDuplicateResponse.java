package openapisdk.models.operations;



public class DisplayvideoAdvertisersLineItemsDuplicateResponse {
    public String contentType;
    public DisplayvideoAdvertisersLineItemsDuplicateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DuplicateLineItemResponse duplicateLineItemResponse;
    public DisplayvideoAdvertisersLineItemsDuplicateResponse withDuplicateLineItemResponse(openapisdk.models.shared.DuplicateLineItemResponse duplicateLineItemResponse) {
        this.duplicateLineItemResponse = duplicateLineItemResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersLineItemsDuplicateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}