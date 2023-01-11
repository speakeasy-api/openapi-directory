package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LiaSettings
 * Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role.
**/
public class LiaSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public LiaSettings withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countrySettings")
    public LiaCountrySettings[] countrySettings;
    public LiaSettings withCountrySettings(LiaCountrySettings[] countrySettings) {
        this.countrySettings = countrySettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LiaSettings withKind(String kind) {
        this.kind = kind;
        return this;
    }
}