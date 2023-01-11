package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TeamRobot {
    @JsonProperty("key")
    public String key;
    public TeamRobot withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("robot_name")
    public String robotName;
    public TeamRobot withRobotName(String robotName) {
        this.robotName = robotName;
        return this;
    }
    @JsonProperty("team_key")
    public String teamKey;
    public TeamRobot withTeamKey(String teamKey) {
        this.teamKey = teamKey;
        return this;
    }
    @JsonProperty("year")
    public Long year;
    public TeamRobot withYear(Long year) {
        this.year = year;
        return this;
    }
}