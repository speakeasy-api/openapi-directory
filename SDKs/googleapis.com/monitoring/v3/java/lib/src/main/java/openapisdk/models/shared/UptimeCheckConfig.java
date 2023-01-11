package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UptimeCheckConfig
 * This message configures which resources and services to monitor for availability.
**/
public class UptimeCheckConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkerType")
    public UptimeCheckConfigCheckerTypeEnum checkerType;
    public UptimeCheckConfig withCheckerType(UptimeCheckConfigCheckerTypeEnum checkerType) {
        this.checkerType = checkerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentMatchers")
    public ContentMatcher[] contentMatchers;
    public UptimeCheckConfig withContentMatchers(ContentMatcher[] contentMatchers) {
        this.contentMatchers = contentMatchers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public UptimeCheckConfig withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpCheck")
    public HttpCheck httpCheck;
    public UptimeCheckConfig withHttpCheck(HttpCheck httpCheck) {
        this.httpCheck = httpCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internalCheckers")
    public InternalChecker[] internalCheckers;
    public UptimeCheckConfig withInternalCheckers(InternalChecker[] internalCheckers) {
        this.internalCheckers = internalCheckers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isInternal")
    public Boolean isInternal;
    public UptimeCheckConfig withIsInternal(Boolean isInternal) {
        this.isInternal = isInternal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitoredResource")
    public MonitoredResource monitoredResource;
    public UptimeCheckConfig withMonitoredResource(MonitoredResource monitoredResource) {
        this.monitoredResource = monitoredResource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UptimeCheckConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public String period;
    public UptimeCheckConfig withPeriod(String period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceGroup")
    public ResourceGroup resourceGroup;
    public UptimeCheckConfig withResourceGroup(ResourceGroup resourceGroup) {
        this.resourceGroup = resourceGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectedRegions")
    public UptimeCheckConfigSelectedRegionsEnum[] selectedRegions;
    public UptimeCheckConfig withSelectedRegions(UptimeCheckConfigSelectedRegionsEnum[] selectedRegions) {
        this.selectedRegions = selectedRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tcpCheck")
    public TcpCheck tcpCheck;
    public UptimeCheckConfig withTcpCheck(TcpCheck tcpCheck) {
        this.tcpCheck = tcpCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public String timeout;
    public UptimeCheckConfig withTimeout(String timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userLabels")
    public java.util.Map<String, String> userLabels;
    public UptimeCheckConfig withUserLabels(java.util.Map<String, String> userLabels) {
        this.userLabels = userLabels;
        return this;
    }
}