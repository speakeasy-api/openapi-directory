package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApiStatus {
    @JsonProperty("android")
    public ApiStatusAppVersion android;
    public ApiStatus withAndroid(ApiStatusAppVersion android) {
        this.android = android;
        return this;
    }
    @JsonProperty("current_season")
    public Long currentSeason;
    public ApiStatus withCurrentSeason(Long currentSeason) {
        this.currentSeason = currentSeason;
        return this;
    }
    @JsonProperty("down_events")
    public String[] downEvents;
    public ApiStatus withDownEvents(String[] downEvents) {
        this.downEvents = downEvents;
        return this;
    }
    @JsonProperty("ios")
    public ApiStatusAppVersion ios;
    public ApiStatus withIos(ApiStatusAppVersion ios) {
        this.ios = ios;
        return this;
    }
    @JsonProperty("is_datafeed_down")
    public Boolean isDatafeedDown;
    public ApiStatus withIsDatafeedDown(Boolean isDatafeedDown) {
        this.isDatafeedDown = isDatafeedDown;
        return this;
    }
    @JsonProperty("max_season")
    public Long maxSeason;
    public ApiStatus withMaxSeason(Long maxSeason) {
        this.maxSeason = maxSeason;
        return this;
    }
}