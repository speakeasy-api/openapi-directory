package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PhotoObject
 * **object** detailing a single photo from a user
**/
public class PhotoObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caption")
    public String caption;
    public PhotoObject withCaption(String caption) {
        this.caption = caption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("editorsPick")
    public Boolean editorsPick;
    public PhotoObject withEditorsPick(Boolean editorsPick) {
        this.editorsPick = editorsPick;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerAvatarURL")
    public String ownerAvatarURL;
    public PhotoObject withOwnerAvatarUrl(String ownerAvatarURL) {
        this.ownerAvatarURL = ownerAvatarURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerCountry")
    public String ownerCountry;
    public PhotoObject withOwnerCountry(String ownerCountry) {
        this.ownerCountry = ownerCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerId")
    public Long ownerId;
    public PhotoObject withOwnerId(Long ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerName")
    public String ownerName;
    public PhotoObject withOwnerName(String ownerName) {
        this.ownerName = ownerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photoHiResURL")
    public String photoHiResURL;
    public PhotoObject withPhotoHiResUrl(String photoHiResURL) {
        this.photoHiResURL = photoHiResURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photoId")
    public Long photoId;
    public PhotoObject withPhotoId(Long photoId) {
        this.photoId = photoId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photoMediumResURL")
    public String photoMediumResURL;
    public PhotoObject withPhotoMediumResUrl(String photoMediumResURL) {
        this.photoMediumResURL = photoMediumResURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photoURL")
    public String photoURL;
    public PhotoObject withPhotoUrl(String photoURL) {
        this.photoURL = photoURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCode")
    public String productCode;
    public PhotoObject withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productTitle")
    public String productTitle;
    public PhotoObject withProductTitle(String productTitle) {
        this.productTitle = productTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productUrlName")
    public String productUrlName;
    public PhotoObject withProductUrlName(String productUrlName) {
        this.productUrlName = productUrlName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public PhotoObject withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sslSupported")
    public Boolean sslSupported;
    public PhotoObject withSslSupported(Boolean sslSupported) {
        this.sslSupported = sslSupported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailURL")
    public String thumbnailURL;
    public PhotoObject withThumbnailUrl(String thumbnailURL) {
        this.thumbnailURL = thumbnailURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeUploaded")
    public String timeUploaded;
    public PhotoObject withTimeUploaded(String timeUploaded) {
        this.timeUploaded = timeUploaded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public PhotoObject withTitle(String title) {
        this.title = title;
        return this;
    }
}