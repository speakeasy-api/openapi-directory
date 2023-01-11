package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdvertiserGeneralConfigInput
 * General settings of an advertiser.
**/
public class AdvertiserGeneralConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public AdvertiserGeneralConfigInput withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainUrl")
    public String domainUrl;
    public AdvertiserGeneralConfigInput withDomainUrl(String domainUrl) {
        this.domainUrl = domainUrl;
        return this;
    }
}