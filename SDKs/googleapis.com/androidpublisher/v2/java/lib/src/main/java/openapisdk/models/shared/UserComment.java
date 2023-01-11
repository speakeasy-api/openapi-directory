package openapisdk.models.shared;



public class UserComment {
    public Integer androidOsVersion;
    public UserComment withAndroidOsVersion(Integer androidOsVersion) {
        this.androidOsVersion = androidOsVersion;
        return this;
    }
    public Integer appVersionCode;
    public UserComment withAppVersionCode(Integer appVersionCode) {
        this.appVersionCode = appVersionCode;
        return this;
    }
    public String appVersionName;
    public UserComment withAppVersionName(String appVersionName) {
        this.appVersionName = appVersionName;
        return this;
    }
    public String device;
    public UserComment withDevice(String device) {
        this.device = device;
        return this;
    }
    public DeviceMetadata deviceMetadata;
    public UserComment withDeviceMetadata(DeviceMetadata deviceMetadata) {
        this.deviceMetadata = deviceMetadata;
        return this;
    }
    public Timestamp lastModified;
    public UserComment withLastModified(Timestamp lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    public String originalText;
    public UserComment withOriginalText(String originalText) {
        this.originalText = originalText;
        return this;
    }
    public String reviewerLanguage;
    public UserComment withReviewerLanguage(String reviewerLanguage) {
        this.reviewerLanguage = reviewerLanguage;
        return this;
    }
    public Integer starRating;
    public UserComment withStarRating(Integer starRating) {
        this.starRating = starRating;
        return this;
    }
    public String text;
    public UserComment withText(String text) {
        this.text = text;
        return this;
    }
    public Integer thumbsDownCount;
    public UserComment withThumbsDownCount(Integer thumbsDownCount) {
        this.thumbsDownCount = thumbsDownCount;
        return this;
    }
    public Integer thumbsUpCount;
    public UserComment withThumbsUpCount(Integer thumbsUpCount) {
        this.thumbsUpCount = thumbsUpCount;
        return this;
    }
}