package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SlsaProvenanceZeroTwo
 * See full explanation of fields at slsa.dev/provenance/v0.2.
**/
public class SlsaProvenanceZeroTwo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildConfig")
    public java.util.Map<String, Object> buildConfig;
    public SlsaProvenanceZeroTwo withBuildConfig(java.util.Map<String, Object> buildConfig) {
        this.buildConfig = buildConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildType")
    public String buildType;
    public SlsaProvenanceZeroTwo withBuildType(String buildType) {
        this.buildType = buildType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("builder")
    public GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder builder;
    public SlsaProvenanceZeroTwo withBuilder(GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder builder) {
        this.builder = builder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invocation")
    public GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation invocation;
    public SlsaProvenanceZeroTwo withInvocation(GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation invocation) {
        this.invocation = invocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("materials")
    public GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial[] materials;
    public SlsaProvenanceZeroTwo withMaterials(GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial[] materials) {
        this.materials = materials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata metadata;
    public SlsaProvenanceZeroTwo withMetadata(GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
}