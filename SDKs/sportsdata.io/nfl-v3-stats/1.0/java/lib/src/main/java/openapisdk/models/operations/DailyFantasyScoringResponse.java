package openapisdk.models.operations;



public class DailyFantasyScoringResponse {
    public String contentType;
    public DailyFantasyScoringResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] dailyFantasyScorings;
    public DailyFantasyScoringResponse withDailyFantasyScorings(Object[] dailyFantasyScorings) {
        this.dailyFantasyScorings = dailyFantasyScorings;
        return this;
    }
    public Long statusCode;
    public DailyFantasyScoringResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}