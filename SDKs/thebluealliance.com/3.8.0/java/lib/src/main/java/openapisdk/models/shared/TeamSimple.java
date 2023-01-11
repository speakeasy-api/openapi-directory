package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamSimple {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public TeamSimple withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public TeamSimple withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("key")
    public String key;
    public TeamSimple withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public TeamSimple withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nickname")
    public String nickname;
    public TeamSimple withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state_prov")
    public String stateProv;
    public TeamSimple withStateProv(String stateProv) {
        this.stateProv = stateProv;
        return this;
    }
    @JsonProperty("team_number")
    public Long teamNumber;
    public TeamSimple withTeamNumber(Long teamNumber) {
        this.teamNumber = teamNumber;
        return this;
    }
}