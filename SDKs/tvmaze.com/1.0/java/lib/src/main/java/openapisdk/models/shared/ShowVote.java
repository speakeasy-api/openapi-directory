package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ShowVote {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_id")
    public Long showId;
    public ShowVote withShowId(Long showId) {
        this.showId = showId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vote")
    public Long vote;
    public ShowVote withVote(Long vote) {
        this.vote = vote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voted_at")
    public Long votedAt;
    public ShowVote withVotedAt(Long votedAt) {
        this.votedAt = votedAt;
        return this;
    }
}