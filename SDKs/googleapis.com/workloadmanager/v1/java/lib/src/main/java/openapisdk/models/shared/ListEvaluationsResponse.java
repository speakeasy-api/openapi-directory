package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListEvaluationsResponse
 * Message for response to listing Evaluations
**/
public class ListEvaluationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evaluations")
    public Evaluation[] evaluations;
    public ListEvaluationsResponse withEvaluations(Evaluation[] evaluations) {
        this.evaluations = evaluations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListEvaluationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListEvaluationsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}