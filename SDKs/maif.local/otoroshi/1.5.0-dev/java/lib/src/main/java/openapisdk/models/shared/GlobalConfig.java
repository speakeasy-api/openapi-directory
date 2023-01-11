package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GlobalConfig
 * The global config object of Otoroshi, used to customize settings of the current Otoroshi instance
**/
public class GlobalConfig {
    @JsonProperty("alertsEmails")
    public String[] alertsEmails;
    public GlobalConfig withAlertsEmails(String[] alertsEmails) {
        this.alertsEmails = alertsEmails;
        return this;
    }
    @JsonProperty("alertsWebhooks")
    public Webhook[] alertsWebhooks;
    public GlobalConfig withAlertsWebhooks(Webhook[] alertsWebhooks) {
        this.alertsWebhooks = alertsWebhooks;
        return this;
    }
    @JsonProperty("analyticsWebhooks")
    public Webhook[] analyticsWebhooks;
    public GlobalConfig withAnalyticsWebhooks(Webhook[] analyticsWebhooks) {
        this.analyticsWebhooks = analyticsWebhooks;
        return this;
    }
    @JsonProperty("apiReadOnly")
    public Boolean apiReadOnly;
    public GlobalConfig withApiReadOnly(Boolean apiReadOnly) {
        this.apiReadOnly = apiReadOnly;
        return this;
    }
    @JsonProperty("autoLinkToDefaultGroup")
    public Boolean autoLinkToDefaultGroup;
    public GlobalConfig withAutoLinkToDefaultGroup(Boolean autoLinkToDefaultGroup) {
        this.autoLinkToDefaultGroup = autoLinkToDefaultGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backofficeAuth0Config")
    public Auth0Config backofficeAuth0Config;
    public GlobalConfig withBackofficeAuth0Config(Auth0Config backofficeAuth0Config) {
        this.backofficeAuth0Config = backofficeAuth0Config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cleverSettings")
    public CleverSettings cleverSettings;
    public GlobalConfig withCleverSettings(CleverSettings cleverSettings) {
        this.cleverSettings = cleverSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elasticReadsConfig")
    public ElasticConfig elasticReadsConfig;
    public GlobalConfig withElasticReadsConfig(ElasticConfig elasticReadsConfig) {
        this.elasticReadsConfig = elasticReadsConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elasticWritesConfigs")
    public ElasticConfig[] elasticWritesConfigs;
    public GlobalConfig withElasticWritesConfigs(ElasticConfig[] elasticWritesConfigs) {
        this.elasticWritesConfigs = elasticWritesConfigs;
        return this;
    }
    @JsonProperty("endlessIpAddresses")
    public String[] endlessIpAddresses;
    public GlobalConfig withEndlessIpAddresses(String[] endlessIpAddresses) {
        this.endlessIpAddresses = endlessIpAddresses;
        return this;
    }
    @JsonProperty("ipFiltering")
    public IpFiltering ipFiltering;
    public GlobalConfig withIpFiltering(IpFiltering ipFiltering) {
        this.ipFiltering = ipFiltering;
        return this;
    }
    @JsonProperty("limitConcurrentRequests")
    public Boolean limitConcurrentRequests;
    public GlobalConfig withLimitConcurrentRequests(Boolean limitConcurrentRequests) {
        this.limitConcurrentRequests = limitConcurrentRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lines")
    public String[] lines;
    public GlobalConfig withLines(String[] lines) {
        this.lines = lines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mailerSettings")
    public MailerSettings mailerSettings;
    public GlobalConfig withMailerSettings(MailerSettings mailerSettings) {
        this.mailerSettings = mailerSettings;
        return this;
    }
    @JsonProperty("maxConcurrentRequests")
    public Long maxConcurrentRequests;
    public GlobalConfig withMaxConcurrentRequests(Long maxConcurrentRequests) {
        this.maxConcurrentRequests = maxConcurrentRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxHttp10ResponseSize")
    public Long maxHttp10ResponseSize;
    public GlobalConfig withMaxHttp10ResponseSize(Long maxHttp10ResponseSize) {
        this.maxHttp10ResponseSize = maxHttp10ResponseSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxLogsSize")
    public Integer maxLogsSize;
    public GlobalConfig withMaxLogsSize(Integer maxLogsSize) {
        this.maxLogsSize = maxLogsSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("middleFingers")
    public Boolean middleFingers;
    public GlobalConfig withMiddleFingers(Boolean middleFingers) {
        this.middleFingers = middleFingers;
        return this;
    }
    @JsonProperty("perIpThrottlingQuota")
    public Long perIpThrottlingQuota;
    public GlobalConfig withPerIpThrottlingQuota(Long perIpThrottlingQuota) {
        this.perIpThrottlingQuota = perIpThrottlingQuota;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateAppsAuth0Config")
    public Auth0Config privateAppsAuth0Config;
    public GlobalConfig withPrivateAppsAuth0Config(Auth0Config privateAppsAuth0Config) {
        this.privateAppsAuth0Config = privateAppsAuth0Config;
        return this;
    }
    @JsonProperty("streamEntityOnly")
    public Boolean streamEntityOnly;
    public GlobalConfig withStreamEntityOnly(Boolean streamEntityOnly) {
        this.streamEntityOnly = streamEntityOnly;
        return this;
    }
    @JsonProperty("throttlingQuota")
    public Long throttlingQuota;
    public GlobalConfig withThrottlingQuota(Long throttlingQuota) {
        this.throttlingQuota = throttlingQuota;
        return this;
    }
    @JsonProperty("u2fLoginOnly")
    public Boolean u2fLoginOnly;
    public GlobalConfig withU2fLoginOnly(Boolean u2fLoginOnly) {
        this.u2fLoginOnly = u2fLoginOnly;
        return this;
    }
    @JsonProperty("useCircuitBreakers")
    public Boolean useCircuitBreakers;
    public GlobalConfig withUseCircuitBreakers(Boolean useCircuitBreakers) {
        this.useCircuitBreakers = useCircuitBreakers;
        return this;
    }
}