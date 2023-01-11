package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LandlordSettingsModel
 * Landlord Settings
**/
public class LandlordSettingsModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LinkedAccounts")
    public LandlordDetailsModel[] linkedAccounts;
    public LandlordSettingsModel withLinkedAccounts(LandlordDetailsModel[] linkedAccounts) {
        this.linkedAccounts = linkedAccounts;
        return this;
    }
}