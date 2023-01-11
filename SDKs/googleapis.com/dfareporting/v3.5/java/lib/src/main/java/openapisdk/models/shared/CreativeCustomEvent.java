package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeCustomEvent
 * Creative Custom Event.
**/
public class CreativeCustomEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserCustomEventId")
    public String advertiserCustomEventId;
    public CreativeCustomEvent withAdvertiserCustomEventId(String advertiserCustomEventId) {
        this.advertiserCustomEventId = advertiserCustomEventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserCustomEventName")
    public String advertiserCustomEventName;
    public CreativeCustomEvent withAdvertiserCustomEventName(String advertiserCustomEventName) {
        this.advertiserCustomEventName = advertiserCustomEventName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserCustomEventType")
    public CreativeCustomEventAdvertiserCustomEventTypeEnum advertiserCustomEventType;
    public CreativeCustomEvent withAdvertiserCustomEventType(CreativeCustomEventAdvertiserCustomEventTypeEnum advertiserCustomEventType) {
        this.advertiserCustomEventType = advertiserCustomEventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artworkLabel")
    public String artworkLabel;
    public CreativeCustomEvent withArtworkLabel(String artworkLabel) {
        this.artworkLabel = artworkLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artworkType")
    public CreativeCustomEventArtworkTypeEnum artworkType;
    public CreativeCustomEvent withArtworkType(CreativeCustomEventArtworkTypeEnum artworkType) {
        this.artworkType = artworkType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exitClickThroughUrl")
    public CreativeClickThroughUrl exitClickThroughUrl;
    public CreativeCustomEvent withExitClickThroughUrl(CreativeClickThroughUrl exitClickThroughUrl) {
        this.exitClickThroughUrl = exitClickThroughUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CreativeCustomEvent withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("popupWindowProperties")
    public PopupWindowProperties popupWindowProperties;
    public CreativeCustomEvent withPopupWindowProperties(PopupWindowProperties popupWindowProperties) {
        this.popupWindowProperties = popupWindowProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetType")
    public CreativeCustomEventTargetTypeEnum targetType;
    public CreativeCustomEvent withTargetType(CreativeCustomEventTargetTypeEnum targetType) {
        this.targetType = targetType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoReportingId")
    public String videoReportingId;
    public CreativeCustomEvent withVideoReportingId(String videoReportingId) {
        this.videoReportingId = videoReportingId;
        return this;
    }
}