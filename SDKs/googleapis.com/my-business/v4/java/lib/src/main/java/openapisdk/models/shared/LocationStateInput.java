package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocationStateInput
 * Contains a set of booleans that reflect the [state of a Location.](https://support.google.com/business/answer/3480862)
**/
public class LocationStateInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDelete")
    public Boolean canDelete;
    public LocationStateInput withCanDelete(Boolean canDelete) {
        this.canDelete = canDelete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canUpdate")
    public Boolean canUpdate;
    public LocationStateInput withCanUpdate(Boolean canUpdate) {
        this.canUpdate = canUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasPendingEdits")
    public Boolean hasPendingEdits;
    public LocationStateInput withHasPendingEdits(Boolean hasPendingEdits) {
        this.hasPendingEdits = hasPendingEdits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasPendingVerification")
    public Boolean hasPendingVerification;
    public LocationStateInput withHasPendingVerification(Boolean hasPendingVerification) {
        this.hasPendingVerification = hasPendingVerification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDisabled")
    public Boolean isDisabled;
    public LocationStateInput withIsDisabled(Boolean isDisabled) {
        this.isDisabled = isDisabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDisconnected")
    public Boolean isDisconnected;
    public LocationStateInput withIsDisconnected(Boolean isDisconnected) {
        this.isDisconnected = isDisconnected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDuplicate")
    public Boolean isDuplicate;
    public LocationStateInput withIsDuplicate(Boolean isDuplicate) {
        this.isDuplicate = isDuplicate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isGoogleUpdated")
    public Boolean isGoogleUpdated;
    public LocationStateInput withIsGoogleUpdated(Boolean isGoogleUpdated) {
        this.isGoogleUpdated = isGoogleUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isLocalPostApiDisabled")
    public Boolean isLocalPostApiDisabled;
    public LocationStateInput withIsLocalPostApiDisabled(Boolean isLocalPostApiDisabled) {
        this.isLocalPostApiDisabled = isLocalPostApiDisabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPendingReview")
    public Boolean isPendingReview;
    public LocationStateInput withIsPendingReview(Boolean isPendingReview) {
        this.isPendingReview = isPendingReview;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPublished")
    public Boolean isPublished;
    public LocationStateInput withIsPublished(Boolean isPublished) {
        this.isPublished = isPublished;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSuspended")
    public Boolean isSuspended;
    public LocationStateInput withIsSuspended(Boolean isSuspended) {
        this.isSuspended = isSuspended;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isVerified")
    public Boolean isVerified;
    public LocationStateInput withIsVerified(Boolean isVerified) {
        this.isVerified = isVerified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("needsReverification")
    public Boolean needsReverification;
    public LocationStateInput withNeedsReverification(Boolean needsReverification) {
        this.needsReverification = needsReverification;
        return this;
    }
}