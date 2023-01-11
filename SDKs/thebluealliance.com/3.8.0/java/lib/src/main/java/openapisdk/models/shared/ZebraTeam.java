package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ZebraTeam {
    @JsonProperty("team_key")
    public String teamKey;
    public ZebraTeam withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
    @JsonProperty("xs")
    public Double[] xs;
    public ZebraTeam withXs(Double[] xs) {
        this.xs = xs;
        return this;
    }
    @JsonProperty("ys")
    public Double[] ys;
    public ZebraTeam withYs(Double[] ys) {
        this.ys = ys;
        return this;
    }
}