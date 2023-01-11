package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TargetInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connected_target")
    public String connectedTarget;
    public TargetInput withConnectedTarget(String connectedTarget) {
        this.connectedTarget = connectedTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public EnvironmentEnum environment;
    public TargetInput withEnvironment(EnvironmentEnum environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public String[] labels;
    public TargetInput withLabels(String[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TargetInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_type")
    public ReportTypeEnum reportType;
    public TargetInput withReportType(ReportTypeEnum reportType) {
        this.reportType = reportType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scan_profile")
    public ScanProfileEnum scanProfile;
    public TargetInput withScanProfile(ScanProfileEnum scanProfile) {
        this.scanProfile = scanProfile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public SiteInput site;
    public TargetInput withSite(SiteInput site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public TargetTypeEnum type;
    public TargetInput withType(TargetTypeEnum type) {
        this.type = type;
        return this;
    }
}