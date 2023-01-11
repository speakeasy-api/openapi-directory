package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Leaderboard
 * The Leaderboard resource.
**/
public class Leaderboard {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iconUrl")
    public String iconUrl;
    public Leaderboard withIconUrl(String iconUrl) {
        this.iconUrl = iconUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Leaderboard withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isIconUrlDefault")
    public Boolean isIconUrlDefault;
    public Leaderboard withIsIconUrlDefault(Boolean isIconUrlDefault) {
        this.isIconUrlDefault = isIconUrlDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Leaderboard withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Leaderboard withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public LeaderboardOrderEnum order;
    public Leaderboard withOrder(LeaderboardOrderEnum order) {
        this.order = order;
        return this;
    }
}