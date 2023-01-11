package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Metadata
 * Additional non-user-editable information about the location.
**/
public class Metadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDelete")
    public Boolean canDelete;
    public Metadata withCanDelete(Boolean canDelete) {
        this.canDelete = canDelete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canHaveBusinessCalls")
    public Boolean canHaveBusinessCalls;
    public Metadata withCanHaveBusinessCalls(Boolean canHaveBusinessCalls) {
        this.canHaveBusinessCalls = canHaveBusinessCalls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canHaveFoodMenus")
    public Boolean canHaveFoodMenus;
    public Metadata withCanHaveFoodMenus(Boolean canHaveFoodMenus) {
        this.canHaveFoodMenus = canHaveFoodMenus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canModifyServiceList")
    public Boolean canModifyServiceList;
    public Metadata withCanModifyServiceList(Boolean canModifyServiceList) {
        this.canModifyServiceList = canModifyServiceList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canOperateHealthData")
    public Boolean canOperateHealthData;
    public Metadata withCanOperateHealthData(Boolean canOperateHealthData) {
        this.canOperateHealthData = canOperateHealthData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canOperateLocalPost")
    public Boolean canOperateLocalPost;
    public Metadata withCanOperateLocalPost(Boolean canOperateLocalPost) {
        this.canOperateLocalPost = canOperateLocalPost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canOperateLodgingData")
    public Boolean canOperateLodgingData;
    public Metadata withCanOperateLodgingData(Boolean canOperateLodgingData) {
        this.canOperateLodgingData = canOperateLodgingData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duplicateLocation")
    public String duplicateLocation;
    public Metadata withDuplicateLocation(String duplicateLocation) {
        this.duplicateLocation = duplicateLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasGoogleUpdated")
    public Boolean hasGoogleUpdated;
    public Metadata withHasGoogleUpdated(Boolean hasGoogleUpdated) {
        this.hasGoogleUpdated = hasGoogleUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasPendingEdits")
    public Boolean hasPendingEdits;
    public Metadata withHasPendingEdits(Boolean hasPendingEdits) {
        this.hasPendingEdits = hasPendingEdits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasVoiceOfMerchant")
    public Boolean hasVoiceOfMerchant;
    public Metadata withHasVoiceOfMerchant(Boolean hasVoiceOfMerchant) {
        this.hasVoiceOfMerchant = hasVoiceOfMerchant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mapsUri")
    public String mapsUri;
    public Metadata withMapsUri(String mapsUri) {
        this.mapsUri = mapsUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newReviewUri")
    public String newReviewUri;
    public Metadata withNewReviewUri(String newReviewUri) {
        this.newReviewUri = newReviewUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placeId")
    public String placeId;
    public Metadata withPlaceId(String placeId) {
        this.placeId = placeId;
        return this;
    }
}