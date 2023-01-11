package openapisdk.models.operations;



public class GetOfferingsOfferingIdAnalyticsMarksQuizzesResponse {
    public String contentType;
    public GetOfferingsOfferingIdAnalyticsMarksQuizzesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdAnalyticsMarksQuizzesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.QuizMarkResponse[] quizMarkResponses;
    public GetOfferingsOfferingIdAnalyticsMarksQuizzesResponse withQuizMarkResponses(openapisdk.models.shared.QuizMarkResponse[] quizMarkResponses) {
        this.quizMarkResponses = quizMarkResponses;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdAnalyticsMarksQuizzesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}