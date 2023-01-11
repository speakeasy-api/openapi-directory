package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EpisodeVote {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("episode_id")
    public Long episodeId;
    public EpisodeVote withEpisodeId(Long episodeId) {
        this.episodeId = episodeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vote")
    public Long vote;
    public EpisodeVote withVote(Long vote) {
        this.vote = vote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voted_at")
    public Long votedAt;
    public EpisodeVote withVotedAt(Long votedAt) {
        this.votedAt = votedAt;
        return this;
    }
}