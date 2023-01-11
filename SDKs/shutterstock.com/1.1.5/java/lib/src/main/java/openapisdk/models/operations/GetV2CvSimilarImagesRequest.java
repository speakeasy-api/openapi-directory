package openapisdk.models.operations;



public class GetV2CvSimilarImagesRequest {
    public GetV2CvSimilarImagesQueryParams queryParams;
    public GetV2CvSimilarImagesRequest withQueryParams(GetV2CvSimilarImagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetV2CvSimilarImagesSecurity security;
    public GetV2CvSimilarImagesRequest withSecurity(GetV2CvSimilarImagesSecurity security) {
        this.security = security;
        return this;
    }
}