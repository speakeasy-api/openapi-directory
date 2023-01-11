package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Responsivity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invited")
    public Long invited;
    public Responsivity withInvited(Long invited) {
        this.invited = invited;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("month")
    public String month;
    public Responsivity withMonth(String month) {
        this.month = month;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notEntered")
    public Long notEntered;
    public Responsivity withNotEntered(Long notEntered) {
        this.notEntered = notEntered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onlyEntered")
    public Long onlyEntered;
    public Responsivity withOnlyEntered(Long onlyEntered) {
        this.onlyEntered = onlyEntered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Float score;
    public Responsivity withScore(Float score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("week")
    public String week;
    public Responsivity withWeek(String week) {
        this.week = week;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("worked")
    public Long worked;
    public Responsivity withWorked(Long worked) {
        this.worked = worked;
        return this;
    }
}