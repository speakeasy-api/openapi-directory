package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountActiveAdSummary
 * Gets a summary of active ads in an account.
**/
public class AccountActiveAdSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public AccountActiveAdSummary withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeAds")
    public String activeAds;
    public AccountActiveAdSummary withActiveAds(String activeAds) {
        this.activeAds = activeAds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeAdsLimitTier")
    public AccountActiveAdSummaryActiveAdsLimitTierEnum activeAdsLimitTier;
    public AccountActiveAdSummary withActiveAdsLimitTier(AccountActiveAdSummaryActiveAdsLimitTierEnum activeAdsLimitTier) {
        this.activeAdsLimitTier = activeAdsLimitTier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableAds")
    public String availableAds;
    public AccountActiveAdSummary withAvailableAds(String availableAds) {
        this.availableAds = availableAds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AccountActiveAdSummary withKind(String kind) {
        this.kind = kind;
        return this;
    }
}