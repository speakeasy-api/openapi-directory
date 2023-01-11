package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScanConfig
 * A ScanConfig resource contains the configurations to launch a scan.
**/
public class ScanConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authentication")
    public Authentication authentication;
    public ScanConfig withAuthentication(Authentication authentication) {
        this.authentication = authentication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blacklistPatterns")
    public String[] blacklistPatterns;
    public ScanConfig withBlacklistPatterns(String[] blacklistPatterns) {
        this.blacklistPatterns = blacklistPatterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ScanConfig withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportToSecurityCommandCenter")
    public ScanConfigExportToSecurityCommandCenterEnum exportToSecurityCommandCenter;
    public ScanConfig withExportToSecurityCommandCenter(ScanConfigExportToSecurityCommandCenterEnum exportToSecurityCommandCenter) {
        this.exportToSecurityCommandCenter = exportToSecurityCommandCenter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignoreHttpStatusErrors")
    public Boolean ignoreHttpStatusErrors;
    public ScanConfig withIgnoreHttpStatusErrors(Boolean ignoreHttpStatusErrors) {
        this.ignoreHttpStatusErrors = ignoreHttpStatusErrors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestRun")
    public ScanRun latestRun;
    public ScanConfig withLatestRun(ScanRun latestRun) {
        this.latestRun = latestRun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedScan")
    public Boolean managedScan;
    public ScanConfig withManagedScan(Boolean managedScan) {
        this.managedScan = managedScan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxQps")
    public Integer maxQps;
    public ScanConfig withMaxQps(Integer maxQps) {
        this.maxQps = maxQps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ScanConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("riskLevel")
    public ScanConfigRiskLevelEnum riskLevel;
    public ScanConfig withRiskLevel(ScanConfigRiskLevelEnum riskLevel) {
        this.riskLevel = riskLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule")
    public Schedule schedule;
    public ScanConfig withSchedule(Schedule schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startingUrls")
    public String[] startingUrls;
    public ScanConfig withStartingUrls(String[] startingUrls) {
        this.startingUrls = startingUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("staticIpScan")
    public Boolean staticIpScan;
    public ScanConfig withStaticIpScan(Boolean staticIpScan) {
        this.staticIpScan = staticIpScan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetPlatforms")
    public ScanConfigTargetPlatformsEnum[] targetPlatforms;
    public ScanConfig withTargetPlatforms(ScanConfigTargetPlatformsEnum[] targetPlatforms) {
        this.targetPlatforms = targetPlatforms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userAgent")
    public ScanConfigUserAgentEnum userAgent;
    public ScanConfig withUserAgent(ScanConfigUserAgentEnum userAgent) {
        this.userAgent = userAgent;
        return this;
    }
}