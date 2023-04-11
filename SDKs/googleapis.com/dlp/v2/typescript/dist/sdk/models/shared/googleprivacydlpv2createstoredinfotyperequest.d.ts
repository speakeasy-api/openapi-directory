import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2StoredInfoTypeConfig } from "./googleprivacydlpv2storedinfotypeconfig";
/**
 * Request message for CreateStoredInfoType.
 */
export declare class GooglePrivacyDlpV2CreateStoredInfoTypeRequest extends SpeakeasyBase {
    /**
     * Configuration for stored infoTypes. All fields and subfield are provided by the user. For more information, see https://cloud.google.com/dlp/docs/creating-custom-infotypes.
     */
    config?: GooglePrivacyDlpV2StoredInfoTypeConfig;
    /**
     * Deprecated. This field has no effect.
     */
    locationId?: string;
    /**
     * The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.
     */
    storedInfoTypeId?: string;
}
