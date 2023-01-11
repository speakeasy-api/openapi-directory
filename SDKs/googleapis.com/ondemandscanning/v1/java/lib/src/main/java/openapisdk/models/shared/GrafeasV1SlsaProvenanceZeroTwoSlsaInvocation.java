package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation
 * Identifies the event that kicked off the build.
**/
public class GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configSource")
    public GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource configSource;
    public GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation withConfigSource(GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource configSource) {
        this.configSource = configSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public java.util.Map<String, Object> environment;
    public GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation withEnvironment(java.util.Map<String, Object> environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, Object> parameters;
    public GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation withParameters(java.util.Map<String, Object> parameters) {
        this.parameters = parameters;
        return this;
    }
}