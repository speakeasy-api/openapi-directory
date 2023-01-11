package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeUserInfo
 * User specific information related to this volume. (e.g. page this user last read or whether they purchased this book)
**/
public class VolumeUserInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acquiredTime")
    public String acquiredTime;
    public VolumeUserInfo withAcquiredTime(String acquiredTime) {
        this.acquiredTime = acquiredTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acquisitionType")
    public Integer acquisitionType;
    public VolumeUserInfo withAcquisitionType(Integer acquisitionType) {
        this.acquisitionType = acquisitionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copy")
    public VolumeUserInfoCopy copy;
    public VolumeUserInfo withCopy(VolumeUserInfoCopy copy) {
        this.copy = copy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entitlementType")
    public Integer entitlementType;
    public VolumeUserInfo withEntitlementType(Integer entitlementType) {
        this.entitlementType = entitlementType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("familySharing")
    public VolumeUserInfoFamilySharing familySharing;
    public VolumeUserInfo withFamilySharing(VolumeUserInfoFamilySharing familySharing) {
        this.familySharing = familySharing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isFamilySharedFromUser")
    public Boolean isFamilySharedFromUser;
    public VolumeUserInfo withIsFamilySharedFromUser(Boolean isFamilySharedFromUser) {
        this.isFamilySharedFromUser = isFamilySharedFromUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isFamilySharedToUser")
    public Boolean isFamilySharedToUser;
    public VolumeUserInfo withIsFamilySharedToUser(Boolean isFamilySharedToUser) {
        this.isFamilySharedToUser = isFamilySharedToUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isFamilySharingAllowed")
    public Boolean isFamilySharingAllowed;
    public VolumeUserInfo withIsFamilySharingAllowed(Boolean isFamilySharingAllowed) {
        this.isFamilySharingAllowed = isFamilySharingAllowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isFamilySharingDisabledByFop")
    public Boolean isFamilySharingDisabledByFop;
    public VolumeUserInfo withIsFamilySharingDisabledByFop(Boolean isFamilySharingDisabledByFop) {
        this.isFamilySharingDisabledByFop = isFamilySharingDisabledByFop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isInMyBooks")
    public Boolean isInMyBooks;
    public VolumeUserInfo withIsInMyBooks(Boolean isInMyBooks) {
        this.isInMyBooks = isInMyBooks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPreordered")
    public Boolean isPreordered;
    public VolumeUserInfo withIsPreordered(Boolean isPreordered) {
        this.isPreordered = isPreordered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPurchased")
    public Boolean isPurchased;
    public VolumeUserInfo withIsPurchased(Boolean isPurchased) {
        this.isPurchased = isPurchased;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isUploaded")
    public Boolean isUploaded;
    public VolumeUserInfo withIsUploaded(Boolean isUploaded) {
        this.isUploaded = isUploaded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readingPosition")
    public ReadingPosition readingPosition;
    public VolumeUserInfo withReadingPosition(ReadingPosition readingPosition) {
        this.readingPosition = readingPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rentalPeriod")
    public VolumeUserInfoRentalPeriod rentalPeriod;
    public VolumeUserInfo withRentalPeriod(VolumeUserInfoRentalPeriod rentalPeriod) {
        this.rentalPeriod = rentalPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rentalState")
    public String rentalState;
    public VolumeUserInfo withRentalState(String rentalState) {
        this.rentalState = rentalState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("review")
    public Review review;
    public VolumeUserInfo withReview(Review review) {
        this.review = review;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated")
    public String updated;
    public VolumeUserInfo withUpdated(String updated) {
        this.updated = updated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userUploadedVolumeInfo")
    public VolumeUserInfoUserUploadedVolumeInfo userUploadedVolumeInfo;
    public VolumeUserInfo withUserUploadedVolumeInfo(VolumeUserInfoUserUploadedVolumeInfo userUploadedVolumeInfo) {
        this.userUploadedVolumeInfo = userUploadedVolumeInfo;
        return this;
    }
}