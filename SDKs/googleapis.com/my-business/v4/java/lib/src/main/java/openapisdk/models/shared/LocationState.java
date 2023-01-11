package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocationState
 * Contains a set of booleans that reflect the [state of a Location.](https://support.google.com/business/answer/3480862)
**/
public class LocationState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDelete")
    public Boolean canDelete;
    public LocationState withCanDelete(Boolean canDelete) {
        this.canDelete = canDelete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canHaveFoodMenus")
    public Boolean canHaveFoodMenus;
    public LocationState withCanHaveFoodMenus(Boolean canHaveFoodMenus) {
        this.canHaveFoodMenus = canHaveFoodMenus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canModifyServiceList")
    public Boolean canModifyServiceList;
    public LocationState withCanModifyServiceList(Boolean canModifyServiceList) {
        this.canModifyServiceList = canModifyServiceList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canOperateHealthData")
    public Boolean canOperateHealthData;
    public LocationState withCanOperateHealthData(Boolean canOperateHealthData) {
        this.canOperateHealthData = canOperateHealthData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canOperateLodgingData")
    public Boolean canOperateLodgingData;
    public LocationState withCanOperateLodgingData(Boolean canOperateLodgingData) {
        this.canOperateLodgingData = canOperateLodgingData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canUpdate")
    public Boolean canUpdate;
    public LocationState withCanUpdate(Boolean canUpdate) {
        this.canUpdate = canUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasPendingEdits")
    public Boolean hasPendingEdits;
    public LocationState withHasPendingEdits(Boolean hasPendingEdits) {
        this.hasPendingEdits = hasPendingEdits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasPendingVerification")
    public Boolean hasPendingVerification;
    public LocationState withHasPendingVerification(Boolean hasPendingVerification) {
        this.hasPendingVerification = hasPendingVerification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDisabled")
    public Boolean isDisabled;
    public LocationState withIsDisabled(Boolean isDisabled) {
        this.isDisabled = isDisabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDisconnected")
    public Boolean isDisconnected;
    public LocationState withIsDisconnected(Boolean isDisconnected) {
        this.isDisconnected = isDisconnected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDuplicate")
    public Boolean isDuplicate;
    public LocationState withIsDuplicate(Boolean isDuplicate) {
        this.isDuplicate = isDuplicate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isGoogleUpdated")
    public Boolean isGoogleUpdated;
    public LocationState withIsGoogleUpdated(Boolean isGoogleUpdated) {
        this.isGoogleUpdated = isGoogleUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isLocalPostApiDisabled")
    public Boolean isLocalPostApiDisabled;
    public LocationState withIsLocalPostApiDisabled(Boolean isLocalPostApiDisabled) {
        this.isLocalPostApiDisabled = isLocalPostApiDisabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPendingReview")
    public Boolean isPendingReview;
    public LocationState withIsPendingReview(Boolean isPendingReview) {
        this.isPendingReview = isPendingReview;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPublished")
    public Boolean isPublished;
    public LocationState withIsPublished(Boolean isPublished) {
        this.isPublished = isPublished;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSuspended")
    public Boolean isSuspended;
    public LocationState withIsSuspended(Boolean isSuspended) {
        this.isSuspended = isSuspended;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isVerified")
    public Boolean isVerified;
    public LocationState withIsVerified(Boolean isVerified) {
        this.isVerified = isVerified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("needsReverification")
    public Boolean needsReverification;
    public LocationState withNeedsReverification(Boolean needsReverification) {
        this.needsReverification = needsReverification;
        return this;
    }
}