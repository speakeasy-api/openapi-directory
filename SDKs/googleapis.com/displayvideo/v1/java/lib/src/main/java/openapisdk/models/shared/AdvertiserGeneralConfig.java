package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdvertiserGeneralConfig
 * General settings of an advertiser.
**/
public class AdvertiserGeneralConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public AdvertiserGeneralConfig withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainUrl")
    public String domainUrl;
    public AdvertiserGeneralConfig withDomainUrl(String domainUrl) {
        this.domainUrl = domainUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public AdvertiserGeneralConfig withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
}