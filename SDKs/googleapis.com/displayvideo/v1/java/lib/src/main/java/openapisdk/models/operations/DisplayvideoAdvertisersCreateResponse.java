package openapisdk.models.operations;



public class DisplayvideoAdvertisersCreateResponse {
    public openapisdk.models.shared.Advertiser advertiser;
    public DisplayvideoAdvertisersCreateResponse withAdvertiser(openapisdk.models.shared.Advertiser advertiser) {
        this.advertiser = advertiser;
        return this;
    }
    public String contentType;
    public DisplayvideoAdvertisersCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}