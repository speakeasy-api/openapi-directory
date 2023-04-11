import { SpeakeasyBase } from "../../../internal/utils";
import { UpgradeDistribution } from "./upgradedistribution";
import { Version } from "./version";
import { WindowsUpdate } from "./windowsupdate";
/**
 * An Upgrade Occurrence represents that a specific resource_url could install a specific upgrade. This presence is supplied via local sources (i.e. it is present in the mirror and the running system has noticed its availability). For Windows, both distribution and windows_update contain information for the Windows update.
 */
export declare class UpgradeOccurrence extends SpeakeasyBase {
    /**
     * The Upgrade Distribution represents metadata about the Upgrade for each operating system (CPE). Some distributions have additional metadata around updates, classifying them into various categories and severities.
     */
    distribution?: UpgradeDistribution;
    /**
     * Required for non-Windows OS. The package this Upgrade is for.
     */
    package?: string;
    /**
     * Version contains structured information about the version of a package.
     */
    parsedVersion?: Version;
    /**
     * Windows Update represents the metadata about the update for the Windows operating system. The fields in this message come from the Windows Update API documented at https://docs.microsoft.com/en-us/windows/win32/api/wuapi/nn-wuapi-iupdate.
     */
    windowsUpdate?: WindowsUpdate;
}
