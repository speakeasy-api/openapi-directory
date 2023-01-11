package openapisdk.models.operations;



public class UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse {
    public String contentType;
    public UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJson userSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSONObject;
    public UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse withUserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJsonObject(UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJson userSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSONObject) {
        this.userSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSONObject = userSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSONObject;
        return this;
    }
}