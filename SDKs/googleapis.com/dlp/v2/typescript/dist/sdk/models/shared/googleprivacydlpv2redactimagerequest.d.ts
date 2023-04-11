import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2ByteContentItem } from "./googleprivacydlpv2bytecontentitem";
import { GooglePrivacyDlpV2ImageRedactionConfig } from "./googleprivacydlpv2imageredactionconfig";
import { GooglePrivacyDlpV2InspectConfig } from "./googleprivacydlpv2inspectconfig";
/**
 * Request to search for potentially sensitive info in an image and redact it by covering it with a colored rectangle.
 */
export declare class GooglePrivacyDlpV2RedactImageRequest extends SpeakeasyBase {
    /**
     * Container for bytes to inspect or redact.
     */
    byteItem?: GooglePrivacyDlpV2ByteContentItem;
    /**
     * The configuration for specifying what content to redact from images.
     */
    imageRedactionConfigs?: GooglePrivacyDlpV2ImageRedactionConfig[];
    /**
     * Whether the response should include findings along with the redacted image.
     */
    includeFindings?: boolean;
    /**
     * Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used.
     */
    inspectConfig?: GooglePrivacyDlpV2InspectConfig;
    /**
     * Deprecated. This field has no effect.
     */
    locationId?: string;
}
