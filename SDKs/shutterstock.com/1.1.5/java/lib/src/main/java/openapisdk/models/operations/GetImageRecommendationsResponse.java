package openapisdk.models.operations;



public class GetImageRecommendationsResponse {
    public String contentType;
    public GetImageRecommendationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object recommendationDataList;
    public GetImageRecommendationsResponse withRecommendationDataList(Object recommendationDataList) {
        this.recommendationDataList = recommendationDataList;
        return this;
    }
    public Long statusCode;
    public GetImageRecommendationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}