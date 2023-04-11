import { SpeakeasyBase } from "../../../internal/utils";
import { AttestationOccurrence } from "./attestationoccurrence";
import { BuildOccurrence } from "./buildoccurrence";
import { ComplianceOccurrence } from "./complianceoccurrence";
import { DeploymentOccurrence } from "./deploymentoccurrence";
import { DiscoveryOccurrence } from "./discoveryoccurrence";
import { DSSEAttestationOccurrence } from "./dsseattestationoccurrence";
import { Envelope } from "./envelope";
import { ImageOccurrence } from "./imageoccurrence";
import { PackageOccurrence } from "./packageoccurrence";
import { UpgradeOccurrence } from "./upgradeoccurrence";
import { VulnerabilityOccurrence } from "./vulnerabilityoccurrence";
/**
 * Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests.
 */
export declare enum OccurrenceKindEnum {
    NoteKindUnspecified = "NOTE_KIND_UNSPECIFIED",
    Vulnerability = "VULNERABILITY",
    Build = "BUILD",
    Image = "IMAGE",
    Package = "PACKAGE",
    Deployment = "DEPLOYMENT",
    Discovery = "DISCOVERY",
    Attestation = "ATTESTATION",
    Upgrade = "UPGRADE",
    Compliance = "COMPLIANCE",
    DsseAttestation = "DSSE_ATTESTATION",
    VulnerabilityAssessment = "VULNERABILITY_ASSESSMENT"
}
/**
 * An instance of an analysis type that has been found on a resource.
 */
export declare class Occurrence extends SpeakeasyBase {
    /**
     * Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for lookup (how to find this attestation if you already know the authority and artifact to be verified) and intent (for which authority this attestation was intended to sign.
     */
    attestation?: AttestationOccurrence;
    /**
     * Details of a build occurrence.
     */
    build?: BuildOccurrence;
    /**
     * An indication that the compliance checks in the associated ComplianceNote were not satisfied for particular resources or a specified reason.
     */
    compliance?: ComplianceOccurrence;
    /**
     * Output only. The time this occurrence was created.
     */
    createTime?: string;
    /**
     * The period during which some deployable was active in a runtime.
     */
    deployment?: DeploymentOccurrence;
    /**
     * Provides information about the analysis status of a discovered resource.
     */
    discovery?: DiscoveryOccurrence;
    /**
     * Deprecated. Prefer to use a regular Occurrence, and populate the Envelope at the top level of the Occurrence.
     */
    dsseAttestation?: DSSEAttestationOccurrence;
    /**
     * MUST match https://github.com/secure-systems-lab/dsse/blob/master/envelope.proto. An authenticated message of arbitrary type.
     */
    envelope?: Envelope;
    /**
     * Details of the derived image portion of the DockerImage relationship. This image would be produced from a Dockerfile with FROM .
     */
    image?: ImageOccurrence;
    /**
     * Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests.
     */
    kind?: OccurrenceKindEnum;
    /**
     * Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     */
    name?: string;
    /**
     * Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests.
     */
    noteName?: string;
    /**
     * Details on how a particular software package was installed on a system.
     */
    package?: PackageOccurrence;
    /**
     * A description of actions that can be taken to remedy the note.
     */
    remediation?: string;
    /**
     * Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, `https://gcr.io/project/image@sha256:123abc` for a Docker image.
     */
    resourceUri?: string;
    /**
     * Output only. The time this occurrence was last updated.
     */
    updateTime?: string;
    /**
     * An Upgrade Occurrence represents that a specific resource_url could install a specific upgrade. This presence is supplied via local sources (i.e. it is present in the mirror and the running system has noticed its availability). For Windows, both distribution and windows_update contain information for the Windows update.
     */
    upgrade?: UpgradeOccurrence;
    /**
     * An occurrence of a severity vulnerability on a resource.
     */
    vulnerability?: VulnerabilityOccurrence;
}
