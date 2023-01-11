package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuthorizedSellerStatusAssignedTargetingOptionDetails
 * Represents an assigned authorized seller status. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`.
**/
public class AuthorizedSellerStatusAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizedSellerStatus")
    public AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnum authorizedSellerStatus;
    public AuthorizedSellerStatusAssignedTargetingOptionDetails withAuthorizedSellerStatus(AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatusEnum authorizedSellerStatus) {
        this.authorizedSellerStatus = authorizedSellerStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptionId")
    public String targetingOptionId;
    public AuthorizedSellerStatusAssignedTargetingOptionDetails withTargetingOptionId(String targetingOptionId) {
        this.targetingOptionId = targetingOptionId;
        return this;
    }
}