import { SpeakeasyBase } from "../../../internal/utils";
import { RelatedUrl } from "./relatedurl";
/**
 * The type of remediation that can be applied.
 */
export declare enum RemediationRemediationTypeEnum {
    RemediationTypeUnspecified = "REMEDIATION_TYPE_UNSPECIFIED",
    Mitigation = "MITIGATION",
    NoFixPlanned = "NO_FIX_PLANNED",
    NoneAvailable = "NONE_AVAILABLE",
    VendorFix = "VENDOR_FIX",
    Workaround = "WORKAROUND"
}
/**
 * Specifies details on how to handle (and presumably, fix) a vulnerability.
 */
export declare class Remediation extends SpeakeasyBase {
    /**
     * Contains a comprehensive human-readable discussion of the remediation.
     */
    details?: string;
    /**
     * The type of remediation that can be applied.
     */
    remediationType?: RemediationRemediationTypeEnum;
    /**
     * Metadata for any related URL information.
     */
    remediationUri?: RelatedUrl;
}
