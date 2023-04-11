import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Upgrade Distribution represents metadata about the Upgrade for each operating system (CPE). Some distributions have additional metadata around updates, classifying them into various categories and severities.
 */
export declare class UpgradeDistribution extends SpeakeasyBase {
    /**
     * The operating system classification of this Upgrade, as specified by the upstream operating system upgrade feed. For Windows the classification is one of the category_ids listed at https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ff357803(v=vs.85)
     */
    classification?: string;
    /**
     * Required - The specific operating system this metadata applies to. See https://cpe.mitre.org/specification/.
     */
    cpeUri?: string;
    /**
     * The cve tied to this Upgrade.
     */
    cve?: string[];
    /**
     * The severity as specified by the upstream operating system.
     */
    severity?: string;
}
