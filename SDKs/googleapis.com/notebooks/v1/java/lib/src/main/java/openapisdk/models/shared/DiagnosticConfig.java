package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiagnosticConfig
 * Defines flags that are used to run the diagnostic tool
**/
public class DiagnosticConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyHomeFilesFlagEnabled")
    public Boolean copyHomeFilesFlagEnabled;
    public DiagnosticConfig withCopyHomeFilesFlagEnabled(Boolean copyHomeFilesFlagEnabled) {
        this.copyHomeFilesFlagEnabled = copyHomeFilesFlagEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsBucket")
    public String gcsBucket;
    public DiagnosticConfig withGcsBucket(String gcsBucket) {
        this.gcsBucket = gcsBucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packetCaptureFlagEnabled")
    public Boolean packetCaptureFlagEnabled;
    public DiagnosticConfig withPacketCaptureFlagEnabled(Boolean packetCaptureFlagEnabled) {
        this.packetCaptureFlagEnabled = packetCaptureFlagEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relativePath")
    public String relativePath;
    public DiagnosticConfig withRelativePath(String relativePath) {
        this.relativePath = relativePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repairFlagEnabled")
    public Boolean repairFlagEnabled;
    public DiagnosticConfig withRepairFlagEnabled(Boolean repairFlagEnabled) {
        this.repairFlagEnabled = repairFlagEnabled;
        return this;
    }
}