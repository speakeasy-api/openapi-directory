package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UrlNotificationMetadata
 * Summary of the most recent Indexing API notifications successfully received, for a given URL.
**/
public class UrlNotificationMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestRemove")
    public UrlNotification latestRemove;
    public UrlNotificationMetadata withLatestRemove(UrlNotification latestRemove) {
        this.latestRemove = latestRemove;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestUpdate")
    public UrlNotification latestUpdate;
    public UrlNotificationMetadata withLatestUpdate(UrlNotification latestUpdate) {
        this.latestUpdate = latestUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public UrlNotificationMetadata withUrl(String url) {
        this.url = url;
        return this;
    }
}