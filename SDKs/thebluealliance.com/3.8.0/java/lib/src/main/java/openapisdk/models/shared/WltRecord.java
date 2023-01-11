package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * WltRecord
 * A Win-Loss-Tie record for a team, or an alliance.
**/
public class WltRecord {
    @JsonProperty("losses")
    public Long losses;
    public WltRecord withLosses(Long losses) {
        this.losses = losses;
        return this;
    }
    @JsonProperty("ties")
    public Long ties;
    public WltRecord withTies(Long ties) {
        this.ties = ties;
        return this;
    }
    @JsonProperty("wins")
    public Long wins;
    public WltRecord withWins(Long wins) {
        this.wins = wins;
        return this;
    }
}