package openapisdk.models.operations;



public class DisplayvideoAdvertisersCreativesGetResponse {
    public String contentType;
    public DisplayvideoAdvertisersCreativesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Creative creative;
    public DisplayvideoAdvertisersCreativesGetResponse withCreative(openapisdk.models.shared.Creative creative) {
        this.creative = creative;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersCreativesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}