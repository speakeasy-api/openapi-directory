package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PartnerGeneralConfig
 * General settings of a partner.
**/
public class PartnerGeneralConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public PartnerGeneralConfig withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public PartnerGeneralConfig withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
}