import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2StoredInfoTypeConfig } from "./googleprivacydlpv2storedinfotypeconfig";
/**
 * Request message for UpdateStoredInfoType.
 */
export declare class GooglePrivacyDlpV2UpdateStoredInfoTypeRequest extends SpeakeasyBase {
    /**
     * Configuration for stored infoTypes. All fields and subfield are provided by the user. For more information, see https://cloud.google.com/dlp/docs/creating-custom-infotypes.
     */
    config?: GooglePrivacyDlpV2StoredInfoTypeConfig;
    /**
     * Mask to control which fields get updated.
     */
    updateMask?: string;
}
