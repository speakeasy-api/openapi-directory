/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Standing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("City")
    public String city;

    public Standing withCity(String city) {
        this.city = city;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Conference")
    public String conference;

    public Standing withConference(String conference) {
        this.conference = conference;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConferenceLosses")
    public Long conferenceLosses;

    public Standing withConferenceLosses(Long conferenceLosses) {
        this.conferenceLosses = conferenceLosses;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConferenceRank")
    public Long conferenceRank;

    public Standing withConferenceRank(Long conferenceRank) {
        this.conferenceRank = conferenceRank;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConferenceWins")
    public Long conferenceWins;

    public Standing withConferenceWins(Long conferenceWins) {
        this.conferenceWins = conferenceWins;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Division")
    public String division;

    public Standing withDivision(String division) {
        this.division = division;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DivisionLosses")
    public Long divisionLosses;

    public Standing withDivisionLosses(Long divisionLosses) {
        this.divisionLosses = divisionLosses;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DivisionRank")
    public Long divisionRank;

    public Standing withDivisionRank(Long divisionRank) {
        this.divisionRank = divisionRank;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DivisionWins")
    public Long divisionWins;

    public Standing withDivisionWins(Long divisionWins) {
        this.divisionWins = divisionWins;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GlobalTeamID")
    public Long globalTeamID;

    public Standing withGlobalTeamID(Long globalTeamID) {
        this.globalTeamID = globalTeamID;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Key")
    public String key;

    public Standing withKey(String key) {
        this.key = key;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Losses")
    public Long losses;

    public Standing withLosses(Long losses) {
        this.losses = losses;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;

    public Standing withName(String name) {
        this.name = name;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OvertimeLosses")
    public Long overtimeLosses;

    public Standing withOvertimeLosses(Long overtimeLosses) {
        this.overtimeLosses = overtimeLosses;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Percentage")
    public Double percentage;

    public Standing withPercentage(Double percentage) {
        this.percentage = percentage;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Season")
    public Long season;

    public Standing withSeason(Long season) {
        this.season = season;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SeasonType")
    public Long seasonType;

    public Standing withSeasonType(Long seasonType) {
        this.seasonType = seasonType;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShutoutWins")
    public Long shutoutWins;

    public Standing withShutoutWins(Long shutoutWins) {
        this.shutoutWins = shutoutWins;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TeamID")
    public Long teamID;

    public Standing withTeamID(Long teamID) {
        this.teamID = teamID;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Wins")
    public Long wins;

    public Standing withWins(Long wins) {
        this.wins = wins;
        return this;
    }
    
    public Standing(){}
}
