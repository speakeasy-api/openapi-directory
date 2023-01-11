package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuthorizedSellerStatusTargetingOptionDetails
 * Represents a targetable authorized seller status. This will be populated in the authorized_seller_status_details field when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`.
**/
public class AuthorizedSellerStatusTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizedSellerStatus")
    public AuthorizedSellerStatusTargetingOptionDetailsAuthorizedSellerStatusEnum authorizedSellerStatus;
    public AuthorizedSellerStatusTargetingOptionDetails withAuthorizedSellerStatus(AuthorizedSellerStatusTargetingOptionDetailsAuthorizedSellerStatusEnum authorizedSellerStatus) {
        this.authorizedSellerStatus = authorizedSellerStatus;
        return this;
    }
}