package openapisdk.models.operations;



public class DisplayvideoAdvertisersGetResponse {
    public openapisdk.models.shared.Advertiser advertiser;
    public DisplayvideoAdvertisersGetResponse withAdvertiser(openapisdk.models.shared.Advertiser advertiser) {
        this.advertiser = advertiser;
        return this;
    }
    public String contentType;
    public DisplayvideoAdvertisersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}