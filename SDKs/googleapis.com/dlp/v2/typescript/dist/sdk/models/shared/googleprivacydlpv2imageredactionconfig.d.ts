import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Color } from "./googleprivacydlpv2color";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
/**
 * Configuration for determining how redaction of images should occur.
 */
export declare class GooglePrivacyDlpV2ImageRedactionConfig extends SpeakeasyBase {
    /**
     * Type of information detected by the API.
     */
    infoType?: GooglePrivacyDlpV2InfoType;
    /**
     * If true, all text found in the image, regardless whether it matches an info_type, is redacted. Only one should be provided.
     */
    redactAllText?: boolean;
    /**
     * Represents a color in the RGB color space.
     */
    redactionColor?: GooglePrivacyDlpV2Color;
}
