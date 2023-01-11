package openapisdk.models.operations;



public class DisplayvideoAdvertisersCreativesPatchResponse {
    public String contentType;
    public DisplayvideoAdvertisersCreativesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Creative creative;
    public DisplayvideoAdvertisersCreativesPatchResponse withCreative(openapisdk.models.shared.Creative creative) {
        this.creative = creative;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersCreativesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}