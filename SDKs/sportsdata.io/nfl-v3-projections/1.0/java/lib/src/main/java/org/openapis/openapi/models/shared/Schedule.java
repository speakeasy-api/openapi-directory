/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Schedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwayTeam")
    public String awayTeam;

    public Schedule withAwayTeam(String awayTeam) {
        this.awayTeam = awayTeam;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwayTeamMoneyLine")
    public Long awayTeamMoneyLine;

    public Schedule withAwayTeamMoneyLine(Long awayTeamMoneyLine) {
        this.awayTeamMoneyLine = awayTeamMoneyLine;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Canceled")
    public Boolean canceled;

    public Schedule withCanceled(Boolean canceled) {
        this.canceled = canceled;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Channel")
    public String channel;

    public Schedule withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Date")
    public String date;

    public Schedule withDate(String date) {
        this.date = date;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DateTime")
    public String dateTime;

    public Schedule withDateTime(String dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Day")
    public String day;

    public Schedule withDay(String day) {
        this.day = day;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForecastDescription")
    public String forecastDescription;

    public Schedule withForecastDescription(String forecastDescription) {
        this.forecastDescription = forecastDescription;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForecastTempHigh")
    public Long forecastTempHigh;

    public Schedule withForecastTempHigh(Long forecastTempHigh) {
        this.forecastTempHigh = forecastTempHigh;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForecastTempLow")
    public Long forecastTempLow;

    public Schedule withForecastTempLow(Long forecastTempLow) {
        this.forecastTempLow = forecastTempLow;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForecastWindChill")
    public Long forecastWindChill;

    public Schedule withForecastWindChill(Long forecastWindChill) {
        this.forecastWindChill = forecastWindChill;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForecastWindSpeed")
    public Long forecastWindSpeed;

    public Schedule withForecastWindSpeed(Long forecastWindSpeed) {
        this.forecastWindSpeed = forecastWindSpeed;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GameKey")
    public String gameKey;

    public Schedule withGameKey(String gameKey) {
        this.gameKey = gameKey;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GeoLat")
    public Double geoLat;

    public Schedule withGeoLat(Double geoLat) {
        this.geoLat = geoLat;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GeoLong")
    public Double geoLong;

    public Schedule withGeoLong(Double geoLong) {
        this.geoLong = geoLong;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GlobalAwayTeamID")
    public Long globalAwayTeamID;

    public Schedule withGlobalAwayTeamID(Long globalAwayTeamID) {
        this.globalAwayTeamID = globalAwayTeamID;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GlobalGameID")
    public Long globalGameID;

    public Schedule withGlobalGameID(Long globalGameID) {
        this.globalGameID = globalGameID;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GlobalHomeTeamID")
    public Long globalHomeTeamID;

    public Schedule withGlobalHomeTeamID(Long globalHomeTeamID) {
        this.globalHomeTeamID = globalHomeTeamID;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HomeTeam")
    public String homeTeam;

    public Schedule withHomeTeam(String homeTeam) {
        this.homeTeam = homeTeam;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HomeTeamMoneyLine")
    public Long homeTeamMoneyLine;

    public Schedule withHomeTeamMoneyLine(Long homeTeamMoneyLine) {
        this.homeTeamMoneyLine = homeTeamMoneyLine;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OverUnder")
    public Double overUnder;

    public Schedule withOverUnder(Double overUnder) {
        this.overUnder = overUnder;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PointSpread")
    public Double pointSpread;

    public Schedule withPointSpread(Double pointSpread) {
        this.pointSpread = pointSpread;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScoreID")
    public Long scoreID;

    public Schedule withScoreID(Long scoreID) {
        this.scoreID = scoreID;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Season")
    public Long season;

    public Schedule withSeason(Long season) {
        this.season = season;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SeasonType")
    public Long seasonType;

    public Schedule withSeasonType(Long seasonType) {
        this.seasonType = seasonType;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StadiumDetails")
    public Stadium stadiumDetails;

    public Schedule withStadiumDetails(Stadium stadiumDetails) {
        this.stadiumDetails = stadiumDetails;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StadiumID")
    public Long stadiumID;

    public Schedule withStadiumID(Long stadiumID) {
        this.stadiumID = stadiumID;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;

    public Schedule withStatus(String status) {
        this.status = status;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Week")
    public Long week;

    public Schedule withWeek(Long week) {
        this.week = week;
        return this;
    }
    
    public Schedule(){}
}
