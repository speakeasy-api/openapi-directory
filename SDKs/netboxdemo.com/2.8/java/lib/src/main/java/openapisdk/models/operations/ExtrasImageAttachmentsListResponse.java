package openapisdk.models.operations;



public class ExtrasImageAttachmentsListResponse {
    public String contentType;
    public ExtrasImageAttachmentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExtrasImageAttachmentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ExtrasImageAttachmentsList200ApplicationJson extrasImageAttachmentsList200ApplicationJSONObject;
    public ExtrasImageAttachmentsListResponse withExtrasImageAttachmentsList200ApplicationJsonObject(ExtrasImageAttachmentsList200ApplicationJson extrasImageAttachmentsList200ApplicationJSONObject) {
        this.extrasImageAttachmentsList200ApplicationJSONObject = extrasImageAttachmentsList200ApplicationJSONObject;
        return this;
    }
}