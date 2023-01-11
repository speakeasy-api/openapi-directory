package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAnswersResponse
 * Response message for QuestionsAndAnswers.ListAnswers
**/
public class ListAnswersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answers")
    public Answer[] answers;
    public ListAnswersResponse withAnswers(Answer[] answers) {
        this.answers = answers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAnswersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public ListAnswersResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}