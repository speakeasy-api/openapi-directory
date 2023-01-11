package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaAccountSummary
 * A virtual resource representing an overview of an account and all its child GA4 properties.
**/
public class GoogleAnalyticsAdminV1betaAccountSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public String account;
    public GoogleAnalyticsAdminV1betaAccountSummary withAccount(String account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleAnalyticsAdminV1betaAccountSummary withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleAnalyticsAdminV1betaAccountSummary withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propertySummaries")
    public GoogleAnalyticsAdminV1betaPropertySummary[] propertySummaries;
    public GoogleAnalyticsAdminV1betaAccountSummary withPropertySummaries(GoogleAnalyticsAdminV1betaPropertySummary[] propertySummaries) {
        this.propertySummaries = propertySummaries;
        return this;
    }
}