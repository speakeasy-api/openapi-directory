package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocalPost
 * Represents a [local post](https://support.google.com/business/answer/7662907) for a location.
**/
public class LocalPost {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alertType")
    public LocalPostAlertTypeEnum alertType;
    public LocalPost withAlertType(LocalPostAlertTypeEnum alertType) {
        this.alertType = alertType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callToAction")
    public CallToAction callToAction;
    public LocalPost withCallToAction(CallToAction callToAction) {
        this.callToAction = callToAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public LocalPost withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event")
    public LocalPostEvent event;
    public LocalPost withEvent(LocalPostEvent event) {
        this.event = event;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public LocalPost withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media")
    public MediaItem[] media;
    public LocalPost withMedia(MediaItem[] media) {
        this.media = media;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LocalPost withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offer")
    public LocalPostOffer offer;
    public LocalPost withOffer(LocalPostOffer offer) {
        this.offer = offer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchUrl")
    public String searchUrl;
    public LocalPost withSearchUrl(String searchUrl) {
        this.searchUrl = searchUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public LocalPostStateEnum state;
    public LocalPost withState(LocalPostStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public String summary;
    public LocalPost withSummary(String summary) {
        this.summary = summary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topicType")
    public LocalPostTopicTypeEnum topicType;
    public LocalPost withTopicType(LocalPostTopicTypeEnum topicType) {
        this.topicType = topicType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public LocalPost withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}