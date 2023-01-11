package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LighthouseResultV5
 * The Lighthouse result object.
**/
public class LighthouseResultV5 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audits")
    public java.util.Map<String, LighthouseAuditResultV5> audits;
    public LighthouseResultV5 withAudits(java.util.Map<String, LighthouseAuditResultV5> audits) {
        this.audits = audits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public Categories categories;
    public LighthouseResultV5 withCategories(Categories categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryGroups")
    public java.util.Map<String, CategoryGroupV5> categoryGroups;
    public LighthouseResultV5 withCategoryGroups(java.util.Map<String, CategoryGroupV5> categoryGroups) {
        this.categoryGroups = categoryGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configSettings")
    public ConfigSettings configSettings;
    public LighthouseResultV5 withConfigSettings(ConfigSettings configSettings) {
        this.configSettings = configSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public Environment environment;
    public LighthouseResultV5 withEnvironment(Environment environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fetchTime")
    public String fetchTime;
    public LighthouseResultV5 withFetchTime(String fetchTime) {
        this.fetchTime = fetchTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finalUrl")
    public String finalUrl;
    public LighthouseResultV5 withFinalUrl(String finalUrl) {
        this.finalUrl = finalUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("i18n")
    public I18n i18n;
    public LighthouseResultV5 withI18n(I18n i18n) {
        this.i18n = i18n;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lighthouseVersion")
    public String lighthouseVersion;
    public LighthouseResultV5 withLighthouseVersion(String lighthouseVersion) {
        this.lighthouseVersion = lighthouseVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedUrl")
    public String requestedUrl;
    public LighthouseResultV5 withRequestedUrl(String requestedUrl) {
        this.requestedUrl = requestedUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runWarnings")
    public Object[] runWarnings;
    public LighthouseResultV5 withRunWarnings(Object[] runWarnings) {
        this.runWarnings = runWarnings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtimeError")
    public RuntimeError runtimeError;
    public LighthouseResultV5 withRuntimeError(RuntimeError runtimeError) {
        this.runtimeError = runtimeError;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stackPacks")
    public StackPack[] stackPacks;
    public LighthouseResultV5 withStackPacks(StackPack[] stackPacks) {
        this.stackPacks = stackPacks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timing")
    public Timing timing;
    public LighthouseResultV5 withTiming(Timing timing) {
        this.timing = timing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userAgent")
    public String userAgent;
    public LighthouseResultV5 withUserAgent(String userAgent) {
        this.userAgent = userAgent;
        return this;
    }
}