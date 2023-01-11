package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AndroidNotification
 * Notification to send to android devices.
**/
public class AndroidNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public AndroidNotification withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bodyLocArgs")
    public String[] bodyLocArgs;
    public AndroidNotification withBodyLocArgs(String[] bodyLocArgs) {
        this.bodyLocArgs = bodyLocArgs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bodyLocKey")
    public String bodyLocKey;
    public AndroidNotification withBodyLocKey(String bodyLocKey) {
        this.bodyLocKey = bodyLocKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bypassProxyNotification")
    public Boolean bypassProxyNotification;
    public AndroidNotification withBypassProxyNotification(Boolean bypassProxyNotification) {
        this.bypassProxyNotification = bypassProxyNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelId")
    public String channelId;
    public AndroidNotification withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickAction")
    public String clickAction;
    public AndroidNotification withClickAction(String clickAction) {
        this.clickAction = clickAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public AndroidNotification withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultLightSettings")
    public Boolean defaultLightSettings;
    public AndroidNotification withDefaultLightSettings(Boolean defaultLightSettings) {
        this.defaultLightSettings = defaultLightSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultSound")
    public Boolean defaultSound;
    public AndroidNotification withDefaultSound(Boolean defaultSound) {
        this.defaultSound = defaultSound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultVibrateTimings")
    public Boolean defaultVibrateTimings;
    public AndroidNotification withDefaultVibrateTimings(Boolean defaultVibrateTimings) {
        this.defaultVibrateTimings = defaultVibrateTimings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTime")
    public String eventTime;
    public AndroidNotification withEventTime(String eventTime) {
        this.eventTime = eventTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icon")
    public String icon;
    public AndroidNotification withIcon(String icon) {
        this.icon = icon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public AndroidNotification withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lightSettings")
    public LightSettings lightSettings;
    public AndroidNotification withLightSettings(LightSettings lightSettings) {
        this.lightSettings = lightSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localOnly")
    public Boolean localOnly;
    public AndroidNotification withLocalOnly(Boolean localOnly) {
        this.localOnly = localOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationCount")
    public Integer notificationCount;
    public AndroidNotification withNotificationCount(Integer notificationCount) {
        this.notificationCount = notificationCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationPriority")
    public AndroidNotificationNotificationPriorityEnum notificationPriority;
    public AndroidNotification withNotificationPriority(AndroidNotificationNotificationPriorityEnum notificationPriority) {
        this.notificationPriority = notificationPriority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sound")
    public String sound;
    public AndroidNotification withSound(String sound) {
        this.sound = sound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sticky")
    public Boolean sticky;
    public AndroidNotification withSticky(Boolean sticky) {
        this.sticky = sticky;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public AndroidNotification withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ticker")
    public String ticker;
    public AndroidNotification withTicker(String ticker) {
        this.ticker = ticker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public AndroidNotification withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("titleLocArgs")
    public String[] titleLocArgs;
    public AndroidNotification withTitleLocArgs(String[] titleLocArgs) {
        this.titleLocArgs = titleLocArgs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("titleLocKey")
    public String titleLocKey;
    public AndroidNotification withTitleLocKey(String titleLocKey) {
        this.titleLocKey = titleLocKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vibrateTimings")
    public String[] vibrateTimings;
    public AndroidNotification withVibrateTimings(String[] vibrateTimings) {
        this.vibrateTimings = vibrateTimings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibility")
    public AndroidNotificationVisibilityEnum visibility;
    public AndroidNotification withVisibility(AndroidNotificationVisibilityEnum visibility) {
        this.visibility = visibility;
        return this;
    }
}