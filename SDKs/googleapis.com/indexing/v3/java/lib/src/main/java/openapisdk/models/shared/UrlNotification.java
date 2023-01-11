package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UrlNotification
 * `UrlNotification` is the resource used in all Indexing API calls. It describes one event in the life cycle of a Web Document.
**/
public class UrlNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notifyTime")
    public String notifyTime;
    public UrlNotification withNotifyTime(String notifyTime) {
        this.notifyTime = notifyTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UrlNotificationTypeEnum type;
    public UrlNotification withType(UrlNotificationTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public UrlNotification withUrl(String url) {
        this.url = url;
        return this;
    }
}