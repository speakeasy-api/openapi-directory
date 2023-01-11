package openapisdk.models.operations;



public class ListMoodsResponse {
    public String contentType;
    public ListMoodsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MoodList moodList;
    public ListMoodsResponse withMoodList(openapisdk.models.shared.MoodList moodList) {
        this.moodList = moodList;
        return this;
    }
    public Long statusCode;
    public ListMoodsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}