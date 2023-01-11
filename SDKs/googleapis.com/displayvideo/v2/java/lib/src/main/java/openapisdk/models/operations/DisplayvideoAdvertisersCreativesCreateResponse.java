package openapisdk.models.operations;



public class DisplayvideoAdvertisersCreativesCreateResponse {
    public String contentType;
    public DisplayvideoAdvertisersCreativesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Creative creative;
    public DisplayvideoAdvertisersCreativesCreateResponse withCreative(openapisdk.models.shared.Creative creative) {
        this.creative = creative;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersCreativesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}