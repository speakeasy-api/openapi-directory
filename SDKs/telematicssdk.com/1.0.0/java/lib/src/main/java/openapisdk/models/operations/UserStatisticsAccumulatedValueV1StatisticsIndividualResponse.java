package openapisdk.models.operations;



public class UserStatisticsAccumulatedValueV1StatisticsIndividualResponse {
    public String contentType;
    public UserStatisticsAccumulatedValueV1StatisticsIndividualResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UserStatisticsAccumulatedValueV1StatisticsIndividualResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UserStatisticsAccumulatedValueV1StatisticsIndividualResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJson userStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSONObject;
    public UserStatisticsAccumulatedValueV1StatisticsIndividualResponse withUserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJsonObject(UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJson userStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSONObject) {
        this.userStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSONObject = userStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSONObject;
        return this;
    }
}