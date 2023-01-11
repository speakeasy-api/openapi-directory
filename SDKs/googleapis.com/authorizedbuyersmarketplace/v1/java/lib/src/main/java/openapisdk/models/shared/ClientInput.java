package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClientInput
 * A client represents an agency, a brand, or an advertiser customer of the buyer. Based on the client's role, its client users will have varying levels of restricted access to the Marketplace and certain other sections of the Authorized Buyers UI.
**/
public class ClientInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ClientInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerClientId")
    public String partnerClientId;
    public ClientInput withPartnerClientId(String partnerClientId) {
        this.partnerClientId = partnerClientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public ClientRoleEnum role;
    public ClientInput withRole(ClientRoleEnum role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellerVisible")
    public Boolean sellerVisible;
    public ClientInput withSellerVisible(Boolean sellerVisible) {
        this.sellerVisible = sellerVisible;
        return this;
    }
}