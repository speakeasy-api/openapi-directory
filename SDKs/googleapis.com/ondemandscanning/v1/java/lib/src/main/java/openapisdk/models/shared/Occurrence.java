package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Occurrence
 * An instance of an analysis type that has been found on a resource.
**/
public class Occurrence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attestation")
    public AttestationOccurrence attestation;
    public Occurrence withAttestation(AttestationOccurrence attestation) {
        this.attestation = attestation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build")
    public BuildOccurrence build;
    public Occurrence withBuild(BuildOccurrence build) {
        this.build = build;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compliance")
    public ComplianceOccurrence compliance;
    public Occurrence withCompliance(ComplianceOccurrence compliance) {
        this.compliance = compliance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Occurrence withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployment")
    public DeploymentOccurrence deployment;
    public Occurrence withDeployment(DeploymentOccurrence deployment) {
        this.deployment = deployment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discovery")
    public DiscoveryOccurrence discovery;
    public Occurrence withDiscovery(DiscoveryOccurrence discovery) {
        this.discovery = discovery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dsseAttestation")
    public DsseAttestationOccurrence dsseAttestation;
    public Occurrence withDsseAttestation(DsseAttestationOccurrence dsseAttestation) {
        this.dsseAttestation = dsseAttestation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("envelope")
    public Envelope envelope;
    public Occurrence withEnvelope(Envelope envelope) {
        this.envelope = envelope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public ImageOccurrence image;
    public Occurrence withImage(ImageOccurrence image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public OccurrenceKindEnum kind;
    public Occurrence withKind(OccurrenceKindEnum kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Occurrence withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noteName")
    public String noteName;
    public Occurrence withNoteName(String noteName) {
        this.noteName = noteName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("package")
    public PackageOccurrence package_;
    public Occurrence withPackage(PackageOccurrence package_) {
        this.package_ = package_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remediation")
    public String remediation;
    public Occurrence withRemediation(String remediation) {
        this.remediation = remediation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceUri")
    public String resourceUri;
    public Occurrence withResourceUri(String resourceUri) {
        this.resourceUri = resourceUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Occurrence withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upgrade")
    public UpgradeOccurrence upgrade;
    public Occurrence withUpgrade(UpgradeOccurrence upgrade) {
        this.upgrade = upgrade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vulnerability")
    public VulnerabilityOccurrence vulnerability;
    public Occurrence withVulnerability(VulnerabilityOccurrence vulnerability) {
        this.vulnerability = vulnerability;
        return this;
    }
}