import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Color } from "./googleprivacydlpv2color";
import { GooglePrivacyDlpV2SelectedInfoTypes } from "./googleprivacydlpv2selectedinfotypes";
/**
 * Configuration for determining how redaction of images should occur.
 */
export declare class GooglePrivacyDlpV2ImageTransformation extends SpeakeasyBase {
    /**
     * Apply transformation to all findings.
     */
    allInfoTypes?: Record<string, any>;
    /**
     * Apply to all text.
     */
    allText?: Record<string, any>;
    /**
     * Represents a color in the RGB color space.
     */
    redactionColor?: GooglePrivacyDlpV2Color;
    /**
     * Apply transformation to the selected info_types.
     */
    selectedInfoTypes?: GooglePrivacyDlpV2SelectedInfoTypes;
}
