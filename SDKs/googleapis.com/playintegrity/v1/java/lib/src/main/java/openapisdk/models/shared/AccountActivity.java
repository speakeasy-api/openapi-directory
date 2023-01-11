package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountActivity
 * Contains a signal helping apps differentiating between likely genuine users and likely non-genuine traffic (such as accounts being used for fraud, accounts used by automated traffic, or accounts used in device farms) based on the presence and volume of Play store activity.
**/
public class AccountActivity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityLevel")
    public AccountActivityActivityLevelEnum activityLevel;
    public AccountActivity withActivityLevel(AccountActivityActivityLevelEnum activityLevel) {
        this.activityLevel = activityLevel;
        return this;
    }
}