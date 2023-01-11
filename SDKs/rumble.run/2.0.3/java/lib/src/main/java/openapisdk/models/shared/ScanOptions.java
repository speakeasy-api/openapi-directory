package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScanOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agent")
    public String agent;
    public ScanOptions withAgent(String agent) {
        this.agent = agent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludes")
    public String excludes;
    public ScanOptions withExcludes(String excludes) {
        this.excludes = excludes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max-group-size")
    public String maxGroupSize;
    public ScanOptions withMaxGroupSize(String maxGroupSize) {
        this.maxGroupSize = maxGroupSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max-host-rate")
    public String maxHostRate;
    public ScanOptions withMaxHostRate(String maxHostRate) {
        this.maxHostRate = maxHostRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max-sockets")
    public String maxSockets;
    public ScanOptions withMaxSockets(String maxSockets) {
        this.maxSockets = maxSockets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nameservers")
    public String nameservers;
    public ScanOptions withNameservers(String nameservers) {
        this.nameservers = nameservers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passes")
    public String passes;
    public ScanOptions withPasses(String passes) {
        this.passes = passes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("probes")
    public String probes;
    public ScanOptions withProbes(String probes) {
        this.probes = probes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate")
    public String rate;
    public ScanOptions withRate(String rate) {
        this.rate = rate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scan-description")
    public String scanDescription;
    public ScanOptions withScanDescription(String scanDescription) {
        this.scanDescription = scanDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scan-frequency")
    public ScanOptionsScanFrequencyEnum scanFrequency;
    public ScanOptions withScanFrequency(ScanOptionsScanFrequencyEnum scanFrequency) {
        this.scanFrequency = scanFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scan-grace-period")
    public String scanGracePeriod;
    public ScanOptions withScanGracePeriod(String scanGracePeriod) {
        this.scanGracePeriod = scanGracePeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scan-name")
    public String scanName;
    public ScanOptions withScanName(String scanName) {
        this.scanName = scanName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scan-start")
    public String scanStart;
    public ScanOptions withScanStart(String scanStart) {
        this.scanStart = scanStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scan-tags")
    public String scanTags;
    public ScanOptions withScanTags(String scanTags) {
        this.scanTags = scanTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screenshots")
    public String screenshots;
    public ScanOptions withScreenshots(String screenshots) {
        this.screenshots = screenshots;
        return this;
    }
    @JsonProperty("targets")
    public String targets;
    public ScanOptions withTargets(String targets) {
        this.targets = targets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tcp-ports")
    public String tcpPorts;
    public ScanOptions withTcpPorts(String tcpPorts) {
        this.tcpPorts = tcpPorts;
        return this;
    }
}