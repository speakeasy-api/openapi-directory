package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RuntimeInfo
 * Runtime information about workload execution.
**/
public class RuntimeInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approximateUsage")
    public UsageMetrics approximateUsage;
    public RuntimeInfo withApproximateUsage(UsageMetrics approximateUsage) {
        this.approximateUsage = approximateUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diagnosticOutputUri")
    public String diagnosticOutputUri;
    public RuntimeInfo withDiagnosticOutputUri(String diagnosticOutputUri) {
        this.diagnosticOutputUri = diagnosticOutputUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpoints")
    public java.util.Map<String, String> endpoints;
    public RuntimeInfo withEndpoints(java.util.Map<String, String> endpoints) {
        this.endpoints = endpoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputUri")
    public String outputUri;
    public RuntimeInfo withOutputUri(String outputUri) {
        this.outputUri = outputUri;
        return this;
    }
}