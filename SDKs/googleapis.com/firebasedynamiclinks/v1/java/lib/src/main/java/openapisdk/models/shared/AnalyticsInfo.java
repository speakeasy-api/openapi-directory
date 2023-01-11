package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnalyticsInfo
 * Tracking parameters supported by Dynamic Link.
**/
public class AnalyticsInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googlePlayAnalytics")
    public GooglePlayAnalytics googlePlayAnalytics;
    public AnalyticsInfo withGooglePlayAnalytics(GooglePlayAnalytics googlePlayAnalytics) {
        this.googlePlayAnalytics = googlePlayAnalytics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itunesConnectAnalytics")
    public ITunesConnectAnalytics itunesConnectAnalytics;
    public AnalyticsInfo withItunesConnectAnalytics(ITunesConnectAnalytics itunesConnectAnalytics) {
        this.itunesConnectAnalytics = itunesConnectAnalytics;
        return this;
    }
}