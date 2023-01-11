package openapisdk.models.operations;



public class GetV2CvSimilarVideosRequest {
    public GetV2CvSimilarVideosQueryParams queryParams;
    public GetV2CvSimilarVideosRequest withQueryParams(GetV2CvSimilarVideosQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetV2CvSimilarVideosSecurity security;
    public GetV2CvSimilarVideosRequest withSecurity(GetV2CvSimilarVideosSecurity security) {
        this.security = security;
        return this;
    }
}