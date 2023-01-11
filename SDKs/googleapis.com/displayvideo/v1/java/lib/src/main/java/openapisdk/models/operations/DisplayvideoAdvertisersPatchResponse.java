package openapisdk.models.operations;



public class DisplayvideoAdvertisersPatchResponse {
    public openapisdk.models.shared.Advertiser advertiser;
    public DisplayvideoAdvertisersPatchResponse withAdvertiser(openapisdk.models.shared.Advertiser advertiser) {
        this.advertiser = advertiser;
        return this;
    }
    public String contentType;
    public DisplayvideoAdvertisersPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}