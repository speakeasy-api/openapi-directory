package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserComment
 * User entry from conversation between user and developer.
**/
public class UserComment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidOsVersion")
    public Integer androidOsVersion;
    public UserComment withAndroidOsVersion(Integer androidOsVersion) {
        this.androidOsVersion = androidOsVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appVersionCode")
    public Integer appVersionCode;
    public UserComment withAppVersionCode(Integer appVersionCode) {
        this.appVersionCode = appVersionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appVersionName")
    public String appVersionName;
    public UserComment withAppVersionName(String appVersionName) {
        this.appVersionName = appVersionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device")
    public String device;
    public UserComment withDevice(String device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceMetadata")
    public DeviceMetadata deviceMetadata;
    public UserComment withDeviceMetadata(DeviceMetadata deviceMetadata) {
        this.deviceMetadata = deviceMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModified")
    public Timestamp lastModified;
    public UserComment withLastModified(Timestamp lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalText")
    public String originalText;
    public UserComment withOriginalText(String originalText) {
        this.originalText = originalText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviewerLanguage")
    public String reviewerLanguage;
    public UserComment withReviewerLanguage(String reviewerLanguage) {
        this.reviewerLanguage = reviewerLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("starRating")
    public Integer starRating;
    public UserComment withStarRating(Integer starRating) {
        this.starRating = starRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public UserComment withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbsDownCount")
    public Integer thumbsDownCount;
    public UserComment withThumbsDownCount(Integer thumbsDownCount) {
        this.thumbsDownCount = thumbsDownCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbsUpCount")
    public Integer thumbsUpCount;
    public UserComment withThumbsUpCount(Integer thumbsUpCount) {
        this.thumbsUpCount = thumbsUpCount;
        return this;
    }
}