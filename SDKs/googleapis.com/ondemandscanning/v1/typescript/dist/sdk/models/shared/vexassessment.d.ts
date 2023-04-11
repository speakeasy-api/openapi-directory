import { SpeakeasyBase } from "../../../internal/utils";
import { Justification } from "./justification";
import { RelatedUrl } from "./relatedurl";
import { Remediation } from "./remediation";
/**
 * Provides the state of this Vulnerability assessment.
 */
export declare enum VexAssessmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Affected = "AFFECTED",
    NotAffected = "NOT_AFFECTED",
    Fixed = "FIXED",
    UnderInvestigation = "UNDER_INVESTIGATION"
}
/**
 * VexAssessment provides all publisher provided Vex information that is related to this vulnerability.
 */
export declare class VexAssessment extends SpeakeasyBase {
    /**
     * Holds the MITRE standard Common Vulnerabilities and Exposures (CVE) tracking number for the vulnerability.
     */
    cve?: string;
    /**
     * Contains information about the impact of this vulnerability, this will change with time.
     */
    impacts?: string[];
    /**
     * Justification provides the justification when the state of the assessment if NOT_AFFECTED.
     */
    justification?: Justification;
    /**
     * The VulnerabilityAssessment note from which this VexAssessment was generated. This will be of the form: `projects/[PROJECT_ID]/notes/[NOTE_ID]`.
     */
    noteName?: string;
    /**
     * Holds a list of references associated with this vulnerability item and assessment.
     */
    relatedUris?: RelatedUrl[];
    /**
     * Specifies details on how to handle (and presumably, fix) a vulnerability.
     */
    remediations?: Remediation[];
    /**
     * Provides the state of this Vulnerability assessment.
     */
    state?: VexAssessmentStateEnum;
}
