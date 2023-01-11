package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Account
 * Contains properties of a Campaign Manager account.
**/
public class Account {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountPermissionIds")
    public String[] accountPermissionIds;
    public Account withAccountPermissionIds(String[] accountPermissionIds) {
        this.accountPermissionIds = accountPermissionIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountProfile")
    public AccountAccountProfileEnum accountProfile;
    public Account withAccountProfile(AccountAccountProfileEnum accountProfile) {
        this.accountProfile = accountProfile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public Account withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeAdsLimitTier")
    public AccountActiveAdsLimitTierEnum activeAdsLimitTier;
    public Account withActiveAdsLimitTier(AccountActiveAdsLimitTierEnum activeAdsLimitTier) {
        this.activeAdsLimitTier = activeAdsLimitTier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeViewOptOut")
    public Boolean activeViewOptOut;
    public Account withActiveViewOptOut(Boolean activeViewOptOut) {
        this.activeViewOptOut = activeViewOptOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availablePermissionIds")
    public String[] availablePermissionIds;
    public Account withAvailablePermissionIds(String[] availablePermissionIds) {
        this.availablePermissionIds = availablePermissionIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryId")
    public String countryId;
    public Account withCountryId(String countryId) {
        this.countryId = countryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyId")
    public String currencyId;
    public Account withCurrencyId(String currencyId) {
        this.currencyId = currencyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultCreativeSizeId")
    public String defaultCreativeSizeId;
    public Account withDefaultCreativeSizeId(String defaultCreativeSizeId) {
        this.defaultCreativeSizeId = defaultCreativeSizeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Account withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Account withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Account withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public String locale;
    public Account withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumImageSize")
    public String maximumImageSize;
    public Account withMaximumImageSize(String maximumImageSize) {
        this.maximumImageSize = maximumImageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Account withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nielsenOcrEnabled")
    public Boolean nielsenOcrEnabled;
    public Account withNielsenOcrEnabled(Boolean nielsenOcrEnabled) {
        this.nielsenOcrEnabled = nielsenOcrEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportsConfiguration")
    public ReportsConfiguration reportsConfiguration;
    public Account withReportsConfiguration(ReportsConfiguration reportsConfiguration) {
        this.reportsConfiguration = reportsConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shareReportsWithTwitter")
    public Boolean shareReportsWithTwitter;
    public Account withShareReportsWithTwitter(Boolean shareReportsWithTwitter) {
        this.shareReportsWithTwitter = shareReportsWithTwitter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teaserSizeLimit")
    public String teaserSizeLimit;
    public Account withTeaserSizeLimit(String teaserSizeLimit) {
        this.teaserSizeLimit = teaserSizeLimit;
        return this;
    }
}