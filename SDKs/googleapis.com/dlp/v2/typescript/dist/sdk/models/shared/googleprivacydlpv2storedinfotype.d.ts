import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2StoredInfoTypeVersion } from "./googleprivacydlpv2storedinfotypeversion";
/**
 * StoredInfoType resource message that contains information about the current version and any pending updates.
 */
export declare class GooglePrivacyDlpV2StoredInfoType extends SpeakeasyBase {
    /**
     * Version of a StoredInfoType, including the configuration used to build it, create timestamp, and current state.
     */
    currentVersion?: GooglePrivacyDlpV2StoredInfoTypeVersion;
    /**
     * Resource name.
     */
    name?: string;
    /**
     * Pending versions of the stored info type. Empty if no versions are pending.
     */
    pendingVersions?: GooglePrivacyDlpV2StoredInfoTypeVersion[];
}
