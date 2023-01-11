package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountDetails
 * Contains the account information such as the licensing status for the user in the scope.
**/
public class AccountDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountActivity")
    public AccountActivity accountActivity;
    public AccountDetails withAccountActivity(AccountActivity accountActivity) {
        this.accountActivity = accountActivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appLicensingVerdict")
    public AccountDetailsAppLicensingVerdictEnum appLicensingVerdict;
    public AccountDetails withAppLicensingVerdict(AccountDetailsAppLicensingVerdictEnum appLicensingVerdict) {
        this.appLicensingVerdict = appLicensingVerdict;
        return this;
    }
}