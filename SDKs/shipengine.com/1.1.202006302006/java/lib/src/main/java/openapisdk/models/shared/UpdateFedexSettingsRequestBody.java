package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateFedexSettingsRequestBody
 * A Fedex account settings request body
**/
public class UpdateFedexSettingsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_primary_account")
    public Boolean isPrimaryAccount;
    public UpdateFedexSettingsRequestBody withIsPrimaryAccount(Boolean isPrimaryAccount) {
        this.isPrimaryAccount = isPrimaryAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nickname")
    public String nickname;
    public UpdateFedexSettingsRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickup_type")
    public FedexPickupTypeEnum pickupType;
    public UpdateFedexSettingsRequestBody withPickupType(FedexPickupTypeEnum pickupType) {
        this.pickupType = pickupType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smart_post_endorsement")
    public AncillaryServiceEndorsementEnum smartPostEndorsement;
    public UpdateFedexSettingsRequestBody withSmartPostEndorsement(AncillaryServiceEndorsementEnum smartPostEndorsement) {
        this.smartPostEndorsement = smartPostEndorsement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smart_post_hub")
    public SmartPostHubEnum smartPostHub;
    public UpdateFedexSettingsRequestBody withSmartPostHub(SmartPostHubEnum smartPostHub) {
        this.smartPostHub = smartPostHub;
        return this;
    }
}